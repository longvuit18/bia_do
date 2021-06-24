self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/models/IUser.ts":
/*!*****************************!*\
  !*** ./src/models/IUser.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; }
/* harmony export */ });
/* harmony import */ var D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var User = function User() {
  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, User);

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "id", (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)());

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "name", "");

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "email", "");

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "phone", "");

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "timesADay", 0);

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "positionVoucher", Array.from({
    length: 9
  }, function () {
    return false;
  }));

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "backCard", Array.from({
    length: 9
  }, function () {
    return {
      image: "/dragon.png",
      name: "123",
      voucher: "23123123"
    };
  }));

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "state", {
    login: false,
    shared: false
  });

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "voucher", {
    name: "",
    image: "",
    voucher: ""
  });

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "createdAt", new Date());

  (0,D_project_mmgame_games_bia_do_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "numberOfDays", void 0);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZGVscy9JVXNlci50cyJdLCJuYW1lcyI6WyJVc2VyIiwidXVpZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImltYWdlIiwibmFtZSIsInZvdWNoZXIiLCJsb2dpbiIsInNoYXJlZCIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThCTyxJQUFNQSxJQUFiO0FBQUE7O0FBQUEsNkpBQ1NDLHdDQUFJLEVBRGI7O0FBQUEsK0pBRVcsRUFGWDs7QUFBQSxnS0FHWSxFQUhaOztBQUFBLGdLQUlZLEVBSlo7O0FBQUEsb0tBTWdCLENBTmhCOztBQUFBLDBLQU9zQkMsS0FBSyxDQUFDQyxJQUFOLENBQVc7QUFBRUMsVUFBTSxFQUFFO0FBQVYsR0FBWCxFQUEwQjtBQUFBLFdBQU0sS0FBTjtBQUFBLEdBQTFCLENBUHRCOztBQUFBLG1LQVFlRixLQUFLLENBQUNDLElBQU4sQ0FBVztBQUFFQyxVQUFNLEVBQUU7QUFBVixHQUFYLEVBQTBCO0FBQUEsV0FBTztBQUFFQyxXQUFLLEVBQUUsYUFBVDtBQUF3QkMsVUFBSSxFQUFFLEtBQTlCO0FBQXFDQyxhQUFPLEVBQUU7QUFBOUMsS0FBUDtBQUFBLEdBQTFCLENBUmY7O0FBQUEsZ0tBU1k7QUFDSkMsU0FBSyxFQUFFLEtBREg7QUFFSkMsVUFBTSxFQUFFO0FBRkosR0FUWjs7QUFBQSxrS0FhYztBQUNOSCxRQUFJLEVBQUUsRUFEQTtBQUVORCxTQUFLLEVBQUUsRUFGRDtBQUdORSxXQUFPLEVBQUU7QUFISCxHQWJkOztBQUFBLG9LQWtCZ0IsSUFBSUcsSUFBSixFQWxCaEI7O0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45N2Y4YWY5M2EyN2Q4MWZiODkwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gXCJ1dWlkXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWb3VjaGVyIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZvdWNoZXI6IHN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG5cclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwaG9uZTogc3RyaW5nO1xyXG5cclxuICAgIHRpbWVzQURheTogbnVtYmVyO1xyXG4gICAgcG9zaXRpb25Wb3VjaGVyOiBBcnJheTxib29sZWFuPjtcclxuICAgIGJhY2tDYXJkOiBBcnJheTxJVm91Y2hlcj47XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIGxvZ2luOiBib29sZWFuO1xyXG4gICAgICAgIHNoYXJlZDogYm9vbGVhbjtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHZvdWNoZXI6IElWb3VjaGVyO1xyXG5cclxuICAgIG51bWJlck9mRGF5czogbnVtYmVyO1xyXG4gICAgY3JlYXRlZEF0OiBEYXRlO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIgaW1wbGVtZW50cyBJVXNlciB7XHJcbiAgICBpZCA9IHV1aWQoKTtcclxuICAgIG5hbWUgPSBcIlwiO1xyXG4gICAgZW1haWwgPSBcIlwiO1xyXG4gICAgcGhvbmUgPSBcIlwiO1xyXG5cclxuICAgIHRpbWVzQURheSA9IDA7XHJcbiAgICBwb3NpdGlvblZvdWNoZXIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+IGZhbHNlKTtcclxuICAgIGJhY2tDYXJkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogOSB9LCAoKSA9PiAoeyBpbWFnZTogXCIvZHJhZ29uLnBuZ1wiLCBuYW1lOiBcIjEyM1wiLCB2b3VjaGVyOiBcIjIzMTIzMTIzXCIgfSkpO1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbG9naW46IGZhbHNlLFxyXG4gICAgICAgIHNoYXJlZDogZmFsc2VcclxuICAgIH07XHJcbiAgICB2b3VjaGVyID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgdm91Y2hlcjogXCJcIlxyXG4gICAgfTtcclxuICAgIGNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XHJcbiAgICBudW1iZXJPZkRheXM6IDBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=