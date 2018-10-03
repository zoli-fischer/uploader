import Query from "./Query";

export default class DropZone {
    constructor(options) {
        this.options = Object.assign({
            elements: null,
        }, options);

        this.setElements(this.options.elements);
    }

    setElements(elements) {
        this.clearElements();
        this.options.elements = elements;
        this.elements = Query(this.options.elements);
        this.elements.on('drop', this._onDrop.bind(this));
        this.elements.on('dragover', this._onDragOver.bind(this));
        this.elements.on('dragleave', this._onDragLeave.bind(this));
        this.elements.on('dragenter', this._onDragEnter.bind(this));
    }

    clearElements() {
        if (this.elements) {
            this.elements.off('drop', this._onDrop);
            this.elements.off('dragover', this._onDragOver);
            this.elements.off('dragleave', this._onDragLeave);
            this.elements.off('dragenter', this._onDragEnter);
        }
    }

    _onDrop(event) {
        const dataTransfer = event.dataTransfer;
        if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
            event.preventDefault();
            this._getDroppedFiles(dataTransfer).then(files => {
                console.log(files);
            });
        }
    }

    _onDragOver(event) {
        const dataTransfer = event.dataTransfer;
        if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
            event.preventDefault();
            dataTransfer.dropEffect = 'copy';
        }
    }

    _onDragLeave(event) {
        const dataTransfer = event.dataTransfer;
        if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
            event.preventDefault();
            dataTransfer.dropEffect = '';
        }
    }

    _onDragEnter(event) {
        const dataTransfer = event.dataTransfer;
        if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
            event.preventDefault();
            dataTransfer.dropEffect = 'copy';
        }
    }

    _getDroppedFiles(dataTransfer) {
        dataTransfer = dataTransfer || {};
        const items = dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
            const itemsList = [];
            Object.values(items).forEach(item => {
                const entry = item.webkitGetAsEntry() || item.getAsEntry();
                entry._file = item.getAsFile();
                itemsList.push(entry);
            })
            return this._handleFileTreeEntries(itemsList);
        }
        return new Promise((resolve, reject) => {
            resolve(dataTransfer.files);
        });
    }

    _handleFileTreeEntries(entries, path) {
        var promises = [];
        entries.forEach(entry => {
            promises.push(this._handleFileTreeEntry(entry, path));
        });

        const promise = Promise.all(promises)
        return promise.then(files => {
            const _files = [];
            files.forEach(file => {
                if (file instanceof Array) {
                    file.forEach(file => {
                        _files.push(file);
                    });
                } else {
                    _files.push(file);
                }
            });
            return _files;
        });
    }

    _handleFileTreeEntry(entry, path) {
        path = path || '';
        return new Promise((resolve, reject) => {
            const errorHandler = function (e) {
                if (e && !e.entry) {
                    e.entry = entry;
                }
                resolve(e);
            }

            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    resolve(entry._file);
                } else {
                    entry.file(file => {
                        file.relativePath = path;
                        resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                const dirReader = entry.createReader();
                dirReader.readEntries(entries => {
                    this._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).then(files => {
                        const _files = [];
                        files.forEach(file => {
                            if (file instanceof Array) {
                                file.forEach(file => {
                                    _files.push(file);
                                });
                            } else {
                                _files.push(file);
                            }
                        });
                        resolve(_files);
                    }, errorHandler);
                }, errorHandler);
            }
        });
    }

}