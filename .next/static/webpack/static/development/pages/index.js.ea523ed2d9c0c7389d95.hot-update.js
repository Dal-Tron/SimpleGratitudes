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
/* harmony import */ var _components_pdf_pdfFontConfig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/pdf/pdfFontConfig */ "./components/pdf/pdfFontConfig.js");
/* harmony import */ var _components_pdf_content__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/pdf/content */ "./components/pdf/content.js");
/* harmony import */ var _components_pdf_docDefinition__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/pdf/docDefinition */ "./components/pdf/docDefinition.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_index_Brand__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/index/Brand */ "./components/index/Brand.js");
/* harmony import */ var _components_index_Clock__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/index/Clock */ "./components/index/Clock.js");
/* harmony import */ var _components_index_Quotes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/index/Quotes */ "./components/index/Quotes.js");
/* harmony import */ var _components_shared_Text__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/shared/Text */ "./components/shared/Text.js");
/* harmony import */ var _components_shared_Footer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/shared/Footer */ "./components/shared/Footer.js");












var _jsxFileName = "/Users/dallas/Documents/Gratitude/pages/index.js";
















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
      var _this$state = _this.state,
          timestring = _this$state.timestring,
          gratitudes = _this$state.gratitudes,
          visions = _this$state.visions;
      var content = Object(_components_pdf_content__WEBPACK_IMPORTED_MODULE_19__["default"])(timestring); // const docDefinition = pdfDocDefinition

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.vfs = _static_js_vfs_fonts__WEBPACK_IMPORTED_MODULE_16__["default"];
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.fonts = _components_pdf_pdfFontConfig__WEBPACK_IMPORTED_MODULE_18__["default"];

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

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.createPdf(docDefinition(content)).open();
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
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_shared_Text__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
            lineNumber: 192
          },
          __self: this
        });
      });

      var renderVisions = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(visions).map(function (key, index) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_shared_Text__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
            lineNumber: 202
          },
          __self: this
        });
      });

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4170867020" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_21___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-4170867020",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_index_Brand__WEBPACK_IMPORTED_MODULE_22__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_index_Clock__WEBPACK_IMPORTED_MODULE_23__["default"], {
        timestring: timestring,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_index_Quotes__WEBPACK_IMPORTED_MODULE_24__["default"], {
        quotes: quotes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: "jsx-4170867020" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, renderGratitudes, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-4170867020" + " " + "section-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: "jsx-4170867020" + " " + "visions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, renderVisions, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        onClick: this.handleAddVision,
        className: "jsx-4170867020" + " " + "section-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_26__["default"], {
        handleCreatePDF: function handleCreatePDF() {
          return _this3.handleCreatePDF();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_12___default.a, {
        id: "4170867020",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}@font-face{font-family:Righteous;src:url(\"/static/fonts/Righteous.ttf\") format(\"truetype\");}@font-face{font-family:Snippet;src:url(\"/static/fonts/Snippet.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;margin-bottom:6rem;background:#b0edc5;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.inline{display:inline-block;}.section-header{text-align:center;padding:2rem;color:white;font-size:2.5rem;font-family:Sans-Serif,Arial;}.gratitudes{background:lightblue;}.visions{background:lightblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTzJCLEFBRytCLEFBSUksQUFJSixBQUlGLEFBSUUsQUFJYixBQU9TLEFBTUcsQUFHSCxBQU9HLEFBR0EsU0F6QlgsU0FPRixBQVNLLENBZkcsQ0FUd0MsQ0FxQjFELEFBVUEsQUFHQSxDQTlDNEQsQUFRQSxBQVE1RCxJQVppRSxBQXdCdEQsS0FTRyxJQWZPLEFBT2EsUUFTZixXQWZFLE1BZ0JXLGFBZmhDLEdBWEEsSUFaQSxBQVFBLFNBSkEsQUFtQ0EsbURBVkEiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBkZk1ha2UgZnJvbSAncGRmbWFrZS9idWlsZC9wZGZtYWtlJ1xuaW1wb3J0IHsgbG9hZERCIH0gZnJvbSAnLi4vbGliL2RiJ1xuaW1wb3J0IHBkZkZvbnRzIGZyb20gJy4uL3N0YXRpYy9qcy92ZnNfZm9udHMnXG5pbXBvcnQgeyBnZW5lcmF0ZVVuaXF1ZUlEIH0gZnJvbSAnLi4vbGliL2hlbHBlcnMnXG5pbXBvcnQgcGRmRm9udENvbmZpZyBmcm9tICcuLi9jb21wb25lbnRzL3BkZi9wZGZGb250Q29uZmlnJ1xuaW1wb3J0IHBkZkNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9wZGYvY29udGVudCdcbmltcG9ydCBwZGZEb2NEZWZpbml0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvcGRmL2RvY0RlZmluaXRpb24nXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBCcmFuZCBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4L0JyYW5kJ1xuaW1wb3J0IENsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgvQ2xvY2snXG5pbXBvcnQgUXVvdGVzIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgvUXVvdGVzJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvVGV4dCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvRm9vdGVyJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRpbWVzdHJpbmc6ICcnLFxuICAgIHF1b3RlczogW1xuICAgICAge1xuICAgICAgICBcInRleHRcIjogXCJHcmF0aXR1ZGUgaXMgYSBwb3dlcmZ1bCBjYXRhbHlzdCBmb3IgaGFwcGluZXNzLiBJdCdzIHRoZSBzcGFyayB0aGF0IGxpZ2h0cyBhIGZpcmUgb2Ygam95IGluIHlvdXIgc291bC5cIixcbiAgICAgICAgXCJhdXRob3JcIjogXCJBbXkgQ29sbGV0dGVcIlxuICAgICAgfSxcbiAgICBdLFxuICAgIGdyYXRpdHVkZXM6IHtcbiAgICAgIFwiZ3JhdGl0dWRlLTBcIjogXCJcIlxuICAgIH0sXG4gICAgdmlzaW9uczoge1xuICAgICAgXCJ2aXNpb24tMFwiOiBcIlwiXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oYW5kbGVDcmVhdGVUaW1lU3RyaW5nKClcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5oYW5kbGVDcmVhdGVUaW1lU3RyaW5nKCksIDEwMDApXG4gICAgdGhpcy5wcm9wcy5xdW90ZXMgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdW90ZXM6IFsuLi50aGlzLnN0YXRlLnF1b3RlcywgLi4udGhpcy5wcm9wcy5xdW90ZXNdXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgfVxuXG4gIGhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgd2Vla2RheXMgPSBbXG4gICAgICBcIlN1bmRheVwiLFxuICAgICAgXCJNb25kYXlcIixcbiAgICAgIFwiVHVlc2RheVwiLFxuICAgICAgXCJXZWRuZXNkYXlcIixcbiAgICAgIFwiVGh1cnNkYXlcIixcbiAgICAgIFwiRnJpZGF5XCIsXG4gICAgICBcIlNhdHVyZGF5XCJcbiAgICBdO1xuXG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgICBcIk1hcmNoXCIsXG4gICAgICBcIkFwcmlsXCIsXG4gICAgICBcIk1heVwiLFxuICAgICAgXCJKdW5lXCIsXG4gICAgICBcIkp1bHlcIixcbiAgICAgIFwiQXVndXN0XCIsXG4gICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgXCJPY3RvYmVyXCIsXG4gICAgICBcIk5vdmVtYmVyXCIsXG4gICAgICBcIkRlY2VtYmVyXCJcbiAgICBdO1xuXG4gICAgY29uc3Qgd2Vla2RheSA9IHdlZWtkYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgIGNvbnN0IG1vbnRoID0gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gICAgY29uc3QgaW50RGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLnRvVGltZVN0cmluZygpXG4gICAgY29uc3QgSCA9IHRpbWVzdGFtcC5zdWJzdHIoMCwgMilcbiAgICBjb25zdCBoID0gSCAlIDEyIHx8IDEyXG4gICAgY29uc3QgYW1wbSA9IChIIDwgMTIgfHwgSCA9PT0gMjQpID8gXCIgQU1cIiA6IFwiIFBNXCJcbiAgICBjb25zdCB0aW1lID0gaCArIHRpbWVzdGFtcC5zdWJzdHIoMiwgMykgKyBhbXBtXG4gICAgY29uc3QgdGltZXN0cmluZyA9IGAke3dlZWtkYXl9LCAke21vbnRofSAke2ludERheX0sICR7eWVhcn0sICR7dGltZX1gO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVzdHJpbmcgfSlcbiAgfVxuXG4gIGhhbmRsZUFkZEdyYXRpdHVkZSA9ICgpID0+IHtcbiAgICBjb25zdCBncmF0aXR1ZGVJRCA9IGBncmF0aXR1ZGUtJHtnZW5lcmF0ZVVuaXF1ZUlEKCl9YFxuICAgIGxldCBncmF0aXR1ZGUgPSB7fVxuICAgIGdyYXRpdHVkZVtncmF0aXR1ZGVJRF0gPSBcIlwiXG4gICAgY29uc3QgZ3JhdGl0dWRlcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZ3JhdGl0dWRlcywgZ3JhdGl0dWRlKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZ3JhdGl0dWRlc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBZGRWaXNpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgdmlzaW9uSUQgPSBgdmlzaW9uLSR7Z2VuZXJhdGVVbmlxdWVJRCgpfWBcbiAgICBsZXQgdmlzaW9uID0ge31cbiAgICB2aXNpb25bdmlzaW9uSURdID0gXCJcIlxuICAgIGNvbnN0IHZpc2lvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnZpc2lvbnMsIHZpc2lvbilcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2lvbnNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUmVtb3ZlR3JhdGl0dWRlID0ga2V5ID0+IHtcbiAgICBpZiAoa2V5ICE9PSBcImdyYXRpdHVkZS0wXCIpIHtcbiAgICAgIGNvbnN0IHsgZ3JhdGl0dWRlcyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgZGVsZXRlIGdyYXRpdHVkZXNba2V5XVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGdyYXRpdHVkZXNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVtb3ZlVmlzaW9uID0ga2V5ID0+IHtcbiAgICBpZiAoa2V5ICE9PSBcInZpc2lvbi0wXCIpIHtcbiAgICAgIGNvbnN0IHsgdmlzaW9ucyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgZGVsZXRlIHZpc2lvbnNba2V5XVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2lvbnNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2F2ZUdyYXRpdHVkZSA9IGUgPT4ge1xuICAgIGNvbnN0IHsgZ3JhdGl0dWRlcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCBncmF0aXR1ZGVUZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICBncmF0aXR1ZGVzW2lkXSA9IGdyYXRpdHVkZVRleHRcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGdyYXRpdHVkZXNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU2F2ZVZpc2lvbiA9IGUgPT4ge1xuICAgIGNvbnN0IHsgdmlzaW9ucyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCB2aXNpb25UZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICB2aXNpb25zW2lkXSA9IHZpc2lvblRleHRcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2lvbnNcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ3JlYXRlUERGID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpbWVzdHJpbmcsXG4gICAgICBncmF0aXR1ZGVzLFxuICAgICAgdmlzaW9uc1xuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBjb250ZW50ID0gcGRmQ29udGVudCh0aW1lc3RyaW5nKVxuICAgIC8vIGNvbnN0IGRvY0RlZmluaXRpb24gPSBwZGZEb2NEZWZpbml0aW9uXG5cbiAgICBwZGZNYWtlLnZmcyA9IHBkZkZvbnRzXG4gICAgcGRmTWFrZS5mb250cyA9IHBkZkZvbnRDb25maWdcblxuICAgIGlmIChPYmplY3Qua2V5cyhncmF0aXR1ZGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICBPYmplY3Qua2V5cyhncmF0aXR1ZGVzKS5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGdyYXRpdHVkZSA9IHtcbiAgICAgICAgICB0ZXh0OiBncmF0aXR1ZGVzW2tleV0sXG4gICAgICAgICAgc3R5bGU6IFsnc2VjdGlvbjUnXVxuICAgICAgICB9XG4gICAgICAgIC8vIGp1c3Qgc3RhcnQgYXQgaW5kZXggNSBhcyB0aGVyZSBhcmUgc2V2ZXJhbCBoZWFkaW5ncyAoY3VycmVudGx5IDQpIGluc2VydGVkIGZpcnN0XG4gICAgICAgIGNvbnRlbnQuc3BsaWNlKGluZGV4ICsgNCwgMCwgZ3JhdGl0dWRlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXModmlzaW9ucykubGVuZ3RoID4gMCkge1xuICAgICAgT2JqZWN0LmtleXModmlzaW9ucykubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCB2aXNpb24gPSB7XG4gICAgICAgICAgdGV4dDogdmlzaW9uc1trZXldLFxuICAgICAgICAgIHN0eWxlOiBbJ3NlY3Rpb241J11cbiAgICAgICAgfVxuICAgICAgICAvLyB2aXNpb25zIGFyZSBjdXJyZW50bHkgYXQgdGhlIGVuZCwgc28gd2UgY2FuIGp1c3QgcHVzaFxuICAgICAgICBjb250ZW50LnB1c2godmlzaW9uKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBwZGZNYWtlLmNyZWF0ZVBkZihkb2NEZWZpbml0aW9uKGNvbnRlbnQpKS5vcGVuKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aW1lc3RyaW5nLFxuICAgICAgcXVvdGVzLFxuICAgICAgZ3JhdGl0dWRlcyxcbiAgICAgIHZpc2lvbnMsXG4gICAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCByZW5kZXJHcmF0aXR1ZGVzID0gT2JqZWN0LmtleXMoZ3JhdGl0dWRlcykubWFwKChrZXksIGluZGV4KSA9PiA8VGV4dFxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIGlkPXtrZXl9XG4gICAgICB0ZXh0PXtncmF0aXR1ZGVzW2tleV19XG4gICAgICBoYW5kbGVSZW1vdmVUZXh0PXsoKSA9PiB0aGlzLmhhbmRsZVJlbW92ZUdyYXRpdHVkZShrZXkpfVxuICAgICAgaGFuZGxlU2F2ZVRleHQ9e3RoaXMuaGFuZGxlU2F2ZUdyYXRpdHVkZX1cbiAgICAgIHJvd3M9XCI0XCJcbiAgICAgIGxhYmVsPVwiR3JhdGl0dWRlXCJcbiAgICAvPilcblxuICAgIGNvbnN0IHJlbmRlclZpc2lvbnMgPSBPYmplY3Qua2V5cyh2aXNpb25zKS5tYXAoKGtleSwgaW5kZXgpID0+IDxUZXh0XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaWQ9e2tleX1cbiAgICAgIHRleHQ9e3Zpc2lvbnNba2V5XX1cbiAgICAgIGhhbmRsZVJlbW92ZVRleHQ9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlVmlzaW9uKGtleSl9XG4gICAgICBoYW5kbGVTYXZlVGV4dD17dGhpcy5oYW5kbGVTYXZlVmlzaW9ufVxuICAgICAgcm93cz1cIjRcIlxuICAgICAgbGFiZWw9XCJWaXNpb25cIlxuICAgIC8+KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8QnJhbmQgLz5cbiAgICAgICAgPENsb2NrIHRpbWVzdHJpbmc9e3RpbWVzdHJpbmd9IC8+XG4gICAgICAgIDxRdW90ZXMgcXVvdGVzPXtxdW90ZXN9IC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyYXRpdHVkZXNcIj5cbiAgICAgICAgICB7cmVuZGVyR3JhdGl0dWRlc31cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkR3JhdGl0dWRlfSBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPis8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aXNpb25zXCI+XG4gICAgICAgICAge3JlbmRlclZpc2lvbnN9XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFZpc2lvbn0gY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj4rPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3RlciBoYW5kbGVDcmVhdGVQREY9eygpID0+IHRoaXMuaGFuZGxlQ3JlYXRlUERGKCl9IC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFppbGxhU2xhYjtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1ppbGxhU2xhYi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvZHlTdGFyTGlnaHQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9Db2R5U3Rhci1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1JpZ2h0ZW91cy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNuaXBwZXQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9TbmlwcGV0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICNiMGVkYzU7XG4gICAgICB9XG4gICAgICAuYWJzQ2VudGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cbiAgICAgIC5pbmxpbmUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgIH1cbiAgICAgIC5ncmF0aXR1ZGVzIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgfVxuICAgICAgLnZpc2lvbnMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGIgPSBhd2FpdCBsb2FkREIoKVxuICBsZXQgcXVvdGVzID0gW11cbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGRiLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3F1b3RlcycpLmdldCgpXG4gIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgIHF1b3Rlcy5wdXNoKGRvYy5kYXRhKCkpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBxdW90ZXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
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
//# sourceMappingURL=index.js.ea523ed2d9c0c7389d95.hot-update.js.map