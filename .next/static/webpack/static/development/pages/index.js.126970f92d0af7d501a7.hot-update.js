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
    className: "jsx-722460072" + " " + "text-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-722460072" + " " + "text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    htmlFor: "text-" + props.id,
    className: "jsx-722460072" + " " + "text-input-wrapper",
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
    className: "jsx-722460072" + " " + "text-input grateful",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-722460072" + " " + "text-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-722460072" + " " + "text-label-text-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: props.handleRemoveText,
    className: "jsx-722460072" + " " + "close-text",
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
    id: "722460072",
    __self: this
  }, ".text-wrapper.jsx-722460072{position:relative;height:12rem;max-width:28rem;margin-left:auto;margin-right:auto;}.text-container.jsx-722460072{padding-top:2rem;height:15vh;}.text-input-wrapper.jsx-722460072{position:relative;margin:0 auto;width:100%;max-width:380px;}.text-input-wrapper.jsx-722460072 .text-label.jsx-722460072{position:absolute;top:16px;left:.5rem;font-size:20px;color:white;font-weight:500;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;font-family:sans-serif;}.text-input-wrapper.jsx-722460072 .text-label-text-border.jsx-722460072{position:absolute;bottom:2px;left:0;height:2px;width:100%;background:white;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 -1;-ms-transform-origin:0 -1;transform-origin:0 -1;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.text-input-wrapper.jsx-722460072 .text-input.jsx-722460072{resize:vertical;-webkit-appearance:none;width:100%;border:0;padding:1.2rem .5rem 1.2rem .5rem;font-size:26px;font-weight:500;border-bottom:1px solid white;background:none;border-radius:0;color:white;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.text-input-wrapper.jsx-722460072 .text-input.jsx-722460072:hover{background:rgba(34,50,84,0.03);}.text-input-wrapper.jsx-722460072 .text-input.jsx-722460072:not(:placeholder-shown)+span.jsx-722460072{color:#5a667f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.text-input-wrapper.jsx-722460072 .text-input.jsx-722460072:focus{background:none;outline:none;}.text-input-wrapper.jsx-722460072 .text-input.jsx-722460072:focus+span.jsx-722460072{color:#07f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.text-input-wrapper.jsx-722460072 .text-input.jsx-722460072:focus+span.jsx-722460072+.text-label-text-border.jsx-722460072{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}.close-text.jsx-722460072{position:absolute;top:-1rem;right:.5rem;color:#adb5bd;}.close-text.jsx-722460072:hover{color:#ff6b6b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUc2QixBQU9ELEFBSUMsQUFNQSxBQVdBLEFBV0YsQUFjZSxBQUdqQixBQUlFLEFBSUwsQUFJUyxBQUdGLEFBTUosV0FaMEIsR0FSQSxBQXFCMUMsRUF0QzBCLEFBcUJYLENBckRELENBUEMsQUFXQyxBQU1MLEFBV0UsQUEyQ0QsU0FyREMsQ0FzREMsQ0FoRWQsQUFxQlMsQUFnQ1QsRUE1RGtCLEFBb0RsQixDQXpDYSxJQWtCQSxFQVhJLEVBcUJKLEFBaUNHLEdBNURFLElBWEMsQUE2Qk4sSUFVRixFQXJCRyxDQXNEZCxJQTFDbUIsQ0FsQm5CLENBNEJvQyxJQXZDaEIsQ0FrQkYsT0ErQ2xCLEdBbkNzQixNQVhDLENBbEJ2QixZQXVDaUIsZUFDQyxnQkFDYyxrQkFvQmhDLEdBUkEsQ0F2QndCLFFBWU4sQ0F2QlMsZUF3QlQsZ0JBQ0osWUFDYyxlQXpCSCxXQVdHLFlBVjVCLHNCQXlCQSwwQkFkQSIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9HcmF0aXR1ZGUvY29tcG9uZW50cy9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuXG5jb25zdCBUZXh0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaHRtbEZvcj17YHRleHQtYCArIHByb3BzLmlkfSBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5wdXQgZ3JhdGVmdWxcIlxuICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCImbmJzcDtcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnRleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlU2F2ZVRleHR9XG4gICAgICAgICAgICByb3dzPXtwcm9wcy5yb3dzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sYWJlbFwiPntwcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sYWJlbC10ZXh0LWJvcmRlclwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZS10ZXh0XCIgb25DbGljaz17cHJvcHMuaGFuZGxlUmVtb3ZlVGV4dH0+XG4gICAgICAgICAgICB7cHJvcHMuaWQgPT09ICdncmF0aXR1ZGUtMCcgfHwgcHJvcHMuaWQgPT09ICd2aXNpb24tMCcgPyBudWxsIDogPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidGltZXMtY2lyY2xlXCIgLz59XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGV4dC13cmFwcGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiAxMnJlbTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDI4cmVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICAgIGhlaWdodDogMTV2aDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzODBweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1pbnB1dC13cmFwcGVyIC50ZXh0LWxhYmVsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgIGxlZnQ6IC41cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1pbnB1dC13cmFwcGVyIC50ZXh0LWxhYmVsLXRleHQtYm9yZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAycHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIC0xO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQge1xuICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxLjJyZW0gLjVyZW0gMS4ycmVtIC41cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsNTAsODQsMC4wMyk7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNWE2NjdmO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjZweCkgc2NhbGUoMC43NSk7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6Zm9jdXMgKyBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzA3ZjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI2cHgpIHNjYWxlKDAuNzUpO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6Zm9jdXMgKyBzcGFuICsgLnRleHQtbGFiZWwtdGV4dC1ib3JkZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS10ZXh0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtMXJlbTtcbiAgICAgICAgICByaWdodDogLjVyZW07XG4gICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNsb3NlLXRleHQ6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmY2YjZiO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dCJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/Text.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.126970f92d0af7d501a7.hot-update.js.map