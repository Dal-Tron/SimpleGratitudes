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
        className: "jsx-8781999" + " " + "quotes-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-8781999" + " " + "quote-text absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "This is the text for the quote. And it is very long. And it goes on for a few lines."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-8781999" + " " + "quote-author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "- Author 1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "8781999",
        __self: this
      }, ".quotes-container.jsx-8781999{position:relative;color:white;font-family:Righteous,Sans-Serif,Arial;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.5rem;}.quote-text.jsx-8781999{border-left:5px solid lightgrey;max-width:26rem;padding:1rem 1rem 0rem 1rem;}.quote-author.jsx-8781999{text-align:right;max-width:26rem;margin-left:auto;margin-right:auto;font-family:Snippet,Sans-Serif,Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL1F1b3Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRG9CLEFBRytCLEFBT2MsQUFLZixpQkFDRCxDQVpKLFlBQzZCLEVBTXpCLENBTUMsZUFMVyxFQU1WLGtCQUNxQixDQWJwQixPQU9yQiw2QkFPQSx5REFibUIsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL1F1b3Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgUXVvdGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCBpZHhTdGFydCA9IDBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5kZXg6IGlkeFN0YXJ0LFxuICAgICAgbmV4dDogdGhpcy5nZXROZXh0SW5kZXgoaWR4U3RhcnQpLFxuICAgICAgbW92ZTogZmFsc2VcbiAgICB9XG4gIH1cblxuICBnZXROZXh0SW5kZXgoaWR4KSB7XG4gICAgaWYgKGlkeCA+PSB0aGlzLnByb3BzLnF1b3Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgICByZXR1cm4gaWR4ICsgMVxuICB9XG5cbiAgc2V0SW5kZXhlcyhpZHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluZGV4OiBpZHgsXG4gICAgICBuZXh0OiB0aGlzLmdldE5leHRJbmRleChpZHgpXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZlOiB0cnVlXG4gICAgICB9KVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW92ZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRJbmRleGVzKHRoaXMuZ2V0TmV4dEluZGV4KHRoaXMuc3RhdGUuaW5kZXgpKVxuICAgICAgfSwgNTAwKVxuICAgIH0sIDUwMDApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW92ZSA9IHRoaXMuc3RhdGUubW92ZSA/ICdtb3ZlJyA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3Rlcy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZS10ZXh0IGFic0NlbnRlclwiPlxuICAgICAgICAgIFRoaXMgaXMgdGhlIHRleHQgZm9yIHRoZSBxdW90ZS4gQW5kIGl0IGlzIHZlcnkgbG9uZy4gQW5kIGl0IGdvZXMgb24gZm9yIGEgZmV3IGxpbmVzLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtYXV0aG9yXCI+XG4gICAgICAgICAgLSBBdXRob3IgMVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5xdW90ZXMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSaWdodGVvdXMsIFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGUtdGV4dCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjZyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMHJlbSAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGUtYXV0aG9yIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNnJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFNuaXBwZXQsIFNhbnMtU2VyaWYsIEFyaWFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VycmVudCB7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdW90ZXMiXX0= */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/Quotes.js */"));
    }
  }]);

  return Quotes;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Quotes);

/***/ })

})
//# sourceMappingURL=index.js.4bb0b5734943e6686678.hot-update.js.map