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
  }, props.id === 'gratitude-0' ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1771149124",
    __self: this
  }, ".gratitude-container.jsx-1771149124{padding-top:2rem;}.gratitude-input-wrapper.jsx-1771149124{position:relative;margin:0 auto;width:100%;max-width:380px;}.gratitude-input-wrapper.jsx-1771149124 .gratitude-label.jsx-1771149124{position:absolute;top:16px;left:.5rem;font-size:16px;color:#9098a9;font-weight:500;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;font-family:sans-serif;}.gratitude-input-wrapper.jsx-1771149124 .gratitude-label-text-border.jsx-1771149124{position:absolute;bottom:0;left:0;height:2px;width:100%;background:#07f;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124{-webkit-appearance:none;width:100%;border:0;padding:1.2rem .5rem;height:48px;font-size:26px;font-weight:500;border-bottom:2px solid #c8ccd4;background:none;border-radius:0;color:#223254;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124:hover{background:rgba(34,50,84,0.03);}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124:not(:placeholder-shown)+span.jsx-1771149124{color:#5a667f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124:focus{background:none;outline:none;}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124:focus+span.jsx-1771149124{color:#07f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.gratitude-input-wrapper.jsx-1771149124 .gratitude-input.jsx-1771149124:focus+span.jsx-1771149124+.gratitude-label-text-border.jsx-1771149124{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}.close-gratitude.jsx-1771149124{position:absolute;top:1rem;padding-left:1rem;color:#adb5bd;}.close-gratitude.jsx-1771149124:hover{color:#ff6b6b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL2dyYXRpdHVkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBRzRCLEFBR0MsQUFNQSxBQVdBLEFBV00sQUFjTyxBQUdqQixBQUlFLEFBSUwsQUFJUyxBQUdGLEFBTUosV0FaMEIsR0FSQSxBQXFCMUMsRUFqQmUsQ0FwRGYsQ0FHZ0IsQUFNTCxBQVdBLEFBMkNBLE1BaENFLEdBckJBLEFBV0osQUEyQ1csRUFYcEIsRUFSQSxDQXpDYSxFQWtCQSxDQVVGLEdBckJNLEtBTkMsQ0E0QkssQ0FWVixBQTBDRyxRQXJEQSxHQVlFLEdBbEJsQixBQTREQSxNQWhDYyxFQXJCSSxLQVlJLEFBbUN0QixLQXpCaUIsTUFyQk0sU0FzQkwsZ0JBQ2dCLGdDQUNoQixHQW1CbEIsQ0EvQnVCLEVBdUJ2QixVQVZrQixFQXhCUyxjQXlCWCxjQUNZLDhCQXpCSCxHQVdHLG9CQVY1QixPQXlCQSxpQ0FkQSIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9HcmF0aXR1ZGUvY29tcG9uZW50cy9ncmF0aXR1ZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5cbmNvbnN0IEdyYXRpdHVkZSA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXRpdHVkZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgaHRtbEZvcj17YGdyYXRpdHVkZS1gICsgcHJvcHMuaW5kZXh9IGNsYXNzTmFtZT1cImdyYXRpdHVkZS1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyYXRpdHVkZS1pbnB1dFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIiZuYnNwO1wiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy5ncmF0aXR1ZGV9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZVNhdmVHcmF0aXR1ZGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyYXRpdHVkZS1sYWJlbFwiPkxhYmVsPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmF0aXR1ZGUtbGFiZWwtdGV4dC1ib3JkZXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlLWdyYXRpdHVkZVwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVJlbW92ZUdyYXRpdHVkZX0+XG4gICAgICAgICAge3Byb3BzLmlkID09PSAnZ3JhdGl0dWRlLTAnID8gbnVsbCA6IDxGb250QXdlc29tZUljb24gaWNvbj1cInRpbWVzLWNpcmNsZVwiIC8+fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmdyYXRpdHVkZS1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5ncmF0aXR1ZGUtaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXRpdHVkZS1pbnB1dC13cmFwcGVyIC5ncmF0aXR1ZGUtbGFiZWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgbGVmdDogLjVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiAjOTA5OGE5O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXRpdHVkZS1pbnB1dC13cmFwcGVyIC5ncmF0aXR1ZGUtbGFiZWwtdGV4dC1ib3JkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDdmO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICAuZ3JhdGl0dWRlLWlucHV0LXdyYXBwZXIgLmdyYXRpdHVkZS1pbnB1dCB7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxLjJyZW0gLjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYzhjY2Q0O1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICBjb2xvcjogIzIyMzI1NDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICAuZ3JhdGl0dWRlLWlucHV0LXdyYXBwZXIgLmdyYXRpdHVkZS1pbnB1dDpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzNCw1MCw4NCwwLjAzKTtcbiAgICAgICAgfVxuICAgICAgICAuZ3JhdGl0dWRlLWlucHV0LXdyYXBwZXIgLmdyYXRpdHVkZS1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNWE2NjdmO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjZweCkgc2NhbGUoMC43NSk7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXRpdHVkZS1pbnB1dC13cmFwcGVyIC5ncmF0aXR1ZGUtaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZ3JhdGl0dWRlLWlucHV0LXdyYXBwZXIgLmdyYXRpdHVkZS1pbnB1dDpmb2N1cyArIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjMDdmO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjZweCkgc2NhbGUoMC43NSk7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXRpdHVkZS1pbnB1dC13cmFwcGVyIC5ncmF0aXR1ZGUtaW5wdXQ6Zm9jdXMgKyBzcGFuICsgLmdyYXRpdHVkZS1sYWJlbC10ZXh0LWJvcmRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNsb3NlLWdyYXRpdHVkZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNsb3NlLWdyYXRpdHVkZTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNmZjZiNmI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmF0aXR1ZGUiXX0= */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/gratitude.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Gratitude);

/***/ })

})
//# sourceMappingURL=index.js.464c7cff1aa1f830e52d.hot-update.js.map