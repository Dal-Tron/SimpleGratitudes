webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/clock.js":
/*!*****************************!*\
  !*** ./components/clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/dallas/Documents/Gratitude/components/clock.js";




function Clock(_ref) {
  var lastUpdate = _ref.lastUpdate;
  var date = new Date();
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var weekday = weekdays[date.getDay()];
  var month = months[date.getMonth()];
  var intDay = date.getDate();
  var year = date.getFullYear();
  var fullDateString = "".concat(month, " ").concat(intDay, ", ").concat(year);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1928379204" + " " + "time-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1928379204" + " " + "time-weekday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, weekday), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1928379204" + " " + "time-month-day-year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, fullDateString), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1928379204" + " " + "time-hour",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, format(new Date(lastUpdate))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1928379204",
    __self: this
  }, ".time-container.jsx-1928379204{font-family:CodyStarLight;text-align:center;color:white;font-size:1.5rem;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9jb21wb25lbnRzL2Nsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDa0IsQUFHcUMsMEJBQ1Isa0JBQ04sWUFDSyxpQkFDQyxrQkFDVixRQUNDLFNBQ3VCLHlHQUNsQyIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9HcmF0aXR1ZGUvY29tcG9uZW50cy9jbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmZ1bmN0aW9uIENsb2NrKHsgbGFzdFVwZGF0ZSB9KSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCJcbiAgXTtcblxuICBjb25zdCBtb250aHMgPSBbXG4gICAgXCJKYW51YXJ5XCIsXG4gICAgXCJGZWJydWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIlxuICBdO1xuXG4gIGNvbnN0IHdlZWtkYXkgPSB3ZWVrZGF5c1tkYXRlLmdldERheSgpXTtcbiAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgY29uc3QgaW50RGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGZ1bGxEYXRlU3RyaW5nID0gYCR7bW9udGh9ICR7aW50RGF5fSwgJHt5ZWFyfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtd2Vla2RheVwiPnt3ZWVrZGF5fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLW1vbnRoLWRheS15ZWFyXCI+e2Z1bGxEYXRlU3RyaW5nfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWhvdXJcIj57Zm9ybWF0KG5ldyBEYXRlKGxhc3RVcGRhdGUpKX08L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRpbWUtY29udGFpbmVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogQ29keVN0YXJMaWdodDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBmb3JtYXQgPSB0ID0+IGAke3QuZ2V0VVRDSG91cnMoKX06JHtwYWQodC5nZXRVVENNaW51dGVzKCkpfWBcbmNvbnN0IHBhZCA9IG4gPT4gKG4gPCAxMCA/IGAwJHtufWAgOiBuKVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgbGFzdFVwZGF0ZSB9ID0gc3RhdGVcbiAgcmV0dXJuIHsgbGFzdFVwZGF0ZSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDbG9jaykiXX0= */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/components/clock.js */"));
}

var format = function format(t) {
  return "".concat(t.getUTCHours(), ":").concat(pad(t.getUTCMinutes()));
};

var pad = function pad(n) {
  return n < 10 ? "0".concat(n) : n;
};

var mapStateToProps = function mapStateToProps(state) {
  var lastUpdate = state.lastUpdate;
  return {
    lastUpdate: lastUpdate
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Clock));

/***/ })

})
//# sourceMappingURL=index.js.f0b6ca5dadc9b2124407.hot-update.js.map