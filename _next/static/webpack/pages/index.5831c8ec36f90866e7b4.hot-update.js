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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYmVlckltYWdlMSIsInBvc2l0aW9uIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsInpJbmRleCIsImJlZXJJbWFnZTIiLCJyaWdodCIsIm1vdG9yYmlrZUltYWdlIiwiTWFpbiIsImNsYXNzZXMiLCJSZWFjdCIsIlVzZXIiLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib3BlbkxvZ2luRGlhbG9nIiwic2V0T3BlbkxvZ2luRGlhbG9nIiwib3BlblNoYXJlRGlhbG9nIiwic2V0T3BlblNoYXJlRGlhbG9nIiwidCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwibWFrZUlkIiwiQmFzZTY0IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJMb2NhbCIsInBhcnNlIiwic2xpY2UiLCJpZCIsIkRhdGUiLCJjcmVhdGVkQXQiLCJnZXRUaW1lIiwibmV3VXNlciIsInRpbWVzQURheSIsInBvc2l0aW9uVm91Y2hlciIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInZvdWNoZXIiLCJuYW1lIiwiaW1hZ2UiLCJudW1iZXJPZkRheXMiLCJnZXRWb3VjaGVyIiwiaW5kZXgiLCJtYXAiLCJpdGVtIiwiaSIsInVzZXJVcGRhdGUiLCJiYWNrQ2FyZCIsInNldENvbmRpdGlvbiIsInN0YXRlIiwibG9naW4iLCJzZXRMb2dpbiIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiQm94IiwidHJhbnNpdGlvbkRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBTUEsU0FBUyxHQUFHQyw2REFB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cUQsOEJBQU0sRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQU5uQjtBQU9JLDBCQUFJLEVBQUVwQyxJQVBWO0FBUUksd0NBQWtCLEVBQUU7QUFBQSwrQkFBTXdDLFlBQVksRUFBbEI7QUFBQSx1QkFSeEI7QUFTSSxxQ0FBZSxFQUFFO0FBQUEsK0JBQU1QLFVBQVUsQ0FBQ0MsS0FBRCxDQUFoQjtBQUFBO0FBVHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBQXVCQSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBaUJILGVBbEJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0Q0o7QUFBQSxrQkFESjtBQW9GSCxDQXpLRDs7R0FBTXRDLEk7VUFDY1gsUzs7O0tBRGRXLEk7QUEyS04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTgzMWM4ZWMzNmY5MDg2NmU3YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWlubGluZS1zdHlsZXMvbm8taW5saW5lLXN0eWxlcyAqL1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQsIG1ha2VTdHlsZXMsIFpvb20gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQmFzZTY0IH0gZnJvbSBcImpzLWJhc2U2NFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE15Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL015Q2FyZC9NeUNhcmRcIjtcclxuaW1wb3J0IHsgTG9naW5EaWFsb2cgfSBmcm9tIFwiLi4vRGlhbG9ncy9Mb2dpbkRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtYWtlSWQgfSBmcm9tIFwiLi4vbGlicy9tYWtlSWRcIjtcclxuaW1wb3J0IHsgSVVzZXIsIFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL0lVc2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhQ2FyZCB7XHJcbiAgICBmcm9udENvbXBvbmVudDogUmVhY3ROb2RlO1xyXG4gICAgYmFja0NvbXBvbmVudDogUmVhY3ROb2RlO1xyXG4gICAgdXNlcjogSVVzZXI7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgYmVlckltYWdlMToge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiBcIi0xMCVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKC0yNS44M2RlZylcIixcclxuICAgICAgICBsZWZ0OiBcIjIzJVwiLFxyXG4gICAgICAgIHpJbmRleDogNVxyXG5cclxuICAgIH0sXHJcbiAgICBiZWVySW1hZ2UyOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB0b3A6IFwiMjUlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzMi44OGRlZylcIixcclxuICAgICAgICByaWdodDogXCIyNyVcIixcclxuICAgICAgICB6SW5kZXg6IDExXHJcblxyXG4gICAgfSxcclxuICAgIG1vdG9yYmlrZUltYWdlOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB0b3A6IFwiLTclXCIsXHJcbiAgICAgICAgbGVmdDogXCIxNyVcIixcclxuICAgICAgICB6SW5kZXg6IDdcclxuICAgIH1cclxufSk7XHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZTxJVXNlcj4obmV3IFVzZXIoKSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtvcGVuTG9naW5EaWFsb2csIHNldE9wZW5Mb2dpbkRpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BlblNoYXJlRGlhbG9nLCBzZXRPcGVuU2hhcmVEaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidF9tZ2FtZWVcIik7XHJcbiAgICAgICAgaWYgKCF0KSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeSh1c2VyKSl9YCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXJMb2NhbCA9IEpTT04ucGFyc2UoQmFzZTY0LmRlY29kZSh0LnNsaWNlKDMpKSkgYXMgSVVzZXI7XHJcbiAgICAgICAgaWYgKCF1c2VyTG9jYWwuaWQpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBuZXcgZGF5LCByZXNldCB2b3VjaGVyXHJcbiAgICAgICAgaWYgKG5ldyBEYXRlKHVzZXJMb2NhbC5jcmVhdGVkQXQpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDAgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyOiBJVXNlciA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnVzZXJMb2NhbCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHRpbWVzQURheTogMCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uVm91Y2hlcjogQXJyYXkuZnJvbSh7IGxlbmd0aDogOSB9LCAoKSA9PiBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICB2b3VjaGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB2b3VjaGVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZEYXlzOiB1c2VyTG9jYWwubnVtYmVyT2ZEYXlzICsgMVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KG5ld1VzZXIpKX1gKTtcclxuICAgICAgICAgICAgc2V0VXNlcihuZXdVc2VyKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVzZXIodXNlckxvY2FsKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiAoPEJveD5sb2FkaW5nLi4uPC9Cb3g+KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFZvdWNoZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvblZvdWNoZXIgPSB1c2VyLnBvc2l0aW9uVm91Y2hlci5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyVXBkYXRlOiBJVXNlciA9IHtcclxuICAgICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgICAgdGltZXNBRGF5OiB1c2VyLnRpbWVzQURheSArIDEsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uVm91Y2hlcixcclxuICAgICAgICAgICAgdm91Y2hlcjogdXNlci5iYWNrQ2FyZFtpbmRleF0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRVc2VyKHVzZXJVcGRhdGUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeSh1c2VyVXBkYXRlKSl9YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldENvbmRpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXVzZXIuc3RhdGUubG9naW4pIHtcclxuICAgICAgICAgICAgc2V0T3BlbkxvZ2luRGlhbG9nKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRMb2dpbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyVXBkYXRlOiBJVXNlciA9IHtcclxuICAgICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgICAgc3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIC4uLnVzZXIuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRVc2VyKHVzZXJVcGRhdGUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeSh1c2VyVXBkYXRlKSl9YCk7XHJcbiAgICAgICAgc2V0T3BlbkxvZ2luRGlhbG9nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXFxcIi9hbmhfYmlhLnBuZ1xcXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50PXtCb3h9IGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFpvb20gaW49e3RydWV9IHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogXCIzMDBtc1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD1cIjEwJVwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdWJfMS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMVwiIHdpZHRoPVwiNjAlXCIgaGVpZ2h0PVwiYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ab29tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBjb21wb25lbnQ9e0JveH0gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Wm9vbSBpbj17dHJ1ZX0gc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBcIjUwMG1zXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIG10PVwiMTAlXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL01iYXBwZS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMVwiIHdpZHRoPVwiMzUlXCIgaGVpZ2h0PVwiYXV0b1wiIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHpJbmRleDogNiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NoYWktYmlhLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCIxMyVcIiBoZWlnaHQ9XCJhdXRvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJlZXJJbWFnZTF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY2hhaS1iaWEucG5nXCIgYWx0PVwic3ViX2ltYWdlXzJcIiB3aWR0aD1cIjglXCIgaGVpZ2h0PVwiYXV0b1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWVySW1hZ2UyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvWm9vbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFpvb20gaW49e3RydWV9IHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogXCI2MDBtc1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21vdG9yYmlrZS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfM1wiIHdpZHRoPVwiNjAlXCIgaGVpZ2h0PVwiYXV0b1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3RvcmJpa2VJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1pvb20+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtvcGVuTG9naW5EaWFsb2cgJiYgPExvZ2luRGlhbG9nIG9uQ2xvc2U9eygpID0+IHNldE9wZW5Mb2dpbkRpYWxvZyhmYWxzZSl9IG9uT2s9eygpID0+IHNldExvZ2luKCl9IC8+fVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFxcXCIvYW5oX2JpYTIucG5nXFxcIilcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGJnY29sb3I9XCIjNzcwMDA0XCIgYm9yZGVyPVwiNXB4IHNvbGlkICNGRjk1OTVcIiBib3hTaXppbmc9XCJib3JkZXItYm94XCIgYm9yZGVyUmFkaXVzPXs1MH0gcD17M30gbXI9ezN9IG10PXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e0JveH0gaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLnBvc2l0aW9uVm91Y2hlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjIwMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbnRDb21wb25lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NhcmRmcm9udC5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMlwiIHdpZHRoPVwiNjUlXCIgaGVpZ2h0PVwiYXV0b1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja0NvbXBvbmVudD17PGltZyBzcmM9XCIvTWJhcHBlLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8yXCIgd2lkdGg9XCI2NSVcIiBoZWlnaHQ9XCJhdXRvXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW5vdWdoQ29uZGl0aW9uPXsoKSA9PiBzZXRDb25kaXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVub3VnaENvbmRpdGlvbj17KCkgPT4gZ2V0Vm91Y2hlcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwic291cmNlUm9vdCI6IiJ9