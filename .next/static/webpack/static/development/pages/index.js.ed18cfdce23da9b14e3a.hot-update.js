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
        className: "jsx-4101580328" + " " + "page-wrapper",
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
        className: "jsx-4101580328",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-4101580328" + " " + "headspace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-4101580328" + " " + "intention absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-4101580328" + " " + "grateful",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Grateful"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-4101580328" + " " + "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Vision"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-4101580328" + " " + "time",
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
        className: "jsx-4101580328" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-4101580328" + " " + "quotes-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-4101580328" + " " + "absCenter quote-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "This is the text for the quote."))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-4101580328" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-4101580328" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, gratitudes, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-4101580328" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "+ Gratitude")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-4101580328" + " " + "visions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, visions, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: this.handleAddVision,
        className: "jsx-4101580328" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "+ Vision")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-4101580328" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-4101580328" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Upload"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-4101580328" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Download"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-4101580328" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Donate")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "4101580328",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}@font-face{font-family:Righteous;src:url(\"/static/fonts/Righteous.ttf\") format(\"truetype\");}@font-face{font-family:Snippet;src:url(\"/static/fonts/Snippet.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;margin-bottom:6rem;background:lightgrey;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.inline{display:inline-block;}.dotted-text{text-align:center;padding:2rem;font-family:CodyStarLight,Sans-Serif,Arial;color:white;font-size:1.5rem;}.headspace{height:10vh;background:lightgrey;position:relative;}.intention{font-size:2rem;color:white;text-align:center;}.quotes{background:lightblue;}.quotes-container{height:15vh;position:relative;color:white;font-family:Righteous,Sans-Serif,Arial;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.5rem;}.quote-text{padding:2rem;border-left:5px solid lightgrey;}.grateful{font-family:Righteous,Sans-Serif,Arial;}.vision{font-family:Snippet,Sans-Serif,Arial;}.time{background:grey;}.gratitudes{background:lightblue;}.visions{background:lightgrey;}.footer{background:grey;position:fixed;bottom:0;width:100%;height:6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSzJCLEFBRytCLEFBSUksQUFJSixBQUlGLEFBSUUsQUFJYixBQU9TLEFBTUcsQUFHSCxBQU9OLEFBS0csQUFLTSxBQUdULEFBUUMsQUFJNEIsQUFHRixBQUd2QixBQUdLLEFBR0EsQUFHTCxTQTlETixHQXVCVyxBQWFILENBUWMsRUFoQnBCLENBMEJkLEFBU2lCLEVBeERQLEFBU0ssQ0FmRyxDQVR3QyxDQXFCMUQsQUFvQkEsQUF3QkEsQUFHQSxDQWhGNEQsQUFRQSxBQVE1RCxJQVppRSxBQXdCdEQsQ0FxQlMsR0FRTixDQXBCaUMsQUErQ3BDLEVBeENTLEVBdEJDLEFBT2EsRUEwQ2xDLEVBSEEsQ0FpQmEsRUEzQjhCLEdBUjNDLEFBZUEsTUFwQkEsQUF5Q2MsR0EvRFMsU0FnRXZCLFdBakRjLENBZGQsQ0FYQSxJQVpBLEFBUUEsQ0FrRHFCLEtBcEJGLEdBbENuQixjQW1DQSxxQ0FWQSxrQ0E4Qm1CLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9HcmF0aXR1ZGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZW5lcmF0ZVVuaXF1ZUlEIH0gZnJvbSAnLi4vbGliL2hlbHBlcnMnXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDbG9jayBmcm9tICcuLi9jb21wb25lbnRzL0Nsb2NrJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0J1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRpbWU6ICcnLFxuICAgIHRpbWVzdGFtcDogJycsXG4gICAgcXVvdGVzOiBbXG4gICAgICB7IFwiYXV0aG9yLTFcIjogXCJUaGlzIGlzIHRoZSBmaXJzdCBxdW90ZS5cIiB9LFxuICAgICAgeyBcImF1dGhvci0yXCI6IFwiVGhpcyBpcyB0aGUgc2Vjb25kIHF1b3RlLlwiIH1cbiAgICBdLFxuICAgIGdyYXRpdHVkZXM6IHtcbiAgICAgIFwiZ3JhdGl0dWRlLTBcIjogXCJcIlxuICAgIH0sXG4gICAgdmlzaW9uczoge1xuICAgICAgXCJ2aXNpb24tMFwiOiBcIlwiXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oYW5kbGVDcmVhdGVUaW1lU3RyaW5nKClcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5oYW5kbGVDcmVhdGVUaW1lU3RyaW5nKCksIDEwMDApXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH1cblxuICBoYW5kbGVDcmVhdGVUaW1lU3RyaW5nKCkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKERhdGUubm93KCkpLnRvVGltZVN0cmluZygpXG4gICAgY29uc3QgSCA9IHRpbWVzdGFtcC5zdWJzdHIoMCwgMilcbiAgICBjb25zdCBoID0gSCAlIDEyIHx8IDEyXG4gICAgY29uc3QgYW1wbSA9IChIIDwgMTIgfHwgSCA9PT0gMjQpID8gXCIgQU1cIiA6IFwiIFBNXCJcbiAgICBjb25zdCB0aW1lID0gaCArIHRpbWVzdGFtcC5zdWJzdHIoMiwgMykgKyBhbXBtXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW1lLFxuICAgICAgdGltZXN0YW1wXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFkZEdyYXRpdHVkZSA9ICgpID0+IHtcbiAgICBjb25zdCBncmF0aXR1ZGVJRCA9IGBncmF0aXR1ZGUtJHtnZW5lcmF0ZVVuaXF1ZUlEKCl9YFxuICAgIGxldCBncmF0aXR1ZGUgPSB7fVxuICAgIGdyYXRpdHVkZVtncmF0aXR1ZGVJRF0gPSBcIlwiXG4gICAgY29uc3QgZ3JhdGl0dWRlcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZ3JhdGl0dWRlcywgZ3JhdGl0dWRlKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZ3JhdGl0dWRlc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBZGRWaXNpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgdmlzaW9uSUQgPSBgdmlzaW9uLSR7Z2VuZXJhdGVVbmlxdWVJRCgpfWBcbiAgICBsZXQgdmlzaW9uID0ge31cbiAgICB2aXNpb25bdmlzaW9uSURdID0gXCJcIlxuICAgIGNvbnN0IHZpc2lvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnZpc2lvbnMsIHZpc2lvbilcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2lvbnNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUmVtb3ZlR3JhdGl0dWRlID0ga2V5ID0+IHtcbiAgICBpZiAoa2V5ICE9PSBcImdyYXRpdHVkZS0wXCIpIHtcbiAgICAgIGNvbnN0IHsgZ3JhdGl0dWRlcyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgZGVsZXRlIGdyYXRpdHVkZXNba2V5XVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGdyYXRpdHVkZXNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVtb3ZlVmlzaW9uID0ga2V5ID0+IHtcbiAgICBpZiAoa2V5ICE9PSBcInZpc2lvbi0wXCIpIHtcbiAgICAgIGNvbnN0IHsgdmlzaW9ucyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgZGVsZXRlIHZpc2lvbnNba2V5XVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2lvbnNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2F2ZUdyYXRpdHVkZSA9IGUgPT4ge1xuICAgIGNvbnN0IHsgZ3JhdGl0dWRlcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCBncmF0aXR1ZGVUZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICBncmF0aXR1ZGVzW2lkXSA9IGdyYXRpdHVkZVRleHRcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGdyYXRpdHVkZXNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU2F2ZVZpc2lvbiA9IGUgPT4ge1xuICAgIGNvbnN0IHsgdmlzaW9ucyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCB2aXNpb25UZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICB2aXNpb25zW2lkXSA9IHZpc2lvblRleHRcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2lvbnNcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGdyYXRpdHVkZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmdyYXRpdHVkZXMpLm1hcCgoa2V5LCBpbmRleCkgPT4gPFRleHRcbiAgICAgIGtleT17aW5kZXh9XG4gICAgICBpZD17a2V5fVxuICAgICAgdGV4dD17dGhpcy5zdGF0ZS5ncmF0aXR1ZGVzW2tleV19XG4gICAgICBoYW5kbGVSZW1vdmVUZXh0PXsoKSA9PiB0aGlzLmhhbmRsZVJlbW92ZUdyYXRpdHVkZShrZXkpfVxuICAgICAgaGFuZGxlU2F2ZVRleHQ9e3RoaXMuaGFuZGxlU2F2ZUdyYXRpdHVkZX1cbiAgICAgIHJvd3M9XCIzXCJcbiAgICAgIGxhYmVsPVwiR3JhdGl0dWRlXCJcbiAgICAvPlxuICAgIClcbiAgICBjb25zdCB2aXNpb25zID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS52aXNpb25zKS5tYXAoKGtleSwgaW5kZXgpID0+IDxUZXh0XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaWQ9e2tleX1cbiAgICAgIHRleHQ9e3RoaXMuc3RhdGUudmlzaW9uc1trZXldfVxuICAgICAgaGFuZGxlUmVtb3ZlVGV4dD17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmVWaXNpb24oa2V5KX1cbiAgICAgIGhhbmRsZVNhdmVUZXh0PXt0aGlzLmhhbmRsZVNhdmVWaXNpb259XG4gICAgICByb3dzPVwiM1wiXG4gICAgICBsYWJlbD1cIlZpc2lvblwiXG4gICAgLz5cbiAgICApXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkc3BhY2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVudGlvbiBhYnNDZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhdGVmdWxcIj5HcmF0ZWZ1bDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpb25cIj5WaXNpb248L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aW1lXCI+XG4gICAgICAgICAgPENsb2NrIHRpbWU9e3RoaXMuc3RhdGUudGltZX0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJxdW90ZXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3Rlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzQ2VudGVyIHF1b3RlLXRleHRcIj5cbiAgICAgICAgICAgICAgVGhpcyBpcyB0aGUgdGV4dCBmb3IgdGhlIHF1b3RlLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyYXRpdHVkZXNcIj5cbiAgICAgICAgICB7Z3JhdGl0dWRlc31cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkR3JhdGl0dWRlfSBjbGFzc05hbWU9XCJkb3R0ZWQtdGV4dFwiPisgR3JhdGl0dWRlPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlzaW9uc1wiPlxuICAgICAgICAgIHt2aXNpb25zfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVBZGRWaXNpb259IGNsYXNzTmFtZT1cImRvdHRlZC10ZXh0XCI+KyBWaXNpb248L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdHRlZC10ZXh0XCI+VXBsb2FkPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3R0ZWQtdGV4dFwiPkRvd25sb2FkPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3R0ZWQtdGV4dFwiPkRvbmF0ZTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFppbGxhU2xhYjtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1ppbGxhU2xhYi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvZHlTdGFyTGlnaHQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9Db2R5U3Rhci1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1JpZ2h0ZW91cy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNuaXBwZXQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9TbmlwcGV0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICAgIH1cbiAgICAgIC5hYnNDZW50ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuICAgICAgLmlubGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5kb3R0ZWQtdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvZHlTdGFyTGlnaHQsIFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgICAgLmhlYWRzcGFjZSB7XG4gICAgICAgIGhlaWdodDogMTB2aDtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuaW50ZW50aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5xdW90ZXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICB9XG4gICAgICAucXVvdGVzLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTV2aDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSaWdodGVvdXMsIFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIC5xdW90ZS10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICB9XG4gICAgICAuZ3JhdGVmdWwge1xuICAgICAgICBmb250LWZhbWlseTogUmlnaHRlb3VzLCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgIH1cbiAgICAgIC52aXNpb24ge1xuICAgICAgICBmb250LWZhbWlseTogU25pcHBldCwgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICB9XG4gICAgICAudGltZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgICB9XG4gICAgICAuZ3JhdGl0dWRlcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICAgIC52aXNpb25zIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAgICAgfVxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ed18cfdce23da9b14e3a.hot-update.js.map