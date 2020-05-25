webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/reducers/currentUser */ \"./redux/reducers/currentUser.js\");\n/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/reducers/token */ \"./redux/reducers/token.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _navBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navBar/NavBar */ \"./components/navBar/NavBar.js\");\n/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/schemas/queries */ \"./src/schemas/queries.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\Layout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nconst Layout = props => {\n  _s();\n\n  if (false) {}else {\n    const {\n      0: query,\n      1: setQuery\n    } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n    const onQueryChange = event => {\n      setQuery(event.target.value);\n    };\n\n    if (localStorage.getItem('token') && props.token === null) {\n      props.setToken(localStorage.getItem('token'));\n    }\n\n    const currentUserId = props.currentUser ? props.currentUser._id : 'thisisfake';\n    const pendingNotifsQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_7__[\"PENDING_NOTIFS\"], {\n      variables: {\n        userId: currentUserId\n      }\n    });\n    const currentUserUN = localStorage.getItem('username') ? localStorage.getItem('username') : 'thisisfake';\n    const userQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_7__[\"FIND_USER\"], {\n      variables: {\n        username: currentUserUN\n      }\n    });\n    const userNotifs = props.currentUser ? props.currentUser.notifications.map(n => n._id) : [];\n    const notifsQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_7__[\"LIST_OF_NOTIFICATIONS\"], {\n      variables: {\n        notifications: userNotifs\n      }\n    });\n\n    const notifsQueryConditions = () => {\n      if (!notifsQuery.data) return null;\n      if (!props.currentUser) return null;\n      if (notifsQuery.loading) return null;\n      if (notifsQuery.data.listOfNotifications.length < 1) return null;\n      if (!props.currentUser.notifications.length) return null;\n      if (props.currentUser.notifications[0].userFrom) return null;\n      return notifsQuery.data.listOfNotifications;\n    };\n\n    const pendingNotifsConditions = () => {\n      if (!pendingNotifsQuery.data) return null;\n      if (props.currentUser && props.currentUser.pendingNotifications) return null;\n      return pendingNotifsQuery.data.searchAwaitingNotifs;\n    };\n\n    const userConditions = (query, reducer) => {\n      if (!query.data) return null;\n      if (!query.data.findUser) return null;\n      if (reducer) return null;\n      return query.data.findUser;\n    };\n\n    const notifsFilled = notifsQueryConditions();\n    const pendingNotifs = pendingNotifsConditions();\n    const user = userConditions(userQuery, props.currentUser);\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n      if (user) {\n        props.setCurrentUser(user);\n      }\n\n      if (pendingNotifs) {\n        props.setPendingNotifications(pendingNotifs);\n      }\n\n      if (notifsFilled) {\n        props.setCurrentUserNotifications(notifsFilled);\n      }\n    }, [notifsFilled, props.setCurrentUserNotifications, user, props.setCurrentUser, pendingNotifs, props.setPendingNotifications, props]);\n    return __jsx(\"div\", {\n      className: \"wrapper\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 13\n      }\n    }, __jsx(_navBar_NavBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      query: query,\n      onQueryChange: onQueryChange,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }\n    }), props.children);\n  }\n};\n\n_s(Layout, \"XhbOX9NbocQPNhMRMrGg+t/wrFA=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Layout;\n\nconst mapStateToProps = state => {\n  return {\n    token: state.token,\n    currentUser: state.currentUser\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    setToken: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_2__[\"setToken\"], dispatch),\n    setCurrentUser: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentUser\"], dispatch),\n    setPendingNotifications: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setPendingNotifications\"], dispatch),\n    setCurrentUserNotifications: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentUserNotifications\"], dispatch)\n  };\n};\n\n_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentUser\"];\n_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setPendingNotifications\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Layout));\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwicXVlcnkiLCJzZXRRdWVyeSIsInVzZVN0YXRlIiwib25RdWVyeUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJzZXRUb2tlbiIsImN1cnJlbnRVc2VySWQiLCJjdXJyZW50VXNlciIsIl9pZCIsInBlbmRpbmdOb3RpZnNRdWVyeSIsInVzZVF1ZXJ5IiwiUEVORElOR19OT1RJRlMiLCJ2YXJpYWJsZXMiLCJ1c2VySWQiLCJjdXJyZW50VXNlclVOIiwidXNlclF1ZXJ5IiwiRklORF9VU0VSIiwidXNlcm5hbWUiLCJ1c2VyTm90aWZzIiwibm90aWZpY2F0aW9ucyIsIm1hcCIsIm4iLCJub3RpZnNRdWVyeSIsIkxJU1RfT0ZfTk9USUZJQ0FUSU9OUyIsIm5vdGlmc1F1ZXJ5Q29uZGl0aW9ucyIsImRhdGEiLCJsb2FkaW5nIiwibGlzdE9mTm90aWZpY2F0aW9ucyIsImxlbmd0aCIsInVzZXJGcm9tIiwicGVuZGluZ05vdGlmc0NvbmRpdGlvbnMiLCJwZW5kaW5nTm90aWZpY2F0aW9ucyIsInNlYXJjaEF3YWl0aW5nTm90aWZzIiwidXNlckNvbmRpdGlvbnMiLCJyZWR1Y2VyIiwiZmluZFVzZXIiLCJub3RpZnNGaWxsZWQiLCJwZW5kaW5nTm90aWZzIiwidXNlciIsInVzZUVmZmVjdCIsInNldEN1cnJlbnRVc2VyIiwic2V0UGVuZGluZ05vdGlmaWNhdGlvbnMiLCJzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMiLCJjaGlsZHJlbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFD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O0FBTUg7QUFDSixDQWpFRDs7R0FBTWxELE07VUFZNkJpQiw0RCxFQUlUQSw0RCxFQUlFQSw0RDs7O0tBcEJ0QmpCLE07O0FBbUVOLE1BQU1tRCxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxTQUFPO0FBQ0F6QyxTQUFLLEVBQUV5QyxLQUFLLENBQUN6QyxLQURiO0FBRUFHLGVBQVcsRUFBRXNDLEtBQUssQ0FBQ3RDO0FBRm5CLEdBQVA7QUFJQSxDQUxEOztBQU1BLE1BQU11QyxrQkFBa0IsR0FBSUMsUUFBRCxJQUFjO0FBQ3JDLFNBQU87QUFDSDFDLFlBQVEsRUFBRTJDLGdFQUFrQixDQUFDM0MsOERBQUQsRUFBVzBDLFFBQVgsQ0FEekI7QUFFSFAsa0JBQWMsRUFBRVEsZ0VBQWtCLENBQUNSLDBFQUFELEVBQWlCTyxRQUFqQixDQUYvQjtBQUdITiwyQkFBdUIsRUFBRU8sZ0VBQWtCLENBQUNQLG1GQUFELEVBQTBCTSxRQUExQixDQUh4QztBQUlITCwrQkFBMkIsRUFBRU0sZ0VBQWtCLENBQUNOLHVGQUFELEVBQThCSyxRQUE5QjtBQUo1QyxHQUFQO0FBTUgsQ0FQRDs7QUFRQVAsMEVBQWM7QUFDZEMsbUZBQXVCO0FBRVJRLDBIQUFPLENBQ2xCTCxlQURrQixFQUVsQkUsa0JBRmtCLENBQVAsQ0FHYnJELE1BSGEsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIsIHNldFBlbmRpbmdOb3RpZmljYXRpb25zLCBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBGSU5EX1VTRVIsIFBFTkRJTkdfTk9USUZTLCBMSVNUX09GX05PVElGSUNBVElPTlMgfSBmcm9tICcuLi9zcmMvc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gPGgxPlJlbmRlcmluZzwvaDE+XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgICAgICBjb25zdCBvblF1ZXJ5Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgJiYgcHJvcHMudG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICBwcm9wcy5zZXRUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIuX2lkIDogJ3RoaXNpc2Zha2UnXHJcbiAgICAgICAgY29uc3QgcGVuZGluZ05vdGlmc1F1ZXJ5ID0gdXNlUXVlcnkoUEVORElOR19OT1RJRlMsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiAge3VzZXJJZDogY3VycmVudFVzZXJJZH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyVU4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpIDogJ3RoaXNpc2Zha2UnXHJcbiAgICAgICAgY29uc3QgdXNlclF1ZXJ5ID0gdXNlUXVlcnkoRklORF9VU0VSLCB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBjdXJyZW50VXNlclVOfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgdXNlck5vdGlmcyA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCkgOiBbXVxyXG4gICAgICAgIGNvbnN0IG5vdGlmc1F1ZXJ5ID0gdXNlUXVlcnkoTElTVF9PRl9OT1RJRklDQVRJT05TLCB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbnM6IHVzZXJOb3RpZnN9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBub3RpZnNRdWVyeUNvbmRpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbm90aWZzUXVlcnkuZGF0YSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKCFwcm9wcy5jdXJyZW50VXNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKG5vdGlmc1F1ZXJ5LmxvYWRpbmcpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChub3RpZnNRdWVyeS5kYXRhLmxpc3RPZk5vdGlmaWNhdGlvbnMubGVuZ3RoIDwgMSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKCFwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLmxlbmd0aCkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnNbMF0udXNlckZyb20pIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBub3RpZnNRdWVyeS5kYXRhLmxpc3RPZk5vdGlmaWNhdGlvbnNcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGVuZGluZ05vdGlmc0NvbmRpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcGVuZGluZ05vdGlmc1F1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jdXJyZW50VXNlciAmJiBwcm9wcy5jdXJyZW50VXNlci5wZW5kaW5nTm90aWZpY2F0aW9ucykgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIHBlbmRpbmdOb3RpZnNRdWVyeS5kYXRhLnNlYXJjaEF3YWl0aW5nTm90aWZzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXJDb25kaXRpb25zID0gKHF1ZXJ5LCByZWR1Y2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcXVlcnkuZGF0YSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKCFxdWVyeS5kYXRhLmZpbmRVc2VyKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAocmVkdWNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5LmRhdGEuZmluZFVzZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm90aWZzRmlsbGVkID0gbm90aWZzUXVlcnlDb25kaXRpb25zKClcclxuICAgICAgICBjb25zdCBwZW5kaW5nTm90aWZzID0gcGVuZGluZ05vdGlmc0NvbmRpdGlvbnMoKVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2VyQ29uZGl0aW9ucyh1c2VyUXVlcnksIHByb3BzLmN1cnJlbnRVc2VyKVxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlcih1c2VyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwZW5kaW5nTm90aWZzKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRQZW5kaW5nTm90aWZpY2F0aW9ucyhwZW5kaW5nTm90aWZzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub3RpZnNGaWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhub3RpZnNGaWxsZWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbbm90aWZzRmlsbGVkLCBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIHVzZXIsIHByb3BzLnNldEN1cnJlbnRVc2VyLCBwZW5kaW5nTm90aWZzLCBwcm9wcy5zZXRQZW5kaW5nTm90aWZpY2F0aW9ucywgcHJvcHNdKVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2QmFyIHF1ZXJ5PXtxdWVyeX0gb25RdWVyeUNoYW5nZT17b25RdWVyeUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuXHR9XHJcbn1cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0VG9rZW4sIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRDdXJyZW50VXNlcjogYmluZEFjdGlvbkNyZWF0b3JzKHNldEN1cnJlbnRVc2VyLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0UGVuZGluZ05vdGlmaWNhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRQZW5kaW5nTm90aWZpY2F0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcbnNldEN1cnJlbnRVc2VyXHJcbnNldFBlbmRpbmdOb3RpZmljYXRpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoTGF5b3V0KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})