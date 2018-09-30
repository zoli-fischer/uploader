(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("index", [], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _Options = __webpack_require__(2);

var _Options2 = _interopRequireDefault(_Options);

var _Support = __webpack_require__(1);

var _Support2 = _interopRequireDefault(_Support);

var _FileInput = __webpack_require__(3);

var _FileInput2 = _interopRequireDefault(_FileInput);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Uploader = function () {
    function Uploader(options) {
        _classCallCheck(this, Uploader);

        this.options = new _Options2.default(options);
        this.support = new _Support2.default();
        this.fileInput = new _FileInput2.default();

        console.log(this.options);
        console.log(this.support);
    }

    _createClass(Uploader, [{
        key: "select",
        value: function select() {
            this.fileInput.open();
        }
    }]);

    return Uploader;
}();

exports.default = Uploader;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Element = __webpack_require__(4);

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Support = function Support() {
    _classCallCheck(this, Support);

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    this.fileInput = !(new RegExp(
    // Handle devices which give false positives for the feature detection:
    '(Android (1\\.[0156]|2\\.[01]))' + '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' + '|(w(eb)?OSBrowser)|(webOS)' + '|(Kindle/(1\\.0|2\\.[05]|3\\.0))').test(window.navigator.userAgent) || _Element2.default.create('<input type="file" />').disabled);

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    this.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    this.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    this.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
};

exports.default = Support;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Options = function Options(options) {
    var _this = this;

    _classCallCheck(this, Options);

    var optionsList = Object.assign({
        // The drop target element(s), by the default the complete document.
        // Set to null to disable drag & drop support:
        dropZone: document,
        // The paste target element(s), by the default the complete document.
        // Set to null to disable paste support:
        pasteZone: document,
        // The file input field(s), that are listened to for change events.
        // If undefined, it is set to the file input fields inside
        // of the widget element on plugin initialization.
        // Set to null to disable the change listener.
        fileInput: undefined,
        // By default, the file input field is replaced with a clone after
        // each input field change event. This is required for iframe transport
        // queues and allows change events to be fired for the same file
        // selection, but can be disabled by setting the following option to false:
        replaceFileInput: true,
        // The parameter name for the file form data (the request argument name).
        // If undefined or empty, the name property of the file input field is
        // used, or "files[]" if the file input name property is also empty,
        // can be a string or an array of strings:
        paramName: undefined,
        // By default, each file of a selection is uploaded using an individual
        // request for XHR type uploads. Set to false to upload file
        // selections in one request each:
        singleFileUploads: true,
        // To limit the number of files uploaded with one XHR request,
        // set the following option to an integer greater than 0:
        limitMultiFileUploads: undefined,
        // The following option limits the number of files uploaded with one
        // XHR request to keep the request size under or equal to the defined
        // limit in bytes:
        limitMultiFileUploadSize: undefined,
        // Multipart file uploads add a number of bytes to each uploaded file,
        // therefore the following option adds an overhead for each file used
        // in the limitMultiFileUploadSize configuration:
        limitMultiFileUploadSizeOverhead: 512,
        // Set the following option to true to issue all file upload requests
        // in a sequential order:
        sequentialUploads: false,
        // To limit the number of concurrent uploads,
        // set the following option to an integer greater than 0:
        limitConcurrentUploads: undefined,
        // Set the following option to true to force iframe transport uploads:
        forceIframeTransport: false,
        // Set the following option to the location of a redirect url on the
        // origin server, for cross-domain iframe transport uploads:
        redirect: undefined,
        // The parameter name for the redirect url, sent as part of the form
        // data and set to 'redirect' if this option is empty:
        redirectParamName: undefined,
        // Set the following option to the location of a postMessage window,
        // to enable postMessage transport uploads:
        postMessage: undefined,
        // By default, XHR file uploads are sent as multipart/form-data.
        // The iframe transport is always using multipart/form-data.
        // Set to false to enable non-multipart XHR uploads:
        multipart: true,
        // To upload large files in smaller chunks, set the following option
        // to a preferred maximum chunk size. If set to 0, null or undefined,
        // or the browser does not support the required Blob API, files will
        // be uploaded as a whole.
        maxChunkSize: undefined,
        // When a non-multipart upload or a chunked multipart upload has been
        // aborted, this option can be used to resume the upload by setting
        // it to the size of the already uploaded bytes. This option is most
        // useful when modifying the options object inside of the "add" or
        // "send" callbacks, as the options are cloned for each file upload.
        uploadedBytes: undefined,
        // By default, failed (abort or error) file uploads are removed from the
        // global progress calculation. Set the following option to false to
        // prevent recalculating the global progress data:
        recalculateProgress: true,
        // Interval in milliseconds to calculate and trigger progress events:
        progressInterval: 100,
        // Interval in milliseconds to calculate progress bitrate:
        bitrateInterval: 500,
        // By default, uploads are started automatically when adding files:
        autoUpload: true
    }, options);
    Object.keys(optionsList).forEach(function (key) {
        _this[key] = optionsList[key];
    });
};

exports.default = Options;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _Element = __webpack_require__(4);

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var FileInput = function () {
    function FileInput(options) {
        _classCallCheck(this, FileInput);

        this.options = Object.assign({
            multiple: true
        }, options);
        this.form = _Element2.default.create('<form style="position: fixed; left: -10000px; top: -10000px; visibility: hidden;"><input type="file" /></form>');
        this.input = this.form.querySelector('input');
        document.body.appendChild(this.form);

        this.multiple(this.options.multiple);
    }

    _createClass(FileInput, [{
        key: 'multiple',
        value: function multiple() {
            if (arguments.length == 1) {
                this.options.multiple = arguments.length <= 0 ? undefined : arguments[0];
            }
            this.input.multiple = this.options.multiple === true ? this.options.multiple : undefined;
            return this.options.multiple;
        }
    }, {
        key: 'open',
        value: function open() {
            this.input.click();
        }
    }]);

    return FileInput;
}();

exports.default = FileInput;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Element = function () {
    function Element() {
        _classCallCheck(this, Element);
    }

    _createClass(Element, null, [{
        key: 'create',
        value: function create(html) {
            var template = document.createElement('template');
            html = html.trim();
            template.innerHTML = html;
            return template.content.firstChild;
        }
    }]);

    return Element;
}();

exports.default = Element;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map