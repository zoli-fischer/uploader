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


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var _Options = __webpack_require__(1);

var _Options2 = _interopRequireDefault(_Options);

var _Support = __webpack_require__(2);

var _Support2 = _interopRequireDefault(_Support);

var _FileInput = __webpack_require__(4);

var _FileInput2 = _interopRequireDefault(_FileInput);

var _DropZone = __webpack_require__(5);

var _DropZone2 = _interopRequireDefault(_DropZone);

var _Events2 = __webpack_require__(6);

var _Events3 = _interopRequireDefault(_Events2);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var events = ['drop', 'dragenter', 'dragleave', 'dragover'];

var Uploader = function (_Events) {
    _inherits(Uploader, _Events);

    function Uploader(options) {
        _classCallCheck(this, Uploader);

        var _this = _possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call(this, events));

        _this.options = new _Options2.default(options);
        _this.support = new _Support2.default();
        _this.fileInput = new _FileInput2.default({
            multiple: _this.options.multiple
        });
        _this.DropZone = new _DropZone2.default({
            elements: _this.options.dropZone
        });

        _this._setEvents();
        console.log(_this.options);
        console.log(_this.support);
        return _this;
    }

    _createClass(Uploader, [{
        key: 'destroy',
        value: function destroy() {
            this.DropZone.destroy();
            this._clearEvents(this.DropZone);
        }
    }, {
        key: 'select',
        value: function select() {
            this.fileInput.open();
        }
    }, {
        key: '_setEvents',
        value: function _setEvents() {
            var _this2 = this;

            ['drop', 'dragenter', 'dragleave', 'dragover'].forEach(function (event) {
                _this2.DropZone.on(event, function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    _this2.trigger.apply(_this2, [event].concat(args));
                });
            });
        }
    }, {
        key: '_clearEvents',
        value: function _clearEvents() {
            this.DropZone.off('drop');
        }
    }]);

    return Uploader;
}(_Events3.default);

exports.default = Uploader;

/***/ }),
/* 1 */
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
        /*
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
        */
        // By default, uploads are started automatically when adding files:
        autoUpload: true,
        multiple: true
    }, options);
    Object.keys(optionsList).forEach(function (key) {
        _this[key] = optionsList[key];
    });
};

exports.default = Options;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Query = __webpack_require__(3);

var _Query2 = _interopRequireDefault(_Query);

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
    '(Android (1\\.[0156]|2\\.[01]))' + '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' + '|(w(eb)?OSBrowser)|(webOS)' + '|(Kindle/(1\\.0|2\\.[05]|3\\.0))').test(window.navigator.userAgent) || (0, _Query2.default)('<input type="file" />').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    this.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    this.xhrFormDataFileUpload = !!window.FormData;
};

exports.default = Support;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

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

var QueryObject = function () {
    function QueryObject(selector) {
        var _this = this;

        _classCallCheck(this, QueryObject);

        var elements = [];
        if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') {
            if (selector instanceof QueryObject) {
                selector.forEach(function (element) {
                    elements.push(element);
                });
            } else {
                elements = Array.isArray(selector) ? selector : [selector];
            }
        } else if (typeof selector === 'string') {
            selector = selector.trim();
            if (selector.indexOf('<') === 0) {
                var template = document.createElement('template');
                template.innerHTML = selector;
                elements = [template.content ? template.content.firstElementChild || template.content.firstChild : template.firstElementChild || template.firstChild];
            } else {
                Object.values(document.querySelectorAll(selector)).forEach(function (queryElement) {
                    elements.push(queryElement);
                });
            }
        }

        this.elements = [];
        var i = 0;
        Object.values(elements).forEach(function (element) {
            if (element instanceof Element || element instanceof Window || element instanceof Document) {
                _this.elements.push(element);
                _this[i++] = element;
            }
            if (element instanceof Element && !document.body.contains(element)) {
                document.body.appendChild(element);
                element.remove();
            }
        });
        this.length = this.elements.length;
    }

    _createClass(QueryObject, [{
        key: 'find',
        value: function find(selector) {
            var elements = [];
            Object.values(this.elements).forEach(function (element) {
                Object.values(element.querySelectorAll(selector)).forEach(function (queryElement) {
                    elements.push(queryElement);
                });
            });
            return new QueryObject(elements);
        }
    }, {
        key: 'appendTo',
        value: function appendTo(selector) {
            var _this2 = this;

            var parents = false;
            if (selector instanceof Element) {
                parents = new QueryObject(selector);
            } else if (selector instanceof QueryObject) {
                parents = selector;
            } else if (typeof selector === 'string') {
                parents = new QueryObject(selector);
            }

            if (parents) {
                parents.forEach(function (parentElement) {
                    Object.values(_this2.elements).forEach(function (element) {
                        parentElement.appendChild(element);
                    });
                });
            }
            return this;
        }
    }, {
        key: 'detach',
        value: function detach() {
            Object.values(this.elements).forEach(function (element) {
                element.remove();
            });
            return this;
        }
    }, {
        key: 'css',
        value: function css(styles, value) {
            var css = {};
            if (typeof styles === 'string') {
                if (typeof value !== 'undefined') {
                    css[styles] = value;
                } else {
                    var element = this.length > 0 ? this.elements[0] : false;
                    var style = element ? element.style : false;
                    if (element && style) {
                        return style[styles];
                    }
                    return undefined;
                }
            } else if ((typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object') {
                Object.keys(styles).forEach(function (key) {
                    css[key] = styles[key];
                });
            }

            Object.values(this.elements).forEach(function (element) {
                Object.keys(css).forEach(function (key) {
                    // Don't set styles on text and comment nodes
                    if (element.nodeType === 3 || element.nodeType === 8 || !element.style) {
                        return;
                    }
                    try {
                        element.style[key] = css[key];
                    } catch (e) {
                        // eslint-disable-next-line no-console
                        console.log(e);
                    }
                });
            });

            return this;
        }
    }, {
        key: 'forEach',
        value: function forEach(callback) {
            Object.values(this.elements).forEach(callback);
            return this;
        }
    }, {
        key: 'on',
        value: function on(event, fn) {
            Object.values(this.elements).forEach(function (element) {
                element.addEventListener(event, fn, false);
            });
            return this;
        }
    }, {
        key: 'off',
        value: function off(event, fn) {
            if (typeof event === 'undefined' && typeof fn === 'undefined') {
                Object.values(this.elements).forEach(function (element) {
                    var newElement = element.cloneNode(false);
                    while (element.hasChildNodes()) {
                        newElement.appendChild(element.firstChild);
                    }
                    element.parentNode.replaceChild(newElement, element);
                });
            } else {
                Object.values(this.elements).forEach(function (element) {
                    element.removeEventListener(event, fn, false);
                });
            }
            return this;
        }
    }, {
        key: 'trigger',
        value: function trigger(event, data) {
            var eventObject = new CustomEvent(event, {
                bubbles: true,
                cancelable: true,
                detail: data || {}
            });
            Object.values(this.elements).forEach(function (element) {
                element.dispatchEvent(eventObject);
            });
            return this;
        }
    }, {
        key: 'click',
        value: function click() {
            Object.values(this.elements).forEach(function (element) {
                element.click();
            });
            return this;
        }
    }, {
        key: 'get',
        value: function get(index) {
            return this.elements[index];
        }
    }, {
        key: 'prop',
        value: function prop() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length > 0) {
                var element = this.get(0);
                if (element) {
                    if (args.length === 2) {
                        this.get(0)[args[0]] = args[1];
                    }
                    return this.get(0)[args[0]];
                }
            }
            return this;
        }
    }]);

    return QueryObject;
}();

function Query(selector) {
    return new QueryObject(selector);
}

exports.default = Query;

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

var _Query = __webpack_require__(3);

var _Query2 = _interopRequireDefault(_Query);

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
        var _this = this;

        _classCallCheck(this, FileInput);

        this.options = Object.assign({
            multiple: true
        }, options);
        this.$form = (0, _Query2.default)('<form style="position: fixed; left: -10000px; top: -10000px; visibility: hidden;"><input type="file" /></form>');
        this.$input = this.$form.find('input');
        this.$form.appendTo(this.form);

        this.$input.on('change', function () {
            _this.getFileInputFiles();
        });

        this.multiple(this.options.multiple);
    }

    _createClass(FileInput, [{
        key: 'multiple',
        value: function multiple() {
            if (arguments.length === 1) {
                this.options.multiple = arguments.length <= 0 ? undefined : arguments[0];
            }
            this.$input.prop('multiple', this.options.multiple === true ? this.options.multiple : undefined);
            return this.$input.prop('multiple');
        }
    }, {
        key: 'open',
        value: function open() {
            this.$input.click();
        }
    }, {
        key: 'getFileInputFiles',
        value: function getFileInputFiles() {
            var entries = this.$input.prop('webkitEntries') || this.$input.prop('entries');
            var files = this.$input[0].files;

            console.log(entries);
            console.log(files);
        }
    }]);

    return FileInput;
}();

exports.default = FileInput;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var _Query = __webpack_require__(3);

var _Query2 = _interopRequireDefault(_Query);

var _Events2 = __webpack_require__(6);

var _Events3 = _interopRequireDefault(_Events2);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var events = ['drop', 'dragenter', 'dragleave', 'dragover'];

var DropZone = function (_Events) {
    _inherits(DropZone, _Events);

    function DropZone(options) {
        _classCallCheck(this, DropZone);

        var _this = _possibleConstructorReturn(this, (DropZone.__proto__ || Object.getPrototypeOf(DropZone)).call(this, events));

        _this.options = Object.assign({
            elements: null
        }, options);

        _this.setElements(_this.options.elements);
        return _this;
    }

    _createClass(DropZone, [{
        key: 'setElements',
        value: function setElements(elements) {
            this.clearElements();
            this.options.elements = elements;
            this.elements = (0, _Query2.default)(this.options.elements);
            this.elements.on('drop', this._onDrop.bind(this));
            this.elements.on('dragover', this._onDragOver.bind(this));
            this.elements.on('dragleave', this._onDragLeave.bind(this));
            this.elements.on('dragenter', this._onDragEnter.bind(this));
        }
    }, {
        key: 'clearElements',
        value: function clearElements() {
            if (this.elements) {
                this.elements.off('drop', this._onDrop);
                this.elements.off('dragover', this._onDragOver);
                this.elements.off('dragleave', this._onDragLeave);
                this.elements.off('dragenter', this._onDragEnter);
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.clearElements();
        }
    }, {
        key: '_onDrop',
        value: function _onDrop(event) {
            var _this2 = this;

            var dataTransfer = event.dataTransfer;

            if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
                event.preventDefault();
                this._getDroppedFiles(dataTransfer).then(function (files) {
                    _this2.trigger('drop', event, files);
                });
            }
        }
    }, {
        key: '_onDragOver',
        value: function _onDragOver(event) {
            var dataTransfer = event.dataTransfer;

            if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
                event.preventDefault();
                dataTransfer.dropEffect = 'copy';
                this.trigger('dragover', event);
            }
        }
    }, {
        key: '_onDragLeave',
        value: function _onDragLeave(event) {
            var dataTransfer = event.dataTransfer;

            if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
                event.preventDefault();
                dataTransfer.dropEffect = '';
                this.trigger('dragleave', event);
            }
        }
    }, {
        key: '_onDragEnter',
        value: function _onDragEnter(event) {
            var dataTransfer = event.dataTransfer;

            if (dataTransfer && dataTransfer.types.indexOf('Files') !== -1) {
                event.preventDefault();
                dataTransfer.dropEffect = 'copy';
                this.trigger('dragenter', event);
            }
        }
    }, {
        key: '_getDroppedFiles',
        value: function _getDroppedFiles(dataTransfer) {
            dataTransfer = dataTransfer || {};
            var _dataTransfer = dataTransfer,
                items = _dataTransfer.items;

            if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
                var itemsList = [];
                Object.values(items).forEach(function (item) {
                    var entry = item.webkitGetAsEntry() || item.getAsEntry();
                    entry._file = item.getAsFile();
                    itemsList.push(entry);
                });
                return this._handleFileTreeEntries(itemsList);
            }
            return new Promise(function (resolve) {
                resolve(dataTransfer.files);
            });
        }
    }, {
        key: '_handleFileTreeEntries',
        value: function _handleFileTreeEntries(entries, path) {
            var _this3 = this;

            var promises = [];
            entries.forEach(function (entry) {
                promises.push(_this3._handleFileTreeEntry(entry, path));
            });

            var promise = Promise.all(promises);
            return promise.then(function (files) {
                var _files = [];
                files.forEach(function (file) {
                    if (file instanceof Array) {
                        file.forEach(function (_file) {
                            _files.push(_file);
                        });
                    } else {
                        _files.push(file);
                    }
                });
                return _files;
            });
        }
    }, {
        key: '_handleFileTreeEntry',
        value: function _handleFileTreeEntry(entry, path) {
            var _this4 = this;

            path = path || '';
            return new Promise(function (resolve) {
                var errorHandler = function errorHandler(e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    resolve(e);
                };

                if (entry.isFile) {
                    if (entry._file) {
                        // Workaround for Chrome bug #149735
                        entry._file.relativePath = path;
                        resolve(entry._file);
                    } else {
                        entry.file(function (file) {
                            file.relativePath = path;
                            resolve(file);
                        }, errorHandler);
                    }
                } else if (entry.isDirectory) {
                    var dirReader = entry.createReader();
                    dirReader.readEntries(function (entries) {
                        _this4._handleFileTreeEntries(entries, path + entry.name + '/').then(function (files) {
                            var _files = [];
                            files.forEach(function (file) {
                                if (file instanceof Array) {
                                    file.forEach(function (_file) {
                                        _files.push(_file);
                                    });
                                } else {
                                    _files.push(file);
                                }
                            });
                            resolve(_files);
                        }, errorHandler);
                    }, errorHandler);
                }
            });
        }
    }]);

    return DropZone;
}(_Events3.default);

exports.default = DropZone;

/***/ }),
/* 6 */
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

var Events = function () {
    function Events(events) {
        _classCallCheck(this, Events);

        this._events = [];
        this._callbacks = [];
        this.appendEvents(events);
    }

    _createClass(Events, [{
        key: 'events',
        value: function events() {
            return this._events;
        }
    }, {
        key: 'appendEvents',
        value: function appendEvents(events) {
            var _this = this;

            if (events instanceof Array) {
                events.forEach(function (event) {
                    if (_this._events.indexOf() === -1) {
                        _this._events.push(event);
                        _this._callbacks[event] = [];
                    }
                });
            }
        }
    }, {
        key: 'on',
        value: function on(event, fn) {
            if (typeof this._callbacks[event] !== 'undefined') {
                this._callbacks[event].push(fn);
            }
            return this;
        }
    }, {
        key: 'off',
        value: function off(event, fn) {
            if (typeof this._callbacks[event] !== 'undefined') {
                if (typeof fn !== 'undefined') {
                    var index = this._callbacks[event].indexOf(fn);
                    if (index > -1) {
                        this._callbacks[event].splice(index, 1);
                    }
                } else {
                    this._callbacks[event] = [];
                }
            }
            return this;
        }
    }, {
        key: 'trigger',
        value: function trigger() {
            var _this2 = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length > 0) {
                var event = args[0];
                if (typeof this._callbacks[event] !== 'undefined') {
                    var newEvent = new CustomEvent(event, {
                        bubbles: false,
                        cancelable: true
                    });
                    newEvent.originalEvent = typeof args[1] !== 'undefined' ? args[1] : {};

                    if (args.length >= 2) {
                        args.shift();
                        args.shift();
                    } else {
                        args.shift();
                    }
                    args.unshift(newEvent);

                    this._callbacks[event].forEach(function (fn) {
                        fn.apply(_this2, args);
                    });
                }
            }
            return this;
        }
    }]);

    return Events;
}();

exports.default = Events;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map