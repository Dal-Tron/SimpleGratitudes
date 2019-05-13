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
      gratitudes: {},
      visions: {}
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
          gratitudes = _this$state.gratitudes,
          visions = _this$state.visions;
      var gratitudesExist = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(gratitudes).length > 0;
      console.log(gratitudesExist);
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
        text: "".concat(_this.state.timestring),
        style: ['header', 'section3']
      }, {
        text: gratitudesExist ? 'Gratitude' : '',
        style: gratitudesExist ? ['header', 'section4'] : []
      }]; // ]
      // let gratitudeTitle = {
      //   text: 'Gratitude',
      //   style: ['header', 'section4']
      // }
      // let vision
      // if (Object.keys(gratitudes).length > 0) {
      //   content.splice(3, 0, gratitudeTitle)
      //   gratitudeContent[text] = 'Gratitude'
      //   gratitudeContent[style] = 
      //   content.push(gratitudeTitle)
      // }
      // {
      //   text: 'Testing',
      //   style: ['section5']
      // },
      // {
      //   text: 'Vision',
      //   style: ['header', 'section4'],
      // },
      // {
      //   text: 'this is my gratitude just looking at what is going to look like in this great world',
      //   style: ['section5'],
      // },
      // {
      //   text: 'this is my gratitude just looking at what is going to look like in this great world',
      //   style: ['section5'],
      // }
      // ]

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
          gratitudes = _this$state2.gratitudes,
          visions = _this$state2.visions;
      var renderGratitudes, renderVisions;

      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(gratitudes).length === 0) {
        renderGratitudes = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_16__["default"], {
          key: "first-gratitude",
          id: key,
          text: this.state.gratitudes[key],
          handleRemoveText: function handleRemoveText() {
            return _this3.handleRemoveGratitude(key);
          },
          handleSaveText: this.handleSaveGratitude,
          rows: "4",
          label: "Gratitude",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        });
      } else {
        renderGratitudes = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(gratitudes).map(function (key, index) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_16__["default"], {
            key: index,
            id: key,
            text: _this3.state.gratitudes[key],
            handleRemoveText: function handleRemoveText() {
              return _this3.handleRemoveGratitude(key);
            },
            handleSaveText: _this3.handleSaveGratitude,
            rows: "4",
            label: "Gratitude",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 284
            },
            __self: this
          });
        });
      }

      renderVisions = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.visions).map(function (key, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_16__["default"], {
          key: index,
          id: key,
          text: _this3.state.visions[key],
          handleRemoveText: function handleRemoveText() {
            return _this3.handleRemoveVision(key);
          },
          handleSaveText: _this3.handleSaveVision,
          rows: "4",
          label: "Vision",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1410975643" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-1410975643",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "headspace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1410975643" + " " + "intention absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1410975643" + " " + "grateful",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "Grateful"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1410975643" + " " + "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "Vision"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Clock__WEBPACK_IMPORTED_MODULE_15__["default"], {
        timestring: this.state.timestring,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Quotes__WEBPACK_IMPORTED_MODULE_17__["default"], {
        quotes: this.state.quotes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, gratitudes, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-1410975643" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "+ Gratitude")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "visions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, visions, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: this.handleAddVision,
        className: "jsx-1410975643" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, "+ Vision")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1410975643" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: this.handleCreatePDF,
        className: "jsx-1410975643" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1410975643",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}@font-face{font-family:Righteous;src:url(\"/static/fonts/Righteous.ttf\") format(\"truetype\");}@font-face{font-family:Snippet;src:url(\"/static/fonts/Snippet.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;margin-bottom:6rem;background:#b0edc5;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.inline{display:inline-block;}.dotted-text{text-align:center;padding:2rem;font-family:CodyStarLight,Sans-Serif,Arial;color:white;font-size:1.5rem;}.headspace{height:10vh;background:#5190a5;position:relative;}.intention{font-size:2rem;color:white;text-align:center;}.quotes{background:lightblue;}.grateful{font-family:Righteous,Sans-Serif,Arial;}.vision{font-family:Snippet,Sans-Serif,Arial;}.time{background:#7eb8cb;}.gratitudes{background:lightblue;}.visions{background:lightblue;}.footer{background:#59bf7c;position:fixed;bottom:0;width:100%;height:6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4VTJCLEFBRytCLEFBSUksQUFJSixBQUlGLEFBSUUsQUFJYixBQU9TLEFBTUcsQUFHSCxBQU9OLEFBS0csQUFLTSxBQUdvQixBQUdGLEFBR3BCLEFBR0UsQUFHQSxBQUdGLFNBbERULEdBdUJTLEdBS1AsR0FyQkosQUFTSyxDQWZHLEFBeUNsQixBQVNpQixDQTNEeUMsQ0FxQjFELEFBb0JBLEFBWUEsQUFHQSxDQXBFNEQsQUFRQSxBQVE1RCxJQVppRSxBQXdCdEQsQ0FxQlMsSUFaMkIsQUFPM0IsR0E0QlQsQ0FsRFUsQUFPYSxFQThCbEMsRUFIQSxJQWlCYSxFQXZCYixJQUxBLEtBdEJxQixBQW1EUCxZQUNkLE9BbkRBLENBY2MsRUF6QmQsSUFaQSxBQVFBLE1BOEJtQixHQWxDbkIsY0FtQ0EscUNBVkEiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBkZk1ha2UgZnJvbSAncGRmbWFrZS9idWlsZC9wZGZtYWtlJ1xuaW1wb3J0IHBkZkZvbnRzIGZyb20gJy4uL3N0YXRpYy9qcy92ZnNfZm9udHMnXG5pbXBvcnQgeyBnZW5lcmF0ZVVuaXF1ZUlEIH0gZnJvbSAnLi4vbGliL2hlbHBlcnMnXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDbG9jayBmcm9tICcuLi9jb21wb25lbnRzL0Nsb2NrJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0J1xuaW1wb3J0IFF1b3RlcyBmcm9tICcuLi9jb21wb25lbnRzL1F1b3Rlcyc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGltZXN0cmluZzogJycsXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIkZpcnN0IHF1b3RlLiBXaXRoIGxvc3Qgb2YgdGV4dCBhbG1vc3QgYSB3aG9sZSBib29rIGF0IHRoaXMgcG9pbnQuXCIsXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiRmlyc3QgQXV0aG9yXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIlNlY29uZCBxdW90ZS5cIixcbiAgICAgICAgXCJhdXRob3JcIjogXCJTZWNvbmQgQXV0aG9yXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIGdyYXRpdHVkZXM6IHt9LFxuICAgIHZpc2lvbnM6IHt9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKVxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKSwgMTAwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgfVxuXG4gIGhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgd2Vla2RheXMgPSBbXG4gICAgICBcIlN1bmRheVwiLFxuICAgICAgXCJNb25kYXlcIixcbiAgICAgIFwiVHVlc2RheVwiLFxuICAgICAgXCJXZWRuZXNkYXlcIixcbiAgICAgIFwiVGh1cnNkYXlcIixcbiAgICAgIFwiRnJpZGF5XCIsXG4gICAgICBcIlNhdHVyZGF5XCJcbiAgICBdO1xuXG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgICBcIk1hcmNoXCIsXG4gICAgICBcIkFwcmlsXCIsXG4gICAgICBcIk1heVwiLFxuICAgICAgXCJKdW5lXCIsXG4gICAgICBcIkp1bHlcIixcbiAgICAgIFwiQXVndXN0XCIsXG4gICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgXCJPY3RvYmVyXCIsXG4gICAgICBcIk5vdmVtYmVyXCIsXG4gICAgICBcIkRlY2VtYmVyXCJcbiAgICBdO1xuXG4gICAgY29uc3Qgd2Vla2RheSA9IHdlZWtkYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgIGNvbnN0IG1vbnRoID0gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gICAgY29uc3QgaW50RGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLnRvVGltZVN0cmluZygpXG4gICAgY29uc3QgSCA9IHRpbWVzdGFtcC5zdWJzdHIoMCwgMilcbiAgICBjb25zdCBoID0gSCAlIDEyIHx8IDEyXG4gICAgY29uc3QgYW1wbSA9IChIIDwgMTIgfHwgSCA9PT0gMjQpID8gXCIgQU1cIiA6IFwiIFBNXCJcbiAgICBjb25zdCB0aW1lID0gaCArIHRpbWVzdGFtcC5zdWJzdHIoMiwgMykgKyBhbXBtXG4gICAgY29uc3QgdGltZXN0cmluZyA9IGAke3dlZWtkYXl9LCAke21vbnRofSAke2ludERheX0sICR7eWVhcn0sICR7dGltZX1gO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVzdHJpbmcgfSlcbiAgfVxuXG4gIGhhbmRsZUFkZEdyYXRpdHVkZSA9ICgpID0+IHtcbiAgICBjb25zdCBncmF0aXR1ZGVJRCA9IGBncmF0aXR1ZGUtJHtnZW5lcmF0ZVVuaXF1ZUlEKCl9YFxuICAgIGxldCBncmF0aXR1ZGUgPSB7fVxuICAgIGdyYXRpdHVkZVtncmF0aXR1ZGVJRF0gPSBcIlwiXG4gICAgY29uc3QgZ3JhdGl0dWRlcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZ3JhdGl0dWRlcywgZ3JhdGl0dWRlKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZ3JhdGl0dWRlc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBZGRWaXNpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgdmlzaW9uSUQgPSBgdmlzaW9uLSR7Z2VuZXJhdGVVbmlxdWVJRCgpfWBcbiAgICBsZXQgdmlzaW9uID0ge31cbiAgICB2aXNpb25bdmlzaW9uSURdID0gXCJcIlxuICAgIGNvbnN0IHZpc2lvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnZpc2lvbnMsIHZpc2lvbilcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2lvbnNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUmVtb3ZlR3JhdGl0dWRlID0ga2V5ID0+IHtcbiAgICBpZiAoa2V5ICE9PSBcImdyYXRpdHVkZS0wXCIpIHtcbiAgICAgIGNvbnN0IHsgZ3JhdGl0dWRlcyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgZGVsZXRlIGdyYXRpdHVkZXNba2V5XVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGdyYXRpdHVkZXNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVtb3ZlVmlzaW9uID0ga2V5ID0+IHtcbiAgICBpZiAoa2V5ICE9PSBcInZpc2lvbi0wXCIpIHtcbiAgICAgIGNvbnN0IHsgdmlzaW9ucyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgZGVsZXRlIHZpc2lvbnNba2V5XVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2lvbnNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2F2ZUdyYXRpdHVkZSA9IGUgPT4ge1xuICAgIGNvbnN0IHsgZ3JhdGl0dWRlcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCBncmF0aXR1ZGVUZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICBncmF0aXR1ZGVzW2lkXSA9IGdyYXRpdHVkZVRleHRcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGdyYXRpdHVkZXNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU2F2ZVZpc2lvbiA9IGUgPT4ge1xuICAgIGNvbnN0IHsgdmlzaW9ucyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCB2aXNpb25UZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICB2aXNpb25zW2lkXSA9IHZpc2lvblRleHRcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2lvbnNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ3JlYXRlUERGID0gKCkgPT4ge1xuICAgIHBkZk1ha2UudmZzID0gcGRmRm9udHNcbiAgICBjb25zdCB7IGdyYXRpdHVkZXMsIHZpc2lvbnMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBncmF0aXR1ZGVzRXhpc3QgPSBPYmplY3Qua2V5cyhncmF0aXR1ZGVzKS5sZW5ndGggPiAwXG5cbiAgICBjb25zb2xlLmxvZyhncmF0aXR1ZGVzRXhpc3QpXG5cbiAgICBwZGZNYWtlLmZvbnRzID0ge1xuICAgICAgJ1JpZ2h0ZW91cyc6IHtcbiAgICAgICAgbm9ybWFsOiAnUmlnaHRlb3VzLnR0ZicsXG4gICAgICAgIGJvbGQ6ICdSaWdodGVvdXMudHRmJyxcbiAgICAgICAgaXRhbGljczogJ1JpZ2h0ZW91cy50dGYnLFxuICAgICAgICBib2xkaXRhbGljczogJ1JpZ2h0ZW91cy50dGYnLFxuICAgICAgfSxcbiAgICAgICdTbmlwcGV0Jzoge1xuICAgICAgICBub3JtYWw6ICdTbmlwcGV0LnR0ZicsXG4gICAgICAgIGJvbGQ6ICdTbmlwcGV0LnR0ZicsXG4gICAgICAgIGl0YWxpY3M6ICdTbmlwcGV0LnR0ZicsXG4gICAgICAgIGJvbGRpdGFsaWNzOiAnU25pcHBldC50dGYnLFxuICAgICAgfSxcbiAgICAgICdDb2R5U3Rhci1MaWdodCc6IHtcbiAgICAgICAgbm9ybWFsOiAnQ29keVN0YXItTGlnaHQudHRmJyxcbiAgICAgICAgYm9sZDogJ0NvZHlTdGFyLUxpZ2h0LnR0ZicsXG4gICAgICAgIGl0YWxpY3M6ICdDb2R5U3Rhci1MaWdodC50dGYnLFxuICAgICAgICBib2xkaXRhbGljczogJ0NvZHlTdGFyLUxpZ2h0LnR0ZicsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdHcmF0ZWZ1bCcsXG4gICAgICAgIHN0eWxlOiBbJ2hlYWRlcicsICdzZWN0aW9uMSddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Zpc2lvbicsXG4gICAgICAgIHN0eWxlOiBbJ2hlYWRlcicsICdzZWN0aW9uMiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogYCR7dGhpcy5zdGF0ZS50aW1lc3RyaW5nfWAsXG4gICAgICAgIHN0eWxlOiBbJ2hlYWRlcicsICdzZWN0aW9uMyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogZ3JhdGl0dWRlc0V4aXN0ID8gJ0dyYXRpdHVkZScgOiAnJyxcbiAgICAgICAgc3R5bGU6IGdyYXRpdHVkZXNFeGlzdCA/IFsnaGVhZGVyJywgJ3NlY3Rpb240J10gOiBbXSxcbiAgICAgIH0sXG4gICAgXVxuICAgIC8vIF1cblxuICAgIC8vIGxldCBncmF0aXR1ZGVUaXRsZSA9IHtcbiAgICAvLyAgIHRleHQ6ICdHcmF0aXR1ZGUnLFxuICAgIC8vICAgc3R5bGU6IFsnaGVhZGVyJywgJ3NlY3Rpb240J11cbiAgICAvLyB9XG5cbiAgICAvLyBsZXQgdmlzaW9uXG5cbiAgICAvLyBpZiAoT2JqZWN0LmtleXMoZ3JhdGl0dWRlcykubGVuZ3RoID4gMCkge1xuXG4gICAgLy8gICBjb250ZW50LnNwbGljZSgzLCAwLCBncmF0aXR1ZGVUaXRsZSlcblxuXG5cblxuICAgIC8vICAgZ3JhdGl0dWRlQ29udGVudFt0ZXh0XSA9ICdHcmF0aXR1ZGUnXG4gICAgLy8gICBncmF0aXR1ZGVDb250ZW50W3N0eWxlXSA9IFxuICAgIC8vICAgY29udGVudC5wdXNoKGdyYXRpdHVkZVRpdGxlKVxuICAgIC8vIH1cblxuXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ1Rlc3RpbmcnLFxuICAgIC8vICAgc3R5bGU6IFsnc2VjdGlvbjUnXVxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ1Zpc2lvbicsXG4gICAgLy8gICBzdHlsZTogWydoZWFkZXInLCAnc2VjdGlvbjQnXSxcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICd0aGlzIGlzIG15IGdyYXRpdHVkZSBqdXN0IGxvb2tpbmcgYXQgd2hhdCBpcyBnb2luZyB0byBsb29rIGxpa2UgaW4gdGhpcyBncmVhdCB3b3JsZCcsXG4gICAgLy8gICBzdHlsZTogWydzZWN0aW9uNSddLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ3RoaXMgaXMgbXkgZ3JhdGl0dWRlIGp1c3QgbG9va2luZyBhdCB3aGF0IGlzIGdvaW5nIHRvIGxvb2sgbGlrZSBpbiB0aGlzIGdyZWF0IHdvcmxkJyxcbiAgICAvLyAgIHN0eWxlOiBbJ3NlY3Rpb241J10sXG4gICAgLy8gfVxuICAgIC8vIF1cblxuICAgIGNvbnN0IGRvY0RlZmluaXRpb24gPSB7XG4gICAgICBpbmZvOiB7XG4gICAgICAgIHRpdGxlOiAnR3JhdGVmdWwgVmlzaW9uJyxcbiAgICAgICAgYXV0aG9yOiAnR3JhdGVmdWwgVmlzaW9uJyxcbiAgICAgICAgc3ViamVjdDogJ0dyYXRlZnVsIFZpc2lvbicsXG4gICAgICAgIGtleXdvcmRzOiAnR3JhdGVmdWwgVmlzaW9uJyxcbiAgICAgIH0sXG4gICAgICBwYWdlTWFyZ2luczogWzAsIDAsIDAsIDBdLFxuICAgICAgY29udGVudCxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgYWxpZ25tZW50OiAnY2VudGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbjE6IHtcbiAgICAgICAgICBjb2xvcjogJyM1MTkwYTUnLFxuICAgICAgICAgIGZvbnQ6ICdSaWdodGVvdXMnLFxuICAgICAgICAgIG1hcmdpbjogWzAsIDIwLCAwLCAwXVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uMjoge1xuICAgICAgICAgIGNvbG9yOiAnIzUxOTBhNScsXG4gICAgICAgICAgZm9udDogJ1NuaXBwZXQnLFxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uMzoge1xuICAgICAgICAgIGNvbG9yOiAnIzJhMmEyZScsXG4gICAgICAgICAgZm9udDogJ0NvZHlTdGFyLUxpZ2h0JyxcbiAgICAgICAgICBtYXJnaW46IFswLCAyMCwgMCwgMF1cbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbjQ6IHtcbiAgICAgICAgICBjb2xvcjogJyM1MTkwYTUnLFxuICAgICAgICAgIGZvbnQ6ICdDb2R5U3Rhci1MaWdodCcsXG4gICAgICAgICAgbWFyZ2luOiBbMCwgMjAsIDAsIDBdXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb241OiB7XG4gICAgICAgICAgY29sb3I6ICcjMmEyYTJlJyxcbiAgICAgICAgICBmb250OiAnU25pcHBldCcsXG4gICAgICAgICAgbWFyZ2luOiBbMjAsIDIwLCAyMCwgMF0sXG4gICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgIGFsaWdubWVudDogJ2NlbnRlcidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHBkZk1ha2UuY3JlYXRlUGRmKGRvY0RlZmluaXRpb24pLm9wZW4oKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3JhdGl0dWRlcywgdmlzaW9ucyB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCByZW5kZXJHcmF0aXR1ZGVzLCByZW5kZXJWaXNpb25zXG4gICAgaWYgKE9iamVjdC5rZXlzKGdyYXRpdHVkZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVuZGVyR3JhdGl0dWRlcyA9IDxUZXh0XG4gICAgICAgIGtleT0nZmlyc3QtZ3JhdGl0dWRlJ1xuICAgICAgICBpZD17a2V5fVxuICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmdyYXRpdHVkZXNba2V5XX1cbiAgICAgICAgaGFuZGxlUmVtb3ZlVGV4dD17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmVHcmF0aXR1ZGUoa2V5KX1cbiAgICAgICAgaGFuZGxlU2F2ZVRleHQ9e3RoaXMuaGFuZGxlU2F2ZUdyYXRpdHVkZX1cbiAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICBsYWJlbD1cIkdyYXRpdHVkZVwiXG4gICAgICAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJHcmF0aXR1ZGVzID0gT2JqZWN0LmtleXMoZ3JhdGl0dWRlcykubWFwKChrZXksIGluZGV4KSA9PiA8VGV4dFxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBpZD17a2V5fVxuICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmdyYXRpdHVkZXNba2V5XX1cbiAgICAgICAgaGFuZGxlUmVtb3ZlVGV4dD17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmVHcmF0aXR1ZGUoa2V5KX1cbiAgICAgICAgaGFuZGxlU2F2ZVRleHQ9e3RoaXMuaGFuZGxlU2F2ZUdyYXRpdHVkZX1cbiAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICBsYWJlbD1cIkdyYXRpdHVkZVwiXG4gICAgICAvPilcbiAgICB9XG5cbiAgICByZW5kZXJWaXNpb25zID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS52aXNpb25zKS5tYXAoKGtleSwgaW5kZXgpID0+IDxUZXh0XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaWQ9e2tleX1cbiAgICAgIHRleHQ9e3RoaXMuc3RhdGUudmlzaW9uc1trZXldfVxuICAgICAgaGFuZGxlUmVtb3ZlVGV4dD17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmVWaXNpb24oa2V5KX1cbiAgICAgIGhhbmRsZVNhdmVUZXh0PXt0aGlzLmhhbmRsZVNhdmVWaXNpb259XG4gICAgICByb3dzPVwiNFwiXG4gICAgICBsYWJlbD1cIlZpc2lvblwiXG4gICAgLz4pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRzcGFjZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZW50aW9uIGFic0NlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF0ZWZ1bFwiPkdyYXRlZnVsPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2lvblwiPlZpc2lvbjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpbWVcIj5cbiAgICAgICAgICA8Q2xvY2sgdGltZXN0cmluZz17dGhpcy5zdGF0ZS50aW1lc3RyaW5nfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInF1b3Rlc1wiPlxuICAgICAgICAgIDxRdW90ZXMgcXVvdGVzPXt0aGlzLnN0YXRlLnF1b3Rlc30gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JhdGl0dWRlc1wiPlxuICAgICAgICAgIHtncmF0aXR1ZGVzfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVBZGRHcmF0aXR1ZGV9IGNsYXNzTmFtZT1cImRvdHRlZC10ZXh0XCI+KyBHcmF0aXR1ZGU8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aXNpb25zXCI+XG4gICAgICAgICAge3Zpc2lvbnN9XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFZpc2lvbn0gY2xhc3NOYW1lPVwiZG90dGVkLXRleHRcIj4rIFZpc2lvbjwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90dGVkLXRleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNyZWF0ZVBERn0+RG93bmxvYWQ8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBaaWxsYVNsYWI7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9aaWxsYVNsYWIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb2R5U3RhckxpZ2h0O1xuICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvQ29keVN0YXItTGlnaHQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSaWdodGVvdXM7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9SaWdodGVvdXMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTbmlwcGV0O1xuICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvU25pcHBldC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjBlZGM1O1xuICAgICAgfVxuICAgICAgLmFic0NlbnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG4gICAgICAuaW5saW5lIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgLmRvdHRlZC10ZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICBmb250LWZhbWlseTogQ29keVN0YXJMaWdodCwgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgICAuaGVhZHNwYWNlIHtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNTE5MGE1O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuaW50ZW50aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5xdW90ZXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICB9XG4gICAgICAuZ3JhdGVmdWwge1xuICAgICAgICBmb250LWZhbWlseTogUmlnaHRlb3VzLCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgIH1cbiAgICAgIC52aXNpb24ge1xuICAgICAgICBmb250LWZhbWlseTogU25pcHBldCwgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICB9XG4gICAgICAudGltZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM3ZWI4Y2I7XG4gICAgICB9XG4gICAgICAuZ3JhdGl0dWRlcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICAgIC52aXNpb25zIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgfVxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1OWJmN2M7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.0c11dcabd8e41d6e5433.hot-update.js.map