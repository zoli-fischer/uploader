import Query from './Query';

export default class Support {
    constructor() {
        // Detect file input support, based on
        // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
        this.fileInput = !(new RegExp(
            // Handle devices which give false positives for the feature detection:
            '(Android (1\\.[0156]|2\\.[01]))'
            + '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)'
            + '|(w(eb)?OSBrowser)|(webOS)'
            + '|(Kindle/(1\\.0|2\\.[05]|3\\.0))',
        ).test(window.navigator.userAgent) || Query('<input type="file" />').prop('disabled'));

        // The FileReader API is not actually used, but works as feature detection,
        // as some Safari versions (5?) support XHR file uploads via the FormData API,
        // but not non-multipart XHR file uploads.
        // window.XMLHttpRequestUpload is not available on IE10, so we check for
        // window.ProgressEvent instead to detect XHR2 file upload capability:
        this.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
        this.xhrFormDataFileUpload = !!window.FormData;
    }
}
