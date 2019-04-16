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
        className: "jsx-1480331372" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-1480331372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-1480331372" + " " + "headspace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1480331372" + " " + "intention",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Gratitude Today")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-1480331372" + " " + "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_clock__WEBPACK_IMPORTED_MODULE_10__["default"], {
        lastUpdate: lastUpdate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-1480331372" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-1480331372" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-1480331372" + " " + "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1480331372",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;}.headspace{height:10rem;background:lightgrey;position:relative;}.intention{font-family:ZillaSlab,Arial;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:2rem;color:white;}.time{position:relative;height:10rem;background:lightblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QzJCLEFBRytCLEFBSUksQUFJSixBQUliLEFBS0ksQUFLZ0IsQUFTWCxTQWxCUixJQUtXLEtBY1IsQ0FsQkcsR0FiMEMsQUFRNUQsSUFKaUUsRUFrQjdDLEdBVUcsR0FkSCxDQUpwQixXQVNVLE1BSlYsQUFjQSxFQVRXLFNBQ3VCLGlCQXhCbEMsU0FJQSwrRUFxQmlCLGVBQ0gsWUFDZCIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9HcmF0aXR1ZGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzZXRDbG9jayB9IGZyb20gJy4uL3N0b3JlJ1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IENsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvY2xvY2snXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlZHV4U3RvcmUsIHJlcSB9KSB7XG4gICAgY29uc3QgaXNTZXJ2ZXIgPSAhIXJlcVxuICAgIC8vIERJU1BBVENIIEFDVElPTlMgSEVSRSBPTkxZIFdJVEggJ3JlZHV4U3RvcmUuZGlzcGF0Y2gnXG4gICAgcmVkdXhTdG9yZS5kaXNwYXRjaChzZXRDbG9jayhpc1NlcnZlcikpXG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIERJU1BBVENIIEFDVElPTlMgSEVSRSBGUk9NICdtYXBEaXNwYXRjaFRvUHJvcHMnXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMucHJvcHMuc2V0Q2xvY2soKSwgMTAwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRzcGFjZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZW50aW9uXCI+R3JhdGl0dWRlIFRvZGF5PC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGltZVwiPlxuICAgICAgICAgIDxDbG9jayBsYXN0VXBkYXRlPXtsYXN0VXBkYXRlfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJ1dHRvbnNcIiAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmF0aXR1ZGVzXCIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlzaW9uXCIgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogWmlsbGFTbGFiO1xuICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvWmlsbGFTbGFiLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogQ29keVN0YXJMaWdodDtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL0NvZHlTdGFyLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICB9XG4gICAgICAuaGVhZHNwYWNlIHtcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuaW50ZW50aW9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFppbGxhU2xhYiwgQXJpYWw7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLnRpbWUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMTByZW07XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBzZXRDbG9jayB9XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICgpID0+IHtcbiAgY29uc3QgeyBsYXN0VXBkYXRlIH0gPSBzdGF0ZVxuICByZXR1cm4geyBsYXN0VXBkYXRlIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoSW5kZXgpIl19 */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
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

var mapStateToProps = function mapStateToProps() {
  var _state = state,
      lastUpdate = _state.lastUpdate;
  return {
    lastUpdate: lastUpdate
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.9ab6e09fae533881f4a9.hot-update.js.map