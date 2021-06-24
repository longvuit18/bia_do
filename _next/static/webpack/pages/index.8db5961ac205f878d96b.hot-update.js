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
    top: 30,
    transform: "rotate(-25.83deg)",
    left: 170
  },
  beerImage2: {
    position: "absolute",
    top: 30,
    transform: "rotate(-25.83deg)",
    left: 170
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
      lineNumber: 78,
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
              lineNumber: 131,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          xs: 6,
          component: _material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box,
          position: "relative",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
            height: "100%",
            textAlign: "center",
            mt: "100px",
            position: "relative",
            zIndex: "10",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/Mbappe.png",
              alt: "sub_image_1",
              width: "30%",
              height: "auto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/chai-bia.png",
            alt: "sub_image_1",
            width: "13%",
            height: "auto",
            className: classes.beerImage1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/chai-bia.png",
            alt: "sub_image_1",
            width: "13%",
            height: "auto",
            className: classes.beerImage2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYmVlckltYWdlMSIsInBvc2l0aW9uIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsImJlZXJJbWFnZTIiLCJNYWluIiwiY2xhc3NlcyIsIlJlYWN0IiwiVXNlciIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvcGVuTG9naW5EaWFsb2ciLCJzZXRPcGVuTG9naW5EaWFsb2ciLCJvcGVuU2hhcmVEaWFsb2ciLCJzZXRPcGVuU2hhcmVEaWFsb2ciLCJ0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJtYWtlSWQiLCJCYXNlNjQiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlckxvY2FsIiwicGFyc2UiLCJzbGljZSIsImlkIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImdldFRpbWUiLCJuZXdVc2VyIiwidGltZXNBRGF5IiwicG9zaXRpb25Wb3VjaGVyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwidm91Y2hlciIsIm5hbWUiLCJpbWFnZSIsIm51bWJlck9mRGF5cyIsImdldFZvdWNoZXIiLCJpbmRleCIsIm1hcCIsIml0ZW0iLCJpIiwidXNlclVwZGF0ZSIsImJhY2tDYXJkIiwic2V0Q29uZGl0aW9uIiwic3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiQm94IiwiUGFwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQSxJQUFNQSxTQUFTLEdBQUdDLDZEQUFVLENBQUM7QUFDekJDLFlBQVUsRUFBRTtBQUNSQyxZQUFRLEVBQUUsVUFERjtBQUVSQyxPQUFHLEVBQUUs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LDZCQUNJLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBQSxrQkFDS2hELElBQUksQ0FBQ3lCLGVBQUwsQ0FBcUJVLEdBQXJCLENBQXlCLFVBQUNDLElBQUQsRUFBT0YsS0FBUCxFQUFpQjtBQUN2Qyw4QkFDSSw4REFBQyxtREFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxjQUFFLEVBQUUsQ0FBZjtBQUFBLG1DQUNJLDhEQUFDLDZEQUFEO0FBQ0ksbUJBQUssRUFBQyxPQURWO0FBRUksb0JBQU0sRUFBQyxPQUZYO0FBR0ksbUJBQUssRUFBRUUsSUFIWDtBQUlJLDRCQUFjLGVBQUUsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKcEI7QUFLSSwyQkFBYSxlQUFFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTG5CO0FBTUksa0JBQUksRUFBRXBDLElBTlY7QUFPSSxnQ0FBa0IsRUFBRTtBQUFBLHVCQUFNd0MsWUFBWSxFQUFsQjtBQUFBLGVBUHhCO0FBUUksNkJBQWUsRUFBRTtBQUFBLHVCQUFNUCxVQUFVLENBQUNDLEtBQUQsQ0FBaEI7QUFBQTtBQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBdUJBLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFjSCxTQWZBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0o7QUFBQSxrQkFESjtBQXlESCxDQTlJRDs7R0FBTXRDLEk7VUFDY1IsUzs7O0tBRGRRLEk7QUFnSk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGRiNTk2MWFjMjA1Zjg3OGQ5NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWlubGluZS1zdHlsZXMvbm8taW5saW5lLXN0eWxlcyAqL1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQsIG1ha2VTdHlsZXMsIFBhcGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEJhc2U2NCB9IGZyb20gXCJqcy1iYXNlNjRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNeUNhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUNhcmQvTXlDYXJkXCI7XHJcbmltcG9ydCB7IExvZ2luRGlhbG9nIH0gZnJvbSBcIi4uL0RpYWxvZ3MvTG9naW5EaWFsb2dcIjtcclxuaW1wb3J0IHsgbWFrZUlkIH0gZnJvbSBcIi4uL2xpYnMvbWFrZUlkXCI7XHJcbmltcG9ydCB7IElVc2VyLCBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy9JVXNlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YUNhcmQge1xyXG4gICAgZnJvbnRDb21wb25lbnQ6IFJlYWN0Tm9kZTtcclxuICAgIGJhY2tDb21wb25lbnQ6IFJlYWN0Tm9kZTtcclxuICAgIHVzZXI6IElVc2VyO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGJlZXJJbWFnZTE6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogMzAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtMjUuODNkZWcpXCIsXHJcbiAgICAgICAgbGVmdDogMTcwXHJcblxyXG4gICAgfSxcclxuICAgIGJlZXJJbWFnZTI6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogMzAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtMjUuODNkZWcpXCIsXHJcbiAgICAgICAgbGVmdDogMTcwXHJcblxyXG4gICAgfVxyXG59KTtcclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlPElVc2VyPihuZXcgVXNlcigpKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW29wZW5Mb2dpbkRpYWxvZywgc2V0T3BlbkxvZ2luRGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcGVuU2hhcmVEaWFsb2csIHNldE9wZW5TaGFyZURpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0X21nYW1lZVwiKTtcclxuICAgICAgICBpZiAoIXQpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KHVzZXIpKX1gKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXNlckxvY2FsID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlKHQuc2xpY2UoMykpKSBhcyBJVXNlcjtcclxuICAgICAgICBpZiAoIXVzZXJMb2NhbC5pZCkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIG5ldyBkYXksIHJlc2V0IHZvdWNoZXJcclxuICAgICAgICBpZiAobmV3IERhdGUodXNlckxvY2FsLmNyZWF0ZWRBdCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXI6IElVc2VyID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udXNlckxvY2FsLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgdGltZXNBRGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Wb3VjaGVyOiBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+IGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIHZvdWNoZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZvdWNoZXI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkRheXM6IHVzZXJMb2NhbC5udW1iZXJPZkRheXMgKyAxXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkobmV3VXNlcikpfWApO1xyXG4gICAgICAgICAgICBzZXRVc2VyKG5ld1VzZXIpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VXNlcih1c2VyTG9jYWwpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuICg8Qm94PmxvYWRpbmcuLi48L0JveD4pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0Vm91Y2hlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVm91Y2hlciA9IHVzZXIucG9zaXRpb25Wb3VjaGVyLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHVzZXJVcGRhdGU6IElVc2VyID0ge1xyXG4gICAgICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgICAgICB0aW1lc0FEYXk6IHVzZXIudGltZXNBRGF5ICsgMSxcclxuICAgICAgICAgICAgcG9zaXRpb25Wb3VjaGVyLFxyXG4gICAgICAgICAgICB2b3VjaGVyOiB1c2VyLmJhY2tDYXJkW2luZGV4XSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFVzZXIodXNlclVwZGF0ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KHVzZXJVcGRhdGUpKX1gKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0Q29uZGl0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdXNlci5zdGF0ZS5sb2dpbikge1xyXG4gICAgICAgICAgICBzZXRPcGVuTG9naW5EaWFsb2codHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldExvZ2luID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJVcGRhdGU6IElVc2VyID0ge1xyXG4gICAgICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgICAgICBzdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgLi4udXNlci5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFVzZXIodXNlclVwZGF0ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KHVzZXJVcGRhdGUpKX1gKTtcclxuICAgICAgICBzZXRPcGVuTG9naW5EaWFsb2coZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveCBoZWlnaHQ9e1wiMTAwdmhcIn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcXFwiL2FuaF9iaWEucG5nXFxcIilcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjb21wb25lbnQ9e0JveH0gaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ViXzEucG5nXCIgYWx0PVwic3ViX2ltYWdlXzFcIiB3aWR0aD1cIjUwJVwiIGhlaWdodD1cImF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gY29tcG9uZW50PXtCb3h9IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCIxMDAlXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9XCIxMDBweFwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIiB6SW5kZXg9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvTWJhcHBlLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCIzMCVcIiBoZWlnaHQ9XCJhdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jaGFpLWJpYS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMVwiIHdpZHRoPVwiMTMlXCIgaGVpZ2h0PVwiYXV0b1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWVySW1hZ2UxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jaGFpLWJpYS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMVwiIHdpZHRoPVwiMTMlXCIgaGVpZ2h0PVwiYXV0b1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWVySW1hZ2UyfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAge29wZW5Mb2dpbkRpYWxvZyAmJiA8TG9naW5EaWFsb2cgb25DbG9zZT17KCkgPT4gc2V0T3BlbkxvZ2luRGlhbG9nKGZhbHNlKX0gb25Paz17KCkgPT4gc2V0TG9naW4oKX0gLz59XHJcbiAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PXtQYXBlcn0gPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLnBvc2l0aW9uVm91Y2hlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9udENvbXBvbmVudD17PEJveD48L0JveD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tDb21wb25lbnQ9ezxCb3g+PC9Cb3g+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbm91Z2hDb25kaXRpb249eygpID0+IHNldENvbmRpdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbm91Z2hDb25kaXRpb249eygpID0+IGdldFZvdWNoZXIoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLCJzb3VyY2VSb290IjoiIn0=