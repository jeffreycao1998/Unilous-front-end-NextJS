webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/newNavBar/user/UserUtilities.js":
/*!****************************************************!*\
  !*** ./components/newNavBar/user/UserUtilities.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/newNavBar.module.css */ \"./styles/newNavBar.module.css\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/reducers/token */ \"./redux/reducers/token.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\newNavBar\\\\user\\\\UserUtilities.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Signed = props => {\n  _s();\n\n  const {\n    0: userState,\n    1: setUserState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handleUserState = state => {\n    if (state === userState) {\n      setUserState(false);\n    } else {\n      setUserState(state);\n    }\n  };\n\n  const showUserDD = userState ? {\n    display: 'block'\n  } : {\n    display: 'none'\n  };\n  const showInDD = userState ? userState === 'notification' ? __jsx(Notifications, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 40\n    }\n  }) : __jsx(UserUtilities, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 60\n    }\n  }) : null;\n\n  const logout = () => {\n    localStorage.clear();\n    props.clearToken();\n  };\n\n  const username = props.currentUser ? props.currentuser.username : '';\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, username), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/user/[username]\",\n    as: `/user/${decodeURIComponent(props.currentUser.username)}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"neutralize-link\",\n    style: {\n      color: 'white'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 73\n    }\n  }, \"account details\"))), __jsx(\"h3\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,\n    onClick: () => logout(),\n    style: {\n      color: 'rgb(254,52,77)'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"sign out\"));\n};\n\n_s(Signed, \"nO6LbD8Uv9I3kvQbWjVez6I5k/k=\");\n\n_c = Signed;\n\nconst mapStateToProps = state => {\n  return {\n    currentUser: state.currentUser,\n    token: state.token // alertNotif: state.alertNotif\n\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    clearToken: Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"bindActionCreators\"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_4__[\"clearToken\"], dispatch) // resetAlert: bindActionCreators(resetAlert, dispatch),\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Signed));\n\nvar _c;\n\n$RefreshReg$(_c, \"Signed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci91c2VyL1VzZXJVdGlsaXRpZXMuanM/M2NmNiJdLCJuYW1lcyI6WyJTaWduZWQiLCJwcm9wcyIsInVzZXJTdGF0ZSIsInNldFVzZXJTdGF0ZSIsInVzZVN0YXRlIiwiaGFuZGxlVXNlclN0YXRlIiwic3RhdGUiLCJzaG93VXNlckREIiwiZGlzcGxheSIsInNob3dJbkREIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJjbGVhclRva2VuIiwidXNlcm5hbWUiLCJjdXJyZW50VXNlciIsImN1cnJlbnR1c2VyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29sb3IiLCJOQiIsImRkT3B0aW9uIiwibWFwU3RhdGVUb1Byb3BzIiwidG9rZW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQUE7O0FBQ3RCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxLQUFELENBQTFDOztBQUNBLFFBQU1DLGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQy9CLFFBQUlBLEtBQUssS0FBS0osU0FBZCxFQUF5QjtBQUFDQyxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUFvQixLQUE5QyxNQUNLO0FBQUNBLGtCQUFZLENBQUNHLEtBQUQsQ0FBWjtBQUFvQjtBQUM3QixHQUhEOztBQUlBLFFBQU1DLFVBQVUsR0FBR0wsU0FBUyxHQUFHO0FBQUNNLFdBQU8sRUFBRTtBQUFWLEdBQUgsR0FBd0I7QUFBQ0EsV0FBTyxFQUFFO0FBQVYsR0FBcEQ7QUFDQSxRQUFNQyxRQUFRLEdBQUdQLFNBQVMsR0FDdEJBLFNBQVMsS0FBSyxjQUFkLEdBQStCLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQS9CLEdBQW1ELE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRDdCLEdBRXhCLElBRkY7O0FBR0EsUUFBTVEsTUFBTSxHQUFHLE1BQU07QUFDakJDLGdCQUFZLENBQUNDLEtBQWI7QUFDQVgsU0FBSyxDQUFDWSxVQUFOO0FBQ0gsR0FIRDs7QUFJQSxRQUFNQyxRQUFRLEdBQUdiLEtBQUssQ0FBQ2MsV0FBTixHQUFvQmQsS0FBSyxDQUFDZSxXQUFOLENBQWtCRixRQUF0QyxHQUFpRCxFQUFsRTtBQUNBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsUUFBTCxDQURKLEVBRUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxrQkFBWDtBQUE4QixNQUFFLEVBQUcsU0FBUUcsa0JBQWtCLENBQUNoQixLQUFLLENBQUNjLFdBQU4sQ0FBa0JELFFBQW5CLENBQTZCLEVBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUErQixTQUFLLEVBQUU7QUFBQ0ksV0FBSyxFQUFFO0FBQVIsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3RDtBQUFJLGFBQVMsRUFBRUMsbUVBQUUsQ0FBQ0MsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBeEQsQ0FESixDQUZKLEVBS0k7QUFBSSxhQUFTLEVBQUVELG1FQUFFLENBQUNDLFFBQWxCO0FBQTRCLFdBQU8sRUFBRSxNQUFNVixNQUFNLEVBQWpEO0FBQXFELFNBQUssRUFBRTtBQUFDUSxXQUFLLEVBQUU7QUFBUixLQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLENBREo7QUFTSCxDQXhCRDs7R0FBTWxCLE07O0tBQUFBLE07O0FBMEJOLE1BQU1xQixlQUFlLEdBQUlmLEtBQUQsSUFBVztBQUNsQyxTQUFPO0FBQ0FTLGVBQVcsRUFBRVQsS0FBSyxDQUFDUyxXQURuQjtBQUVBTyxTQUFLLEVBQUVoQixLQUFLLENBQUNnQixLQUZiLENBR0E7O0FBSEEsR0FBUDtBQUtBLENBTkQ7O0FBUUEsTUFBTUMsa0JBQWtCLEdBQUlDLFFBQUQsSUFBYztBQUNyQyxTQUFPO0FBQ0hYLGNBQVUsRUFBRVksZ0VBQWtCLENBQUNaLGdFQUFELEVBQWFXLFFBQWIsQ0FEM0IsQ0FFSDs7QUFGRyxHQUFQO0FBSUgsQ0FMRDs7QUFPZUUsMEhBQU8sQ0FDbEJMLGVBRGtCLEVBRWxCRSxrQkFGa0IsQ0FBUCxDQUdidkIsTUFIYSxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uZXdOYXZCYXIvdXNlci9Vc2VyVXRpbGl0aWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtjbGVhclRva2VufSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5cclxuY29uc3QgU2lnbmVkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBoYW5kbGVVc2VyU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHVzZXJTdGF0ZSkge3NldFVzZXJTdGF0ZShmYWxzZSl9XHJcbiAgICAgICAgZWxzZSB7c2V0VXNlclN0YXRlKHN0YXRlKX1cclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dVc2VyREQgPSB1c2VyU3RhdGUgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG4gICAgY29uc3Qgc2hvd0luREQgPSB1c2VyU3RhdGUgPyBcclxuICAgICAgICB1c2VyU3RhdGUgPT09ICdub3RpZmljYXRpb24nID8gPE5vdGlmaWNhdGlvbnMgLz4gOiA8VXNlclV0aWxpdGllcyAvPlxyXG4gICAgOiBudWxsXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBwcm9wcy5jbGVhclRva2VuKClcclxuICAgIH1cclxuICAgIGNvbnN0IHVzZXJuYW1lID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50dXNlci51c2VybmFtZSA6ICcnXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj57dXNlcm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZGVjb2RlVVJJQ29tcG9uZW50KHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT48aDMgY2xhc3NOYW1lPXtOQi5kZE9wdGlvbn0+YWNjb3VudCBkZXRhaWxzPC9oMz48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17TkIuZGRPcHRpb259IG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfSBzdHlsZT17e2NvbG9yOiAncmdiKDI1NCw1Miw3NyknfX0+c2lnbiBvdXQ8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgLy8gYWxlcnROb3RpZjogc3RhdGUuYWxlcnROb3RpZlxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyVG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhjbGVhclRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgLy8gcmVzZXRBbGVydDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0QWxlcnQsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFNpZ25lZCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/newNavBar/user/UserUtilities.js\n");

/***/ })

})