import Options from "./classes/Options";
import Support from "./classes/Support";
import FileInput from "./classes/FileInput";
import DropZone from "./classes/DropZone";

export default class Uploader {
    constructor( options ) {
        this.options = new Options(options);
        this.support = new Support();
        this.fileInput = new FileInput({
            multiple: this.options.multiple,
        });
        this.DropZone = new DropZone({
            elements: this.options.dropZone,
        });

        console.log(this.options);
        console.log(this.support);
    }

    select() {
        this.fileInput.open();
    }
}
