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
    position: "relative",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden"
  },
  back: {
    position: "relative",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
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
        lineNumber: 69,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        className: classes.back,
        children: props.backComponent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXlDYXJkL015Q2FyZC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJwZXJzcGVjdGl2ZSIsInJvb3RJbm5lciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtU3R5bGUiLCJyb290SW5uZXJGbGlwIiwidHJhbnNmb3JtIiwiZnJvbnQiLCJiYWNrZmFjZVZpc2liaWxpdHkiLCJXZWJraXRCYWNrZmFjZVZpc2liaWxpdHkiLCJiYWNrIiwiTXlDYXJkIiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJzdGF0ZSIsInN0YXRlRmxpcCIsInNldFN0YXRlRmxpcCIsImhhbmRsZUZsaXAiLCJ1c2VyIiwidGltZXNBRGF5IiwibG9naW4iLCJzaGFyZWQiLCJub3RFbm91Z2hDb25kaXRpb24iLCJlbm91Z2hDb25kaXRpb24iLCJmcm9udENvbXBvbmVudCIsImJhY2tDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlQSxJQUFNQSxTQUFTLEdBQUdDLDZEQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxlQUFXLEVBQUU7QUFEWCxHQURtQjtBQUt6QkMsV0FBUyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxVQURIO0FBRVBDLFNBQUssRUFBRSxNQUZBO0FBR1BDLFVBQU0sRUFBRSxNQUhEO0FBSVBDLGNBQVUsRUFBRSxnQkFKTDtBQUtQQyxrQkFBYyxFQUFFO0FBTFQsR0FMYztBQVl6QkMsZUFBYSxFQUFFO0FBQ1hMLFlBQVEsRUFBRSxVQURDO0FBRVhDLFNBQUssRUFBRSxNQUZJO0FBR1hDLFVBQU0sRUFBRSxNQUhHO0FBSVhDLGNBQVUsRUFBRSxjQUpEO0FBS1hDLGtCQUFjLEVBQUUsYUFMTDtBQU1YRSxhQUFTLEVBQUU7QUFOQSxHQVpVO0FBb0J6QkMsT0FBSyxFQUFFO0FBQ0hQLFlBQVEsRUFBRSxVQURQO0FBRUhDLFNBQUssRUFBRSxNQUZKO0FBR0hDLFVBQU0sRUFBRSxNQUhMO0FBSUhNLHNCQUFrQixFQUFFLFFBSmpCO0FBS0hDLDRCQUF3QixFQUFFO0FBTHZCLEdBcEJrQjtBQTJCekJDLE1BQUksRUFBRTtBQUNGVixZQUFRLEVBQUUsVUFEUjtBQUVGQyxTQUFLLEVBQUUsTUFGTDtBQUdGQyxVQUFNLEVBQUUsTUFITjtBQUlGTSxzQkFBa0IsRUFBRSxRQUpsQjtBQUtGQyw0QkFBd0IsRUFBRSxRQUx4QjtBQU1GSCxhQUFTLEVBQUU7QUFOVDtBQTNCbUIsQ0FBRCxDQUE1QjtBQW9DTyxJQUFNSyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQW1CO0FBQUE7O0FBQ3JDLE1BQU1DLE9BQU8sR0FBR2xCLFNBQVMsRUFBekI7O0FBRHFDLHdCQUVIbUIscURBQUEsQ0FBd0JGLEtBQUssQ0FBQ0csS0FBOUIsQ0FGRztBQUFBO0FBQUEsTUFFOUJDLFNBRjhCO0FBQUEsTUFFbkJDLFlBRm1COztBQUdyQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFFBQUlOLEtBQUssQ0FBQ08sSUFBTixDQUFXQyxTQUFYLElBQXdCLENBQXhCLElBQThCLENBQUNSLEtBQUssQ0FBQ08sSUFBTixDQUFXSixLQUFYLENBQWlCTSxLQUFsQixJQUEyQlQsS0FBSyxDQUFDTyxJQUFOLENBQVdDLFNBQVgsR0FBdUIsQ0FBaEYsSUFBdUYsQ0FBQ1IsS0FBSyxDQUFDTyxJQUFOLENBQVdKLEtBQVgsQ0FBaUJPLE1BQWxCLElBQTRCVixLQUFLLENBQUNPLElBQU4sQ0FBV0MsU0FBWCxHQUF1QixDQUE5SSxFQUFrSjtBQUM5SVIsV0FBSyxDQUFDVyxrQkFBTjtBQUNBO0FBQ0g7O0FBQ0RYLFNBQUssQ0FBQ1ksZUFBTjtBQUNBUCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVILEdBUkQ7O0FBVUEsc0JBQ0ksOERBQUMsa0RBQUQ7QUFBSyxhQUFTLEVBQUVKLE9BQU8sQ0FBQ2hCLElBQXhCO0FBQThCLFdBQU8sRUFBRTtBQUFBLGFBQU1xQixVQUFVLEVBQWhCO0FBQUEsS0FBdkM7QUFBQSwyQkFDSSw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBRSxDQUFDRixTQUFELEdBQWFILE9BQU8sQ0FBQ2QsU0FBckIsR0FBaUNjLE9BQU8sQ0FBQ1IsYUFBekQ7QUFBQSw4QkFDSSw4REFBQyxrREFBRDtBQUFLLGlCQUFTLEVBQUVRLE9BQU8sQ0FBQ04sS0FBeEI7QUFBQSxrQkFBZ0NLLEtBQUssQ0FBQ2E7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFFWixPQUFPLENBQUNILElBQXhCO0FBQUEsa0JBQStCRSxLQUFLLENBQUNjO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQXJCTTs7R0FBTWYsTTtVQUNPaEIsUzs7O0tBRFBnQixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkNTM3MjRiMzE2OTY1ZTM3YTE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvSVVzZXJcIjtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgdXNlcjogSVVzZXI7XHJcbiAgICBzdGF0ZTogYm9vbGVhbjtcclxuXHJcbiAgICBmcm9udENvbXBvbmVudDogUmVhY3ROb2RlO1xyXG4gICAgYmFja0NvbXBvbmVudDogUmVhY3ROb2RlO1xyXG5cclxuICAgIG5vdEVub3VnaENvbmRpdGlvbjogKCkgPT4gdm9pZDtcclxuICAgIGVub3VnaENvbmRpdGlvbjogKCkgPT4gdm9pZDtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHBlcnNwZWN0aXZlOiBcIjEwMDBweFwiXHJcbiAgICB9LFxyXG5cclxuICAgIHJvb3RJbm5lcjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC42c1wiLFxyXG4gICAgICAgIHRyYW5zZm9ybVN0eWxlOiBcInByZXNlcnZlLTNkXCIsXHJcbiAgICB9LFxyXG4gICAgcm9vdElubmVyRmxpcDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMnNcIixcclxuICAgICAgICB0cmFuc2Zvcm1TdHlsZTogXCJwcmVzZXJ2ZS0zZFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGVZKDE4MGRlZylcIlxyXG4gICAgfSxcclxuICAgIGZyb250OiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgV2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5OiBcImhpZGRlblwiLFxyXG4gICAgfSxcclxuICAgIGJhY2s6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogXCJoaWRkZW5cIixcclxuICAgICAgICBXZWJraXRCYWNrZmFjZVZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZVkoMTgwZGVnKVwiXHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgY29uc3QgTXlDYXJkID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtzdGF0ZUZsaXAsIHNldFN0YXRlRmxpcF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihwcm9wcy5zdGF0ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVGbGlwID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy51c2VyLnRpbWVzQURheSA+PSAzIHx8ICghcHJvcHMudXNlci5zdGF0ZS5sb2dpbiAmJiBwcm9wcy51c2VyLnRpbWVzQURheSA+IDApIHx8ICghcHJvcHMudXNlci5zdGF0ZS5zaGFyZWQgJiYgcHJvcHMudXNlci50aW1lc0FEYXkgPiAxKSkge1xyXG4gICAgICAgICAgICBwcm9wcy5ub3RFbm91Z2hDb25kaXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5lbm91Z2hDb25kaXRpb24oKTtcclxuICAgICAgICBzZXRTdGF0ZUZsaXAodHJ1ZSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUZsaXAoKX0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXshc3RhdGVGbGlwID8gY2xhc3Nlcy5yb290SW5uZXIgOiBjbGFzc2VzLnJvb3RJbm5lckZsaXB9PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZnJvbnR9Pntwcm9wcy5mcm9udENvbXBvbmVudH08L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2t9Pntwcm9wcy5iYWNrQ29tcG9uZW50fTwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==