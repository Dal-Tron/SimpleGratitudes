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
      quotes: [{
        "author-1": "This is the first quote."
      }, {
        "author-2": "This is the second quote."
      }],
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
            lineNumber: 106
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
            lineNumber: 116
          },
          __self: this
        });
      });

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2003625128" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-2003625128",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-2003625128" + " " + "headspace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2003625128" + " " + "intention absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2003625128" + " " + "grateful",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Grateful"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2003625128" + " " + "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Vision"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-2003625128" + " " + "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Clock__WEBPACK_IMPORTED_MODULE_14__["default"], {
        time: this.state.time,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-2003625128" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2003625128" + " " + "quotes-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2003625128" + " " + "quote-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "This is the text for the quote. And it is very long. And it goes on for a few lines."))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-2003625128" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-2003625128" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, gratitudes, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-2003625128" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "+ Gratitude")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-2003625128" + " " + "visions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, visions, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: this.handleAddVision,
        className: "jsx-2003625128" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "+ Vision")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-2003625128" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2003625128" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Upload"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2003625128" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Download"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-2003625128" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Donate")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "2003625128",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}@font-face{font-family:Righteous;src:url(\"/static/fonts/Righteous.ttf\") format(\"truetype\");}@font-face{font-family:Snippet;src:url(\"/static/fonts/Snippet.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;margin-bottom:6rem;background:lightgrey;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.inline{display:inline-block;}.dotted-text{text-align:center;padding:2rem;font-family:CodyStarLight,Sans-Serif,Arial;color:white;font-size:1.5rem;}.headspace{height:10vh;background:lightgrey;position:relative;}.intention{font-size:2rem;color:white;text-align:center;}.quotes{background:lightblue;}.quotes-container{position:relative;color:white;font-family:Righteous,Sans-Serif,Arial;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.5rem;padding-top:2rem;}.quote-text{border-left:5px solid lightgrey;max-width:26rem;margin-left:auto;margin-right:auto;padding-left:1rem;}.grateful{font-family:Righteous,Sans-Serif,Arial;}.vision{font-family:Snippet,Sans-Serif,Arial;}.time{background:grey;}.gratitudes{background:lightblue;}.visions{background:lightgrey;}.footer{background:grey;position:fixed;bottom:0;width:100%;height:6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSzJCLEFBRytCLEFBSUksQUFJSixBQUlGLEFBSUUsQUFJYixBQU9TLEFBTUcsQUFHSCxBQU9OLEFBS0csQUFLTSxBQUdILEFBUWMsQUFPUyxBQUdGLEFBR3ZCLEFBR0ssQUFHQSxBQUdMLFNBakVOLEdBdUJXLEdBS1QsQ0E2QmQsQUFTaUIsRUEzRFAsQUFTSyxBQW9CRCxDQW5DSSxDQVR3QyxDQXFCMUQsQUFvQkEsQUEyQkEsQUFHQSxDQW5GNEQsQUFRQSxBQVE1RCxJQVppRSxBQXdCdEQsQ0FxQlMsR0FRdUIsQ0FwQkksQUFrRHBDLENBdkJPLENBcEJFLEVBdEJDLEFBT2EsRUE2Q2xDLEVBSEEsQ0FpQmEsS0F0Q2IsR0FlbUIsR0FwQm5CLEFBNENjLEdBbEVTLFNBbUV2QixFQXhCb0IsSUFSQyxLQXBCUCxDQWRkLENBWEEsSUFaQSxBQVFBLEdBMERvQixHQTVCRCxHQWxDbkIsWUErREEsRUE1QkEscUNBVkEsc0JBNkJtQixpQkFDQSxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2VuZXJhdGVVbmlxdWVJRCB9IGZyb20gJy4uL2xpYi9oZWxwZXJzJ1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9DbG9jaydcbmltcG9ydCBUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dCdcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0aW1lOiAnJyxcbiAgICB0aW1lc3RhbXA6ICcnLFxuICAgIHF1b3RlczogW1xuICAgICAgeyBcImF1dGhvci0xXCI6IFwiVGhpcyBpcyB0aGUgZmlyc3QgcXVvdGUuXCIgfSxcbiAgICAgIHsgXCJhdXRob3ItMlwiOiBcIlRoaXMgaXMgdGhlIHNlY29uZCBxdW90ZS5cIiB9XG4gICAgXSxcbiAgICBncmF0aXR1ZGVzOiB7XG4gICAgICBcImdyYXRpdHVkZS0wXCI6IFwiXCJcbiAgICB9LFxuICAgIHZpc2lvbnM6IHtcbiAgICAgIFwidmlzaW9uLTBcIjogXCJcIlxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMuaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpLCAxMDAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZShEYXRlLm5vdygpKS50b1RpbWVTdHJpbmcoKVxuICAgIGNvbnN0IEggPSB0aW1lc3RhbXAuc3Vic3RyKDAsIDIpXG4gICAgY29uc3QgaCA9IEggJSAxMiB8fCAxMlxuICAgIGNvbnN0IGFtcG0gPSAoSCA8IDEyIHx8IEggPT09IDI0KSA/IFwiIEFNXCIgOiBcIiBQTVwiXG4gICAgY29uc3QgdGltZSA9IGggKyB0aW1lc3RhbXAuc3Vic3RyKDIsIDMpICsgYW1wbVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGltZSxcbiAgICAgIHRpbWVzdGFtcFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBZGRHcmF0aXR1ZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JhdGl0dWRlSUQgPSBgZ3JhdGl0dWRlLSR7Z2VuZXJhdGVVbmlxdWVJRCgpfWBcbiAgICBsZXQgZ3JhdGl0dWRlID0ge31cbiAgICBncmF0aXR1ZGVbZ3JhdGl0dWRlSURdID0gXCJcIlxuICAgIGNvbnN0IGdyYXRpdHVkZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmdyYXRpdHVkZXMsIGdyYXRpdHVkZSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGdyYXRpdHVkZXNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQWRkVmlzaW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHZpc2lvbklEID0gYHZpc2lvbi0ke2dlbmVyYXRlVW5pcXVlSUQoKX1gXG4gICAgbGV0IHZpc2lvbiA9IHt9XG4gICAgdmlzaW9uW3Zpc2lvbklEXSA9IFwiXCJcbiAgICBjb25zdCB2aXNpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS52aXNpb25zLCB2aXNpb24pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpb25zXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVJlbW92ZUdyYXRpdHVkZSA9IGtleSA9PiB7XG4gICAgaWYgKGtleSAhPT0gXCJncmF0aXR1ZGUtMFwiKSB7XG4gICAgICBjb25zdCB7IGdyYXRpdHVkZXMgfSA9IHRoaXMuc3RhdGVcbiAgICAgIGRlbGV0ZSBncmF0aXR1ZGVzW2tleV1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBncmF0aXR1ZGVzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlbW92ZVZpc2lvbiA9IGtleSA9PiB7XG4gICAgaWYgKGtleSAhPT0gXCJ2aXNpb24tMFwiKSB7XG4gICAgICBjb25zdCB7IHZpc2lvbnMgfSA9IHRoaXMuc3RhdGVcbiAgICAgIGRlbGV0ZSB2aXNpb25zW2tleV1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpb25zXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNhdmVHcmF0aXR1ZGUgPSBlID0+IHtcbiAgICBjb25zdCB7IGdyYXRpdHVkZXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkXG4gICAgY29uc3QgZ3JhdGl0dWRlVGV4dCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgZ3JhdGl0dWRlc1tpZF0gPSBncmF0aXR1ZGVUZXh0XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBncmF0aXR1ZGVzXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVNhdmVWaXNpb24gPSBlID0+IHtcbiAgICBjb25zdCB7IHZpc2lvbnMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkXG4gICAgY29uc3QgdmlzaW9uVGV4dCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgdmlzaW9uc1tpZF0gPSB2aXNpb25UZXh0XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpb25zXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBncmF0aXR1ZGVzID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5ncmF0aXR1ZGVzKS5tYXAoKGtleSwgaW5kZXgpID0+IDxUZXh0XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaWQ9e2tleX1cbiAgICAgIHRleHQ9e3RoaXMuc3RhdGUuZ3JhdGl0dWRlc1trZXldfVxuICAgICAgaGFuZGxlUmVtb3ZlVGV4dD17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmVHcmF0aXR1ZGUoa2V5KX1cbiAgICAgIGhhbmRsZVNhdmVUZXh0PXt0aGlzLmhhbmRsZVNhdmVHcmF0aXR1ZGV9XG4gICAgICByb3dzPVwiM1wiXG4gICAgICBsYWJlbD1cIkdyYXRpdHVkZVwiXG4gICAgLz5cbiAgICApXG4gICAgY29uc3QgdmlzaW9ucyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUudmlzaW9ucykubWFwKChrZXksIGluZGV4KSA9PiA8VGV4dFxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIGlkPXtrZXl9XG4gICAgICB0ZXh0PXt0aGlzLnN0YXRlLnZpc2lvbnNba2V5XX1cbiAgICAgIGhhbmRsZVJlbW92ZVRleHQ9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlVmlzaW9uKGtleSl9XG4gICAgICBoYW5kbGVTYXZlVGV4dD17dGhpcy5oYW5kbGVTYXZlVmlzaW9ufVxuICAgICAgcm93cz1cIjNcIlxuICAgICAgbGFiZWw9XCJWaXNpb25cIlxuICAgIC8+XG4gICAgKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZHNwYWNlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlbnRpb24gYWJzQ2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXRlZnVsXCI+R3JhdGVmdWw8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzaW9uXCI+VmlzaW9uPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGltZVwiPlxuICAgICAgICAgIDxDbG9jayB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicXVvdGVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlLXRleHRcIj5cbiAgICAgICAgICAgICAgVGhpcyBpcyB0aGUgdGV4dCBmb3IgdGhlIHF1b3RlLiBBbmQgaXQgaXMgdmVyeSBsb25nLiBBbmQgaXQgZ29lcyBvbiBmb3IgYSBmZXcgbGluZXMuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JhdGl0dWRlc1wiPlxuICAgICAgICAgIHtncmF0aXR1ZGVzfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVBZGRHcmF0aXR1ZGV9IGNsYXNzTmFtZT1cImRvdHRlZC10ZXh0XCI+KyBHcmF0aXR1ZGU8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aXNpb25zXCI+XG4gICAgICAgICAge3Zpc2lvbnN9XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFZpc2lvbn0gY2xhc3NOYW1lPVwiZG90dGVkLXRleHRcIj4rIFZpc2lvbjwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90dGVkLXRleHRcIj5VcGxvYWQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdHRlZC10ZXh0XCI+RG93bmxvYWQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdHRlZC10ZXh0XCI+RG9uYXRlPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogWmlsbGFTbGFiO1xuICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvWmlsbGFTbGFiLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogQ29keVN0YXJMaWdodDtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL0NvZHlTdGFyLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogUmlnaHRlb3VzO1xuICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvUmlnaHRlb3VzLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogU25pcHBldDtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1NuaXBwZXQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgfVxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAgICAgfVxuICAgICAgLmFic0NlbnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG4gICAgICAuaW5saW5lIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgLmRvdHRlZC10ZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICBmb250LWZhbWlseTogQ29keVN0YXJMaWdodCwgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgICAuaGVhZHNwYWNlIHtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5pbnRlbnRpb24ge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnF1b3RlcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICAgIC5xdW90ZXMtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSaWdodGVvdXMsIFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICB9XG4gICAgICAucXVvdGUtdGV4dCB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICBtYXgtd2lkdGg6IDI2cmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICB9XG4gICAgICAuZ3JhdGVmdWwge1xuICAgICAgICBmb250LWZhbWlseTogUmlnaHRlb3VzLCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgIH1cbiAgICAgIC52aXNpb24ge1xuICAgICAgICBmb250LWZhbWlseTogU25pcHBldCwgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICB9XG4gICAgICAudGltZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgICB9XG4gICAgICAuZ3JhdGl0dWRlcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICAgIC52aXNpb25zIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAgICAgfVxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.40dc887fe5e24e4d423f.hot-update.js.map