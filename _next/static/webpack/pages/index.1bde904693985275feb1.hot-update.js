self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MyCard/MyCard.tsx":
/*!******************************************!*\
  !*** ./src/components/MyCard/MyCard.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCard": function() { return /* binding */ MyCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\project_mmgame\\games\\bia_do\\src\\components\\MyCard\\MyCard.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.makeStyles)({
  root: {
    perspective: "1000px"
  },
  rootInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d"
  },
  rootInnerFlip: {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 2s",
    transformStyle: "preserve-3d",
    transform: "rotateY(180deg)"
  },
  front: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    background: "red"
  },
  back: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    background: "blue",
    transform: "rotateY(180deg)"
  }
});
var MyCard = function MyCard(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(props.state),
      _React$useState2 = (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      stateFlip = _React$useState2[0],
      setStateFlip = _React$useState2[1];

  var handleFlip = function handleFlip() {
    if (props.user.timesADay >= 3 || !props.user.state.login && props.user.timesADay > 0 || !props.user.state.shared && props.user.timesADay > 1) {
      props.notEnoughCondition();
      return;
    }

    props.enoughCondition();
    setStateFlip(true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: classes.root,
    onClick: function onClick() {
      return handleFlip();
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
      className: !stateFlip ? classes.rootInner : classes.rootInnerFlip,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        className: classes.front,
        children: props.frontComponent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        className: classes.back,
        children: props.backComponent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }, _this);
};

_s(MyCard, "an/R4k+rIBKWeq4N1+l9o5jgHts=", false, function () {
  return [useStyles];
});

_c = MyCard;

var _c;

$RefreshReg$(_c, "MyCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXlDYXJkL015Q2FyZC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJwZXJzcGVjdGl2ZSIsInJvb3RJbm5lciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtU3R5bGUiLCJyb290SW5uZXJGbGlwIiwidHJhbnNmb3JtIiwiZnJvbnQiLCJiYWNrZmFjZVZpc2liaWxpdHkiLCJXZWJraXRCYWNrZmFjZVZpc2liaWxpdHkiLCJiYWNrZ3JvdW5kIiwiYmFjayIsIk15Q2FyZCIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0Iiwic3RhdGUiLCJzdGF0ZUZsaXAiLCJzZXRTdGF0ZUZsaXAiLCJoYW5kbGVGbGlwIiwidXNlciIsInRpbWVzQURheSIsImxvZ2luIiwic2hhcmVkIiwibm90RW5vdWdoQ29uZGl0aW9uIiwiZW5vdWdoQ29uZGl0aW9uIiwiZnJvbnRDb21wb25lbnQiLCJiYWNrQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZUEsSUFBTUEsU0FBUyxHQUFHQyw2REFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsZUFBVyxFQUFFO0FBRFgsR0FEbUI7QUFLekJDLFdBQVMsRUFBRTtBQUNQQyxZQUFRLEVBQUUsVUFESDtBQUVQQyxTQUFLLEVBQUUsTUFGQTtBQUdQQyxVQUFNLEVBQUUsTUFIRDtBQUlQQyxjQUFVLEVBQUUsZ0JBSkw7QUFLUEMsa0JBQWMsRUFBRTtBQUxULEdBTGM7QUFZekJDLGVBQWEsRUFBRTtBQUNYTCxZQUFRLEVBQUUsVUFEQztBQUVYQyxTQUFLLEVBQUUsTUFGSTtBQUdYQyxVQUFNLEVBQUUsTUFIRztBQUlYQyxjQUFVLEVBQUUsY0FKRDtBQUtYQyxrQkFBYyxFQUFFLGFBTEw7QUFNWEUsYUFBUyxFQUFFO0FBTkEsR0FaVTtBQW9CekJDLE9BQUssRUFBRTtBQUNIUCxZQUFRLEVBQUUsVUFEUDtBQUVIQyxTQUFLLEVBQUUsTUFGSjtBQUdIQyxVQUFNLEVBQUUsTUFITDtBQUlITSxzQkFBa0IsRUFBRSxRQUpqQjtBQUtIQyw0QkFBd0IsRUFBRSxRQUx2QjtBQU1IQyxjQUFVLEVBQUU7QUFOVCxHQXBCa0I7QUE0QnpCQyxNQUFJLEVBQUU7QUFDRlgsWUFBUSxFQUFFLFVBRFI7QUFFRkMsU0FBSyxFQUFFLE1BRkw7QUFHRkMsVUFBTSxFQUFFLE1BSE47QUFJRk0sc0JBQWtCLEVBQUUsUUFKbEI7QUFLRkMsNEJBQXdCLEVBQUUsUUFMeEI7QUFNRkMsY0FBVSxFQUFFLE1BTlY7QUFPRkosYUFBUyxFQUFFO0FBUFQ7QUE1Qm1CLENBQUQsQ0FBNUI7QUFzQ08sSUFBTU0sTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFtQjtBQUFBOztBQUNyQyxNQUFNQyxPQUFPLEdBQUduQixTQUFTLEVBQXpCOztBQURxQyx3QkFFSG9CLHFEQUFBLENBQXdCRixLQUFLLENBQUNHLEtBQTlCLENBRkc7QUFBQTtBQUFBLE1BRTlCQyxTQUY4QjtBQUFBLE1BRW5CQyxZQUZtQjs7QUFHckMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFJTixLQUFLLENBQUNPLElBQU4sQ0FBV0MsU0FBWCxJQUF3QixDQUF4QixJQUE4QixDQUFDUixLQUFLLENBQUNPLElBQU4sQ0FBV0osS0FBWCxDQUFpQk0sS0FBbEIsSUFBMkJULEtBQUssQ0FBQ08sSUFBTixDQUFXQyxTQUFYLEdBQXVCLENBQWhGLElBQXVGLENBQUNSLEtBQUssQ0FBQ08sSUFBTixDQUFXSixLQUFYLENBQWlCTyxNQUFsQixJQUE0QlYsS0FBSyxDQUFDTyxJQUFOLENBQVdDLFNBQVgsR0FBdUIsQ0FBOUksRUFBa0o7QUFDOUlSLFdBQUssQ0FBQ1csa0JBQU47QUFDQTtBQUNIOztBQUNEWCxTQUFLLENBQUNZLGVBQU47QUFDQVAsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFFSCxHQVJEOztBQVVBLHNCQUNJLDhEQUFDLGtEQUFEO0FBQUssYUFBUyxFQUFFSixPQUFPLENBQUNqQixJQUF4QjtBQUE4QixXQUFPLEVBQUU7QUFBQSxhQUFNc0IsVUFBVSxFQUFoQjtBQUFBLEtBQXZDO0FBQUEsMkJBQ0ksOERBQUMsa0RBQUQ7QUFBSyxlQUFTLEVBQUUsQ0FBQ0YsU0FBRCxHQUFhSCxPQUFPLENBQUNmLFNBQXJCLEdBQWlDZSxPQUFPLENBQUNULGFBQXpEO0FBQUEsOEJBQ0ksOERBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFFUyxPQUFPLENBQUNQLEtBQXhCO0FBQUEsa0JBQWdDTSxLQUFLLENBQUNhO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLDhEQUFDLGtEQUFEO0FBQUssaUJBQVMsRUFBRVosT0FBTyxDQUFDSCxJQUF4QjtBQUFBLGtCQUErQkUsS0FBSyxDQUFDYztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FyQk07O0dBQU1mLE07VUFDT2pCLFM7OztLQURQaUIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYmRlOTA0NjkzOTg1Mjc1ZmViMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0lVc2VyXCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIHVzZXI6IElVc2VyO1xyXG4gICAgc3RhdGU6IGJvb2xlYW47XHJcblxyXG4gICAgZnJvbnRDb21wb25lbnQ6IFJlYWN0Tm9kZTtcclxuICAgIGJhY2tDb21wb25lbnQ6IFJlYWN0Tm9kZTtcclxuXHJcbiAgICBub3RFbm91Z2hDb25kaXRpb246ICgpID0+IHZvaWQ7XHJcbiAgICBlbm91Z2hDb25kaXRpb246ICgpID0+IHZvaWQ7XHJcblxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBwZXJzcGVjdGl2ZTogXCIxMDAwcHhcIlxyXG4gICAgfSxcclxuXHJcbiAgICByb290SW5uZXI6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuNnNcIixcclxuICAgICAgICB0cmFuc2Zvcm1TdHlsZTogXCJwcmVzZXJ2ZS0zZFwiLFxyXG4gICAgfSxcclxuICAgIHJvb3RJbm5lckZsaXA6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDJzXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtU3R5bGU6IFwicHJlc2VydmUtM2RcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlWSgxODBkZWcpXCJcclxuICAgIH0sXHJcbiAgICBmcm9udDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiBcImhpZGRlblwiLFxyXG4gICAgICAgIFdlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eTogXCJoaWRkZW5cIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcInJlZFwiXHJcbiAgICB9LFxyXG4gICAgYmFjazoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiBcImhpZGRlblwiLFxyXG4gICAgICAgIFdlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eTogXCJoaWRkZW5cIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcImJsdWVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlWSgxODBkZWcpXCJcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCBjb25zdCBNeUNhcmQgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3N0YXRlRmxpcCwgc2V0U3RhdGVGbGlwXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLnN0YXRlKTtcclxuICAgIGNvbnN0IGhhbmRsZUZsaXAgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnVzZXIudGltZXNBRGF5ID49IDMgfHwgKCFwcm9wcy51c2VyLnN0YXRlLmxvZ2luICYmIHByb3BzLnVzZXIudGltZXNBRGF5ID4gMCkgfHwgKCFwcm9wcy51c2VyLnN0YXRlLnNoYXJlZCAmJiBwcm9wcy51c2VyLnRpbWVzQURheSA+IDEpKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm5vdEVub3VnaENvbmRpdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3BzLmVub3VnaENvbmRpdGlvbigpO1xyXG4gICAgICAgIHNldFN0YXRlRmxpcCh0cnVlKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gb25DbGljaz17KCkgPT4gaGFuZGxlRmxpcCgpfT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9eyFzdGF0ZUZsaXAgPyBjbGFzc2VzLnJvb3RJbm5lciA6IGNsYXNzZXMucm9vdElubmVyRmxpcH0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5mcm9udH0+e3Byb3BzLmZyb250Q29tcG9uZW50fTwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYmFja30+e3Byb3BzLmJhY2tDb21wb25lbnR9PC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9