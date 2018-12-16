import Options from './classes/Options';
import Support from './classes/Support';
import FileInput from './classes/FileInput';
import DropZone from './classes/DropZone';
import Events from './classes/Events';

const events = [
    'drop',
    'dragenter',
    'dragleave',
    'dragover',
];

export default class Uploader extends Events {
    constructor(options) {
        super(events);
        this.options = new Options(options);
        this.support = new Support();
        this.fileInput = new FileInput({
            multiple: this.options.multiple,
        });
        this.DropZone = new DropZone({
            elements: this.options.dropZone,
        });

        this.files = [];

        this._setEvents();
        console.log(this.options);
        console.log(this.support);
    }

    destroy() {
        this.DropZone.destroy();
        this._clearEvents(this.DropZone);
    }

    select() {
        this.fileInput.directory(false);
        this.fileInput.open();
    }

    selectFolder() {
        this.fileInput.directory(true);
        this.fileInput.open();
    }

    _setEvents() {
        this.DropZone.events().forEach(event => {
            this.DropZone.on(event, (...args) => {
                if (event !== 'drop') {
                    this.trigger.apply(this, args);
                }
            });
        });

        this.DropZone.on('drop', (event, files) => {
            const _files = this._parseFiles(files);
            this.trigger('drop', _files);
            this._addFiles(_files);
        });

        this.fileInput.on('files-added', (event, files) => {
            const _files = this._parseFiles(files);
            this._addFiles(_files);
        });
    }

    _parseFiles(files) {
        return files.map(file => {
            let relativePath = file.relativePath || file.relativepath || file.webkitRelativePath;
            const relativePathParts = relativePath.split('/');
            if (relativePathParts.length > 1) {
                relativePathParts.pop();
            }
            relativePath = relativePathParts.join('/') + '/';
            relativePath = relativePath === '/' ? '' : relativePath;
            file.relativePath = relativePath;
            return file;
        });
    }

    _addFiles(files) {
        this.files = [...this.files, ...files];
        console.log(this.files);
    }

    _clearEvents() {
        this.DropZone.off('drop');
    }
}
