webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/gratitude.js":
/*!*********************************!*\
  !*** ./components/gratitude.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/Users/dallas/Documents/Gratitude/components/gratitude.js";




var Gratitude = function Gratitude(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1771149124" + " " + "gratitude-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    htmlFor: "gratitude-" + props.index,
    className: "jsx-1771149124" + " " + "gratitude-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: props.id,
    placeholder: "\xA0",
    defaultValue: props.gratitude,
    onChange: props.handleSaveGratitude,
    className: "jsx-1771149124" + " " + "gratitude-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1771149124" + " " + "gratitude-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Label"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1771149124" + " " + "gratitude-label-text-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: props.handleRemoveGratitude,
    className: "jsx-1771149124" + " " + "close-gratitude",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1771149124",
    __self: this
  }, ".gratitude-container.jsx-1771149124{padding-top:2rem;}.gratitude-input-wrapper.jsx-1771149124{position:relative;margin:0 auto;width:100%;max-width:380px;}.gratitude-input-wrapper.jsx-1771149124 .gratitude-label.jsx-1771149124{position:absolute;top:16px;left:.5rem;font-size:16px;color:#9098a9;font-weight:500;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;font-family:sans-serif;}.gratitude-input-wrapper.jsx-1771149124 .gratitude-label-text-border.jsx-1771149124{position:absolute;bottom:0;left:0;height:2px;width:100%;background:#07f;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124{-webkit-appearance:none;width:100%;border:0;padding:1.2rem .5rem;height:48px;font-size:26px;font-weight:500;border-bottom:2px solid #c8ccd4;background:none;border-radius:0;color:#223254;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124:hover{background:rgba(34,50,84,0.03);}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124:not(:placeholder-shown)+span.jsx-1771149124{color:#5a667f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124:focus{background:none;outline:none;}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124:focus+span.jsx-1771149124{color:#07f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124:focus+span.jsx-1771149124+.gratitude-label-text-border.jsx-1771149124{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}.close-gratitude.jsx-1771149124{position:absolute;top:1rem;padding-left:1rem;color:#adb5bd;}.close-gratitude.jsx-1771149124:hover{color:#ff6b6b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL2dyYXRpdHVkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBRzRCLEFBR0MsQUFNQSxBQVdBLEFBV00sQUFjTyxBQUdqQixBQUlFLEFBSUwsQUFJUyxBQUdGLEFBTUosV0FaMEIsR0FSQSxBQXFCMUMsRUFqQmUsQ0FwRGYsQ0FHZ0IsQUFNTCxBQVdBLEFBMkNBLE1BaENFLEdBckJBLEFBV0osQUEyQ1csRUFYcEIsRUFSQSxDQXpDYSxFQWtCQSxDQVVGLEdBckJNLEtBTkMsQ0E0QkssQ0FWVixBQTBDRyxRQXJEQSxHQVlFLEdBbEJsQixBQTREQSxNQWhDYyxFQXJCSSxLQVlJLEFBbUN0QixLQXpCaUIsTUFyQk0sU0FzQkwsZ0JBQ2dCLGdDQUNoQixHQW1CbEIsQ0EvQnVCLEVBdUJ2QixVQVZrQixFQXhCUyxjQXlCWCxjQUNZLDhCQXpCSCxHQVdHLG9CQVY1QixPQXlCQSxpQ0FkQSIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9HcmF0aXR1ZGUvY29tcG9uZW50cy9ncmF0aXR1ZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5cbmNvbnN0IEdyYXRpdHVkZSA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXRpdHVkZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgaHRtbEZvcj17YGdyYXRpdHVkZS1gICsgcHJvcHMuaW5kZXh9IGNsYXNzTmFtZT1cImdyYXRpdHVkZS1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyYXRpdHVkZS1pbnB1dFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIiZuYnNwO1wiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy5ncmF0aXR1ZGV9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZVNhdmVHcmF0aXR1ZGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyYXRpdHVkZS1sYWJlbFwiPkxhYmVsPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmF0aXR1ZGUtbGFiZWwtdGV4dC1ib3JkZXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlLWdyYXRpdHVkZVwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVJlbW92ZUdyYXRpdHVkZX0+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidGltZXMtY2lyY2xlXCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ncmF0aXR1ZGUtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZ3JhdGl0dWRlLWlucHV0LXdyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDM4MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ncmF0aXR1ZGUtaW5wdXQtd3JhcHBlciAuZ3JhdGl0dWRlLWxhYmVsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgIGxlZnQ6IC41cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogIzkwOThhOTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC5ncmF0aXR1ZGUtaW5wdXQtd3JhcHBlciAuZ3JhdGl0dWRlLWxhYmVsLXRleHQtYm9yZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzA3ZjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXRpdHVkZS1pbnB1dC13cmFwcGVyIC5ncmF0aXR1ZGUtaW5wdXQge1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgcGFkZGluZzogMS4ycmVtIC41cmVtO1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2M4Y2NkNDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgY29sb3I6ICMyMjMyNTQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXRpdHVkZS1pbnB1dC13cmFwcGVyIC5ncmF0aXR1ZGUtaW5wdXQ6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsNTAsODQsMC4wMyk7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXRpdHVkZS1pbnB1dC13cmFwcGVyIC5ncmF0aXR1ZGUtaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzVhNjY3ZjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI2cHgpIHNjYWxlKDAuNzUpO1xuICAgICAgICB9XG4gICAgICAgIC5ncmF0aXR1ZGUtaW5wdXQtd3JhcHBlciAuZ3JhdGl0dWRlLWlucHV0OmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXRpdHVkZS1pbnB1dC13cmFwcGVyIC5ncmF0aXR1ZGUtaW5wdXQ6Zm9jdXMgKyBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzA3ZjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI2cHgpIHNjYWxlKDAuNzUpO1xuICAgICAgICB9XG4gICAgICAgIC5ncmF0aXR1ZGUtaW5wdXQtd3JhcHBlciAuZ3JhdGl0dWRlLWlucHV0OmZvY3VzICsgc3BhbiArIC5ncmF0aXR1ZGUtbGFiZWwtdGV4dC1ib3JkZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1ncmF0aXR1ZGUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgIGNvbG9yOiAjYWRiNWJkO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1ncmF0aXR1ZGU6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmY2YjZiO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhdGl0dWRlIl19 */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/gratitude.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Gratitude);

/***/ })

})
//# sourceMappingURL=index.js.6f56c953588e55c0cd50.hot-update.js.map