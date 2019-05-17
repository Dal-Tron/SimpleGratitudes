webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/index/Quotes.js":
/*!************************************!*\
  !*** ./components/index/Quotes.js ***!
  \************************************/
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







var _jsxFileName = "/Users/dallas/Documents/Gratitude/components/index/Quotes.js";



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
        className: "jsx-339939142" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-339939142" + " " + "quotes-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handlePreviousQuote,
        className: "jsx-339939142" + " " + "quote-icon inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "<"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-339939142" + " " + "quotes-container inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-339939142" + " " + "quote-text ".concat(visibleQuote),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, quote.text, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-339939142" + " " + "quote-author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "- ", quote.author))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handleNextQuote,
        className: "jsx-339939142" + " " + "quote-icon inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, ">")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "339939142",
        __self: this
      }, ".quotes.jsx-339939142{background:lightblue;}.quotes-wrapper.jsx-339939142{height:12rem;}.quotes-container.jsx-339939142{position:relative;color:white;font-family:Righteous,Sans-Serif,Arial;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.2rem;}.quote-text.jsx-339939142{border-left:5px solid white;max-width:22rem;padding-left:1rem;opacity:0;-webkit-transition:all .5s ease;transition:all .5s ease;}.quote-author.jsx-339939142{text-align:right;max-width:26rem;font-family:Snippet,Sans-Serif,Arial;}.visible-quote.jsx-339939142{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease;}.quote-icon.jsx-339939142{color:white;padding:1rem;line-height:6rem;position:relative;}@media only screen and (max-device-width:600px){.quotes-container.jsx-339939142{font-size:1rem;}}@media only screen and (max-device-width:400px){.quotes-container.jsx-339939142{font-size:.9rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL2luZGV4L1F1b3Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRm9CLEFBR2tDLEFBR1IsQUFHSyxBQU9VLEFBT1gsQUFLUCxBQUlFLEFBT0ssQUFLQyxVQWZNLEVBSVgsQ0ExQmYsRUFpQ0UsQ0FLQSxDQXJCZ0IsQ0FkSixHQU5kLElBOEJtQixHQWpCRCxFQU55QixHQWNGLFNBVXJCLEVBakJBLGdCQWtCcEIsRUFqQlksSUFXWixHQWxCcUIsQ0FjckIsRUFOMEIsd0RBQzFCLGtDQVJtQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL2NvbXBvbmVudHMvaW5kZXgvUXVvdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBEZXNrdG9wUXVvdGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCBpZHhTdGFydCA9IDBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5kZXg6IGlkeFN0YXJ0LFxuICAgICAgbmV4dDogdGhpcy5nZXROZXh0SW5kZXgoaWR4U3RhcnQpLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGdldE5leHRJbmRleChpZHgpIHtcbiAgICBpZiAoaWR4ID49IHRoaXMucHJvcHMucXVvdGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiBpZHggKyAxXG4gIH1cblxuICBnZXRQcmV2aW91c0luZGV4KGlkeCkge1xuICAgIGlmIChpZHggPCAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5xdW90ZXMubGVuZ3RoIC0gMVxuICAgIH1cbiAgICByZXR1cm4gaWR4IC0gMVxuICB9XG5cbiAgc2V0TmV4dEluZGV4ZXMoaWR4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmRleDogaWR4LFxuICAgICAgbmV4dDogdGhpcy5nZXROZXh0SW5kZXgoaWR4KSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc2V0UHJldmlvdXNJbmRleGVzKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5kZXg6IGlkeCxcbiAgICAgIG5leHQ6IHRoaXMuZ2V0UHJldmlvdXNJbmRleChpZHgpLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVOZXh0UXVvdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldE5leHRJbmRleGVzKHRoaXMuZ2V0TmV4dEluZGV4KHRoaXMuc3RhdGUuaW5kZXgpKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBoYW5kbGVQcmV2aW91c1F1b3RlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRQcmV2aW91c0luZGV4ZXModGhpcy5nZXRQcmV2aW91c0luZGV4KHRoaXMuc3RhdGUuaW5kZXgpKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdmlzaWJsZVF1b3RlID0gdGhpcy5zdGF0ZS52aXNpYmxlID8gJ3Zpc2libGUtcXVvdGUnIDogJyc7XG4gICAgY29uc3QgcXVvdGUgPSB0aGlzLnByb3BzLnF1b3Rlc1t0aGlzLnN0YXRlLmluZGV4XVxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJxdW90ZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZXMtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVQcmV2aW91c1F1b3RlfSBjbGFzc05hbWU9XCJxdW90ZS1pY29uIGlubGluZVwiPlxuICAgICAgICAgICAgJmx0O1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVzLWNvbnRhaW5lciBpbmxpbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcXVvdGUtdGV4dCAke3Zpc2libGVRdW90ZX1gfT5cbiAgICAgICAgICAgICAge3F1b3RlLnRleHR9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtYXV0aG9yXCI+XG4gICAgICAgICAgICAgICAgLSB7cXVvdGUuYXV0aG9yfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0UXVvdGV9IGNsYXNzTmFtZT1cInF1b3RlLWljb24gaW5saW5lXCI+XG4gICAgICAgICAgICAmZ3Q7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnF1b3RlcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZXMtd3JhcHBlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUmlnaHRlb3VzLCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLXRleHQge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjJyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGUtYXV0aG9yIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNnJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTbmlwcGV0LCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZpc2libGUtcXVvdGUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgLnF1b3Rlcy1jb250YWluZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQwMHB4KSB7XG4gICAgICAgICAgICAucXVvdGVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BRdW90ZXMiXX0= */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/index/Quotes.js */"));
    }
  }]);

  return DesktopQuotes;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DesktopQuotes);

/***/ })

})
//# sourceMappingURL=index.js.75ada20095d04ff15400.hot-update.js.map