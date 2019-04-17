webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_clock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/clock */ "./components/clock.js");
/* harmony import */ var _components_gratitude__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/gratitude */ "./components/gratitude.js");








var _jsxFileName = "/Users/dallas/Documents/Gratitude/pages/index.js";








var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      time: '',
      gratitudes: [{
        gratitude: ""
      }]
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleAddGratitude", function () {
      _this.props.addGratitude({
        gratitude: ""
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.handleCreateTimeString();
      this.timer = setInterval(function () {
        return _this2.handleCreateTimeString();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "handleCreateTimeString",
    value: function handleCreateTimeString() {
      var time = new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()).toTimeString();
      var H = time.substr(0, 2);
      var h = H % 12 || 12;
      var ampm = H < 12 || H === 24 ? " AM" : " PM";
      var timestring = h + time.substr(2, 3) + ampm;
      this.setState({
        time: timestring
      });
    }
  }, {
    key: "render",
    value: function render() {
      var gratitudes = this.state.gratitudes;

      if (this.props.gratitudes) {
        gratitudes = this.props.gratitudes.map(function (g, i) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_gratitude__WEBPACK_IMPORTED_MODULE_14__["default"], {
            key: i,
            index: i,
            gratitude: g.gratitude,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          });
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2783414923" + " " + "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-2783414923",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "jsx-2783414923" + " " + "headspace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2783414923" + " " + "intention absCenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Gratitude Today")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "jsx-2783414923" + " " + "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_clock__WEBPACK_IMPORTED_MODULE_13__["default"], {
        time: this.state.time,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "jsx-2783414923" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "jsx-2783414923" + " " + "gratitudes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, gratitudes, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        onClick: this.handleAddGratitude,
        className: "jsx-2783414923" + " " + "add-gratitude",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "+ Gratitude")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "jsx-2783414923" + " " + "vision",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2783414923",
        __self: this
      }, "@font-face{font-family:ZillaSlab;src:url(\"/static/fonts/ZillaSlab.ttf\") format(\"truetype\");}@font-face{font-family:CodyStarLight;src:url(\"/static/fonts/CodyStar-Light.ttf\") format(\"truetype\");}*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow:scroll;}.absCenter{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.headspace{height:10rem;background:lightgrey;position:relative;}.intention{font-family:ZillaSlab,Arial;font-size:2rem;color:white;}.time{position:relative;height:10rem;background:lightblue;}.gratitudes{position:relative;background:lightgrey;}.add-gratitude{text-align:center;margin:2rem;font-family:CodyStarLight,Arial;color:white;font-size:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0dyYXRpdHVkZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RDJCLEFBRytCLEFBSUksQUFJSixBQUliLEFBS1MsQUFNTCxBQUtnQixBQUtYLEFBS0EsQUFJQSxTQTdCUixJQVdXLEtBTmIsQUFnQkssQUFLUSxBQUlULENBN0JJLEdBYjBDLEFBUTVELElBSmlFLEFBY3RELEVBVU0sRUFla0IsQ0FUWixHQVZILENBVnBCLEFBS2tDLElBb0JsQyxJQVZjLFNBSmQsQUFVQSxHQUxBLE9BY2MsWUFDSyxNQTVDbkIsU0FJQSxFQXlDQSxpREExQkEiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvR3JhdGl0dWRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYWRkR3JhdGl0dWRlIH0gZnJvbSAnLi4vc3RvcmUnXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDbG9jayBmcm9tICcuLi9jb21wb25lbnRzL2Nsb2NrJ1xuaW1wb3J0IEdyYXRpdHVkZSBmcm9tICcuLi9jb21wb25lbnRzL2dyYXRpdHVkZSdcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0aW1lOiAnJyxcbiAgICBncmF0aXR1ZGVzOiBbeyBncmF0aXR1ZGU6IFwiXCIgfV1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMuaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpLCAxMDAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgaGFuZGxlQ3JlYXRlVGltZVN0cmluZygpIHtcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoRGF0ZS5ub3coKSkudG9UaW1lU3RyaW5nKClcbiAgICBjb25zdCBIID0gdGltZS5zdWJzdHIoMCwgMilcbiAgICBjb25zdCBoID0gSCAlIDEyIHx8IDEyXG4gICAgY29uc3QgYW1wbSA9IChIIDwgMTIgfHwgSCA9PT0gMjQpID8gXCIgQU1cIiA6IFwiIFBNXCJcbiAgICBjb25zdCB0aW1lc3RyaW5nID0gaCArIHRpbWUuc3Vic3RyKDIsIDMpICsgYW1wbVxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lOiB0aW1lc3RyaW5nIH0pXG4gIH1cblxuICBoYW5kbGVBZGRHcmF0aXR1ZGUgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5hZGRHcmF0aXR1ZGUoeyBncmF0aXR1ZGU6IFwiXCIgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZ3JhdGl0dWRlcyA9IHRoaXMuc3RhdGUuZ3JhdGl0dWRlc1xuICAgIGlmICh0aGlzLnByb3BzLmdyYXRpdHVkZXMpIHtcbiAgICAgIGdyYXRpdHVkZXMgPSB0aGlzLnByb3BzLmdyYXRpdHVkZXMubWFwKChnLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiA8R3JhdGl0dWRlIGtleT17aX0gaW5kZXg9e2l9IGdyYXRpdHVkZT17Zy5ncmF0aXR1ZGV9IC8+XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRzcGFjZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZW50aW9uIGFic0NlbnRlclwiPkdyYXRpdHVkZSBUb2RheTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpbWVcIj5cbiAgICAgICAgICA8Q2xvY2sgdGltZT17dGhpcy5zdGF0ZS50aW1lfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmF0aXR1ZGVzXCI+XG4gICAgICAgICAge2dyYXRpdHVkZXN9XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZEdyYXRpdHVkZX0gY2xhc3NOYW1lPVwiYWRkLWdyYXRpdHVkZVwiPisgR3JhdGl0dWRlPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlzaW9uXCIgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogWmlsbGFTbGFiO1xuICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvWmlsbGFTbGFiLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogQ29keVN0YXJMaWdodDtcbiAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL0NvZHlTdGFyLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICB9XG4gICAgICAuYWJzQ2VudGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cbiAgICAgIC5oZWFkc3BhY2Uge1xuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5pbnRlbnRpb24ge1xuICAgICAgICBmb250LWZhbWlseTogWmlsbGFTbGFiLCBBcmlhbDtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAudGltZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgfVxuICAgICAgLmdyYXRpdHVkZXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICAgIH1cbiAgICAgIC5hZGQtZ3JhdGl0dWRlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb2R5U3RhckxpZ2h0LCBBcmlhbDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICBjb25zdCB7IGdyYXRpdHVkZXMgfSA9IHN0YXRlXG4gIHJldHVybiB7IGdyYXRpdHVkZXMgfVxufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBhZGRHcmF0aXR1ZGUgfVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmRleCkiXX0= */\n/*@ sourceURL=/Users/dallas/Documents/Gratitude/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var gratitudes = state.gratitudes;
  return {
    gratitudes: gratitudes
  };
};

var mapDispatchToProps = {
  addGratitude: _store__WEBPACK_IMPORTED_MODULE_11__["addGratitude"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.f59e9be6dbefdeb4c548.hot-update.js.map