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
    className: "jsx-2919913640" + " " + "text-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2919913640" + " " + "text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    htmlFor: "text-" + props.id,
    className: "jsx-2919913640" + " " + "text-input-wrapper",
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
    className: "jsx-2919913640" + " " + "text-input grateful",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2919913640" + " " + "text-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2919913640" + " " + "text-label-text-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: props.handleRemoveText,
    className: "jsx-2919913640" + " " + "close-text",
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
    id: "2919913640",
    __self: this
  }, ".text-wrapper.jsx-2919913640{position:relative;height:15vh;}.text-container.jsx-2919913640{padding-top:2rem;height:15vh;}.text-input-wrapper.jsx-2919913640{position:relative;margin:0 auto;width:100%;max-width:380px;}.text-input-wrapper.jsx-2919913640 .text-label.jsx-2919913640{position:absolute;top:16px;left:.5rem;font-size:16px;color:#9098a9;font-weight:500;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;font-family:sans-serif;}.text-input-wrapper.jsx-2919913640 .text-label-text-border.jsx-2919913640{position:absolute;bottom:0;left:0;height:2px;width:100%;background:#07f;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.text-input-wrapper.jsx-2919913640 .text-input.jsx-2919913640{resize:vertical;-webkit-appearance:none;width:100%;border:0;padding:1.2rem .5rem 1.2rem .5rem;font-size:26px;font-weight:500;border-bottom:2px solid #c8ccd4;background:none;border-radius:0;color:#223254;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.text-input-wrapper.jsx-2919913640 .text-input.jsx-2919913640:hover{background:rgba(34,50,84,0.03);}.text-input-wrapper.jsx-2919913640 .text-input.jsx-2919913640:not(:placeholder-shown)+span.jsx-2919913640{color:#5a667f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.text-input-wrapper.jsx-2919913640 .text-input.jsx-2919913640:focus{background:none;outline:none;}.text-input-wrapper.jsx-2919913640 .text-input.jsx-2919913640:focus+span.jsx-2919913640{color:#07f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.text-input-wrapper.jsx-2919913640 .text-input.jsx-2919913640:focus+span.jsx-2919913640+.text-label-text-border.jsx-2919913640{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}.close-text.jsx-2919913640{position:absolute;top:-1rem;right:.5rem;color:#adb5bd;}.close-text.jsx-2919913640:hover{color:#ff6b6b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUc2QixBQUlELEFBSUMsQUFNQSxBQVdBLEFBV0YsQUFjZSxBQUdqQixBQUlFLEFBSUwsQUFJUyxBQUdGLEFBTUosV0FaMEIsR0FSQSxBQXFCMUMsRUF0QzBCLEFBcUJYLENBckRELENBSkEsQUFRRSxBQU1MLEFBV0EsQUEyQ0MsU0FyREMsQUFXSixDQTJDSyxDQWhFZCxBQXFEQSxDQXpEQSxDQWlEQSxDQXpDYSxFQWtCQSxJQVhJLEVBcUJKLEFBaUNHLEdBNURFLEVBa0JMLE1BVUYsRUFyQkssQ0FzRGhCLEVBMUNrQixHQWxCbEIsQ0E0Qm9DLE9BckJsQixLQVlJLEFBbUN0QixXQTlDdUIsV0FxQk4sZUFDQyxnQkFDZ0Isa0JBb0JsQyxDQS9CdUIsRUF1QnZCLFdBWGtCLENBdkJTLGVBd0JULGdCQUNGLGNBQ1ksYUF6QkgsR0FXRyxvQkFWNUIsd0JBeUJBLGdCQWRBIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL1RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5cbmNvbnN0IFRleHQgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBodG1sRm9yPXtgdGV4dC1gICsgcHJvcHMuaWR9IGNsYXNzTmFtZT1cInRleHQtaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1pbnB1dCBncmF0ZWZ1bFwiXG4gICAgICAgICAgICBpZD17cHJvcHMuaWR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiZuYnNwO1wiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMudGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVTYXZlVGV4dH1cbiAgICAgICAgICAgIHJvd3M9e3Byb3BzLnJvd3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxhYmVsXCI+e3Byb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxhYmVsLXRleHQtYm9yZGVyXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlLXRleHRcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVSZW1vdmVUZXh0fT5cbiAgICAgICAgICAgIHtwcm9wcy5pZCA9PT0gJ2dyYXRpdHVkZS0wJyB8fCBwcm9wcy5pZCA9PT0gJ3Zpc2lvbi0wJyA/IG51bGwgOiA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ0aW1lcy1jaXJjbGVcIiAvPn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50ZXh0LXdyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1sYWJlbCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICBsZWZ0OiAuNXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICM5MDk4YTk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1pbnB1dC13cmFwcGVyIC50ZXh0LWxhYmVsLXRleHQtYm9yZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzA3ZjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1pbnB1dCB7XG4gICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbSAuNXJlbSAxLjJyZW0gLjVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjOGNjZDQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGNvbG9yOiAjMjIzMjU0O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsNTAsODQsMC4wMyk7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNWE2NjdmO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjZweCkgc2NhbGUoMC43NSk7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6Zm9jdXMgKyBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzA3ZjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI2cHgpIHNjYWxlKDAuNzUpO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6Zm9jdXMgKyBzcGFuICsgLnRleHQtbGFiZWwtdGV4dC1ib3JkZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS10ZXh0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtMXJlbTtcbiAgICAgICAgICByaWdodDogLjVyZW07XG4gICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNsb3NlLXRleHQ6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmY2YjZiO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dCJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/Text.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.77f6d8e4155de428a815.hot-update.js.map