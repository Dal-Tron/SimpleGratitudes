webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, addGratitude, removeGratitude, updateGratitude, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGratitude", function() { return addGratitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGratitude", function() { return removeGratitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGratitude", function() { return updateGratitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);





var generateUniqueID = function generateUniqueID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

var initialState = {
  gratitudes: {
    "gratitude-0": ""
  }
};
var actionTypes = {
  ADD_GRATITUDE: 'ADD_GRATITUDE',
  UPDATE_GRATITUDE: 'UPDATE_GRATITUDE',
  REMOVE_GRATITUDE: 'REMOVE_GRATITUDE' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.ADD_GRATITUDE:
      var gratitude = {},
          gratitudeID = "gratitude-".concat(generateUniqueID());
      gratitude[gratitudeID] = action.gratitude;
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        gratitudes: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state.gratitudes, gratitude)
      });

    case actionTypes.UPDATE_GRATITUDE:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        gratitudes: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(state.gratitudes).reduce(function (result, key) {
          result[key] = action.gratitude.gratitude;
          return result;
        }, {})
      });

    case actionTypes.REMOVE_GRATITUDE:
      if (action.key !== "gratitude-0") {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
          gratitudes: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(state.gratitudes).entries(function (result, key) {
            if (key !== action.key) {
              result[key] = state.gratitudes[key];
            }

            return result;
          }, {})
        });
      }

    default:
      return state;
  }
}; // ACTIONS

var addGratitude = function addGratitude(gratitude) {
  return {
    type: actionTypes.ADD_GRATITUDE,
    gratitude: gratitude
  };
};
var removeGratitude = function removeGratitude(key) {
  return {
    type: actionTypes.REMOVE_GRATITUDE,
    key: key
  };
};
var updateGratitude = function updateGratitude(gratitude) {
  return {
    type: actionTypes.UPDATE_GRATITUDE,
    gratitude: gratitude
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])()));
}

/***/ })

})
//# sourceMappingURL=index.js.4aec679fc645b0ee2e81.hot-update.js.map