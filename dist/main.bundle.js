/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_core */ "./src/_core/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "setup",
    value: function setup() {}
  }, {
    key: "template",
    value: function template() {
      return "\n            <header class=\"header\">\n                <ul class=\"header__list\">\n                    <li class=\"header__list-item\"><a href=\"#/\">\uACFC\uC81C\uC124\uBA85</a></li>\n                    <li class=\"header__list-item\"><a href=\"#/hiphop\">\uD799\uD569</a></li>\n                    <li class=\"header__list-item\"><a href=\"#/ballad\">\uBC1C\uB77C\uB4DC</a></li>\n                    <li class=\"header__list-item\"><a href=\"#/kpop\">k-pop</a></li>\n                </ul>\n                <audio controls class=\"header__audio\">\n                    <source src=\"https://www.sellbuymusic.com/upload/music/0000000369/918889031769702.mp3\" type=\"audio/mp3\">\n                </audio>\n            </header>\n            <main id=\"content\"></main>\n            <footer class=\"footer\">Copyright&copy; 2021 \uAE40\uBBFC\uD601</footer>\n        ";
    }
  }, {
    key: "onMounted",
    value: function onMounted() {
      _router__WEBPACK_IMPORTED_MODULE_1__.default.init();
    }
  }]);

  return App;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./src/_core/Component.js":
/*!********************************!*\
  !*** ./src/_core/Component.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = /*#__PURE__*/function () {
  function Component(el) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    _defineProperty(this, "el", void 0);

    _defineProperty(this, "state", {});

    _defineProperty(this, "props", {});

    this.el = el;
    this.props = props;
    this.init();
  }

  _createClass(Component, [{
    key: "init",
    value: function init() {
      this.state = this.stateInit();
      this.eventInit();
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.setup();
      if (this.el) this.el.innerHTML = this.template();
      this.onMounted();
    }
  }, {
    key: "setState",
    value: function setState(newState) {
      this.state = _objectSpread(_objectSpread({}, this.state), newState);
      this.render();
    }
  }, {
    key: "template",
    value: function template() {
      return '';
    }
  }, {
    key: "eventInit",
    value: function eventInit() {}
  }, {
    key: "stateInit",
    value: function stateInit() {
      return {};
    }
  }, {
    key: "setup",
    value: function setup() {}
  }, {
    key: "onMounted",
    value: function onMounted() {}
  }]);

  return Component;
}();

/***/ }),

/***/ "./src/_core/Router.js":
/*!*****************************!*\
  !*** ./src/_core/Router.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views */ "./src/views/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Router = /*#__PURE__*/function () {
  function Router(_ref) {
    var el = _ref.el,
        _ref$routes = _ref.routes,
        routes = _ref$routes === void 0 ? {} : _ref$routes,
        linkActiveClass = _ref.linkActiveClass;

    _classCallCheck(this, Router);

    _defineProperty(this, "el", void 0);

    _defineProperty(this, "routes", {});

    _defineProperty(this, "linkActiveClass", void 0);

    this.el = el;
    this.routes = routes;
    this.linkActiveClass = linkActiveClass;
  }

  _createClass(Router, [{
    key: "init",
    value: function init() {
      var _this = this;

      window.addEventListener('popstate', function () {
        return _this.routing();
      });
      this.routing();
    }
  }, {
    key: "routing",
    value: function routing() {
      this.beforeEach();
      var selectedPath = location.hash.replace('#', '');
      var selectedRoute = _views__WEBPACK_IMPORTED_MODULE_0__.Home;
      if (!selectedPath.length) selectedPath = '/';

      for (var _i = 0, _Object$keys = Object.keys(this.routes); _i < _Object$keys.length; _i++) {
        var path = _Object$keys[_i];

        if (selectedPath.includes(path)) {
          selectedRoute = this.routes[selectedPath];
          break;
        }
      }

      if (selectedRoute) new selectedRoute(this.el);
      this.afterEach();
      this.activeLink();
    }
  }, {
    key: "activeLink",
    value: function activeLink() {
      var _this2 = this;

      var $activeLink = document.querySelectorAll(".".concat(this.linkActiveClass));
      $activeLink.forEach(function (item) {
        return item.classList.remove(_this2.linkActiveClass);
      });
      var hash = location.hash.length ? location.hash : '#/';
      var $active = document.querySelector("a[href=\"".concat(hash, "\"]"));
      $active && $active.classList.add(this.linkActiveClass);
    }
  }, {
    key: "beforeEach",
    value: function beforeEach() {}
  }, {
    key: "afterEach",
    value: function afterEach() {}
  }]);

  return Router;
}();

/***/ }),

/***/ "./src/_core/index.js":
/*!****************************!*\
  !*** ./src/_core/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "Router": () => (/* reexport safe */ _Router__WEBPACK_IMPORTED_MODULE_1__.Router)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/_core/Component.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router */ "./src/_core/Router.js");



/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core */ "./src/_core/index.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views */ "./src/views/index.js");


var router = {
  init: function init() {
    var router = new _core__WEBPACK_IMPORTED_MODULE_0__.Router({
      el: document.querySelector('#content'),
      routes: {
        '/': _views__WEBPACK_IMPORTED_MODULE_1__.Home,
        '/hiphop': _views__WEBPACK_IMPORTED_MODULE_1__.Hiphop,
        '/ballad': _views__WEBPACK_IMPORTED_MODULE_1__.Ballad,
        '/kpop': _views__WEBPACK_IMPORTED_MODULE_1__.Kpop
      },
      linkActiveClass: 'link-active'
    });

    router.beforeEach = function () {};

    router.afterEach = function () {
      setTimeout(function () {
        document.querySelector('.content').classList.add('content--active');
      }, 0);
    };

    router.init();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/views/Ballad.js":
/*!*****************************!*\
  !*** ./src/views/Ballad.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ballad": () => (/* binding */ Ballad)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core */ "./src/_core/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Ballad = /*#__PURE__*/function (_Component) {
  _inherits(Ballad, _Component);

  var _super = _createSuper(Ballad);

  function Ballad() {
    _classCallCheck(this, Ballad);

    return _super.apply(this, arguments);
  }

  _createClass(Ballad, [{
    key: "template",
    value: function template() {
      return "\n            <div class=\"content\">\n                <div class=\"content__desc\">\n                    \uBC1C\uB77C\uB4DC\uB294 \uB300\uC911 \uC74C\uC545\uC758 \uD55C \uBD80\uB958\uB85C, \uB0A8\uB140\uAC04\uC758 \uC0AC\uB791\uC744 \uC8FC\uC81C\uB85C \uD55C \uAC10\uC0C1\uC801\uC778 \uB178\uB798\uB97C \uC9C0\uCE6D\uD558\uBA70, \uB290\uB9B0 \uBC15\uC790\uC640 \uB0AD\uB9CC\uC801\uC774\uACE0 \uAC10\uC131\uC801\uC778 \uAC00\uC0AC\uB97C \uC9C0\uB2CC \uB178\uB798\uC640 \uB54C\uB85C\uB294 \uC57D\uAC04 \uBE60\uB974\uBA74\uC11C\uB3C4 \uBC18\uBCF5\uC801\uC774\uACE0 \uC11C\uC220\uC801\uC778 \uB178\uB798\uB97C \uD3EC\uD568\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4<br><br>\n                    \uB7A9\uACFC \uBC18\uB300\uB85C \uB300\uCCB4\uC801\uC73C\uB85C \uC870\uC6A9\uD55C \uC74C\uC545\uC774\uBA70, \uBC1C\uB77C\uB4DC\uB77C\uB294 \uC774\uB984\uC740 \uC774\uC57C\uAE30 \uD615\uD0DC\uC758 \uC2DC\uB098 \uC545\uACE1\uC744 \uC9C0\uCE6D\uD558\uB358 \uBC1C\uB77C\uB4DC\uC5D0\uC11C \uC720\uB798\uD558\uC600\uC2B5\uB2C8\uB2E4.\n                </div>\n                <div class=\"content__logo\">\n                    <img src=\"https://image.bugsm.co.kr/essential/images/250/141/14132.jpg?_up=20180419-055548\">\n                </div>\n                <div class=\"content__desc\">\n                    \uC81C\uAC00 \uC990\uACA8\uB4E3\uB294 \uBC1C\uB77C\uB4DC \uAC00\uC218\uBD84\uC774 \uADDC\uD604\uB2D8\uC774\uB77C \uC790\uC8FC\uB4E3\uB294 \uADDC\uD604\uB2D8\uC758 \uB178\uB798\uB97C \uC900\uBE44\uD574\uBCF4\uC558\uC2B5\uB2C8\uB2E4.\n                </div>\n                <div class=\"content__video\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/vIPug7A8Fds\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n            </div>\n        ";
    }
  }]);

  return Ballad;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./src/views/Hiphop.js":
/*!*****************************!*\
  !*** ./src/views/Hiphop.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hiphop": () => (/* binding */ Hiphop)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core */ "./src/_core/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Hiphop = /*#__PURE__*/function (_Component) {
  _inherits(Hiphop, _Component);

  var _super = _createSuper(Hiphop);

  function Hiphop() {
    var _this;

    _classCallCheck(this, Hiphop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "w", void 0);

    return _this;
  }

  _createClass(Hiphop, [{
    key: "template",
    value: function template() {
      return "\n            <div class=\"content\">\n                <div class=\"content__desc\">\n                    \uD799\uD569(Hip Hop)\uC740 1970\uB144\uB300 \uBBF8\uD569\uC911\uAD6D \uB274\uC695\uC758 \uBE0C\uB871\uC2A4\uC5D0\uC11C \uC720\uD589\uD558\uAE30 \uC2DC\uC791\uD55C \uCDA4\uACFC \uB300\uC911\uC74C\uC545\uC73C\uB85C\uBD80\uD130 \uD30C\uC0DD\uB41C \uAC70\uB9AC\uBB38\uD654 \uC785\uB2C8\uB2E4. <br><br>\n                    \uD799\uD569\uC758 \uCD08\uAE30\uC5D0\uB294 \uD31D, \uD391\uD06C, \uB808\uAC8C, \uC18C\uC6B8, \uC7AC\uC988 \uB4F1 \uB300\uC911\uC74C\uC545\uC5D0\uC11C \uCD94\uCD9C\uD55C \uC0D8\uD50C\uB9C1\uC774\uB098 \uD504\uB85C\uADF8\uB798\uBC0D\uC744 \uC911\uC2EC\uC73C\uB85C \uD55C \uD2B8\uB799\uC744 \uB179\uC74C\uD574\uC11C \uBE14\uB85D\uD30C\uD2F0\uC5D0 \uC989\uD765\uC801\uC778 \uCDA4\uD310\uC5D0 \uC4F0\uB2E4\uAC00,<br>\n                    \uC74C\uC545\uC744 \uD2C0\uB358 DJ\uB4E4\uC740 \uACE1 \uBA87 \uAC00\uC9C0 \uBD80\uBD84\uC5D0 \uAD00\uC911\uB4E4\uC744 \uD5A5\uD574 \uBD84\uC704\uAE30\uB97C \uB9DE\uCD94\uAE30 \uC704\uD574 \uC774\uB7F0 \uC800\uB7F0 \uB9D0\uB4E4\uC774\uB098 \uD6C4\uB834\uAD6C \uB3C4\uB294 \uBBF8\uC0AC\uC5EC\uAD6C\uB4E4\uC744 \uBC49\uC5C8\uB294\uB370,<br>\n                    \uADF8\uAC83\uC774 \uCC28\uCC28 \uB514\uC81C\uC774\uB85C\uBD80\uD130 \uBD84\uD654\uB418\uC5B4 \uC2A4\uD14C\uC774\uC9C0 \uC704\uC5D0\uC11C \uC0AC\uD68C\uB97C \uBCF4\uB294 \uC5ED\uD560\uC774 \uB530\uB85C \uB9CC\uB4E4\uC5B4\uC838 MC \uB610\uB294 \uB798\uD37C\uAC00 \uC0DD\uACA8\uB0AC\uACE0, \uADF8\uB807\uAC8C \uB7A9\uC774\uB77C\uB294 \uAC1C\uB150\uC774 \uD0C4\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.<br>\n                    \uD55C\uAD6D\uC5D0\uC11C\uB294 \uC1FC\uBBF8\uB354\uBA38\uB2C8 \uB77C\uB294 TV \uD504\uB85C\uADF8\uB7A8 \uC774\uD6C4 \uB529\uACE0 \uB4F1\uC758 \uCEE8\uD150\uCE20\uB4E4\uC774 \uC0DD\uACA8\uB098\uBA74\uC11C \uBCF8\uACA9\uC801\uC73C\uB85C \uB300\uC911\uB4E4\uC5D0\uAC8C \uC54C\uB824\uC9C0\uAE30 \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4. <br>\n                </div>\n                <div class=\"content__logo\">\n                    <img src=\"https://image.genie.co.kr/ND_F/globalplatform/2020/9/29/e09721e7-d0b4-4dc4-bef2-d6aa5f8efbc1.png\">\n                    <img src=\"https://m.much-merch.com/web/upload/category/mobile/shop1_202_top_455021.jpg\">\n                </div>\n                <div class=\"content__desc\">\n                    \uC544\uB798 \uC601\uC0C1\uC740 \uCD5C\uADFC \uBC29\uC601\uB41C \uC1FC\uBBF8\uB354\uBA38\uB2C8 \uC601\uC0C1\uC785\uB2C8\uB2E4.\n                </div>\n                <div class=\"content__video\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/KoWgusQpS9Q\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n            </div>\n        ";
    }
  }]);

  return Hiphop;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./src/views/Home.js":
/*!***************************!*\
  !*** ./src/views/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core */ "./src/_core/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    _classCallCheck(this, Home);

    return _super.apply(this, arguments);
  }

  _createClass(Home, [{
    key: "template",
    value: function template() {
      return "\n            <div class=\"content\">\n                <div class=\"content__desc\">\n                    \uC548\uB155\uD558\uC138\uC694 H201946007 \uAE40\uBBFC\uD601 \uC785\uB2C8\uB2E4!<br>\n                    \uC81C\uAC00 \uC74C\uC545\uC744 \uAD49\uC7A5\uD788 \uC88B\uC544\uD574\uC11C \uC74C\uC545 \uC7A5\uB974 \uAD00\uB828\uB41C \uC8FC\uC81C\uB85C \uD648\uD398\uC774\uC9C0\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uC558\uC2B5\uB2C8\uB2E4.<br><br>\n                    webpack\uC744 \uC774\uC6A9\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uBE4C\uB4DC\uD558\uC600\uC73C\uBA70, scss\uB97C \uD65C\uC6A9\uD558\uC5EC \uC2A4\uD0C0\uC77C \uC791\uC5C5\uC744 \uD558\uC600\uC2B5\uB2C8\uB2E4.<br>\n                    es6 \uC774\uC0C1\uC758 \uBB38\uBC95\uC744 \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574 babel\uC124\uC815\uC744 \uD558\uC600\uACE0 \uD504\uB85C\uC81D\uD2B8 \uC804\uBC18\uC801\uC73C\uB85C class, import \uB4F1 es6 \uC774\uC0C1\uC758 \uBB38\uBC95\uB4E4\uC744 \uD65C\uC6A9\uD588\uC2B5\uB2C8\uB2E4.<br>\n                    \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC870\uB294 spa \uD504\uB808\uC784\uC6CC\uD06C(Vue, React \uB4F1)\uB97C \uBCF4\uACE0 \uC601\uAC10\uC744 \uC5BB\uC5C8\uACE0 \uB450 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC870\uAE08\uC529 \uCC38\uACE0\uD558\uC5EC \uC9C1\uC811 \uAD6C\uD604\uD558\uC600\uC73C\uBA70, \uC0C8\uB85C\uACE0\uCE68 \uC5C6\uC774 \uD398\uC774\uC9C0 \uC774\uB3D9\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D \uB9CC\uB4E4\uC5B4\uBCF4\uC558\uC2B5\uB2C8\uB2E4.<br><br>\n                </div>\n                <div class=\"content__logo\">\n                    <img src=\"https://joshua1988.github.io/webpack-guide/logo.png\">\n                    <img src=\"https://miro.medium.com/max/6552/1*XmHUL5DeySv_dGmvbPqdDQ.png\">\n                    <img src=\"https://media.vlpt.us/images/leo-xee/post/ac25a592-7b47-4584-9db6-2bc449c93290/sass.png\">\n                </div>\n                <div class=\"content__desc content__desc--s-margin\">\n                    \uD398\uC774\uC9C0\uBCC4 html\uB4E4\uC744 views \uD3F4\uB354 \uC548\uC5D0 template \uD568\uC218\uC5D0\uC11C \uB9AC\uD134\uD574\uC8FC\uB294 \uBC29\uC2DD\uC774\uBA70, \uD398\uC774\uC9C0 url\uC5D0 \uB9DE\uAC8C router\uC5D0\uC11C js\uB97C import \uD574\uC11C<br>\n                </div>\n                <pre class=\"content__code\">\n// router/index.js\n\nconst router = new Router({\n    el: document.querySelector('#content'),\n    routes: {\n        '/': Home,\n        '/hiphop': Hiphop,\n        '/ballad': Ballad,\n        '/kpop': Kpop,\n    },\n    linkActiveClass: 'link-active'\n});\n                </pre>\n                <div class=\"content__desc content__desc--s-margin\">div#content\uC5D0 \uB80C\uB354\uB9C1 \uD574\uC8FC\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</div>\n                <pre class=\"content__code\">\n// _core/Router.js\n\nlet selectedPath = location.hash.replace('#', '');\nlet selectedRoute = Home;\n\nif (!selectedPath.length) selectedPath = '/';\n\nfor (const path of Object.keys(this.routes)) {\n    if (selectedPath.includes(path)) {\n        selectedRoute = this.routes[selectedPath];\n\n        break;\n    }\n}\n\nif (selectedRoute) new selectedRoute(this.el);\n                </pre>\n            </div>\n        ";
    }
  }]);

  return Home;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./src/views/Kpop.js":
/*!***************************!*\
  !*** ./src/views/Kpop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kpop": () => (/* binding */ Kpop)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core */ "./src/_core/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Kpop = /*#__PURE__*/function (_Component) {
  _inherits(Kpop, _Component);

  var _super = _createSuper(Kpop);

  function Kpop() {
    _classCallCheck(this, Kpop);

    return _super.apply(this, arguments);
  }

  _createClass(Kpop, [{
    key: "template",
    value: function template() {
      return "\n            <div class=\"content\">\n                <div class=\"content__desc\">\n                    K-pop\uC740 \uB300\uD55C\uBBFC\uAD6D\uC5D0\uC11C \uB300\uC911\uC801 \uC778\uAE30\uB97C \uC5BB\uB294 \uC720\uD589 \uC74C\uC545\uC744 \uB9D0\uD569\uB2C8\uB2E4.<br><br>\n                    \uAC00\uC694\uB77C\uACE0 \uBD88\uB9AC\uAE30\uB3C4 \uD558\uBA70, \uC601\uBBF8\uAD8C\uC758 \uB300\uC911\uC74C\uC545\uC744 \uD31D\uC774\uB77C\uACE0 \uBD80\uB974\uACE0, \uC601\uBBF8\uAD8C \uC774\uC678\uC758 \uAD6D\uAC00\uC758 \uB300\uC911\uAC00\uC694\uB3C4 \uAD6D\uAC00 \uC774\uB2C8\uC15C\uC744 \uBD99\uC5EC \uB098\uD0C0\uB0B4\uB294 \uB370\uC11C K-POP\uC774\uB77C\uACE0 \uC4F0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.<br>\n                    \uD2B9\uD788 \uB300\uD55C\uBBFC\uAD6D \uB300\uC911\uAC00\uC694\uAC00 \uD574\uC678\uC5D0\uC11C \uC778\uAE30\uB97C \uC5BB\uAC8C \uB41C \uC774\uD6C4\uC5D0 K-pop\uC774\uB77C\uB294 \uBA85\uCE6D\uC774 \uB300\uD55C\uBBFC\uAD6D \uC774\uC678 \uAD6D\uAC00\uC5D0\uC11C \uB300\uD55C\uBBFC\uAD6D \uB300\uC911\uAC00\uC694\uB97C \uAC00\uB9AC\uD0A4\uB294 \uC774\uB984\uC73C\uB85C \uB110\uB9AC \uC0AC\uC6A9\uB41C\uB2E4.\n                </div>\n                <div class=\"content__logo\">\n                    <img src=\"https://ichef.bbci.co.uk/news/640/cpsprodpb/E475/production/_99458485_bts-2017-ama-backstage-portrait-billboard-1548.jpg\">\n                </div>\n                <div class=\"content__desc\">\n                    \uD604\uC7AC \uC81C\uC77C \uC720\uBA85\uD55C K-pop \uAC00\uC218\uC778 BTS\uBD84\uB4E4\uC758 \uB178\uB798\uC785\uB2C8\uB2E4.\n                </div>\n                <div class=\"content__video\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/WMweEpGlu_U\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n            </div>\n        ";
    }
  }]);

  return Kpop;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./src/views/index.js":
/*!****************************!*\
  !*** ./src/views/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.Home),
/* harmony export */   "Hiphop": () => (/* reexport safe */ _Hiphop__WEBPACK_IMPORTED_MODULE_1__.Hiphop),
/* harmony export */   "Ballad": () => (/* reexport safe */ _Ballad__WEBPACK_IMPORTED_MODULE_2__.Ballad),
/* harmony export */   "Kpop": () => (/* reexport safe */ _Kpop__WEBPACK_IMPORTED_MODULE_3__.Kpop)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/views/Home.js");
/* harmony import */ var _Hiphop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hiphop */ "./src/views/Hiphop.js");
/* harmony import */ var _Ballad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ballad */ "./src/views/Ballad.js");
/* harmony import */ var _Kpop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Kpop */ "./src/views/Kpop.js");





/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.header {\n  width: 100%;\n  height: 80px;\n  background-color: #344955;\n  display: inline-block;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  position: relative;\n}\n.header__list {\n  display: flex;\n}\n.header__list-item {\n  margin-right: 25px;\n}\n.header__list-item a {\n  display: inline-block;\n  padding: 10px 15px;\n  transition: 0.4s;\n}\n.header__list-item a.link-active {\n  color: #f9aa33;\n}\n.header__audio {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.footer {\n  position: fixed;\n  width: 100%;\n  height: 40px;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  color: #fff;\n  background-color: #344955;\n  line-height: 40px;\n}\n\n#content {\n  max-width: 1600px;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.content {\n  opacity: 0;\n  transform: translateY(-5%);\n  transition: 0.3s;\n}\n.content--active {\n  opacity: 1;\n  transform: translateY(0);\n}\n.content__desc {\n  margin-bottom: 40px;\n}\n.content__desc--s-margin {\n  margin-bottom: 10px;\n}\n.content__logo {\n  margin-bottom: 40px;\n}\n.content__logo img {\n  max-width: 200px;\n}\n.content__code {\n  background-color: #282b2e;\n  color: #fff;\n  padding: 20px;\n  font-size: 12px;\n  margin-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/_core/_reset.scss","webpack://./src/assets/scss/main.scss","webpack://./src/assets/scss/components/_header.scss","webpack://./src/assets/scss/_core/_variables.scss","webpack://./src/assets/scss/components/_footer.scss","webpack://./src/assets/scss/components/_content.scss"],"names":[],"mappings":"AAEA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACA,sBAAA;ACDD;;ADGA;EACI,cAAA;EACA,qBAAA;ACAJ;;ADEA;;EAEC,cAAA;ACCD;;ADCA;EACC,cAAA;ACED;;ADAA;EACC,gBAAA;ACGD;;ADDA;EACC,YAAA;ACID;;ADFA;;EAEC,WAAA;EACA,aAAA;ACKD;;ADHA;EACC,yBAAA;EACA,iBAAA;ACMD;;ACrDA;EACI,WAAA;EACA,YAAA;EACA,yBCHM;EDIN,qBAAA;EACA,WCHI;EDIJ,aAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;ADwDJ;ACvDI;EACI,aAAA;ADyDR;ACxDQ;EACI,kBAAA;AD0DZ;ACzDY;EACI,qBAAA;EACA,kBAAA;EACA,gBAAA;AD2DhB;AC1DgB;EACI,cClBX;AF8ET;ACvDI;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;ADyDR;;AGrFA;EACI,eAAA;EACA,WAAA;EACA,YAAA;EACA,OAAA;EACA,SAAA;EACA,kBAAA;EACA,WDLI;ECMJ,yBDRM;ECSN,iBAAA;AHwFJ;;AIjGA;EACI,iBAAA;EACA,cAAA;EACA,gBAAA;EACA,mBAAA;AJoGJ;;AIjGA;EACI,UAAA;EACA,0BAAA;EACA,gBAAA;AJoGJ;AInGI;EACI,UAAA;EACA,wBAAA;AJqGR;AInGI;EACI,mBAAA;AJqGR;AIpGQ;EACI,mBAAA;AJsGZ;AInGI;EACI,mBAAA;AJqGR;AIpGQ;EACI,gBAAA;AJsGZ;AInGI;EACI,yBFxBI;EEyBJ,WF3BA;EE4BA,aAAA;EACA,eAAA;EACA,mBAAA;AJqGR","sourcesContent":["// 브라우저 마다 기본 스타일이 조금씩 다르기 때문에 동일하게 초기화\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n\tbox-sizing: border-box;\r\n}\r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}","html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.header {\n  width: 100%;\n  height: 80px;\n  background-color: #344955;\n  display: inline-block;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  position: relative;\n}\n.header__list {\n  display: flex;\n}\n.header__list-item {\n  margin-right: 25px;\n}\n.header__list-item a {\n  display: inline-block;\n  padding: 10px 15px;\n  transition: 0.4s;\n}\n.header__list-item a.link-active {\n  color: #f9aa33;\n}\n.header__audio {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.footer {\n  position: fixed;\n  width: 100%;\n  height: 40px;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  color: #fff;\n  background-color: #344955;\n  line-height: 40px;\n}\n\n#content {\n  max-width: 1600px;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.content {\n  opacity: 0;\n  transform: translateY(-5%);\n  transition: 0.3s;\n}\n.content--active {\n  opacity: 1;\n  transform: translateY(0);\n}\n.content__desc {\n  margin-bottom: 40px;\n}\n.content__desc--s-margin {\n  margin-bottom: 10px;\n}\n.content__logo {\n  margin-bottom: 40px;\n}\n.content__logo img {\n  max-width: 200px;\n}\n.content__code {\n  background-color: #282b2e;\n  color: #fff;\n  padding: 20px;\n  font-size: 12px;\n  margin-bottom: 10px;\n}",".header {\r\n    width: 100%;\r\n    height: 80px;\r\n    background-color: $primary;\r\n    display: inline-block;\r\n    color: $white;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 20px;\r\n    position: relative;\r\n    &__list {\r\n        display: flex;\r\n        &-item {\r\n            margin-right: 25px;\r\n            a {\r\n                display: inline-block;\r\n                padding: 10px 15px;\r\n                transition: .4s;\r\n                &.link-active {\r\n                    color: $orange;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    &__audio {\r\n        position: absolute;\r\n        right: 20px;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n    }\r\n}","$primary: #344955;\r\n$orange: #f9aa33;\r\n$white: #fff;\r\n$black: #000;\r\n$dark-blue: #282b2e;",".footer {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 40px;\r\n    left: 0;\r\n    bottom: 0;\r\n    text-align: center;\r\n    color: $white;\r\n    background-color: $primary;\r\n    line-height: 40px;\r\n}","#content {\r\n    max-width: 1600px;\r\n    margin: 0 auto;\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.content {\r\n    opacity: 0;\r\n    transform: translateY(-5%);\r\n    transition: .3s;\r\n    &--active {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n    &__desc {\r\n        margin-bottom: 40px;\r\n        &--s-margin {\r\n            margin-bottom: 10px;\r\n        }\r\n    }\r\n    &__logo {\r\n        margin-bottom: 40px;\r\n        img {\r\n            max-width: 200px;\r\n        }\r\n    }\r\n    &__code {\r\n        background-color: $dark-blue;\r\n        color: $white;\r\n        padding: 20px;\r\n        font-size: 12px;\r\n        margin-bottom: 10px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scss/main.scss */ "./src/assets/scss/main.scss");


var $app = document.querySelector('#app');
new _App__WEBPACK_IMPORTED_MODULE_0__.App($app);
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map