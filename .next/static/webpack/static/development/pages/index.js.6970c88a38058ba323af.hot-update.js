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
        },
        'OpenSans-Regular': {
          normal: 'OpenSans-Regular.ttf',
          bold: 'OpenSans-Regular.ttf',
          italics: 'OpenSans-Regular.ttf',
          bolditalics: 'OpenSans-Regular.ttf'
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
            color: '#5190a5',
            font: 'CodyStar-Light',
            margin: [0, 20, 0, 0]
          },
          section4: {
            color: '#5190a5',
            font: 'CodyStar-Light',
            margin: [0, 20, 0, 0]
          },
          section5: {
            color: '#5190a5',
            font: 'OpenSans-Regular',
            margin: [180, 20, 180, 0],
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
            lineNumber: 275
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
            lineNumber: 285
          },
          __self: this
        });
      });

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1910671567" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-1910671567",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1910671567" + " " + "headspace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1910671567" + " " + "intention absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1910671567" + " " + "grateful",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Grateful"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1910671567" + " " + "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "Vision"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1910671567" + " " + "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Clock__WEBPACK_IMPORTED_MODULE_15__["default"], {
        timestring: timestring,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1910671567" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Quotes__WEBPACK_IMPORTED_MODULE_17__["default"], {
        quotes: quotes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1910671567" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1910671567" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, renderGratitudes, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-1910671567" + " " + "section-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "ADD GRATITUDE")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1910671567" + " " + "visions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, renderVisions, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: this.handleAddVision,
        className: "jsx-1910671567" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "+ Vision")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1910671567" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: this.handleCreatePDF,
        className: "jsx-1910671567" + " " + "dotted-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1910671567",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}@font-face{font-family:Righteous;src:url(\"/static/fonts/Righteous.ttf\") format(\"truetype\");}@font-face{font-family:Snippet;src:url(\"/static/fonts/Snippet.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;margin-bottom:6rem;background:#b0edc5;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.inline{display:inline-block;}.headspace{height:10vh;background:#5190a5;position:relative;}.intention{font-size:2rem;color:white;text-align:center;}.quotes{background:lightblue;}.grateful{font-family:Righteous,Sans-Serif,Arial;}.vision{font-family:Snippet,Sans-Serif,Arial;}.time{background:#7eb8cb;}.section-header{font-family:Sans-Serif,Arial;}.gratitudes{background:lightblue;}.visions{background:lightblue;}.footer{background:#59bf7c;position:fixed;bottom:0;width:100%;height:6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvVTJCLEFBRytCLEFBSUksQUFJSixBQUlGLEFBSUUsQUFJYixBQU9TLEFBTUcsQUFVVCxBQUtHLEFBS00sQUFHb0IsQUFHRixBQUdwQixBQUdXLEFBR1QsQUFHQSxBQUdGLFNBckRULEdBdUJTLEdBS1AsR0FyQkosQ0FOUSxBQXlDbEIsQUFZaUIsQ0E5RHlDLENBcUIxRCxBQW9CQSxBQWVBLEFBR0EsQ0F2RTRELEFBUUEsQUFRNUQsSUFaaUUsQUF3QnRELENBcUJTLEVBZ0JwQixFQXJCb0IsR0ErQlQsQ0FyRFUsQUFPYSxFQThCbEMsRUFIQSxJQW9CYSxFQTFCYixJQUxBLEtBdEJxQixBQXNEUCxZQUNkLE9BdERBLEdBWEEsSUFaQSxBQVFBLFNBSkEsbURBeUJBIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBwZGZNYWtlIGZyb20gJ3BkZm1ha2UvYnVpbGQvcGRmbWFrZSdcbmltcG9ydCBwZGZGb250cyBmcm9tICcuLi9zdGF0aWMvanMvdmZzX2ZvbnRzJ1xuaW1wb3J0IHsgZ2VuZXJhdGVVbmlxdWVJRCB9IGZyb20gJy4uL2xpYi9oZWxwZXJzJ1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9DbG9jaydcbmltcG9ydCBUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dCdcbmltcG9ydCBRdW90ZXMgZnJvbSAnLi4vY29tcG9uZW50cy9RdW90ZXMnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRpbWVzdHJpbmc6ICcnLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBcInRleHRcIjogXCJGaXJzdCBxdW90ZS4gV2l0aCBsb3N0IG9mIHRleHQgYWxtb3N0IGEgd2hvbGUgYm9vayBhdCB0aGlzIHBvaW50LlwiLFxuICAgICAgICBcImF1dGhvclwiOiBcIkZpcnN0IEF1dGhvclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInRleHRcIjogXCJTZWNvbmQgcXVvdGUuXCIsXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiU2Vjb25kIEF1dGhvclwiXG4gICAgICB9XG4gICAgXSxcbiAgICBncmF0aXR1ZGVzOiB7XG4gICAgICBcImdyYXRpdHVkZS0wXCI6IFwiXCJcbiAgICB9LFxuICAgIHZpc2lvbnM6IHtcbiAgICAgIFwidmlzaW9uLTBcIjogXCJcIlxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMuaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpLCAxMDAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICAgIFwiU3VuZGF5XCIsXG4gICAgICBcIk1vbmRheVwiLFxuICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgXCJGcmlkYXlcIixcbiAgICAgIFwiU2F0dXJkYXlcIlxuICAgIF07XG5cbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICBcIkphbnVhcnlcIixcbiAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgIFwiTWFyY2hcIixcbiAgICAgIFwiQXByaWxcIixcbiAgICAgIFwiTWF5XCIsXG4gICAgICBcIkp1bmVcIixcbiAgICAgIFwiSnVseVwiLFxuICAgICAgXCJBdWd1c3RcIixcbiAgICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgICBcIk9jdG9iZXJcIixcbiAgICAgIFwiTm92ZW1iZXJcIixcbiAgICAgIFwiRGVjZW1iZXJcIlxuICAgIF07XG5cbiAgICBjb25zdCB3ZWVrZGF5ID0gd2Vla2RheXNbZGF0ZS5nZXREYXkoKV07XG4gICAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgICBjb25zdCBpbnREYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUudG9UaW1lU3RyaW5nKClcbiAgICBjb25zdCBIID0gdGltZXN0YW1wLnN1YnN0cigwLCAyKVxuICAgIGNvbnN0IGggPSBIICUgMTIgfHwgMTJcbiAgICBjb25zdCBhbXBtID0gKEggPCAxMiB8fCBIID09PSAyNCkgPyBcIiBBTVwiIDogXCIgUE1cIlxuICAgIGNvbnN0IHRpbWUgPSBoICsgdGltZXN0YW1wLnN1YnN0cigyLCAzKSArIGFtcG1cbiAgICBjb25zdCB0aW1lc3RyaW5nID0gYCR7d2Vla2RheX0sICR7bW9udGh9ICR7aW50RGF5fSwgJHt5ZWFyfSwgJHt0aW1lfWA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdGltZXN0cmluZyB9KVxuICB9XG5cbiAgaGFuZGxlQWRkR3JhdGl0dWRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyYXRpdHVkZUlEID0gYGdyYXRpdHVkZS0ke2dlbmVyYXRlVW5pcXVlSUQoKX1gXG4gICAgbGV0IGdyYXRpdHVkZSA9IHt9XG4gICAgZ3JhdGl0dWRlW2dyYXRpdHVkZUlEXSA9IFwiXCJcbiAgICBjb25zdCBncmF0aXR1ZGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5ncmF0aXR1ZGVzLCBncmF0aXR1ZGUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBncmF0aXR1ZGVzXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFkZFZpc2lvbiA9ICgpID0+IHtcbiAgICBjb25zdCB2aXNpb25JRCA9IGB2aXNpb24tJHtnZW5lcmF0ZVVuaXF1ZUlEKCl9YFxuICAgIGxldCB2aXNpb24gPSB7fVxuICAgIHZpc2lvblt2aXNpb25JRF0gPSBcIlwiXG4gICAgY29uc3QgdmlzaW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUudmlzaW9ucywgdmlzaW9uKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaW9uc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVSZW1vdmVHcmF0aXR1ZGUgPSBrZXkgPT4ge1xuICAgIGlmIChrZXkgIT09IFwiZ3JhdGl0dWRlLTBcIikge1xuICAgICAgY29uc3QgeyBncmF0aXR1ZGVzIH0gPSB0aGlzLnN0YXRlXG4gICAgICBkZWxldGUgZ3JhdGl0dWRlc1trZXldXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZ3JhdGl0dWRlc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZW1vdmVWaXNpb24gPSBrZXkgPT4ge1xuICAgIGlmIChrZXkgIT09IFwidmlzaW9uLTBcIikge1xuICAgICAgY29uc3QgeyB2aXNpb25zIH0gPSB0aGlzLnN0YXRlXG4gICAgICBkZWxldGUgdmlzaW9uc1trZXldXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaW9uc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTYXZlR3JhdGl0dWRlID0gZSA9PiB7XG4gICAgY29uc3QgeyBncmF0aXR1ZGVzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZFxuICAgIGNvbnN0IGdyYXRpdHVkZVRleHQgPSBlLnRhcmdldC52YWx1ZVxuICAgIGdyYXRpdHVkZXNbaWRdID0gZ3JhdGl0dWRlVGV4dFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZ3JhdGl0dWRlc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTYXZlVmlzaW9uID0gZSA9PiB7XG4gICAgY29uc3QgeyB2aXNpb25zIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZFxuICAgIGNvbnN0IHZpc2lvblRleHQgPSBlLnRhcmdldC52YWx1ZVxuICAgIHZpc2lvbnNbaWRdID0gdmlzaW9uVGV4dFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaW9uc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVDcmVhdGVQREYgPSAoKSA9PiB7XG4gICAgcGRmTWFrZS52ZnMgPSBwZGZGb250c1xuICAgIGNvbnN0IHtcbiAgICAgIHRpbWVzdHJpbmcsXG4gICAgICBncmF0aXR1ZGVzLFxuICAgICAgdmlzaW9uc1xuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBwZGZNYWtlLmZvbnRzID0ge1xuICAgICAgJ1JpZ2h0ZW91cyc6IHtcbiAgICAgICAgbm9ybWFsOiAnUmlnaHRlb3VzLnR0ZicsXG4gICAgICAgIGJvbGQ6ICdSaWdodGVvdXMudHRmJyxcbiAgICAgICAgaXRhbGljczogJ1JpZ2h0ZW91cy50dGYnLFxuICAgICAgICBib2xkaXRhbGljczogJ1JpZ2h0ZW91cy50dGYnLFxuICAgICAgfSxcbiAgICAgICdTbmlwcGV0Jzoge1xuICAgICAgICBub3JtYWw6ICdTbmlwcGV0LnR0ZicsXG4gICAgICAgIGJvbGQ6ICdTbmlwcGV0LnR0ZicsXG4gICAgICAgIGl0YWxpY3M6ICdTbmlwcGV0LnR0ZicsXG4gICAgICAgIGJvbGRpdGFsaWNzOiAnU25pcHBldC50dGYnLFxuICAgICAgfSxcbiAgICAgICdDb2R5U3Rhci1MaWdodCc6IHtcbiAgICAgICAgbm9ybWFsOiAnQ29keVN0YXItTGlnaHQudHRmJyxcbiAgICAgICAgYm9sZDogJ0NvZHlTdGFyLUxpZ2h0LnR0ZicsXG4gICAgICAgIGl0YWxpY3M6ICdDb2R5U3Rhci1MaWdodC50dGYnLFxuICAgICAgICBib2xkaXRhbGljczogJ0NvZHlTdGFyLUxpZ2h0LnR0ZicsXG4gICAgICB9LFxuICAgICAgJ09wZW5TYW5zLVJlZ3VsYXInOiB7XG4gICAgICAgIG5vcm1hbDogJ09wZW5TYW5zLVJlZ3VsYXIudHRmJyxcbiAgICAgICAgYm9sZDogJ09wZW5TYW5zLVJlZ3VsYXIudHRmJyxcbiAgICAgICAgaXRhbGljczogJ09wZW5TYW5zLVJlZ3VsYXIudHRmJyxcbiAgICAgICAgYm9sZGl0YWxpY3M6ICdPcGVuU2Fucy1SZWd1bGFyLnR0ZicsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnR3JhdGVmdWwnLFxuICAgICAgICBzdHlsZTogWydoZWFkZXInLCAnc2VjdGlvbjEnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdWaXNpb24nLFxuICAgICAgICBzdHlsZTogWydoZWFkZXInLCAnc2VjdGlvbjInXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IGAke3RpbWVzdHJpbmd9YCxcbiAgICAgICAgc3R5bGU6IFsnaGVhZGVyJywgJ3NlY3Rpb24zJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnR3JhdGl0dWRlJyxcbiAgICAgICAgc3R5bGU6IFsnaGVhZGVyJywgJ3NlY3Rpb240J11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdWaXNpb24nLFxuICAgICAgICBzdHlsZTogWydoZWFkZXInLCAnc2VjdGlvbjQnXSxcbiAgICAgIH1cbiAgICBdXG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZ3JhdGl0dWRlcykubGVuZ3RoID4gMCkge1xuICAgICAgT2JqZWN0LmtleXMoZ3JhdGl0dWRlcykubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBncmF0aXR1ZGUgPSB7XG4gICAgICAgICAgdGV4dDogZ3JhdGl0dWRlc1trZXldLFxuICAgICAgICAgIHN0eWxlOiBbJ3NlY3Rpb241J11cbiAgICAgICAgfVxuICAgICAgICAvLyBqdXN0IHN0YXJ0IGF0IGluZGV4IDUgYXMgdGhlcmUgYXJlIHNldmVyYWwgaGVhZGluZ3MgKGN1cnJlbnRseSA0KSBpbnNlcnRlZCBmaXJzdFxuICAgICAgICBjb250ZW50LnNwbGljZShpbmRleCArIDQsIDAsIGdyYXRpdHVkZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKHZpc2lvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIE9iamVjdC5rZXlzKHZpc2lvbnMpLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgdmlzaW9uID0ge1xuICAgICAgICAgIHRleHQ6IHZpc2lvbnNba2V5XSxcbiAgICAgICAgICBzdHlsZTogWydzZWN0aW9uNSddXG4gICAgICAgIH1cbiAgICAgICAgLy8gdmlzaW9ucyBhcmUgY3VycmVudGx5IGF0IHRoZSBlbmQsIHNvIHdlIGNhbiBqdXN0IHB1c2hcbiAgICAgICAgY29udGVudC5wdXNoKHZpc2lvbilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZG9jRGVmaW5pdGlvbiA9IHtcbiAgICAgIGluZm86IHtcbiAgICAgICAgdGl0bGU6ICdHcmF0ZWZ1bCBWaXNpb24nLFxuICAgICAgICBhdXRob3I6ICdHcmF0ZWZ1bCBWaXNpb24nLFxuICAgICAgICBzdWJqZWN0OiAnR3JhdGVmdWwgVmlzaW9uJyxcbiAgICAgICAga2V5d29yZHM6ICdHcmF0ZWZ1bCBWaXNpb24nLFxuICAgICAgfSxcbiAgICAgIHBhZ2VNYXJnaW5zOiBbMCwgMCwgMCwgMF0sXG4gICAgICBjb250ZW50LFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICBhbGlnbm1lbnQ6ICdjZW50ZXInLFxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uMToge1xuICAgICAgICAgIGNvbG9yOiAnIzUxOTBhNScsXG4gICAgICAgICAgZm9udDogJ1JpZ2h0ZW91cycsXG4gICAgICAgICAgbWFyZ2luOiBbMCwgMjAsIDAsIDBdXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb24yOiB7XG4gICAgICAgICAgY29sb3I6ICcjNTE5MGE1JyxcbiAgICAgICAgICBmb250OiAnU25pcHBldCcsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb24zOiB7XG4gICAgICAgICAgY29sb3I6ICcjNTE5MGE1JyxcbiAgICAgICAgICBmb250OiAnQ29keVN0YXItTGlnaHQnLFxuICAgICAgICAgIG1hcmdpbjogWzAsIDIwLCAwLCAwXVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uNDoge1xuICAgICAgICAgIGNvbG9yOiAnIzUxOTBhNScsXG4gICAgICAgICAgZm9udDogJ0NvZHlTdGFyLUxpZ2h0JyxcbiAgICAgICAgICBtYXJnaW46IFswLCAyMCwgMCwgMF1cbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbjU6IHtcbiAgICAgICAgICBjb2xvcjogJyM1MTkwYTUnLFxuICAgICAgICAgIGZvbnQ6ICdPcGVuU2Fucy1SZWd1bGFyJyxcbiAgICAgICAgICBtYXJnaW46IFsxODAsIDIwLCAxODAsIDBdLFxuICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICBhbGlnbm1lbnQ6ICdjZW50ZXInXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwZGZNYWtlLmNyZWF0ZVBkZihkb2NEZWZpbml0aW9uKS5vcGVuKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aW1lc3RyaW5nLFxuICAgICAgcXVvdGVzLFxuICAgICAgZ3JhdGl0dWRlcyxcbiAgICAgIHZpc2lvbnMsXG4gICAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCByZW5kZXJHcmF0aXR1ZGVzID0gT2JqZWN0LmtleXMoZ3JhdGl0dWRlcykubWFwKChrZXksIGluZGV4KSA9PiA8VGV4dFxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIGlkPXtrZXl9XG4gICAgICB0ZXh0PXtncmF0aXR1ZGVzW2tleV19XG4gICAgICBoYW5kbGVSZW1vdmVUZXh0PXsoKSA9PiB0aGlzLmhhbmRsZVJlbW92ZUdyYXRpdHVkZShrZXkpfVxuICAgICAgaGFuZGxlU2F2ZVRleHQ9e3RoaXMuaGFuZGxlU2F2ZUdyYXRpdHVkZX1cbiAgICAgIHJvd3M9XCI0XCJcbiAgICAgIGxhYmVsPVwiR3JhdGl0dWRlXCJcbiAgICAvPilcblxuICAgIGNvbnN0IHJlbmRlclZpc2lvbnMgPSBPYmplY3Qua2V5cyh2aXNpb25zKS5tYXAoKGtleSwgaW5kZXgpID0+IDxUZXh0XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaWQ9e2tleX1cbiAgICAgIHRleHQ9e3Zpc2lvbnNba2V5XX1cbiAgICAgIGhhbmRsZVJlbW92ZVRleHQ9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlVmlzaW9uKGtleSl9XG4gICAgICBoYW5kbGVTYXZlVGV4dD17dGhpcy5oYW5kbGVTYXZlVmlzaW9ufVxuICAgICAgcm93cz1cIjRcIlxuICAgICAgbGFiZWw9XCJWaXNpb25cIlxuICAgIC8+KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkc3BhY2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVudGlvbiBhYnNDZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhdGVmdWxcIj5HcmF0ZWZ1bDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpb25cIj5WaXNpb248L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aW1lXCI+XG4gICAgICAgICAgPENsb2NrIHRpbWVzdHJpbmc9e3RpbWVzdHJpbmd9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicXVvdGVzXCI+XG4gICAgICAgICAgPFF1b3RlcyBxdW90ZXM9e3F1b3Rlc30gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JhdGl0dWRlc1wiPlxuICAgICAgICAgIHtyZW5kZXJHcmF0aXR1ZGVzfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVBZGRHcmF0aXR1ZGV9IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+QUREIEdSQVRJVFVERTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpc2lvbnNcIj5cbiAgICAgICAgICB7cmVuZGVyVmlzaW9uc31cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkVmlzaW9ufSBjbGFzc05hbWU9XCJkb3R0ZWQtdGV4dFwiPisgVmlzaW9uPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3R0ZWQtdGV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ3JlYXRlUERGfT5Eb3dubG9hZDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFppbGxhU2xhYjtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1ppbGxhU2xhYi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvZHlTdGFyTGlnaHQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9Db2R5U3Rhci1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1JpZ2h0ZW91cy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNuaXBwZXQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9TbmlwcGV0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICNiMGVkYzU7XG4gICAgICB9XG4gICAgICAuYWJzQ2VudGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cbiAgICAgIC5pbmxpbmUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICB7LyogLmRvdHRlZC10ZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICBmb250LWZhbWlseTogQ29keVN0YXJMaWdodCwgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9ICovfVxuICAgICAgLmhlYWRzcGFjZSB7XG4gICAgICAgIGhlaWdodDogMTB2aDtcbiAgICAgICAgYmFja2dyb3VuZDogIzUxOTBhNTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmludGVudGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucXVvdGVzIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgfVxuICAgICAgLmdyYXRlZnVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cywgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICB9XG4gICAgICAudmlzaW9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNuaXBwZXQsIFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgfVxuICAgICAgLnRpbWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjN2ViOGNiO1xuICAgICAgfVxuICAgICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgfVxuICAgICAgLmdyYXRpdHVkZXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICB9XG4gICAgICAudmlzaW9ucyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICAgIC5mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNTliZjdjO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6970c88a38058ba323af.hot-update.js.map