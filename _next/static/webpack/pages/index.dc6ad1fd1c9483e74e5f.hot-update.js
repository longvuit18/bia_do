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

  var refBlock1 = react__WEBPACK_IMPORTED_MODULE_4___default().useRef(null);
  var refBlock2 = react__WEBPACK_IMPORTED_MODULE_4___default().useRef(null);
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(function () {
    console.log(window.pageYOffset);
  });
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: refBlock1,
      style: {
        height: "100vh",
        width: "100%",
        position: "relative",
        backgroundImage: "url(\"/anh_bia.png\")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
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
                lineNumber: 144,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
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
                lineNumber: 151,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/chai-bia.png",
                alt: "sub_image_1",
                width: "13%",
                height: "auto",
                className: classes.beerImage1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/chai-bia.png",
                alt: "sub_image_2",
                width: "8%",
                height: "auto",
                className: classes.beerImage2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
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
                lineNumber: 158,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 165,
      columnNumber: 33
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: refBlock2,
      style: {
        width: "100%",
        height: "100vh",
        backgroundImage: "url(\"/anh_bia2.png\")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
        container: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          xs: 6
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
            bgcolor: "#770004",
            border: "5px solid #FF9595",
            boxSizing: "border-box",
            borderRadius: 50,
            p: 3,
            mr: 3,
            mt: 3,
            children: loading ? "loading" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
              container: true,
              spacing: 2,
              component: _material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box,
              height: "100%",
              children: user.positionVoucher.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                  item: true,
                  xs: 4,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
                    height: "200px",
                    textAlign: "center",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyCard_MyCard__WEBPACK_IMPORTED_MODULE_5__.MyCard, {
                      state: item,
                      frontComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                        src: "/cardfront.png",
                        alt: "sub_image_2",
                        width: "65%",
                        height: "auto"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 191,
                        columnNumber: 61
                      }, _this),
                      backComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                        src: "/Mbappe.png",
                        alt: "sub_image_2",
                        width: "65%",
                        height: "auto"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 194,
                        columnNumber: 72
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
                      lineNumber: 188,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 49
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 45
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Main, "xHsT9TI41sVQDRCdD/2tnZYu6a8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYmVlckltYWdlMSIsInBvc2l0aW9uIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsInpJbmRleCIsImJlZXJJbWFnZTIiLCJyaWdodCIsIm1vdG9yYmlrZUltYWdlIiwiTWFpbiIsImNsYXNzZXMiLCJSZWFjdCIsIlVzZXIiLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib3BlbkxvZ2luRGlhbG9nIiwic2V0T3BlbkxvZ2luRGlhbG9nIiwib3BlblNoYXJlRGlhbG9nIiwic2V0T3BlblNoYXJlRGlhbG9nIiwicmVmQmxvY2sxIiwicmVmQmxvY2syIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwibWFrZUlkIiwiQmFzZTY0IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJMb2NhbCIsInBhcnNlIiwic2xpY2UiLCJpZCIsIkRhdGUiLCJjcmVhdGVkQXQiLCJnZXRUaW1lIiwibmV3VXNlciIsInRpbWVzQURheSIsInBvc2l0aW9uVm91Y2hlciIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInZvdWNoZXIiLCJuYW1lIiwiaW1hZ2UiLCJudW1iZXJPZkRheXMiLCJnZXRWb3VjaGVyIiwiaW5kZXgiLCJtYXAiLCJpdGVtIiwiaSIsInVzZXJVcGRhdGUiLCJiYWNrQ2FyZCIsInNldENvbmRpdGlvbiIsInN0YXRlIiwibG9naW4iLCJzZXRMb2dpbiIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiQm94IiwidHJhbnNpdGlvbkRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFB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RFg7QUFFSSxvQ0FBYyxlQUNWO0FBQUssMkJBQUcsRUFBQyxnQkFBVDtBQUEwQiwyQkFBRyxFQUFDLGFBQTlCO0FBQTRDLDZCQUFLLEVBQUMsS0FBbEQ7QUFBd0QsOEJBQU0sRUFBQztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUhSO0FBTUksbUNBQWEsZUFBRTtBQUFLLDJCQUFHLEVBQUMsYUFBVDtBQUF1QiwyQkFBRyxFQUFDLGFBQTNCO0FBQXlDLDZCQUFLLEVBQUMsS0FBL0M7QUFBcUQsOEJBQU0sRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQU5uQjtBQU9JLDBCQUFJLEVBQUUxQyxJQVBWO0FBUUksd0NBQWtCLEVBQUU7QUFBQSwrQkFBTThDLFlBQVksRUFBbEI7QUFBQSx1QkFSeEI7QUFTSSxxQ0FBZSxFQUFFO0FBQUEsK0JBQU1QLFVBQVUsQ0FBQ0MsS0FBRCxDQUFoQjtBQUFBO0FBVHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBQXVCQSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBaUJILGVBbEJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0Q0o7QUFBQSxrQkFESjtBQXNGSCxDQTdLRDs7R0FBTTVDLEk7VUFDY1gsUzs7O0tBRGRXLEk7QUErS04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGM2YWQxZmQxYzk0ODNlNzRlNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWlubGluZS1zdHlsZXMvbm8taW5saW5lLXN0eWxlcyAqL1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQsIG1ha2VTdHlsZXMsIFpvb20gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQmFzZTY0IH0gZnJvbSBcImpzLWJhc2U2NFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE15Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL015Q2FyZC9NeUNhcmRcIjtcclxuaW1wb3J0IHsgTG9naW5EaWFsb2cgfSBmcm9tIFwiLi4vRGlhbG9ncy9Mb2dpbkRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtYWtlSWQgfSBmcm9tIFwiLi4vbGlicy9tYWtlSWRcIjtcclxuaW1wb3J0IHsgSVVzZXIsIFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL0lVc2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhQ2FyZCB7XHJcbiAgICBmcm9udENvbXBvbmVudDogUmVhY3ROb2RlO1xyXG4gICAgYmFja0NvbXBvbmVudDogUmVhY3ROb2RlO1xyXG4gICAgdXNlcjogSVVzZXI7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgYmVlckltYWdlMToge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiBcIi0xMCVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKC0yNS44M2RlZylcIixcclxuICAgICAgICBsZWZ0OiBcIjIzJVwiLFxyXG4gICAgICAgIHpJbmRleDogNVxyXG5cclxuICAgIH0sXHJcbiAgICBiZWVySW1hZ2UyOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB0b3A6IFwiMjUlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzMi44OGRlZylcIixcclxuICAgICAgICByaWdodDogXCIyNyVcIixcclxuICAgICAgICB6SW5kZXg6IDExXHJcblxyXG4gICAgfSxcclxuICAgIG1vdG9yYmlrZUltYWdlOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB0b3A6IFwiLTclXCIsXHJcbiAgICAgICAgbGVmdDogXCIxNyVcIixcclxuICAgICAgICB6SW5kZXg6IDdcclxuICAgIH1cclxufSk7XHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZTxJVXNlcj4obmV3IFVzZXIoKSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtvcGVuTG9naW5EaWFsb2csIHNldE9wZW5Mb2dpbkRpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BlblNoYXJlRGlhbG9nLCBzZXRPcGVuU2hhcmVEaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcmVmQmxvY2sxID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IHJlZkJsb2NrMiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cucGFnZVlPZmZzZXQpO1xyXG4gICAgfSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRfbWdhbWVlXCIpO1xyXG4gICAgICAgIGlmICghdCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlcikpfWApO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKEJhc2U2NC5kZWNvZGUodC5zbGljZSgzKSkpIGFzIElVc2VyO1xyXG4gICAgICAgIGlmICghdXNlckxvY2FsLmlkKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbmV3IGRheSwgcmVzZXQgdm91Y2hlclxyXG4gICAgICAgIGlmIChuZXcgRGF0ZSh1c2VyTG9jYWwuY3JlYXRlZEF0KS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlcjogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi51c2VyTG9jYWwsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICB0aW1lc0FEYXk6IDAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblZvdWNoZXI6IEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgdm91Y2hlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdm91Y2hlcjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mRGF5czogdXNlckxvY2FsLm51bWJlck9mRGF5cyArIDFcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeShuZXdVc2VyKSl9YCk7XHJcbiAgICAgICAgICAgIHNldFVzZXIobmV3VXNlcik7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVc2VyKHVzZXJMb2NhbCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Vm91Y2hlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVm91Y2hlciA9IHVzZXIucG9zaXRpb25Wb3VjaGVyLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHVzZXJVcGRhdGU6IElVc2VyID0ge1xyXG4gICAgICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgICAgICB0aW1lc0FEYXk6IHVzZXIudGltZXNBRGF5ICsgMSxcclxuICAgICAgICAgICAgcG9zaXRpb25Wb3VjaGVyLFxyXG4gICAgICAgICAgICB2b3VjaGVyOiB1c2VyLmJhY2tDYXJkW2luZGV4XSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFVzZXIodXNlclVwZGF0ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KHVzZXJVcGRhdGUpKX1gKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0Q29uZGl0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdXNlci5zdGF0ZS5sb2dpbikge1xyXG4gICAgICAgICAgICBzZXRPcGVuTG9naW5EaWFsb2codHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldExvZ2luID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJVcGRhdGU6IElVc2VyID0ge1xyXG4gICAgICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgICAgICBzdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgLi4udXNlci5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFVzZXIodXNlclVwZGF0ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KHVzZXJVcGRhdGUpKX1gKTtcclxuICAgICAgICBzZXRPcGVuTG9naW5EaWFsb2coZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWZCbG9jazF9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXFxcIi9hbmhfYmlhLnBuZ1xcXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50PXtCb3h9IGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFpvb20gaW49e3RydWV9IHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogXCIzMDBtc1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD1cIjEwJVwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdWJfMS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMVwiIHdpZHRoPVwiNjAlXCIgaGVpZ2h0PVwiYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ab29tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBjb21wb25lbnQ9e0JveH0gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Wm9vbSBpbj17dHJ1ZX0gc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBcIjUwMG1zXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIG10PVwiMTAlXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL01iYXBwZS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMVwiIHdpZHRoPVwiMzUlXCIgaGVpZ2h0PVwiYXV0b1wiIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHpJbmRleDogNiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NoYWktYmlhLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCIxMyVcIiBoZWlnaHQ9XCJhdXRvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJlZXJJbWFnZTF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY2hhaS1iaWEucG5nXCIgYWx0PVwic3ViX2ltYWdlXzJcIiB3aWR0aD1cIjglXCIgaGVpZ2h0PVwiYXV0b1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWVySW1hZ2UyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvWm9vbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFpvb20gaW49e3RydWV9IHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogXCI2MDBtc1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21vdG9yYmlrZS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfM1wiIHdpZHRoPVwiNjAlXCIgaGVpZ2h0PVwiYXV0b1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3RvcmJpa2VJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1pvb20+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtvcGVuTG9naW5EaWFsb2cgJiYgPExvZ2luRGlhbG9nIG9uQ2xvc2U9eygpID0+IHNldE9wZW5Mb2dpbkRpYWxvZyhmYWxzZSl9IG9uT2s9eygpID0+IHNldExvZ2luKCl9IC8+fVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZkJsb2NrMn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXFxcIi9hbmhfYmlhMi5wbmdcXFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggYmdjb2xvcj1cIiM3NzAwMDRcIiBib3JkZXI9XCI1cHggc29saWQgI0ZGOTU5NVwiIGJveFNpemluZz1cImJvcmRlci1ib3hcIiBib3JkZXJSYWRpdXM9ezUwfSBwPXszfSBtcj17M30gbXQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcImxvYWRpbmdcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17Qm94fSBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLnBvc2l0aW9uVm91Y2hlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjIwMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbnRDb21wb25lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jYXJkZnJvbnQucG5nXCIgYWx0PVwic3ViX2ltYWdlXzJcIiB3aWR0aD1cIjY1JVwiIGhlaWdodD1cImF1dG9cIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja0NvbXBvbmVudD17PGltZyBzcmM9XCIvTWJhcHBlLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8yXCIgd2lkdGg9XCI2NSVcIiBoZWlnaHQ9XCJhdXRvXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbm91Z2hDb25kaXRpb249eygpID0+IHNldENvbmRpdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVub3VnaENvbmRpdGlvbj17KCkgPT4gZ2V0Vm91Y2hlcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLCJzb3VyY2VSb290IjoiIn0=