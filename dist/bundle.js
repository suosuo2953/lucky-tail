webpackJsonp([0],{

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chat = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__(274);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Avatar = __webpack_require__(276);

var _Avatar2 = _interopRequireDefault(_Avatar);

__webpack_require__(432);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = exports.Chat = function (_Component) {
  _inherits(Chat, _Component);

  function Chat() {
    _classCallCheck(this, Chat);

    return _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).apply(this, arguments));
  }

  _createClass(Chat, [{
    key: 'render',
    value: function render() {
      var avatar = __webpack_require__(430);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AppBar2.default, { title: 'title',
          iconElementRight: _react2.default.createElement(_Avatar2.default, { src: avatar }) })
      );
    }
  }]);

  return Chat;
}(_react.Component);

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactRouterDom = __webpack_require__(172);

var _Chat = __webpack_require__(170);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = __webpack_require__(171);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactDom = __webpack_require__(49);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTapEventPlugin = __webpack_require__(173);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();
_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { path: '/chat', component: _Chat.Chat })
  )
), document.getElementById("content"));

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(229)(undefined);
// imports


// module
exports.push([module.i, "body {\n  margin: 0; }\n", ""]);

// exports


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "avatar.jpg";

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(431)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[174]);
//# sourceMappingURL=bundle.js.map