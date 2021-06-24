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








var Main = function Main() {
  _s();

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
      lineNumber: 60,
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
        overflowX: "hidden",
        backgroundImage: "url(\"/anh_bia.png\")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 112,
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
                lineNumber: 122,
                columnNumber: 53
              }, _this),
              backComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
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
              lineNumber: 118,
              columnNumber: 33
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Main, "QvjI3Xj6ec4d7iAqUzD2VfXwwqs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwiUmVhY3QiLCJVc2VyIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9wZW5Mb2dpbkRpYWxvZyIsInNldE9wZW5Mb2dpbkRpYWxvZyIsIm9wZW5TaGFyZURpYWxvZyIsInNldE9wZW5TaGFyZURpYWxvZyIsInQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIm1ha2VJZCIsIkJhc2U2NCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyTG9jYWwiLCJwYXJzZSIsInNsaWNlIiwiaWQiLCJEYXRlIiwiY3JlYXRlZEF0IiwiZ2V0VGltZSIsIm5ld1VzZXIiLCJ0aW1lc0FEYXkiLCJwb3NpdGlvblZvdWNoZXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJ2b3VjaGVyIiwibmFtZSIsImltYWdlIiwibnVtYmVyT2ZEYXlzIiwiZ2V0Vm91Y2hlciIsImluZGV4IiwibWFwIiwiaXRlbSIsImkiLCJ1c2VyVXBkYXRlIiwiYmFja0NhcmQiLCJzZXRDb25kaXRpb24iLCJzdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJvdmVyZmxvd1giLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJQYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsd0JBQ1NDLHFEQUFBLENBQXNCLElBQUlDLCtDQUFKLEVBQXRCLENBRFQ7QUFBQTtBQUFBLE1BQ1JDLElBRFE7QUFBQSxNQUNGQyxPQURFOztBQUFBLHlCQUVlSCxxREFBQSxDQUFlLElBQWYsQ0FGZjtBQUFBO0FBQUEsTUFFUkks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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIyMDU4NTlmZmEyYmNhOTczZGJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1pbmxpbmUtc3R5bGVzL25vLWlubGluZS1zdHlsZXMgKi9cclxuaW1wb3J0IHsgQm94LCBHcmlkLCBQYXBlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBCYXNlNjQgfSBmcm9tIFwianMtYmFzZTY0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTXlDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlDYXJkL015Q2FyZFwiO1xyXG5pbXBvcnQgeyBMb2dpbkRpYWxvZyB9IGZyb20gXCIuLi9EaWFsb2dzL0xvZ2luRGlhbG9nXCI7XHJcbmltcG9ydCB7IG1ha2VJZCB9IGZyb20gXCIuLi9saWJzL21ha2VJZFwiO1xyXG5pbXBvcnQgeyBJVXNlciwgVXNlciB9IGZyb20gXCIuLi9tb2RlbHMvSVVzZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFDYXJkIHtcclxuICAgIGZyb250Q29tcG9uZW50OiBSZWFjdE5vZGU7XHJcbiAgICBiYWNrQ29tcG9uZW50OiBSZWFjdE5vZGU7XHJcbiAgICB1c2VyOiBJVXNlcjtcclxufVxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGU8SVVzZXI+KG5ldyBVc2VyKCkpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbb3BlbkxvZ2luRGlhbG9nLCBzZXRPcGVuTG9naW5EaWFsb2ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZW5TaGFyZURpYWxvZywgc2V0T3BlblNoYXJlRGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRfbWdhbWVlXCIpO1xyXG4gICAgICAgIGlmICghdCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlcikpfWApO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKEJhc2U2NC5kZWNvZGUodC5zbGljZSgzKSkpIGFzIElVc2VyO1xyXG4gICAgICAgIGlmICghdXNlckxvY2FsLmlkKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbmV3IGRheSwgcmVzZXQgdm91Y2hlclxyXG4gICAgICAgIGlmIChuZXcgRGF0ZSh1c2VyTG9jYWwuY3JlYXRlZEF0KS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlcjogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi51c2VyTG9jYWwsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICB0aW1lc0FEYXk6IDAsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblZvdWNoZXI6IEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgdm91Y2hlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdm91Y2hlcjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mRGF5czogdXNlckxvY2FsLm51bWJlck9mRGF5cyArIDFcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidF9tZ2FtZWVcIiwgYCR7bWFrZUlkKDMpfSR7QmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeShuZXdVc2VyKSl9YCk7XHJcbiAgICAgICAgICAgIHNldFVzZXIobmV3VXNlcik7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVc2VyKHVzZXJMb2NhbCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gKDxCb3g+bG9hZGluZy4uLjwvQm94Pik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRWb3VjaGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25Wb3VjaGVyID0gdXNlci5wb3NpdGlvblZvdWNoZXIubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdXNlclVwZGF0ZTogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgIHRpbWVzQURheTogdXNlci50aW1lc0FEYXkgKyAxLFxyXG4gICAgICAgICAgICBwb3NpdGlvblZvdWNoZXIsXHJcbiAgICAgICAgICAgIHZvdWNoZXI6IHVzZXIuYmFja0NhcmRbaW5kZXhdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VXNlcih1c2VyVXBkYXRlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlclVwZGF0ZSkpfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRDb25kaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1c2VyLnN0YXRlLmxvZ2luKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW5Mb2dpbkRpYWxvZyh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2V0TG9naW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlclVwZGF0ZTogSVVzZXIgPSB7XHJcbiAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICAuLi51c2VyLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VXNlcih1c2VyVXBkYXRlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRfbWdhbWVlXCIsIGAke21ha2VJZCgzKX0ke0Jhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodXNlclVwZGF0ZSkpfWApO1xyXG4gICAgICAgIHNldE9wZW5Mb2dpbkRpYWxvZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IGhlaWdodD17XCIxMDB2aFwifVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcXFwiL2FuaF9iaWEucG5nXFxcIilcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAge29wZW5Mb2dpbkRpYWxvZyAmJiA8TG9naW5EaWFsb2cgb25DbG9zZT17KCkgPT4gc2V0T3BlbkxvZ2luRGlhbG9nKGZhbHNlKX0gb25Paz17KCkgPT4gc2V0TG9naW4oKX0gLz59XHJcbiAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PXtQYXBlcn0gPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLnBvc2l0aW9uVm91Y2hlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9udENvbXBvbmVudD17PEJveD48L0JveD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tDb21wb25lbnQ9ezxCb3g+PC9Cb3g+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbm91Z2hDb25kaXRpb249eygpID0+IHNldENvbmRpdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbm91Z2hDb25kaXRpb249eygpID0+IGdldFZvdWNoZXIoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLCJzb3VyY2VSb290IjoiIn0=