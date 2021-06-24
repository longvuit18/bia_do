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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        height: "100vh",
        width: "100%",
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
                lineNumber: 142,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
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
                lineNumber: 149,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/chai-bia.png",
                alt: "sub_image_1",
                width: "13%",
                height: "auto",
                className: classes.beerImage1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/chai-bia.png",
                alt: "sub_image_2",
                width: "8%",
                height: "auto",
                className: classes.beerImage2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
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
                lineNumber: 156,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
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
      lineNumber: 163,
      columnNumber: 33
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      height: "100vh",
      style: {
        width: "100%",
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
          lineNumber: 174,
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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
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
                        lineNumber: 187,
                        columnNumber: 57
                      }, _this),
                      backComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                        src: "/Mbappe.png",
                        alt: "sub_image_2",
                        width: "65%",
                        height: "auto"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 68
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
                      lineNumber: 184,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 45
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 41
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYmVlckltYWdlMSIsInBvc2l0aW9uIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsInpJbmRleCIsImJlZXJJbWFnZTIiLCJyaWdodCIsIm1vdG9yYmlrZUltYWdlIiwiTWFpbiIsImNsYXNzZXMiLCJSZWFjdCIsIlVzZXIiLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib3BlbkxvZ2luRGlhbG9nIiwic2V0T3BlbkxvZ2luRGlhbG9nIiwib3BlblNoYXJlRGlhbG9nIiwic2V0T3BlblNoYXJlRGlhbG9nIiwidCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwibWFrZUlkIiwiQmFzZTY0IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJMb2NhbCIsInBhcnNlIiwic2xpY2UiLCJpZCIsIkRhdGUiLCJjcmVhdGVkQXQiLCJnZXRUaW1lIiwibmV3VXNlciIsInRpbWVzQURheSIsInBvc2l0aW9uVm91Y2hlciIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInZvdWNoZXIiLCJuYW1lIiwiaW1hZ2UiLCJudW1iZXJPZkRheXMiLCJnZXRWb3VjaGVyIiwiaW5kZXgiLCJtYXAiLCJpdGVtIiwiaSIsInVzZXJVcGRhdGUiLCJiYWNrQ2FyZCIsInNldENvbmRpdGlvbiIsInN0YXRlIiwibG9naW4iLCJzZXRMb2dpbiIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiQm94IiwidHJhbnNpdGlvbkRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBTUEsU0FBUyxHQUFHQyw2REFB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QUFNLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFObkI7QUFPSSwwQkFBSSxFQUFFcEMsSUFQVjtBQVFJLHdDQUFrQixFQUFFO0FBQUEsK0JBQU13QyxZQUFZLEVBQWxCO0FBQUEsdUJBUnhCO0FBU0kscUNBQWUsRUFBRTtBQUFBLCtCQUFNUCxVQUFVLENBQUNDLEtBQUQsQ0FBaEI7QUFBQTtBQVRyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQUF1QkEsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQWlCSCxlQWxCQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdENKO0FBQUEsa0JBREo7QUFvRkgsQ0F6S0Q7O0dBQU10QyxJO1VBQ2NYLFM7OztLQURkVyxJO0FBMktOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgzYjFmYTEzYmUyNjM2MjJiMmQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1pbmxpbmUtc3R5bGVzL25vLWlubGluZS1zdHlsZXMgKi9cclxuaW1wb3J0IHsgQm94LCBHcmlkLCBtYWtlU3R5bGVzLCBab29tIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEJhc2U2NCB9IGZyb20gXCJqcy1iYXNlNjRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNeUNhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUNhcmQvTXlDYXJkXCI7XHJcbmltcG9ydCB7IExvZ2luRGlhbG9nIH0gZnJvbSBcIi4uL0RpYWxvZ3MvTG9naW5EaWFsb2dcIjtcclxuaW1wb3J0IHsgbWFrZUlkIH0gZnJvbSBcIi4uL2xpYnMvbWFrZUlkXCI7XHJcbmltcG9ydCB7IElVc2VyLCBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy9JVXNlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YUNhcmQge1xyXG4gICAgZnJvbnRDb21wb25lbnQ6IFJlYWN0Tm9kZTtcclxuICAgIGJhY2tDb21wb25lbnQ6IFJlYWN0Tm9kZTtcclxuICAgIHVzZXI6IElVc2VyO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGJlZXJJbWFnZTE6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogXCItMTAlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtMjUuODNkZWcpXCIsXHJcbiAgICAgICAgbGVmdDogXCIyMyVcIixcclxuICAgICAgICB6SW5kZXg6IDVcclxuXHJcbiAgICB9LFxyXG4gICAgYmVlckltYWdlMjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiBcIjI1JVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMzIuODhkZWcpXCIsXHJcbiAgICAgICAgcmlnaHQ6IFwiMjclXCIsXHJcbiAgICAgICAgekluZGV4OiAxMVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3RvcmJpa2VJbWFnZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiBcIi03JVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMTclXCIsXHJcbiAgICAgICAgekluZGV4OiA3XHJcbiAgICB9XHJcbn0pO1xyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGU8SVVzZXI+KG5ldyBVc2VyKCkpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbb3BlbkxvZ2luRGlhbG9nLCBzZXRPcGVuTG9naW5EaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZW5TaGFyZURpYWxvZywgc2V0T3BlblNoYXJlRGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRfbWdhbWVlXCIpO1xyXG4gICAgICAgIGlmICghdCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlcikpfWApO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKEJhc2U2NC5kZWNvZGUodC5zbGljZSgzKSkpIGFzIElVc2VyO1xyXG4gICAgICAgIGlmICghdXNlckxvY2FsLmlkKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbmV3IGRheSwgcmVzZXQgdm91Y2hlclxyXG4gICAgICAgIGlmIChuZXcgRGF0ZSh1c2VyTG9jYWwuY3JlYXRlZEF0KS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlcjogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi51c2VyTG9jYWwsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICB0aW1lc0FEYXk6IDAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblZvdWNoZXI6IEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgdm91Y2hlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdm91Y2hlcjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mRGF5czogdXNlckxvY2FsLm51bWJlck9mRGF5cyArIDFcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeShuZXdVc2VyKSl9YCk7XHJcbiAgICAgICAgICAgIHNldFVzZXIobmV3VXNlcik7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVc2VyKHVzZXJMb2NhbCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gKDxCb3g+bG9hZGluZy4uLjwvQm94Pik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRWb3VjaGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25Wb3VjaGVyID0gdXNlci5wb3NpdGlvblZvdWNoZXIubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdXNlclVwZGF0ZTogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgIHRpbWVzQURheTogdXNlci50aW1lc0FEYXkgKyAxLFxyXG4gICAgICAgICAgICBwb3NpdGlvblZvdWNoZXIsXHJcbiAgICAgICAgICAgIHZvdWNoZXI6IHVzZXIuYmFja0NhcmRbaW5kZXhdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VXNlcih1c2VyVXBkYXRlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlclVwZGF0ZSkpfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRDb25kaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1c2VyLnN0YXRlLmxvZ2luKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW5Mb2dpbkRpYWxvZyh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2V0TG9naW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlclVwZGF0ZTogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICAuLi51c2VyLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VXNlcih1c2VyVXBkYXRlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlclVwZGF0ZSkpfWApO1xyXG4gICAgICAgIHNldE9wZW5Mb2dpbkRpYWxvZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcXFwiL2FuaF9iaWEucG5nXFxcIilcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNvbXBvbmVudD17Qm94fSBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxab29tIGluPXt0cnVlfSBzdHlsZT17eyB0cmFuc2l0aW9uRGVsYXk6IFwiMzAwbXNcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9XCIxMCVcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ViXzEucG5nXCIgYWx0PVwic3ViX2ltYWdlXzFcIiB3aWR0aD1cIjYwJVwiIGhlaWdodD1cImF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvWm9vbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gY29tcG9uZW50PXtCb3h9IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFpvb20gaW49e3RydWV9IHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogXCI1MDBtc1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD1cIjEwJVwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9NYmFwcGUucG5nXCIgYWx0PVwic3ViX2ltYWdlXzFcIiB3aWR0aD1cIjM1JVwiIGhlaWdodD1cImF1dG9cIiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB6SW5kZXg6IDYgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jaGFpLWJpYS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMVwiIHdpZHRoPVwiMTMlXCIgaGVpZ2h0PVwiYXV0b1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWVySW1hZ2UxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NoYWktYmlhLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8yXCIgd2lkdGg9XCI4JVwiIGhlaWdodD1cImF1dG9cIiBjbGFzc05hbWU9e2NsYXNzZXMuYmVlckltYWdlMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1pvb20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxab29tIGluPXt0cnVlfSBzdHlsZT17eyB0cmFuc2l0aW9uRGVsYXk6IFwiNjAwbXNcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9tb3RvcmJpa2UucG5nXCIgYWx0PVwic3ViX2ltYWdlXzNcIiB3aWR0aD1cIjYwJVwiIGhlaWdodD1cImF1dG9cIiBjbGFzc05hbWU9e2NsYXNzZXMubW90b3JiaWtlSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ab29tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7b3BlbkxvZ2luRGlhbG9nICYmIDxMb2dpbkRpYWxvZyBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuTG9naW5EaWFsb2coZmFsc2UpfSBvbk9rPXsoKSA9PiBzZXRMb2dpbigpfSAvPn1cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcXFwiL2FuaF9iaWEyLnBuZ1xcXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBiZ2NvbG9yPVwiIzc3MDAwNFwiIGJvcmRlcj1cIjVweCBzb2xpZCAjRkY5NTk1XCIgYm94U2l6aW5nPVwiYm9yZGVyLWJveFwiIGJvcmRlclJhZGl1cz17NTB9IHA9ezN9IG1yPXszfSBtdD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY29tcG9uZW50PXtCb3h9IGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5wb3NpdGlvblZvdWNoZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCIyMDBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb250Q29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jYXJkZnJvbnQucG5nXCIgYWx0PVwic3ViX2ltYWdlXzJcIiB3aWR0aD1cIjY1JVwiIGhlaWdodD1cImF1dG9cIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tDb21wb25lbnQ9ezxpbWcgc3JjPVwiL01iYXBwZS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMlwiIHdpZHRoPVwiNjUlXCIgaGVpZ2h0PVwiYXV0b1wiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVub3VnaENvbmRpdGlvbj17KCkgPT4gc2V0Q29uZGl0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbm91Z2hDb25kaXRpb249eygpID0+IGdldFZvdWNoZXIoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==