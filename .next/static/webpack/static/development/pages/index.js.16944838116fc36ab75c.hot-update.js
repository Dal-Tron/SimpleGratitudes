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
        className: "jsx-3706663111" + " " + "page-wrapper",
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
        className: "jsx-3706663111",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3706663111" + " " + "headspace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3706663111" + " " + "intention absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3706663111" + " " + "grateful",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Grateful"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3706663111" + " " + "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Vision"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3706663111" + " " + "time",
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
        className: "jsx-3706663111" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3706663111" + " " + "quote-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3706663111" + " " + "quote-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "This is the text for the quote."))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3706663111" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3706663111" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, gratitudes, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-3706663111" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "+ Gratitude")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3706663111" + " " + "visions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, visions, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: this.handleAddVision,
        className: "jsx-3706663111" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "+ Vision")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3706663111" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3706663111" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Send")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "3706663111",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}@font-face{font-family:Righteous;src:url(\"/static/fonts/Righteous.ttf\") format(\"truetype\");}@font-face{font-family:Snippet;src:url(\"/static/fonts/Snippet.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;margin-bottom:6rem;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.inline{display:inline-block;}.dotted-text{text-align:center;padding:2rem;font-family:CodyStarLight,Sans-Serif,Arial;color:white;font-size:1.5rem;}.headspace{height:10vh;background:lightgrey;position:relative;}.intention{font-size:2rem;color:white;text-align:center;}.grateful{font-family:Righteous,Sans-Serif,Arial;}.vision{font-family:Snippet,Sans-Serif,Arial;}.time{background:lightblue;}.gratitudes{background:lightblue;}.visions{background:lavender;}.footer{background:grey;position:fixed;bottom:0;width:100%;height:6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySjJCLEFBRytCLEFBSUksQUFJSixBQUlGLEFBSUUsQUFJYixBQU1TLEFBTUcsQUFHSCxBQU9OLEFBS0csQUFLMEIsQUFHRixBQUdsQixBQUdBLEFBR0QsQUFHSixTQTlDTixHQXNCVyxHQUtULENBb0JHLEVBekNQLEFBU0ssQ0FkRyxDQVR3QyxBQW9EMUQsQ0FoQ0EsQUEwQkEsQUFHQSxDQTdENEQsQUFRQSxBQVE1RCxJQVppRSxBQXVCdEQsQ0FxQlMsSUFaMkIsQUFnQ3BDLEVBekJTLEVBckJDLEFBTWEsRUEyQmxDLEVBSEEsQ0FpQmEsS0FwQmIsTUFMQSxBQTBCYyxHQS9DZCxTQWdEQSxXQWxDYyxFQXhCZCxJQVpBLEFBUUEsTUE2Qm1CLEdBakNuQixjQWtDQSxxQ0FWQSIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9HcmF0aXR1ZGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZW5lcmF0ZVVuaXF1ZUlEIH0gZnJvbSAnLi4vbGliL2hlbHBlcnMnXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDbG9jayBmcm9tICcuLi9jb21wb25lbnRzL0Nsb2NrJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0J1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRpbWU6ICcnLFxuICAgIHRpbWVzdGFtcDogJycsXG4gICAgZ3JhdGl0dWRlczoge1xuICAgICAgXCJncmF0aXR1ZGUtMFwiOiBcIlwiXG4gICAgfSxcbiAgICB2aXNpb25zOiB7XG4gICAgICBcInZpc2lvbi0wXCI6IFwiXCJcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKVxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKSwgMTAwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgfVxuXG4gIGhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoRGF0ZS5ub3coKSkudG9UaW1lU3RyaW5nKClcbiAgICBjb25zdCBIID0gdGltZXN0YW1wLnN1YnN0cigwLCAyKVxuICAgIGNvbnN0IGggPSBIICUgMTIgfHwgMTJcbiAgICBjb25zdCBhbXBtID0gKEggPCAxMiB8fCBIID09PSAyNCkgPyBcIiBBTVwiIDogXCIgUE1cIlxuICAgIGNvbnN0IHRpbWUgPSBoICsgdGltZXN0YW1wLnN1YnN0cigyLCAzKSArIGFtcG1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRpbWUsXG4gICAgICB0aW1lc3RhbXBcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQWRkR3JhdGl0dWRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyYXRpdHVkZUlEID0gYGdyYXRpdHVkZS0ke2dlbmVyYXRlVW5pcXVlSUQoKX1gXG4gICAgbGV0IGdyYXRpdHVkZSA9IHt9XG4gICAgZ3JhdGl0dWRlW2dyYXRpdHVkZUlEXSA9IFwiXCJcbiAgICBjb25zdCBncmF0aXR1ZGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5ncmF0aXR1ZGVzLCBncmF0aXR1ZGUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBncmF0aXR1ZGVzXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFkZFZpc2lvbiA9ICgpID0+IHtcbiAgICBjb25zdCB2aXNpb25JRCA9IGB2aXNpb24tJHtnZW5lcmF0ZVVuaXF1ZUlEKCl9YFxuICAgIGxldCB2aXNpb24gPSB7fVxuICAgIHZpc2lvblt2aXNpb25JRF0gPSBcIlwiXG4gICAgY29uc3QgdmlzaW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUudmlzaW9ucywgdmlzaW9uKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaW9uc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVSZW1vdmVHcmF0aXR1ZGUgPSBrZXkgPT4ge1xuICAgIGlmIChrZXkgIT09IFwiZ3JhdGl0dWRlLTBcIikge1xuICAgICAgY29uc3QgeyBncmF0aXR1ZGVzIH0gPSB0aGlzLnN0YXRlXG4gICAgICBkZWxldGUgZ3JhdGl0dWRlc1trZXldXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZ3JhdGl0dWRlc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZW1vdmVWaXNpb24gPSBrZXkgPT4ge1xuICAgIGlmIChrZXkgIT09IFwidmlzaW9uLTBcIikge1xuICAgICAgY29uc3QgeyB2aXNpb25zIH0gPSB0aGlzLnN0YXRlXG4gICAgICBkZWxldGUgdmlzaW9uc1trZXldXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaW9uc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTYXZlR3JhdGl0dWRlID0gZSA9PiB7XG4gICAgY29uc3QgeyBncmF0aXR1ZGVzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZFxuICAgIGNvbnN0IGdyYXRpdHVkZVRleHQgPSBlLnRhcmdldC52YWx1ZVxuICAgIGdyYXRpdHVkZXNbaWRdID0gZ3JhdGl0dWRlVGV4dFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZ3JhdGl0dWRlc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTYXZlVmlzaW9uID0gZSA9PiB7XG4gICAgY29uc3QgeyB2aXNpb25zIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZFxuICAgIGNvbnN0IHZpc2lvblRleHQgPSBlLnRhcmdldC52YWx1ZVxuICAgIHZpc2lvbnNbaWRdID0gdmlzaW9uVGV4dFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaW9uc1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZ3JhdGl0dWRlcyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZ3JhdGl0dWRlcykubWFwKChrZXksIGluZGV4KSA9PiA8VGV4dFxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIGlkPXtrZXl9XG4gICAgICB0ZXh0PXt0aGlzLnN0YXRlLmdyYXRpdHVkZXNba2V5XX1cbiAgICAgIGhhbmRsZVJlbW92ZVRleHQ9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlR3JhdGl0dWRlKGtleSl9XG4gICAgICBoYW5kbGVTYXZlVGV4dD17dGhpcy5oYW5kbGVTYXZlR3JhdGl0dWRlfVxuICAgICAgcm93cz1cIjNcIlxuICAgICAgbGFiZWw9XCJHcmF0aXR1ZGVcIlxuICAgIC8+XG4gICAgKVxuICAgIGNvbnN0IHZpc2lvbnMgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnZpc2lvbnMpLm1hcCgoa2V5LCBpbmRleCkgPT4gPFRleHRcbiAgICAgIGtleT17aW5kZXh9XG4gICAgICBpZD17a2V5fVxuICAgICAgdGV4dD17dGhpcy5zdGF0ZS52aXNpb25zW2tleV19XG4gICAgICBoYW5kbGVSZW1vdmVUZXh0PXsoKSA9PiB0aGlzLmhhbmRsZVJlbW92ZVZpc2lvbihrZXkpfVxuICAgICAgaGFuZGxlU2F2ZVRleHQ9e3RoaXMuaGFuZGxlU2F2ZVZpc2lvbn1cbiAgICAgIHJvd3M9XCIzXCJcbiAgICAgIGxhYmVsPVwiVmlzaW9uXCJcbiAgICAvPlxuICAgIClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRzcGFjZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZW50aW9uIGFic0NlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF0ZWZ1bFwiPkdyYXRlZnVsPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2lvblwiPlZpc2lvbjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpbWVcIj5cbiAgICAgICAgICA8Q2xvY2sgdGltZT17dGhpcy5zdGF0ZS50aW1lfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInF1b3Rlc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlLXRleHRcIj5cbiAgICAgICAgICAgICAgVGhpcyBpcyB0aGUgdGV4dCBmb3IgdGhlIHF1b3RlLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyYXRpdHVkZXNcIj5cbiAgICAgICAgICB7Z3JhdGl0dWRlc31cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkR3JhdGl0dWRlfSBjbGFzc05hbWU9XCJkb3R0ZWQtdGV4dFwiPisgR3JhdGl0dWRlPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlzaW9uc1wiPlxuICAgICAgICAgIHt2aXNpb25zfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVBZGRWaXNpb259IGNsYXNzTmFtZT1cImRvdHRlZC10ZXh0XCI+KyBWaXNpb248L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdHRlZC10ZXh0XCI+U2VuZDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFppbGxhU2xhYjtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1ppbGxhU2xhYi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvZHlTdGFyTGlnaHQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9Db2R5U3Rhci1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1JpZ2h0ZW91cy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNuaXBwZXQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9TbmlwcGV0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XG4gICAgICB9XG4gICAgICAuYWJzQ2VudGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cbiAgICAgIC5pbmxpbmUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuZG90dGVkLXRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb2R5U3RhckxpZ2h0LCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIC5oZWFkc3BhY2Uge1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmludGVudGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuZ3JhdGVmdWwge1xuICAgICAgICBmb250LWZhbWlseTogUmlnaHRlb3VzLCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgIH1cbiAgICAgIC52aXNpb24ge1xuICAgICAgICBmb250LWZhbWlseTogU25pcHBldCwgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICB9XG4gICAgICAudGltZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICAgIC5ncmF0aXR1ZGVzIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgfVxuICAgICAgLnZpc2lvbnMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgICAgIH1cbiAgICAgIC5mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.16944838116fc36ab75c.hot-update.js.map