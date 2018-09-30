import Options from "./Options";
import Support from "./Support";
import FileInput from "./FileInput";

export default class Uploader {
    constructor( options ) {
        this.options = new Options(options);
        this.support = new Support();
        this.fileInput = new FileInput();

        console.log(this.options);
        console.log(this.support);
    }

    select() {
        this.fileInput.open();
    }
}
