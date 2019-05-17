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
        className: "jsx-2096283650" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2096283650" + " " + "quotes-wrapper quote-width absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handlePreviousQuote,
        className: "jsx-2096283650" + " " + "quote-icon quote-icon-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "<"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2096283650" + " " + "quotes-container quote-width absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2096283650" + " " + "quote-text ".concat(visibleQuote),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, quote.text, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2096283650" + " " + "quote-author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "- ", quote.author))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handleNextQuote,
        className: "jsx-2096283650" + " " + "quote-icon quote-icon-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, ">")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2096283650",
        __self: this
      }, ".quote-width.jsx-2096283650{width:22rem;}.quotes.jsx-2096283650{background:lightblue;height:13rem;position:relative;}.quotes-container.jsx-2096283650{color:white;font-family:Righteous,Sans-Serif,Arial;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.2rem;}.quote-text.jsx-2096283650{border-left:5px solid white;padding-left:1rem;opacity:0;-webkit-transition:all .5s ease;transition:all .5s ease;}.quote-author.jsx-2096283650{text-align:right;max-width:26rem;font-family:Snippet,Sans-Serif,Arial;}.visible-quote.jsx-2096283650{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease;}.quote-icon.jsx-2096283650{color:white;position:absolute;font-size:1.2rem;}.quote-icon-left.jsx-2096283650{left:-5rem;}.quote-icon-right.jsx-2096283650{right:-5rem;}@media only screen and (max-device-width:600px){.quotes-container.jsx-2096283650{font-size:1rem;}.quote-width.jsx-2096283650{width:14rem;}}@media only screen and (max-device-width:400px){.quotes-container.jsx-2096283650{font-size:.9rem;}.quote-width.jsx-2096283650{width:12rem;}.quote-icon-left.jsx-2096283650{left:-3rem;}.quote-icon-right.jsx-2096283650{right:-3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL2luZGV4L1F1b3Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRm9CLEFBR3lCLEFBR1MsQUFLVCxBQU1nQixBQU1YLEFBS1AsQUFJRSxBQUtELEFBR0MsQUFJSyxBQUdILEFBS0ksQUFHSixBQUdELEFBR0MsVUFoQ1UsQ0FTMUIsQUFxQkUsQ0F2REYsQUFRMkMsQUFxQnZCLEFBUXBCLEFBT0UsQUFRQSxBQU1BLEdBakJBLENBUUEsQ0E3QmdCLElBakJILE9BV0ssRUFnQkQsR0FUc0IsQ0FqQnJCLFlBV1IsQ0FnQlosSUF0QnFCLENBSnJCLElBVzBCLFVBVTFCLElBSkEsMENBTEEsZ0NBUG1CLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9HcmF0aXR1ZGUvY29tcG9uZW50cy9pbmRleC9RdW90ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIERlc2t0b3BRdW90ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IGlkeFN0YXJ0ID0gMFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbmRleDogaWR4U3RhcnQsXG4gICAgICBuZXh0OiB0aGlzLmdldE5leHRJbmRleChpZHhTdGFydCksXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZ2V0TmV4dEluZGV4KGlkeCkge1xuICAgIGlmIChpZHggPj0gdGhpcy5wcm9wcy5xdW90ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgcmV0dXJuIGlkeCArIDFcbiAgfVxuXG4gIGdldFByZXZpb3VzSW5kZXgoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnF1b3Rlcy5sZW5ndGggLSAxXG4gICAgfVxuICAgIHJldHVybiBpZHggLSAxXG4gIH1cblxuICBzZXROZXh0SW5kZXhlcyhpZHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluZGV4OiBpZHgsXG4gICAgICBuZXh0OiB0aGlzLmdldE5leHRJbmRleChpZHgpLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzZXRQcmV2aW91c0luZGV4ZXMoaWR4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmRleDogaWR4LFxuICAgICAgbmV4dDogdGhpcy5nZXRQcmV2aW91c0luZGV4KGlkeCksXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZU5leHRRdW90ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0TmV4dEluZGV4ZXModGhpcy5nZXROZXh0SW5kZXgodGhpcy5zdGF0ZS5pbmRleCkpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIGhhbmRsZVByZXZpb3VzUXVvdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFByZXZpb3VzSW5kZXhlcyh0aGlzLmdldFByZXZpb3VzSW5kZXgodGhpcy5zdGF0ZS5pbmRleCkpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB2aXNpYmxlUXVvdGUgPSB0aGlzLnN0YXRlLnZpc2libGUgPyAndmlzaWJsZS1xdW90ZScgOiAnJztcbiAgICBjb25zdCBxdW90ZSA9IHRoaXMucHJvcHMucXVvdGVzW3RoaXMuc3RhdGUuaW5kZXhdXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInF1b3Rlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3Rlcy13cmFwcGVyIHF1b3RlLXdpZHRoIGFic0NlbnRlclwiPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVQcmV2aW91c1F1b3RlfSBjbGFzc05hbWU9XCJxdW90ZS1pY29uIHF1b3RlLWljb24tbGVmdFwiPlxuICAgICAgICAgICAgJmx0O1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVzLWNvbnRhaW5lciBxdW90ZS13aWR0aCBhYnNDZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcXVvdGUtdGV4dCAke3Zpc2libGVRdW90ZX1gfT5cbiAgICAgICAgICAgICAge3F1b3RlLnRleHR9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtYXV0aG9yXCI+XG4gICAgICAgICAgICAgICAgLSB7cXVvdGUuYXV0aG9yfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0UXVvdGV9IGNsYXNzTmFtZT1cInF1b3RlLWljb24gcXVvdGUtaWNvbi1yaWdodFwiPlxuICAgICAgICAgICAgJmd0O1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5xdW90ZS13aWR0aCB7XG4gICAgICAgICAgICB3aWR0aDogMjJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxM3JlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3Rlcy1jb250YWluZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cywgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZS10ZXh0IHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGUtYXV0aG9yIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNnJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTbmlwcGV0LCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZpc2libGUtcXVvdGUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZS1pY29uLWxlZnQge1xuICAgICAgICAgICAgbGVmdDogLTVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZS1pY29uLXJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAtNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIC5xdW90ZXMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnF1b3RlLXdpZHRoIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0MDBweCkge1xuICAgICAgICAgICAgLnF1b3Rlcy1jb250YWluZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnF1b3RlLXdpZHRoIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnF1b3RlLWljb24tbGVmdCB7XG4gICAgICAgICAgICAgIGxlZnQ6IC0zcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnF1b3RlLWljb24tcmlnaHQge1xuICAgICAgICAgICAgICByaWdodDogLTNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BRdW90ZXMiXX0= */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/index/Quotes.js */"));
    }
  }]);

  return DesktopQuotes;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DesktopQuotes);

/***/ })

})
//# sourceMappingURL=index.js.1345aaac03bb8331e5dc.hot-update.js.map