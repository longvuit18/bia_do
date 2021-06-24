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
  },
  motorbikeImage: {
    position: "absolute",
    top: "-7%",
    left: "17%",
    zIndex: 7
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
      lineNumber: 86,
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Zoom, {
            "in": true,
            style: {
              transitionDelay: "300ms"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
              textAlign: "center",
              mt: "10%",
              position: "relative",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/sub_1.png",
                alt: "sub_image_1",
                width: "60%",
                height: "auto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          xs: 6,
          component: _material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box,
          position: "relative",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Zoom, {
            "in": true,
            style: {
              transitionDelay: "500ms"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
              textAlign: "center",
              mt: "10%",
              position: "relative",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/Mbappe.png",
                alt: "sub_image_1",
                width: "35%",
                height: "auto",
                style: {
                  position: "relative",
                  zIndex: 6
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/chai-bia.png",
                alt: "sub_image_1",
                width: "13%",
                height: "auto",
                className: classes.beerImage1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/chai-bia.png",
                alt: "sub_image_2",
                width: "8%",
                height: "auto",
                className: classes.beerImage2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Zoom, {
            "in": true,
            style: {
              transitionDelay: "600ms"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
              position: "relative",
              height: "100%",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/motorbike.png",
                alt: "sub_image_3",
                width: "60%",
                height: "auto",
                className: classes.motorbikeImage
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 161,
      columnNumber: 33
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
      height: "100vh",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
        container: true,
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
                lineNumber: 171,
                columnNumber: 53
              }, _this),
              backComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
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
              lineNumber: 167,
              columnNumber: 33
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYmVlckltYWdlMSIsInBvc2l0aW9uIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsInpJbmRleCIsImJlZXJJbWFnZTIiLCJyaWdodCIsIm1vdG9yYmlrZUltYWdlIiwiTWFpbiIsImNsYXNzZXMiLCJSZWFjdCIsIlVzZXIiLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib3BlbkxvZ2luRGlhbG9nIiwic2V0T3BlbkxvZ2luRGlhbG9nIiwib3BlblNoYXJlRGlhbG9nIiwic2V0T3BlblNoYXJlRGlhbG9nIiwidCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwibWFrZUlkIiwiQmFzZTY0IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJMb2NhbCIsInBhcnNlIiwic2xpY2UiLCJpZCIsIkRhdGUiLCJjcmVhdGVkQXQiLCJnZXRUaW1lIiwibmV3VXNlciIsInRpbWVzQURheSIsInBvc2l0aW9uVm91Y2hlciIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInZvdWNoZXIiLCJuYW1lIiwiaW1hZ2UiLCJudW1iZXJPZkRheXMiLCJnZXRWb3VjaGVyIiwiaW5kZXgiLCJtYXAiLCJpdGVtIiwiaSIsInVzZXJVcGRhdGUiLCJiYWNrQ2FyZCIsInNldENvbmRpdGlvbiIsInN0YXRlIiwibG9naW4iLCJzZXRMb2dpbiIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsIkJveCIsInRyYW5zaXRpb25EZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQztBQUN6QkMsWUFB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QUUsRUFBRSxDQUFmO0FBQUEsbUNBQ0ksOERBQUMsNkRBQUQ7QUFDSSxtQkFBSyxFQUFDLE9BRFY7QUFFSSxvQkFBTSxFQUFDLE9BRlg7QUFHSSxtQkFBSyxFQUFFRSxJQUhYO0FBSUksNEJBQWMsZUFBRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpwQjtBQUtJLDJCQUFhLGVBQUUsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMbkI7QUFNSSxrQkFBSSxFQUFFcEMsSUFOVjtBQU9JLGdDQUFrQixFQUFFO0FBQUEsdUJBQU13QyxZQUFZLEVBQWxCO0FBQUEsZUFQeEI7QUFRSSw2QkFBZSxFQUFFO0FBQUEsdUJBQU1QLFVBQVUsQ0FBQ0MsS0FBRCxDQUFoQjtBQUFBO0FBUnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUF1QkEsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQWNILFNBZkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBDSjtBQUFBLGtCQURKO0FBNERILENBakpEOztHQUFNdEMsSTtVQUNjWCxTOzs7S0FEZFcsSTtBQW1KTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMTYwMTViNmJiMWRmOGY3M2I2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8taW5saW5lLXN0eWxlcy9uby1pbmxpbmUtc3R5bGVzICovXHJcbmltcG9ydCB7IEJveCwgR3JpZCwgbWFrZVN0eWxlcywgWm9vbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBCYXNlNjQgfSBmcm9tIFwianMtYmFzZTY0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTXlDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlDYXJkL015Q2FyZFwiO1xyXG5pbXBvcnQgeyBMb2dpbkRpYWxvZyB9IGZyb20gXCIuLi9EaWFsb2dzL0xvZ2luRGlhbG9nXCI7XHJcbmltcG9ydCB7IG1ha2VJZCB9IGZyb20gXCIuLi9saWJzL21ha2VJZFwiO1xyXG5pbXBvcnQgeyBJVXNlciwgVXNlciB9IGZyb20gXCIuLi9tb2RlbHMvSVVzZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFDYXJkIHtcclxuICAgIGZyb250Q29tcG9uZW50OiBSZWFjdE5vZGU7XHJcbiAgICBiYWNrQ29tcG9uZW50OiBSZWFjdE5vZGU7XHJcbiAgICB1c2VyOiBJVXNlcjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBiZWVySW1hZ2UxOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB0b3A6IFwiLTEwJVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoLTI1LjgzZGVnKVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMjMlXCIsXHJcbiAgICAgICAgekluZGV4OiA1XHJcblxyXG4gICAgfSxcclxuICAgIGJlZXJJbWFnZTI6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogXCIyNSVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDMyLjg4ZGVnKVwiLFxyXG4gICAgICAgIHJpZ2h0OiBcIjI3JVwiLFxyXG4gICAgICAgIHpJbmRleDogMTFcclxuXHJcbiAgICB9LFxyXG4gICAgbW90b3JiaWtlSW1hZ2U6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogXCItNyVcIixcclxuICAgICAgICBsZWZ0OiBcIjE3JVwiLFxyXG4gICAgICAgIHpJbmRleDogN1xyXG4gICAgfVxyXG59KTtcclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlPElVc2VyPihuZXcgVXNlcigpKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW29wZW5Mb2dpbkRpYWxvZywgc2V0T3BlbkxvZ2luRGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcGVuU2hhcmVEaWFsb2csIHNldE9wZW5TaGFyZURpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0X21nYW1lZVwiKTtcclxuICAgICAgICBpZiAoIXQpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KHVzZXIpKX1gKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXNlckxvY2FsID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlKHQuc2xpY2UoMykpKSBhcyBJVXNlcjtcclxuICAgICAgICBpZiAoIXVzZXJMb2NhbC5pZCkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIG5ldyBkYXksIHJlc2V0IHZvdWNoZXJcclxuICAgICAgICBpZiAobmV3IERhdGUodXNlckxvY2FsLmNyZWF0ZWRBdCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXI6IElVc2VyID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udXNlckxvY2FsLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgdGltZXNBRGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Wb3VjaGVyOiBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+IGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIHZvdWNoZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZvdWNoZXI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkRheXM6IHVzZXJMb2NhbC5udW1iZXJPZkRheXMgKyAxXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkobmV3VXNlcikpfWApO1xyXG4gICAgICAgICAgICBzZXRVc2VyKG5ld1VzZXIpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VXNlcih1c2VyTG9jYWwpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuICg8Qm94PmxvYWRpbmcuLi48L0JveD4pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0Vm91Y2hlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVm91Y2hlciA9IHVzZXIucG9zaXRpb25Wb3VjaGVyLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHVzZXJVcGRhdGU6IElVc2VyID0ge1xyXG4gICAgICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgICAgICB0aW1lc0FEYXk6IHVzZXIudGltZXNBRGF5ICsgMSxcclxuICAgICAgICAgICAgcG9zaXRpb25Wb3VjaGVyLFxyXG4gICAgICAgICAgICB2b3VjaGVyOiB1c2VyLmJhY2tDYXJkW2luZGV4XSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFVzZXIodXNlclVwZGF0ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KHVzZXJVcGRhdGUpKX1gKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0Q29uZGl0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdXNlci5zdGF0ZS5sb2dpbikge1xyXG4gICAgICAgICAgICBzZXRPcGVuTG9naW5EaWFsb2codHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldExvZ2luID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJVcGRhdGU6IElVc2VyID0ge1xyXG4gICAgICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgICAgICBzdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgLi4udXNlci5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFVzZXIodXNlclVwZGF0ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KHVzZXJVcGRhdGUpKX1gKTtcclxuICAgICAgICBzZXRPcGVuTG9naW5EaWFsb2coZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveCBoZWlnaHQ9e1wiMTAwdmhcIn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcXFwiL2FuaF9iaWEucG5nXFxcIilcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjb21wb25lbnQ9e0JveH0gaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Wm9vbSBpbj17dHJ1ZX0gc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBcIjMwMG1zXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIG10PVwiMTAlXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N1Yl8xLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCI2MCVcIiBoZWlnaHQ9XCJhdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1pvb20+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IGNvbXBvbmVudD17Qm94fSBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxab29tIGluPXt0cnVlfSBzdHlsZT17eyB0cmFuc2l0aW9uRGVsYXk6IFwiNTAwbXNcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9XCIxMCVcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvTWJhcHBlLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCIzNSVcIiBoZWlnaHQ9XCJhdXRvXCIgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgekluZGV4OiA2IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY2hhaS1iaWEucG5nXCIgYWx0PVwic3ViX2ltYWdlXzFcIiB3aWR0aD1cIjEzJVwiIGhlaWdodD1cImF1dG9cIiBjbGFzc05hbWU9e2NsYXNzZXMuYmVlckltYWdlMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jaGFpLWJpYS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMlwiIHdpZHRoPVwiOCVcIiBoZWlnaHQ9XCJhdXRvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJlZXJJbWFnZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ab29tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Wm9vbSBpbj17dHJ1ZX0gc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBcIjYwMG1zXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbW90b3JiaWtlLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8zXCIgd2lkdGg9XCI2MCVcIiBoZWlnaHQ9XCJhdXRvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdG9yYmlrZUltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvWm9vbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAge29wZW5Mb2dpbkRpYWxvZyAmJiA8TG9naW5EaWFsb2cgb25DbG9zZT17KCkgPT4gc2V0T3BlbkxvZ2luRGlhbG9nKGZhbHNlKX0gb25Paz17KCkgPT4gc2V0TG9naW4oKX0gLz59XHJcbiAgICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiMTAwdmhcIiA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIucG9zaXRpb25Wb3VjaGVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb250Q29tcG9uZW50PXs8Qm94PjwvQm94Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja0NvbXBvbmVudD17PEJveD48L0JveD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVub3VnaENvbmRpdGlvbj17KCkgPT4gc2V0Q29uZGl0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVub3VnaENvbmRpdGlvbj17KCkgPT4gZ2V0Vm91Y2hlcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==