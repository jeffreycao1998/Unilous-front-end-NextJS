webpackHotUpdate("static\\development\\pages\\user\\[username].js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/reducers/currentUser */ \"./redux/reducers/currentUser.js\");\n/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/reducers/token */ \"./redux/reducers/token.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _newNavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newNavBar/NavBar */ \"./components/newNavBar/NavBar.js\");\n/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../schemas/queries */ \"./schemas/queries.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\Layout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n // import NavBar from './navBar/NavBar'\n\n\n\n\n\n\nconst Layout = props => {\n  _s();\n\n  const {\n    0: query,\n    1: setQuery\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const onQueryChange = event => {\n    setQuery(event.target.value);\n  };\n\n  if (false) {}else {\n    if (localStorage.getItem('token') && props.token === null) {\n      props.setToken(localStorage.getItem('token'));\n    }\n\n    const currentUserId = props.currentUser ? props.currentUser._id : 'thisisfake';\n    const pendingNotifsQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_schemas_queries__WEBPACK_IMPORTED_MODULE_7__[\"PENDING_NOTIFS\"], {\n      variables: {\n        userId: currentUserId\n      }\n    });\n    const currentUserUN = localStorage.getItem('username') ? localStorage.getItem('username') : 'thisisfake';\n    const userQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_schemas_queries__WEBPACK_IMPORTED_MODULE_7__[\"FIND_USER\"], {\n      variables: {\n        username: currentUserUN\n      }\n    });\n    const userNotifs = props.currentUser ? props.currentUser.notifications.map(n => n._id) : [];\n    console.log(userNotifs);\n    const notifsQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_schemas_queries__WEBPACK_IMPORTED_MODULE_7__[\"LIST_OF_NOTIFICATIONS\"], {\n      variables: {\n        notifications: userNotifs\n      }\n    });\n\n    const notifsQueryConditions = () => {\n      if (!notifsQuery.data) return null;\n      if (!props.currentUser) return null;\n      if (notifsQuery.loading) return null;\n      if (notifsQuery.data.listOfNotifications.length < 1) return null;\n      if (!props.currentUser.notifications.length) return null;\n      if (props.currentUser.notifications[0].userFrom) return null;\n      return notifsQuery.data.listOfNotifications;\n    };\n\n    const pendingNotifsConditions = () => {\n      if (!pendingNotifsQuery.data) return null;\n      if (props.currentUser && props.currentUser.pendingNotifications) return null;\n      return pendingNotifsQuery.data.searchAwaitingNotifs;\n    };\n\n    const userConditions = (query, reducer) => {\n      if (!query.data) return null;\n      if (!query.data.findUser) return null;\n      if (reducer) return null;\n      return query.data.findUser;\n    };\n\n    const notifsFilled = notifsQueryConditions();\n    const pendingNotifs = pendingNotifsConditions();\n    const user = userConditions(userQuery, props.currentUser);\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n      if (user) {\n        props.setCurrentUser(user);\n      }\n\n      if (pendingNotifs) {\n        props.setPendingNotifications(pendingNotifs);\n      }\n\n      if (notifsFilled) {\n        props.setCurrentUserNotifications(notifsFilled);\n      }\n    }, [notifsFilled, props.setCurrentUserNotifications, user, props.setCurrentUser, pendingNotifs, props.setPendingNotifications, props]);\n    return __jsx(\"div\", {\n      className: \"wrapper\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 13\n      }\n    }, __jsx(_newNavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      query: query,\n      onQueryChange: onQueryChange,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 17\n      }\n    }), props.children);\n  }\n};\n\n_s(Layout, \"XhbOX9NbocQPNhMRMrGg+t/wrFA=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Layout;\n\nconst mapStateToProps = state => {\n  return {\n    token: state.token,\n    currentUser: state.currentUser\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    setToken: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_2__[\"setToken\"], dispatch),\n    setCurrentUser: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentUser\"], dispatch),\n    setPendingNotifications: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setPendingNotifications\"], dispatch),\n    setCurrentUserNotifications: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentUserNotifications\"], dispatch)\n  };\n};\n\n_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentUser\"];\n_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setPendingNotifications\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Layout));\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwicXVlcnkiLCJzZXRRdWVyeSIsInVzZVN0YXRlIiwib25RdWVyeUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJzZXRUb2tlbiIsImN1cnJlbnRVc2VySWQiLCJjdXJyZW50VXNlciIsIl9pZCIsInBlbmRpbmdOb3RpZnNRdWVyeSIsInVzZVF1ZXJ5IiwiUEVORElOR19OT1RJRlMiLCJ2YXJpYWJsZXMiLCJ1c2VySWQiLCJjdXJyZW50VXNlclVOIiwidXNlclF1ZXJ5IiwiRklORF9VU0VSIiwidXNlcm5hbWUiLCJ1c2VyTm90aWZzIiwibm90aWZpY2F0aW9ucyIsIm1hcCIsIm4iLCJjb25zb2xlIiwibG9nIiwibm90aWZzUXVlcnkiLCJMSVNUX09GX05PVElGSUNBVElPTlMiLCJub3RpZnNRdWVyeUNvbmRpdGlvbnMiLCJkYXRhIiwibG9hZGluZyIsImxpc3RPZk5vdGlmaWNhdGlvbnMiLCJsZW5ndGgiLCJ1c2VyRnJvbSIsInBlbmRpbmdOb3RpZnNDb25kaXRpb25zIiwicGVuZGluZ05vdGlmaWNhdGlvbnMiLCJzZWFyY2hBd2FpdGluZ05vdGlmcyIsInVzZXJDb25kaXRpb25zIiwicmVkdWNlciIsImZpbmRVc2VyIiwibm90aWZzRmlsbGVkIiwicGVuZGluZ05vdGlmcyIsInVzZXIiLCJ1c2VFZmZlY3QiLCJzZXRDdXJyZW50VXNlciIsInNldFBlbmRpbmdOb3RpZmljYXRpb25zIiwic2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIiwiY2hpbGRyZW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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QUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFS0osS0FBSyxDQUFDbUQsUUFGWCxDQURKO0FBTUg7QUFDSixDQXZFRDs7R0FBTXBELE07VUFpQjZCaUIsNEQsRUFJVEEsNEQsRUFLRUEsNEQ7OztLQTFCdEJqQixNOztBQXlFTixNQUFNcUQsZUFBZSxHQUFJQyxLQUFELElBQVc7QUFDbEMsU0FBTztBQUNBM0MsU0FBSyxFQUFFMkMsS0FBSyxDQUFDM0MsS0FEYjtBQUVBRyxlQUFXLEVBQUV3QyxLQUFLLENBQUN4QztBQUZuQixHQUFQO0FBSUEsQ0FMRDs7QUFNQSxNQUFNeUMsa0JBQWtCLEdBQUlDLFFBQUQsSUFBYztBQUNyQyxTQUFPO0FBQ0g1QyxZQUFRLEVBQUU2QyxnRUFBa0IsQ0FBQzdDLDhEQUFELEVBQVc0QyxRQUFYLENBRHpCO0FBRUhQLGtCQUFjLEVBQUVRLGdFQUFrQixDQUFDUiwwRUFBRCxFQUFpQk8sUUFBakIsQ0FGL0I7QUFHSE4sMkJBQXVCLEVBQUVPLGdFQUFrQixDQUFDUCxtRkFBRCxFQUEwQk0sUUFBMUIsQ0FIeEM7QUFJSEwsK0JBQTJCLEVBQUVNLGdFQUFrQixDQUFDTix1RkFBRCxFQUE4QkssUUFBOUI7QUFKNUMsR0FBUDtBQU1ILENBUEQ7O0FBUUFQLDBFQUFjO0FBQ2RDLG1GQUF1QjtBQUVSUSwwSEFBTyxDQUNsQkwsZUFEa0IsRUFFbEJFLGtCQUZrQixDQUFQLENBR2J2RCxNQUhhLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyLCBzZXRQZW5kaW5nTm90aWZpY2F0aW9ucywgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG4vLyBpbXBvcnQgTmF2QmFyIGZyb20gJy4vbmF2QmFyL05hdkJhcidcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL25ld05hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IEZJTkRfVVNFUiwgUEVORElOR19OT1RJRlMsIExJU1RfT0ZfTk9USUZJQ0FUSU9OUyB9IGZyb20gJy4uL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3Qgb25RdWVyeUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TmF2QmFyIHF1ZXJ5PXtxdWVyeX0gb25RdWVyeUNoYW5nZT17b25RdWVyeUNoYW5nZX0gbm9Vc2VyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAmJiBwcm9wcy50b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHByb3BzLnNldFRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci5faWQgOiAndGhpc2lzZmFrZSdcclxuICAgICAgICBjb25zdCBwZW5kaW5nTm90aWZzUXVlcnkgPSB1c2VRdWVyeShQRU5ESU5HX05PVElGUywge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6ICB7dXNlcklkOiBjdXJyZW50VXNlcklkfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJVTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgOiAndGhpc2lzZmFrZSdcclxuICAgICAgICBjb25zdCB1c2VyUXVlcnkgPSB1c2VRdWVyeShGSU5EX1VTRVIsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7dXNlcm5hbWU6IGN1cnJlbnRVc2VyVU59XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCB1c2VyTm90aWZzID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkKSA6IFtdXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlck5vdGlmcylcclxuICAgICAgICBjb25zdCBub3RpZnNRdWVyeSA9IHVzZVF1ZXJ5KExJU1RfT0ZfTk9USUZJQ0FUSU9OUywge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25zOiB1c2VyTm90aWZzfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3Qgbm90aWZzUXVlcnlDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5vdGlmc1F1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChub3RpZnNRdWVyeS5sb2FkaW5nKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAobm90aWZzUXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zLmxlbmd0aCA8IDEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5sZW5ndGgpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zWzBdLnVzZXJGcm9tKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gbm90aWZzUXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdOb3RpZnNDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXBlbmRpbmdOb3RpZnNRdWVyeS5kYXRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAocHJvcHMuY3VycmVudFVzZXIgJiYgcHJvcHMuY3VycmVudFVzZXIucGVuZGluZ05vdGlmaWNhdGlvbnMpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBwZW5kaW5nTm90aWZzUXVlcnkuZGF0YS5zZWFyY2hBd2FpdGluZ05vdGlmc1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyQ29uZGl0aW9ucyA9IChxdWVyeSwgcmVkdWNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXF1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcXVlcnkuZGF0YS5maW5kVXNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKHJlZHVjZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBxdWVyeS5kYXRhLmZpbmRVc2VyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vdGlmc0ZpbGxlZCA9IG5vdGlmc1F1ZXJ5Q29uZGl0aW9ucygpXHJcbiAgICAgICAgY29uc3QgcGVuZGluZ05vdGlmcyA9IHBlbmRpbmdOb3RpZnNDb25kaXRpb25zKClcclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlckNvbmRpdGlvbnModXNlclF1ZXJ5LCBwcm9wcy5jdXJyZW50VXNlcilcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXIodXNlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGVuZGluZ05vdGlmcykge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMocGVuZGluZ05vdGlmcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm90aWZzRmlsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobm90aWZzRmlsbGVkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW25vdGlmc0ZpbGxlZCwgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zLCB1c2VyLCBwcm9wcy5zZXRDdXJyZW50VXNlciwgcGVuZGluZ05vdGlmcywgcHJvcHMuc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIHByb3BzXSlcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdkJhciBxdWVyeT17cXVlcnl9IG9uUXVlcnlDaGFuZ2U9e29uUXVlcnlDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKHNldFRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXI6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlciwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldFBlbmRpbmdOb3RpZmljYXRpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5zZXRDdXJyZW50VXNlclxyXG5zZXRQZW5kaW5nTm90aWZpY2F0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKExheW91dCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})