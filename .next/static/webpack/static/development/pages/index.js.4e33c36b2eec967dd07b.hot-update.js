webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Clock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Clock */ "./components/Clock.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Text */ "./components/Text.js");










var _jsxFileName = "/Users/dallas/Documents/Gratitude/pages/index.js";







var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      time: '',
      timestamp: '',
      gratitudes: {
        "gratitude-0": ""
      },
      visions: {
        "vision-0": ""
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAddGratitude", function () {
      var gratitudeID = "gratitude-".concat(Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_12__["generateUniqueID"])());
      var gratitude = {};
      gratitude[gratitudeID] = "";

      var gratitudes = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state.gratitudes, gratitude);

      _this.setState({
        gratitudes: gratitudes
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAddVision", function () {
      var visionID = "vision-".concat(Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_12__["generateUniqueID"])());
      var vision = {};
      vision[visionID] = "";

      var visions = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state.visions, vision);

      _this.setState({
        visions: visions
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleRemoveGratitude", function (key) {
      if (key !== "gratitude-0") {
        var gratitudes = _this.state.gratitudes;
        delete gratitudes[key];

        _this.setState({
          gratitudes: gratitudes
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleRemoveVision", function (key) {
      if (key !== "vision-0") {
        var visions = _this.state.visions;
        delete visions[key];

        _this.setState({
          visions: visions
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSaveGratitude", function (e) {
      var gratitudes = _this.state.gratitudes;
      var id = e.target.id;
      var gratitudeText = e.target.value;
      gratitudes[id] = gratitudeText;

      _this.setState({
        gratitudes: gratitudes
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSaveVision", function (e) {
      var visions = _this.state.visions;
      var id = e.target.id;
      var visionText = e.target.value;
      visions[id] = visionText;

      _this.setState({
        visions: visions
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.handleCreateTimeString();
      this.timer = setInterval(function () {
        return _this2.handleCreateTimeString();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "handleCreateTimeString",
    value: function handleCreateTimeString() {
      var timestamp = new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()()).toTimeString();
      var H = timestamp.substr(0, 2);
      var h = H % 12 || 12;
      var ampm = H < 12 || H === 24 ? " AM" : " PM";
      var time = h + timestamp.substr(2, 3) + ampm;
      this.setState({
        time: time,
        timestamp: timestamp
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var gratitudes = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.gratitudes).map(function (key, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_15__["default"], {
          key: index,
          id: key,
          text: _this3.state.gratitudes[key],
          handleRemoveText: function handleRemoveText() {
            return _this3.handleRemoveGratitude(key);
          },
          handleSaveText: _this3.handleSaveGratitude,
          rows: "3",
          label: "Gratitude",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        });
      });

      var visions = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.visions).map(function (key, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_15__["default"], {
          key: index,
          id: key,
          text: _this3.state.visions[key],
          handleRemoveText: function handleRemoveText() {
            return _this3.handleRemoveVision(key);
          },
          handleSaveText: _this3.handleSaveVision,
          rows: "3",
          label: "Vision",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        });
      });

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3444713239" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-3444713239",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3444713239" + " " + "headspace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3444713239" + " " + "intention absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3444713239" + " " + "grateful",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Grateful"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3444713239" + " " + "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Vision"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3444713239" + " " + "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Clock__WEBPACK_IMPORTED_MODULE_14__["default"], {
        time: this.state.time,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3444713239" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3444713239" + " " + "absCenter quote-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3444713239" + " " + "quote-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "This is the text for the quote."))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3444713239" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3444713239" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, gratitudes, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-3444713239" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "+ Gratitude")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3444713239" + " " + "visions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, visions, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: this.handleAddVision,
        className: "jsx-3444713239" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "+ Vision")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3444713239" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3444713239" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Send")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "3444713239",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}@font-face{font-family:Righteous;src:url(\"/static/fonts/Righteous.ttf\") format(\"truetype\");}@font-face{font-family:Snippet;src:url(\"/static/fonts/Snippet.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;margin-bottom:6rem;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.inline{display:inline-block;}.dotted-text{text-align:center;padding:2rem;font-family:CodyStarLight,Sans-Serif,Arial;color:white;font-size:1.5rem;}.headspace{height:10vh;background:lightgrey;position:relative;}.intention{font-size:2rem;color:white;text-align:center;}.quotes{height:15vh;background:lightblue;}.grateful{font-family:Righteous,Sans-Serif,Arial;}.vision{font-family:Snippet,Sans-Serif,Arial;}.time{background:lightblue;}.gratitudes{background:lightblue;}.visions{background:lavender;}.footer{background:grey;position:fixed;bottom:0;width:100%;height:6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySjJCLEFBRytCLEFBSUksQUFJSixBQUlGLEFBSUUsQUFJYixBQU1TLEFBTUcsQUFHSCxBQU9OLEFBS0csQUFLSCxBQUk2QixBQUdGLEFBR2xCLEFBR0EsQUFHRCxBQUdKLFNBbEROLEdBc0JXLEFBVUEsR0FMVCxDQXdCRyxFQTdDUCxBQVNLLENBZEcsQ0FUd0MsQUF3RDFELENBcENBLEFBOEJBLEFBR0EsQ0FqRTRELEFBUUEsQUFRNUQsSUFaaUUsQUF1QnRELENBcUJTLElBWjJCLEFBb0NwQyxFQTdCUyxBQVVwQixFQS9CcUIsQUFNYSxFQStCbEMsRUFIQSxDQWlCYSxLQXhCYixNQUxBLEFBOEJjLEdBbkRkLFNBb0RBLFdBdENjLEVBeEJkLElBWkEsQUFRQSxNQTZCbUIsR0FqQ25CLGNBa0NBLHFDQVZBIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdlbmVyYXRlVW5pcXVlSUQgfSBmcm9tICcuLi9saWIvaGVscGVycydcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IENsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvQ2xvY2snXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL1RleHQnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGltZTogJycsXG4gICAgdGltZXN0YW1wOiAnJyxcbiAgICBncmF0aXR1ZGVzOiB7XG4gICAgICBcImdyYXRpdHVkZS0wXCI6IFwiXCJcbiAgICB9LFxuICAgIHZpc2lvbnM6IHtcbiAgICAgIFwidmlzaW9uLTBcIjogXCJcIlxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMuaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpLCAxMDAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZShEYXRlLm5vdygpKS50b1RpbWVTdHJpbmcoKVxuICAgIGNvbnN0IEggPSB0aW1lc3RhbXAuc3Vic3RyKDAsIDIpXG4gICAgY29uc3QgaCA9IEggJSAxMiB8fCAxMlxuICAgIGNvbnN0IGFtcG0gPSAoSCA8IDEyIHx8IEggPT09IDI0KSA/IFwiIEFNXCIgOiBcIiBQTVwiXG4gICAgY29uc3QgdGltZSA9IGggKyB0aW1lc3RhbXAuc3Vic3RyKDIsIDMpICsgYW1wbVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGltZSxcbiAgICAgIHRpbWVzdGFtcFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBZGRHcmF0aXR1ZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JhdGl0dWRlSUQgPSBgZ3JhdGl0dWRlLSR7Z2VuZXJhdGVVbmlxdWVJRCgpfWBcbiAgICBsZXQgZ3JhdGl0dWRlID0ge31cbiAgICBncmF0aXR1ZGVbZ3JhdGl0dWRlSURdID0gXCJcIlxuICAgIGNvbnN0IGdyYXRpdHVkZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmdyYXRpdHVkZXMsIGdyYXRpdHVkZSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGdyYXRpdHVkZXNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQWRkVmlzaW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHZpc2lvbklEID0gYHZpc2lvbi0ke2dlbmVyYXRlVW5pcXVlSUQoKX1gXG4gICAgbGV0IHZpc2lvbiA9IHt9XG4gICAgdmlzaW9uW3Zpc2lvbklEXSA9IFwiXCJcbiAgICBjb25zdCB2aXNpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS52aXNpb25zLCB2aXNpb24pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpb25zXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVJlbW92ZUdyYXRpdHVkZSA9IGtleSA9PiB7XG4gICAgaWYgKGtleSAhPT0gXCJncmF0aXR1ZGUtMFwiKSB7XG4gICAgICBjb25zdCB7IGdyYXRpdHVkZXMgfSA9IHRoaXMuc3RhdGVcbiAgICAgIGRlbGV0ZSBncmF0aXR1ZGVzW2tleV1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBncmF0aXR1ZGVzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlbW92ZVZpc2lvbiA9IGtleSA9PiB7XG4gICAgaWYgKGtleSAhPT0gXCJ2aXNpb24tMFwiKSB7XG4gICAgICBjb25zdCB7IHZpc2lvbnMgfSA9IHRoaXMuc3RhdGVcbiAgICAgIGRlbGV0ZSB2aXNpb25zW2tleV1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpb25zXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNhdmVHcmF0aXR1ZGUgPSBlID0+IHtcbiAgICBjb25zdCB7IGdyYXRpdHVkZXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkXG4gICAgY29uc3QgZ3JhdGl0dWRlVGV4dCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgZ3JhdGl0dWRlc1tpZF0gPSBncmF0aXR1ZGVUZXh0XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBncmF0aXR1ZGVzXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVNhdmVWaXNpb24gPSBlID0+IHtcbiAgICBjb25zdCB7IHZpc2lvbnMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkXG4gICAgY29uc3QgdmlzaW9uVGV4dCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgdmlzaW9uc1tpZF0gPSB2aXNpb25UZXh0XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpb25zXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBncmF0aXR1ZGVzID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5ncmF0aXR1ZGVzKS5tYXAoKGtleSwgaW5kZXgpID0+IDxUZXh0XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaWQ9e2tleX1cbiAgICAgIHRleHQ9e3RoaXMuc3RhdGUuZ3JhdGl0dWRlc1trZXldfVxuICAgICAgaGFuZGxlUmVtb3ZlVGV4dD17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmVHcmF0aXR1ZGUoa2V5KX1cbiAgICAgIGhhbmRsZVNhdmVUZXh0PXt0aGlzLmhhbmRsZVNhdmVHcmF0aXR1ZGV9XG4gICAgICByb3dzPVwiM1wiXG4gICAgICBsYWJlbD1cIkdyYXRpdHVkZVwiXG4gICAgLz5cbiAgICApXG4gICAgY29uc3QgdmlzaW9ucyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUudmlzaW9ucykubWFwKChrZXksIGluZGV4KSA9PiA8VGV4dFxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIGlkPXtrZXl9XG4gICAgICB0ZXh0PXt0aGlzLnN0YXRlLnZpc2lvbnNba2V5XX1cbiAgICAgIGhhbmRsZVJlbW92ZVRleHQ9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlVmlzaW9uKGtleSl9XG4gICAgICBoYW5kbGVTYXZlVGV4dD17dGhpcy5oYW5kbGVTYXZlVmlzaW9ufVxuICAgICAgcm93cz1cIjNcIlxuICAgICAgbGFiZWw9XCJWaXNpb25cIlxuICAgIC8+XG4gICAgKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZHNwYWNlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlbnRpb24gYWJzQ2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXRlZnVsXCI+R3JhdGVmdWw8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzaW9uXCI+VmlzaW9uPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGltZVwiPlxuICAgICAgICAgIDxDbG9jayB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicXVvdGVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNDZW50ZXIgcXVvdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlLXRleHRcIj5cbiAgICAgICAgICAgICAgVGhpcyBpcyB0aGUgdGV4dCBmb3IgdGhlIHF1b3RlLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyYXRpdHVkZXNcIj5cbiAgICAgICAgICB7Z3JhdGl0dWRlc31cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkR3JhdGl0dWRlfSBjbGFzc05hbWU9XCJkb3R0ZWQtdGV4dFwiPisgR3JhdGl0dWRlPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlzaW9uc1wiPlxuICAgICAgICAgIHt2aXNpb25zfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVBZGRWaXNpb259IGNsYXNzTmFtZT1cImRvdHRlZC10ZXh0XCI+KyBWaXNpb248L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdHRlZC10ZXh0XCI+U2VuZDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFppbGxhU2xhYjtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1ppbGxhU2xhYi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvZHlTdGFyTGlnaHQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9Db2R5U3Rhci1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1JpZ2h0ZW91cy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNuaXBwZXQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9TbmlwcGV0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XG4gICAgICB9XG4gICAgICAuYWJzQ2VudGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cbiAgICAgIC5pbmxpbmUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuZG90dGVkLXRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb2R5U3RhckxpZ2h0LCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIC5oZWFkc3BhY2Uge1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmludGVudGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucXVvdGVzIHtcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICB9XG4gICAgICAuZ3JhdGVmdWwge1xuICAgICAgICBmb250LWZhbWlseTogUmlnaHRlb3VzLCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgIH1cbiAgICAgIC52aXNpb24ge1xuICAgICAgICBmb250LWZhbWlseTogU25pcHBldCwgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICB9XG4gICAgICAudGltZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICAgIC5ncmF0aXR1ZGVzIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgfVxuICAgICAgLnZpc2lvbnMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgICAgIH1cbiAgICAgIC5mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4e33c36b2eec967dd07b.hot-update.js.map