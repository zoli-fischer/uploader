import Query from './Query';

export default class FileInput {
    constructor(options) {
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
        const entries = this.$input.prop('webkitEntries') || this.$input.prop('entries');
        const { files } = this.$input[0];
        console.log(entries);
        console.log(files);
    }
}
