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
  MbappeImage: {
    position: "absolute"
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
      lineNumber: 68,
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/sub_1.png",
              alt: "sub_image_1",
              width: "50%",
              height: "auto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          xs: 6,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
            height: "100%",
            textAlign: "center",
            mt: "100px",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/Mbappe.png",
              alt: "sub_image_1",
              width: "30%",
              height: "auto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/chai-bia.png",
            alt: "sub_image_1",
            width: "30%",
            height: "auto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 137,
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
                lineNumber: 147,
                columnNumber: 53
              }, _this),
              backComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
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
              lineNumber: 143,
              columnNumber: 33
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiTWJhcHBlSW1hZ2UiLCJwb3NpdGlvbiIsIk1haW4iLCJjbGFzc2VzIiwiUmVhY3QiLCJVc2VyIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9wZW5Mb2dpbkRpYWxvZyIsInNldE9wZW5Mb2dpbkRpYWxvZyIsIm9wZW5TaGFyZURpYWxvZyIsInNldE9wZW5TaGFyZURpYWxvZyIsInQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIm1ha2VJZCIsIkJhc2U2NCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyTG9jYWwiLCJwYXJzZSIsInNsaWNlIiwiaWQiLCJEYXRlIiwiY3JlYXRlZEF0IiwiZ2V0VGltZSIsIm5ld1VzZXIiLCJ0aW1lc0FEYXkiLCJwb3NpdGlvblZvdWNoZXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJ2b3VjaGVyIiwibmFtZSIsImltYWdlIiwibnVtYmVyT2ZEYXlzIiwiZ2V0Vm91Y2hlciIsImluZGV4IiwibWFwIiwiaXRlbSIsImkiLCJ1c2VyVXBkYXRlIiwiYmFja0NhcmQiLCJzZXRDb25kaXRpb24iLCJzdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJCb3giLCJQYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQztBQUN6QkMsYUFBVyxFQUFFO0FBQ1RDLFlBQVEsRUFBRTtBQUREO0FBRFksQ0FBRCxDQUE1Qjs7QUFNQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFN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UCxVQUFVLENBQUNDLEtBQUQsQ0FBaEI7QUFBQTtBQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBdUJBLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFjSCxTQWZBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5Qko7QUFBQSxrQkFESjtBQXNESCxDQTNJRDs7R0FBTXRDLEk7VUFDY0osUzs7O0tBRGRJLEk7QUE2SU4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDVkNTYxNjc4N2E4YzMwYjcyNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWlubGluZS1zdHlsZXMvbm8taW5saW5lLXN0eWxlcyAqL1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQsIG1ha2VTdHlsZXMsIFBhcGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEJhc2U2NCB9IGZyb20gXCJqcy1iYXNlNjRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNeUNhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUNhcmQvTXlDYXJkXCI7XHJcbmltcG9ydCB7IExvZ2luRGlhbG9nIH0gZnJvbSBcIi4uL0RpYWxvZ3MvTG9naW5EaWFsb2dcIjtcclxuaW1wb3J0IHsgbWFrZUlkIH0gZnJvbSBcIi4uL2xpYnMvbWFrZUlkXCI7XHJcbmltcG9ydCB7IElVc2VyLCBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy9JVXNlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YUNhcmQge1xyXG4gICAgZnJvbnRDb21wb25lbnQ6IFJlYWN0Tm9kZTtcclxuICAgIGJhY2tDb21wb25lbnQ6IFJlYWN0Tm9kZTtcclxuICAgIHVzZXI6IElVc2VyO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIE1iYXBwZUltYWdlOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHJcbiAgICB9XHJcbn0pO1xyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGU8SVVzZXI+KG5ldyBVc2VyKCkpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbb3BlbkxvZ2luRGlhbG9nLCBzZXRPcGVuTG9naW5EaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZW5TaGFyZURpYWxvZywgc2V0T3BlblNoYXJlRGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRfbWdhbWVlXCIpO1xyXG4gICAgICAgIGlmICghdCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlcikpfWApO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKEJhc2U2NC5kZWNvZGUodC5zbGljZSgzKSkpIGFzIElVc2VyO1xyXG4gICAgICAgIGlmICghdXNlckxvY2FsLmlkKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbmV3IGRheSwgcmVzZXQgdm91Y2hlclxyXG4gICAgICAgIGlmIChuZXcgRGF0ZSh1c2VyTG9jYWwuY3JlYXRlZEF0KS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlcjogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi51c2VyTG9jYWwsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICB0aW1lc0FEYXk6IDAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblZvdWNoZXI6IEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgdm91Y2hlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdm91Y2hlcjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mRGF5czogdXNlckxvY2FsLm51bWJlck9mRGF5cyArIDFcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeShuZXdVc2VyKSl9YCk7XHJcbiAgICAgICAgICAgIHNldFVzZXIobmV3VXNlcik7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVc2VyKHVzZXJMb2NhbCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gKDxCb3g+bG9hZGluZy4uLjwvQm94Pik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRWb3VjaGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25Wb3VjaGVyID0gdXNlci5wb3NpdGlvblZvdWNoZXIubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdXNlclVwZGF0ZTogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgIHRpbWVzQURheTogdXNlci50aW1lc0FEYXkgKyAxLFxyXG4gICAgICAgICAgICBwb3NpdGlvblZvdWNoZXIsXHJcbiAgICAgICAgICAgIHZvdWNoZXI6IHVzZXIuYmFja0NhcmRbaW5kZXhdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VXNlcih1c2VyVXBkYXRlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlclVwZGF0ZSkpfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRDb25kaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1c2VyLnN0YXRlLmxvZ2luKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW5Mb2dpbkRpYWxvZyh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2V0TG9naW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlclVwZGF0ZTogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICAuLi51c2VyLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VXNlcih1c2VyVXBkYXRlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlclVwZGF0ZSkpfWApO1xyXG4gICAgICAgIHNldE9wZW5Mb2dpbkRpYWxvZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IGhlaWdodD17XCIxMDB2aFwifVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFxcXCIvYW5oX2JpYS5wbmdcXFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNvbXBvbmVudD17Qm94fSBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdWJfMS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMVwiIHdpZHRoPVwiNTAlXCIgaGVpZ2h0PVwiYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCIxMDAlXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9XCIxMDBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvTWJhcHBlLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCIzMCVcIiBoZWlnaHQ9XCJhdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NoYWktYmlhLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCIzMCVcIiBoZWlnaHQ9XCJhdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAge29wZW5Mb2dpbkRpYWxvZyAmJiA8TG9naW5EaWFsb2cgb25DbG9zZT17KCkgPT4gc2V0T3BlbkxvZ2luRGlhbG9nKGZhbHNlKX0gb25Paz17KCkgPT4gc2V0TG9naW4oKX0gLz59XHJcbiAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PXtQYXBlcn0gPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLnBvc2l0aW9uVm91Y2hlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9udENvbXBvbmVudD17PEJveD48L0JveD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tDb21wb25lbnQ9ezxCb3g+PC9Cb3g+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbm91Z2hDb25kaXRpb249eygpID0+IHNldENvbmRpdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbm91Z2hDb25kaXRpb249eygpID0+IGdldFZvdWNoZXIoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLCJzb3VyY2VSb290IjoiIn0=