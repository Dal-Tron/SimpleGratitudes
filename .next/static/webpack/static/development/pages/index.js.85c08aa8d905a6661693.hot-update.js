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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_js_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/js/vfs_fonts */ "./static/js/vfs_fonts.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Clock__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Clock */ "./components/Clock.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Text */ "./components/Text.js");
/* harmony import */ var _components_Quotes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Quotes */ "./components/Quotes.js");









var _jsxFileName = "/Users/dallas/Documents/Gratitude/pages/index.js";










var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      timestring: '',
      quotes: [{
        "text": "First quote. With lost of text almost a whole book at this point.",
        "author": "First Author"
      }, {
        "text": "Second quote.",
        "author": "Second Author"
      }],
      gratitudes: {
        "gratitude-0": ""
      },
      visions: {
        "vision-0": ""
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleAddGratitude", function () {
      var gratitudeID = "gratitude-".concat(Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_13__["generateUniqueID"])());
      var gratitude = {};
      gratitude[gratitudeID] = "";

      var gratitudes = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.state.gratitudes, gratitude);

      _this.setState({
        gratitudes: gratitudes
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleAddVision", function () {
      var visionID = "vision-".concat(Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_13__["generateUniqueID"])());
      var vision = {};
      vision[visionID] = "";

      var visions = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.state.visions, vision);

      _this.setState({
        visions: visions
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleRemoveGratitude", function (key) {
      if (key !== "gratitude-0") {
        var gratitudes = _this.state.gratitudes;
        delete gratitudes[key];

        _this.setState({
          gratitudes: gratitudes
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleRemoveVision", function (key) {
      if (key !== "vision-0") {
        var visions = _this.state.visions;
        delete visions[key];

        _this.setState({
          visions: visions
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSaveGratitude", function (e) {
      var gratitudes = _this.state.gratitudes;
      var id = e.target.id;
      var gratitudeText = e.target.value;
      gratitudes[id] = gratitudeText;

      _this.setState({
        gratitudes: gratitudes
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSaveVision", function (e) {
      var visions = _this.state.visions;
      var id = e.target.id;
      var visionText = e.target.value;
      visions[id] = visionText;

      _this.setState({
        visions: visions
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleCreatePDF", function () {
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.vfs = _static_js_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__["default"];
      var _this$state = _this.state,
          timestring = _this$state.timestring,
          gratitudes = _this$state.gratitudes,
          visions = _this$state.visions;
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.fonts = {
        'Righteous': {
          normal: 'Righteous.ttf',
          bold: 'Righteous.ttf',
          italics: 'Righteous.ttf',
          bolditalics: 'Righteous.ttf'
        },
        'Snippet': {
          normal: 'Snippet.ttf',
          bold: 'Snippet.ttf',
          italics: 'Snippet.ttf',
          bolditalics: 'Snippet.ttf'
        },
        'CodyStar-Light': {
          normal: 'CodyStar-Light.ttf',
          bold: 'CodyStar-Light.ttf',
          italics: 'CodyStar-Light.ttf',
          bolditalics: 'CodyStar-Light.ttf'
        }
      };
      var content = [{
        text: 'Grateful',
        style: ['header', 'section1']
      }, {
        text: 'Vision',
        style: ['header', 'section2']
      }, {
        text: "".concat(timestring),
        style: ['header', 'section3']
      }, {
        text: 'Gratitude',
        style: ['header', 'section4']
      }, {
        text: 'Vision',
        style: ['header', 'section4']
      }];

      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(gratitudes).length > 0) {
        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(gratitudes).map(function (key, index) {
          var gratitude = {
            text: gratitudes[key],
            style: ['section5'] // just start at index 5 as there are several headings (currently 4) inserted first

          };
          content.splice(index + 4, 0, gratitude);
        });
      }

      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(visions).length > 0) {
        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(visions).map(function (key, index) {
          var vision = {
            text: visions[key],
            style: ['section5'] // visions are currently at the end, so we can just push

          };
          content.push(vision);
        });
      }

      var docDefinition = {
        info: {
          title: 'Grateful Vision',
          author: 'Grateful Vision',
          subject: 'Grateful Vision',
          keywords: 'Grateful Vision'
        },
        pageMargins: [0, 0, 0, 0],
        content: content,
        styles: {
          header: {
            fontSize: 22,
            alignment: 'center'
          },
          section1: {
            color: '#5190a5',
            font: 'Righteous',
            margin: [0, 20, 0, 0]
          },
          section2: {
            color: '#5190a5',
            font: 'Snippet'
          },
          section3: {
            color: '#2a2a2e',
            font: 'CodyStar-Light',
            margin: [0, 20, 0, 0]
          },
          section4: {
            color: '#5190a5',
            font: 'CodyStar-Light',
            margin: [0, 20, 0, 0]
          },
          section5: {
            color: '#2a2a2e',
            font: 'Snippet',
            margin: [20, 20, 20, 0],
            fontSize: 14,
            alignment: 'center'
          }
        }
      };
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.createPdf(docDefinition).open();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
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
      var date = new Date();
      var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var weekday = weekdays[date.getDay()];
      var month = months[date.getMonth()];
      var intDay = date.getDate();
      var year = date.getFullYear();
      var timestamp = date.toTimeString();
      var H = timestamp.substr(0, 2);
      var h = H % 12 || 12;
      var ampm = H < 12 || H === 24 ? " AM" : " PM";
      var time = h + timestamp.substr(2, 3) + ampm;
      var timestring = "".concat(weekday, ", ").concat(month, " ").concat(intDay, ", ").concat(year, ", ").concat(time);
      this.setState({
        timestring: timestring
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          timestring = _this$state2.timestring,
          quotes = _this$state2.quotes,
          gratitudes = _this$state2.gratitudes,
          visions = _this$state2.visions;

      var renderGratitudes = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(gratitudes).map(function (key, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_16__["default"], {
          key: index,
          id: key,
          text: gratitudes[key],
          handleRemoveText: function handleRemoveText() {
            return _this3.handleRemoveGratitude(key);
          },
          handleSaveText: _this3.handleSaveGratitude,
          rows: "4",
          label: "Gratitude",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        });
      });

      var renderVisions = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(visions).map(function (key, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_16__["default"], {
          key: index,
          id: key,
          text: visions[key],
          handleRemoveText: function handleRemoveText() {
            return _this3.handleRemoveVision(key);
          },
          handleSaveText: _this3.handleSaveVision,
          rows: "4",
          label: "Vision",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        });
      });

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1410975643" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-1410975643",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "headspace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1410975643" + " " + "intention absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1410975643" + " " + "grateful",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "Grateful"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1410975643" + " " + "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, "Vision"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Clock__WEBPACK_IMPORTED_MODULE_15__["default"], {
        timestring: timestring,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Quotes__WEBPACK_IMPORTED_MODULE_17__["default"], {
        quotes: quotes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, renderGratitudes, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-1410975643" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "+ Gratitude")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "visions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, renderVisions, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: this.handleAddVision,
        className: "jsx-1410975643" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "+ Vision")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: this.handleCreatePDF,
        className: "jsx-1410975643" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1410975643",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}@font-face{font-family:Righteous;src:url(\"/static/fonts/Righteous.ttf\") format(\"truetype\");}@font-face{font-family:Snippet;src:url(\"/static/fonts/Snippet.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;margin-bottom:6rem;background:#b0edc5;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.inline{display:inline-block;}.dotted-text{text-align:center;padding:2rem;font-family:CodyStarLight,Sans-Serif,Arial;color:white;font-size:1.5rem;}.headspace{height:10vh;background:#5190a5;position:relative;}.intention{font-size:2rem;color:white;text-align:center;}.quotes{background:lightblue;}.grateful{font-family:Righteous,Sans-Serif,Arial;}.vision{font-family:Snippet,Sans-Serif,Arial;}.time{background:#7eb8cb;}.gratitudes{background:lightblue;}.visions{background:lightblue;}.footer{background:#59bf7c;position:fixed;bottom:0;width:100%;height:6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4VDJCLEFBRytCLEFBSUksQUFJSixBQUlGLEFBSUUsQUFJYixBQU9TLEFBTUcsQUFHSCxBQU9OLEFBS0csQUFLTSxBQUdvQixBQUdGLEFBR3BCLEFBR0UsQUFHQSxBQUdGLFNBbERULEdBdUJTLEdBS1AsR0FyQkosQUFTSyxDQWZHLEFBeUNsQixBQVNpQixDQTNEeUMsQ0FxQjFELEFBb0JBLEFBWUEsQUFHQSxDQXBFNEQsQUFRQSxBQVE1RCxJQVppRSxBQXdCdEQsQ0FxQlMsSUFaMkIsQUFPM0IsR0E0QlQsQ0FsRFUsQUFPYSxFQThCbEMsRUFIQSxJQWlCYSxFQXZCYixJQUxBLEtBdEJxQixBQW1EUCxZQUNkLE9BbkRBLENBY2MsRUF6QmQsSUFaQSxBQVFBLE1BOEJtQixHQWxDbkIsY0FtQ0EscUNBVkEiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBkZk1ha2UgZnJvbSAncGRmbWFrZS9idWlsZC9wZGZtYWtlJ1xuaW1wb3J0IHBkZkZvbnRzIGZyb20gJy4uL3N0YXRpYy9qcy92ZnNfZm9udHMnXG5pbXBvcnQgeyBnZW5lcmF0ZVVuaXF1ZUlEIH0gZnJvbSAnLi4vbGliL2hlbHBlcnMnXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDbG9jayBmcm9tICcuLi9jb21wb25lbnRzL0Nsb2NrJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0J1xuaW1wb3J0IFF1b3RlcyBmcm9tICcuLi9jb21wb25lbnRzL1F1b3Rlcyc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGltZXN0cmluZzogJycsXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIkZpcnN0IHF1b3RlLiBXaXRoIGxvc3Qgb2YgdGV4dCBhbG1vc3QgYSB3aG9sZSBib29rIGF0IHRoaXMgcG9pbnQuXCIsXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiRmlyc3QgQXV0aG9yXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIlNlY29uZCBxdW90ZS5cIixcbiAgICAgICAgXCJhdXRob3JcIjogXCJTZWNvbmQgQXV0aG9yXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIGdyYXRpdHVkZXM6IHtcbiAgICAgIFwiZ3JhdGl0dWRlLTBcIjogXCJcIlxuICAgIH0sXG4gICAgdmlzaW9uczoge1xuICAgICAgXCJ2aXNpb24tMFwiOiBcIlwiXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oYW5kbGVDcmVhdGVUaW1lU3RyaW5nKClcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5oYW5kbGVDcmVhdGVUaW1lU3RyaW5nKCksIDEwMDApXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH1cblxuICBoYW5kbGVDcmVhdGVUaW1lU3RyaW5nKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHdlZWtkYXlzID0gW1xuICAgICAgXCJTdW5kYXlcIixcbiAgICAgIFwiTW9uZGF5XCIsXG4gICAgICBcIlR1ZXNkYXlcIixcbiAgICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgICBcIlRodXJzZGF5XCIsXG4gICAgICBcIkZyaWRheVwiLFxuICAgICAgXCJTYXR1cmRheVwiXG4gICAgXTtcblxuICAgIGNvbnN0IG1vbnRocyA9IFtcbiAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgXCJNYXJjaFwiLFxuICAgICAgXCJBcHJpbFwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuZVwiLFxuICAgICAgXCJKdWx5XCIsXG4gICAgICBcIkF1Z3VzdFwiLFxuICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgXCJEZWNlbWJlclwiXG4gICAgXTtcblxuICAgIGNvbnN0IHdlZWtkYXkgPSB3ZWVrZGF5c1tkYXRlLmdldERheSgpXTtcbiAgICBjb25zdCBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgIGNvbnN0IGludERheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZGF0ZS50b1RpbWVTdHJpbmcoKVxuICAgIGNvbnN0IEggPSB0aW1lc3RhbXAuc3Vic3RyKDAsIDIpXG4gICAgY29uc3QgaCA9IEggJSAxMiB8fCAxMlxuICAgIGNvbnN0IGFtcG0gPSAoSCA8IDEyIHx8IEggPT09IDI0KSA/IFwiIEFNXCIgOiBcIiBQTVwiXG4gICAgY29uc3QgdGltZSA9IGggKyB0aW1lc3RhbXAuc3Vic3RyKDIsIDMpICsgYW1wbVxuICAgIGNvbnN0IHRpbWVzdHJpbmcgPSBgJHt3ZWVrZGF5fSwgJHttb250aH0gJHtpbnREYXl9LCAke3llYXJ9LCAke3RpbWV9YDtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lc3RyaW5nIH0pXG4gIH1cblxuICBoYW5kbGVBZGRHcmF0aXR1ZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JhdGl0dWRlSUQgPSBgZ3JhdGl0dWRlLSR7Z2VuZXJhdGVVbmlxdWVJRCgpfWBcbiAgICBsZXQgZ3JhdGl0dWRlID0ge31cbiAgICBncmF0aXR1ZGVbZ3JhdGl0dWRlSURdID0gXCJcIlxuICAgIGNvbnN0IGdyYXRpdHVkZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmdyYXRpdHVkZXMsIGdyYXRpdHVkZSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGdyYXRpdHVkZXNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQWRkVmlzaW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHZpc2lvbklEID0gYHZpc2lvbi0ke2dlbmVyYXRlVW5pcXVlSUQoKX1gXG4gICAgbGV0IHZpc2lvbiA9IHt9XG4gICAgdmlzaW9uW3Zpc2lvbklEXSA9IFwiXCJcbiAgICBjb25zdCB2aXNpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS52aXNpb25zLCB2aXNpb24pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpb25zXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVJlbW92ZUdyYXRpdHVkZSA9IGtleSA9PiB7XG4gICAgaWYgKGtleSAhPT0gXCJncmF0aXR1ZGUtMFwiKSB7XG4gICAgICBjb25zdCB7IGdyYXRpdHVkZXMgfSA9IHRoaXMuc3RhdGVcbiAgICAgIGRlbGV0ZSBncmF0aXR1ZGVzW2tleV1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBncmF0aXR1ZGVzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlbW92ZVZpc2lvbiA9IGtleSA9PiB7XG4gICAgaWYgKGtleSAhPT0gXCJ2aXNpb24tMFwiKSB7XG4gICAgICBjb25zdCB7IHZpc2lvbnMgfSA9IHRoaXMuc3RhdGVcbiAgICAgIGRlbGV0ZSB2aXNpb25zW2tleV1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpb25zXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNhdmVHcmF0aXR1ZGUgPSBlID0+IHtcbiAgICBjb25zdCB7IGdyYXRpdHVkZXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkXG4gICAgY29uc3QgZ3JhdGl0dWRlVGV4dCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgZ3JhdGl0dWRlc1tpZF0gPSBncmF0aXR1ZGVUZXh0XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBncmF0aXR1ZGVzXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVNhdmVWaXNpb24gPSBlID0+IHtcbiAgICBjb25zdCB7IHZpc2lvbnMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkXG4gICAgY29uc3QgdmlzaW9uVGV4dCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgdmlzaW9uc1tpZF0gPSB2aXNpb25UZXh0XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpb25zXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUNyZWF0ZVBERiA9ICgpID0+IHtcbiAgICBwZGZNYWtlLnZmcyA9IHBkZkZvbnRzXG4gICAgY29uc3Qge1xuICAgICAgdGltZXN0cmluZyxcbiAgICAgIGdyYXRpdHVkZXMsXG4gICAgICB2aXNpb25zXG4gICAgfSA9IHRoaXMuc3RhdGVcblxuICAgIHBkZk1ha2UuZm9udHMgPSB7XG4gICAgICAnUmlnaHRlb3VzJzoge1xuICAgICAgICBub3JtYWw6ICdSaWdodGVvdXMudHRmJyxcbiAgICAgICAgYm9sZDogJ1JpZ2h0ZW91cy50dGYnLFxuICAgICAgICBpdGFsaWNzOiAnUmlnaHRlb3VzLnR0ZicsXG4gICAgICAgIGJvbGRpdGFsaWNzOiAnUmlnaHRlb3VzLnR0ZicsXG4gICAgICB9LFxuICAgICAgJ1NuaXBwZXQnOiB7XG4gICAgICAgIG5vcm1hbDogJ1NuaXBwZXQudHRmJyxcbiAgICAgICAgYm9sZDogJ1NuaXBwZXQudHRmJyxcbiAgICAgICAgaXRhbGljczogJ1NuaXBwZXQudHRmJyxcbiAgICAgICAgYm9sZGl0YWxpY3M6ICdTbmlwcGV0LnR0ZicsXG4gICAgICB9LFxuICAgICAgJ0NvZHlTdGFyLUxpZ2h0Jzoge1xuICAgICAgICBub3JtYWw6ICdDb2R5U3Rhci1MaWdodC50dGYnLFxuICAgICAgICBib2xkOiAnQ29keVN0YXItTGlnaHQudHRmJyxcbiAgICAgICAgaXRhbGljczogJ0NvZHlTdGFyLUxpZ2h0LnR0ZicsXG4gICAgICAgIGJvbGRpdGFsaWNzOiAnQ29keVN0YXItTGlnaHQudHRmJyxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0dyYXRlZnVsJyxcbiAgICAgICAgc3R5bGU6IFsnaGVhZGVyJywgJ3NlY3Rpb24xJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnVmlzaW9uJyxcbiAgICAgICAgc3R5bGU6IFsnaGVhZGVyJywgJ3NlY3Rpb24yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBgJHt0aW1lc3RyaW5nfWAsXG4gICAgICAgIHN0eWxlOiBbJ2hlYWRlcicsICdzZWN0aW9uMyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0dyYXRpdHVkZScsXG4gICAgICAgIHN0eWxlOiBbJ2hlYWRlcicsICdzZWN0aW9uNCddXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnVmlzaW9uJyxcbiAgICAgICAgc3R5bGU6IFsnaGVhZGVyJywgJ3NlY3Rpb240J10sXG4gICAgICB9XG4gICAgXVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKGdyYXRpdHVkZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIE9iamVjdC5rZXlzKGdyYXRpdHVkZXMpLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgZ3JhdGl0dWRlID0ge1xuICAgICAgICAgIHRleHQ6IGdyYXRpdHVkZXNba2V5XSxcbiAgICAgICAgICBzdHlsZTogWydzZWN0aW9uNSddXG4gICAgICAgIH1cbiAgICAgICAgLy8ganVzdCBzdGFydCBhdCBpbmRleCA1IGFzIHRoZXJlIGFyZSBzZXZlcmFsIGhlYWRpbmdzIChjdXJyZW50bHkgNCkgaW5zZXJ0ZWQgZmlyc3RcbiAgICAgICAgY29udGVudC5zcGxpY2UoaW5kZXggKyA0LCAwLCBncmF0aXR1ZGUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyh2aXNpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICBPYmplY3Qua2V5cyh2aXNpb25zKS5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHZpc2lvbiA9IHtcbiAgICAgICAgICB0ZXh0OiB2aXNpb25zW2tleV0sXG4gICAgICAgICAgc3R5bGU6IFsnc2VjdGlvbjUnXVxuICAgICAgICB9XG4gICAgICAgIC8vIHZpc2lvbnMgYXJlIGN1cnJlbnRseSBhdCB0aGUgZW5kLCBzbyB3ZSBjYW4ganVzdCBwdXNoXG4gICAgICAgIGNvbnRlbnQucHVzaCh2aXNpb24pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRvY0RlZmluaXRpb24gPSB7XG4gICAgICBpbmZvOiB7XG4gICAgICAgIHRpdGxlOiAnR3JhdGVmdWwgVmlzaW9uJyxcbiAgICAgICAgYXV0aG9yOiAnR3JhdGVmdWwgVmlzaW9uJyxcbiAgICAgICAgc3ViamVjdDogJ0dyYXRlZnVsIFZpc2lvbicsXG4gICAgICAgIGtleXdvcmRzOiAnR3JhdGVmdWwgVmlzaW9uJyxcbiAgICAgIH0sXG4gICAgICBwYWdlTWFyZ2luczogWzAsIDAsIDAsIDBdLFxuICAgICAgY29udGVudCxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgYWxpZ25tZW50OiAnY2VudGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbjE6IHtcbiAgICAgICAgICBjb2xvcjogJyM1MTkwYTUnLFxuICAgICAgICAgIGZvbnQ6ICdSaWdodGVvdXMnLFxuICAgICAgICAgIG1hcmdpbjogWzAsIDIwLCAwLCAwXVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uMjoge1xuICAgICAgICAgIGNvbG9yOiAnIzUxOTBhNScsXG4gICAgICAgICAgZm9udDogJ1NuaXBwZXQnLFxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uMzoge1xuICAgICAgICAgIGNvbG9yOiAnIzJhMmEyZScsXG4gICAgICAgICAgZm9udDogJ0NvZHlTdGFyLUxpZ2h0JyxcbiAgICAgICAgICBtYXJnaW46IFswLCAyMCwgMCwgMF1cbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbjQ6IHtcbiAgICAgICAgICBjb2xvcjogJyM1MTkwYTUnLFxuICAgICAgICAgIGZvbnQ6ICdDb2R5U3Rhci1MaWdodCcsXG4gICAgICAgICAgbWFyZ2luOiBbMCwgMjAsIDAsIDBdXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb241OiB7XG4gICAgICAgICAgY29sb3I6ICcjMmEyYTJlJyxcbiAgICAgICAgICBmb250OiAnU25pcHBldCcsXG4gICAgICAgICAgbWFyZ2luOiBbMjAsIDIwLCAyMCwgMF0sXG4gICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgIGFsaWdubWVudDogJ2NlbnRlcidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHBkZk1ha2UuY3JlYXRlUGRmKGRvY0RlZmluaXRpb24pLm9wZW4oKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpbWVzdHJpbmcsXG4gICAgICBxdW90ZXMsXG4gICAgICBncmF0aXR1ZGVzLFxuICAgICAgdmlzaW9ucyxcbiAgICB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHJlbmRlckdyYXRpdHVkZXMgPSBPYmplY3Qua2V5cyhncmF0aXR1ZGVzKS5tYXAoKGtleSwgaW5kZXgpID0+IDxUZXh0XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaWQ9e2tleX1cbiAgICAgIHRleHQ9e2dyYXRpdHVkZXNba2V5XX1cbiAgICAgIGhhbmRsZVJlbW92ZVRleHQ9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlR3JhdGl0dWRlKGtleSl9XG4gICAgICBoYW5kbGVTYXZlVGV4dD17dGhpcy5oYW5kbGVTYXZlR3JhdGl0dWRlfVxuICAgICAgcm93cz1cIjRcIlxuICAgICAgbGFiZWw9XCJHcmF0aXR1ZGVcIlxuICAgIC8+KVxuXG4gICAgY29uc3QgcmVuZGVyVmlzaW9ucyA9IE9iamVjdC5rZXlzKHZpc2lvbnMpLm1hcCgoa2V5LCBpbmRleCkgPT4gPFRleHRcbiAgICAgIGtleT17aW5kZXh9XG4gICAgICBpZD17a2V5fVxuICAgICAgdGV4dD17dmlzaW9uc1trZXldfVxuICAgICAgaGFuZGxlUmVtb3ZlVGV4dD17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmVWaXNpb24oa2V5KX1cbiAgICAgIGhhbmRsZVNhdmVUZXh0PXt0aGlzLmhhbmRsZVNhdmVWaXNpb259XG4gICAgICByb3dzPVwiNFwiXG4gICAgICBsYWJlbD1cIlZpc2lvblwiXG4gICAgLz4pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRzcGFjZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZW50aW9uIGFic0NlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF0ZWZ1bFwiPkdyYXRlZnVsPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2lvblwiPlZpc2lvbjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpbWVcIj5cbiAgICAgICAgICA8Q2xvY2sgdGltZXN0cmluZz17dGltZXN0cmluZ30gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJxdW90ZXNcIj5cbiAgICAgICAgICA8UXVvdGVzIHF1b3Rlcz17cXVvdGVzfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmF0aXR1ZGVzXCI+XG4gICAgICAgICAge3JlbmRlckdyYXRpdHVkZXN9XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZEdyYXRpdHVkZX0gY2xhc3NOYW1lPVwiZG90dGVkLXRleHRcIj4rIEdyYXRpdHVkZTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpc2lvbnNcIj5cbiAgICAgICAgICB7cmVuZGVyVmlzaW9uc31cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkVmlzaW9ufSBjbGFzc05hbWU9XCJkb3R0ZWQtdGV4dFwiPisgVmlzaW9uPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3R0ZWQtdGV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ3JlYXRlUERGfT5Eb3dubG9hZDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFppbGxhU2xhYjtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1ppbGxhU2xhYi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvZHlTdGFyTGlnaHQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9Db2R5U3Rhci1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1JpZ2h0ZW91cy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNuaXBwZXQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9TbmlwcGV0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICNiMGVkYzU7XG4gICAgICB9XG4gICAgICAuYWJzQ2VudGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cbiAgICAgIC5pbmxpbmUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuZG90dGVkLXRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb2R5U3RhckxpZ2h0LCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIC5oZWFkc3BhY2Uge1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1MTkwYTU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5pbnRlbnRpb24ge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnF1b3RlcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICAgIC5ncmF0ZWZ1bCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSaWdodGVvdXMsIFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgfVxuICAgICAgLnZpc2lvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTbmlwcGV0LCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgIH1cbiAgICAgIC50aW1lIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzdlYjhjYjtcbiAgICAgIH1cbiAgICAgIC5ncmF0aXR1ZGVzIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgfVxuICAgICAgLnZpc2lvbnMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICB9XG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzU5YmY3YztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.85c08aa8d905a6661693.hot-update.js.map