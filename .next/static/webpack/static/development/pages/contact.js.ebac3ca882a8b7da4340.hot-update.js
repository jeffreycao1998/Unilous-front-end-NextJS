webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/contact.module.css */ \"./styles/pages/contact.module.css\");\n/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Contributer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contributer */ \"./components/Contributer.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/schemas/queries */ \"./src/schemas/queries.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\pages\\\\contact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Contact = () => {\n  _s();\n\n  const {\n    loading,\n    error,\n    data,\n    fetchMore\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_6__[\"SOME_USERS\"], {\n    variables: {\n      skip: 0,\n      first: 5\n    }\n  });\n\n  function loadMore(data, fetchMore) {\n    return fetchMore({\n      variables: {\n        skip: data.someUsers.length\n      },\n      updateQuery: (previousResult, {\n        fetchMoreResult\n      }) => {\n        if (!fetMoreResult) {\n          return previousResult;\n        }\n\n        return Object.assign({});\n      }\n    });\n  }\n\n  if (data && data.someUsers) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }\n    }, __jsx(\"title\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 21\n      }\n    }, \"Contact | Unilous\"), __jsx(\"meta\", {\n      name: \"description\",\n      content: \"Contact the Unilous team\",\n      key: \"description\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 21\n      }\n    })), __jsx(\"div\", {\n      className: \"navbar-height\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    }), __jsx(\"ol\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }\n    }, data.someUsers.map(u => __jsx(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 25\n      }\n    }, __jsx(\"h3\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 29\n      }\n    }, u.username)))), __jsx(\"button\", {\n      onClick: () => loadMore(data, fetchMore),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }\n    }, \"show more\"), __jsx(\"div\", {\n      className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactsContainer,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }\n    }, __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Sebastian Sosa\",\n      link: \"/user/SebastianSosa\",\n      image: \"https://i.imgur.com/zgwIwOS.png\",\n      position: \"Founder, full-stack developer\",\n      phone: \"+1 (786)-270-7297\",\n      email: \"1sebastian1sosa1@gmail.com\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 21\n      }\n    }), __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Umyarov Mikhail\",\n      link: \"/user/nesutortik\",\n      image: \"https://images-ext-1.discordapp.net/external/QGS82PyB45LevyTO8rhEeJ7bE-fp2zgNzZNyWWjwmTY/%3Fava%3D1%2C/https/sun9-59.userapi.com/c844720/v844720993/b1248/ttDbUpebJaU.jpg\",\n      position: \"UX\\\\UI designer\",\n      phone: \"+7 (952)-156-9649\",\n      email: \"silverusdragonitos@yandex.ru\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 21\n      }\n    }), __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Oliver Fu\",\n      link: \"/user/ofu997\",\n      image: \"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/82568549_10107194006724684_7566546681110462464_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=rTPS8BHNVG4AX_bjvT0&_nc_ht=scontent-sjc3-1.xx&oh=3334b94c1b3abe80e2f1219e745b84e1&oe=5EF5CE32\",\n      position: \"Front-end developer\",\n      phone: \"+1 (951)-232-3178\",\n      email: \"ofu997@gmail.com\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 21\n      }\n    })));\n  } else {\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"navbar-height\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }\n    }), __jsx(\"h1\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }\n    }, \"Loading...\"));\n  }\n}; // Contact.getInitialProps = async () => {\n//     const postQuery = await apolloClient.query({\n//         query: FIND_POST,\n//         variables: {title: 'Unilous'} \n//     }).catch(err => console.log(err))\n//     console.log(postQuery)\n//     return {\n//         post: postQuery.data.findPost,\n//     }\n// }\n\n\n_s(Contact, \"Jgxtny207IQMM2ZSYWIKYhxQqsg=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Contact;\n\nconst mapStateToProps = state => {\n  return {};\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Contact));\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJmZXRjaE1vcmUiLCJ1c2VRdWVyeSIsIlNPTUVfVVNFUlMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJsb2FkTW9yZSIsInNvbWVVc2VycyIsImxlbmd0aCIsInVwZGF0ZVF1ZXJ5IiwicHJldmlvdXNSZXN1bHQiLCJmZXRjaE1vcmVSZXN1bHQiLCJmZXRNb3JlUmVzdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwibWFwIiwidSIsInVzZXJuYW1lIiwiQ1QiLCJjb250YWN0c0NvbnRhaW5lciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFNO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkMsUUFBbEI7QUFBd0JDO0FBQXhCLE1BQXNDQyxvRUFBUSxDQUFDQywrREFBRCxFQUFhO0FBQzdEQyxhQUFTLEVBQUU7QUFBQ0MsVUFBSSxFQUFFLENBQVA7QUFBVUMsV0FBSyxFQUFFO0FBQWpCO0FBRGtELEdBQWIsQ0FBcEQ7O0FBR0EsV0FBU0MsUUFBVCxDQUFrQlAsSUFBbEIsRUFBd0JDLFNBQXhCLEVBQW1DO0FBQy9CLFdBQU9BLFNBQVMsQ0FBQztBQUNiRyxlQUFTLEVBQUU7QUFBQ0MsWUFBSSxFQUFFTCxJQUFJLENBQUNRLFNBQUwsQ0FBZUM7QUFBdEIsT0FERTtBQUViQyxpQkFBVyxFQUFFLENBQUNDLGNBQUQsRUFBaUI7QUFBQ0M7QUFBRCxPQUFqQixLQUF1QztBQUNoRCxZQUFJLENBQUNDLGFBQUwsRUFBb0I7QUFDaEIsaUJBQU9G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SkQ7O0FBTWVDLDBIQUFPLENBQ2xCSixlQURrQixFQUVsQkUsa0JBRmtCLENBQVAsQ0FHYjFCLE9BSGEsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDVCBmcm9tICcuLi9zdHlsZXMvcGFnZXMvY29udGFjdC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBDb250cmlidXRlciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVyJ1xyXG5pbXBvcnQge3VzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQge1NPTUVfVVNFUlN9IGZyb20gJy4uL3NyYy9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCBmZXRjaE1vcmUgfSA9IHVzZVF1ZXJ5KFNPTUVfVVNFUlMsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtza2lwOiAwLCBmaXJzdDogNX1cclxuICAgIH0pXHJcbiAgICBmdW5jdGlvbiBsb2FkTW9yZShkYXRhLCBmZXRjaE1vcmUpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2hNb3JlKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7c2tpcDogZGF0YS5zb21lVXNlcnMubGVuZ3RofSxcclxuICAgICAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwge2ZldGNoTW9yZVJlc3VsdH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZmV0TW9yZVJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1Jlc3VsdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5zb21lVXNlcnMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkNvbnRhY3QgfCBVbmlsb3VzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29udGFjdCB0aGUgVW5pbG91cyB0ZWFtXCIga2V5PVwiZGVzY3JpcHRpb25cIi8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnNvbWVVc2Vycy5tYXAodSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGgzPnt1LnVzZXJuYW1lfTwvaDM+PC9saT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlKGRhdGEsIGZldGNoTW9yZSl9PnNob3cgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NULmNvbnRhY3RzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udHJpYnV0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJTZWJhc3RpYW4gU29zYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvdXNlci9TZWJhc3RpYW5Tb3NhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL2kuaW1ndXIuY29tL3pnd0l3T1MucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJGb3VuZGVyLCBmdWxsLXN0YWNrIGRldmVsb3BlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lPVwiKzEgKDc4NiktMjcwLTcyOTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbD1cIjFzZWJhc3RpYW4xc29zYTFAZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250cmlidXRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlVteWFyb3YgTWlraGFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvdXNlci9uZXN1dG9ydGlrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL2ltYWdlcy1leHQtMS5kaXNjb3JkYXBwLm5ldC9leHRlcm5hbC9RR1M4MlB5QjQ1TGV2eVRPOHJoRWVKN2JFLWZwMnpnTnpaTnlXV2p3bVRZLyUzRmF2YSUzRDElMkMvaHR0cHMvc3VuOS01OS51c2VyYXBpLmNvbS9jODQ0NzIwL3Y4NDQ3MjA5OTMvYjEyNDgvdHREYlVwZWJKYVUuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJVWFxcVUkgZGVzaWduZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZT1cIis3ICg5NTIpLTE1Ni05NjQ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw9XCJzaWx2ZXJ1c2RyYWdvbml0b3NAeWFuZGV4LnJ1XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250cmlidXRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIk9saXZlciBGdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvdXNlci9vZnU5OTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vc2NvbnRlbnQtc2pjMy0xLnh4LmZiY2RuLm5ldC92L3QxLjAtOS84MjU2ODU0OV8xMDEwNzE5NDAwNjcyNDY4NF83NTY2NTQ2NjgxMTEwNDYyNDY0X28uanBnP19uY19jYXQ9MTA1Jl9uY19zaWQ9MDljYmZlJl9uY19vaGM9clRQUzhCSE5WRzRBWF9ianZUMCZfbmNfaHQ9c2NvbnRlbnQtc2pjMy0xLnh4Jm9oPTMzMzRiOTRjMWIzYWJlODBlMmYxMjE5ZTc0NWI4NGUxJm9lPTVFRjVDRTMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJGcm9udC1lbmQgZGV2ZWxvcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU9XCIrMSAoOTUxKS0yMzItMzE3OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPVwib2Z1OTk3QGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIENvbnRhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcG9zdFF1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuLy8gICAgICAgICBxdWVyeTogRklORF9QT1NULFxyXG4vLyAgICAgICAgIHZhcmlhYmxlczoge3RpdGxlOiAnVW5pbG91cyd9IFxyXG4vLyAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbi8vICAgICBjb25zb2xlLmxvZyhwb3N0UXVlcnkpXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHBvc3Q6IHBvc3RRdWVyeS5kYXRhLmZpbmRQb3N0LFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cclxuXHR9XHJcbn1cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKENvbnRhY3QpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})