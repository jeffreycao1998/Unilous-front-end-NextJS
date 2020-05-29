webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/contact.module.css */ \"./styles/pages/contact.module.css\");\n/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Contributer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contributer */ \"./components/Contributer.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/schemas/queries */ \"./src/schemas/queries.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\pages\\\\contact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Contact = () => {\n  _s();\n\n  const onError = e => console.log(e);\n\n  const {\n    loading,\n    error,\n    data,\n    fetchMore\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_6__[\"SOME_USERS\"], {\n    variables: {\n      skip: 0,\n      first: 5\n    },\n    onError\n  });\n\n  const loadMore = (data, fetchMore) => {\n    return fetchMore({\n      variables: {\n        skip: data.someUsers.length\n      },\n      updateQuery: (previousResult, {\n        fetchMoreResult\n      }) => {\n        if (!fetchMoreResult) {\n          return previousResult;\n        }\n\n        return Object.assign({}, previousResult, {\n          someUsers: [...previousResult.someUsers, ...fetchMoreResult.someUsers]\n        });\n      }\n    });\n  };\n\n  if (data && data.someUsers) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }\n    }, __jsx(\"title\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }\n    }, \"Contact | Unilous\"), __jsx(\"meta\", {\n      name: \"description\",\n      content: \"Contact the Unilous team\",\n      key: \"description\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 21\n      }\n    })), __jsx(\"div\", {\n      className: \"navbar-height\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }\n    }), __jsx(\"ol\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }\n    }, data.someUsers.map(u => __jsx(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 25\n      }\n    }, __jsx(\"h3\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 29\n      }\n    }, u.username)))), __jsx(\"button\", {\n      onClick: () => loadMore(data, fetchMore),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }\n    }, loading ? 'loading...' : 'show more'), __jsx(\"div\", {\n      className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactsContainer,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }\n    }, __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Sebastian Sosa\",\n      link: \"/user/SebastianSosa\",\n      image: \"https://i.imgur.com/zgwIwOS.png\",\n      position: \"Founder, full-stack developer\",\n      phone: \"+1 (786)-270-7297\",\n      email: \"1sebastian1sosa1@gmail.com\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 21\n      }\n    }), __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Umyarov Mikhail\",\n      link: \"/user/nesutortik\",\n      image: \"https://images-ext-1.discordapp.net/external/QGS82PyB45LevyTO8rhEeJ7bE-fp2zgNzZNyWWjwmTY/%3Fava%3D1%2C/https/sun9-59.userapi.com/c844720/v844720993/b1248/ttDbUpebJaU.jpg\",\n      position: \"UX\\\\UI designer\",\n      phone: \"+7 (952)-156-9649\",\n      email: \"silverusdragonitos@yandex.ru\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 21\n      }\n    }), __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Oliver Fu\",\n      link: \"/user/ofu997\",\n      image: \"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/82568549_10107194006724684_7566546681110462464_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=rTPS8BHNVG4AX_bjvT0&_nc_ht=scontent-sjc3-1.xx&oh=3334b94c1b3abe80e2f1219e745b84e1&oe=5EF5CE32\",\n      position: \"Front-end developer\",\n      phone: \"+1 (951)-232-3178\",\n      email: \"ofu997@gmail.com\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 21\n      }\n    })));\n  } else {\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"navbar-height\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }\n    }), __jsx(\"h1\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 17\n      }\n    }, \"Loading...\"));\n  }\n}; // Contact.getInitialProps = async () => {\n//     const postQuery = await apolloClient.query({\n//         query: FIND_POST,\n//         variables: {title: 'Unilous'} \n//     }).catch(err => console.log(err))\n//     console.log(postQuery)\n//     return {\n//         post: postQuery.data.findPost,\n//     }\n// }\n\n\n_s(Contact, \"Jgxtny207IQMM2ZSYWIKYhxQqsg=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Contact;\n\nconst mapStateToProps = state => {\n  return {};\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Contact));\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCIsIm9uRXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJmZXRjaE1vcmUiLCJ1c2VRdWVyeSIsIlNPTUVfVVNFUlMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJsb2FkTW9yZSIsInNvbWVVc2VycyIsImxlbmd0aCIsInVwZGF0ZVF1ZXJ5IiwicHJldmlvdXNSZXN1bHQiLCJmZXRjaE1vcmVSZXN1bHQiLCJPYmplY3QiLCJhc3NpZ24iLCJtYXAiLCJ1IiwidXNlcm5hbWUiLCJDVCIsImNvbnRhY3RzQ29udGFpbmVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ2xCLFFBQU1DLE9BQU8sR0FBSUMsQ0FBRCxJQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixDQUF2Qjs7QUFFQSxRQUFNO0FBQUVHLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkMsUUFBbEI7QUFBd0JDO0FBQXhCLE1BQXNDQyxvRUFBUSxDQUFDQywrREFBRCxFQUFhO0FBQzdEQyxhQUFTLEVBQUU7QUFBQ0MsVUFBSSxFQUFFLENBQVA7QUFBVUMsV0FBSyxFQUFFO0FBQWpCLEtBRGtEO0FBRTdEWjtBQUY2RCxHQUFiLENBQXBEOztBQUtBLFFBQU1hLFFBQVEsR0FBRyxDQUFDUCxJQUFELEVBQU9DLFNBQVAsS0FBcUI7QUFDbEMsV0FBT0EsU0FBUyxDQUFDO0FBQ2JHLGVBQVMsRUFBRTtBQUFDQyxZQUFJLEVBQUVMLElBQUksQ0FBQ1EsU0FBTCxDQUFlQztBQUF0QixPQURFO0FB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O0FBQUEsb0JBRkosQ0FESjtBQU1IO0FBQ0osQ0EzRUQsQyxDQThFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBdkZNMUIsTztVQUcwQ1MsNEQ7OztLQUgxQ1QsTzs7QUF5Rk4sTUFBTTJCLGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDLFNBQU8sRUFBUDtBQUdBLENBSkQ7O0FBS0EsTUFBTUMsa0JBQWtCLEdBQUlDLFFBQUQsSUFBYztBQUNyQyxTQUFPLEVBQVA7QUFHSCxDQUpEOztBQU1lQywwSEFBTyxDQUNsQkosZUFEa0IsRUFFbEJFLGtCQUZrQixDQUFQLENBR2I3QixPQUhhLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ1QgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL2NvbnRhY3QubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgQ29udHJpYnV0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cmlidXRlcidcclxuaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHtTT01FX1VTRVJTfSBmcm9tICcuLi9zcmMvc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgb25FcnJvciA9IChlKSA9PiBjb25zb2xlLmxvZyhlKVxyXG5cclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoU09NRV9VU0VSUywge1xyXG4gICAgICAgIHZhcmlhYmxlczoge3NraXA6IDAsIGZpcnN0OiA1fSxcclxuICAgICAgICBvbkVycm9yXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGxvYWRNb3JlID0gKGRhdGEsIGZldGNoTW9yZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaE1vcmUoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtza2lwOiBkYXRhLnNvbWVVc2Vycy5sZW5ndGh9LFxyXG4gICAgICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7ZmV0Y2hNb3JlUmVzdWx0fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvbWVVc2VyczogWy4uLnByZXZpb3VzUmVzdWx0LnNvbWVVc2VycywgLi4uZmV0Y2hNb3JlUmVzdWx0LnNvbWVVc2Vyc11cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhICYmIGRhdGEuc29tZVVzZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Db250YWN0IHwgVW5pbG91czwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbnRhY3QgdGhlIFVuaWxvdXMgdGVhbVwiIGtleT1cImRlc2NyaXB0aW9uXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zb21lVXNlcnMubWFwKHUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxoMz57dS51c2VybmFtZX08L2gzPjwvbGk+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZShkYXRhLCBmZXRjaE1vcmUpfT5cclxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICdsb2FkaW5nLi4uJyA6ICdzaG93IG1vcmUnfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q1QuY29udGFjdHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250cmlidXRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlNlYmFzdGlhbiBTb3NhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi91c2VyL1NlYmFzdGlhblNvc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vaS5pbWd1ci5jb20vemd3SXdPUy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cIkZvdW5kZXIsIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU9XCIrMSAoNzg2KS0yNzAtNzI5N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPVwiMXNlYmFzdGlhbjFzb3NhMUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiVW15YXJvdiBNaWtoYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi91c2VyL25lc3V0b3J0aWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vaW1hZ2VzLWV4dC0xLmRpc2NvcmRhcHAubmV0L2V4dGVybmFsL1FHUzgyUHlCNDVMZXZ5VE84cmhFZUo3YkUtZnAyemdOelpOeVdXandtVFkvJTNGYXZhJTNEMSUyQy9odHRwcy9zdW45LTU5LnVzZXJhcGkuY29tL2M4NDQ3MjAvdjg0NDcyMDk5My9iMTI0OC90dERiVXBlYkphVS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cIlVYXFxVSSBkZXNpZ25lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lPVwiKzcgKDk1MiktMTU2LTk2NDlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbD1cInNpbHZlcnVzZHJhZ29uaXRvc0B5YW5kZXgucnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiT2xpdmVyIEZ1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi91c2VyL29mdTk5N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9zY29udGVudC1zamMzLTEueHguZmJjZG4ubmV0L3YvdDEuMC05LzgyNTY4NTQ5XzEwMTA3MTk0MDA2NzI0Njg0Xzc1NjY1NDY2ODExMTA0NjI0NjRfby5qcGc/X25jX2NhdD0xMDUmX25jX3NpZD0wOWNiZmUmX25jX29oYz1yVFBTOEJITlZHNEFYX2JqdlQwJl9uY19odD1zY29udGVudC1zamMzLTEueHgmb2g9MzMzNGI5NGMxYjNhYmU4MGUyZjEyMTllNzQ1Yjg0ZTEmb2U9NUVGNUNFMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cIkZyb250LWVuZCBkZXZlbG9wZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZT1cIisxICg5NTEpLTIzMi0zMTc4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw9XCJvZnU5OTdAZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIENvbnRhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcG9zdFF1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuLy8gICAgICAgICBxdWVyeTogRklORF9QT1NULFxyXG4vLyAgICAgICAgIHZhcmlhYmxlczoge3RpdGxlOiAnVW5pbG91cyd9IFxyXG4vLyAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbi8vICAgICBjb25zb2xlLmxvZyhwb3N0UXVlcnkpXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHBvc3Q6IHBvc3RRdWVyeS5kYXRhLmZpbmRQb3N0LFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cclxuXHR9XHJcbn1cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKENvbnRhY3QpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})