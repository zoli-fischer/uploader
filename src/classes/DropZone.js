import Events from './Events';
import Obj from './Obj';

const events = [
    'drop',
    'dragenter',
    'dragleave',
    'dragover',
];

export default class DropZone extends Events {
    constructor(options) {
        super(events);
        this.options = Obj.assign({
            elements: null,
        }, options);

        this.setElements(this.options.elements);
    }

    setElements(elements) {
        this.clearElements();
        this.options.elements = elements;
        this.elements = this.options.elements;
        Obj.values(this.elements instanceof Array ? this.elements : [this.elements]).forEach((element) => {
            if (element.addEventListener) {
                element.addEventListener('drop', this._onDrop.bind(this), false);
                element.addEventListener('dragover', this._onDragOver.bind(this), false);
                element.addEventListener('dragleave', this._onDragLeave.bind(this), false);
                element.addEventListener('dragenter', this._onDragEnter.bind(this), false);
            }
        });
    }

    clearElements() {
        this.elements = this.options.elements;
        if (this.elements) {
            Obj.values(this.elements instanceof Array ? this.elements : [this.elements]).forEach((element) => {
                if (element.removeEventListener) {
                    element.removeEventListener('drop', this._onDrop.bind(this));
                    element.removeEventListener('dragover', this._onDragOver.bind(this));
                    element.removeEventListener('dragleave', this._onDragLeave.bind(this));
                    element.removeEventListener('dragenter', this._onDragEnter.bind(this));
                }
            });
        }
    }

    destroy() {
        this.clearElements();
    }

    _onDrop(event) {
        const { dataTransfer } = event;
        if (dataTransfer && typeof dataTransfer.types === 'object' && Obj.indexOf(dataTransfer.types, 'Files') !== -1) {
            event.preventDefault();
            this._getDroppedFiles(dataTransfer).then(files => {
                this.trigger(event, files);
            });
        }
    }

    _onDragOver(event) {
        const { dataTransfer } = event;
        if (dataTransfer && typeof dataTransfer.types === 'object' && Obj.indexOf(dataTransfer.types, 'Files') !== -1) {
            event.preventDefault();
            dataTransfer.dropEffect = 'copy';
            this.trigger(event, event);
        }
    }

    _onDragLeave(event) {
        const { dataTransfer } = event;
        if (dataTransfer && typeof dataTransfer.types === 'object' && Obj.indexOf(dataTransfer.types, 'Files') !== -1) {
            event.preventDefault();
            dataTransfer.dropEffect = '';
            this.trigger(event, event);
        }
    }

    _onDragEnter(event) {
        const { dataTransfer } = event;
        if (dataTransfer && typeof dataTransfer.types === 'object' && Obj.indexOf(dataTransfer.types, 'Files') !== -1) {
            event.preventDefault();
            dataTransfer.dropEffect = 'copy';
            this.trigger(event, event);
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
