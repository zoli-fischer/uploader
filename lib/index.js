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

var _DropZone = __webpack_require__(8);

var _DropZone2 = _interopRequireDefault(_DropZone);

var _Events2 = __webpack_require__(5);

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

            this.DropZone.events().forEach(function (event) {
                _this2.DropZone.on(event, function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    _this2.trigger.apply(_this2, args);
                });
            });

            this.fileInput.on('files-added', function (event, files) {
                console.log('files');
                console.log(files);
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

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _jqry = __webpack_require__(6);

var _jqry2 = _interopRequireDefault(_jqry);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Support = function () {
    function Support() {
        _classCallCheck(this, Support);

        // Detect file input support, based on
        // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
        this.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' + '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' + '|(w(eb)?OSBrowser)|(webOS)' + '|(Kindle/(1\\.0|2\\.[05]|3\\.0))').test(window.navigator.userAgent) || (0, _jqry2.default)('<input type="file" />').prop('disabled'));

        // The FileReader API is not actually used, but works as feature detection,
        // as some Safari versions (5?) support XHR file uploads via the FormData API,
        // but not non-multipart XHR file uploads.
        // window.XMLHttpRequestUpload is not available on IE10, so we check for
        // window.ProgressEvent instead to detect XHR2 file upload capability:
        this.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
        this.xhrFormDataFileUpload = !!window.FormData;
    }

    _createClass(Support, [{
        key: 'isDragAndDrop',
        value: function isDragAndDrop() {
            var div = (0, _jqry2.default)('<div></div>')[0];
            return !/Trident\/7./ig.test(window.navigator.userAgent) && ('draggable' in div || 'ondragstart' in div && 'ondrop' in div);
        }
    }]);

    return Support;
}();

exports.default = Support;

/***/ }),
/* 3 */,
/* 4 */
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

var _jqry = __webpack_require__(6);

var _jqry2 = _interopRequireDefault(_jqry);

var _Events2 = __webpack_require__(5);

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

var events = ['files-added'];

var FileInput = function (_Events) {
    _inherits(FileInput, _Events);

    function FileInput(options) {
        _classCallCheck(this, FileInput);

        var _this = _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this, events));

        _this.options = Object.assign({
            multiple: true
        }, options);
        _this.$form = (0, _jqry2.default)('<form style="position: fixed; left: -10000px; top: -10000px; visibility: hidden;"><input type="file" /></form>');
        _this.$input = _this.$form.find('input');
        _this.$form.appendTo(_this.form);

        _this.$input.on('change', function () {
            _this.getFileInputFiles();
        });

        _this.multiple(_this.options.multiple);
        return _this;
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
            var files = [];
            for (var i = 0; i < this.$input[0].files.length; i++) {
                files.push(this.$input[0].files[i]);
            }
            this.trigger('files-added', files);
        }
    }]);

    return FileInput;
}(_Events3.default);

exports.default = FileInput;

/***/ }),
/* 5 */
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

var _jqry = __webpack_require__(6);

var _jqry2 = _interopRequireDefault(_jqry);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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
                    if (_jqry2.default.indexOf(_this._events, event) === -1) {
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
                    var index = _jqry2.default.indexOf(this._callbacks[event], fn);
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
                var event = void 0;
                if (_typeof(args[0]) === 'object') {
                    var type = args[0].type;

                    var originalEvent = args[0];
                    if (args[0] instanceof Array) {
                        type = args[0][0];
                        originalEvent = args[0][1];
                    }
                    event = _jqry2.default.CustomEvent(type, {
                        bubbles: false,
                        cancelable: true
                    });
                    event.originalEvent = originalEvent;
                } else {
                    event = _jqry2.default.CustomEvent(args[0], {
                        bubbles: false,
                        cancelable: true
                    });
                    event.originalEvent = null;
                }
                if (typeof this._callbacks[event.type] !== 'undefined') {
                    args.shift();
                    args.unshift(event);
                    this._callbacks[event.type].forEach(function (fn) {
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
};

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? undefined : _typeof3(exports)) === 'object' && ( false ? undefined : _typeof3(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // define __esModule on exports
            /******/__webpack_require__.r = function (exports) {
                /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
                }
                /******/Object.defineProperty(exports, '__esModule', { value: true });
                /******/
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/__webpack_require__.t = function (value, mode) {
                /******/if (mode & 1) value = __webpack_require__(value);
                /******/if (mode & 8) return value;
                /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof3(value)) === 'object' && value && value.__esModule) return value;
                /******/var ns = Object.create(null);
                /******/__webpack_require__.r(ns);
                /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
                    __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                    }.bind(null, key));
                } /******/return ns;
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 0);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _jQryObject = __webpack_require__(1);

            var _jQryObject2 = _interopRequireDefault(_jQryObject);

            var _Obj = __webpack_require__(4);

            var _Obj2 = _interopRequireDefault(_Obj);

            var _Event = __webpack_require__(7);

            var _Event2 = _interopRequireDefault(_Event);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function jQry(selector) {
                return new _jQryObject2.default(selector);
            }

            // Object

            jQry.extend = _Obj2.default.assign;
            jQry.assign = _Obj2.default.assign;
            jQry.values = _Obj2.default.values;
            jQry.keys = Object.keys;
            jQry.indexOf = _Obj2.default.indexOf;

            // Event

            jQry.CustomEvent = function (type, params) {
                return new _Event2.default.CustomEvent(type, params);
            };

            // Global

            jQry.global = function () {
                var alias = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$';

                if (typeof window[alias] === 'undefined' && window[alias] !== jQry) {
                    window[alias] = jQry;
                }
            };

            exports.default = jQry;

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

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

            var _Selector = __webpack_require__(2);

            var _Selector2 = _interopRequireDefault(_Selector);

            var _Style = __webpack_require__(3);

            var _Style2 = _interopRequireDefault(_Style);

            var _Prop = __webpack_require__(5);

            var _Prop2 = _interopRequireDefault(_Prop);

            var _DOM = __webpack_require__(6);

            var _DOM2 = _interopRequireDefault(_DOM);

            var _Event = __webpack_require__(7);

            var _Event2 = _interopRequireDefault(_Event);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var jQryObject = function () {
                function jQryObject(selector) {
                    var _this = this;

                    _classCallCheck(this, jQryObject);

                    var elements = _Selector2.default.select(selector);
                    this.elements = [];
                    var i = 0;
                    Object.values(elements).forEach(function (element) {
                        if (element instanceof Element || element instanceof Window || element instanceof Document) {
                            _this.elements.push(element);
                            _this[i++] = element;
                        }
                        if (element instanceof Element && !document.body.contains(element)) {
                            document.body.appendChild(element);
                            element.parentNode.removeChild(element);
                        }
                    });
                    this.length = this.elements.length;
                }

                _createClass(jQryObject, [{
                    key: 'forEach',
                    value: function forEach(callback) {
                        this.elements.forEach(callback);
                        return this;
                    }
                }, {
                    key: 'each',
                    value: function each(callback) {
                        this.forEach(function (element, index) {
                            callback(jQryObject(element), index);
                        });
                        return this;
                    }

                    /** Selector */

                }, {
                    key: 'find',
                    value: function find(selector) {
                        return _Selector2.default.find(this, selector);
                    }

                    /** Style */

                }, {
                    key: 'css',
                    value: function css(styles, value) {
                        return _Style2.default.css(this, styles, value);
                    }

                    /** Prop */

                }, {
                    key: 'prop',
                    value: function prop(propName, value) {
                        return _Prop2.default.prop(this, propName, value);
                    }

                    /** DOM */

                }, {
                    key: 'appendTo',
                    value: function appendTo(selector) {
                        return _DOM2.default.appendTo(this, selector);
                    }
                }, {
                    key: 'detach',
                    value: function detach() {
                        return _DOM2.default.detach(this);
                    }
                }, {
                    key: 'parent',
                    value: function parent() {
                        return _DOM2.default.parent(this);
                    }

                    /** Event */

                }, {
                    key: 'on',
                    value: function on(event, fn) {
                        return _Event2.default.on(this, event, fn);
                    }
                }, {
                    key: 'off',
                    value: function off(event, fn) {
                        return _Event2.default.off(this, event, fn);
                    }
                }, {
                    key: 'trigger',
                    value: function trigger(event, data) {
                        return _Event2.default.trigger(this, event, data);
                    }
                }, {
                    key: 'click',
                    value: function click() {
                        return _Event2.default.click(this);
                    }
                }]);

                return jQryObject;
            }();

            exports.default = jQryObject;

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
            };

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

            var _jQryObject = __webpack_require__(1);

            var _jQryObject2 = _interopRequireDefault(_jQryObject);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Selector = function () {
                function Selector() {
                    _classCallCheck(this, Selector);
                }

                _createClass(Selector, null, [{
                    key: 'select',
                    value: function select(selector) {
                        var elements = [];
                        if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') {
                            if (selector instanceof _jQryObject2.default) {
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
                        return elements;
                    }
                }, {
                    key: 'find',
                    value: function find(jObj, selector) {
                        var elements = [];
                        jObj.forEach(function (element) {
                            Object.values(element.querySelectorAll(selector)).forEach(function (queryElement) {
                                elements.push(queryElement);
                            });
                        });
                        return new _jQryObject2.default(elements);
                    }
                }]);

                return Selector;
            }();

            exports.default = Selector;

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
            };

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

            var _Obj = __webpack_require__(4);

            var _Obj2 = _interopRequireDefault(_Obj);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Style = function () {
                function Style() {
                    _classCallCheck(this, Style);
                }

                _createClass(Style, null, [{
                    key: 'css',
                    value: function css(jObj, styles, value) {
                        var css = {};
                        if (typeof styles === 'string') {
                            if (typeof value !== 'undefined') {
                                css[styles] = value;
                            } else {
                                var element = jObj.length > 0 ? jObj[0] : false;
                                var style = element ? _Obj2.default.assing(window.getComputedStyle(element), element.style) : false;
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

                        jObj.forEach(function (element) {
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

                        return jObj;
                    }
                }]);

                return Style;
            }();

            exports.default = Style;

            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
            };

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

            var Obj = function () {
                function Obj() {
                    _classCallCheck(this, Obj);
                }

                _createClass(Obj, null, [{
                    key: 'assing',
                    value: function assing() {
                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }

                        var result = args.reduce(function (accumulator, currentValue) {
                            if ((typeof currentValue === 'undefined' ? 'undefined' : _typeof(currentValue)) === 'object') {
                                Object.keys(currentValue).forEach(function (k) {
                                    accumulator[k] = currentValue[k];
                                });
                            }
                            return accumulator;
                        }, {});
                        return result;
                    }
                }, {
                    key: 'extend',
                    value: function extend() {
                        var _Obj$assign;

                        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                            args[_key2] = arguments[_key2];
                        }

                        return (_Obj$assign = Obj.assign).apply.apply(_Obj$assign, [Obj].concat(args));
                    }
                }, {
                    key: 'values',
                    value: function values(obj) {
                        Object.keys(obj).map(function (item) {
                            return obj[item];
                        });
                    }
                }, {
                    key: 'indexOf',
                    value: function indexOf(mix, searchvalue) {
                        var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                        var overStart = start === null;
                        var found = -1;
                        Object.keys(mix).forEach(function (i) {
                            if (overStart && mix[i] === searchvalue) {
                                found = mix[i];
                                return false;
                            }
                            if (start === i) {
                                overStart = true;
                            }
                            return true;
                        });
                        return found;
                    }
                }]);

                return Obj;
            }();

            exports.default = Obj;

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

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

            var Prop = function () {
                function Prop() {
                    _classCallCheck(this, Prop);
                }

                _createClass(Prop, null, [{
                    key: 'prop',
                    value: function prop(jObj, propName, value) {
                        var element = jObj[0];
                        if (element) {
                            if (typeof value !== 'undefined') {
                                element[propName] = value;
                            } else {
                                return element[propName];
                            }
                        }
                        return jObj;
                    }
                }]);

                return Prop;
            }();

            exports.default = Prop;

            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {

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

            var _jQryObject = __webpack_require__(1);

            var _jQryObject2 = _interopRequireDefault(_jQryObject);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var DOM = function () {
                function DOM() {
                    _classCallCheck(this, DOM);
                }

                _createClass(DOM, null, [{
                    key: 'appendTo',
                    value: function appendTo(jObj, selector) {
                        var parents = false;
                        if (selector instanceof _jQryObject2.default) {
                            parents = selector;
                        } else {
                            parents = new _jQryObject2.default(selector);
                        }
                        parents.forEach(function (parentElement) {
                            jObj.elements.forEach(function (element) {
                                parentElement.appendChild(element);
                            });
                        });
                        return jObj;
                    }
                }, {
                    key: 'detach',
                    value: function detach(jObj) {
                        jObj.forEach(function (element) {
                            element.parentNode.removeChild(element);
                        });
                        return jObj;
                    }
                }, {
                    key: 'parent',
                    value: function parent(jObj) {
                        var elements = [];
                        jObj.forEach(function (element) {
                            elements.push(element.parentNode);
                        });
                        return new _jQryObject2.default(elements);
                    }
                }]);

                return DOM;
            }();

            exports.default = DOM;

            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {

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

            var _Obj = __webpack_require__(4);

            var _Obj2 = _interopRequireDefault(_Obj);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Event = function () {
                function Event() {
                    _classCallCheck(this, Event);
                }

                _createClass(Event, null, [{
                    key: 'on',
                    value: function on(jObj, event, fn) {
                        Object.values(jObj.elements).forEach(function (element) {
                            element.addEventListener(event, fn, false);
                        });
                        return jObj;
                    }
                }, {
                    key: 'off',
                    value: function off(jObj, event, fn) {
                        if (typeof event === 'undefined' && typeof fn === 'undefined') {
                            Object.values(jObj.elements).forEach(function (element) {
                                var newElement = element.cloneNode(false);
                                while (element.hasChildNodes()) {
                                    newElement.appendChild(element.firstChild);
                                }
                                element.parentNode.replaceChild(newElement, element);
                            });
                        } else {
                            Object.values(jObj.elements).forEach(function (element) {
                                element.removeEventListener(event, fn, false);
                            });
                        }
                        return jObj;
                    }
                }, {
                    key: 'CustomEvent',
                    value: function CustomEvent(type) {
                        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                        params = _Obj2.default.assing({ bubbles: false, cancelable: false, detail: undefined }, params);

                        if (typeof window.CustomEvent === 'function') {
                            return new window.CustomEvent(type, params);
                        }

                        var CustomEvent = function CustomEvent(type_) {
                            var params_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                            var event = document.createEvent('CustomEvent');
                            event.initCustomEvent(type, params_.bubbles, params_.cancelable, params_.detail);
                            return event;
                        };
                        CustomEvent.prototype = window.Event.prototype;
                        return CustomEvent(type, params);
                    }
                }, {
                    key: 'trigger',
                    value: function trigger(jObj, event, data) {
                        var eventObject = new CustomEvent(event, {
                            bubbles: true,
                            cancelable: true,
                            detail: data || {}
                        });
                        Object.values(jObj.elements).forEach(function (element) {
                            element.dispatchEvent(eventObject);
                        });
                        return jObj;
                    }
                }, {
                    key: 'click',
                    value: function click(jObj) {
                        Object.values(jObj.elements).forEach(function (element) {
                            element.click();
                        });
                        return jObj;
                    }
                }]);

                return Event;
            }();

            exports.default = Event;

            /***/
        }]
        /******/)
    );
});
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
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

var _jqry = __webpack_require__(6);

var _jqry2 = _interopRequireDefault(_jqry);

var _Events2 = __webpack_require__(5);

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
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
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
            this.elements = (0, _jqry2.default)(this.options.elements);
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

            if (dataTransfer && _typeof(dataTransfer.types) === 'object' && _jqry2.default.indexOf(dataTransfer.types, 'Files') !== -1) {
                event.preventDefault();
                this._getDroppedFiles(dataTransfer).then(function (files) {
                    _this2.trigger(event, files);
                });
            }
        }
    }, {
        key: '_onDragOver',
        value: function _onDragOver(event) {
            var dataTransfer = event.dataTransfer;

            if (dataTransfer && _typeof(dataTransfer.types) === 'object' && _jqry2.default.indexOf(dataTransfer.types, 'Files') !== -1) {
                event.preventDefault();
                dataTransfer.dropEffect = 'copy';
                this.trigger(event, event);
            }
        }
    }, {
        key: '_onDragLeave',
        value: function _onDragLeave(event) {
            var dataTransfer = event.dataTransfer;

            if (dataTransfer && _typeof(dataTransfer.types) === 'object' && _jqry2.default.indexOf(dataTransfer.types, 'Files') !== -1) {
                event.preventDefault();
                dataTransfer.dropEffect = '';
                this.trigger(event, event);
            }
        }
    }, {
        key: '_onDragEnter',
        value: function _onDragEnter(event) {
            var dataTransfer = event.dataTransfer;

            if (dataTransfer && _typeof(dataTransfer.types) === 'object' && _jqry2.default.indexOf(dataTransfer.types, 'Files') !== -1) {
                event.preventDefault();
                dataTransfer.dropEffect = 'copy';
                this.trigger(event, event);
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map