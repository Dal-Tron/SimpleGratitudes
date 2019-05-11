webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Text.js":
/*!****************************!*\
  !*** ./components/Text.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/Users/dallas/Documents/Gratitude/components/Text.js";




var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4281833316" + " " + "text-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4281833316" + " " + "text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    htmlFor: "text-" + props.id,
    className: "jsx-4281833316" + " " + "text-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: props.id,
    placeholder: "\xA0",
    value: props.text,
    onChange: props.handleSaveText,
    rows: props.rows,
    className: "jsx-4281833316" + " " + "text-input grateful",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4281833316" + " " + "text-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4281833316" + " " + "text-label-text-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: props.handleRemoveText,
    className: "jsx-4281833316" + " " + "close-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.id === 'gratitude-0' || props.id === 'vision-0' ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4281833316",
    __self: this
  }, ".text-wrapper.jsx-4281833316{position:relative;height:12rem;max-width:28rem;margin-left:auto;margin-right:auto;}.text-container.jsx-4281833316{padding-top:2rem;height:15vh;}.text-input-wrapper.jsx-4281833316{position:relative;margin:0 auto;width:100%;max-width:380px;}.text-input-wrapper.jsx-4281833316 .text-label.jsx-4281833316{position:absolute;top:16px;left:.5rem;font-size:16px;color:white;font-weight:500;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;font-family:sans-serif;}.text-input-wrapper.jsx-4281833316 .text-label-text-border.jsx-4281833316{position:absolute;bottom:0;left:0;height:2px;width:100%;background:#07f;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 -1;-ms-transform-origin:0 -1;transform-origin:0 -1;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.text-input-wrapper.jsx-4281833316 .text-input.jsx-4281833316{resize:vertical;-webkit-appearance:none;width:100%;border:0;padding:1.2rem .5rem 1.2rem .5rem;font-size:26px;font-weight:500;border-bottom:1px solid white;background:none;border-radius:0;color:#223254;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.text-input-wrapper.jsx-4281833316 .text-input.jsx-4281833316:hover{background:rgba(34,50,84,0.03);}.text-input-wrapper.jsx-4281833316 .text-input.jsx-4281833316:not(:placeholder-shown)+span.jsx-4281833316{color:#5a667f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.text-input-wrapper.jsx-4281833316 .text-input.jsx-4281833316:focus{background:none;outline:none;}.text-input-wrapper.jsx-4281833316 .text-input.jsx-4281833316:focus+span.jsx-4281833316{color:#07f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.text-input-wrapper.jsx-4281833316 .text-input.jsx-4281833316:focus+span.jsx-4281833316+.text-label-text-border.jsx-4281833316{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}.close-text.jsx-4281833316{position:absolute;top:-1rem;right:.5rem;color:#adb5bd;}.close-text.jsx-4281833316:hover{color:#ff6b6b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUc2QixBQU9ELEFBSUMsQUFNQSxBQVdBLEFBV0YsQUFjZSxBQUdqQixBQUlFLEFBSUwsQUFJUyxBQUdGLEFBTUosV0FaMEIsR0FSQSxBQXFCMUMsRUF0QzBCLEFBcUJYLENBckRELENBUEMsQUFXQyxBQU1MLEFBV0EsQUEyQ0MsU0FyREMsQUFXSixDQTJDSyxDQWhFZCxBQXFEQSxFQTVEa0IsQUFvRGxCLENBekNhLEVBa0JBLElBWEksRUFxQkosQUFpQ0csR0E1REUsRUFrQkwsRUE3Qk0sSUF1Q1IsRUFyQkcsQ0FzRGQsRUExQ2tCLEdBbEJsQixDQTRCb0MsSUF2Q2hCLENBa0JGLE9BWUksQUFtQ3RCLFNBOUN1QixDQWxCdkIsWUF1Q2lCLGVBQ0MsZ0JBQ2Msa0JBb0JoQyxDQS9Cd0IsRUF1QnhCLFNBWGtCLENBdkJTLGVBd0JULGdCQUNGLGNBQ1ksYUF6QkgsUUFXRyxlQVY1Qix3QkF5QkEscUJBZEEiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL2NvbXBvbmVudHMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcblxuY29uc3QgVGV4dCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGh0bWxGb3I9e2B0ZXh0LWAgKyBwcm9wcy5pZH0gY2xhc3NOYW1lPVwidGV4dC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0IGdyYXRlZnVsXCJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJm5ic3A7XCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy50ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZVNhdmVUZXh0fVxuICAgICAgICAgICAgcm93cz17cHJvcHMucm93c31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGFiZWxcIj57cHJvcHMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGFiZWwtdGV4dC1ib3JkZXJcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2UtdGV4dFwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVJlbW92ZVRleHR9PlxuICAgICAgICAgICAge3Byb3BzLmlkID09PSAnZ3JhdGl0dWRlLTAnIHx8IHByb3BzLmlkID09PSAndmlzaW9uLTAnID8gbnVsbCA6IDxGb250QXdlc29tZUljb24gaWNvbj1cInRpbWVzLWNpcmNsZVwiIC8+fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRleHQtd3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMTJyZW07XG4gICAgICAgICAgbWF4LXdpZHRoOiAyOHJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1sYWJlbCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICBsZWZ0OiAuNXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1sYWJlbC10ZXh0LWJvcmRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwN2Y7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAtMTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1pbnB1dC13cmFwcGVyIC50ZXh0LWlucHV0IHtcbiAgICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgcGFkZGluZzogMS4ycmVtIC41cmVtIDEuMnJlbSAuNXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGNvbG9yOiAjMjIzMjU0O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsNTAsODQsMC4wMyk7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNWE2NjdmO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjZweCkgc2NhbGUoMC43NSk7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6Zm9jdXMgKyBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzA3ZjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI2cHgpIHNjYWxlKDAuNzUpO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6Zm9jdXMgKyBzcGFuICsgLnRleHQtbGFiZWwtdGV4dC1ib3JkZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS10ZXh0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtMXJlbTtcbiAgICAgICAgICByaWdodDogLjVyZW07XG4gICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNsb3NlLXRleHQ6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmY2YjZiO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dCJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/Text.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.bc2466e809796fea38e9.hot-update.js.map