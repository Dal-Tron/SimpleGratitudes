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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");







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
        className: "jsx-3305498836" + " " + "quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3305498836" + " " + "quotes-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3305498836" + " " + "quote-text absCenter ".concat(visibleQuote),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, quote.text, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3305498836" + " " + "quote-author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "- ", quote.author))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3305498836",
        __self: this
      }, ".quotes.jsx-3305498836{background:lightblue;}.quotes-container.jsx-3305498836{position:relative;color:white;font-family:Righteous,Sans-Serif,Arial;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:1.2rem;height:12rem;}.quote-button-container.jsx-3305498836{width:26rem;}.quote-text.jsx-3305498836{border-left:5px solid white;max-width:22rem;padding-left:1rem;opacity:0;-webkit-transition:all .5s ease;transition:all .5s ease;}.quote-author.jsx-3305498836{text-align:right;max-width:26rem;font-family:Snippet,Sans-Serif,Arial;}.visible-quote.jsx-3305498836{opacity:1;-webkit-transition:all .5s ease;transition:all .5s ease;}.quote-icon.jsx-3305498836{position:absolute;top:50%;max-width:14px;}.quote-icon-left.jsx-3305498836{left:-5rem;}.quote-icon-right.jsx-3305498836{right:-5rem;}@media only screen and (max-device-width:800px){.quote-button-container.jsx-3305498836{width:20rem;}}@media only screen and (max-device-width:600px){.quotes-container.jsx-3305498836{font-size:1rem;}.quote-button-container.jsx-3305498836{width:15rem;}}@media only screen and (max-device-width:400px){.quotes-container.jsx-3305498836{font-size:.9rem;}.quote-button-container.jsx-3305498836{width:10rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL2luZGV4L1F1b3Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRW9CLEFBR2tDLEFBR0gsQUFRTixBQUdnQixBQU9YLEFBS1AsQUFJUSxBQUtQLEFBR0MsQUFJRSxBQUtHLEFBR0gsQUFLSSxBQUdKLFVBL0JVLENBUzFCLENBeEJBLEFBMkJBLEFBSUUsQUFRQSxBQVFBLEdBWEEsQ0FRQSxDQWxDZ0IsQ0FsQkosQUEyQkosR0E5QlYsS0ErQmlCLEVBakJDLEVBVnlCLEdBa0JGLFFBVXpDLEdBakJvQixrQkFDUixJQVdaLEdBdEJxQixDQWtCckIsRUFOMEIsd0RBQzFCLGtDQVptQixpQkFDSixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL2luZGV4L1F1b3Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcblxuY2xhc3MgRGVza3RvcFF1b3RlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgaWR4U3RhcnQgPSAwXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluZGV4OiBpZHhTdGFydCxcbiAgICAgIG5leHQ6IHRoaXMuZ2V0TmV4dEluZGV4KGlkeFN0YXJ0KSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXROZXh0SW5kZXgoaWR4KSB7XG4gICAgaWYgKGlkeCA+PSB0aGlzLnByb3BzLnF1b3Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgICByZXR1cm4gaWR4ICsgMVxuICB9XG5cbiAgZ2V0UHJldmlvdXNJbmRleChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucXVvdGVzLmxlbmd0aCAtIDFcbiAgICB9XG4gICAgcmV0dXJuIGlkeCAtIDFcbiAgfVxuXG4gIHNldE5leHRJbmRleGVzKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5kZXg6IGlkeCxcbiAgICAgIG5leHQ6IHRoaXMuZ2V0TmV4dEluZGV4KGlkeCksXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHNldFByZXZpb3VzSW5kZXhlcyhpZHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluZGV4OiBpZHgsXG4gICAgICBuZXh0OiB0aGlzLmdldFByZXZpb3VzSW5kZXgoaWR4KSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlTmV4dFF1b3RlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXROZXh0SW5kZXhlcyh0aGlzLmdldE5leHRJbmRleCh0aGlzLnN0YXRlLmluZGV4KSlcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgaGFuZGxlUHJldmlvdXNRdW90ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNJbmRleGVzKHRoaXMuZ2V0UHJldmlvdXNJbmRleCh0aGlzLnN0YXRlLmluZGV4KSlcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHZpc2libGVRdW90ZSA9IHRoaXMuc3RhdGUudmlzaWJsZSA/ICd2aXNpYmxlLXF1b3RlJyA6ICcnO1xuICAgIGNvbnN0IHF1b3RlID0gdGhpcy5wcm9wcy5xdW90ZXNbdGhpcy5zdGF0ZS5pbmRleF1cbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicXVvdGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcXVvdGUtdGV4dCBhYnNDZW50ZXIgJHt2aXNpYmxlUXVvdGV9YH0+XG4gICAgICAgICAgICB7cXVvdGUudGV4dH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtYXV0aG9yXCI+XG4gICAgICAgICAgICAgIC0ge3F1b3RlLmF1dGhvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5xdW90ZXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUmlnaHRlb3VzLCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLXRleHQge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjJyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGUtYXV0aG9yIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNnJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTbmlwcGV0LCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZpc2libGUtcXVvdGUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZS1pY29uLWxlZnQge1xuICAgICAgICAgICAgbGVmdDogLTVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZS1pY29uLXJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAtNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgIC5xdW90ZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgLnF1b3Rlcy1jb250YWluZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucXVvdGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDAwcHgpIHtcbiAgICAgICAgICAgIC5xdW90ZXMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5xdW90ZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wUXVvdGVzIl19 */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/index/Quotes.js */"));
    }
  }]);

  return DesktopQuotes;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DesktopQuotes);

/***/ })

})
//# sourceMappingURL=index.js.4185dc0148f567a51da0.hot-update.js.map