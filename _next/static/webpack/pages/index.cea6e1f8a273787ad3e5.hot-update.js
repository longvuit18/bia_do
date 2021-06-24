self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MyCard_MyCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyCard/MyCard */ "./src/components/MyCard/MyCard.tsx");
/* harmony import */ var _Dialogs_LoginDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dialogs/LoginDialog */ "./src/Dialogs/LoginDialog.tsx");
/* harmony import */ var _libs_makeId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/makeId */ "./src/libs/makeId.ts");
/* harmony import */ var _models_IUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/IUser */ "./src/models/IUser.ts");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\project_mmgame\\games\\bia_do\\src\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable no-inline-styles/no-inline-styles */







var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.makeStyles)({
  beerImage1: {
    position: "absolute",
    top: "-10%",
    transform: "rotate(-25.83deg)",
    left: "23%",
    zIndex: 5
  },
  beerImage2: {
    position: "absolute",
    top: "25%",
    transform: "rotate(32.88deg)",
    right: "27%",
    zIndex: 11
  }
});

var Main = function Main() {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(new _models_IUser__WEBPACK_IMPORTED_MODULE_8__.User()),
      _React$useState2 = (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      user = _React$useState2[0],
      setUser = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(true),
      _React$useState4 = (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false),
      _React$useState6 = (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState5, 2),
      openLoginDialog = _React$useState6[0],
      setOpenLoginDialog = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false),
      _React$useState8 = (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState7, 2),
      openShareDialog = _React$useState8[0],
      setOpenShareDialog = _React$useState8[1];

  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(function () {
    var t = localStorage.getItem("t_mgamee");

    if (!t) {
      localStorage.setItem("t_mgamee", "".concat((0,_libs_makeId__WEBPACK_IMPORTED_MODULE_7__.makeId)(3)).concat(js_base64__WEBPACK_IMPORTED_MODULE_3__.Base64.encode(JSON.stringify(user))));
      setLoading(false);
      return;
    }

    var userLocal = JSON.parse(js_base64__WEBPACK_IMPORTED_MODULE_3__.Base64.decode(t.slice(3)));

    if (!userLocal.id) {
      setLoading(false);
      return;
    } // if this is a new day, reset voucher


    if (new Date(userLocal.createdAt).getTime() + 24 * 60 * 60 * 1000 < new Date().getTime()) {
      var newUser = _objectSpread(_objectSpread({}, userLocal), {}, {
        createdAt: new Date(),
        timesADay: 0,
        positionVoucher: Array.from({
          length: 9
        }, function () {
          return false;
        }),
        voucher: {
          name: "",
          voucher: "",
          image: ""
        },
        numberOfDays: userLocal.numberOfDays + 1
      });

      localStorage.setItem("t_mgamee", "".concat((0,_libs_makeId__WEBPACK_IMPORTED_MODULE_7__.makeId)(3)).concat(js_base64__WEBPACK_IMPORTED_MODULE_3__.Base64.encode(JSON.stringify(newUser))));
      setUser(newUser);
      setLoading(false);
      return;
    }

    setUser(userLocal);
    setLoading(false);
  }, []);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }, _this);
  }

  var getVoucher = function getVoucher(index) {
    var positionVoucher = user.positionVoucher.map(function (item, i) {
      if (i === index) {
        return true;
      }

      return item;
    });

    var userUpdate = _objectSpread(_objectSpread({}, user), {}, {
      timesADay: user.timesADay + 1,
      positionVoucher: positionVoucher,
      voucher: user.backCard[index]
    });

    setUser(userUpdate);
    localStorage.setItem("t_mgamee", "".concat((0,_libs_makeId__WEBPACK_IMPORTED_MODULE_7__.makeId)(3)).concat(js_base64__WEBPACK_IMPORTED_MODULE_3__.Base64.encode(JSON.stringify(userUpdate))));
  };

  var setCondition = function setCondition() {
    if (!user.state.login) {
      setOpenLoginDialog(true);
      return;
    }

    return;
  };

  var setLogin = function setLogin() {
    var userUpdate = _objectSpread(_objectSpread({}, user), {}, {
      state: _objectSpread(_objectSpread({}, user.state), {}, {
        login: true
      })
    });

    setUser(userUpdate);
    localStorage.setItem("t_mgamee", "".concat((0,_libs_makeId__WEBPACK_IMPORTED_MODULE_7__.makeId)(3)).concat(js_base64__WEBPACK_IMPORTED_MODULE_3__.Base64.encode(JSON.stringify(userUpdate))));
    setOpenLoginDialog(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
      height: "100vh",
      style: {
        backgroundImage: "url(\"/anh_bia.png\")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      position: "relative",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
        container: true,
        component: _material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box,
        height: "100%",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
            textAlign: "center",
            mt: "10%",
            position: "relative",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/sub_1.png",
              alt: "sub_image_1",
              width: "50%",
              height: "auto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          xs: 6,
          component: _material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box,
          position: "relative",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
            textAlign: "center",
            mt: "10%",
            position: "relative",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/Mbappe.png",
              alt: "sub_image_1",
              width: "30%",
              height: "auto",
              style: {
                position: "relative",
                zIndex: 6
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/chai-bia.png",
              alt: "sub_image_1",
              width: "13%",
              height: "auto",
              className: classes.beerImage1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/chai-bia.png",
              alt: "sub_image_2",
              width: "8%",
              height: "auto",
              className: classes.beerImage2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/motorbike.png",
              alt: "sub_image_2",
              width: "8%",
              height: "auto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, _this), openLoginDialog && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dialogs_LoginDialog__WEBPACK_IMPORTED_MODULE_6__.LoginDialog, {
      onClose: function onClose() {
        return setOpenLoginDialog(false);
      },
      onOk: function onOk() {
        return setLogin();
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
        container: true,
        spacing: 2,
        children: user.positionVoucher.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
            item: true,
            xs: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyCard_MyCard__WEBPACK_IMPORTED_MODULE_5__.MyCard, {
              width: "200px",
              height: "200px",
              state: item,
              frontComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 53
              }, _this),
              backComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 52
              }, _this),
              user: user,
              notEnoughCondition: function notEnoughCondition() {
                return setCondition();
              },
              enoughCondition: function enoughCondition() {
                return getVoucher(index);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 33
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Main, "o1Z6nx2Kiq96U7bIt/SlmvCcluw=", false, function () {
  return [useStyles];
});

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYmVlckltYWdlMSIsInBvc2l0aW9uIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsInpJbmRleCIsImJlZXJJbWFnZTIiLCJyaWdodCIsIk1haW4iLCJjbGFzc2VzIiwiUmVhY3QiLCJVc2VyIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9wZW5Mb2dpbkRpYWxvZyIsInNldE9wZW5Mb2dpbkRpYWxvZyIsIm9wZW5TaGFyZURpYWxvZyIsInNldE9wZW5TaGFyZURpYWxvZyIsInQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIm1ha2VJZCIsIkJhc2U2NCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyTG9jYWwiLCJwYXJzZSIsInNsaWNlIiwiaWQiLCJEYXRlIiwiY3JlYXRlZEF0IiwiZ2V0VGltZSIsIm5ld1VzZXIiLCJ0aW1lc0FEYXkiLCJwb3NpdGlvblZvdWNoZXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJ2b3VjaGVyIiwibmFtZSIsImltYWdlIiwibnVtYmVyT2ZEYXlzIiwiZ2V0Vm91Y2hlciIsImluZGV4IiwibWFwIiwiaXRlbSIsImkiLCJ1c2VyVXBkYXRlIiwiYmFja0NhcmQiLCJzZXRDb25kaXRpb24iLCJzdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJCb3giLCJQYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQztBQUN6QkMsWUFBVSxFQUFFO0FBQ1JDLFlBQVEsRUFBRSxVQURG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LEk7QUE4SU4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2VhNmUxZjhhMjczNzg3YWQzZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWlubGluZS1zdHlsZXMvbm8taW5saW5lLXN0eWxlcyAqL1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQsIG1ha2VTdHlsZXMsIFBhcGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEJhc2U2NCB9IGZyb20gXCJqcy1iYXNlNjRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNeUNhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUNhcmQvTXlDYXJkXCI7XHJcbmltcG9ydCB7IExvZ2luRGlhbG9nIH0gZnJvbSBcIi4uL0RpYWxvZ3MvTG9naW5EaWFsb2dcIjtcclxuaW1wb3J0IHsgbWFrZUlkIH0gZnJvbSBcIi4uL2xpYnMvbWFrZUlkXCI7XHJcbmltcG9ydCB7IElVc2VyLCBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy9JVXNlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YUNhcmQge1xyXG4gICAgZnJvbnRDb21wb25lbnQ6IFJlYWN0Tm9kZTtcclxuICAgIGJhY2tDb21wb25lbnQ6IFJlYWN0Tm9kZTtcclxuICAgIHVzZXI6IElVc2VyO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGJlZXJJbWFnZTE6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogXCItMTAlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtMjUuODNkZWcpXCIsXHJcbiAgICAgICAgbGVmdDogXCIyMyVcIixcclxuICAgICAgICB6SW5kZXg6IDVcclxuXHJcbiAgICB9LFxyXG4gICAgYmVlckltYWdlMjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiBcIjI1JVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMzIuODhkZWcpXCIsXHJcbiAgICAgICAgcmlnaHQ6IFwiMjclXCIsXHJcbiAgICAgICAgekluZGV4OiAxMVxyXG5cclxuICAgIH1cclxufSk7XHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZTxJVXNlcj4obmV3IFVzZXIoKSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtvcGVuTG9naW5EaWFsb2csIHNldE9wZW5Mb2dpbkRpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BlblNoYXJlRGlhbG9nLCBzZXRPcGVuU2hhcmVEaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidF9tZ2FtZWVcIik7XHJcbiAgICAgICAgaWYgKCF0KSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeSh1c2VyKSl9YCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXJMb2NhbCA9IEpTT04ucGFyc2UoQmFzZTY0LmRlY29kZSh0LnNsaWNlKDMpKSkgYXMgSVVzZXI7XHJcbiAgICAgICAgaWYgKCF1c2VyTG9jYWwuaWQpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBuZXcgZGF5LCByZXNldCB2b3VjaGVyXHJcbiAgICAgICAgaWYgKG5ldyBEYXRlKHVzZXJMb2NhbC5jcmVhdGVkQXQpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDAgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyOiBJVXNlciA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnVzZXJMb2NhbCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHRpbWVzQURheTogMCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uVm91Y2hlcjogQXJyYXkuZnJvbSh7IGxlbmd0aDogOSB9LCAoKSA9PiBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICB2b3VjaGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB2b3VjaGVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZEYXlzOiB1c2VyTG9jYWwubnVtYmVyT2ZEYXlzICsgMVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KG5ld1VzZXIpKX1gKTtcclxuICAgICAgICAgICAgc2V0VXNlcihuZXdVc2VyKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVzZXIodXNlckxvY2FsKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiAoPEJveD5sb2FkaW5nLi4uPC9Cb3g+KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFZvdWNoZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvblZvdWNoZXIgPSB1c2VyLnBvc2l0aW9uVm91Y2hlci5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyVXBkYXRlOiBJVXNlciA9IHtcclxuICAgICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgICAgdGltZXNBRGF5OiB1c2VyLnRpbWVzQURheSArIDEsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uVm91Y2hlcixcclxuICAgICAgICAgICAgdm91Y2hlcjogdXNlci5iYWNrQ2FyZFtpbmRleF0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRVc2VyKHVzZXJVcGRhdGUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeSh1c2VyVXBkYXRlKSl9YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldENvbmRpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXVzZXIuc3RhdGUubG9naW4pIHtcclxuICAgICAgICAgICAgc2V0T3BlbkxvZ2luRGlhbG9nKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRMb2dpbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyVXBkYXRlOiBJVXNlciA9IHtcclxuICAgICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgICAgc3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIC4uLnVzZXIuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRVc2VyKHVzZXJVcGRhdGUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeSh1c2VyVXBkYXRlKSl9YCk7XHJcbiAgICAgICAgc2V0T3BlbkxvZ2luRGlhbG9nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggaGVpZ2h0PXtcIjEwMHZoXCJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXFxcIi9hbmhfYmlhLnBuZ1xcXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcblxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50PXtCb3h9IGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD1cIjEwJVwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N1Yl8xLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCI1MCVcIiBoZWlnaHQ9XCJhdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IGNvbXBvbmVudD17Qm94fSBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9XCIxMCVcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9NYmFwcGUucG5nXCIgYWx0PVwic3ViX2ltYWdlXzFcIiB3aWR0aD1cIjMwJVwiIGhlaWdodD1cImF1dG9cIiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB6SW5kZXg6IDYgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NoYWktYmlhLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCIxMyVcIiBoZWlnaHQ9XCJhdXRvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJlZXJJbWFnZTF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jaGFpLWJpYS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMlwiIHdpZHRoPVwiOCVcIiBoZWlnaHQ9XCJhdXRvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJlZXJJbWFnZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21vdG9yYmlrZS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMlwiIHdpZHRoPVwiOCVcIiBoZWlnaHQ9XCJhdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHtvcGVuTG9naW5EaWFsb2cgJiYgPExvZ2luRGlhbG9nIG9uQ2xvc2U9eygpID0+IHNldE9wZW5Mb2dpbkRpYWxvZyhmYWxzZSl9IG9uT2s9eygpID0+IHNldExvZ2luKCl9IC8+fVxyXG4gICAgICAgICAgICA8Qm94IGNvbXBvbmVudD17UGFwZXJ9ID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5wb3NpdGlvblZvdWNoZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbnRDb21wb25lbnQ9ezxCb3g+PC9Cb3g+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrQ29tcG9uZW50PXs8Qm94PjwvQm94Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW5vdWdoQ29uZGl0aW9uPXsoKSA9PiBzZXRDb25kaXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5vdWdoQ29uZGl0aW9uPXsoKSA9PiBnZXRWb3VjaGVyKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwic291cmNlUm9vdCI6IiJ9