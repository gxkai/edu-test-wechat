(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=script&parse=COMPONENT&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _utils.initTestEnv)();

var AtDivider = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtDivider, _AtComponent);

  function AtDivider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtDivider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtDivider.__proto__ || Object.getPrototypeOf(AtDivider)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "content", "className", "customStyle", "height", "fontColor", "fontSize", "lineColor", "children"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtDivider, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtDivider.prototype.__proto__ || Object.getPrototypeOf(AtDivider.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          className = _props.className,
          customStyle = _props.customStyle,
          content = _props.content,
          height = _props.height,
          fontColor = _props.fontColor,
          fontSize = _props.fontSize,
          lineColor = _props.lineColor;

      var rootStyle = {
        height: height ? "" + _taroWeapp2.default.pxTransform(Number(height)) : ''
      };
      var fontStyle = {
        color: fontColor,
        'font-size': fontSize ? "" + _taroWeapp2.default.pxTransform(Number(fontSize)) : ''
      };
      var lineStyle = {
        backgroundColor: lineColor
      };
      var anonymousState__temp = (0, _classnames2.default)('at-divider', className);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(rootStyle, customStyle));
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(fontStyle);
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)(lineStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        content: content
      });
      return this.__state;
    }
  }]);

  return AtDivider;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index", _temp2);


AtDivider.defaultProps = {
  content: '',
  height: 0,
  fontColor: '',
  fontSize: 0,
  lineColor: ''
};
AtDivider.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  content: _propTypes2.default.string,
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  fontColor: _propTypes2.default.string,
  fontSize: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  lineColor: _propTypes2.default.string
};
exports.default = AtDivider;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.6@@tarojs/taro-weapp/index.js").default.createComponent(AtDivider));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\USER-PC\\Desktop\\code\\xueshang\\node_modules&outputPath=npm!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=template&parse=COMPONENT&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=C:/Users/USER-PC/Desktop/code/xueshang/node_modules&outputPath=npm!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.wxml";

/***/ }),

/***/ "./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=script&parse=COMPONENT&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_USER_PC_Desktop_code_xueshang_node_modules_outputPath_npm_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=C:/Users/USER-PC/Desktop/code/xueshang/node_modules&outputPath=npm!../../../../../_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\USER-PC\\Desktop\\code\\xueshang\\node_modules&outputPath=npm!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_USER_PC_Desktop_code_xueshang_node_modules_outputPath_npm_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_C_Users_USER_PC_Desktop_code_xueshang_node_modules_outputPath_npm_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_C_Users_USER_PC_Desktop_code_xueshang_node_modules_outputPath_npm_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_C_Users_USER_PC_Desktop_code_xueshang_node_modules_outputPath_npm_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/divider/index.tsx","runtime","vendors"]]]);