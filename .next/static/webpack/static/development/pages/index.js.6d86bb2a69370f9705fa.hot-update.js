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
    className: "jsx-2603204626" + " " + "text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    htmlFor: "text-" + props.id,
    className: "jsx-2603204626" + " " + "text-input-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: props.id,
    placeholder: "\xA0",
    value: props.gratitude,
    onChange: props.handleSaveGratitude,
    rows: "3",
    className: "jsx-2603204626" + " " + "text-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2603204626" + " " + "text-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Label"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2603204626" + " " + "text-label-text-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: props.handleRemoveGratitude,
    className: "jsx-2603204626" + " " + "close-gratitude",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.id === 'text-0' ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2603204626",
    __self: this
  }, ".text-container.jsx-2603204626{padding-top:2rem;}.text-input-wrapper.jsx-2603204626{position:relative;margin:0 auto;width:100%;max-width:380px;}.text-input-wrapper.jsx-2603204626 .text-label.jsx-2603204626{position:absolute;top:16px;left:.5rem;font-size:16px;color:#9098a9;font-weight:500;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;font-family:sans-serif;}.text-input-wrapper.jsx-2603204626 .text-label-text-border.jsx-2603204626{position:absolute;bottom:0;left:0;height:2px;width:100%;background:#07f;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.text-input-wrapper.jsx-2603204626 .text-input.jsx-2603204626{-webkit-appearance:none;width:100%;border:0;padding:1.2rem 2rem 1.2rem .5rem;height:48px;font-size:26px;font-weight:500;border-bottom:2px solid #c8ccd4;background:none;border-radius:0;color:#223254;-webkit-transition:all 0.15s ease;transition:all 0.15s ease;}.text-input-wrapper.jsx-2603204626 .text-input.jsx-2603204626:hover{background:rgba(34,50,84,0.03);}.text-input-wrapper.jsx-2603204626 .text-input.jsx-2603204626:not(:placeholder-shown)+span.jsx-2603204626{color:#5a667f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.text-input-wrapper.jsx-2603204626 .text-input.jsx-2603204626:focus{background:none;outline:none;}.text-input-wrapper.jsx-2603204626 .text-input.jsx-2603204626:focus+span.jsx-2603204626{color:#07f;-webkit-transform:translateY(-26px) scale(0.75);-ms-transform:translateY(-26px) scale(0.75);transform:translateY(-26px) scale(0.75);}.text-input-wrapper.jsx-2603204626 .text-input.jsx-2603204626:focus+span.jsx-2603204626+.text-label-text-border.jsx-2603204626{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}.close-gratitude.jsx-2603204626{position:absolute;top:1rem;right:.5rem;color:#adb5bd;}.close-gratitude.jsx-2603204626:hover{color:#ff6b6b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JrQixBQUc0QixBQUdDLEFBTUEsQUFXQSxBQVdNLEFBY08sQUFHakIsQUFJRSxBQUlMLEFBSVMsQUFHRixBQU1KLFdBWjBCLEdBUkEsQUFxQjFDLEVBakJlLENBcERmLENBR2dCLEFBTUwsQUFXQSxBQTJDQSxNQWhDRSxHQXJCQSxBQVdKLEFBMkNLLEVBWGQsRUFSQSxDQXpDYSxFQWtCQSxDQVVGLEdBckJNLENBc0RELElBNURFLENBNEJpQixDQVZ0QixRQVhHLEFBc0RoQixHQTFDa0IsR0FsQmxCLFFBT2tCLEtBWUksQUFtQ3RCLEtBMUJjLE1BcEJTLE1BcUJOLGVBQ0MsZ0JBQ2dCLHVCQW9CbEMsQ0EvQnVCLEVBdUJ2QixNQVhrQixNQXZCUyxVQXdCVCxnQkFDRixjQUNZLGtCQXpCSCxHQVdHLG9CQVY1QixtQkF5QkEscUJBZEEiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL2NvbXBvbmVudHMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcblxuY29uc3QgVGV4dCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGh0bWxGb3I9e2B0ZXh0LWAgKyBwcm9wcy5pZH0gY2xhc3NOYW1lPVwidGV4dC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIlxuICAgICAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIiZuYnNwO1wiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLmdyYXRpdHVkZX1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlU2F2ZUdyYXRpdHVkZX1cbiAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGFiZWxcIj5MYWJlbDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sYWJlbC10ZXh0LWJvcmRlclwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2UtZ3JhdGl0dWRlXCIgb25DbGljaz17cHJvcHMuaGFuZGxlUmVtb3ZlR3JhdGl0dWRlfT5cbiAgICAgICAgICB7cHJvcHMuaWQgPT09ICd0ZXh0LTAnID8gbnVsbCA6IDxGb250QXdlc29tZUljb24gaWNvbj1cInRpbWVzLWNpcmNsZVwiIC8+fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzODBweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1pbnB1dC13cmFwcGVyIC50ZXh0LWxhYmVsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgIGxlZnQ6IC41cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogIzkwOThhOTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtbGFiZWwtdGV4dC1ib3JkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDdmO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1pbnB1dC13cmFwcGVyIC50ZXh0LWlucHV0IHtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbSAycmVtIDEuMnJlbSAuNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjOGNjZDQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGNvbG9yOiAjMjIzMjU0O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsNTAsODQsMC4wMyk7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNWE2NjdmO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjZweCkgc2NhbGUoMC43NSk7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtaW5wdXQtd3JhcHBlciAudGV4dC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6Zm9jdXMgKyBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzA3ZjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI2cHgpIHNjYWxlKDAuNzUpO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWlucHV0LXdyYXBwZXIgLnRleHQtaW5wdXQ6Zm9jdXMgKyBzcGFuICsgLnRleHQtbGFiZWwtdGV4dC1ib3JkZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1ncmF0aXR1ZGUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDFyZW07XG4gICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgIGNvbG9yOiAjYWRiNWJkO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1ncmF0aXR1ZGU6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmY2YjZiO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dCJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/Text.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.6d86bb2a69370f9705fa.hot-update.js.map