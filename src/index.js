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

        this._setEvents();
        console.log(this.options);
        console.log(this.support);
    }

    destroy() {
        this.DropZone.destroy();
        this._clearEvents(this.DropZone);
    }

    select() {
        this.fileInput.open();
    }

    _setEvents() {
        this.DropZone.events().forEach(event => {
            this.DropZone.on(event, (...args) => {
                this.trigger.apply(this, args);
            });
        });

        this.fileInput.on('files-added', (event, files) => {
            console.log('files');
            console.log(files);
        });
    }

    _clearEvents() {
        this.DropZone.off('drop');
    }
}
