import Events from './Events';
import Obj from './Obj';

const events = [
    'files-added',
];

export default class FileInput extends Events {
    constructor(options) {
        super(events);
        this.options = Obj.assign({
            multiple: true,
        }, options);
        this.form = document.createElement('form');
        this.form.style.position = 'fixed';
        this.form.style.left = '-10000px';
        this.form.style.top = '-10000px';
        this.form.style.visibility = 'hidden';
        this.input = document.createElement('input');
        this.input.type = 'file';
        this.form.appendChild(this.input);
        document.body.appendChild(this.form);
        this.input.addEventListener('change', () => { this.getFileInputFiles(); }, false);

        this.multiple(this.options.multiple);
    }

    multiple(...args) {
        if (args.length === 1) {
            this.options.multiple = args[0];
        }
        this.input.multiple = this.options.multiple === true ? this.options.multiple : undefined;
        return this.input.multiple;
    }

    open() {
        this.input.click();
    }

    getFileInputFiles() {
        const files = [];
        for (let i = 0; i < this.input.files.length; i++) {
            files.push(this.input.files[i]);
        }
        this.trigger('files-added', files);
    }
}
