webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/pdf/docDefinition.js":
/*!*****************************************!*\
  !*** ./components/pdf/docDefinition.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var timestring = props.timestring,
      gratitudes = props.gratitudes,
      visions = props.visions;

  if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(gratitudes).length > 0) {
    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(gratitudes).map(function (key, index) {
      var gratitude = {
        text: gratitudes[key],
        style: ['section5'] // just start at index 5 as there are several headings (currently 4) inserted first

      };
      content.splice(index + 4, 0, gratitude);
    });
  }

  if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(visions).length > 0) {
    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(visions).map(function (key, index) {
      var vision = {
        text: visions[key],
        style: ['section5'] // visions are currently at the end, so we can just push

      };
      content.push(vision);
    });
  }

  var content = [{
    text: 'Grateful',
    style: ['header', 'section1']
  }, {
    text: 'Vision',
    style: ['header', 'section2']
  }, {
    text: "".concat(timestring),
    style: ['header', 'section3']
  }, {
    text: 'Gratitude',
    style: ['header', 'section4']
  }, {
    text: 'Vision',
    style: ['header', 'section4']
  }];
  return {
    info: {
      title: 'Grateful Vision',
      author: 'Grateful Vision',
      subject: 'Grateful Vision',
      keywords: 'Grateful Vision'
    },
    pageMargins: [0, 0, 0, 0],
    content: content,
    styles: {
      header: {
        fontSize: 22,
        alignment: 'center'
      },
      section1: {
        color: '#5190a5',
        font: 'Righteous',
        margin: [0, 20, 0, 0]
      },
      section2: {
        color: '#5190a5',
        font: 'Snippet'
      },
      section3: {
        color: '#5190a5',
        font: 'CodyStar-Light',
        margin: [0, 20, 0, 0]
      },
      section4: {
        color: '#5190a5',
        font: 'CodyStar-Light',
        margin: [0, 20, 0, 0]
      },
      section5: {
        color: '#5190a5',
        font: 'OpenSans-Regular',
        margin: [180, 20, 180, 0],
        fontSize: 14,
        alignment: 'center'
      }
    }
  };
});

/***/ })

})
//# sourceMappingURL=index.js.b724b545b2a153bfbdb2.hot-update.js.map