export default class Options {
    constructor(options) {
        const optionsList = Object.assign({
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: document,
            /*
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            */
            // By default, uploads are started automatically when adding files:
            autoUpload: true,
            multiple: true,
        }, options);
        Object.keys(optionsList).forEach(key => {
            this[key] = optionsList[key];
        });
    }
}
