webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/contact.module.css */ \"./styles/pages/contact.module.css\");\n/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Contributer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contributer */ \"./components/Contributer.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/schemas/queries */ \"./src/schemas/queries.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\pages\\\\contact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Contact = () => {\n  _s();\n\n  const onError = e => console.log(e);\n\n  const {\n    loading,\n    error,\n    data,\n    fetchMore\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_6__[\"SOME_USERS\"], {\n    variables: {\n      skip: 0,\n      first: 5\n    },\n    onError\n  });\n\n  if (data && data.someUsers) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(\"title\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 21\n      }\n    }, \"Contact | Unilous\"), __jsx(\"meta\", {\n      name: \"description\",\n      content: \"Contact the Unilous team\",\n      key: \"description\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 21\n      }\n    })), __jsx(\"div\", {\n      className: \"navbar-height\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }\n    }), __jsx(\"ol\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }\n    }, data.someUsers.map(u => __jsx(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 25\n      }\n    }, __jsx(\"h3\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 29\n      }\n    }, u.username)))), __jsx(\"button\", {\n      onClick: () => loadMore(data, fetchMore),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }\n    }, loading ? 'loading...' : 'show more'), __jsx(\"div\", {\n      className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactsContainer,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }\n    }, __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Sebastian Sosa\",\n      link: \"/user/SebastianSosa\",\n      image: \"https://i.imgur.com/zgwIwOS.png\",\n      position: \"Founder, full-stack developer\",\n      phone: \"+1 (786)-270-7297\",\n      email: \"1sebastian1sosa1@gmail.com\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 21\n      }\n    }), __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Umyarov Mikhail\",\n      link: \"/user/nesutortik\",\n      image: \"https://images-ext-1.discordapp.net/external/QGS82PyB45LevyTO8rhEeJ7bE-fp2zgNzZNyWWjwmTY/%3Fava%3D1%2C/https/sun9-59.userapi.com/c844720/v844720993/b1248/ttDbUpebJaU.jpg\",\n      position: \"UX\\\\UI designer\",\n      phone: \"+7 (952)-156-9649\",\n      email: \"silverusdragonitos@yandex.ru\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 21\n      }\n    }), __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Oliver Fu\",\n      link: \"/user/ofu997\",\n      image: \"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/82568549_10107194006724684_7566546681110462464_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=rTPS8BHNVG4AX_bjvT0&_nc_ht=scontent-sjc3-1.xx&oh=3334b94c1b3abe80e2f1219e745b84e1&oe=5EF5CE32\",\n      position: \"Front-end developer\",\n      phone: \"+1 (951)-232-3178\",\n      email: \"ofu997@gmail.com\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 21\n      }\n    })));\n  } else {\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"navbar-height\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }\n    }), __jsx(\"h1\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }\n    }, \"Loading...\"));\n  }\n};\n\n_s(Contact, \"Jgxtny207IQMM2ZSYWIKYhxQqsg=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Contact;\n\nfunction loadMore(data, fetchMore) {\n  console.log('hello');\n  return fetchMore({\n    variables: {\n      skip: data.someUsers.length\n    },\n    updateQuery: (previousResult, {\n      fetchMoreResult\n    }) => {\n      console.log();\n\n      if (!fetchMoreResult) {\n        return previousResult;\n      }\n\n      return Object.assign({}, previousResult, {\n        allPosts: [...previousResult.someUsers, ...fetchMoreResult.someUsers]\n      });\n    }\n  });\n} // Contact.getInitialProps = async () => {\n//     const postQuery = await apolloClient.query({\n//         query: FIND_POST,\n//         variables: {title: 'Unilous'} \n//     }).catch(err => console.log(err))\n//     console.log(postQuery)\n//     return {\n//         post: postQuery.data.findPost,\n//     }\n// }\n\n\nconst mapStateToProps = state => {\n  return {};\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Contact));\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCIsIm9uRXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJmZXRjaE1vcmUiLCJ1c2VRdWVyeSIsIlNPTUVfVVNFUlMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJzb21lVXNlcnMiLCJtYXAiLCJ1IiwidXNlcm5hbWUiLCJsb2FkTW9yZSIsIkNUIiwiY29udGFjdHNDb250YWluZXIiLCJsZW5ndGgiLCJ1cGRhdGVRdWVyeSIsInByZXZpb3VzUmVzdWx0IiwiZmV0Y2hNb3JlUmVzdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwiYWxsUG9zdHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFBQTs7QUFDbEIsUUFBTUMsT0FBTyxHQUFJQyxDQUFELElBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQXZCOztBQUVBLFFBQU07QUFBRUcsV0FBRjtBQUFXQyxTQUFYO0FBQWtCQyxRQUFsQjtBQUF3QkM7QUFBeEIsTUFBc0NDLG9FQUFRLENBQUNDLCtEQUFELEVBQWE7QUFDN0RDLGFBQVMsRUFBRTtBQUFDQyxVQUFJLEVBQUUsQ0FBUDtBQUFVQyxXQUFLLEVBQUU7QUFBakIsS0FEa0Q7QUFFN0RaO0FBRjZELEdBQWIsQ0FBcEQ7O0FBSUEsTUFBSU0sSUFBSSxJQUFJQSxJQUFJLENBQUNPLFNBQWpCLEVBQTRCO0FBQ3hCLFdBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7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LEVBQWtDO0FBQ3JDSSxnQkFBUSxFQUFFLENBQUMsR0FBR0osY0FBYyxDQUFDVCxTQUFuQixFQUE4QixHQUFHVSxlQUFlLENBQUNWLFNBQWpEO0FBRDJCLE9BQWxDLENBQVA7QUFHSDtBQVZZLEdBQUQsQ0FBaEI7QUFZSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1jLGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDLFNBQU8sRUFBUDtBQUdBLENBSkQ7O0FBS0EsTUFBTUMsa0JBQWtCLEdBQUlDLFFBQUQsSUFBYztBQUNyQyxTQUFPLEVBQVA7QUFHSCxDQUpEOztBQU1lQywwSEFBTyxDQUNsQkosZUFEa0IsRUFFbEJFLGtCQUZrQixDQUFQLENBR2I5QixPQUhhLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ1QgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL2NvbnRhY3QubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgQ29udHJpYnV0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cmlidXRlcidcclxuaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHtTT01FX1VTRVJTfSBmcm9tICcuLi9zcmMvc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgb25FcnJvciA9IChlKSA9PiBjb25zb2xlLmxvZyhlKVxyXG5cclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoU09NRV9VU0VSUywge1xyXG4gICAgICAgIHZhcmlhYmxlczoge3NraXA6IDAsIGZpcnN0OiA1fSxcclxuICAgICAgICBvbkVycm9yXHJcbiAgICB9KVxyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5zb21lVXNlcnMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkNvbnRhY3QgfCBVbmlsb3VzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29udGFjdCB0aGUgVW5pbG91cyB0ZWFtXCIga2V5PVwiZGVzY3JpcHRpb25cIi8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnNvbWVVc2Vycy5tYXAodSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGgzPnt1LnVzZXJuYW1lfTwvaDM+PC9saT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlKGRhdGEsIGZldGNoTW9yZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gJ2xvYWRpbmcuLi4nIDogJ3Nob3cgbW9yZSd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDVC5jb250YWN0c0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiU2ViYXN0aWFuIFNvc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL3VzZXIvU2ViYXN0aWFuU29zYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS96Z3dJd09TLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiRm91bmRlciwgZnVsbC1zdGFjayBkZXZlbG9wZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZT1cIisxICg3ODYpLTI3MC03Mjk3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw9XCIxc2ViYXN0aWFuMXNvc2ExQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udHJpYnV0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJVbXlhcm92IE1pa2hhaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL3VzZXIvbmVzdXRvcnRpa1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9pbWFnZXMtZXh0LTEuZGlzY29yZGFwcC5uZXQvZXh0ZXJuYWwvUUdTODJQeUI0NUxldnlUTzhyaEVlSjdiRS1mcDJ6Z056Wk55V1dqd21UWS8lM0ZhdmElM0QxJTJDL2h0dHBzL3N1bjktNTkudXNlcmFwaS5jb20vYzg0NDcyMC92ODQ0NzIwOTkzL2IxMjQ4L3R0RGJVcGViSmFVLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiVVhcXFVJIGRlc2lnbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU9XCIrNyAoOTUyKS0xNTYtOTY0OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPVwic2lsdmVydXNkcmFnb25pdG9zQHlhbmRleC5ydVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udHJpYnV0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJPbGl2ZXIgRnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL3VzZXIvb2Z1OTk3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL3Njb250ZW50LXNqYzMtMS54eC5mYmNkbi5uZXQvdi90MS4wLTkvODI1Njg1NDlfMTAxMDcxOTQwMDY3MjQ2ODRfNzU2NjU0NjY4MTExMDQ2MjQ2NF9vLmpwZz9fbmNfY2F0PTEwNSZfbmNfc2lkPTA5Y2JmZSZfbmNfb2hjPXJUUFM4QkhOVkc0QVhfYmp2VDAmX25jX2h0PXNjb250ZW50LXNqYzMtMS54eCZvaD0zMzM0Yjk0YzFiM2FiZTgwZTJmMTIxOWU3NDViODRlMSZvZT01RUY1Q0UzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiRnJvbnQtZW5kIGRldmVsb3BlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lPVwiKzEgKDk1MSktMjMyLTMxNzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbD1cIm9mdTk5N0BnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGxvYWRNb3JlKGRhdGEsIGZldGNoTW9yZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2hlbGxvJylcclxuICAgIHJldHVybiBmZXRjaE1vcmUoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge3NraXA6IGRhdGEuc29tZVVzZXJzLmxlbmd0aH0sXHJcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwge2ZldGNoTW9yZVJlc3VsdH0pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XHJcbiAgICAgICAgICAgICAgICBhbGxQb3N0czogWy4uLnByZXZpb3VzUmVzdWx0LnNvbWVVc2VycywgLi4uZmV0Y2hNb3JlUmVzdWx0LnNvbWVVc2Vyc11cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBDb250YWN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIGNvbnN0IHBvc3RRdWVyeSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbi8vICAgICAgICAgcXVlcnk6IEZJTkRfUE9TVCxcclxuLy8gICAgICAgICB2YXJpYWJsZXM6IHt0aXRsZTogJ1VuaWxvdXMnfSBcclxuLy8gICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4vLyAgICAgY29uc29sZS5sb2cocG9zdFF1ZXJ5KVxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwb3N0OiBwb3N0UXVlcnkuZGF0YS5maW5kUG9zdCxcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHJcblx0fVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShDb250YWN0KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})