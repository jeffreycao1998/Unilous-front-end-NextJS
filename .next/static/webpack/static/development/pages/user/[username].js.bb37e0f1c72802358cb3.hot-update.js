webpackHotUpdate("static\\development\\pages\\user\\[username].js",{

/***/ "./pages/user/[username].js":
/*!**********************************!*\
  !*** ./pages/user/[username].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/schemas/mutations */ \"./src/schemas/mutations.js\");\n/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/schemas/queries */ \"./src/schemas/queries.js\");\n/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/reducers/alertNotif */ \"./redux/reducers/alertNotif.js\");\n/* harmony import */ var _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/pages/userPage.module.css */ \"./styles/pages/userPage.module.css\");\n/* harmony import */ var _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_post_PostSmallList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post/PostSmallList */ \"./components/post/PostSmallList.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var _components_text_field_FormContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/text-field/FormContainer */ \"./components/text-field/FormContainer.js\");\n/* harmony import */ var _components_text_field_ReferenceLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/text-field/ReferenceLink */ \"./components/text-field/ReferenceLink.js\");\n/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/functions/functions */ \"./src/functions/functions.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);\n\n\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\pages\\\\user\\\\[username].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst UserPage = Object(next_router__WEBPACK_IMPORTED_MODULE_14__[\"withRouter\"])(_c = _s(props => {\n  _s();\n\n  const currentUser = props.user;\n  const message = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"useField\"])('text');\n\n  const onError = e => {\n    const eMessage = e.message;\n\n    if (eMessage.includes('Path `message` (')) {\n      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"triggerAlert\"])('warning', `message$: message of ${message.fields.value.length} characters cannot be more than 800 characters`, props.setAlert, props.resetAlert);\n    }\n  };\n\n  const [sendMessage] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__[\"MAKE_NOTIFICATION\"], {\n    onError\n  });\n\n  const handleMessage = async () => {\n    if (!message.fields.value.length) {\n      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"triggerAlert\"])('warning', `message$: message field is required`, props.setAlert, props.resetAlert);\n      return null;\n    }\n\n    const result = await sendMessage({\n      variables: {\n        userFromId: props.currentUser._id,\n        userToId: currentUser._id,\n        message: message.fields.value\n      }\n    });\n\n    if (result) {\n      message.reset();\n      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"triggerAlert\"])('success', `sent: message has been sent to ${currentUser.username}`, props.setAlert, props.resetAlert);\n    }\n  };\n\n  const pallette = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"palletteGenerator\"])(\"rgb(40,40,40)\").colorPallette;\n\n  const descriptionToShow = () => {\n    const amtOfPosts = currentUser.posts.length;\n    let dFinal = `${currentUser.username} `;\n\n    if (amtOfPosts.length) {\n      if (amtOfPosts === 1) dFinal = dFinal + `has ${amtOfPosts} awesome project that needs a team.`;else dFinal = dFinal + `has ${amtOfPosts} awesome projects that need teams.`;\n    } else dFinal = dFinal + 'is looking fresh and ready to work on a project!';\n\n    return dFinal;\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_17___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, `${currentUser.username} | Unilous user`), __jsx(\"meta\", {\n    name: \"description\",\n    content: descriptionToShow(),\n    key: \"description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"navbar-height\",\n    style: {\n      gridColumn: '1/3'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPContent,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPTitleContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPTitleIcon,\n    src: \"/svg/userB.svg\",\n    alt: \"user\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPTitle,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, currentUser.username)), __jsx(\"h3\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPTitle,\n    style: {\n      opacity: '0.8'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, \"profile link\"), __jsx(_components_text_field_ReferenceLink__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    rl: currentUser.referenceLink,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }), __jsx(\"h2\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPTitle,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, \"posts\"), __jsx(\"div\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPPostsContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(_components_post_PostSmallList__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    posts: currentUser.posts,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }))), props.currentUser !== currentUser.username && __jsx(_components_text_field_FormContainer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    pallette: pallette,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    className: \"form-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  }, \"contact \", currentUser.username), __jsx(\"h4\", {\n    className: \"form-title-secondary\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, \"message\"), __jsx(\"div\", {\n    className: \"form-field-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }, __jsx(\"textarea\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"form-field\"\n  }, message.fields, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }))), __jsx(\"div\", {\n    className: \"form-submit-button-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 15\n    }\n  }, __jsx(\"h4\", {\n    onClick: () => handleMessage(),\n    className: \"form-submit-button\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 15\n    }\n  }, \"send\")))));\n}, \"p12fcvy4sQmyP36bHeMfZDZ+CBs=\", false, function () {\n  return [_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"useField\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"]];\n}));\n_c2 = UserPage;\n\nconst mapStateToProps = state => {\n  return {\n    alertNotif: state.alertNotif,\n    currentUser: state.currentUser\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    setAlert: Object(redux__WEBPACK_IMPORTED_MODULE_13__[\"bindActionCreators\"])(_redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__[\"setAlert\"], dispatch),\n    resetAlert: Object(redux__WEBPACK_IMPORTED_MODULE_13__[\"bindActionCreators\"])(_redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__[\"resetAlert\"], dispatch)\n  };\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(UserPage)); // uses formContainer.css\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"UserPage$withRouter\");\n$RefreshReg$(_c2, \"UserPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyL1t1c2VybmFtZV0uanM/ZjM5NSJdLCJuYW1lcyI6WyJVc2VyUGFnZSIsIndpdGhSb3V0ZXIiLCJwcm9wcyIsImN1cnJlbnRVc2VyIiwidXNlciIsIm1lc3NhZ2UiLCJ1c2VGaWVsZCIsIm9uRXJyb3IiLCJlIiwiZU1lc3NhZ2UiLCJpbmNsdWRlcyIsInRyaWdnZXJBbGVydCIsImZpZWxkcyIsInZhbHVlIiwibGVuZ3RoIiwic2V0QWxlcnQiLCJyZXNldEFsZXJ0Iiwic2VuZE1lc3NhZ2UiLCJ1c2VNdXRhdGlvbiIsIk1BS0VfTk9USUZJQ0FUSU9OIiwiaGFuZGxlTWVzc2FnZSIsInJlc3VsdCIsInZhcmlhYmxlcyIsInVzZXJGcm9tSWQiLCJfaWQiLCJ1c2VyVG9JZCIsInJlc2V0IiwidXNlcm5hbWUiLCJwYWxsZXR0ZSIsInBhbGxldHRlR2VuZXJhdG9yIiwiY29sb3JQYWxsZXR0ZSIsImRlc2NyaXB0aW9uVG9TaG93IiwiYW10T2ZQb3N0cyIsInBvc3RzIiwiZEZpbmFsIiwiVVAiLCJVUENvbnRhaW5lciIsImdyaWRDb2x1bW4iLCJVUENvbnRlbnQiLCJVUFRpdGxlQ29udGFpbmVyIiwiVVBUaXRsZUljb24iLCJVUFRpdGxlIiwib3BhY2l0eSIsInJlZmVyZW5jZUxpbmsiLCJVUFBvc3RzQ29udGFpbmVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhbGVydE5vdGlmIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFFBQVEsR0FBR0MsK0RBQVUsU0FBRUMsS0FBRCxJQUFXO0FBQUE7O0FB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QU02QyxrQkFBa0IsR0FBSUMsUUFBRCxJQUFjO0FBQ3ZDLFNBQU87QUFDTGxDLFlBQVEsRUFBRW1DLGlFQUFrQixDQUFDbkMsbUVBQUQsRUFBV2tDLFFBQVgsQ0FEdkI7QUFFTGpDLGNBQVUsRUFBRWtDLGlFQUFrQixDQUFDbEMscUVBQUQsRUFBYWlDLFFBQWI7QUFGekIsR0FBUDtBQUlELENBTEQ7OztBQU9lRSwwSEFBTyxDQUNwQk4sZUFEb0IsRUFFcEJHLGtCQUZvQixDQUFQLENBR2JoRCxRQUhhLENBQWYsRSxDQUtBIiwiZmlsZSI6Ii4vcGFnZXMvdXNlci9bdXNlcm5hbWVdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBNQUtFX05PVElGSUNBVElPTiB9IGZyb20gJy4uLy4uL3NyYy9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgRklORF9VU0VSLCBBTExfVVNFUlMsIEZJTkRfUE9TVCB9IGZyb20gJy4uLy4uL3NyYy9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IFVQIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlcy91c2VyUGFnZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFBvc3RTbWFsbExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L1Bvc3RTbWFsbExpc3QnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZydcclxuaW1wb3J0IEZvcm1Db250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWZpZWxkL0Zvcm1Db250YWluZXInXHJcbmltcG9ydCBSZWZlcmVuY2VMaW5rIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1maWVsZC9SZWZlcmVuY2VMaW5rJ1xyXG5pbXBvcnQgeyBwYWxsZXR0ZUdlbmVyYXRvciwgdXNlRmllbGQsIHRyaWdnZXJBbGVydCB9IGZyb20gJy4uLy4uL3NyYy9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7YXBvbGxvQ2xpZW50fSBmcm9tICcuLi8uLi9saWIvYXBvbGxvJ1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IFVzZXJQYWdlID0gd2l0aFJvdXRlcigocHJvcHMpID0+IHtcclxuICBjb25zdCBjdXJyZW50VXNlciA9IHByb3BzLnVzZXJcclxuICBjb25zdCBtZXNzYWdlID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gIGNvbnN0IG9uRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgZU1lc3NhZ2UgPSBlLm1lc3NhZ2VcclxuICAgIGlmIChlTWVzc2FnZS5pbmNsdWRlcygnUGF0aCBgbWVzc2FnZWAgKCcpKSB7XHJcbiAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBtZXNzYWdlJDogbWVzc2FnZSBvZiAke21lc3NhZ2UuZmllbGRzLnZhbHVlLmxlbmd0aH0gY2hhcmFjdGVycyBjYW5ub3QgYmUgbW9yZSB0aGFuIDgwMCBjaGFyYWN0ZXJzYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzZW5kTWVzc2FnZV0gPSB1c2VNdXRhdGlvbihNQUtFX05PVElGSUNBVElPTiwge1xyXG4gICAgb25FcnJvclxyXG4gIH0pXHJcbiAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghbWVzc2FnZS5maWVsZHMudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBtZXNzYWdlJDogbWVzc2FnZSBmaWVsZCBpcyByZXF1aXJlZGAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICB1c2VyRnJvbUlkOiBwcm9wcy5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgICAgIHVzZXJUb0lkOiBjdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgbWVzc2FnZS5yZXNldCgpXHJcbiAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgYHNlbnQ6IG1lc3NhZ2UgaGFzIGJlZW4gc2VudCB0byAke2N1cnJlbnRVc2VyLnVzZXJuYW1lfWAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBwYWxsZXR0ZSA9IHBhbGxldHRlR2VuZXJhdG9yKFwicmdiKDQwLDQwLDQwKVwiKS5jb2xvclBhbGxldHRlXHJcbiAgXHJcbiAgY29uc3QgZGVzY3JpcHRpb25Ub1Nob3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbXRPZlBvc3RzID0gY3VycmVudFVzZXIucG9zdHMubGVuZ3RoXHJcbiAgICBsZXQgZEZpbmFsID0gYCR7Y3VycmVudFVzZXIudXNlcm5hbWV9IGBcclxuICAgIGlmIChhbXRPZlBvc3RzLmxlbmd0aCkge1xyXG4gICAgICBcclxuICAgICAgaWYgKGFtdE9mUG9zdHMgPT09IDEpIGRGaW5hbCA9IGRGaW5hbCArIGBoYXMgJHthbXRPZlBvc3RzfSBhd2Vzb21lIHByb2plY3QgdGhhdCBuZWVkcyBhIHRlYW0uYFxyXG4gICAgICBlbHNlIGRGaW5hbCA9IGRGaW5hbCArIGBoYXMgJHthbXRPZlBvc3RzfSBhd2Vzb21lIHByb2plY3RzIHRoYXQgbmVlZCB0ZWFtcy5gXHJcbiAgICB9XHJcbiAgICBlbHNlIGRGaW5hbCA9IGRGaW5hbCArICdpcyBsb29raW5nIGZyZXNoIGFuZCByZWFkeSB0byB3b3JrIG9uIGEgcHJvamVjdCEnXHJcblxyXG4gICAgcmV0dXJuIGRGaW5hbFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntgJHtjdXJyZW50VXNlci51c2VybmFtZX0gfCBVbmlsb3VzIHVzZXJgfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb25Ub1Nob3coKX0ga2V5PVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUC5VUENvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgc3R5bGU9e3tncmlkQ29sdW1uOiAnMS8zJ319IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VQLlVQQ29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVAuVVBUaXRsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtVUC5VUFRpdGxlSWNvbn0gc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBhbHQ9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17VVAuVVBUaXRsZX0+e2N1cnJlbnRVc2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1VQLlVQVGl0bGV9IHN0eWxlPXt7b3BhY2l0eTogJzAuOCd9fT5wcm9maWxlIGxpbms8L2gzPlxyXG4gICAgICAgICAgPFJlZmVyZW5jZUxpbmsgcmw9e2N1cnJlbnRVc2VyLnJlZmVyZW5jZUxpbmt9IC8+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtVUC5VUFRpdGxlfT5wb3N0czwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVAuVVBQb3N0c0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxQb3N0U21hbGxMaXN0IHBvc3RzPXtjdXJyZW50VXNlci5wb3N0c30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsgcHJvcHMuY3VycmVudFVzZXIgIT09IGN1cnJlbnRVc2VyLnVzZXJuYW1lICYmXHJcbiAgICAgICAgPEZvcm1Db250YWluZXIgcGFsbGV0dGU9e3BhbGxldHRlfSA+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj5jb250YWN0IHtjdXJyZW50VXNlci51c2VybmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb3JtLXRpdGxlLXNlY29uZGFyeVwiPm1lc3NhZ2U8L2g0PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCIgey4uLm1lc3NhZ2UuZmllbGRzfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc3VibWl0LWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZXNzYWdlKCl9IGNsYXNzTmFtZT1cImZvcm0tc3VibWl0LWJ1dHRvblwiPnNlbmQ8L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgdXNlcm5hbWVzUXVlcnkgPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe3F1ZXJ5OiBBTExfVVNFUlN9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIGNvbnN0IHBhdGhzID0gdXNlcm5hbWVzUXVlcnkuZGF0YS5hbGxVc2Vycy5tYXAodSA9PiBgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQodS51c2VybmFtZSl9YClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xyXG4gIGNvbnN0IHVzZXJRdWVyeSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogRklORF9VU0VSLFxyXG4gICAgdmFyaWFibGVzOiB7dXNlcm5hbWU6IHBhcmFtcy51c2VybmFtZX1cclxuICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdXNlcjogdXNlclF1ZXJ5LmRhdGEuZmluZFVzZXJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBhbGVydE5vdGlmOiBzdGF0ZS5hbGVydE5vdGlmLFxyXG4gICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcbiAgfVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXRBbGVydDogYmluZEFjdGlvbkNyZWF0b3JzKHNldEFsZXJ0LCBkaXNwYXRjaCksXHJcbiAgICByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVXNlclBhZ2UpXHJcblxyXG4vLyB1c2VzIGZvcm1Db250YWluZXIuY3NzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/[username].js\n");

/***/ })

})