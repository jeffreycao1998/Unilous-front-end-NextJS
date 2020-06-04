webpackHotUpdate("static\\development\\pages\\postformpage.js",{

/***/ "./components/user/utilities/UserNotifList.js":
/*!****************************************************!*\
  !*** ./components/user/utilities/UserNotifList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../schemas/queries */ \"./schemas/queries.js\");\n/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/reducers/currentUser */ \"./redux/reducers/currentUser.js\");\n/* harmony import */ var _Notif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Notif */ \"./components/user/utilities/Notif.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Loading */ \"./components/Loading.js\");\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/apollo */ \"./lib/apollo.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles/user/user.module.css */ \"./styles/user/user.module.css\");\n/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../styles/user/userUtilities.module.css */ \"./styles/user/userUtilities.module.css\");\n/* harmony import */ var _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10__);\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\user\\\\utilities\\\\UserNotifList.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nconst UserNotifList = props => {\n  _s();\n\n  // const notifsListQuery = useQuery(LIST_OF_NOTIFICATIONS, {\n  //     variables: {notifications: props.currentUser.notifications.map(n => n._id)}\n  // })\n  // console.log(notifsListQuery)\n  // const notifsListQuery = apolloClient.query({\n  //     query: LIST_OF_NOTIFICATIONS,\n  //     variables: {notifications: props.currentUser.notifications.map(n => n._id)}\n  // }).catch(err => console.log(err))\n  const {\n    0: sentFilter,\n    1: setSentFilter\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('to you');\n  const {\n    0: showSFDD,\n    1: setShowSFDD\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: statusFilter,\n    1: setStatusFilter\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('pending');\n  const {\n    0: showStatusDD,\n    1: setShowStatusDD\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false); // const notifsListConditions = (query, reducer) => {\n  //     if (!query) { return null }\n  //     if (reducer.length === 0) { return null }\n  //     if (reducer[0].userTo) {\n  //         if (query._id === reducer[0]._id ) { return null }\n  //     }\n  //     return query\n  // }\n  // const notifsList = notifsListConditions(notifsListQuery.data.listOfNotifications, props.currentUser.notifications)\n  // useEffect(() => {\n  //     if (notifsList) {\n  //         props.setCurrentUserNotifications(notifsList)\n  //     }\n  // }, [notifsList, props, props.setCurrentUserNotifications])\n\n  if (props.currentUser.notifications.length > 0) {\n    if (!props.currentUser.notifications[0].userTo) {\n      return __jsx(\"div\", {\n        style: {\n          gridColumn: '1/3'\n        },\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        style: {\n          height: '5vh'\n        },\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }\n      }), __jsx(_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        color: \"white\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }\n      }));\n    }\n  }\n\n  const Filter = () => {\n    const sentOptions = () => {\n      const allOptions = ['from you', 'to you'];\n\n      const onOptionClick = option => {\n        setSentFilter(option);\n        setShowSFDD(!showSFDD);\n      };\n\n      return allOptions.map(o => o !== sentFilter ? __jsx(\"div\", {\n        onClick: () => onOptionClick(o),\n        className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFDDOption,\n        key: `SFDD${o}`,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 59\n        }\n      }, o) : null);\n    };\n\n    const sentDD = showSFDD ? __jsx(\"div\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFropdown,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFSplitter,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 21\n      }\n    }), sentOptions()) : null;\n\n    const statusOptions = () => {\n      const allOptions = ['all', 'accepted', 'declined', 'pending', 'messages'];\n\n      const onOptionClick = option => {\n        setStatusFilter(option);\n        setShowStatusDD(!showStatusDD);\n      };\n\n      return allOptions.map(o => o !== statusFilter ? __jsx(\"div\", {\n        onClick: () => onOptionClick(o),\n        className: `${o}-option ${_styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFDDOption}`,\n        key: `StatusDD${o}`,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 65\n        }\n      }, o) : null);\n    };\n\n    const statusDD = showStatusDD ? __jsx(\"div\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFDropdown,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFSplitter,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 25\n      }\n    }), statusOptions()) : null;\n    return __jsx(\"div\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.notifFilterContainer,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFCreatorContainer,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 21\n      }\n    }, __jsx(\"h4\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFLabel,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 25\n      }\n    }, \"status\"), __jsx(\"div\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFOptionContainer,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 25\n      }\n    }, __jsx(\"div\", {\n      onClick: () => setShowStatusDD(!showStatusDD),\n      className: `${statusFilter}-option ${_styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFOption}`,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 29\n      }\n    }, statusFilter), statusDD)), __jsx(\"div\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFCreatorContainer,\n      style: {\n        marginLeft: '15px'\n      },\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }\n    }, __jsx(\"h4\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFLabel,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 21\n      }\n    }, \"sent\"), __jsx(\"div\", {\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFOptionContainer,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      onClick: () => setShowSFDD(!showSFDD),\n      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFOption,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 25\n      }\n    }, sentFilter), sentDD)));\n  };\n\n  const statusConditions = notif => {\n    if (statusFilter === 'all') return true;\n    const notifStatus = notif.accepted === null ? 'pending' : notif.accepted ? notif.post ? 'accepted' : 'messages' : 'declined';\n    if (statusFilter === notifStatus) return true;\n    return false;\n  };\n\n  const sentConditions = notif => {\n    if (sentFilter === 'all') return true;\n    const sentStatus = notif.userFrom.username === props.currentUser.username ? 'from you' : 'to you';\n    if (sentFilter === sentStatus) return true;\n    return false;\n  };\n\n  const showNotifications = props.currentUser.notifications.map(n => {\n    if (statusConditions(n) && sentConditions(n)) {\n      return __jsx(_Notif__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        notif: n,\n        key: `UN${n._id}`,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 20\n        }\n      });\n    }\n\n    return null;\n  }).reverse();\n  return __jsx(\"div\", {\n    className: \"userUtil-notif\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 9\n    }\n  }, __jsx(Filter, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    style: {\n      height: '10px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    style: {\n      display: 'grid',\n      rowGap: '10px',\n      width: '95%'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 13\n    }\n  }, showNotifications), __jsx(\"div\", {\n    style: {\n      height: '10px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(UserNotifList, \"RnsotlFR1VI9IKNetN+dHJ2aG5Q=\");\n\n_c = UserNotifList;\n\nconst mapStateToProps = state => {\n  return {\n    currentUser: state.currentUser\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    setCurrentUserNotifications: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_4__[\"setCurrentUserNotifications\"], dispatch)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(UserNotifList));\n\nvar _c;\n\n$RefreshReg$(_c, \"UserNotifList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvdXRpbGl0aWVzL1VzZXJOb3RpZkxpc3QuanM/ZTUwYyJdLCJuYW1lcyI6WyJVc2VyTm90aWZMaXN0IiwicHJvcHMiLCJzZW50RmlsdGVyIiwic2V0U2VudEZpbHRlciIsInVzZVN0YXRlIiwic2hvd1NGREQiLCJzZXRTaG93U0ZERCIsInN0YXR1c0ZpbHRlciIsInNldFN0YXR1c0ZpbHRlciIsInNob3dTdGF0dXNERCIsInNldFNob3dTdGF0dXNERCIsImN1cnJlbnRVc2VyIiwibm90aWZpY2F0aW9ucyIsImxlbmd0aCIsInVzZXJUbyIsImdyaWRDb2x1bW4iLCJoZWlnaHQiLCJGaWx0ZXIiLCJzZW50T3B0aW9ucyIsImFsbE9wdGlvbnMiLCJvbk9wdGlvbkNsaWNrIiwib3B0aW9uIiwibWFwIiwibyIsIlVVIiwiTkZERE9wdGlvbiIsInNlbnRERCIsIk5Gcm9wZG93biIsIk5GU3BsaXR0ZXIiLCJzdGF0dXNPcHRpb25zIiwic3RhdHVzREQiLCJORkRyb3Bkb3duIiwibm90aWZGaWx0ZXJDb250YWluZXIiLCJORkNyZWF0b3JDb250YWluZXIiLCJORkxhYmVsIiwiTkZPcHRpb25Db250YWluZXIiLCJORk9wdGlvbiIsIm1hcmdpbkxlZnQiLCJzdGF0dXNDb25kaXRpb25zIiwibm90aWYiLCJub3RpZlN0YXR1cyIsImFjY2VwdGVkIiwicG9zdCIsInNlbnRDb25kaXRpb25zIiwic2VudFN0YXR1cyIsInVzZXJGcm9tIiwidXNlcm5hbWUiLCJzaG93Tm90aWZpY2F0aW9ucyIsIm4iLCJfaWQiLCJyZXZlcnNlIiwiZGlzcGxheSIsInJvd0dhcCIsIndpZHRoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QUFBLEtBQ0NOLGlCQURELENBSEosRUFNSTtBQUFLLFNBQUssRUFBRTtBQUFDL0IsWUFBTSxFQUFFO0FBQVQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESjtBQVVILENBaklEOztHQUFNaEIsYTs7S0FBQUEsYTs7QUFtSU4sTUFBTXNELGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDLFNBQU87QUFDQTVDLGVBQVcsRUFBRTRDLEtBQUssQ0FBQzVDO0FBRG5CLEdBQVA7QUFHQSxDQUpEOztBQU1BLE1BQU02QyxrQkFBa0IsR0FBSUMsUUFBRCxJQUFjO0FBQ3JDLFNBQU87QUFDSEMsK0JBQTJCLEVBQUVDLGdFQUFrQixDQUFDRCx1RkFBRCxFQUE4QkQsUUFBOUI7QUFENUMsR0FBUDtBQUdILENBSkQ7O0FBTWVHLDBIQUFPLENBQ2xCTixlQURrQixFQUVsQkUsa0JBRmtCLENBQVAsQ0FHYnhELGFBSGEsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXNlci91dGlsaXRpZXMvVXNlck5vdGlmTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBMSVNUX09GX05PVElGSUNBVElPTlMgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyB9IGZyb20nLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCBOb3RpZiBmcm9tICcuL05vdGlmJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9Mb2FkaW5nJ1xyXG5pbXBvcnQgYXBvbGxvLCB7YXBvbGxvQ2xpZW50fSBmcm9tICcuLi8uLi8uLi9saWIvYXBvbGxvJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBVVSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyVXRpbGl0aWVzLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuXHJcbmNvbnN0IFVzZXJOb3RpZkxpc3QgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdFF1ZXJ5ID0gdXNlUXVlcnkoTElTVF9PRl9OT1RJRklDQVRJT05TLCB7XHJcbiAgICAvLyAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uczogcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCl9XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gY29uc29sZS5sb2cobm90aWZzTGlzdFF1ZXJ5KVxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdFF1ZXJ5ID0gYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgIC8vICAgICBxdWVyeTogTElTVF9PRl9OT1RJRklDQVRJT05TLFxyXG4gICAgLy8gICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbnM6IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQpfVxyXG4gICAgLy8gfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcblxyXG4gICAgY29uc3QgW3NlbnRGaWx0ZXIsIHNldFNlbnRGaWx0ZXJdID0gdXNlU3RhdGUoJ3RvIHlvdScpXHJcbiAgICBjb25zdCBbc2hvd1NGREQsIHNldFNob3dTRkREXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3N0YXR1c0ZpbHRlciwgc2V0U3RhdHVzRmlsdGVyXSA9IHVzZVN0YXRlKCdwZW5kaW5nJylcclxuICAgIGNvbnN0IFtzaG93U3RhdHVzREQsIHNldFNob3dTdGF0dXNERF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBjb25zdCBub3RpZnNMaXN0Q29uZGl0aW9ucyA9IChxdWVyeSwgcmVkdWNlcikgPT4ge1xyXG4gICAgLy8gICAgIGlmICghcXVlcnkpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgLy8gICAgIGlmIChyZWR1Y2VyLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAvLyAgICAgaWYgKHJlZHVjZXJbMF0udXNlclRvKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChxdWVyeS5faWQgPT09IHJlZHVjZXJbMF0uX2lkICkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBxdWVyeVxyXG4gICAgLy8gfVxyXG4gICAgXHJcblxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdCA9IG5vdGlmc0xpc3RDb25kaXRpb25zKG5vdGlmc0xpc3RRdWVyeS5kYXRhLmxpc3RPZk5vdGlmaWNhdGlvbnMsIHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMpXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBpZiAobm90aWZzTGlzdCkge1xyXG4gICAgLy8gICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobm90aWZzTGlzdClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbbm90aWZzTGlzdCwgcHJvcHMsIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9uc10pXHJcblxyXG4gICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9uc1swXS51c2VyVG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tncmlkQ29sdW1uOiAnMS8zJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc1dmgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIGNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbnRPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxPcHRpb25zID0gWydmcm9tIHlvdScsICd0byB5b3UnXVxyXG4gICAgICAgICAgICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VudEZpbHRlcihvcHRpb24pXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93U0ZERCghc2hvd1NGREQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFsbE9wdGlvbnMubWFwKG8gPT4gbyAhPT0gc2VudEZpbHRlciA/IDxkaXYgb25DbGljaz17KCkgPT4gb25PcHRpb25DbGljayhvKX0gY2xhc3NOYW1lPXtVVS5ORkRET3B0aW9ufSBrZXk9e2BTRkREJHtvfWB9PntvfTwvZGl2PiA6IG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbnRERCA9IHNob3dTRkREID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5Gcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GU3BsaXR0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbnRPcHRpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTogbnVsbFxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzT3B0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBbJ2FsbCcsICdhY2NlcHRlZCcsICdkZWNsaW5lZCcsICdwZW5kaW5nJywgJ21lc3NhZ2VzJ11cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uT3B0aW9uQ2xpY2sgPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzRmlsdGVyKG9wdGlvbilcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93U3RhdHVzREQoIXNob3dTdGF0dXNERClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxPcHRpb25zLm1hcChvID0+IG8gIT09IHN0YXR1c0ZpbHRlciA/IDxkaXYgb25DbGljaz17KCkgPT4gb25PcHRpb25DbGljayhvKX0gY2xhc3NOYW1lPXtgJHtvfS1vcHRpb24gJHtVVS5ORkRET3B0aW9ufWB9IGtleT17YFN0YXR1c0REJHtvfWB9PntvfTwvZGl2PiA6IG51bGwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzREQgPSBzaG93U3RhdHVzREQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GRHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZTcGxpdHRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c09wdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk6IG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ub3RpZkZpbHRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GQ3JlYXRvckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1VVLk5GTGFiZWx9PnN0YXR1czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORk9wdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dTdGF0dXNERCghc2hvd1N0YXR1c0REKX0gY2xhc3NOYW1lPXtgJHtzdGF0dXNGaWx0ZXJ9LW9wdGlvbiAke1VVLk5GT3B0aW9ufWB9PntzdGF0dXNGaWx0ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzRER9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GQ3JlYXRvckNvbnRhaW5lcn0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtVVS5ORkxhYmVsfT5zZW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZPcHRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dTRkREKCFzaG93U0ZERCl9IGNsYXNzTmFtZT17VVUuTkZPcHRpb259PntzZW50RmlsdGVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VudEREfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0dXNDb25kaXRpb25zID0gKG5vdGlmKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1c0ZpbHRlciA9PT0gJ2FsbCcpIHJldHVybiB0cnVlXHJcbiAgICAgICAgY29uc3Qgbm90aWZTdGF0dXMgPSBub3RpZi5hY2NlcHRlZCA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgICdwZW5kaW5nJyA6IFxyXG4gICAgICAgICAgICBub3RpZi5hY2NlcHRlZCA/XHJcbiAgICAgICAgICAgIG5vdGlmLnBvc3QgP1xyXG4gICAgICAgICAgICAgICAgJ2FjY2VwdGVkJyA6ICdtZXNzYWdlcydcclxuICAgICAgICAgICAgOiAnZGVjbGluZWQnXHJcbiAgICAgICAgaWYgKHN0YXR1c0ZpbHRlciA9PT0gbm90aWZTdGF0dXMpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW50Q29uZGl0aW9ucyA9IChub3RpZikgPT4ge1xyXG4gICAgICAgIGlmIChzZW50RmlsdGVyID09PSAnYWxsJykgcmV0dXJuIHRydWVcclxuICAgICAgICBjb25zdCBzZW50U3RhdHVzID0gbm90aWYudXNlckZyb20udXNlcm5hbWUgPT09IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lID9cclxuICAgICAgICAgICAgJ2Zyb20geW91JyA6ICd0byB5b3UnXHJcbiAgICAgICAgaWYgKHNlbnRGaWx0ZXIgPT09IHNlbnRTdGF0dXMpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93Tm90aWZpY2F0aW9ucyA9IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXNDb25kaXRpb25zKG4pICYmIHNlbnRDb25kaXRpb25zKG4pKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxOb3RpZiBub3RpZj17bn0ga2V5PXtgVU4ke24uX2lkfWB9Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH0pLnJldmVyc2UoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJVdGlsLW5vdGlmXCI+XHJcbiAgICAgICAgICAgIDxGaWx0ZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzEwcHgnfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdncmlkJywgcm93R2FwOiAnMTBweCcsIHdpZHRoOiAnOTUlJ319PlxyXG4gICAgICAgICAgICB7c2hvd05vdGlmaWNhdGlvbnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTBweCd9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVXNlck5vdGlmTGlzdCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/utilities/UserNotifList.js\n");

/***/ })

})