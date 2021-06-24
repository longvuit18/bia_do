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
    position: "absolute",
    top: 0,
    transform: "rotate(-25.83deg)"
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
      lineNumber: 70,
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
              lineNumber: 123,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          xs: 6,
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
              lineNumber: 128,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
            height: "100%",
            textAlign: "center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/chai-bia.png",
              alt: "sub_image_1",
              width: "7%",
              height: "auto",
              className: classes.MbappeImage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 142,
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
                lineNumber: 152,
                columnNumber: 53
              }, _this),
              backComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
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
              lineNumber: 148,
              columnNumber: 33
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiTWJhcHBlSW1hZ2UiLCJwb3NpdGlvbiIsInRvcCIsInRyYW5zZm9ybSIsIk1haW4iLCJjbGFzc2VzIiwiUmVhY3QiLCJVc2VyIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9wZW5Mb2dpbkRpYWxvZyIsInNldE9wZW5Mb2dpbkRpYWxvZyIsIm9wZW5TaGFyZURpYWxvZyIsInNldE9wZW5TaGFyZURpYWxvZyIsInQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIm1ha2VJZCIsIkJhc2U2NCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyTG9jYWwiLCJwYXJzZSIsInNsaWNlIiwiaWQiLCJEYXRlIiwiY3JlYXRlZEF0IiwiZ2V0VGltZSIsIm5ld1VzZXIiLCJ0aW1lc0FEYXkiLCJwb3NpdGlvblZvdWNoZXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJ2b3VjaGVyIiwibmFtZSIsImltYWdlIiwibnVtYmVyT2ZEYXlzIiwiZ2V0Vm91Y2hlciIsImluZGV4IiwibWFwIiwiaXRlbSIsImkiLCJ1c2VyVXBkYXRlIiwiYmFja0NhcmQiLCJzZXRDb25kaXRpb24iLCJzdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJCb3giLCJQYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQztBQUN6QkMsYUFBVyxFQUFFO0FBQ1RDLFlBQVEsRUFBRSxVQUREO0FBRVRDLE9BQUcsRUFBRSxDQUZJO0FBR1RDLGFBQVMsRUFB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WDtBQUdJLG1CQUFLLEVBQUVFLElBSFg7QUFJSSw0QkFBYyxlQUFFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSnBCO0FBS0ksMkJBQWEsZUFBRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxuQjtBQU1JLGtCQUFJLEVBQUVwQyxJQU5WO0FBT0ksZ0NBQWtCLEVBQUU7QUFBQSx1QkFBTXdDLFlBQVksRUFBbEI7QUFBQSxlQVB4QjtBQVFJLDZCQUFlLEVBQUU7QUFBQSx1QkFBTVAsVUFBVSxDQUFDQyxLQUFELENBQWhCO0FBQUE7QUFSckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQXVCQSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBY0gsU0FmQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNKO0FBQUEsa0JBREo7QUF5REgsQ0E5SUQ7O0dBQU10QyxJO1VBQ2NOLFM7OztLQURkTSxJO0FBZ0pOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3MzA3ODY1YTZlYTU2MzE3ZTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1pbmxpbmUtc3R5bGVzL25vLWlubGluZS1zdHlsZXMgKi9cclxuaW1wb3J0IHsgQm94LCBHcmlkLCBtYWtlU3R5bGVzLCBQYXBlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBCYXNlNjQgfSBmcm9tIFwianMtYmFzZTY0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTXlDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlDYXJkL015Q2FyZFwiO1xyXG5pbXBvcnQgeyBMb2dpbkRpYWxvZyB9IGZyb20gXCIuLi9EaWFsb2dzL0xvZ2luRGlhbG9nXCI7XHJcbmltcG9ydCB7IG1ha2VJZCB9IGZyb20gXCIuLi9saWJzL21ha2VJZFwiO1xyXG5pbXBvcnQgeyBJVXNlciwgVXNlciB9IGZyb20gXCIuLi9tb2RlbHMvSVVzZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFDYXJkIHtcclxuICAgIGZyb250Q29tcG9uZW50OiBSZWFjdE5vZGU7XHJcbiAgICBiYWNrQ29tcG9uZW50OiBSZWFjdE5vZGU7XHJcbiAgICB1c2VyOiBJVXNlcjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBNYmFwcGVJbWFnZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoLTI1LjgzZGVnKVwiLFxyXG5cclxuICAgIH1cclxufSk7XHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZTxJVXNlcj4obmV3IFVzZXIoKSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtvcGVuTG9naW5EaWFsb2csIHNldE9wZW5Mb2dpbkRpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BlblNoYXJlRGlhbG9nLCBzZXRPcGVuU2hhcmVEaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidF9tZ2FtZWVcIik7XHJcbiAgICAgICAgaWYgKCF0KSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeSh1c2VyKSl9YCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXJMb2NhbCA9IEpTT04ucGFyc2UoQmFzZTY0LmRlY29kZSh0LnNsaWNlKDMpKSkgYXMgSVVzZXI7XHJcbiAgICAgICAgaWYgKCF1c2VyTG9jYWwuaWQpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBuZXcgZGF5LCByZXNldCB2b3VjaGVyXHJcbiAgICAgICAgaWYgKG5ldyBEYXRlKHVzZXJMb2NhbC5jcmVhdGVkQXQpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDAgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyOiBJVXNlciA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnVzZXJMb2NhbCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHRpbWVzQURheTogMCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uVm91Y2hlcjogQXJyYXkuZnJvbSh7IGxlbmd0aDogOSB9LCAoKSA9PiBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICB2b3VjaGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB2b3VjaGVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZEYXlzOiB1c2VyTG9jYWwubnVtYmVyT2ZEYXlzICsgMVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0X21nYW1lZVwiLCBgJHttYWtlSWQoMyl9JHtCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KG5ld1VzZXIpKX1gKTtcclxuICAgICAgICAgICAgc2V0VXNlcihuZXdVc2VyKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVzZXIodXNlckxvY2FsKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiAoPEJveD5sb2FkaW5nLi4uPC9Cb3g+KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFZvdWNoZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvblZvdWNoZXIgPSB1c2VyLnBvc2l0aW9uVm91Y2hlci5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1c2VyVXBkYXRlOiBJVXNlciA9IHtcclxuICAgICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgICAgdGltZXNBRGF5OiB1c2VyLnRpbWVzQURheSArIDEsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uVm91Y2hlcixcclxuICAgICAgICAgICAgdm91Y2hlcjogdXNlci5iYWNrQ2FyZFtpbmRleF0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRVc2VyKHVzZXJVcGRhdGUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeSh1c2VyVXBkYXRlKSl9YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldENvbmRpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXVzZXIuc3RhdGUubG9naW4pIHtcclxuICAgICAgICAgICAgc2V0T3BlbkxvZ2luRGlhbG9nKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRMb2dpbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyVXBkYXRlOiBJVXNlciA9IHtcclxuICAgICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgICAgc3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIC4uLnVzZXIuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRVc2VyKHVzZXJVcGRhdGUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeSh1c2VyVXBkYXRlKSl9YCk7XHJcbiAgICAgICAgc2V0T3BlbkxvZ2luRGlhbG9nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggaGVpZ2h0PXtcIjEwMHZoXCJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXFxcIi9hbmhfYmlhLnBuZ1xcXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcblxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50PXtCb3h9IGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N1Yl8xLnBuZ1wiIGFsdD1cInN1Yl9pbWFnZV8xXCIgd2lkdGg9XCI1MCVcIiBoZWlnaHQ9XCJhdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjEwMCVcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD1cIjEwMHB4XCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIHpJbmRleD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9NYmFwcGUucG5nXCIgYWx0PVwic3ViX2ltYWdlXzFcIiB3aWR0aD1cIjMwJVwiIGhlaWdodD1cImF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCIxMDAlXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jaGFpLWJpYS5wbmdcIiBhbHQ9XCJzdWJfaW1hZ2VfMVwiIHdpZHRoPVwiNyVcIiBoZWlnaHQ9XCJhdXRvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLk1iYXBwZUltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHtvcGVuTG9naW5EaWFsb2cgJiYgPExvZ2luRGlhbG9nIG9uQ2xvc2U9eygpID0+IHNldE9wZW5Mb2dpbkRpYWxvZyhmYWxzZSl9IG9uT2s9eygpID0+IHNldExvZ2luKCl9IC8+fVxyXG4gICAgICAgICAgICA8Qm94IGNvbXBvbmVudD17UGFwZXJ9ID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5wb3NpdGlvblZvdWNoZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbnRDb21wb25lbnQ9ezxCb3g+PC9Cb3g+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrQ29tcG9uZW50PXs8Qm94PjwvQm94Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW5vdWdoQ29uZGl0aW9uPXsoKSA9PiBzZXRDb25kaXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5vdWdoQ29uZGl0aW9uPXsoKSA9PiBnZXRWb3VjaGVyKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwic291cmNlUm9vdCI6IiJ9