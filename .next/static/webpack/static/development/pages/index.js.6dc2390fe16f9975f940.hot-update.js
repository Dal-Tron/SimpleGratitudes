webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Quotes.js":
/*!******************************!*\
  !*** ./components/Quotes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/dallas/Documents/Gratitude/components/Quotes.js";



var Quotes =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Quotes, _Component);

  function Quotes(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Quotes);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Quotes).call(this, props));
    var idxStart = 0;
    _this.state = {
      index: idxStart,
      next: _this.getNextIndex(idxStart),
      move: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Quotes, [{
    key: "getNextIndex",
    value: function getNextIndex(idx) {
      if (idx >= this.props.quotes.length - 1) {
        return 0;
      }

      return idx + 1;
    }
  }, {
    key: "setIndexes",
    value: function setIndexes(idx) {
      this.setState({
        index: idx,
        next: this.getNextIndex(idx)
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.setState({
          move: true
        });

        setTimeout(function () {
          _this2.setState({
            move: false
          });

          _this2.setIndexes(_this2.getNextIndex(_this2.state.index));
        }, 500);
      }, 5000);
    }
  }, {
    key: "render",
    value: function render() {
      var move = this.state.move ? 'move' : '';
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-450475994" + " " + "quotes-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-450475994" + " " + "quote-text absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "This is the text for the quote. And it is very long. And it goes on for a few lines."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-450475994" + " " + "quote-author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "- Author 1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "450475994",
        __self: this
      }, ".quotes-container.jsx-450475994{position:relative;color:white;font-family:Righteous,Sans-Serif,Arial;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.5rem;}.quote-text.jsx-450475994{padding-top:3rem;border-left:5px solid lightgrey;max-width:26rem;padding:1rem 1rem 0rem 1rem;}.quote-author.jsx-450475994{text-align:right;max-width:26rem;margin-left:auto;margin-right:auto;font-family:Snippet,Sans-Serif,Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL1F1b3Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRG9CLEFBRytCLEFBT0QsQUFNQSxpQkFMZSxBQU1oQixDQWJKLFlBQzZCLEdBYXhCLGdCQU5ELENBT0UsZUFOVSxHQU9XLENBZHBCLHdCQVFyQixZQU9BLHlEQWRtQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL2NvbXBvbmVudHMvUXVvdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBRdW90ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IGlkeFN0YXJ0ID0gMFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbmRleDogaWR4U3RhcnQsXG4gICAgICBuZXh0OiB0aGlzLmdldE5leHRJbmRleChpZHhTdGFydCksXG4gICAgICBtb3ZlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGdldE5leHRJbmRleChpZHgpIHtcbiAgICBpZiAoaWR4ID49IHRoaXMucHJvcHMucXVvdGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiBpZHggKyAxXG4gIH1cblxuICBzZXRJbmRleGVzKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5kZXg6IGlkeCxcbiAgICAgIG5leHQ6IHRoaXMuZ2V0TmV4dEluZGV4KGlkeClcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmU6IHRydWVcbiAgICAgIH0pXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtb3ZlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldEluZGV4ZXModGhpcy5nZXROZXh0SW5kZXgodGhpcy5zdGF0ZS5pbmRleCkpXG4gICAgICB9LCA1MDApXG4gICAgfSwgNTAwMClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb3ZlID0gdGhpcy5zdGF0ZS5tb3ZlID8gJ21vdmUnIDogJyc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlLXRleHQgYWJzQ2VudGVyXCI+XG4gICAgICAgICAgVGhpcyBpcyB0aGUgdGV4dCBmb3IgdGhlIHF1b3RlLiBBbmQgaXQgaXMgdmVyeSBsb25nLiBBbmQgaXQgZ29lcyBvbiBmb3IgYSBmZXcgbGluZXMuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZS1hdXRob3JcIj5cbiAgICAgICAgICAtIEF1dGhvciAxXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnF1b3Rlcy1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cywgU2Fucy1TZXJpZiwgQXJpYWw7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZS10ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI2cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDByZW0gMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLWF1dGhvciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjZyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTbmlwcGV0LCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmN1cnJlbnQge1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVzIl19 */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/Quotes.js */"));
    }
  }]);

  return Quotes;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Quotes);

/***/ })

})
//# sourceMappingURL=index.js.6dc2390fe16f9975f940.hot-update.js.map