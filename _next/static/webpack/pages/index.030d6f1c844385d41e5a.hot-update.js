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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXlDYXJkL015Q2FyZC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJwZXJzcGVjdGl2ZSIsInJvb3RJbm5lciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtU3R5bGUiLCJyb290SW5uZXJGbGlwIiwidHJhbnNmb3JtIiwiZnJvbnQiLCJiYWNrZmFjZVZpc2liaWxpdHkiLCJXZWJraXRCYWNrZmFjZVZpc2liaWxpdHkiLCJiYWNrZ3JvdW5kIiwiYmFjayIsIk15Q2FyZCIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0Iiwic3RhdGUiLCJzdGF0ZUZsaXAiLCJzZXRTdGF0ZUZsaXAiLCJoYW5kbGVGbGlwIiwidXNlciIsInRpbWVzQURheSIsImxvZ2luIiwic2hhcmVkIiwibm90RW5vdWdoQ29uZGl0aW9uIiwiZW5vdWdoQ29uZGl0aW9uIiwiZnJvbnRDb21wb25lbnQiLCJiYWNrQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBaUJBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLGVBQVcsRUFBRTtBQURYLEdBRG1CO0FBS3pCQyxXQUFTLEVBQUU7QUFDUEMsWUFBUSxFQUFFLFVBREg7QUFFUEMsU0FBSyxFQUFFLE1BRkE7QUFHUEMsVUFBTSxFQUFFLE1BSEQ7QUFJUEMsY0FBVSxFQUFFLGdCQUpMO0FBS1BDLGtCQUFjLEVBQUU7QUFMVCxHQUxjO0FBWXpCQyxlQUFhLEVBQUU7QUFDWEwsWUFBUSxFQUFFLFVBREM7QUFFWEMsU0FBSyxFQUFFLE1BRkk7QUFHWEMsVUFBTSxFQUFFLE1BSEc7QUFJWEMsY0FBVSxFQUFFLGNBSkQ7QUFLWEMsa0JBQWMsRUFBRSxhQUxMO0FBTVhFLGFBQVMsRUFBRTtBQU5BLEdBWlU7QUFvQnpCQyxPQUFLLEVBQUU7QUFDSFAsWUFBUSxFQUFFLFVBRFA7QUFFSEMsU0FBSyxFQUFFLE1BRko7QUFHSEMsVUFBTSxFQUFFLE1BSEw7QUFJSE0sc0JBQWtCLEVBQUUsUUFKakI7QUFLSEMsNEJBQXdCLEVBQUUsUUFMdkI7QUFNSEMsY0FBVSxFQUFFO0FBTlQsR0FwQmtCO0FBNEJ6QkMsTUFBSSxFQUFFO0FBQ0ZYLFlBQVEsRUFBRSxVQURSO0FBRUZDLFNBQUssRUFBRSxNQUZMO0FBR0ZDLFVBQU0sRUFBRSxNQUhOO0FBSUZNLHNCQUFrQixFQUFFLFFBSmxCO0FBS0ZDLDRCQUF3QixFQUFFLFFBTHhCO0FBTUZDLGNBQVUsRUFBRSxNQU5WO0FBT0ZKLGFBQVMsRUFBRTtBQVBUO0FBNUJtQixDQUFELENBQTVCO0FBc0NPLElBQU1NLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBbUI7QUFBQTs7QUFDckMsTUFBTUMsT0FBTyxHQUFHbkIsU0FBUyxFQUF6Qjs7QUFEcUMsd0JBRUhvQixxREFBQSxDQUF3QkYsS0FBSyxDQUFDRyxLQUE5QixDQUZHO0FBQUE7QUFBQSxNQUU5QkMsU0FGOEI7QUFBQSxNQUVuQkMsWUFGbUI7O0FBR3JDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsUUFBSU4sS0FBSyxDQUFDTyxJQUFOLENBQVdDLFNBQVgsSUFBd0IsQ0FBeEIsSUFBOEIsQ0FBQ1IsS0FBSyxDQUFDTyxJQUFOLENBQVdKLEtBQVgsQ0FBaUJNLEtBQWxCLElBQTJCVCxLQUFLLENBQUNPLElBQU4sQ0FBV0MsU0FBWCxHQUF1QixDQUFoRixJQUF1RixDQUFDUixLQUFLLENBQUNPLElBQU4sQ0FBV0osS0FBWCxDQUFpQk8sTUFBbEIsSUFBNEJWLEtBQUssQ0FBQ08sSUFBTixDQUFXQyxTQUFYLEdBQXVCLENBQTlJLEVBQWtKO0FBQzlJUixXQUFLLENBQUNXLGtCQUFOO0FBQ0E7QUFDSDs7QUFDRFgsU0FBSyxDQUFDWSxlQUFOO0FBQ0FQLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBRUgsR0FSRDs7QUFVQSxzQkFDSSw4REFBQyxrREFBRDtBQUFLLGFBQVMsRUFBRUosT0FBTyxDQUFDakIsSUFBeEI7QUFBOEIsU0FBSyxFQUFFZ0IsS0FBSyxDQUFDWixLQUEzQztBQUFrRCxVQUFNLEVBQUVZLEtBQUssQ0FBQ1gsTUFBaEU7QUFBd0UsV0FBTyxFQUFFO0FBQUEsYUFBTWlCLFVBQVUsRUFBaEI7QUFBQSxLQUFqRjtBQUFBLDJCQUNJLDhEQUFDLGtEQUFEO0FBQUssZUFBUyxFQUFFLENBQUNGLFNBQUQsR0FBYUgsT0FBTyxDQUFDZixTQUFyQixHQUFpQ2UsT0FBTyxDQUFDVCxhQUF6RDtBQUFBLDhCQUNJLDhEQUFDLGtEQUFEO0FBQUssaUJBQVMsRUFBRVMsT0FBTyxDQUFDUCxLQUF4QjtBQUFBLGtCQUFnQ00sS0FBSyxDQUFDYTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQyxrREFBRDtBQUFLLGlCQUFTLEVBQUVaLE9BQU8sQ0FBQ0gsSUFBeEI7QUFBQSxrQkFBK0JFLEtBQUssQ0FBQ2M7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBckJNOztHQUFNZixNO1VBQ09qQixTOzs7S0FEUGlCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDMwZDZmMWM4NDQzODVkNDFlNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9JVXNlclwiO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB3aWR0aDogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICB1c2VyOiBJVXNlcjtcclxuICAgIHN0YXRlOiBib29sZWFuO1xyXG5cclxuICAgIGZyb250Q29tcG9uZW50OiBSZWFjdE5vZGU7XHJcbiAgICBiYWNrQ29tcG9uZW50OiBSZWFjdE5vZGU7XHJcblxyXG4gICAgbm90RW5vdWdoQ29uZGl0aW9uOiAoKSA9PiB2b2lkO1xyXG4gICAgZW5vdWdoQ29uZGl0aW9uOiAoKSA9PiB2b2lkO1xyXG5cclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgcGVyc3BlY3RpdmU6IFwiMTAwMHB4XCJcclxuICAgIH0sXHJcblxyXG4gICAgcm9vdElubmVyOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjZzXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtU3R5bGU6IFwicHJlc2VydmUtM2RcIixcclxuICAgIH0sXHJcbiAgICByb290SW5uZXJGbGlwOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAyc1wiLFxyXG4gICAgICAgIHRyYW5zZm9ybVN0eWxlOiBcInByZXNlcnZlLTNkXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZVkoMTgwZGVnKVwiXHJcbiAgICB9LFxyXG4gICAgZnJvbnQ6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogXCJoaWRkZW5cIixcclxuICAgICAgICBXZWJraXRCYWNrZmFjZVZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIlxyXG4gICAgfSxcclxuICAgIGJhY2s6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogXCJoaWRkZW5cIixcclxuICAgICAgICBXZWJraXRCYWNrZmFjZVZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCJibHVlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZVkoMTgwZGVnKVwiXHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgY29uc3QgTXlDYXJkID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtzdGF0ZUZsaXAsIHNldFN0YXRlRmxpcF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihwcm9wcy5zdGF0ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVGbGlwID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy51c2VyLnRpbWVzQURheSA+PSAzIHx8ICghcHJvcHMudXNlci5zdGF0ZS5sb2dpbiAmJiBwcm9wcy51c2VyLnRpbWVzQURheSA+IDApIHx8ICghcHJvcHMudXNlci5zdGF0ZS5zaGFyZWQgJiYgcHJvcHMudXNlci50aW1lc0FEYXkgPiAxKSkge1xyXG4gICAgICAgICAgICBwcm9wcy5ub3RFbm91Z2hDb25kaXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5lbm91Z2hDb25kaXRpb24oKTtcclxuICAgICAgICBzZXRTdGF0ZUZsaXAodHJ1ZSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHdpZHRoPXtwcm9wcy53aWR0aH0gaGVpZ2h0PXtwcm9wcy5oZWlnaHR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUZsaXAoKX0+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXshc3RhdGVGbGlwID8gY2xhc3Nlcy5yb290SW5uZXIgOiBjbGFzc2VzLnJvb3RJbm5lckZsaXB9PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZnJvbnR9Pntwcm9wcy5mcm9udENvbXBvbmVudH08L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2t9Pntwcm9wcy5iYWNrQ29tcG9uZW50fTwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==