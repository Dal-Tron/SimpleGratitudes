webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/index/desktop/DesktopQuotes.js":
/*!***************************************************!*\
  !*** ./components/index/desktop/DesktopQuotes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");







var _jsxFileName = "/Users/dallas/Documents/Gratitude/components/index/desktop/DesktopQuotes.js";




var DesktopQuotes =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DesktopQuotes, _Component);

  function DesktopQuotes(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DesktopQuotes);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DesktopQuotes).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleNextQuote", function () {
      _this.setState({
        visible: false
      });

      setTimeout(function () {
        _this.setNextIndexes(_this.getNextIndex(_this.state.index));
      }, 1000);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handlePreviousQuote", function () {
      _this.setState({
        visible: false
      });

      setTimeout(function () {
        _this.setPreviousIndexes(_this.getPreviousIndex(_this.state.index));
      }, 1000);
    });

    var idxStart = 0;
    _this.state = {
      index: idxStart,
      next: _this.getNextIndex(idxStart),
      visible: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DesktopQuotes, [{
    key: "getNextIndex",
    value: function getNextIndex(idx) {
      if (idx >= this.props.quotes.length - 1) {
        return 0;
      }

      return idx + 1;
    }
  }, {
    key: "getPreviousIndex",
    value: function getPreviousIndex(idx) {
      if (idx < 1) {
        return this.props.quotes.length - 1;
      }

      return idx - 1;
    }
  }, {
    key: "setNextIndexes",
    value: function setNextIndexes(idx) {
      this.setState({
        index: idx,
        next: this.getNextIndex(idx),
        visible: true
      });
    }
  }, {
    key: "setPreviousIndexes",
    value: function setPreviousIndexes(idx) {
      this.setState({
        index: idx,
        next: this.getPreviousIndex(idx),
        visible: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var visibleQuote = this.state.visible ? 'visible-quote' : '';
      var quote = this.props.quotes[this.state.index];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "jsx-1885552418" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1885552418" + " " + "quotes-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1885552418" + " " + "quote-text absCenter ".concat(visibleQuote),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, quote.text, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1885552418" + " " + "quote-author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "- ", quote.author)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1885552418" + " " + "quote-button-container absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handleNextQuote,
        className: "jsx-1885552418" + " " + "quote-icon quote-icon-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: "chevron-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handlePreviousQuote,
        className: "jsx-1885552418" + " " + "quote-icon quote-icon-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: "chevron-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1885552418",
        __self: this
      }, ".quotes-container.jsx-1885552418{position:relative;color:white;font-family:Righteous,Sans-Serif,Arial;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.2rem;height:12rem;}.quote-text.jsx-1885552418{border-left:5px solid white;width:26rem;padding-left:1rem;opacity:0;-webkit-transition:all .5s ease;transition:all .5s ease;}.quote-author.jsx-1885552418{text-align:right;max-width:26rem;font-family:Snippet,Sans-Serif,Arial;}.visible-quote.jsx-1885552418{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease;}.quote-button-container.jsx-1885552418{width:26rem;}.quote-icon.jsx-1885552418{position:absolute;top:50%;max-width:14px;}.quote-icon-left.jsx-1885552418{left:-5rem;}.quote-icon-right.jsx-1885552418{right:-5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL2luZGV4L2Rlc2t0b3AvRGVza3RvcFF1b3Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRm9CLEFBRytCLEFBUVUsQUFPWCxBQUtQLEFBSUUsQUFHTSxBQUtQLEFBR0MsVUFkWSxDQVkxQixDQVJBLEFBV0EsS0FwQmtCLENBZkosQUEyQkosUUFDTyxFQXBCSCxFQVA2QixHQWVGLE9BUHJCLENBb0JwQixpQkFuQlksUUFXWixFQVYwQixDQVRMLENBZXJCLHNEQUxBLHNDQVRtQixpQkFDSixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL2luZGV4L2Rlc2t0b3AvRGVza3RvcFF1b3Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcblxuY2xhc3MgRGVza3RvcFF1b3RlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgaWR4U3RhcnQgPSAwXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluZGV4OiBpZHhTdGFydCxcbiAgICAgIG5leHQ6IHRoaXMuZ2V0TmV4dEluZGV4KGlkeFN0YXJ0KSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXROZXh0SW5kZXgoaWR4KSB7XG4gICAgaWYgKGlkeCA+PSB0aGlzLnByb3BzLnF1b3Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgICByZXR1cm4gaWR4ICsgMVxuICB9XG5cbiAgZ2V0UHJldmlvdXNJbmRleChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucXVvdGVzLmxlbmd0aCAtIDFcbiAgICB9XG4gICAgcmV0dXJuIGlkeCAtIDFcbiAgfVxuXG4gIHNldE5leHRJbmRleGVzKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5kZXg6IGlkeCxcbiAgICAgIG5leHQ6IHRoaXMuZ2V0TmV4dEluZGV4KGlkeCksXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHNldFByZXZpb3VzSW5kZXhlcyhpZHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluZGV4OiBpZHgsXG4gICAgICBuZXh0OiB0aGlzLmdldFByZXZpb3VzSW5kZXgoaWR4KSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlTmV4dFF1b3RlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXROZXh0SW5kZXhlcyh0aGlzLmdldE5leHRJbmRleCh0aGlzLnN0YXRlLmluZGV4KSlcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgaGFuZGxlUHJldmlvdXNRdW90ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNJbmRleGVzKHRoaXMuZ2V0UHJldmlvdXNJbmRleCh0aGlzLnN0YXRlLmluZGV4KSlcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHZpc2libGVRdW90ZSA9IHRoaXMuc3RhdGUudmlzaWJsZSA/ICd2aXNpYmxlLXF1b3RlJyA6ICcnO1xuICAgIGNvbnN0IHF1b3RlID0gdGhpcy5wcm9wcy5xdW90ZXNbdGhpcy5zdGF0ZS5pbmRleF1cbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicXVvdGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcXVvdGUtdGV4dCBhYnNDZW50ZXIgJHt2aXNpYmxlUXVvdGV9YH0+XG4gICAgICAgICAgICB7cXVvdGUudGV4dH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtYXV0aG9yXCI+XG4gICAgICAgICAgICAgIC0ge3F1b3RlLmF1dGhvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtYnV0dG9uLWNvbnRhaW5lciBhYnNDZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0UXVvdGV9IGNsYXNzTmFtZT1cInF1b3RlLWljb24gcXVvdGUtaWNvbi1yaWdodFwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJjaGV2cm9uLXJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZXZpb3VzUXVvdGV9IGNsYXNzTmFtZT1cInF1b3RlLWljb24gcXVvdGUtaWNvbi1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImNoZXZyb24tbGVmdFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucXVvdGVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUmlnaHRlb3VzLCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZS10ZXh0IHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMjZyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGUtYXV0aG9yIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNnJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTbmlwcGV0LCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZpc2libGUtcXVvdGUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDI2cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGUtaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLWljb24tbGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAtNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLWljb24tcmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IC01cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wUXVvdGVzIl19 */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/index/desktop/DesktopQuotes.js */"));
    }
  }]);

  return DesktopQuotes;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DesktopQuotes);

/***/ }),

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
/* harmony import */ var _components_index_desktop_DesktopBrand__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/index/desktop/DesktopBrand */ "./components/index/desktop/DesktopBrand.js");
/* harmony import */ var _components_index_desktop_DesktopClock__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/index/desktop/DesktopClock */ "./components/index/desktop/DesktopClock.js");
/* harmony import */ var _components_index_desktop_DesktopQuotes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/index/desktop/DesktopQuotes */ "./components/index/desktop/DesktopQuotes.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Text */ "./components/Text.js");
/* harmony import */ var _components_Quotes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Quotes */ "./components/Quotes.js");












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
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.vfs = _static_js_vfs_fonts__WEBPACK_IMPORTED_MODULE_16__["default"];
      var _this$state = _this.state,
          timestring = _this$state.timestring,
          gratitudes = _this$state.gratitudes,
          visions = _this$state.visions;
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
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
            lineNumber: 277
          },
          __self: this
        });
      });

      var renderVisions = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(visions).map(function (key, index) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
            lineNumber: 287
          },
          __self: this
        });
      });

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-2256165411" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-2256165411",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_index_desktop_DesktopBrand__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_index_desktop_DesktopClock__WEBPACK_IMPORTED_MODULE_20__["default"], {
        timestring: timestring,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_index_desktop_DesktopQuotes__WEBPACK_IMPORTED_MODULE_21__["default"], {
        quotes: quotes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: "jsx-2256165411" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: "jsx-2256165411" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, renderGratitudes, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-2256165411" + " " + "section-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: "jsx-2256165411" + " " + "visions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, renderVisions, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        onClick: this.handleAddVision,
        className: "jsx-2256165411" + " " + "section-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: "jsx-2256165411" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        onClick: this.handleCreatePDF,
        className: "jsx-2256165411" + " " + "footer-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_12___default.a, {
        id: "2256165411",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}@font-face{font-family:Righteous;src:url(\"/static/fonts/Righteous.ttf\") format(\"truetype\");}@font-face{font-family:Snippet;src:url(\"/static/fonts/Snippet.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;margin-bottom:6rem;background:#b0edc5;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.inline{display:inline-block;}.quotes{background:lightblue;}.section-header{text-align:center;padding:2rem;color:white;font-size:2.5rem;font-family:Sans-Serif,Arial;}.gratitudes{background:lightblue;}.visions{background:lightblue;}.footer{background:#59bf7c;position:fixed;bottom:0;width:100%;height:6rem;}.footer-text{text-align:center;padding:2rem;font-family:Snippet,Sans-Serif,Arial;color:white;font-size:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2VDJCLEFBRytCLEFBSUksQUFJSixBQUlGLEFBSUUsQUFJYixBQU9TLEFBTUcsQUFHQSxBQUdILEFBT0csQUFHQSxBQUdGLEFBT0QsU0F0Q1IsU0FPRixBQVlLLEFBb0JBLENBdENHLEFBK0JELENBeEN5QyxDQXFCMUQsQUFHQSxBQVVBLEFBR0EsQ0FqRDRELEFBUUEsQUFRNUQsSUFaaUUsQUF3QnRELEtBWUcsQUFvQjJCLEdBUDlCLENBL0JVLEFBT2EsUUFZZixBQWFOLFdBL0JRLEFBZ0NQLE1BYmtCLE1BY2hDLEVBS2MsS0FyQ2QsR0FYQSxJQVpBLEFBUUEsQUFxRG1CLFNBekRuQixBQXNDQSxRQW9CQSwyQ0FqQ0EiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBkZk1ha2UgZnJvbSAncGRmbWFrZS9idWlsZC9wZGZtYWtlJ1xuaW1wb3J0IHsgbG9hZERCIH0gZnJvbSAnLi4vbGliL2RiJ1xuaW1wb3J0IHBkZkZvbnRzIGZyb20gJy4uL3N0YXRpYy9qcy92ZnNfZm9udHMnXG5pbXBvcnQgeyBnZW5lcmF0ZVVuaXF1ZUlEIH0gZnJvbSAnLi4vbGliL2hlbHBlcnMnXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBEZXNrdG9wQnJhbmQgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC9kZXNrdG9wL0Rlc2t0b3BCcmFuZCdcbmltcG9ydCBEZXNrdG9wQ2xvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC9kZXNrdG9wL0Rlc2t0b3BDbG9jaydcbmltcG9ydCBEZXNrdG9wUXVvdGVzIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgvZGVza3RvcC9EZXNrdG9wUXVvdGVzJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0J1xuaW1wb3J0IFF1b3RlcyBmcm9tICcuLi9jb21wb25lbnRzL1F1b3Rlcyc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGltZXN0cmluZzogJycsXG4gICAgcXVvdGVzOiBbXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIkdyYXRpdHVkZSBpcyBhIHBvd2VyZnVsIGNhdGFseXN0IGZvciBoYXBwaW5lc3MuIEl0J3MgdGhlIHNwYXJrIHRoYXQgbGlnaHRzIGEgZmlyZSBvZiBqb3kgaW4geW91ciBzb3VsLlwiLFxuICAgICAgICBcImF1dGhvclwiOiBcIkFteSBDb2xsZXR0ZVwiXG4gICAgICB9LFxuICAgIF0sXG4gICAgZ3JhdGl0dWRlczoge1xuICAgICAgXCJncmF0aXR1ZGUtMFwiOiBcIlwiXG4gICAgfSxcbiAgICB2aXNpb25zOiB7XG4gICAgICBcInZpc2lvbi0wXCI6IFwiXCJcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKVxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmhhbmRsZUNyZWF0ZVRpbWVTdHJpbmcoKSwgMTAwMClcbiAgICB0aGlzLnByb3BzLnF1b3RlcyAmJiB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1b3RlczogWy4uLnRoaXMuc3RhdGUucXVvdGVzLCAuLi50aGlzLnByb3BzLnF1b3Rlc11cbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICAgIFwiU3VuZGF5XCIsXG4gICAgICBcIk1vbmRheVwiLFxuICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgXCJGcmlkYXlcIixcbiAgICAgIFwiU2F0dXJkYXlcIlxuICAgIF07XG5cbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICBcIkphbnVhcnlcIixcbiAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgIFwiTWFyY2hcIixcbiAgICAgIFwiQXByaWxcIixcbiAgICAgIFwiTWF5XCIsXG4gICAgICBcIkp1bmVcIixcbiAgICAgIFwiSnVseVwiLFxuICAgICAgXCJBdWd1c3RcIixcbiAgICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgICBcIk9jdG9iZXJcIixcbiAgICAgIFwiTm92ZW1iZXJcIixcbiAgICAgIFwiRGVjZW1iZXJcIlxuICAgIF07XG5cbiAgICBjb25zdCB3ZWVrZGF5ID0gd2Vla2RheXNbZGF0ZS5nZXREYXkoKV07XG4gICAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgICBjb25zdCBpbnREYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUudG9UaW1lU3RyaW5nKClcbiAgICBjb25zdCBIID0gdGltZXN0YW1wLnN1YnN0cigwLCAyKVxuICAgIGNvbnN0IGggPSBIICUgMTIgfHwgMTJcbiAgICBjb25zdCBhbXBtID0gKEggPCAxMiB8fCBIID09PSAyNCkgPyBcIiBBTVwiIDogXCIgUE1cIlxuICAgIGNvbnN0IHRpbWUgPSBoICsgdGltZXN0YW1wLnN1YnN0cigyLCAzKSArIGFtcG1cbiAgICBjb25zdCB0aW1lc3RyaW5nID0gYCR7d2Vla2RheX0sICR7bW9udGh9ICR7aW50RGF5fSwgJHt5ZWFyfSwgJHt0aW1lfWA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdGltZXN0cmluZyB9KVxuICB9XG5cbiAgaGFuZGxlQWRkR3JhdGl0dWRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyYXRpdHVkZUlEID0gYGdyYXRpdHVkZS0ke2dlbmVyYXRlVW5pcXVlSUQoKX1gXG4gICAgbGV0IGdyYXRpdHVkZSA9IHt9XG4gICAgZ3JhdGl0dWRlW2dyYXRpdHVkZUlEXSA9IFwiXCJcbiAgICBjb25zdCBncmF0aXR1ZGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5ncmF0aXR1ZGVzLCBncmF0aXR1ZGUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBncmF0aXR1ZGVzXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFkZFZpc2lvbiA9ICgpID0+IHtcbiAgICBjb25zdCB2aXNpb25JRCA9IGB2aXNpb24tJHtnZW5lcmF0ZVVuaXF1ZUlEKCl9YFxuICAgIGxldCB2aXNpb24gPSB7fVxuICAgIHZpc2lvblt2aXNpb25JRF0gPSBcIlwiXG4gICAgY29uc3QgdmlzaW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUudmlzaW9ucywgdmlzaW9uKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaW9uc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVSZW1vdmVHcmF0aXR1ZGUgPSBrZXkgPT4ge1xuICAgIGlmIChrZXkgIT09IFwiZ3JhdGl0dWRlLTBcIikge1xuICAgICAgY29uc3QgeyBncmF0aXR1ZGVzIH0gPSB0aGlzLnN0YXRlXG4gICAgICBkZWxldGUgZ3JhdGl0dWRlc1trZXldXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZ3JhdGl0dWRlc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZW1vdmVWaXNpb24gPSBrZXkgPT4ge1xuICAgIGlmIChrZXkgIT09IFwidmlzaW9uLTBcIikge1xuICAgICAgY29uc3QgeyB2aXNpb25zIH0gPSB0aGlzLnN0YXRlXG4gICAgICBkZWxldGUgdmlzaW9uc1trZXldXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaW9uc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTYXZlR3JhdGl0dWRlID0gZSA9PiB7XG4gICAgY29uc3QgeyBncmF0aXR1ZGVzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZFxuICAgIGNvbnN0IGdyYXRpdHVkZVRleHQgPSBlLnRhcmdldC52YWx1ZVxuICAgIGdyYXRpdHVkZXNbaWRdID0gZ3JhdGl0dWRlVGV4dFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZ3JhdGl0dWRlc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTYXZlVmlzaW9uID0gZSA9PiB7XG4gICAgY29uc3QgeyB2aXNpb25zIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZFxuICAgIGNvbnN0IHZpc2lvblRleHQgPSBlLnRhcmdldC52YWx1ZVxuICAgIHZpc2lvbnNbaWRdID0gdmlzaW9uVGV4dFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaW9uc1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVDcmVhdGVQREYgPSAoKSA9PiB7XG4gICAgcGRmTWFrZS52ZnMgPSBwZGZGb250c1xuICAgIGNvbnN0IHtcbiAgICAgIHRpbWVzdHJpbmcsXG4gICAgICBncmF0aXR1ZGVzLFxuICAgICAgdmlzaW9uc1xuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBwZGZNYWtlLmZvbnRzID0ge1xuICAgICAgJ1JpZ2h0ZW91cyc6IHtcbiAgICAgICAgbm9ybWFsOiAnUmlnaHRlb3VzLnR0ZicsXG4gICAgICAgIGJvbGQ6ICdSaWdodGVvdXMudHRmJyxcbiAgICAgICAgaXRhbGljczogJ1JpZ2h0ZW91cy50dGYnLFxuICAgICAgICBib2xkaXRhbGljczogJ1JpZ2h0ZW91cy50dGYnLFxuICAgICAgfSxcbiAgICAgICdTbmlwcGV0Jzoge1xuICAgICAgICBub3JtYWw6ICdTbmlwcGV0LnR0ZicsXG4gICAgICAgIGJvbGQ6ICdTbmlwcGV0LnR0ZicsXG4gICAgICAgIGl0YWxpY3M6ICdTbmlwcGV0LnR0ZicsXG4gICAgICAgIGJvbGRpdGFsaWNzOiAnU25pcHBldC50dGYnLFxuICAgICAgfSxcbiAgICAgICdDb2R5U3Rhci1MaWdodCc6IHtcbiAgICAgICAgbm9ybWFsOiAnQ29keVN0YXItTGlnaHQudHRmJyxcbiAgICAgICAgYm9sZDogJ0NvZHlTdGFyLUxpZ2h0LnR0ZicsXG4gICAgICAgIGl0YWxpY3M6ICdDb2R5U3Rhci1MaWdodC50dGYnLFxuICAgICAgICBib2xkaXRhbGljczogJ0NvZHlTdGFyLUxpZ2h0LnR0ZicsXG4gICAgICB9LFxuICAgICAgJ09wZW5TYW5zLVJlZ3VsYXInOiB7XG4gICAgICAgIG5vcm1hbDogJ09wZW5TYW5zLVJlZ3VsYXIudHRmJyxcbiAgICAgICAgYm9sZDogJ09wZW5TYW5zLVJlZ3VsYXIudHRmJyxcbiAgICAgICAgaXRhbGljczogJ09wZW5TYW5zLVJlZ3VsYXIudHRmJyxcbiAgICAgICAgYm9sZGl0YWxpY3M6ICdPcGVuU2Fucy1SZWd1bGFyLnR0ZicsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnR3JhdGVmdWwnLFxuICAgICAgICBzdHlsZTogWydoZWFkZXInLCAnc2VjdGlvbjEnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdWaXNpb24nLFxuICAgICAgICBzdHlsZTogWydoZWFkZXInLCAnc2VjdGlvbjInXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IGAke3RpbWVzdHJpbmd9YCxcbiAgICAgICAgc3R5bGU6IFsnaGVhZGVyJywgJ3NlY3Rpb24zJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnR3JhdGl0dWRlJyxcbiAgICAgICAgc3R5bGU6IFsnaGVhZGVyJywgJ3NlY3Rpb240J11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdWaXNpb24nLFxuICAgICAgICBzdHlsZTogWydoZWFkZXInLCAnc2VjdGlvbjQnXSxcbiAgICAgIH1cbiAgICBdXG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZ3JhdGl0dWRlcykubGVuZ3RoID4gMCkge1xuICAgICAgT2JqZWN0LmtleXMoZ3JhdGl0dWRlcykubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBncmF0aXR1ZGUgPSB7XG4gICAgICAgICAgdGV4dDogZ3JhdGl0dWRlc1trZXldLFxuICAgICAgICAgIHN0eWxlOiBbJ3NlY3Rpb241J11cbiAgICAgICAgfVxuICAgICAgICAvLyBqdXN0IHN0YXJ0IGF0IGluZGV4IDUgYXMgdGhlcmUgYXJlIHNldmVyYWwgaGVhZGluZ3MgKGN1cnJlbnRseSA0KSBpbnNlcnRlZCBmaXJzdFxuICAgICAgICBjb250ZW50LnNwbGljZShpbmRleCArIDQsIDAsIGdyYXRpdHVkZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKHZpc2lvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIE9iamVjdC5rZXlzKHZpc2lvbnMpLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgdmlzaW9uID0ge1xuICAgICAgICAgIHRleHQ6IHZpc2lvbnNba2V5XSxcbiAgICAgICAgICBzdHlsZTogWydzZWN0aW9uNSddXG4gICAgICAgIH1cbiAgICAgICAgLy8gdmlzaW9ucyBhcmUgY3VycmVudGx5IGF0IHRoZSBlbmQsIHNvIHdlIGNhbiBqdXN0IHB1c2hcbiAgICAgICAgY29udGVudC5wdXNoKHZpc2lvbilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZG9jRGVmaW5pdGlvbiA9IHtcbiAgICAgIGluZm86IHtcbiAgICAgICAgdGl0bGU6ICdHcmF0ZWZ1bCBWaXNpb24nLFxuICAgICAgICBhdXRob3I6ICdHcmF0ZWZ1bCBWaXNpb24nLFxuICAgICAgICBzdWJqZWN0OiAnR3JhdGVmdWwgVmlzaW9uJyxcbiAgICAgICAga2V5d29yZHM6ICdHcmF0ZWZ1bCBWaXNpb24nLFxuICAgICAgfSxcbiAgICAgIHBhZ2VNYXJnaW5zOiBbMCwgMCwgMCwgMF0sXG4gICAgICBjb250ZW50LFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICBhbGlnbm1lbnQ6ICdjZW50ZXInLFxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uMToge1xuICAgICAgICAgIGNvbG9yOiAnIzUxOTBhNScsXG4gICAgICAgICAgZm9udDogJ1JpZ2h0ZW91cycsXG4gICAgICAgICAgbWFyZ2luOiBbMCwgMjAsIDAsIDBdXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb24yOiB7XG4gICAgICAgICAgY29sb3I6ICcjNTE5MGE1JyxcbiAgICAgICAgICBmb250OiAnU25pcHBldCcsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb24zOiB7XG4gICAgICAgICAgY29sb3I6ICcjNTE5MGE1JyxcbiAgICAgICAgICBmb250OiAnQ29keVN0YXItTGlnaHQnLFxuICAgICAgICAgIG1hcmdpbjogWzAsIDIwLCAwLCAwXVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uNDoge1xuICAgICAgICAgIGNvbG9yOiAnIzUxOTBhNScsXG4gICAgICAgICAgZm9udDogJ0NvZHlTdGFyLUxpZ2h0JyxcbiAgICAgICAgICBtYXJnaW46IFswLCAyMCwgMCwgMF1cbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbjU6IHtcbiAgICAgICAgICBjb2xvcjogJyM1MTkwYTUnLFxuICAgICAgICAgIGZvbnQ6ICdPcGVuU2Fucy1SZWd1bGFyJyxcbiAgICAgICAgICBtYXJnaW46IFsxODAsIDIwLCAxODAsIDBdLFxuICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICBhbGlnbm1lbnQ6ICdjZW50ZXInXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwZGZNYWtlLmNyZWF0ZVBkZihkb2NEZWZpbml0aW9uKS5vcGVuKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aW1lc3RyaW5nLFxuICAgICAgcXVvdGVzLFxuICAgICAgZ3JhdGl0dWRlcyxcbiAgICAgIHZpc2lvbnMsXG4gICAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCByZW5kZXJHcmF0aXR1ZGVzID0gT2JqZWN0LmtleXMoZ3JhdGl0dWRlcykubWFwKChrZXksIGluZGV4KSA9PiA8VGV4dFxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIGlkPXtrZXl9XG4gICAgICB0ZXh0PXtncmF0aXR1ZGVzW2tleV19XG4gICAgICBoYW5kbGVSZW1vdmVUZXh0PXsoKSA9PiB0aGlzLmhhbmRsZVJlbW92ZUdyYXRpdHVkZShrZXkpfVxuICAgICAgaGFuZGxlU2F2ZVRleHQ9e3RoaXMuaGFuZGxlU2F2ZUdyYXRpdHVkZX1cbiAgICAgIHJvd3M9XCI0XCJcbiAgICAgIGxhYmVsPVwiR3JhdGl0dWRlXCJcbiAgICAvPilcblxuICAgIGNvbnN0IHJlbmRlclZpc2lvbnMgPSBPYmplY3Qua2V5cyh2aXNpb25zKS5tYXAoKGtleSwgaW5kZXgpID0+IDxUZXh0XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaWQ9e2tleX1cbiAgICAgIHRleHQ9e3Zpc2lvbnNba2V5XX1cbiAgICAgIGhhbmRsZVJlbW92ZVRleHQ9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlVmlzaW9uKGtleSl9XG4gICAgICBoYW5kbGVTYXZlVGV4dD17dGhpcy5oYW5kbGVTYXZlVmlzaW9ufVxuICAgICAgcm93cz1cIjRcIlxuICAgICAgbGFiZWw9XCJWaXNpb25cIlxuICAgIC8+KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8RGVza3RvcEJyYW5kIC8+XG4gICAgICAgIDxEZXNrdG9wQ2xvY2sgdGltZXN0cmluZz17dGltZXN0cmluZ30gLz5cbiAgICAgICAgPERlc2t0b3BRdW90ZXMgcXVvdGVzPXtxdW90ZXN9IC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmF0aXR1ZGVzXCI+XG4gICAgICAgICAge3JlbmRlckdyYXRpdHVkZXN9XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZEdyYXRpdHVkZX0gY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj4rPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlzaW9uc1wiPlxuICAgICAgICAgIHtyZW5kZXJWaXNpb25zfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVBZGRWaXNpb259IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+KzwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNyZWF0ZVBERn0+RG93bmxvYWQ8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBaaWxsYVNsYWI7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9aaWxsYVNsYWIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb2R5U3RhckxpZ2h0O1xuICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvQ29keVN0YXItTGlnaHQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSaWdodGVvdXM7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9SaWdodGVvdXMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTbmlwcGV0O1xuICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvU25pcHBldC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjBlZGM1O1xuICAgICAgfVxuICAgICAgLmFic0NlbnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG4gICAgICAuaW5saW5lIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgLnF1b3RlcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgfVxuICAgICAgLmdyYXRpdHVkZXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICB9XG4gICAgICAudmlzaW9ucyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICAgIC5mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNTliZjdjO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgIH1cbiAgICAgIC5mb290ZXItdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNuaXBwZXQsIFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRiID0gYXdhaXQgbG9hZERCKClcbiAgbGV0IHF1b3RlcyA9IFtdXG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBkYi5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdxdW90ZXMnKS5nZXQoKVxuICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcbiAgICBxdW90ZXMucHVzaChkb2MuZGF0YSgpKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcXVvdGVzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
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
//# sourceMappingURL=index.js.d8cad928673f4158d147.hot-update.js.map