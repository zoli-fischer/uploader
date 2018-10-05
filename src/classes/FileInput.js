import Query from './Query';
import Events from './Events';

const events = [
    'files-added',
];

export default class FileInput extends Events {
    constructor(options) {
        super(events);
        this.options = Object.assign({
            multiple: true,
        }, options);
        this.$form = Query('<form style="position: fixed; left: -10000px; top: -10000px; visibility: hidden;"><input type="file" /></form>');
        this.$input = this.$form.find('input');
        this.$form.appendTo(this.form);

        this.$input.on('change', () => {
            this.getFileInputFiles();
        });

        this.multiple(this.options.multiple);
    }

    multiple(...args) {
        if (args.length === 1) {
            this.options.multiple = args[0];
        }
        this.$input.prop('multiple', this.options.multiple === true ? this.options.multiple : undefined);
        return this.$input.prop('multiple');
    }

    open() {
        this.$input.click();
    }

    getFileInputFiles() {
        const files = [];
        for (let i = 0; i < this.$input[0].files.length; i++) {
            files.push(this.$input[0].files[i]);
        }
        this.trigger('files-added', files);
    }
}
