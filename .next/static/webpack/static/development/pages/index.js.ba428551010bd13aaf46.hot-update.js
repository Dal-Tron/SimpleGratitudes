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
        className: "jsx-2794781953" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2794781953" + " " + "quotes-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handlePreviousQuote,
        className: "jsx-2794781953" + " " + "quote-icon inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "<"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2794781953" + " " + "quotes-container inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2794781953" + " " + "quote-text ".concat(visibleQuote),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, quote.text, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2794781953" + " " + "quote-author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "- ", quote.author))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handleNextQuote,
        className: "jsx-2794781953" + " " + "quote-icon inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, ">")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2794781953",
        __self: this
      }, ".quotes.jsx-2794781953{background:lightblue;}.quotes-wrapper.jsx-2794781953{height:15rem;margin-left:auto;margin-right:auto;position:relative;}.quotes-container.jsx-2794781953{position:relative;color:white;font-family:Righteous,Sans-Serif,Arial;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.2rem;max-width:22rem;}.quote-text.jsx-2794781953{border-left:5px solid white;padding-left:1rem;opacity:0;-webkit-transition:all .5s ease;transition:all .5s ease;}.quote-author.jsx-2794781953{text-align:right;max-width:26rem;font-family:Snippet,Sans-Serif,Arial;}.visible-quote.jsx-2794781953{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease;}.quote-icon.jsx-2794781953{color:white;padding:1rem;position:absolute;}@media only screen and (max-device-width:600px){.quotes-container.jsx-2794781953{font-size:1rem;}}@media only screen and (max-device-width:400px){.quotes-container.jsx-2794781953{font-size:.9rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL2luZGV4L1F1b3Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRm9CLEFBR2tDLEFBR1IsQUFNSyxBQVFVLEFBTVgsQUFLUCxBQUlFLEFBTUssQUFLQyxVQWRNLEVBSVgsQ0E3QkksRUFtQ2pCLENBS0EsQ0FwQmdCLENBZEosR0FUZCxJQWlDb0IsR0FoQkEsRUFiQSxBQU11QixHQWNGLFVBVXpDLEdBaEJZLEVBYlEsUUFjTSxVQWIxQixBQXVCQSxHQWxCcUIsQ0FjckIsMENBTEEsa0RBUm1CLGlCQUNELGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9HcmF0aXR1ZGUvY29tcG9uZW50cy9pbmRleC9RdW90ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIERlc2t0b3BRdW90ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IGlkeFN0YXJ0ID0gMFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbmRleDogaWR4U3RhcnQsXG4gICAgICBuZXh0OiB0aGlzLmdldE5leHRJbmRleChpZHhTdGFydCksXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZ2V0TmV4dEluZGV4KGlkeCkge1xuICAgIGlmIChpZHggPj0gdGhpcy5wcm9wcy5xdW90ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgcmV0dXJuIGlkeCArIDFcbiAgfVxuXG4gIGdldFByZXZpb3VzSW5kZXgoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnF1b3Rlcy5sZW5ndGggLSAxXG4gICAgfVxuICAgIHJldHVybiBpZHggLSAxXG4gIH1cblxuICBzZXROZXh0SW5kZXhlcyhpZHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluZGV4OiBpZHgsXG4gICAgICBuZXh0OiB0aGlzLmdldE5leHRJbmRleChpZHgpLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzZXRQcmV2aW91c0luZGV4ZXMoaWR4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmRleDogaWR4LFxuICAgICAgbmV4dDogdGhpcy5nZXRQcmV2aW91c0luZGV4KGlkeCksXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZU5leHRRdW90ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0TmV4dEluZGV4ZXModGhpcy5nZXROZXh0SW5kZXgodGhpcy5zdGF0ZS5pbmRleCkpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIGhhbmRsZVByZXZpb3VzUXVvdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFByZXZpb3VzSW5kZXhlcyh0aGlzLmdldFByZXZpb3VzSW5kZXgodGhpcy5zdGF0ZS5pbmRleCkpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB2aXNpYmxlUXVvdGUgPSB0aGlzLnN0YXRlLnZpc2libGUgPyAndmlzaWJsZS1xdW90ZScgOiAnJztcbiAgICBjb25zdCBxdW90ZSA9IHRoaXMucHJvcHMucXVvdGVzW3RoaXMuc3RhdGUuaW5kZXhdXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInF1b3Rlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3Rlcy13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZXZpb3VzUXVvdGV9IGNsYXNzTmFtZT1cInF1b3RlLWljb24gaW5saW5lXCI+XG4gICAgICAgICAgICAmbHQ7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZXMtY29udGFpbmVyIGlubGluZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BxdW90ZS10ZXh0ICR7dmlzaWJsZVF1b3RlfWB9PlxuICAgICAgICAgICAgICB7cXVvdGUudGV4dH1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZS1hdXRob3JcIj5cbiAgICAgICAgICAgICAgICAtIHtxdW90ZS5hdXRob3J9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRRdW90ZX0gY2xhc3NOYW1lPVwicXVvdGUtaWNvbiBpbmxpbmVcIj5cbiAgICAgICAgICAgICZndDtcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucXVvdGVzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3Rlcy13cmFwcGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3Rlcy1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cywgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGUtdGV4dCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLWF1dGhvciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjZyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogU25pcHBldCwgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52aXNpYmxlLXF1b3RlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZS1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAucXVvdGVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDAwcHgpIHtcbiAgICAgICAgICAgIC5xdW90ZXMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcFF1b3RlcyJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/index/Quotes.js */"));
    }
  }]);

  return DesktopQuotes;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DesktopQuotes);

/***/ })

})
//# sourceMappingURL=index.js.ba428551010bd13aaf46.hot-update.js.map