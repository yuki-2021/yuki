/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/_animate.css@3.7.2@animate.css/animate.css":
/*!****************************************************************************!*\
  !*** E:/yuki-blog/node_modules/_animate.css@3.7.2@animate.css/animate.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///E:/yuki-blog/node_modules/_animate.css@3.7.2@animate.css/animate.css?");

/***/ }),

/***/ "../../../node_modules/_csshake@1.5.3@csshake/dist/csshake.css":
/*!*************************************************************************!*\
  !*** E:/yuki-blog/node_modules/_csshake@1.5.3@csshake/dist/csshake.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///E:/yuki-blog/node_modules/_csshake@1.5.3@csshake/dist/csshake.css?");

/***/ }),

/***/ "../../../node_modules/_easy-typer-js@2.1.0@easy-typer-js/src/lib/index.js":
/*!*************************************************************************************!*\
  !*** E:/yuki-blog/node_modules/_easy-typer-js@2.1.0@easy-typer-js/src/lib/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nclass EasyTyper {\r\n    constructor(obj, input, fn, hooks) {\r\n        checkKeyIsNull(obj);\r\n        checkFieldIsError(obj);\r\n        this.obj = obj;\r\n        this.input = typeof input === 'string' ? [input] : input;\r\n        this.fn = typeof fn === 'function' ? fn : function () { };\r\n        this.hooks = typeof hooks === 'function' ? hooks : function () { };\r\n        this.timer = 0;\r\n        this.typeAction = {\r\n            rollback: this.typedBack.bind(this),\r\n            normal: this.play.bind(this),\r\n            custom: this.fn\r\n        };\r\n        // 实例化完后立即执行打字输出\r\n        this.init();\r\n    }\r\n    // 初始化\r\n    init() {\r\n        this.play();\r\n    }\r\n    // 打字\r\n    play() {\r\n        if (!this.input.length)\r\n            return this.fn(this);\r\n        let i = 0, stop = false, input = this.input.shift() || '';\r\n        this.timer = setInterval(() => {\r\n            if (i === input.length) {\r\n                i = 0;\r\n                stop = true;\r\n                this.closeTimer();\r\n            }\r\n            if (this.obj.isEnd)\r\n                return this.closeTimer();\r\n            if (stop)\r\n                return this.nextTick();\r\n            this.obj.output = input.slice(0, i + 1);\r\n            this.hooks(input.slice(0, i + 1), this);\r\n            i++;\r\n        }, this.obj.speed);\r\n    }\r\n    // 回滚方法\r\n    typedBack() {\r\n        // 如果句子出书完毕，且是句子暂停模式\r\n        if (!this.input.length && this.obj.sentencePause)\r\n            return this.fn(this);\r\n        let input = this.obj.output;\r\n        let i = input.length, stop = false;\r\n        this.timer = setInterval(() => {\r\n            if (i === -1) {\r\n                this.obj.output = '';\r\n                this.hooks('', this);\r\n                i = 0;\r\n                stop = true;\r\n                this.closeTimer();\r\n            }\r\n            if (this.obj.isEnd) {\r\n                this.closeTimer();\r\n                return this.obj.singleBack = false;\r\n            }\r\n            if (stop) {\r\n                this.obj.singleBack = false;\r\n                return (() => {\r\n                    const { length } = this.input;\r\n                    return length ? this.play() : this.fn(this);\r\n                })();\r\n            }\r\n            this.obj.output = input.slice(0, i + 1);\r\n            this.hooks(input.slice(0, i + 1), this);\r\n            i--;\r\n        }, this.obj.backSpeed);\r\n    }\r\n    // 下一次触发方式\r\n    nextTick() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            // 等待\r\n            yield this.sleep(this.obj.sleep);\r\n            return this.obj.singleBack ? this.typedBack() : this.getOutputType();\r\n        });\r\n    }\r\n    // 输出方式\r\n    getOutputType() {\r\n        return this.typeAction[this.obj.type](this);\r\n    }\r\n    // 关闭定时器\r\n    closeTimer() {\r\n        clearInterval(this.timer);\r\n    }\r\n    // 线程等待\r\n    sleep(ms) {\r\n        return new Promise(resolve => setTimeout(resolve, ms));\r\n    }\r\n    // 结束\r\n    close() {\r\n        return this.obj.isEnd = true;\r\n    }\r\n}\r\n// 错误提示语\r\nconst errorTip = (message) => {\r\n    throw new Error(message);\r\n};\r\n// 校验参数完整性\r\nconst checkKeyIsNull = (obj) => {\r\n    const props = {\r\n        output: '',\r\n        type: '',\r\n        isEnd: false,\r\n        speed: 80,\r\n        backSpeed: 40,\r\n        sleep: 3000,\r\n        singleBack: false,\r\n        sentencePause: false\r\n    };\r\n    const propsKeys = Object.keys(props);\r\n    const objKeys = Object.keys(obj);\r\n    if (propsKeys.length !== objKeys.length) {\r\n        errorTip('配置对象错误: 字段数量不正确！');\r\n    }\r\n    propsKeys.forEach(key => {\r\n        if (obj[key] === undefined || obj[key] === null) {\r\n            errorTip('配置对象错误：字段值为null或undefined！');\r\n        }\r\n    });\r\n};\r\n// 检验参数类型\r\nconst checkFieldIsError = (obj) => {\r\n    Object.keys(obj).forEach(key => {\r\n        const proxy = EasyTyperStrategy[key](obj);\r\n        if (proxy.check()) {\r\n            proxy.showTip(key);\r\n        }\r\n    });\r\n};\r\n// 策略分发\r\nconst EasyTyperStrategy = (() => ({\r\n    output: (obj) => {\r\n        return new CheckField(`string`, obj.output);\r\n    },\r\n    type: (obj) => {\r\n        return new CheckField(`string`, obj.type);\r\n    },\r\n    isEnd: (obj) => {\r\n        return new CheckField(`boolean`, obj.isEnd);\r\n    },\r\n    speed: (obj) => {\r\n        return new CheckField(`number`, obj.speed);\r\n    },\r\n    backSpeed: (obj) => {\r\n        return new CheckField(`number`, obj.backSpeed);\r\n    },\r\n    sleep: (obj) => {\r\n        return new CheckField(`number`, obj.sleep);\r\n    },\r\n    singleBack: (obj) => {\r\n        return new CheckField(`boolean`, obj.singleBack);\r\n    },\r\n    sentencePause: (obj) => {\r\n        return new CheckField(`boolean`, obj.sentencePause);\r\n    },\r\n}))();\r\n// 字段校验类\r\nclass CheckField {\r\n    constructor(type, field) {\r\n        this.type = type;\r\n        this.field = field;\r\n    }\r\n    check() {\r\n        return typeof this.field !== `${this.type}`;\r\n    }\r\n    showTip(name) {\r\n        errorTip(`配置对象错误：属性 ${name} 必须为 ${this.type} 类型！`);\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (EasyTyper);\r\n\n\n//# sourceURL=webpack:///E:/yuki-blog/node_modules/_easy-typer-js@2.1.0@easy-typer-js/src/lib/index.js?");

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ \"./css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css */ \"../../../node_modules/_animate.css@3.7.2@animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var csshake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csshake */ \"../../../node_modules/_csshake@1.5.3@csshake/dist/csshake.css\");\n/* harmony import */ var csshake__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csshake__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var easy_typer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! easy-typer-js */ \"../../../node_modules/_easy-typer-js@2.1.0@easy-typer-js/src/lib/index.js\");\n/*\r\n *  index入口文件\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst easyTyperTarget = '#word-chinese'\r\nconst easyTyperConfig = {\r\n    output: '',\r\n    isEnd: false,\r\n    speed: 80,\r\n    singleBack: false,\r\n    sleep: 0,\r\n    type: 'normal',\r\n    backSpeed: 40,\r\n    'sentencePause': false\r\n}\r\nnew easy_typer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n    easyTyperConfig, \r\n    `You can't fly if you never try.<br>不做尝试就永远无法飞翔.\r\n    `, \r\n    () => {}, \r\n    (output, instance) => {\r\n        $(easyTyperTarget).html(`${output}`);\r\n    }\r\n)\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });