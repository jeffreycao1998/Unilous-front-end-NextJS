webpackHotUpdate("static\\development\\pages\\postformpage.js",{

/***/ "./components/newNavBar/user/UserUtilities.js":
/*!****************************************************!*\
  !*** ./components/newNavBar/user/UserUtilities.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/newNavBar.module.css */ \"./styles/newNavBar.module.css\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/reducers/token */ \"./redux/reducers/token.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\newNavBar\\\\user\\\\UserUtilities.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Signed = props => {\n  _s();\n\n  const {\n    0: userState,\n    1: setUserState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handleUserState = state => {\n    if (state === userState) {\n      setUserState(false);\n    } else {\n      setUserState(state);\n    }\n  };\n\n  const showUserDD = userState ? {\n    display: 'block'\n  } : {\n    display: 'none'\n  };\n  const showInDD = userState ? userState === 'notification' ? __jsx(Notifications, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 40\n    }\n  }) : __jsx(UserUtilities, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 60\n    }\n  }) : null;\n\n  const logout = () => {\n    localStorage.clear();\n    props.clearToken();\n  };\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, \"SebastianSosa\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/user/[username]\",\n    as: `/user/${decodeURIComponent(props.currentUser.username)}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"neutralize-link\",\n    style: {\n      color: 'white'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 73\n    }\n  }, \"account details\"))), __jsx(\"h3\", {\n    onClick: () => logout(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"sign out\"));\n};\n\n_s(Signed, \"nO6LbD8Uv9I3kvQbWjVez6I5k/k=\");\n\n_c = Signed;\n\nconst mapStateToProps = state => {\n  return {\n    currentUser: state.currentUser,\n    token: state.token // alertNotif: state.alertNotif\n\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    clearToken: Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"bindActionCreators\"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_4__[\"clearToken\"], dispatch) // resetAlert: bindActionCreators(resetAlert, dispatch),\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Signed));\n\nvar _c;\n\n$RefreshReg$(_c, \"Signed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci91c2VyL1VzZXJVdGlsaXRpZXMuanM/M2NmNiJdLCJuYW1lcyI6WyJTaWduZWQiLCJwcm9wcyIsInVzZXJTdGF0ZSIsInNldFVzZXJTdGF0ZSIsInVzZVN0YXRlIiwiaGFuZGxlVXNlclN0YXRlIiwic3RhdGUiLCJzaG93VXNlckREIiwiZGlzcGxheSIsInNob3dJbkREIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJjbGVhclRva2VuIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY3VycmVudFVzZXIiLCJ1c2VybmFtZSIsImNvbG9yIiwiTkIiLCJkZE9wdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInRva2VuIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUFBOztBQUN0QixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQzs7QUFDQSxRQUFNQyxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUMvQixRQUFJQSxLQUFLLEtBQUtKLFNBQWQsRUFBeUI7QUFBQ0Msa0JBQVksQ0FBQyxLQUFELENBQVo7QUFBb0IsS0FBOUMsTUFDSztBQUFDQSxrQkFBWSxDQUFDRyxLQUFELENBQVo7QUFBb0I7QUFDN0IsR0FIRDs7QUFJQSxRQUFNQyxVQUFVLEdBQUdMLFNBQVMsR0FBRztBQUFDTSxXQUFPLEVBQUU7QUFBVixHQUFILEdBQXdCO0FBQUNBLFdBQU8sRUFBRTtBQUFWLEdBQXBEO0FBQ0EsUUFBTUMsUUFBUSxHQUFHUCxTQUFTLEdBQ3RCQSxTQUFTLEtBQUssY0FBZCxHQUErQixNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEvQixHQUFtRCxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQ3QixHQUV4QixJQUZGOztBQUdBLFFBQU1RLE1BQU0sR0FBRyxNQUFNO0FBQ2pCQyxnQkFBWSxDQUFDQyxLQUFiO0FBQ0FYLFNBQUssQ0FBQ1ksVUFBTjtBQUNILEdBSEQ7O0FBSUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsa0JBQVg7QUFBOEIsTUFBRSxFQUFHLFNBQVFDLGtCQUFrQixDQUFDYixLQUFLLENBQUNjLFdBQU4sQ0FBa0JDLFFBQW5CLENBQTZCLEVBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUErQixTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFFO0FBQVIsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3RDtBQUFJLGFBQVMsRUFBRUMsbUVBQUUsQ0FBQ0MsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBeEQsQ0FESixDQUZKLEVBS0k7QUFBSSxXQUFPLEVBQUUsTUFBTVQsTUFBTSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLENBREo7QUFTSCxDQXZCRDs7R0FBTVYsTTs7S0FBQUEsTTs7QUF5Qk4sTUFBTW9CLGVBQWUsR0FBSWQsS0FBRCxJQUFXO0FBQ2xDLFNBQU87QUFDQVMsZUFBVyxFQUFFVCxLQUFLLENBQUNTLFdBRG5CO0FBRUFNLFNBQUssRUFBRWYsS0FBSyxDQUFDZSxLQUZiLENBR0E7O0FBSEEsR0FBUDtBQUtBLENBTkQ7O0FBUUEsTUFBTUMsa0JBQWtCLEdBQUlDLFFBQUQsSUFBYztBQUNyQyxTQUFPO0FBQ0hWLGNBQVUsRUFBRVcsZ0VBQWtCLENBQUNYLGdFQUFELEVBQWFVLFFBQWIsQ0FEM0IsQ0FFSDs7QUFGRyxHQUFQO0FBSUgsQ0FMRDs7QUFPZUUsMEhBQU8sQ0FDbEJMLGVBRGtCLEVBRWxCRSxrQkFGa0IsQ0FBUCxDQUdidEIsTUFIYSxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uZXdOYXZCYXIvdXNlci9Vc2VyVXRpbGl0aWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtjbGVhclRva2VufSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5cclxuY29uc3QgU2lnbmVkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBoYW5kbGVVc2VyU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHVzZXJTdGF0ZSkge3NldFVzZXJTdGF0ZShmYWxzZSl9XHJcbiAgICAgICAgZWxzZSB7c2V0VXNlclN0YXRlKHN0YXRlKX1cclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dVc2VyREQgPSB1c2VyU3RhdGUgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG4gICAgY29uc3Qgc2hvd0luREQgPSB1c2VyU3RhdGUgPyBcclxuICAgICAgICB1c2VyU3RhdGUgPT09ICdub3RpZmljYXRpb24nID8gPE5vdGlmaWNhdGlvbnMgLz4gOiA8VXNlclV0aWxpdGllcyAvPlxyXG4gICAgOiBudWxsXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBwcm9wcy5jbGVhclRva2VuKClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlNlYmFzdGlhblNvc2E8L2gyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtkZWNvZGVVUklDb21wb25lbnQocHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PjxoMyBjbGFzc05hbWU9e05CLmRkT3B0aW9ufT5hY2NvdW50IGRldGFpbHM8L2gzPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9PnNpZ24gb3V0PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIC8vIGFsZXJ0Tm90aWY6IHN0YXRlLmFsZXJ0Tm90aWZcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhclRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2xlYXJUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIC8vIHJlc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldEFsZXJ0LCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShTaWduZWQpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/newNavBar/user/UserUtilities.js\n");

/***/ })

})