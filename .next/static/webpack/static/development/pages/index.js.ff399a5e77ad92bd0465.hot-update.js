webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var _static_js_vfs_fonts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../static/js/vfs_fonts */ "./static/js/vfs_fonts.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_index_Brand__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/index/Brand */ "./components/index/Brand.js");
/* harmony import */ var _components_index_Clock__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/index/Clock */ "./components/index/Clock.js");
/* harmony import */ var _components_index_Quotes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/index/Quotes */ "./components/index/Quotes.js");
/* harmony import */ var _components_shared_Text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/shared/Text */ "./components/shared/Text.js");
/* harmony import */ var _components_shared_Footer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/shared/Footer */ "./components/shared/Footer.js");












var _jsxFileName = "/Users/dallas/Documents/Gratitude/pages/index.js";





 // import pdfFontConfig from '../components/pdf/pdfFontConfig'
// import pdfContent from '../components/pdf/content'








var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "state", {
      timestring: '',
      quotes: [{
        "text": "Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul.",
        "author": "Amy Collette"
      }],
      gratitudes: {
        "gratitude-0": ""
      },
      visions: {
        "vision-0": ""
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleAddGratitude", function () {
      var gratitudeID = "gratitude-".concat(Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_17__["generateUniqueID"])());
      var gratitude = {};
      gratitude[gratitudeID] = "";

      var gratitudes = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, _this.state.gratitudes, gratitude);

      _this.setState({
        gratitudes: gratitudes
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleAddVision", function () {
      var visionID = "vision-".concat(Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_17__["generateUniqueID"])());
      var vision = {};
      vision[visionID] = "";

      var visions = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, _this.state.visions, vision);

      _this.setState({
        visions: visions
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleRemoveGratitude", function (key) {
      if (key !== "gratitude-0") {
        var gratitudes = _this.state.gratitudes;
        delete gratitudes[key];

        _this.setState({
          gratitudes: gratitudes
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleRemoveVision", function (key) {
      if (key !== "vision-0") {
        var visions = _this.state.visions;
        delete visions[key];

        _this.setState({
          visions: visions
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleSaveGratitude", function (e) {
      var gratitudes = _this.state.gratitudes;
      var id = e.target.id;
      var gratitudeText = e.target.value;
      gratitudes[id] = gratitudeText;

      _this.setState({
        gratitudes: gratitudes
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleSaveVision", function (e) {
      var visions = _this.state.visions;
      var id = e.target.id;
      var visionText = e.target.value;
      visions[id] = visionText;

      _this.setState({
        visions: visions
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleCreatePDF", function () {
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.vfs = _static_js_vfs_fonts__WEBPACK_IMPORTED_MODULE_16__["default"];
      var _this$state = _this.state,
          timestring = _this$state.timestring,
          gratitudes = _this$state.gratitudes,
          visions = _this$state.visions; // pdfMake.fonts = pdfFontConfig

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.fonts = {
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
      }; // const content = pdfContent(timestring)

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

      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(gratitudes).length > 0) {
        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(gratitudes).map(function (key, index) {
          var gratitude = {
            text: gratitudes[key],
            style: ['section5'] // just start at index 5 as there are several headings (currently 4) inserted first

          };
          content.splice(index + 4, 0, gratitude);
        });
      }

      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(visions).length > 0) {
        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(visions).map(function (key, index) {
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
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.createPdf(docDefinition).open();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.handleCreateTimeString();
      this.timer = setInterval(function () {
        return _this2.handleCreateTimeString();
      }, 1000);
      this.props.quotes && this.setState({
        quotes: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(this.state.quotes), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.quotes))
      });
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

      var renderGratitudes = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(gratitudes).map(function (key, index) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_shared_Text__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
            lineNumber: 280
          },
          __self: this
        });
      });

      var renderVisions = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(visions).map(function (key, index) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_shared_Text__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
            lineNumber: 290
          },
          __self: this
        });
      });

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4170867020" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-4170867020",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_index_Brand__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_index_Clock__WEBPACK_IMPORTED_MODULE_20__["default"], {
        timestring: timestring,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_index_Quotes__WEBPACK_IMPORTED_MODULE_21__["default"], {
        quotes: quotes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: "jsx-4170867020" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, renderGratitudes, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-4170867020" + " " + "section-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: "jsx-4170867020" + " " + "visions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, renderVisions, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        onClick: this.handleAddVision,
        className: "jsx-4170867020" + " " + "section-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_23__["default"], {
        handleCreatePDF: this.handleCreatePDF(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_12___default.a, {
        id: "4170867020",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}@font-face{font-family:Righteous;src:url(\"/static/fonts/Righteous.ttf\") format(\"truetype\");}@font-face{font-family:Snippet;src:url(\"/static/fonts/Snippet.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;margin-bottom:6rem;background:#b0edc5;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.inline{display:inline-block;}.section-header{text-align:center;padding:2rem;color:white;font-size:2.5rem;font-family:Sans-Serif,Arial;}.gratitudes{background:lightblue;}.visions{background:lightblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0VDJCLEFBRytCLEFBSUksQUFJSixBQUlGLEFBSUUsQUFJYixBQU9TLEFBTUcsQUFHSCxBQU9HLEFBR0EsU0F6QlgsU0FPRixBQVNLLENBZkcsQ0FUd0MsQ0FxQjFELEFBVUEsQUFHQSxDQTlDNEQsQUFRQSxBQVE1RCxJQVppRSxBQXdCdEQsS0FTRyxJQWZPLEFBT2EsUUFTZixXQWZFLE1BZ0JXLGFBZmhDLEdBWEEsSUFaQSxBQVFBLFNBSkEsQUFtQ0EsbURBVkEiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBkZk1ha2UgZnJvbSAncGRmbWFrZS9idWlsZC9wZGZtYWtlJ1xuaW1wb3J0IHsgbG9hZERCIH0gZnJvbSAnLi4vbGliL2RiJ1xuaW1wb3J0IHBkZkZvbnRzIGZyb20gJy4uL3N0YXRpYy9qcy92ZnNfZm9udHMnXG5pbXBvcnQgeyBnZW5lcmF0ZVVuaXF1ZUlEIH0gZnJvbSAnLi4vbGliL2hlbHBlcnMnXG4vLyBpbXBvcnQgcGRmRm9udENvbmZpZyBmcm9tICcuLi9jb21wb25lbnRzL3BkZi9wZGZGb250Q29uZmlnJ1xuLy8gaW1wb3J0IHBkZkNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9wZGYvY29udGVudCdcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEJyYW5kIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgvQnJhbmQnXG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC9DbG9jaydcbmltcG9ydCBRdW90ZXMgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC9RdW90ZXMnXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9UZXh0J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9Gb290ZXInXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGltZXN0cmluZzogJycsXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIkdyYXRpdHVkZSBpcyBhIHBvd2VyZnVsIGNhdGFseXN0IGZvciBoYXBwaW5lc3MuIEl0J3MgdGhlIHNwYXJrIHRoYXQgbGlnaHRzIGEgZmlyZSBvZiBqb3kgaW4geW91ciBzb3VsLlwiLFxuICAgICAgICBcImF1dGhvclwiOiBcIkFteSBDb2xsZXR0ZVwiXG4gICAgICB9LFxuICAgIF0sXG4gICAgZ3JhdGl0dWRlczoge1xuICAgICAgXCJncmF0aXR1ZGUtMFwiOiBcIlwiXG4gICAgfSxcbiAgICB2aXNpb25zOiB7XG4gICAgICBcInZpc2lvbi0wXCI6IFwiXCJcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKVxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKSwgMTAwMClcbiAgICB0aGlzLnByb3BzLnF1b3RlcyAmJiB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1b3RlczogWy4uLnRoaXMuc3RhdGUucXVvdGVzLCAuLi50aGlzLnByb3BzLnF1b3Rlc11cbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICAgIFwiU3VuZGF5XCIsXG4gICAgICBcIk1vbmRheVwiLFxuICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgXCJGcmlkYXlcIixcbiAgICAgIFwiU2F0dXJkYXlcIlxuICAgIF07XG5cbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICBcIkphbnVhcnlcIixcbiAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgIFwiTWFyY2hcIixcbiAgICAgIFwiQXByaWxcIixcbiAgICAgIFwiTWF5XCIsXG4gICAgICBcIkp1bmVcIixcbiAgICAgIFwiSnVseVwiLFxuICAgICAgXCJBdWd1c3RcIixcbiAgICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgICBcIk9jdG9iZXJcIixcbiAgICAgIFwiTm92ZW1iZXJcIixcbiAgICAgIFwiRGVjZW1iZXJcIlxuICAgIF07XG5cbiAgICBjb25zdCB3ZWVrZGF5ID0gd2Vla2RheXNbZGF0ZS5nZXREYXkoKV07XG4gICAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgICBjb25zdCBpbnREYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUudG9UaW1lU3RyaW5nKClcbiAgICBjb25zdCBIID0gdGltZXN0YW1wLnN1YnN0cigwLCAyKVxuICAgIGNvbnN0IGggPSBIICUgMTIgfHwgMTJcbiAgICBjb25zdCBhbXBtID0gKEggPCAxMiB8fCBIID09PSAyNCkgPyBcIiBBTVwiIDogXCIgUE1cIlxuICAgIGNvbnN0IHRpbWUgPSBoICsgdGltZXN0YW1wLnN1YnN0cigyLCAzKSArIGFtcG1cbiAgICBjb25zdCB0aW1lc3RyaW5nID0gYCR7d2Vla2RheX0sICR7bW9udGh9ICR7aW50RGF5fSwgJHt5ZWFyfSwgJHt0aW1lfWA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdGltZXN0cmluZyB9KVxuICB9XG5cbiAgaGFuZGxlQWRkR3JhdGl0dWRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyYXRpdHVkZUlEID0gYGdyYXRpdHVkZS0ke2dlbmVyYXRlVW5pcXVlSUQoKX1gXG4gICAgbGV0IGdyYXRpdHVkZSA9IHt9XG4gICAgZ3JhdGl0dWRlW2dyYXRpdHVkZUlEXSA9IFwiXCJcbiAgICBjb25zdCBncmF0aXR1ZGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5ncmF0aXR1ZGVzLCBncmF0aXR1ZGUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBncmF0aXR1ZGVzXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFkZFZpc2lvbiA9ICgpID0+IHtcbiAgICBjb25zdCB2aXNpb25JRCA9IGB2aXNpb24tJHtnZW5lcmF0ZVVuaXF1ZUlEKCl9YFxuICAgIGxldCB2aXNpb24gPSB7fVxuICAgIHZpc2lvblt2aXNpb25JRF0gPSBcIlwiXG4gICAgY29uc3QgdmlzaW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUudmlzaW9ucywgdmlzaW9uKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaW9uc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVSZW1vdmVHcmF0aXR1ZGUgPSBrZXkgPT4ge1xuICAgIGlmIChrZXkgIT09IFwiZ3JhdGl0dWRlLTBcIikge1xuICAgICAgY29uc3QgeyBncmF0aXR1ZGVzIH0gPSB0aGlzLnN0YXRlXG4gICAgICBkZWxldGUgZ3JhdGl0dWRlc1trZXldXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZ3JhdGl0dWRlc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZW1vdmVWaXNpb24gPSBrZXkgPT4ge1xuICAgIGlmIChrZXkgIT09IFwidmlzaW9uLTBcIikge1xuICAgICAgY29uc3QgeyB2aXNpb25zIH0gPSB0aGlzLnN0YXRlXG4gICAgICBkZWxldGUgdmlzaW9uc1trZXldXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaW9uc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTYXZlR3JhdGl0dWRlID0gZSA9PiB7XG4gICAgY29uc3QgeyBncmF0aXR1ZGVzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZFxuICAgIGNvbnN0IGdyYXRpdHVkZVRleHQgPSBlLnRhcmdldC52YWx1ZVxuICAgIGdyYXRpdHVkZXNbaWRdID0gZ3JhdGl0dWRlVGV4dFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZ3JhdGl0dWRlc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTYXZlVmlzaW9uID0gZSA9PiB7XG4gICAgY29uc3QgeyB2aXNpb25zIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZFxuICAgIGNvbnN0IHZpc2lvblRleHQgPSBlLnRhcmdldC52YWx1ZVxuICAgIHZpc2lvbnNbaWRdID0gdmlzaW9uVGV4dFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaW9uc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVDcmVhdGVQREYgPSAoKSA9PiB7XG4gICAgcGRmTWFrZS52ZnMgPSBwZGZGb250c1xuICAgIGNvbnN0IHtcbiAgICAgIHRpbWVzdHJpbmcsXG4gICAgICBncmF0aXR1ZGVzLFxuICAgICAgdmlzaW9uc1xuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAvLyBwZGZNYWtlLmZvbnRzID0gcGRmRm9udENvbmZpZ1xuICAgIHBkZk1ha2UuZm9udHMgPSB7XG4gICAgICAnUmlnaHRlb3VzJzoge1xuICAgICAgICBub3JtYWw6ICdSaWdodGVvdXMudHRmJyxcbiAgICAgICAgYm9sZDogJ1JpZ2h0ZW91cy50dGYnLFxuICAgICAgICBpdGFsaWNzOiAnUmlnaHRlb3VzLnR0ZicsXG4gICAgICAgIGJvbGRpdGFsaWNzOiAnUmlnaHRlb3VzLnR0ZicsXG4gICAgICB9LFxuICAgICAgJ1NuaXBwZXQnOiB7XG4gICAgICAgIG5vcm1hbDogJ1NuaXBwZXQudHRmJyxcbiAgICAgICAgYm9sZDogJ1NuaXBwZXQudHRmJyxcbiAgICAgICAgaXRhbGljczogJ1NuaXBwZXQudHRmJyxcbiAgICAgICAgYm9sZGl0YWxpY3M6ICdTbmlwcGV0LnR0ZicsXG4gICAgICB9LFxuICAgICAgJ0NvZHlTdGFyLUxpZ2h0Jzoge1xuICAgICAgICBub3JtYWw6ICdDb2R5U3Rhci1MaWdodC50dGYnLFxuICAgICAgICBib2xkOiAnQ29keVN0YXItTGlnaHQudHRmJyxcbiAgICAgICAgaXRhbGljczogJ0NvZHlTdGFyLUxpZ2h0LnR0ZicsXG4gICAgICAgIGJvbGRpdGFsaWNzOiAnQ29keVN0YXItTGlnaHQudHRmJyxcbiAgICAgIH0sXG4gICAgICAnT3BlblNhbnMtUmVndWxhcic6IHtcbiAgICAgICAgbm9ybWFsOiAnT3BlblNhbnMtUmVndWxhci50dGYnLFxuICAgICAgICBib2xkOiAnT3BlblNhbnMtUmVndWxhci50dGYnLFxuICAgICAgICBpdGFsaWNzOiAnT3BlblNhbnMtUmVndWxhci50dGYnLFxuICAgICAgICBib2xkaXRhbGljczogJ09wZW5TYW5zLVJlZ3VsYXIudHRmJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICAvLyBjb25zdCBjb250ZW50ID0gcGRmQ29udGVudCh0aW1lc3RyaW5nKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdHcmF0ZWZ1bCcsXG4gICAgICAgIHN0eWxlOiBbJ2hlYWRlcicsICdzZWN0aW9uMSddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Zpc2lvbicsXG4gICAgICAgIHN0eWxlOiBbJ2hlYWRlcicsICdzZWN0aW9uMiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogYCR7dGltZXN0cmluZ31gLFxuICAgICAgICBzdHlsZTogWydoZWFkZXInLCAnc2VjdGlvbjMnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdHcmF0aXR1ZGUnLFxuICAgICAgICBzdHlsZTogWydoZWFkZXInLCAnc2VjdGlvbjQnXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Zpc2lvbicsXG4gICAgICAgIHN0eWxlOiBbJ2hlYWRlcicsICdzZWN0aW9uNCddLFxuICAgICAgfVxuICAgIF1cblxuICAgIGlmIChPYmplY3Qua2V5cyhncmF0aXR1ZGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICBPYmplY3Qua2V5cyhncmF0aXR1ZGVzKS5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGdyYXRpdHVkZSA9IHtcbiAgICAgICAgICB0ZXh0OiBncmF0aXR1ZGVzW2tleV0sXG4gICAgICAgICAgc3R5bGU6IFsnc2VjdGlvbjUnXVxuICAgICAgICB9XG4gICAgICAgIC8vIGp1c3Qgc3RhcnQgYXQgaW5kZXggNSBhcyB0aGVyZSBhcmUgc2V2ZXJhbCBoZWFkaW5ncyAoY3VycmVudGx5IDQpIGluc2VydGVkIGZpcnN0XG4gICAgICAgIGNvbnRlbnQuc3BsaWNlKGluZGV4ICsgNCwgMCwgZ3JhdGl0dWRlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXModmlzaW9ucykubGVuZ3RoID4gMCkge1xuICAgICAgT2JqZWN0LmtleXModmlzaW9ucykubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCB2aXNpb24gPSB7XG4gICAgICAgICAgdGV4dDogdmlzaW9uc1trZXldLFxuICAgICAgICAgIHN0eWxlOiBbJ3NlY3Rpb241J11cbiAgICAgICAgfVxuICAgICAgICAvLyB2aXNpb25zIGFyZSBjdXJyZW50bHkgYXQgdGhlIGVuZCwgc28gd2UgY2FuIGp1c3QgcHVzaFxuICAgICAgICBjb250ZW50LnB1c2godmlzaW9uKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkb2NEZWZpbml0aW9uID0ge1xuICAgICAgaW5mbzoge1xuICAgICAgICB0aXRsZTogJ0dyYXRlZnVsIFZpc2lvbicsXG4gICAgICAgIGF1dGhvcjogJ0dyYXRlZnVsIFZpc2lvbicsXG4gICAgICAgIHN1YmplY3Q6ICdHcmF0ZWZ1bCBWaXNpb24nLFxuICAgICAgICBrZXl3b3JkczogJ0dyYXRlZnVsIFZpc2lvbicsXG4gICAgICB9LFxuICAgICAgcGFnZU1hcmdpbnM6IFswLCAwLCAwLCAwXSxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgIGFsaWdubWVudDogJ2NlbnRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb24xOiB7XG4gICAgICAgICAgY29sb3I6ICcjNTE5MGE1JyxcbiAgICAgICAgICBmb250OiAnUmlnaHRlb3VzJyxcbiAgICAgICAgICBtYXJnaW46IFswLCAyMCwgMCwgMF1cbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbjI6IHtcbiAgICAgICAgICBjb2xvcjogJyM1MTkwYTUnLFxuICAgICAgICAgIGZvbnQ6ICdTbmlwcGV0JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbjM6IHtcbiAgICAgICAgICBjb2xvcjogJyM1MTkwYTUnLFxuICAgICAgICAgIGZvbnQ6ICdDb2R5U3Rhci1MaWdodCcsXG4gICAgICAgICAgbWFyZ2luOiBbMCwgMjAsIDAsIDBdXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb240OiB7XG4gICAgICAgICAgY29sb3I6ICcjNTE5MGE1JyxcbiAgICAgICAgICBmb250OiAnQ29keVN0YXItTGlnaHQnLFxuICAgICAgICAgIG1hcmdpbjogWzAsIDIwLCAwLCAwXVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uNToge1xuICAgICAgICAgIGNvbG9yOiAnIzUxOTBhNScsXG4gICAgICAgICAgZm9udDogJ09wZW5TYW5zLVJlZ3VsYXInLFxuICAgICAgICAgIG1hcmdpbjogWzE4MCwgMjAsIDE4MCwgMF0sXG4gICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgIGFsaWdubWVudDogJ2NlbnRlcidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHBkZk1ha2UuY3JlYXRlUGRmKGRvY0RlZmluaXRpb24pLm9wZW4oKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpbWVzdHJpbmcsXG4gICAgICBxdW90ZXMsXG4gICAgICBncmF0aXR1ZGVzLFxuICAgICAgdmlzaW9ucyxcbiAgICB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHJlbmRlckdyYXRpdHVkZXMgPSBPYmplY3Qua2V5cyhncmF0aXR1ZGVzKS5tYXAoKGtleSwgaW5kZXgpID0+IDxUZXh0XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaWQ9e2tleX1cbiAgICAgIHRleHQ9e2dyYXRpdHVkZXNba2V5XX1cbiAgICAgIGhhbmRsZVJlbW92ZVRleHQ9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlR3JhdGl0dWRlKGtleSl9XG4gICAgICBoYW5kbGVTYXZlVGV4dD17dGhpcy5oYW5kbGVTYXZlR3JhdGl0dWRlfVxuICAgICAgcm93cz1cIjRcIlxuICAgICAgbGFiZWw9XCJHcmF0aXR1ZGVcIlxuICAgIC8+KVxuXG4gICAgY29uc3QgcmVuZGVyVmlzaW9ucyA9IE9iamVjdC5rZXlzKHZpc2lvbnMpLm1hcCgoa2V5LCBpbmRleCkgPT4gPFRleHRcbiAgICAgIGtleT17aW5kZXh9XG4gICAgICBpZD17a2V5fVxuICAgICAgdGV4dD17dmlzaW9uc1trZXldfVxuICAgICAgaGFuZGxlUmVtb3ZlVGV4dD17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmVWaXNpb24oa2V5KX1cbiAgICAgIGhhbmRsZVNhdmVUZXh0PXt0aGlzLmhhbmRsZVNhdmVWaXNpb259XG4gICAgICByb3dzPVwiNFwiXG4gICAgICBsYWJlbD1cIlZpc2lvblwiXG4gICAgLz4pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxCcmFuZCAvPlxuICAgICAgICA8Q2xvY2sgdGltZXN0cmluZz17dGltZXN0cmluZ30gLz5cbiAgICAgICAgPFF1b3RlcyBxdW90ZXM9e3F1b3Rlc30gLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JhdGl0dWRlc1wiPlxuICAgICAgICAgIHtyZW5kZXJHcmF0aXR1ZGVzfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVBZGRHcmF0aXR1ZGV9IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+KzwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpc2lvbnNcIj5cbiAgICAgICAgICB7cmVuZGVyVmlzaW9uc31cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkVmlzaW9ufSBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPis8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyIGhhbmRsZUNyZWF0ZVBERj17dGhpcy5oYW5kbGVDcmVhdGVQREYoKX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogWmlsbGFTbGFiO1xuICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvWmlsbGFTbGFiLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogQ29keVN0YXJMaWdodDtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL0NvZHlTdGFyLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogUmlnaHRlb3VzO1xuICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvUmlnaHRlb3VzLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogU25pcHBldDtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1NuaXBwZXQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgfVxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogI2IwZWRjNTtcbiAgICAgIH1cbiAgICAgIC5hYnNDZW50ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuICAgICAgLmlubGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgfVxuICAgICAgLmdyYXRpdHVkZXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICB9XG4gICAgICAudmlzaW9ucyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYiA9IGF3YWl0IGxvYWREQigpXG4gIGxldCBxdW90ZXMgPSBbXVxuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZGIuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncXVvdGVzJykuZ2V0KClcbiAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgcXVvdGVzLnB1c2goZG9jLmRhdGEoKSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHF1b3Rlc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var db, quotes, querySnapshot;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_lib_db__WEBPACK_IMPORTED_MODULE_15__["loadDB"])();

        case 2:
          db = _context.sent;
          quotes = [];
          _context.next = 6;
          return db.firestore().collection('quotes').get();

        case 6:
          querySnapshot = _context.sent;
          querySnapshot.forEach(function (doc) {
            quotes.push(doc.data());
          });
          return _context.abrupt("return", {
            quotes: quotes
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ff399a5e77ad92bd0465.hot-update.js.map