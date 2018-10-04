import Query from './Query';
import Events from './Events';

const events = [
    'drop',
    'dragenter',
    'dragleave',
    'dragover',
];

export default class DropZone extends Events {
    constructor(options) {
        super(events);
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

    destroy() {
        this.clearElements();
    }

    _onDrop(event) {
        const { dataTransfer } = event;
        if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
            event.preventDefault();
            this._getDroppedFiles(dataTransfer).then(files => {
                this.trigger('drop', event, files);
            });
        }
    }

    _onDragOver(event) {
        const { dataTransfer } = event;
        if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
            event.preventDefault();
            dataTransfer.dropEffect = 'copy';
            this.trigger('dragover', event);
        }
    }

    _onDragLeave(event) {
        const { dataTransfer } = event;
        if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
            event.preventDefault();
            dataTransfer.dropEffect = '';
            this.trigger('dragleave', event);
        }
    }

    _onDragEnter(event) {
        const { dataTransfer } = event;
        if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
            event.preventDefault();
            dataTransfer.dropEffect = 'copy';
            this.trigger('dragenter', event);
        }
    }

    _getDroppedFiles(dataTransfer) {
        dataTransfer = dataTransfer || {};
        const { items } = dataTransfer;
        if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
            const itemsList = [];
            Object.values(items).forEach(item => {
                const entry = item.webkitGetAsEntry() || item.getAsEntry();
                entry._file = item.getAsFile();
                itemsList.push(entry);
            });
            return this._handleFileTreeEntries(itemsList);
        }
        return new Promise((resolve) => {
            resolve(dataTransfer.files);
        });
    }

    _handleFileTreeEntries(entries, path) {
        const promises = [];
        entries.forEach(entry => {
            promises.push(this._handleFileTreeEntry(entry, path));
        });

        const promise = Promise.all(promises);
        return promise.then(files => {
            const _files = [];
            files.forEach(file => {
                if (file instanceof Array) {
                    file.forEach(_file => {
                        _files.push(_file);
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
        return new Promise((resolve) => {
            const errorHandler = e => {
                if (e && !e.entry) {
                    e.entry = entry;
                }
                resolve(e);
            };

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
                        path + entry.name + '/',
                    ).then(files => {
                        const _files = [];
                        files.forEach(file => {
                            if (file instanceof Array) {
                                file.forEach(_file => {
                                    _files.push(_file);
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
