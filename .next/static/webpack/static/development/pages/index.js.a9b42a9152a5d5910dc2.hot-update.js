webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Clock.js":
/*!*****************************!*\
  !*** ./components/Clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dallas/Documents/Gratitude/components/Clock.js";



function Clock(props) {
  var date = new Date();
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var weekday = weekdays[date.getDay()];
  var month = months[date.getMonth()];
  var intDay = date.getDate();
  var year = date.getFullYear();
  var fullDateString = "".concat(month, " ").concat(intDay, ", ").concat(year);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2059330696" + " " + "time-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2059330696" + " " + "inline time-weekday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "".concat(weekday, ", ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2059330696" + " " + "inline time-month-day-year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, fullDateString), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2059330696" + " " + "inline time-hour",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, props.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2059330696",
    __self: this
  }, ".time-container.jsx-2059330696{font-family:CodyStarLight,Sans-Serif,Arial;text-align:center;color:white;font-size:1.5rem;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL0Nsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDa0IsQUFHd0QsMkNBQzNCLGtCQUNOLFlBQ0ssaUJBQ0Msa0JBQ1YsUUFDQyxTQUN1Qix5R0FDbEMiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL2NvbXBvbmVudHMvQ2xvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBDbG9jayhwcm9wcykge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgd2Vla2RheXMgPSBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiXG4gIF07XG5cbiAgY29uc3QgbW9udGhzID0gW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCJcbiAgXTtcblxuICBjb25zdCB3ZWVrZGF5ID0gd2Vla2RheXNbZGF0ZS5nZXREYXkoKV07XG4gIGNvbnN0IG1vbnRoID0gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gIGNvbnN0IGludERheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBmdWxsRGF0ZVN0cmluZyA9IGAke21vbnRofSAke2ludERheX0sICR7eWVhcn1gO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUgdGltZS13ZWVrZGF5XCI+e2Ake3dlZWtkYXl9LCBgfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUgdGltZS1tb250aC1kYXkteWVhclwiPntmdWxsRGF0ZVN0cmluZ308L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lIHRpbWUtaG91clwiPntwcm9wcy50aW1lfTwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGltZS1jb250YWluZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBDb2R5U3RhckxpZ2h0LCBTYW5zLVNlcmlmLCBBcmlhbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbG9jayJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/Clock.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Clock);

/***/ })

})
//# sourceMappingURL=index.js.a9b42a9152a5d5910dc2.hot-update.js.map