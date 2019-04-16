webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_clock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/clock */ "./components/clock.js");
/* harmony import */ var _components_gratitudes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/gratitudes */ "./components/gratitudes.js");





var _jsxFileName = "/Users/dallas/Documents/Gratitude/pages/index.js";








var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      // DISPATCH ACTIONS HERE FROM 'mapDispatchToProps'
      this.timer = setInterval(function () {
        return _this.props.setClock();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3333647949" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-3333647949",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-3333647949" + " " + "headspace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3333647949" + " " + "intention",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Gratitude Today")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-3333647949" + " " + "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_clock__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-3333647949" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-3333647949" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_gratitudes__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-3333647949" + " " + "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3333647949",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;}.headspace{height:10rem;background:lightgrey;position:relative;}.intention{font-family:ZillaSlab,Arial;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:2rem;color:white;}.time{position:relative;height:10rem;background:lightblue;}.gratitudes{position:relative;height:20rem;background:coral;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QzJCLEFBRytCLEFBSUksQUFJSixBQUliLEFBS0ksQUFLZ0IsQUFTWCxBQUtBLFNBdkJSLElBS1csS0FjUixBQUtBLENBdkJHLEdBYjBDLEFBUTVELElBSmlFLEVBa0I3QyxHQVVHLEFBS0osR0FuQkMsQ0FKcEIsV0FTVSxFQWVWLElBbkJBLEFBY0EsRUFUVyxTQUN1QixpQkF4QmxDLFNBSUEsK0VBcUJpQixlQUNILFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc2V0Q2xvY2sgfSBmcm9tICcuLi9zdG9yZSdcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IENsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvY2xvY2snXG5pbXBvcnQgR3JhdGl0dWRlcyBmcm9tICcuLi9jb21wb25lbnRzL2dyYXRpdHVkZXMnXG5cblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcmVkdXhTdG9yZSwgcmVxIH0pIHtcbiAgICBjb25zdCBpc1NlcnZlciA9ICEhcmVxXG4gICAgLy8gRElTUEFUQ0ggQUNUSU9OUyBIRVJFIE9OTFkgV0lUSCAncmVkdXhTdG9yZS5kaXNwYXRjaCdcbiAgICByZWR1eFN0b3JlLmRpc3BhdGNoKHNldENsb2NrKGlzU2VydmVyKSlcblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gRElTUEFUQ0ggQUNUSU9OUyBIRVJFIEZST00gJ21hcERpc3BhdGNoVG9Qcm9wcydcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5wcm9wcy5zZXRDbG9jaygpLCAxMDAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZHNwYWNlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlbnRpb25cIj5HcmF0aXR1ZGUgVG9kYXk8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aW1lXCI+XG4gICAgICAgICAgPENsb2NrIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYnV0dG9uc1wiIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyYXRpdHVkZXNcIj5cbiAgICAgICAgICA8R3JhdGl0dWRlcyAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpc2lvblwiIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFppbGxhU2xhYjtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL1ppbGxhU2xhYi50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvZHlTdGFyTGlnaHQ7XG4gICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9Db2R5U3Rhci1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICB9XG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgfVxuICAgICAgLmhlYWRzcGFjZSB7XG4gICAgICAgIGhlaWdodDogMTByZW07XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmludGVudGlvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBaaWxsYVNsYWIsIEFyaWFsO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC50aW1lIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICB9XG4gICAgICAuZ3JhdGl0dWRlcyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogY29yYWw7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgc2V0Q2xvY2sgfVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBudWxsLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoSW5kZXgpIl19 */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req; // DISPATCH ACTIONS HERE ONLY WITH 'reduxStore.dispatch'

      reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["setClock"])(isServer));
      return {};
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapDispatchToProps = {
  setClock: _store__WEBPACK_IMPORTED_MODULE_8__["setClock"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(null, mapDispatchToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.65a818c0968076d0c439.hot-update.js.map