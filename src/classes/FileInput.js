import Query from "./Query";

export default class FileInput {
    constructor(options) {
        this.options = Object.assign({
            multiple: true,
        }, options);
        this.$form = Query('<form style="position: fixed; left: -10000px; top: -10000px; visibility: hidden;"><input type="file" /></form>');
        this.$input = this.$form.find('input');
        this.$form.appendTo(this.form);

        this.$input.on('change', (e) => {
            this.getFileInputFiles();
        });

        this.multiple(this.options.multiple);
    }

    multiple(...args) {
        if (args.length == 1) {
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
        const files = this.$input[0].files;
        console.log(entries);
        console.log(files);
        /*
            value;
        if (entries && entries.length) {
            return this._handleFileTreeEntries(entries);
        }
        files = $.makeArray(fileInput.prop('files'));
        if (!files.length) {
            value = fileInput.prop('value');
            if (!value) {
                return $.Deferred().resolve([]).promise();
            }
            // If the files property is not available, the browser does not
            // support the File API and we add a pseudo File object with
            // the input value as name with path information removed:
            files = [{ name: value.replace(/^.*\\/, '') }];
        } else if (files[0].name === undefined && files[0].fileName) {
            // File normalization for Safari 4 and Firefox 3:
            $.each(files, function (index, file) {
                file.name = file.fileName;
                file.size = file.fileSize;
            });
        }
        return $.Deferred().resolve(files).promise();
        */
    }
}