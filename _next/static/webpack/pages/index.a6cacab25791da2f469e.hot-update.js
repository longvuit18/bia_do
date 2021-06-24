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
    if (props.user.timesADay >= 3 || !props.user.state.login || !props.user.state.shared) {
      props.notEnoughCondition();
      return;
    }

    props.enoughCondition();
    setStateFlip(true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: classes.root,
    width: props.width,
    height: props.height,
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
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        className: classes.back,
        children: props.backComponent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXlDYXJkL015Q2FyZC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJwZXJzcGVjdGl2ZSIsInJvb3RJbm5lciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtU3R5bGUiLCJyb290SW5uZXJGbGlwIiwidHJhbnNmb3JtIiwiZnJvbnQiLCJiYWNrZmFjZVZpc2liaWxpdHkiLCJXZWJraXRCYWNrZmFjZVZpc2liaWxpdHkiLCJiYWNrZ3JvdW5kIiwiYmFjayIsIk15Q2FyZCIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0Iiwic3RhdGUiLCJzdGF0ZUZsaXAiLCJzZXRTdGF0ZUZsaXAiLCJoYW5kbGVGbGlwIiwidXNlciIsInRpbWVzQURheSIsImxvZ2luIiwic2hhcmVkIiwibm90RW5vdWdoQ29uZGl0aW9uIiwiZW5vdWdoQ29uZGl0aW9uIiwiZnJvbnRDb21wb25lbnQiLCJiYWNrQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBaUJBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLGVBQVcsRUFBRTtBQURYLEdBRG1CO0FBS3pCQyxXQUFTLEVBQUU7QUFDUEMsWUFBUSxFQUFFLFVBREg7QUFFUEMsU0FBSyxFQUFFLE1BRkE7QUFHUEMsVUFBTSxFQUFFLE1BSEQ7QUFJUEMsY0FBVSxFQUFFLGdCQUpMO0FBS1BDLGtCQUFjLEVBQUU7QUFMVCxHQUxjO0FBWXpCQyxlQUFhLEVBQUU7QUFDWEwsWUFBUSxFQUFFLFVBREM7QUFFWEMsU0FBSyxFQUFFLE1BRkk7QUFHWEMsVUFBTSxFQUFFLE1BSEc7QUFJWEMsY0FBVSxFQUFFLGNBSkQ7QUFLWEMsa0JBQWMsRUFBRSxhQUxMO0FBTVhFLGFBQVMsRUFBRTtBQU5BLEdBWlU7QUFvQnpCQyxPQUFLLEVBQUU7QUFDSFAsWUFBUSxFQUFFLFVBRFA7QUFFSEMsU0FBSyxFQUFFLE1BRko7QUFHSEMsVUFBTSxFQUFFLE1BSEw7QUFJSE0sc0JBQWtCLEVBQUUsUUFKakI7QUFLSEMsNEJBQXdCLEVBQUUsUUFMdkI7QUFNSEMsY0FBVSxFQUFFO0FBTlQsR0FwQmtCO0FBNEJ6QkMsTUFBSSxFQUFFO0FBQ0ZYLFlBQVEsRUFBRSxVQURSO0FBRUZDLFNBQUssRUFBRSxNQUZMO0FBR0ZDLFVBQU0sRUFBRSxNQUhOO0FBSUZNLHNCQUFrQixFQUFFLFFBSmxCO0FBS0ZDLDRCQUF3QixFQUFFLFFBTHhCO0FBTUZDLGNBQVUsRUFBRSxNQU5WO0FBT0ZKLGFBQVMsRUFBRTtBQVBUO0FBNUJtQixDQUFELENBQTVCO0FBc0NPLElBQU1NLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBbUI7QUFBQTs7QUFDckMsTUFBTUMsT0FBTyxHQUFHbkIsU0FBUyxFQUF6Qjs7QUFEcUMsd0JBRUhvQixxREFBQSxDQUF3QkYsS0FBSyxDQUFDRyxLQUE5QixDQUZHO0FBQUE7QUFBQSxNQUU5QkMsU0FGOEI7QUFBQSxNQUVuQkMsWUFGbUI7O0FBR3JDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsUUFBSU4sS0FBSyxDQUFDTyxJQUFOLENBQVdDLFNBQVgsSUFBd0IsQ0FBeEIsSUFBNkIsQ0FBQ1IsS0FBSyxDQUFDTyxJQUFOLENBQVdKLEtBQVgsQ0FBaUJNLEtBQS9DLElBQXdELENBQUNULEtBQUssQ0FBQ08sSUFBTixDQUFXSixLQUFYLENBQWlCTyxNQUE5RSxFQUFzRjtBQUNsRlYsV0FBSyxDQUFDVyxrQkFBTjtBQUNBO0FBQ0g7O0FBQ0RYLFNBQUssQ0FBQ1ksZUFBTjtBQUNBUCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVILEdBUkQ7O0FBVUEsc0JBQ0ksOERBQUMsa0RBQUQ7QUFBSyxhQUFTLEVBQUVKLE9BQU8sQ0FBQ2pCLElBQXhCO0FBQThCLFNBQUssRUFBRWdCLEtBQUssQ0FBQ1osS0FBM0M7QUFBa0QsVUFBTSxFQUFFWSxLQUFLLENBQUNYLE1BQWhFO0FBQXdFLFdBQU8sRUFBRTtBQUFBLGFBQU1pQixVQUFVLEVBQWhCO0FBQUEsS0FBakY7QUFBQSwyQkFDSSw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBRSxDQUFDRixTQUFELEdBQWFILE9BQU8sQ0FBQ2YsU0FBckIsR0FBaUNlLE9BQU8sQ0FBQ1QsYUFBekQ7QUFBQSw4QkFDSSw4REFBQyxrREFBRDtBQUFLLGlCQUFTLEVBQUVTLE9BQU8sQ0FBQ1AsS0FBeEI7QUFBQSxrQkFBZ0NNLEtBQUssQ0FBQ2E7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFFWixPQUFPLENBQUNILElBQXhCO0FBQUEsa0JBQStCRSxLQUFLLENBQUNjO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQXJCTTs7R0FBTWYsTTtVQUNPakIsUzs7O0tBRFBpQixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE2Y2FjYWIyNTc5MWRhMmY0NjllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvSVVzZXJcIjtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgd2lkdGg6IHN0cmluZztcclxuICAgIGhlaWdodDogc3RyaW5nO1xyXG4gICAgdXNlcjogSVVzZXI7XHJcbiAgICBzdGF0ZTogYm9vbGVhbjtcclxuXHJcbiAgICBmcm9udENvbXBvbmVudDogUmVhY3ROb2RlO1xyXG4gICAgYmFja0NvbXBvbmVudDogUmVhY3ROb2RlO1xyXG5cclxuICAgIG5vdEVub3VnaENvbmRpdGlvbjogKCkgPT4gdm9pZDtcclxuICAgIGVub3VnaENvbmRpdGlvbjogKCkgPT4gdm9pZDtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHBlcnNwZWN0aXZlOiBcIjEwMDBweFwiXHJcbiAgICB9LFxyXG5cclxuICAgIHJvb3RJbm5lcjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC42c1wiLFxyXG4gICAgICAgIHRyYW5zZm9ybVN0eWxlOiBcInByZXNlcnZlLTNkXCIsXHJcbiAgICB9LFxyXG4gICAgcm9vdElubmVyRmxpcDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMnNcIixcclxuICAgICAgICB0cmFuc2Zvcm1TdHlsZTogXCJwcmVzZXJ2ZS0zZFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGVZKDE4MGRlZylcIlxyXG4gICAgfSxcclxuICAgIGZyb250OiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgV2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5OiBcImhpZGRlblwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwicmVkXCJcclxuICAgIH0sXHJcbiAgICBiYWNrOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgV2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5OiBcImhpZGRlblwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiYmx1ZVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGVZKDE4MGRlZylcIlxyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGNvbnN0IE15Q2FyZCA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbc3RhdGVGbGlwLCBzZXRTdGF0ZUZsaXBdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4ocHJvcHMuc3RhdGUpO1xyXG4gICAgY29uc3QgaGFuZGxlRmxpcCA9ICgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMudXNlci50aW1lc0FEYXkgPj0gMyB8fCAhcHJvcHMudXNlci5zdGF0ZS5sb2dpbiB8fCAhcHJvcHMudXNlci5zdGF0ZS5zaGFyZWQpIHtcclxuICAgICAgICAgICAgcHJvcHMubm90RW5vdWdoQ29uZGl0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMuZW5vdWdoQ29uZGl0aW9uKCk7XHJcbiAgICAgICAgc2V0U3RhdGVGbGlwKHRydWUpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSB3aWR0aD17cHJvcHMud2lkdGh9IGhlaWdodD17cHJvcHMuaGVpZ2h0fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGbGlwKCl9PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17IXN0YXRlRmxpcCA/IGNsYXNzZXMucm9vdElubmVyIDogY2xhc3Nlcy5yb290SW5uZXJGbGlwfT5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmZyb250fT57cHJvcHMuZnJvbnRDb21wb25lbnR9PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrfT57cHJvcHMuYmFja0NvbXBvbmVudH08L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=