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
    top: 230,
    transform: "rotate(32.88deg)",
    right: 190,
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
      lineNumber: 79,
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
              lineNumber: 132,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
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
              lineNumber: 137,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/chai-bia.png",
            alt: "sub_image_1",
            width: "13%",
            height: "auto",
            className: classes.beerImage1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/chai-bia.png",
            alt: "sub_image_2",
            width: "8%",
            height: "auto",
            className: classes.beerImage2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 151,
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
                lineNumber: 161,
                columnNumber: 53
              }, _this),
              backComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
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
              lineNumber: 157,
              columnNumber: 33
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYmVlckltYWdlMSIsInBvc2l0aW9uIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsImJlZXJJbWFnZTIiLCJyaWdodCIsInpJbmRleCIsIk1haW4iLCJjbGFzc2VzIiwiUmVhY3QiLCJVc2VyIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9wZW5Mb2dpbkRpYWxvZyIsInNldE9wZW5Mb2dpbkRpYWxvZyIsIm9wZW5TaGFyZURpYWxvZyIsInNldE9wZW5TaGFyZURpYWxvZyIsInQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIm1ha2VJZCIsIkJhc2U2NCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyTG9jYWwiLCJwYXJzZSIsInNsaWNlIiwiaWQiLCJEYXRlIiwiY3JlYXRlZEF0IiwiZ2V0VGltZSIsIm5ld1VzZXIiLCJ0aW1lc0FEYXkiLCJwb3NpdGlvblZvdWNoZXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJ2b3VjaGVyIiwibmFtZSIsImltYWdlIiwibnVtYmVyT2ZEYXlzIiwiZ2V0Vm91Y2hlciIsImluZGV4IiwibWFwIiwiaXRlbSIsImkiLCJ1c2VyVXBkYXRlIiwiYmFja0NhcmQiLCJzZXRDb25kaXRpb24iLCJzdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJCb3giLCJQYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQztBQUN6QkMsWUFBVSxFQUFFO0FBQ1JDLFlBQVEsRUFBRSxVQURG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REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBRUssb0RBQWhCO0FBQUEsNkJBQ0ksOERBQUMsbURBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGVBQU8sRUFBRSxDQUF6QjtBQUFBLGtCQUNLaEQsSUFBSSxDQUFDeUIsZUFBTCxDQUFxQlUsR0FBckIsQ0FBeUIsVUFBQ0MsSUFBRCxFQUFPRixLQUFQLEVBQWlCO0FBQ3ZDLDhCQUNJLDhEQUFDLG1EQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFXLGNBQUUsRUFBRSxDQUFmO0FBQUEsbUNBQ0ksOERBQUMsNkRBQUQ7QUFDSSxtQkFBSyxFQUFDLE9BRFY7QUFFSSxvQkFBTSxFQUFDLE9BRlg7QUFHSSxtQkFBSyxFQUFFRSxJQUhYO0FBSUksNEJBQWMsZUFBRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpwQjtBQUtJLDJCQUFhLGVBQUUsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMbkI7QUFNSSxrQkFBSSxFQUFFcEMsSUFOVjtBQU9JLGdDQUFrQixFQUFFO0FBQUEsdUJBQU13QyxZQUFZLEVBQWxCO0FBQUEsZUFQeEI7QUFRSSw2QkFBZSxFQUFFO0FBQUEsdUJBQU1QLFVBQVUsQ0FBQ0MsS0FBRCxDQUFoQjtBQUFBO0FBUnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUF1QkEsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQWNILFNBZkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDSjtBQUFBLGtCQURKO0FBeURILENBOUlEOztHQUFNdEMsSTtVQUNjVixTOzs7S0FEZFUsSTtBQWdKTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZDlmNmUzM2QzMzE5MDIzZTExYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8taW5saW5lLXN0eWxlcy9uby1pbmxpbmUtc3R5bGVzICovXHJcbmltcG9ydCB7IEJveCwgR3JpZCwgbWFrZVN0eWxlcywgUGFwZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQmFzZTY0IH0gZnJvbSBcImpzLWJhc2U2NFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE15Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL015Q2FyZC9NeUNhcmRcIjtcclxuaW1wb3J0IHsgTG9naW5EaWFsb2cgfSBmcm9tIFwiLi4vRGlhbG9ncy9Mb2dpbkRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtYWtlSWQgfSBmcm9tIFwiLi4vbGlicy9tYWtlSWRcIjtcclxuaW1wb3J0IHsgSVVzZXIsIFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL0lVc2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhQ2FyZCB7XHJcbiAgICBmcm9udENvbXBvbmVudDogUmVhY3ROb2RlO1xyXG4gICAgYmFja0NvbXBvbmVudDogUmVhY3ROb2RlO1xyXG4gICAgdXNlcjogSVVzZXI7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgYmVlckltYWdlMToge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiAzMCxcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKC0yNS44M2RlZylcIixcclxuICAgICAgICBsZWZ0OiAxNzBcclxuXHJcbiAgICB9LFxyXG4gICAgYmVlckltYWdlMjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiAyMzAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzMi44OGRlZylcIixcclxuICAgICAgICByaWdodDogMTkwLFxyXG4gICAgICAgIHpJbmRleDogMTFcclxuXHJcbiAgICB9XHJcbn0pO1xyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGU8SVVzZXI+KG5ldyBVc2VyKCkpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbb3BlbkxvZ2luRGlhbG9nLCBzZXRPcGVuTG9naW5EaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZW5TaGFyZURpYWxvZywgc2V0T3BlblNoYXJlRGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRfbWdhbWVlXCIpO1xyXG4gICAgICAgIGlmICghdCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlcikpfWApO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKEJhc2U2NC5kZWNvZGUodC5zbGljZSgzKSkpIGFzIElVc2VyO1xyXG4gICAgICAgIGlmICghdXNlckxvY2FsLmlkKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbmV3IGRheSwgcmVzZXQgdm91Y2hlclxyXG4gICAgICAgIGlmIChuZXcgRGF0ZSh1c2VyTG9jYWwuY3JlYXRlZEF0KS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlcjogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi51c2VyTG9jYWwsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICB0aW1lc0FEYXk6IDAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblZvdWNoZXI6IEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgdm91Y2hlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdm91Y2hlcjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mRGF5czogdXNlckxvY2FsLm51bWJlck9mRGF5cyArIDFcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeShuZXdVc2VyKSl9YCk7XHJcbiAgICAgICAgICAgIHNldFVzZXIobmV3VXNlcik7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVc2VyKHVzZXJMb2NhbCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gKDxCb3g+bG9hZGluZy4uLjwvQm94Pik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRWb3VjaGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25Wb3VjaGVyID0gdXNlci5wb3NpdGlvblZvdWNoZXIubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdXNlclVwZGF0ZTogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgIHRpbWVzQURheTogdXNlci50aW1lc0FEYXkgKyAxLFxyXG4gICAgICAgICAgICBwb3NpdGlvblZvdWNoZXIsXHJcbiAgICAgICAgICAgIHZvdWNoZXI6IHVzZXIuYmFja0NhcmRbaW5kZXhdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VXNlcih1c2VyVXBkYXRlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlclVwZGF0ZSkpfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRDb25kaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1c2VyLnN0YXRlLmxvZ2luKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW5Mb2dpbkRpYWxvZyh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2V0TG9naW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlclVwZGF0ZTogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICAuLi51c2VyLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VXNlcih1c2VyVXBkYXRlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlclVwZGF0ZSkpfWApO1xyXG4gICAgICAgIHNldE9wZW5Mb2dpbkRpYWxvZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IGhlaWdodD17XCIxMDB2aFwifVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFxcXCIvYW5oX2JpYS5wbmdcXFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNvbXBvbmVudD17Qm94fSBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdWJfMS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMVwiIHdpZHRoPVwiNTAlXCIgaGVpZ2h0PVwiYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBjb21wb25lbnQ9e0JveH0gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjEwMCVcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD1cIjEwMHB4XCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIHpJbmRleD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9NYmFwcGUucG5nXCIgYWx0PVwic3ViX2ltYWdlXzFcIiB3aWR0aD1cIjMwJVwiIGhlaWdodD1cImF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NoYWktYmlhLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCIxMyVcIiBoZWlnaHQ9XCJhdXRvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJlZXJJbWFnZTF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NoYWktYmlhLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8yXCIgd2lkdGg9XCI4JVwiIGhlaWdodD1cImF1dG9cIiBjbGFzc05hbWU9e2NsYXNzZXMuYmVlckltYWdlMn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHtvcGVuTG9naW5EaWFsb2cgJiYgPExvZ2luRGlhbG9nIG9uQ2xvc2U9eygpID0+IHNldE9wZW5Mb2dpbkRpYWxvZyhmYWxzZSl9IG9uT2s9eygpID0+IHNldExvZ2luKCl9IC8+fVxyXG4gICAgICAgICAgICA8Qm94IGNvbXBvbmVudD17UGFwZXJ9ID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5wb3NpdGlvblZvdWNoZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbnRDb21wb25lbnQ9ezxCb3g+PC9Cb3g+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrQ29tcG9uZW50PXs8Qm94PjwvQm94Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW5vdWdoQ29uZGl0aW9uPXsoKSA9PiBzZXRDb25kaXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5vdWdoQ29uZGl0aW9uPXsoKSA9PiBnZXRWb3VjaGVyKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwic291cmNlUm9vdCI6IiJ9