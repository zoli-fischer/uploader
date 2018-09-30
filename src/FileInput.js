import Element from "./Element";

export default class FileInput {
    constructor(options) {
        this.options = Object.assign({
            multiple: true,
        }, options);
        this.form = Element.create('<form style="position: fixed; left: -10000px; top: -10000px; visibility: hidden;"><input type="file" /></form>');
        this.input = this.form.querySelector('input');
        document.body.appendChild(this.form);

        this.multiple(this.options.multiple);
    }

    multiple(...args) {
        if (args.length == 1) {
            this.options.multiple = args[0];
        }
        this.input.multiple = this.options.multiple === true ? this.options.multiple : undefined;
        return this.options.multiple;
    }

    open() {
        this.input.click();
    }
}