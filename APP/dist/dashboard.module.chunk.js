webpackJsonp(["dashboard.module"],{

/***/ "./src/app/app-state/effects/balance.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_billing_service__ = __webpack_require__("./src/app/_services/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_billing__ = __webpack_require__("./src/app/app-state/actions/billing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BalanceEffects = /** @class */ (function () {
    function BalanceEffects(action$, billingService) {
        var _this = this;
        this.action$ = action$;
        this.billingService = billingService;
        this.getDashboardPaymentDtlsEffects$ = this.action$.ofType(__WEBPACK_IMPORTED_MODULE_6__actions_billing__["r" /* GET_DASHBOARD_PAYMENT_DETAILS */])
            .map(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) { return _this.billingService.getDashboardPaymentDtls(payload)
            .map(function (response) {
            return new __WEBPACK_IMPORTED_MODULE_6__actions_billing__["F" /* GetDashboardPaymentDtlsSuccess */](response);
        }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_6__actions_billing__["E" /* GetDashboardPaymentDtlsFailure */]({})); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], BalanceEffects.prototype, "getDashboardPaymentDtlsEffects$", void 0);
    return BalanceEffects;
}());



/***/ }),

/***/ "./src/app/app-state/effects/esiid.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ESIIDEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_esiid__ = __webpack_require__("./src/app/app-state/actions/esiid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ESIIDEffects = /** @class */ (function () {
    function ESIIDEffects(action$, accountService) {
        var _this = this;
        this.action$ = action$;
        this.accountService = accountService;
        this.listESIIDEffects$ = this.action$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_esiid__["c" /* GET_ESIID_LIST */])
            .map(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) { return _this.accountService.listESIIDs(payload)
            .map(function (esiidList) {
            return new __WEBPACK_IMPORTED_MODULE_7__actions_esiid__["h" /* GetESIIDListSuccess */](esiidList);
        }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_esiid__["g" /* GetESIIDListFailure */]({})); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ESIIDEffects.prototype, "listESIIDEffects$", void 0);
    return ESIIDEffects;
}());



/***/ }),

/***/ "./src/app/dashboard/account/account.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["a[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}"];



/***/ }),

/***/ "./src/app/dashboard/account/account.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_AccountComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_AccountComponent_0;
/* unused harmony export View_AccountComponent_Host_0 */
/* unused harmony export AccountComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_component_css_shim_ngstyle__ = __webpack_require__("./src/app/dashboard/account/account.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__ = __webpack_require__("./src/app/shared/loading/loading.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_loading_loading_component__ = __webpack_require__("./src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_commonutils_pipe__ = __webpack_require__("./src/app/_pipes/commonutils.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_component__ = __webpack_require__("./src/app/dashboard/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_AccountComponent = [__WEBPACK_IMPORTED_MODULE_0__account_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_AccountComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_AccountComponent, data: {} });

function View_AccountComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "a", [["class", "depositAmountCAA"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDepositAmount() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["View Deposit Amount"]))], null, null); }
function View_AccountComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "loading-indicator", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_loading_loading_component__["a" /* LoadingComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AccountComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = (((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform(_co.depositAmount$))) == null) ? null : tmp_0_0.value); _ck(_v, 1, 0, currVal_0); }); }
function View_AccountComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, "div", [["class", "infoRow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Terms:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 2, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](6, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](7, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v.parent, 0), _co.terms)); _ck(_v, 6, 0, currVal_0); }); }
function View_AccountComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "a", [["class", "depositAmountCAA"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onTaxStatus() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["View City/State Tax Status"]))], null, null); }
function View_AccountComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "loading-indicator", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_loading_loading_component__["a" /* LoadingComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AccountComponent_7(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = (((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform(_co.taxStatus$))) == null) ? null : tmp_0_0.value); _ck(_v, 1, 0, currVal_0); }); }
function View_AccountComponent_8(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, "div", [["class", "infoRow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Contract Expiration Date:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 2, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](6, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](7, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v.parent, 0), _co.contractExpDate)); _ck(_v, 6, 0, currVal_0); }); }
function View_AccountComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_5__pipes_commonutils_pipe__["d" /* NotProvidedPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 53, "div", [["class", "padding3Per mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Account"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 47, "div", [["class", "tableInfo"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 18, "div", [["class", "infoRow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Deposit Amount:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 12, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_AccountComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_AccountComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_AccountComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_AccountComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](29, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](31, 0, null, null, 18, "div", [["class", "infoRow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](33, 0, null, null, 1, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["City/State Tax Status:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](36, 0, null, null, 12, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_AccountComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](39, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_AccountComponent_6)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](42, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_AccountComponent_7)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](46, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_AccountComponent_8)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](52, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.depositAmountClicked; _ck(_v, 16, 0, currVal_0); var tmp_1_0 = null; var currVal_1 = (((tmp_1_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 19, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).transform(_co.depositAmount$))) == null) ? null : tmp_1_0.isLoading); _ck(_v, 19, 0, currVal_1); var tmp_2_0 = null; var currVal_2 = (((tmp_2_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 23, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 24).transform(_co.depositAmount$))) == null) ? null : tmp_2_0.isLoadingSuccess); _ck(_v, 23, 0, currVal_2); var currVal_3 = (_co.userCategory == "I"); _ck(_v, 29, 0, currVal_3); var currVal_4 = !_co.taxStatusClicked; _ck(_v, 39, 0, currVal_4); var tmp_5_0 = null; var currVal_5 = (((tmp_5_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 42, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43).transform(_co.taxStatus$))) == null) ? null : tmp_5_0.isLoading); _ck(_v, 42, 0, currVal_5); var tmp_6_0 = null; var currVal_6 = (((tmp_6_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 46, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).transform(_co.taxStatus$))) == null) ? null : tmp_6_0.isLoadingSuccess); _ck(_v, 46, 0, currVal_6); var currVal_7 = (_co.userCategory == "I"); _ck(_v, 52, 0, currVal_7); }, null); }
function View_AccountComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "dashboard-account", [], null, null, null, View_AccountComponent_0, RenderType_AccountComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_6__account_component__["a" /* AccountComponent */], [__WEBPACK_IMPORTED_MODULE_7__ngrx_store__["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AccountComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("dashboard-account", __WEBPACK_IMPORTED_MODULE_6__account_component__["a" /* AccountComponent */], View_AccountComponent_Host_0, { custDetails: "custDetails", userCategory: "userCategory" }, {}, []);



/***/ }),

/***/ "./src/app/dashboard/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state_actions_esiid__ = __webpack_require__("./src/app/app-state/actions/esiid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");








var AccountComponent = /** @class */ (function () {
    function AccountComponent(store) {
        this.store = store;
        this.depositAmountClicked = false;
        this.taxStatusClicked = false;
        this.NOT_AVAILABLE = "Not Available";
        this.UNAVAILABLE = "Unavailable";
        this.VIEW_METER_ESIID = "View Meters/ESIID";
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["b" /* Subject */]();
    }
    AccountComponent.prototype.onTaxStatus = function () {
        this.taxStatusClicked = true;
        this.taxStatus$ = this.getStringBasedOnLink("TAX").publishReplay().refCount();
    };
    AccountComponent.prototype.onDepositAmount = function () {
        this.depositAmountClicked = true;
        this.depositAmount$ = this.getStringBasedOnLink("DA").publishReplay().refCount();
    };
    AccountComponent.prototype.getStringBasedOnLink = function (linkName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            observer.next({ isLoading: true, linkNotClicked: false, depositAmount: _this.NOT_AVAILABLE });
            _this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["m" /* getESIIDListFromStorage */]).takeUntil(_this.destroy$).subscribe(function (esiidList) {
                if (undefined != esiidList && esiidList.length > 0) {
                    observer.next({ isLoading: false, isLoadingSuccess: true, value: (linkName == 'DA') ? _this.calculateDepositAmount(esiidList) : _this.calculateTaxStatus(esiidList) });
                    observer.complete();
                }
                else {
                    _this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["z" /* getNONCAARealBPList */]).takeUntil(_this.destroy$).subscribe(function (bpNumberList) {
                        if (undefined != bpNumberList && bpNumberList.length > 0) {
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__app_state_actions_esiid__["f" /* GetESIIDList */]({ bpNumberList: bpNumberList }));
                            _this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["l" /* getESIIDList */]).takeUntil(_this.destroy$).subscribe(function (result) {
                                if (result.isLoadingSuccess) {
                                    observer.next({ isLoading: false, isLoadingSuccess: true, value: (linkName == 'DA') ? _this.calculateDepositAmount(esiidList) : _this.calculateTaxStatus(esiidList) });
                                    observer.complete();
                                }
                            });
                        }
                    });
                }
            });
        });
    };
    AccountComponent.prototype.calculateDepositAmount = function (esiidList) {
        var depositAmount = this.UNAVAILABLE;
        try {
            if (undefined != esiidList) {
                esiidList.forEach(function (esiid) {
                    if (!isNaN(parseFloat(esiid.strDepositAmount))) {
                        depositAmount += parseFloat(esiid.strDepositAmount);
                    }
                });
            }
        }
        catch (err) {
            //console.log("ERROR=========>"+err.message)
        }
        return depositAmount;
    };
    AccountComponent.prototype.calculateTaxStatus = function (esiidList) {
        var _this = this;
        var cityStateTaxStatus = (undefined != esiidList && esiidList.length > 0) ? esiidList[0].strTaxStatus : this.NOT_AVAILABLE;
        try {
            if (undefined != esiidList) {
                esiidList.forEach(function (esiid) {
                    if (cityStateTaxStatus != esiid.strTaxStatus) {
                        cityStateTaxStatus = _this.VIEW_METER_ESIID;
                    }
                });
            }
            cityStateTaxStatus = "" == cityStateTaxStatus ? this.VIEW_METER_ESIID : cityStateTaxStatus;
        }
        catch (err) {
            //console.log("ERROR=========>"+err.message)
        }
        return cityStateTaxStatus;
    };
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        var custDetails = this.custDetails;
        if (undefined != custDetails) {
            this.contractExpDate = this.custDetails.customerDtls.contractExpDate;
            this.terms = this.custDetails.customerDtls.terms;
            this.depositAmount$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
                observer.next({ linkNotClicked: true, isLoading: false, depositAmount: _this.NOT_AVAILABLE });
            });
        }
    };
    AccountComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/correspondence/correspondence.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/dashboard/correspondence/correspondence.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CorrespondenceComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CorrespondenceComponent_0;
/* unused harmony export View_CorrespondenceComponent_Host_0 */
/* unused harmony export CorrespondenceComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__correspondence_component_css_shim_ngstyle__ = __webpack_require__("./src/app/dashboard/correspondence/correspondence.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_commonutils_pipe__ = __webpack_require__("./src/app/_pipes/commonutils.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__correspondence_component__ = __webpack_require__("./src/app/dashboard/correspondence/correspondence.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_CorrespondenceComponent = [__WEBPACK_IMPORTED_MODULE_0__correspondence_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_CorrespondenceComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_CorrespondenceComponent, data: {} });

function View_CorrespondenceComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_2__pipes_commonutils_pipe__["h" /* PhoneFormatPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 28, "div", [["class", "padding3Per mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Correspondence"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 22, "div", [["class", "tableInfo"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 9, "div", [["class", "infoRow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Mailing Address:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 3, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](14, null, ["", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](15, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](16, null, ["", ", ", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 8, "div", [["class", "infoRow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 1, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Phone:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, null, 2, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](25, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](26, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.address == null) ? null : _co.address.streetNum); var currVal_1 = ((_co.address == null) ? null : _co.address.streetName); _ck(_v, 14, 0, currVal_0, currVal_1); var currVal_2 = ((_co.address == null) ? null : _co.address.city); var currVal_3 = ((_co.address == null) ? null : _co.address.state); var currVal_4 = ((_co.address == null) ? null : _co.address.zipcode); _ck(_v, 16, 0, currVal_2, currVal_3, currVal_4); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 25, 0, _ck(_v, 26, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 0), _co.phoneNumber)); _ck(_v, 25, 0, currVal_5); }); }
function View_CorrespondenceComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "dashboard-correspondence", [], null, null, null, View_CorrespondenceComponent_0, RenderType_CorrespondenceComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__correspondence_component__["a" /* CorrespondenceComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CorrespondenceComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("dashboard-correspondence", __WEBPACK_IMPORTED_MODULE_3__correspondence_component__["a" /* CorrespondenceComponent */], View_CorrespondenceComponent_Host_0, { custDetails: "custDetails" }, {}, []);



/***/ }),

/***/ "./src/app/dashboard/correspondence/correspondence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorrespondenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var CorrespondenceComponent = /** @class */ (function () {
    function CorrespondenceComponent() {
    }
    CorrespondenceComponent.prototype.ngOnInit = function () {
        var custDetails = this.custDetails;
        if (undefined != custDetails) {
            this.address = custDetails.customerDtls.mailingAddress;
            this.phoneNumber = custDetails.customerDtls.phoneNum;
        }
    };
    return CorrespondenceComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/customerDtls/balanceinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BalanceInfoComponent */
var BalanceInfoComponent = /** @class */ (function () {
    function BalanceInfoComponent() {
    }
    return BalanceInfoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/customerdtls/custdtls.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["a[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}"];



/***/ }),

/***/ "./src/app/dashboard/customerdtls/custdtls.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CustomerDtlsComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CustomerDtlsComponent_0;
/* unused harmony export View_CustomerDtlsComponent_Host_0 */
/* unused harmony export CustomerDtlsComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custdtls_component_css_shim_ngstyle__ = __webpack_require__("./src/app/dashboard/customerdtls/custdtls.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__ = __webpack_require__("./src/app/shared/loading/loading.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_loading_loading_component__ = __webpack_require__("./src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__ = __webpack_require__("./src/app/dashboard/customerdtls/fieldname.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fieldname_component__ = __webpack_require__("./src/app/dashboard/customerdtls/fieldname.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custdtls_component__ = __webpack_require__("./src/app/dashboard/customerdtls/custdtls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_shared_service__ = __webpack_require__("./src/app/_services/shared.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_CustomerDtlsComponent = [__WEBPACK_IMPORTED_MODULE_0__custdtls_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_CustomerDtlsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_CustomerDtlsComponent, data: {} });

function View_CustomerDtlsComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onViewBalancesAndPaymentsDue() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["View Balances and Payments Due"]))], null, null); }
function View_CustomerDtlsComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "loading-indicator", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_loading_loading_component__["a" /* LoadingComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_CustomerDtlsComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 13, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 2, "field-name", [["name", "Balance Forward"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["b" /* View_FieldNameComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["a" /* RenderType_FieldNameComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__fieldname_component__["a" /* FieldNameComponent */], [], { name: [0, "name"], value: [1, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 2, "field-name", [["name", "Current Charges"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["b" /* View_FieldNameComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["a" /* RenderType_FieldNameComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__fieldname_component__["a" /* FieldNameComponent */], [], { name: [0, "name"], value: [1, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 2, "field-name", [["name", "Total Amount Due"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["b" /* View_FieldNameComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["a" /* RenderType_FieldNameComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__fieldname_component__["a" /* FieldNameComponent */], [], { name: [0, "name"], value: [1, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Balance Forward"; var tmp_1_0 = null; var currVal_1 = (((tmp_1_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 3, 1, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).transform(_co.balancesAndPaymentsDue$))) == null) ? null : ((tmp_1_0.data == null) ? null : tmp_1_0.data.balanceForward)); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = "Current Charges"; var tmp_3_0 = null; var currVal_3 = (((tmp_3_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 7, 1, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).transform(_co.balancesAndPaymentsDue$))) == null) ? null : ((tmp_3_0.data == null) ? null : tmp_3_0.data.currentBalance)); _ck(_v, 7, 0, currVal_2, currVal_3); var currVal_4 = "Total Amount Due"; var tmp_5_0 = null; var currVal_5 = (((tmp_5_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 11, 1, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12).transform(_co.balancesAndPaymentsDue$))) == null) ? null : ((tmp_5_0.data == null) ? null : tmp_5_0.data.balanceDue)); _ck(_v, 11, 0, currVal_4, currVal_5); }, null); }
function View_CustomerDtlsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 31, "div", [["class", "greyBox"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Customer Details"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 25, "div", [["class", "tableInfo"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "field-name", [["name", "Customer Name"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["b" /* View_FieldNameComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["a" /* RenderType_FieldNameComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__fieldname_component__["a" /* FieldNameComponent */], [], { name: [0, "name"], value: [1, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "field-name", [["name", "Customer Type"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["b" /* View_FieldNameComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["a" /* RenderType_FieldNameComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__fieldname_component__["a" /* FieldNameComponent */], [], { name: [0, "name"], value: [1, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 1, "field-name", [["name", "Status"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["b" /* View_FieldNameComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__fieldname_component_ngfactory__["a" /* RenderType_FieldNameComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](14, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__fieldname_component__["a" /* FieldNameComponent */], [], { name: [0, "name"], value: [1, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 5, "div", [["class", "mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_CustomerDtlsComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_CustomerDtlsComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](24, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_CustomerDtlsComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Customer Name"; var currVal_1 = _co.customerName; _ck(_v, 8, 0, currVal_0, currVal_1); var currVal_2 = "Customer Type"; var currVal_3 = _co.customerType; _ck(_v, 11, 0, currVal_2, currVal_3); var currVal_4 = "Status"; var currVal_5 = _co.customerStatus; _ck(_v, 14, 0, currVal_4, currVal_5); var tmp_6_0 = null; var currVal_6 = (((tmp_6_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 19, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).transform(_co.balancesAndPaymentsDue$))) == null) ? null : tmp_6_0.ajaxNotCalled); _ck(_v, 19, 0, currVal_6); var tmp_7_0 = null; var currVal_7 = (((tmp_7_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 24, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).transform(_co.balancesAndPaymentsDue$))) == null) ? null : tmp_7_0.isLoading); _ck(_v, 24, 0, currVal_7); var tmp_8_0 = null; var currVal_8 = (((tmp_8_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 28, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).transform(_co.balancesAndPaymentsDue$))) == null) ? null : tmp_8_0.isLoadingSuccess); _ck(_v, 28, 0, currVal_8); }, null); }
function View_CustomerDtlsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "dashboard-custdtls", [], null, null, null, View_CustomerDtlsComponent_0, RenderType_CustomerDtlsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_7__custdtls_component__["a" /* CustomerDtlsComponent */], [__WEBPACK_IMPORTED_MODULE_8__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_9__services_shared_service__["a" /* SharedService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CustomerDtlsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("dashboard-custdtls", __WEBPACK_IMPORTED_MODULE_7__custdtls_component__["a" /* CustomerDtlsComponent */], View_CustomerDtlsComponent_Host_0, { custDetails: "custDetails", balancesAndPaymentDue: "balancesAndPaymentDue" }, { viewBalances: "viewBalances" }, []);



/***/ }),

/***/ "./src/app/dashboard/customerdtls/custdtls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDtlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");



var CustomerDtlsComponent = /** @class */ (function () {
    function CustomerDtlsComponent(accountService, sharedService) {
        this.accountService = accountService;
        this.sharedService = sharedService;
        this.viewBalances = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onPageLoad = true;
        this.loading = false;
        this.done = false;
    }
    CustomerDtlsComponent.prototype.onViewBalancesAndPaymentsDue = function () {
        this.balancesAndPaymentsDue$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            observer.next({ ajaxNotCalled: false, isLoading: true, data: undefined });
        });
        this.viewBalances.emit({});
    };
    CustomerDtlsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes["balancesAndPaymentDue"]) {
            console.log(this.balancesAndPaymentDue);
            if (undefined != this.balancesAndPaymentDue && this.balancesAndPaymentDue.isLoadingSuccess) {
                this.balancesAndPaymentsDue$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
                    observer.next({ ajaxNotCalled: false, isLoading: false, isLoadingSuccess: true, data: _this.balancesAndPaymentDue.data });
                    observer.complete();
                });
            }
        }
    };
    CustomerDtlsComponent.prototype.ngOnInit = function () {
        var custDetails = this.custDetails;
        if (undefined != custDetails) {
            this.customerName = custDetails.customerDtls.customerName;
            this.customerType = custDetails.customerDtls.customerType;
            this.customerStatus = custDetails.customerDtls.customerStatus;
        }
        this.balancesAndPaymentsDue$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            observer.next({ ajaxNotCalled: true, isLoading: false, data: undefined });
        });
    };
    return CustomerDtlsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/customerdtls/fieldname.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_FieldNameComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_FieldNameComponent_0;
/* unused harmony export View_FieldNameComponent_Host_0 */
/* unused harmony export FieldNameComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fieldname_component__ = __webpack_require__("./src/app/dashboard/customerdtls/fieldname.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_FieldNameComponent = [];
var RenderType_FieldNameComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_FieldNameComponent, data: {} });

function View_FieldNameComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 7, "div", [["class", "infoRow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 1, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](4, null, ["", ":"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](6, 0, null, null, 1, "div", [["class", "infoColumn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](7, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n              "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.name; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.value; _ck(_v, 7, 0, currVal_1); }); }
function View_FieldNameComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "field-name", [], null, null, null, View_FieldNameComponent_0, RenderType_FieldNameComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_1__fieldname_component__["a" /* FieldNameComponent */], [], null, null)], null, null); }
var FieldNameComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("field-name", __WEBPACK_IMPORTED_MODULE_1__fieldname_component__["a" /* FieldNameComponent */], View_FieldNameComponent_Host_0, { name: "name", value: "value" }, {}, []);



/***/ }),

/***/ "./src/app/dashboard/customerdtls/fieldname.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldNameComponent; });
var FieldNameComponent = /** @class */ (function () {
    function FieldNameComponent() {
    }
    return FieldNameComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./src/app/dashboard/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolvers__ = __webpack_require__("./src/app/_resolvers/index.ts");



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__index__["b" /* FullLayout */], children: [
            { path: 'dashboard.htm',
                component: __WEBPACK_IMPORTED_MODULE_1__index__["a" /* DashboardComponent */],
                resolve: {
                    dashboard: __WEBPACK_IMPORTED_MODULE_2__resolvers__["d" /* DashboardResolve */]
                }
            },
            { path: 'service', loadChildren: 'app/service/multifamily/service.module#MFServiceModule' },
            { path: 'transactions', loadChildren: 'app/transactions/transactions.module#TransactionsModule' },
            { path: 'reports', loadChildren: 'app/reports/reports.module#ReportsModule' },
            { path: 'forms', loadChildren: 'app/forms/forms.module#SSFormsModule' },
            { path: 'vacancy', loadChildren: 'app/monitoring/monitoring.module#MonitoringModule' },
            { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
            { path: 'billing', loadChildren: 'app/billing/billing.module#BillingModule' },
            { path: 'cc', loadChildren: 'app/customercare/cc.module#CustomerCareModule' }
        ] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_DashboardComponent */
/* unused harmony export View_DashboardComponent_0 */
/* unused harmony export View_DashboardComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component_css_shim_ngstyle__ = __webpack_require__("./src/app/dashboard/dashboard.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customerdtls_custdtls_component_ngfactory__ = __webpack_require__("./src/app/dashboard/customerdtls/custdtls.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customerdtls_custdtls_component__ = __webpack_require__("./src/app/dashboard/customerdtls/custdtls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("./src/app/_services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__correspondence_correspondence_component_ngfactory__ = __webpack_require__("./src/app/dashboard/correspondence/correspondence.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__correspondence_correspondence_component__ = __webpack_require__("./src/app/dashboard/correspondence/correspondence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_component_ngfactory__ = __webpack_require__("./src/app/dashboard/account/account.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account_component__ = __webpack_require__("./src/app/dashboard/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewmeters_viewmeters_component_ngfactory__ = __webpack_require__("./src/app/dashboard/viewmeters/viewmeters.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__viewmeters_viewmeters_component__ = __webpack_require__("./src/app/dashboard/viewmeters/viewmeters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_logger_service__ = __webpack_require__("./src/app/_services/logger.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_DashboardComponent = [__WEBPACK_IMPORTED_MODULE_0__dashboard_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_DashboardComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_DashboardComponent, data: {} });

function View_DashboardComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 25, "section", [["id", "contentWrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 11, "div", [["class", "width70Per"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 2, "dashboard-custdtls", [], null, [[null, "viewBalances"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("viewBalances" === en)) {
        var pd_0 = (_co.onBalancesAndPaymentDue($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__customerdtls_custdtls_component_ngfactory__["b" /* View_CustomerDtlsComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__customerdtls_custdtls_component_ngfactory__["a" /* RenderType_CustomerDtlsComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_3__customerdtls_custdtls_component__["a" /* CustomerDtlsComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]], { custDetails: [0, "custDetails"], balancesAndPaymentDue: [1, "balancesAndPaymentDue"] }, { viewBalances: "viewBalances" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 1, "dashboard-correspondence", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__correspondence_correspondence_component_ngfactory__["b" /* View_CorrespondenceComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__correspondence_correspondence_component_ngfactory__["a" /* RenderType_CorrespondenceComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](9, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__correspondence_correspondence_component__["a" /* CorrespondenceComponent */], [], { custDetails: [0, "custDetails"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "dashboard-account", [], null, null, null, __WEBPACK_IMPORTED_MODULE_8__account_account_component_ngfactory__["b" /* View_AccountComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__account_account_component_ngfactory__["a" /* RenderType_AccountComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__account_account_component__["a" /* AccountComponent */], [__WEBPACK_IMPORTED_MODULE_10__ngrx_store__["m" /* Store */]], { custDetails: [0, "custDetails"], userCategory: [1, "userCategory"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](15, 0, null, null, 1, "dashboard-viewmeters", [], null, null, null, __WEBPACK_IMPORTED_MODULE_11__viewmeters_viewmeters_component_ngfactory__["b" /* View_ViewMetersComponent_0 */], __WEBPACK_IMPORTED_MODULE_11__viewmeters_viewmeters_component_ngfactory__["a" /* RenderType_ViewMetersComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_12__viewmeters_viewmeters_component__["a" /* ViewMetersComponent */], [__WEBPACK_IMPORTED_MODULE_10__ngrx_store__["m" /* Store */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 6, "div", [["class", "pL3P text-right"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 2, "a", [["routerLink", "/protected/termsofuse.htm/dashboard"], ["target", "_blank"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](21, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_14__angular_common__["h" /* LocationStrategy */]], { target: [0, "target"], routerLink: [1, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Terms of Use"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.custDetails; var currVal_1 = _co.balancesAndPaymentDue; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = _co.custDetails; _ck(_v, 9, 0, currVal_2); var currVal_3 = _co.custDetails; var currVal_4 = _co.userCategory; _ck(_v, 12, 0, currVal_3, currVal_4); var currVal_7 = "_blank"; var currVal_8 = "/protected/termsofuse.htm/dashboard"; _ck(_v, 21, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21).target; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21).href; _ck(_v, 20, 0, currVal_5, currVal_6); }); }
function View_DashboardComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_15__dashboard_component__["a" /* DashboardComponent */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_13__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_16__services_logger_service__["a" /* LoggerService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DashboardComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("ng-component", __WEBPACK_IMPORTED_MODULE_15__dashboard_component__["a" /* DashboardComponent */], View_DashboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_state_actions_selectedproperty__ = __webpack_require__("./src/app/app-state/actions/selectedproperty.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_state_actions_billing__ = __webpack_require__("./src/app/app-state/actions/billing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");










var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, router, store, sharedService, accountService, logger) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.store = store;
        this.sharedService = sharedService;
        this.accountService = accountService;
        this.logger = logger;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.store.select(__WEBPACK_IMPORTED_MODULE_5__app_state_reducers__["s" /* getLoggedInUser */]).takeUntil(this.destroy$).subscribe(function (user) {
            _this.userName = user.userName;
            _this.userCategory = user.userCategory;
        });
    }
    DashboardComponent.prototype.termsOfUse = function () {
        this.router.navigate(['/protected/termsofuse.htm', this.userName]);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .takeUntil(this.destroy$)
            .subscribe(function (data) {
            var resp = data.dashboard;
            if (resp.errorCode == 2) {
                _this.logger.info("NO DATA FOR THE DASHBOARD:::ERRORCODE::" + JSON.stringify(resp));
                _this.router.navigate(['./protected/error.htm']);
            }
            else {
                _this.custDetails = resp;
                _this.sharedService.setSelectedPropertyDtls(_this.custDetails);
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_state_actions_selectedproperty__["j" /* SaveSelectedPropertyDetails */](_this.custDetails));
            }
        });
    };
    DashboardComponent.prototype.onBalancesAndPaymentDue = function (event) {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_5__app_state_reducers__["z" /* getNONCAARealBPList */]).takeUntil(this.destroy$).subscribe(function (nonCAABPList) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__app_state_actions_billing__["D" /* GetDashboardPaymentDtls */]({ nonCAABPList: nonCAABPList }));
        });
        this.store.select(__WEBPACK_IMPORTED_MODULE_5__app_state_reducers__["i" /* getDashboardPaymentDetails */])
            .takeUntil(this.destroy$)
            .subscribe(function (data) { return _this.balancesAndPaymentDue = data; });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModuleNgFactory", function() { return DashboardModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_module__ = __webpack_require__("./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_full_ngfactory__ = __webpack_require__("./src/app/dashboard/layout.full.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component_ngfactory__ = __webpack_require__("./src/app/dashboard/dashboard.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_page_service__ = __webpack_require__("./src/app/_services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_csv_service__ = __webpack_require__("./src/app/_services/csv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resolvers_dashboard_dashboard_resolver__ = __webpack_require__("./src/app/_resolvers/dashboard/dashboard.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_routing_module__ = __webpack_require__("./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_state_effects_esiid_effects__ = __webpack_require__("./src/app/app-state/effects/esiid.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_state_effects_selectedproperty_effects__ = __webpack_require__("./src/app/app-state/effects/selectedproperty.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_billing_service__ = __webpack_require__("./src/app/_services/billing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_state_effects_balance_effects__ = __webpack_require__("./src/app/app-state/effects/balance.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__layout_full__ = __webpack_require__("./src/app/dashboard/layout.full.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 























var DashboardModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__dashboard_module__["a" /* DashboardModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_2__layout_full_ngfactory__["a" /* FullLayoutNgFactory */], __WEBPACK_IMPORTED_MODULE_3__dashboard_component_ngfactory__["a" /* DashboardComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_4__angular_common__["m" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["l" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_common__["q" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["y" /* ɵi */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["y" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */], __WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_7__services_page_service__["a" /* PagerService */], __WEBPACK_IMPORTED_MODULE_7__services_page_service__["a" /* PagerService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_8__services_csv_service__["a" /* CSVService */], __WEBPACK_IMPORTED_MODULE_8__services_csv_service__["a" /* CSVService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__resolvers_dashboard_dashboard_resolver__["a" /* DashboardResolve */], __WEBPACK_IMPORTED_MODULE_9__resolvers_dashboard_dashboard_resolver__["a" /* DashboardResolve */], [__WEBPACK_IMPORTED_MODULE_10__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_http__["f" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["f" /* HttpModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["w" /* ɵba */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["w" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["t" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["t" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_13__angular_router__["u" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_13__angular_router__["m" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__dashboard_routing_module__["a" /* DashboardRoutingModule */], __WEBPACK_IMPORTED_MODULE_15__dashboard_routing_module__["a" /* DashboardRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["i" /* ɵg */], __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["f" /* ɵb */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["j" /* ɵh */], __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["j" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["i" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectSources */], [__WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["j" /* ɵh */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["k" /* ɵi */], __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["k" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["a" /* Actions */], [__WEBPACK_IMPORTED_MODULE_11__ngrx_store__["j" /* ScannedActionsSubject */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* BrowserXhr */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_http__["h" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* BaseResponseOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_12__angular_http__["j" /* XSRFStrategy */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["k" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_http__["i" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["i" /* XHRBackend */], [__WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["h" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["j" /* XSRFStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_http__["g" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* BaseRequestOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_12__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["l" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_12__angular_http__["i" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["g" /* RequestOptions */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_10__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_10__services_account_service__["a" /* AccountService */], [__WEBPACK_IMPORTED_MODULE_12__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_17__app_state_effects_esiid_effects__["a" /* ESIIDEffects */], __WEBPACK_IMPORTED_MODULE_17__app_state_effects_esiid_effects__["a" /* ESIIDEffects */], [__WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_10__services_account_service__["a" /* AccountService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_18__app_state_effects_selectedproperty_effects__["a" /* SelectedPropertyEffects */], __WEBPACK_IMPORTED_MODULE_18__app_state_effects_selectedproperty_effects__["a" /* SelectedPropertyEffects */], [__WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_10__services_account_service__["a" /* AccountService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_19__services_billing_service__["a" /* BillingService */], __WEBPACK_IMPORTED_MODULE_19__services_billing_service__["a" /* BillingService */], [__WEBPACK_IMPORTED_MODULE_12__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_20__app_state_effects_balance_effects__["a" /* BalanceEffects */], __WEBPACK_IMPORTED_MODULE_20__app_state_effects_balance_effects__["a" /* BalanceEffects */], [__WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_19__services_billing_service__["a" /* BillingService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["h" /* ɵe */], __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["e" /* ɵa */], [__WEBPACK_IMPORTED_MODULE_17__app_state_effects_esiid_effects__["a" /* ESIIDEffects */], __WEBPACK_IMPORTED_MODULE_18__app_state_effects_selectedproperty_effects__["a" /* SelectedPropertyEffects */], __WEBPACK_IMPORTED_MODULE_20__app_state_effects_balance_effects__["a" /* BalanceEffects */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["g" /* ɵc */], __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["g" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["k" /* ɵi */], __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["h" /* ɵe */], [2, __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["n" /* StoreModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__dashboard_module__["a" /* DashboardModule */], __WEBPACK_IMPORTED_MODULE_1__dashboard_module__["a" /* DashboardModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_13__angular_router__["k" /* ROUTES */], function () { return [[{ path: "", component: __WEBPACK_IMPORTED_MODULE_21__layout_full__["a" /* FullLayout */], children: [{ path: "dashboard.htm", component: __WEBPACK_IMPORTED_MODULE_22__dashboard_component__["a" /* DashboardComponent */], resolve: { dashboard: __WEBPACK_IMPORTED_MODULE_9__resolvers_dashboard_dashboard_resolver__["a" /* DashboardResolve */] } }, { path: "service", loadChildren: "app/service/multifamily/service.module#MFServiceModule" }, { path: "transactions", loadChildren: "app/transactions/transactions.module#TransactionsModule" }, { path: "reports", loadChildren: "app/reports/reports.module#ReportsModule" }, { path: "forms", loadChildren: "app/forms/forms.module#SSFormsModule" }, { path: "vacancy", loadChildren: "app/monitoring/monitoring.module#MonitoringModule" }, { path: "profile", loadChildren: "app/profile/profile.module#ProfileModule" }, { path: "billing", loadChildren: "app/billing/billing.module#BillingModule" }, { path: "cc", loadChildren: "app/customercare/cc.module#CustomerCareModule" }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectedproperty_seldproperty_component__ = __webpack_require__("./src/app/dashboard/selectedproperty/seldproperty.component.ts");
/* unused harmony reexport SelectedPropertyComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_full__ = __webpack_require__("./src/app/dashboard/layout.full.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__layout_full__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account_component__ = __webpack_require__("./src/app/dashboard/account/account.component.ts");
/* unused harmony reexport AccountComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewmeters_viewmeters_component__ = __webpack_require__("./src/app/dashboard/viewmeters/viewmeters.component.ts");
/* unused harmony reexport ViewMetersComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customerdtls_custdtls_component__ = __webpack_require__("./src/app/dashboard/customerdtls/custdtls.component.ts");
/* unused harmony reexport CustomerDtlsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customerdtls_fieldname_component__ = __webpack_require__("./src/app/dashboard/customerdtls/fieldname.component.ts");
/* unused harmony reexport FieldNameComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customerDtls_balanceinfo_component__ = __webpack_require__("./src/app/dashboard/customerDtls/balanceinfo.component.ts");
/* unused harmony reexport BalanceInfoComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__correspondence_correspondence_component__ = __webpack_require__("./src/app/dashboard/correspondence/correspondence.component.ts");
/* unused harmony reexport CorrespondenceComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewmeters_table_component__ = __webpack_require__("./src/app/dashboard/viewmeters/table.component.ts");
/* unused harmony reexport ESIIDMetersTableComponent */












/***/ }),

/***/ "./src/app/dashboard/layout.full.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_FullLayout */
/* unused harmony export View_FullLayout_0 */
/* unused harmony export View_FullLayout_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_fullheader_fullheader_component_ngfactory__ = __webpack_require__("./src/app/shared/fullheader/fullheader.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_fullheader_fullheader_component__ = __webpack_require__("./src/app/shared/fullheader/fullheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectedproperty_seldproperty_component_ngfactory__ = __webpack_require__("./src/app/dashboard/selectedproperty/seldproperty.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectedproperty_seldproperty_component__ = __webpack_require__("./src/app/dashboard/selectedproperty/seldproperty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_shared_service__ = __webpack_require__("./src/app/_services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_fullfooter_fullfooter_component_ngfactory__ = __webpack_require__("./src/app/shared/fullfooter/fullfooter.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_fullfooter_fullfooter_component__ = __webpack_require__("./src/app/shared/fullfooter/fullfooter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_full__ = __webpack_require__("./src/app/dashboard/layout.full.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_FullLayout = [];
var RenderType_FullLayout = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_FullLayout, data: {} });

function View_FullLayout_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-full-header", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__shared_fullheader_fullheader_component_ngfactory__["b" /* View_FullHeaderComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_fullheader_fullheader_component_ngfactory__["a" /* RenderType_FullHeaderComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_fullheader_fullheader_component__["a" /* FullHeaderComponent */], [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["m" /* Store */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n               "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 7, "div", [["id", "pageBody"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 1, "selected-property", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__selectedproperty_seldproperty_component_ngfactory__["b" /* View_SelectedPropertyComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__selectedproperty_seldproperty_component_ngfactory__["a" /* RenderType_SelectedPropertyComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_7__selectedproperty_seldproperty_component__["a" /* SelectedPropertyComponent */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_8__services_shared_service__["a" /* SharedService */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](8, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](9, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["p" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n               "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](12, 0, null, null, 1, "gme-full-footer", [], null, null, null, __WEBPACK_IMPORTED_MODULE_9__shared_fullfooter_fullfooter_component_ngfactory__["b" /* View_FullFooterComponent_0 */], __WEBPACK_IMPORTED_MODULE_9__shared_fullfooter_fullfooter_component_ngfactory__["a" /* RenderType_FullFooterComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](13, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_10__shared_fullfooter_fullfooter_component__["a" /* FullFooterComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 6, 0); _ck(_v, 9, 0); }, null); }
function View_FullLayout_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "dashboard-app", [], null, null, null, View_FullLayout_0, RenderType_FullLayout)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_11__layout_full__["a" /* FullLayout */], [], null, null)], null, null); }
var FullLayoutNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("dashboard-app", __WEBPACK_IMPORTED_MODULE_11__layout_full__["a" /* FullLayout */], View_FullLayout_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/dashboard/layout.full.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayout; });
var FullLayout = /** @class */ (function () {
    function FullLayout() {
    }
    return FullLayout;
}());



/***/ }),

/***/ "./src/app/dashboard/selectedproperty/seldproperty.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/dashboard/selectedproperty/seldproperty.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_SelectedPropertyComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_SelectedPropertyComponent_0;
/* unused harmony export View_SelectedPropertyComponent_Host_0 */
/* unused harmony export SelectedPropertyComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__seldproperty_component_css_shim_ngstyle__ = __webpack_require__("./src/app/dashboard/selectedproperty/seldproperty.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_commonutils_pipe__ = __webpack_require__("./src/app/_pipes/commonutils.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__seldproperty_component__ = __webpack_require__("./src/app/dashboard/selectedproperty/seldproperty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shared_service__ = __webpack_require__("./src/app/_services/shared.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_SelectedPropertyComponent = [__WEBPACK_IMPORTED_MODULE_0__seldproperty_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_SelectedPropertyComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_SelectedPropertyComponent, data: {} });

function View_SelectedPropertyComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeProperty() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Change Property"]))], null, null); }
function View_SelectedPropertyComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 24, "div", [["id", "customerInfoBox"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Master Customer"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 1, "div", [["id", "customerName"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](6, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](9, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](12, null, ["", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](15, null, ["", ", ", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](18, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](19, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_SelectedPropertyComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = !_co.onlyOneProperty; _ck(_v, 23, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.masterBpName; _ck(_v, 6, 0, currVal_0); var currVal_1 = _co.propertyName; _ck(_v, 9, 0, currVal_1); var currVal_2 = _co.streetNumber; var currVal_3 = _co.streetName; _ck(_v, 12, 0, currVal_2, currVal_3); var currVal_4 = _co.city; var currVal_5 = _co.state; var currVal_6 = _co.zipcode; _ck(_v, 15, 0, currVal_4, currVal_5, currVal_6); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 18, 0, _ck(_v, 19, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v.parent.parent, 0), _co.phoneNumber)); _ck(_v, 18, 0, currVal_7); }); }
function View_SelectedPropertyComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 10, "section", [["id", "customerInfoSec"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 7, "div", [["class", "selectedInfosec"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "div", [["id", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Questions? Call 800-273-2135"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_SelectedPropertyComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isSelectedPropertyExist; _ck(_v, 8, 0, currVal_0); }, null); }
function View_SelectedPropertyComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_3__pipes_commonutils_pipe__["h" /* PhoneFormatPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_SelectedPropertyComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hideImage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SelectedPropertyComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "selected-property", [], null, null, null, View_SelectedPropertyComponent_0, RenderType_SelectedPropertyComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_4__seldproperty_component__["a" /* SelectedPropertyComponent */], [__WEBPACK_IMPORTED_MODULE_5__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_7__services_shared_service__["a" /* SharedService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SelectedPropertyComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("selected-property", __WEBPACK_IMPORTED_MODULE_4__seldproperty_component__["a" /* SelectedPropertyComponent */], View_SelectedPropertyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/dashboard/selectedproperty/seldproperty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_state_actions_selectedproperty__ = __webpack_require__("./src/app/app-state/actions/selectedproperty.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_state_actions_esiid__ = __webpack_require__("./src/app/app-state/actions/esiid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_state_state_storage__ = __webpack_require__("./src/app/app-state/state/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");










var SelectedPropertyComponent = /** @class */ (function () {
    function SelectedPropertyComponent(router, store, sharedService) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.sharedService = sharedService;
        this.isSelectedPropertyExist = false;
        this.onlyOneProperty = false;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["b" /* Subject */]();
        store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["_3" /* isPropertySelected */]).takeUntil(this.destroy$).subscribe(function (propSelected) { return _this.isSelectedPropertyExist = propSelected; });
        this.onlyOneProperty = this.sharedService.getLoggedInUserHasOnlyOneProperty();
    }
    SelectedPropertyComponent.prototype.changeProperty = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_state_actions_selectedproperty__["b" /* DeleteSelectedPropertyDetails */]({}));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_state_actions_esiid__["b" /* DeleteESIIDDetails */]({}));
        __WEBPACK_IMPORTED_MODULE_7__app_state_state_storage__["b" /* deleteItemByKey */]("SELECTED_PROP_DTLS");
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["s" /* getLoggedInUser */])
            .takeUntil(this.destroy$)
            .subscribe(function (loggedInUser) {
            if (loggedInUser.userCategory == "I") {
                _this.router.navigate(['/protected/selectaccount/internal.htm']);
            }
            else {
                _this.router.navigate(['/protected/selectaccount/external.htm']);
            }
        });
    };
    /*
      get the slected property details from shared service on initial load of dashboard.
      later for every page refresh take it from the store. since on initial load of dashboard store is not loaded with these details
     */
    SelectedPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selDtls = __WEBPACK_IMPORTED_MODULE_7__app_state_state_storage__["d" /* getItemByKey */]("SELECTED_PROP_DTLS");
        if (undefined != selDtls) {
            this.setSelectedPropDetails(selDtls);
        }
        else {
            this.sharedService.getSelectedPropertyDtls().subscribe(function (dtls) {
                __WEBPACK_IMPORTED_MODULE_7__app_state_state_storage__["e" /* saveItem */]("SELECTED_PROP_DTLS", dtls);
                _this.setSelectedPropDetails(dtls);
            });
        }
        this.sharedService.hideBGImage.takeUntil(this.destroy$).subscribe(function (hideImage) {
            _this.hideImage = hideImage;
        });
    };
    SelectedPropertyComponent.prototype.setSelectedPropDetails = function (dtls) {
        this.streetNumber = dtls.address.streetNum;
        this.streetName = dtls.address.streetName;
        this.city = dtls.address.city;
        this.state = dtls.address.state;
        this.zipcode = dtls.address.zipcode;
        this.propertyName = dtls.bpName;
        this.masterBpName = dtls.masterBPName;
        this.phoneNumber = dtls.customerDtls.phoneNum;
    };
    SelectedPropertyComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    return SelectedPropertyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/viewmeters/table.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/dashboard/viewmeters/table.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ESIIDMetersTableComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ESIIDMetersTableComponent_0;
/* unused harmony export View_ESIIDMetersTableComponent_Host_0 */
/* unused harmony export ESIIDMetersTableComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_component_css_shim_ngstyle__ = __webpack_require__("./src/app/dashboard/viewmeters/table.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component_ngfactory__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pagination_pagination_component__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service__ = __webpack_require__("./src/app/_services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_sortable_directive__ = __webpack_require__("./src/app/_directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__ = __webpack_require__("./src/app/shared/sorting/sortablecolumn.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__ = __webpack_require__("./src/app/shared/sorting/sortablecolumn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__table_component__ = __webpack_require__("./src/app/dashboard/viewmeters/table.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_ESIIDMetersTableComponent = [__WEBPACK_IMPORTED_MODULE_0__table_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ESIIDMetersTableComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ESIIDMetersTableComponent, data: {} });

function View_ESIIDMetersTableComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 21, "tr", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](2, { odd: 0, even: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](5, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](8, null, ["", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](11, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](14, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](17, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](20, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, _v.context.even, _v.context.odd); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.esiid; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.strStreetNum; var currVal_3 = _v.context.$implicit.strStreetName; _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_4 = _v.context.$implicit.strUnitNumber; _ck(_v, 11, 0, currVal_4); var currVal_5 = _v.context.$implicit.strCity; _ck(_v, 14, 0, currVal_5); var currVal_6 = _v.context.$implicit.strZipcode; _ck(_v, 17, 0, currVal_6); var currVal_7 = _v.context.$implicit.strTaxStatus; _ck(_v, 20, 0, currVal_7); }); }
function View_ESIIDMetersTableComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 50, "div", [["class", "mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "gme-pagination", [["placement", "top"]], null, [[null, "pagerOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pagerOut" === en)) {
        var pd_0 = (_co.onPagination($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component_ngfactory__["b" /* View_PaginationComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component_ngfactory__["a" /* RenderType_PaginationComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_pagination_pagination_component__["a" /* PaginationComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_page_service__["a" /* PagerService */]], { totalSize: [0, "totalSize"], placement: [1, "placement"] }, { pagerOut: "pagerOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 41, "div", [["id", "tableHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 38, "table", [["id", "transactionTbl"], ["sortable-table", ""]], [[8, "className", 0]], [[null, "sorted"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("sorted" === en)) {
        var pd_0 = (_co.onSorted($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_6__directives_sortable_directive__["a" /* SortableTableDirective */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], null, { sorted: "sorted" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 28, "thead", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 25, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 2, "th", [["sort-direction", "asc"], ["sortable-column", "esiid"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](15, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"], sortDirection: [1, "sortDirection"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["ESIID"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 2, "th", [["sortable-column", "strStreetNum"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Address"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 2, "th", [["sortable-column", "strUnitNumber"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 23).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Unit/Property"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 2, "th", [["sortable-column", "strCity"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 27).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](27, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["City"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 2, "th", [["sortable-column", "strZipcode"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](31, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Zip"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](34, 0, null, null, 2, "th", [["sortable-column", "strTaxStatus"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](35, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["City/State Tax Status"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](40, 0, null, null, 4, "tbody", [["id", "transTbody"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_ESIIDMetersTableComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](43, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](48, 0, null, null, 1, "gme-pagination", [], null, [[null, "pagerOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pagerOut" === en)) {
        var pd_0 = (_co.onPagination($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component_ngfactory__["b" /* View_PaginationComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component_ngfactory__["a" /* RenderType_PaginationComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](49, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_pagination_pagination_component__["a" /* PaginationComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_page_service__["a" /* PagerService */]], { totalSize: [0, "totalSize"] }, { pagerOut: "pagerOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.totalSize; var currVal_1 = "top"; _ck(_v, 3, 0, currVal_0, currVal_1); _ck(_v, 8, 0); var currVal_4 = "esiid"; var currVal_5 = "asc"; _ck(_v, 15, 0, currVal_4, currVal_5); var currVal_7 = "strStreetNum"; _ck(_v, 19, 0, currVal_7); var currVal_9 = "strUnitNumber"; _ck(_v, 23, 0, currVal_9); var currVal_11 = "strCity"; _ck(_v, 27, 0, currVal_11); var currVal_13 = "strZipcode"; _ck(_v, 31, 0, currVal_13); var currVal_15 = "strTaxStatus"; _ck(_v, 35, 0, currVal_15); var currVal_16 = _co.esiidList; _ck(_v, 43, 0, currVal_16); var currVal_17 = _co.totalSize; _ck(_v, 49, 0, currVal_17); }, function (_ck, _v) { var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).elementClass; _ck(_v, 7, 0, currVal_2); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).elementClass; _ck(_v, 14, 0, currVal_3); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).elementClass; _ck(_v, 18, 0, currVal_6); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 23).elementClass; _ck(_v, 22, 0, currVal_8); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 27).elementClass; _ck(_v, 26, 0, currVal_10); var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31).elementClass; _ck(_v, 30, 0, currVal_12); var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).elementClass; _ck(_v, 34, 0, currVal_14); }); }
function View_ESIIDMetersTableComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "esiid-meter-table", [], null, null, null, View_ESIIDMetersTableComponent_0, RenderType_ESIIDMetersTableComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_10__table_component__["a" /* ESIIDMetersTableComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ESIIDMetersTableComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("esiid-meter-table", __WEBPACK_IMPORTED_MODULE_10__table_component__["a" /* ESIIDMetersTableComponent */], View_ESIIDMetersTableComponent_Host_0, { esiidList: "esiidList" }, {}, []);



/***/ }),

/***/ "./src/app/dashboard/viewmeters/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ESIIDMetersTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");


var ESIIDMetersTableComponent = /** @class */ (function () {
    function ESIIDMetersTableComponent(sortService) {
        this.sortService = sortService;
    }
    ESIIDMetersTableComponent.prototype.onPagination = function (pagerObj) {
        this.esiidList = this.allItems.slice(pagerObj.rangeStart - 1, pagerObj.rangeEnd + 1);
    };
    ESIIDMetersTableComponent.prototype.onSorted = function (event) {
        this.sortService.sort(this.esiidList, event.sortColumn, event.sortDirection);
    };
    ESIIDMetersTableComponent.prototype.ngOnInit = function () {
        this.allItems = this.esiidList;
        this.totalSize = this.allItems.length;
        this.esiidList = this.allItems.slice(0, 25);
    };
    return ESIIDMetersTableComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/viewmeters/viewmeters.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/dashboard/viewmeters/viewmeters.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ViewMetersComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ViewMetersComponent_0;
/* unused harmony export View_ViewMetersComponent_Host_0 */
/* unused harmony export ViewMetersComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewmeters_component_css_shim_ngstyle__ = __webpack_require__("./src/app/dashboard/viewmeters/viewmeters.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__ = __webpack_require__("./src/app/shared/loading/loading.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_loading_loading_component__ = __webpack_require__("./src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_error_error_component_ngfactory__ = __webpack_require__("./src/app/shared/error/error.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_error_error_component__ = __webpack_require__("./src/app/shared/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_component_ngfactory__ = __webpack_require__("./src/app/dashboard/viewmeters/table.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__table_component__ = __webpack_require__("./src/app/dashboard/viewmeters/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewmeters_component__ = __webpack_require__("./src/app/dashboard/viewmeters/viewmeters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_ViewMetersComponent = [__WEBPACK_IMPORTED_MODULE_0__viewmeters_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ViewMetersComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ViewMetersComponent, data: {} });

function View_ViewMetersComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "loading-indicator", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_loading_loading_component__["a" /* LoadingComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ViewMetersComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-error", [["errorMessage", "Uh, oh. We can't seem to find that information. Please call 1-800-273-2135, so that we can sort it out."]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__shared_error_error_component_ngfactory__["b" /* View_ErrorComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__shared_error_error_component_ngfactory__["a" /* RenderType_ErrorComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__shared_error_error_component__["a" /* ErrorComponent */], [], { errorMessage: [0, "errorMessage"] }, null)], function (_ck, _v) { var currVal_0 = "Uh, oh. We can't seem to find that information. Please call 1-800-273-2135, so that we can sort it out."; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ViewMetersComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "esiid-meter-table", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__table_component_ngfactory__["b" /* View_ESIIDMetersTableComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__table_component_ngfactory__["a" /* RenderType_ESIIDMetersTableComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__table_component__["a" /* ESIIDMetersTableComponent */], [__WEBPACK_IMPORTED_MODULE_8__services_sort_service__["a" /* SortService */]], { esiidList: [0, "esiidList"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = (((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform(_co.esiidList$))) == null) ? null : tmp_0_0.esiidList); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ViewMetersComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_ViewMetersComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_ViewMetersComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = ((((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 2, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).transform(_co.esiidList$))) == null) ? null : ((tmp_0_0.esiidList == null) ? null : tmp_0_0.esiidList.length)) == 0); _ck(_v, 2, 0, currVal_0); var tmp_1_0 = null; var currVal_1 = ((((tmp_1_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 6, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).transform(_co.esiidList$))) == null) ? null : ((tmp_1_0.esiidList == null) ? null : tmp_1_0.esiidList.length)) > 0); _ck(_v, 6, 0, currVal_1); }, null); }
function View_ViewMetersComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 4, "div", [["class", "padding3Per"], ["id", "buttonHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "button", [["class", "blue"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onViewESIIDs() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["View Meters/ ESI ID"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_ViewMetersComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](0, [["showresult", 2]], null, 0, null, View_ViewMetersComponent_2)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = (((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 7, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).transform(_co.esiidList$))) == null) ? null : tmp_0_0.isLoading); var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 10); _ck(_v, 7, 0, currVal_0, currVal_1); }, null); }
function View_ViewMetersComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "dashboard-viewmeters", [], null, null, null, View_ViewMetersComponent_0, RenderType_ViewMetersComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_10__viewmeters_component__["a" /* ViewMetersComponent */], [__WEBPACK_IMPORTED_MODULE_11__ngrx_store__["m" /* Store */]], null, null)], null, null); }
var ViewMetersComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("dashboard-viewmeters", __WEBPACK_IMPORTED_MODULE_10__viewmeters_component__["a" /* ViewMetersComponent */], View_ViewMetersComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/dashboard/viewmeters/viewmeters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMetersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state_actions_esiid__ = __webpack_require__("./src/app/app-state/actions/esiid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");








var ViewMetersComponent = /** @class */ (function () {
    function ViewMetersComponent(store) {
        this.store = store;
        this.isESIIDsDtlsNotFound = false;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["b" /* Subject */]();
    }
    ViewMetersComponent.prototype.onViewESIIDs = function () {
        var _this = this;
        this.esiidList$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            observer.next({ isLoading: true });
            _this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["m" /* getESIIDListFromStorage */]).takeUntil(_this.destroy$).subscribe(function (esiidList) {
                if (undefined != esiidList && esiidList.length > 0) {
                    observer.next({ isLoading: false, isLoadingSuccess: true, esiidList: esiidList });
                    observer.complete();
                }
                else {
                    _this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["z" /* getNONCAARealBPList */]).takeUntil(_this.destroy$).subscribe(function (bpNumberList) {
                        if (undefined != bpNumberList && bpNumberList.length > 0) {
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__app_state_actions_esiid__["f" /* GetESIIDList */]({ bpNumberList: bpNumberList }));
                            return _this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["l" /* getESIIDList */]).takeUntil(_this.destroy$);
                        }
                    });
                }
            });
        }).publishReplay().refCount();
    };
    ViewMetersComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    return ViewMetersComponent;
}());



/***/ }),

/***/ "./src/app/shared/common/subnav/link.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["a[_ngcontent-%COMP%]{\r\n  cursor: pointer\r\n}\r\n\r\na.disabled[_ngcontent-%COMP%] {\r\n    color: lightgrey !important;\r\n    cursor: not-allowed;\r\n    text-decoration: none;\r\n}\r\n\r\n.disable-span[_ngcontent-%COMP%]{\r\n    color: lightgrey !important;\r\n    cursor: not-allowed;\r\n    text-decoration: none;\r\n}\r\n\r\n.show[_ngcontent-%COMP%]{\r\n   display: block !important;\r\n}\r\n\r\n.helpIcon[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}"];



/***/ }),

/***/ "./src/app/shared/common/subnav/link.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_LinkComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_LinkComponent_0;
/* unused harmony export View_LinkComponent_Host_0 */
/* unused harmony export LinkComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__link_component_css_shim_ngstyle__ = __webpack_require__("./src/app/shared/common/subnav/link.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_tooltip_component_ngfactory__ = __webpack_require__("./src/app/shared/tooltip/tooltip.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_tooltip_component__ = __webpack_require__("./src/app/shared/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__link_component__ = __webpack_require__("./src/app/shared/common/subnav/link.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_LinkComponent = [__WEBPACK_IMPORTED_MODULE_0__link_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_LinkComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_LinkComponent, data: {} });

function View_LinkComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "gme-tool-tip", [["style", "position: absolute;z-index:10;"], ["title", "Access Restricted"]], [[4, "left", "px"], [4, "top", "px"]], null, null, __WEBPACK_IMPORTED_MODULE_2__tooltip_tooltip_component_ngfactory__["b" /* View_ToolTipComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__tooltip_tooltip_component_ngfactory__["a" /* RenderType_ToolTipComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__tooltip_tooltip_component__["a" /* ToolTipComponent */], [], { message: [0, "message"], title: [1, "title"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.restrictionReason; var currVal_3 = "Access Restricted"; _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getPos("left"); var currVal_1 = _co.getPos("top"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_LinkComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n   "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "span", [["class", "disable-span"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n   "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 0, "span", [["class", "helpIcon"]], null, [[null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.mouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = (_co.mouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n   "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LinkComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.showToolTip; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 3, 0, currVal_0); }); }
function View_LinkComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 2, "a", [["class", "moreLinkNav"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_5__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](4, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", _co.url, ""); _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _co.title; _ck(_v, 4, 0, currVal_3); }); }
function View_LinkComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LinkComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](0, [["showUrl", 2]], null, 0, null, View_LinkComponent_3)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.restrictionEnabled; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_LinkComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-link", [], null, null, null, View_LinkComponent_0, RenderType_LinkComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_6__link_component__["a" /* LinkComponent */], [], null, null)], null, null); }
var LinkComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("gme-link", __WEBPACK_IMPORTED_MODULE_6__link_component__["a" /* LinkComponent */], View_LinkComponent_Host_0, { restrictionEnabled: "restrictionEnabled", restrictionReason: "restrictionReason", title: "title", url: "url" }, {}, []);



/***/ }),

/***/ "./src/app/shared/common/subnav/link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkComponent; });
var LinkComponent = /** @class */ (function () {
    function LinkComponent() {
        this.showToolTip = false;
    }
    LinkComponent.prototype.mouseEnter = function (currentEvent) {
        this.showToolTip = true;
        this.leftPos = currentEvent.target.offsetLeft + currentEvent.target.clientWidth + 14; /*14 is width of the arrow - VK*/
        this.topPos = currentEvent.target.offsetTop - 10; /*10 is the arrow mark positioned from top in tooltip  -Vk*/
    };
    LinkComponent.prototype.mouseLeave = function (currentEvent) {
        this.showToolTip = false;
    };
    LinkComponent.prototype.getPos = function (pos) {
        if (pos == "left")
            return this.leftPos;
        if (pos == "top")
            return this.topPos;
    };
    return LinkComponent;
}());



/***/ }),

/***/ "./src/app/shared/common/subnav/subnavfull.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["a[_ngcontent-%COMP%]{\r\n  cursor: pointer\r\n}\r\n\r\na.disabled[_ngcontent-%COMP%] {\r\n    color: lightgrey !important;\r\n    cursor: not-allowed;\r\n    text-decoration: none;\r\n}\r\n\r\n.disable-span[_ngcontent-%COMP%]{\r\n    color: lightgrey !important;\r\n    cursor: not-allowed;\r\n    text-decoration: none;\r\n}\r\n\r\n.show[_ngcontent-%COMP%]{\r\n   display: block !important;\r\n}\r\n\r\n.helpIcon[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}"];



/***/ }),

/***/ "./src/app/shared/common/subnav/subnavfull.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_SubNavFullComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_SubNavFullComponent_0;
/* unused harmony export View_SubNavFullComponent_Host_0 */
/* unused harmony export SubNavFullComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subnavfull_component_css_shim_ngstyle__ = __webpack_require__("./src/app/shared/common/subnav/subnavfull.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__ = __webpack_require__("./src/app/shared/common/subnav/link.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__link_component__ = __webpack_require__("./src/app/shared/common/subnav/link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_header_pipe__ = __webpack_require__("./src/app/_pipes/header.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subnavfull_component__ = __webpack_require__("./src/app/shared/common/subnav/subnavfull.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_shared_service__ = __webpack_require__("./src/app/_services/shared.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_SubNavFullComponent = [__WEBPACK_IMPORTED_MODULE_0__subnavfull_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_SubNavFullComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_SubNavFullComponent, data: {} });

function View_SubNavFullComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "gme-link", [["title", "Previous Bills"], ["url", "/protected/customer/billing/previousbills.htm"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__["b" /* View_LinkComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__["a" /* RenderType_LinkComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__link_component__["a" /* LinkComponent */], [], { restrictionEnabled: [0, "restrictionEnabled"], title: [1, "title"], url: [2, "url"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.defaultRestriction; var currVal_1 = "Previous Bills"; var currVal_2 = "/protected/customer/billing/previousbills.htm"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_SubNavFullComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 18, "li", [["class", "moreMenus"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 2, "a", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Monitoring"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 0, "span", [["class", "subMenuArrow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 11, "ul", [["class", "moreLinks"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 2, "a", [["class", "moreLinkNav"], ["routerLink", "/protected/customer/vacancy/alertsetup.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](10, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Vacant Unit Alert Setup"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 2, "a", [["class", "moreLinkNav"], ["routerLink", "/protected/customer/vacancy/dailyreport.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](15, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Daily Report"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var currVal_2 = "/protected/customer/vacancy/alertsetup.htm"; _ck(_v, 10, 0, currVal_2); var currVal_5 = "/protected/customer/vacancy/dailyreport.htm"; _ck(_v, 15, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 10).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 10).href; _ck(_v, 9, 0, currVal_0, currVal_1); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).target; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).href; _ck(_v, 14, 0, currVal_3, currVal_4); }); }
function View_SubNavFullComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 2, "a", [["class", "moreSubLinkNav"], ["routerLink", "/protected/customer/profile/overview.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Overview"]))], function (_ck, _v) { var currVal_2 = "/protected/customer/profile/overview.htm"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_SubNavFullComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 2, "a", [["class", "moreSubLinkNav"], ["routerLink", "/protected/customer/profile/adduser/info.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Add User"]))], function (_ck, _v) { var currVal_2 = "/protected/customer/profile/adduser/info.htm"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_SubNavFullComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 2, "a", [["class", "moreSubLinkNav"], ["routerLink", "/protected/customer/profile/update/user.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Update User"]))], function (_ck, _v) { var currVal_2 = "/protected/customer/profile/update/user.htm"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_SubNavFullComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 2, "a", [["class", "moreSubLinkNav"], ["routerLink", "/protected/customer/profile/remove/search.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Remove User"]))], function (_ck, _v) { var currVal_2 = "/protected/customer/profile/remove/search.htm"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_SubNavFullComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_6__pipes_header_pipe__["e" /* VUMLinkPipe */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_6__pipes_header_pipe__["b" /* OverviewLinkPipe */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_6__pipes_header_pipe__["a" /* AddUserLinkPipe */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_6__pipes_header_pipe__["d" /* UpdateUserLinkPipe */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_6__pipes_header_pipe__["c" /* RemoveUserLinkPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 154, "div", [["class", "subMenu"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 151, "ul", [["class", "sublinks"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 2, "a", [["routerLink", "/protected/customer/dashboard.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Dashboard"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 16, "li", [["class", "moreMenus"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 2, "a", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Service"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 0, "span", [["class", "subMenuArrow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 9, "ul", [["class", "moreLinks"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, null, 2, "gme-link", [["title", "Start Service"], ["url", "/protected/customer/service/start/selectproperty.htm"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__["b" /* View_LinkComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__["a" /* RenderType_LinkComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](25, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__link_component__["a" /* LinkComponent */], [], { restrictionEnabled: [0, "restrictionEnabled"], restrictionReason: [1, "restrictionReason"], title: [2, "title"], url: [3, "url"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, null, 2, "gme-link", [["title", "Stop Service"], ["url", "/protected/customer/service/stop/businessinfo.htm"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__["b" /* View_LinkComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__["a" /* RenderType_LinkComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](29, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__link_component__["a" /* LinkComponent */], [], { restrictionEnabled: [0, "restrictionEnabled"], restrictionReason: [1, "restrictionReason"], title: [2, "title"], url: [3, "url"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](34, 0, null, null, 19, "li", [["class", "moreMenus"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](36, 0, null, null, 2, "a", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Billing"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](38, 0, null, null, 0, "span", [["class", "subMenuArrow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](40, 0, null, null, 12, "ul", [["class", "moreLinks"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](42, 0, null, null, 2, "gme-link", [["title", "View Current Bill"], ["url", "/protected/customer/billing/paybill/viewbill.htm"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__["b" /* View_LinkComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__["a" /* RenderType_LinkComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](43, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__link_component__["a" /* LinkComponent */], [], { restrictionEnabled: [0, "restrictionEnabled"], restrictionReason: [1, "restrictionReason"], title: [2, "title"], url: [3, "url"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](46, 0, null, null, 2, "gme-link", [["title", "Payment History"], ["url", "/protected/customer/billing/paymenthistory.htm"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__["b" /* View_LinkComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__link_component_ngfactory__["a" /* RenderType_LinkComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](47, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__link_component__["a" /* LinkComponent */], [], { restrictionEnabled: [0, "restrictionEnabled"], restrictionReason: [1, "restrictionReason"], title: [2, "title"], url: [3, "url"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_SubNavFullComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](51, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_SubNavFullComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](56, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](57, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](59, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](61, 0, null, null, 2, "a", [["routerLink", "/protected/customer/forms/list.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 62).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](62, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Forms"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](66, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](68, 0, null, null, 2, "a", [["routerLink", "/protected/customer/transactions/list.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 69).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](69, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Transactions"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](73, 0, null, null, 18, "li", [["class", "moreMenus"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](75, 0, null, null, 2, "a", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Reports"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](77, 0, null, null, 0, "span", [["class", "subMenuArrow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](79, 0, null, null, 11, "ul", [["class", "moreLinks"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](81, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](82, 0, null, null, 2, "a", [["class", "moreLinkNav"], ["routerLink", "/protected/customer/reports/vacancy.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 83).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](83, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Vacancy"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](86, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](87, 0, null, null, 2, "a", [["class", "moreLinkNav"], ["routerLink", "/protected/customer/reports/roll.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 88).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](88, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Roll"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](93, 0, null, null, 64, "li", [["class", "moreMenus"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](95, 0, null, null, 2, "a", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Profile"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](97, 0, null, null, 0, "span", [["class", "subMenuArrow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](99, 0, null, null, 57, "ul", [["class", "moreLinks"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](101, 0, null, null, 29, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](103, 0, null, null, 2, "a", [["class", "moreLinkNav"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Profile Management"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](105, 0, null, null, 0, "span", [["class", "blackRightArrow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](107, 0, null, null, 22, "ul", [["class", "moreSubLinkHolder show"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_SubNavFullComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](110, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](111, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_SubNavFullComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](114, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](115, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_SubNavFullComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](118, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](119, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](121, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](122, 0, null, null, 2, "a", [["class", "moreSubLinkNav"], ["routerLink", "/protected/customer/profile/ownprofile/update.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 123).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](123, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Update My Profile"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_SubNavFullComponent_6)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](127, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](128, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](132, 0, null, null, 23, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](134, 0, null, null, 2, "a", [["class", "moreLinkNav"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Customer Care"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](136, 0, null, null, 0, "span", [["class", "blackRightArrow"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](138, 0, null, null, 16, "ul", [["class", "moreSubLinkHolder show"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](140, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](141, 0, null, null, 2, "a", [["class", "moreSubLinkNav"], ["routerLink", "/protected/customer/cc/overview.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 142).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](142, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Overview"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](145, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](146, 0, null, null, 2, "a", [["class", "moreSubLinkNav"], ["routerLink", "/protected/customer/cc/emailus.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 147).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](147, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Email Us"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](150, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](151, 0, null, null, 2, "a", [["class", "moreSubLinkNav"], ["routerLink", "/protected/customer/cc/faqs.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 152).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](152, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["FAQs"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/protected/customer/dashboard.htm"; _ck(_v, 12, 0, currVal_2); var currVal_3 = _co.startEnabled; var currVal_4 = _co.startRestrictionReason; var currVal_5 = "Start Service"; var currVal_6 = "/protected/customer/service/start/selectproperty.htm"; _ck(_v, 25, 0, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.stopEnabled; var currVal_8 = _co.stopRestrictionReason; var currVal_9 = "Stop Service"; var currVal_10 = "/protected/customer/service/stop/businessinfo.htm"; _ck(_v, 29, 0, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = _co.billingEnabled; var currVal_12 = _co.billingRestrictionReason; var currVal_13 = "View Current Bill"; var currVal_14 = "/protected/customer/billing/paybill/viewbill.htm"; _ck(_v, 43, 0, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = _co.billingEnabled; var currVal_16 = _co.billingRestrictionReason; var currVal_17 = "Payment History"; var currVal_18 = "/protected/customer/billing/paymenthistory.htm"; _ck(_v, 47, 0, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_19 = !((_co.webSecurityRole == "I_Agent_OPS_REP") || (_co.webSecurityRole == "I_Read-Only_IT")); _ck(_v, 51, 0, currVal_19); var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 56, 0, _ck(_v, 57, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 0), _co.webSecurityRole)); _ck(_v, 56, 0, currVal_20); var currVal_23 = "/protected/customer/forms/list.htm"; _ck(_v, 62, 0, currVal_23); var currVal_26 = "/protected/customer/transactions/list.htm"; _ck(_v, 69, 0, currVal_26); var currVal_29 = "/protected/customer/reports/vacancy.htm"; _ck(_v, 83, 0, currVal_29); var currVal_32 = "/protected/customer/reports/roll.htm"; _ck(_v, 88, 0, currVal_32); var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 110, 0, _ck(_v, 111, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1), _co.webSecurityRole)); _ck(_v, 110, 0, currVal_33); var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 114, 0, _ck(_v, 115, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2), _co.webSecurityRole)); _ck(_v, 114, 0, currVal_34); var currVal_35 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 118, 0, _ck(_v, 119, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3), _co.webSecurityRole)); _ck(_v, 118, 0, currVal_35); var currVal_38 = "/protected/customer/profile/ownprofile/update.htm"; _ck(_v, 123, 0, currVal_38); var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 127, 0, _ck(_v, 128, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4), _co.webSecurityRole)); _ck(_v, 127, 0, currVal_39); var currVal_42 = "/protected/customer/cc/overview.htm"; _ck(_v, 142, 0, currVal_42); var currVal_45 = "/protected/customer/cc/emailus.htm"; _ck(_v, 147, 0, currVal_45); var currVal_48 = "/protected/customer/cc/faqs.htm"; _ck(_v, 152, 0, currVal_48); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_0, currVal_1); var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 62).target; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 62).href; _ck(_v, 61, 0, currVal_21, currVal_22); var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 69).target; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 69).href; _ck(_v, 68, 0, currVal_24, currVal_25); var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 83).target; var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 83).href; _ck(_v, 82, 0, currVal_27, currVal_28); var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 88).target; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 88).href; _ck(_v, 87, 0, currVal_30, currVal_31); var currVal_36 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 123).target; var currVal_37 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 123).href; _ck(_v, 122, 0, currVal_36, currVal_37); var currVal_40 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 142).target; var currVal_41 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 142).href; _ck(_v, 141, 0, currVal_40, currVal_41); var currVal_43 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 147).target; var currVal_44 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 147).href; _ck(_v, 146, 0, currVal_43, currVal_44); var currVal_46 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 152).target; var currVal_47 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 152).href; _ck(_v, 151, 0, currVal_46, currVal_47); }); }
function View_SubNavFullComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-subnav-full", [], null, null, null, View_SubNavFullComponent_0, RenderType_SubNavFullComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__subnavfull_component__["a" /* SubNavFullComponent */], [__WEBPACK_IMPORTED_MODULE_8__services_shared_service__["a" /* SharedService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SubNavFullComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("gme-subnav-full", __WEBPACK_IMPORTED_MODULE_7__subnavfull_component__["a" /* SubNavFullComponent */], View_SubNavFullComponent_Host_0, { webSecurityRole: "webSecurityRole", startEnabled: "startEnabled", stopEnabled: "stopEnabled", billingEnabled: "billingEnabled", startRestrictionReason: "startRestrictionReason", stopRestrictionReason: "stopRestrictionReason", billingRestrictionReason: "billingRestrictionReason" }, {}, []);



/***/ }),

/***/ "./src/app/shared/common/subnav/subnavfull.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubNavFullComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");


var SubNavFullComponent = /** @class */ (function () {
    function SubNavFullComponent(sharedService) {
        this.sharedService = sharedService;
        this.startEnabled = true;
        this.stopEnabled = true;
        this.billingEnabled = true;
        this.defaultRestriction = true;
        this.isFAQsPage = false;
    }
    SubNavFullComponent.prototype.ngOnInit = function () {
        this.isFAQsPage = true;
    };
    return SubNavFullComponent;
}());



/***/ }),

/***/ "./src/app/shared/fullfooter/fullfooter.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/shared/fullfooter/fullfooter.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_FullFooterComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_FullFooterComponent_0;
/* unused harmony export View_FullFooterComponent_Host_0 */
/* unused harmony export FullFooterComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fullfooter_component_css_shim_ngstyle__ = __webpack_require__("./src/app/shared/fullfooter/fullfooter.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fullfooter_component__ = __webpack_require__("./src/app/shared/fullfooter/fullfooter.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_FullFooterComponent = [__WEBPACK_IMPORTED_MODULE_0__fullfooter_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_FullFooterComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_FullFooterComponent, data: {} });

function View_FullFooterComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 116, "footer", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 96, "div", [["class", "quickLinks"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["QUICK LINKS"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 12, "div", [["class", "quicklinkSection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Service"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 2, "a", [["routerLink", "/protected/customer/service/start/selectproperty.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](13, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Start Service"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 2, "a", [["routerLink", "/protected/customer/service/stop/businessinfo.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](17, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Stop Service"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 16, "div", [["class", "quicklinkSection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](23, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Reports"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 2, "a", [["routerLink", "/protected/customer/reports/vacancy.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 27).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](27, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Vacancy Report"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 2, "a", [["routerLink", "/protected/customer/reports/roll.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](31, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Roll In Report"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](34, 0, null, null, 2, "a", [["routerLink", "/protected/customer/reports/roll.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](35, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Roll Out Report"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](39, 0, null, null, 20, "div", [["class", "quicklinkSection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](41, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Billing"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](44, 0, null, null, 2, "a", [["routerLink", "/protected/customer/billing/paybill/viewbill.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](45, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["View Current Bill"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](48, 0, null, null, 2, "a", [["routerLink", "/protected/customer/billing/paybill/viewbill.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](49, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Pay Current Bill"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](52, 0, null, null, 2, "a", [["routerLink", "/protected/customer/billing/paymenthistory.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](53, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Payment History"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](56, 0, null, null, 2, "a", [["routerLink", "/protected/customer/billing/previousbills.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 57).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](57, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Previous Bills"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](61, 0, null, null, 12, "div", [["class", "quicklinkSection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](63, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Monitoring"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](66, 0, null, null, 2, "a", [["routerLink", "/protected/customer/vacancy/alertsetup.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](67, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Vacant Unit Alert Setup"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](70, 0, null, null, 2, "a", [["routerLink", "/protected/customer/vacancy/dailyreport.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 71).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](71, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Daily Report"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](75, 0, null, null, 6, "div", [["class", "quicklinkSection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](77, 0, null, null, 3, "a", [["routerLink", "/protected/customer/transactions/list.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 78).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](78, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](79, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Transactions"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](83, 0, null, null, 6, "div", [["class", "quicklinkSection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](85, 0, null, null, 3, "a", [["routerLink", "/protected/customer/forms/list.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 86).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](86, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](87, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Forms"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](91, 0, null, null, 6, "div", [["class", "quicklinkSection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](93, 0, null, null, 3, "a", [["routerLink", "/protected/customer/profile/overview.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 94).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](94, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](95, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Profile"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](100, 0, null, null, 15, "div", [["class", "footerLinkSection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](102, 0, null, null, 1, "a", [["href", "https://www.greenmountainenergy.com/our-story/news-room/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["News Room"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" |\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](105, 0, null, null, 1, "a", [["href", "https://www.greenmountainenergy.com/terms-of-use/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Terms of Use"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" |\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](108, 0, null, null, 1, "a", [["href", "https://www.greenmountainenergy.com/privacy-policy/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Privacy Policy"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](111, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](113, 0, null, null, 1, "span", [["class", "copyright"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\u00A9 2018 Green Mountain Energy Company. Copyright. PUCT Certificate No. 10009."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_2 = "/protected/customer/service/start/selectproperty.htm"; _ck(_v, 13, 0, currVal_2); var currVal_5 = "/protected/customer/service/stop/businessinfo.htm"; _ck(_v, 17, 0, currVal_5); var currVal_8 = "/protected/customer/reports/vacancy.htm"; _ck(_v, 27, 0, currVal_8); var currVal_11 = "/protected/customer/reports/roll.htm"; _ck(_v, 31, 0, currVal_11); var currVal_14 = "/protected/customer/reports/roll.htm"; _ck(_v, 35, 0, currVal_14); var currVal_17 = "/protected/customer/billing/paybill/viewbill.htm"; _ck(_v, 45, 0, currVal_17); var currVal_20 = "/protected/customer/billing/paybill/viewbill.htm"; _ck(_v, 49, 0, currVal_20); var currVal_23 = "/protected/customer/billing/paymenthistory.htm"; _ck(_v, 53, 0, currVal_23); var currVal_26 = "/protected/customer/billing/previousbills.htm"; _ck(_v, 57, 0, currVal_26); var currVal_29 = "/protected/customer/vacancy/alertsetup.htm"; _ck(_v, 67, 0, currVal_29); var currVal_32 = "/protected/customer/vacancy/dailyreport.htm"; _ck(_v, 71, 0, currVal_32); var currVal_35 = "/protected/customer/transactions/list.htm"; _ck(_v, 78, 0, currVal_35); var currVal_38 = "/protected/customer/forms/list.htm"; _ck(_v, 86, 0, currVal_38); var currVal_41 = "/protected/customer/profile/overview.htm"; _ck(_v, 94, 0, currVal_41); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).href; _ck(_v, 12, 0, currVal_0, currVal_1); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 17).target; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 17).href; _ck(_v, 16, 0, currVal_3, currVal_4); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 27).target; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 27).href; _ck(_v, 26, 0, currVal_6, currVal_7); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31).target; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31).href; _ck(_v, 30, 0, currVal_9, currVal_10); var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).target; var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).href; _ck(_v, 34, 0, currVal_12, currVal_13); var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).target; var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).href; _ck(_v, 44, 0, currVal_15, currVal_16); var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49).target; var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49).href; _ck(_v, 48, 0, currVal_18, currVal_19); var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).target; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).href; _ck(_v, 52, 0, currVal_21, currVal_22); var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 57).target; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 57).href; _ck(_v, 56, 0, currVal_24, currVal_25); var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67).target; var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67).href; _ck(_v, 66, 0, currVal_27, currVal_28); var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 71).target; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 71).href; _ck(_v, 70, 0, currVal_30, currVal_31); var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 78).target; var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 78).href; _ck(_v, 77, 0, currVal_33, currVal_34); var currVal_36 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 86).target; var currVal_37 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 86).href; _ck(_v, 85, 0, currVal_36, currVal_37); var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 94).target; var currVal_40 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 94).href; _ck(_v, 93, 0, currVal_39, currVal_40); }); }
function View_FullFooterComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-full-footer", [], null, null, null, View_FullFooterComponent_0, RenderType_FullFooterComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__fullfooter_component__["a" /* FullFooterComponent */], [], null, null)], null, null); }
var FullFooterComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("gme-full-footer", __WEBPACK_IMPORTED_MODULE_4__fullfooter_component__["a" /* FullFooterComponent */], View_FullFooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/fullfooter/fullfooter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullFooterComponent; });
var FullFooterComponent = /** @class */ (function () {
    function FullFooterComponent() {
    }
    return FullFooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/fullheader/fullheader.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["a[_ngcontent-%COMP%]{\r\n  cursor: pointer\r\n}\r\n\r\na.disabled[_ngcontent-%COMP%] {\r\n    color: lightgrey !important;\r\n    cursor: not-allowed;\r\n    text-decoration: none;\r\n}\r\n\r\n.disable-span[_ngcontent-%COMP%]{\r\n    color: lightgrey !important;\r\n    cursor: not-allowed;\r\n    text-decoration: none;\r\n}\r\n\r\n.show[_ngcontent-%COMP%]{\r\n   display: block !important;\r\n}"];



/***/ }),

/***/ "./src/app/shared/fullheader/fullheader.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_FullHeaderComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_FullHeaderComponent_0;
/* unused harmony export View_FullHeaderComponent_Host_0 */
/* unused harmony export FullHeaderComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fullheader_component_css_shim_ngstyle__ = __webpack_require__("./src/app/shared/fullheader/fullheader.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_subnav_subnavfull_component_ngfactory__ = __webpack_require__("./src/app/shared/common/subnav/subnavfull.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_subnav_subnavfull_component__ = __webpack_require__("./src/app/shared/common/subnav/subnavfull.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/_services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_subnav_subnavhalf_component_ngfactory__ = __webpack_require__("./src/app/shared/common/subnav/subnavhalf.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_subnav_subnavhalf_component__ = __webpack_require__("./src/app/shared/common/subnav/subnavhalf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_mainnav_mainnav_component_ngfactory__ = __webpack_require__("./src/app/shared/common/mainnav/mainnav.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_mainnav_mainnav_component__ = __webpack_require__("./src/app/shared/common/mainnav/mainnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fullheader_component__ = __webpack_require__("./src/app/shared/fullheader/fullheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_FullHeaderComponent = [__WEBPACK_IMPORTED_MODULE_0__fullheader_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_FullHeaderComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_FullHeaderComponent, data: {} });

function View_FullHeaderComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "gme-subnav-full", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__common_subnav_subnavfull_component_ngfactory__["b" /* View_SubNavFullComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__common_subnav_subnavfull_component_ngfactory__["a" /* RenderType_SubNavFullComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__common_subnav_subnavfull_component__["a" /* SubNavFullComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]], { webSecurityRole: [0, "webSecurityRole"], startEnabled: [1, "startEnabled"], stopEnabled: [2, "stopEnabled"], billingEnabled: [3, "billingEnabled"], startRestrictionReason: [4, "startRestrictionReason"], stopRestrictionReason: [5, "stopRestrictionReason"], billingRestrictionReason: [6, "billingRestrictionReason"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform(_co.webSecurityRole$)); var currVal_1 = _co.startEnabled; var currVal_2 = _co.stopEnabled; var currVal_3 = _co.billingEnabled; var currVal_4 = _co.startRestrictionReason; var currVal_5 = _co.stopRestrictionReason; var currVal_6 = _co.billingRestrictionReason; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, null); }
function View_FullHeaderComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "gme-subnav-half", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__common_subnav_subnavhalf_component_ngfactory__["b" /* View_SubNavHalfComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__common_subnav_subnavhalf_component_ngfactory__["a" /* RenderType_SubNavHalfComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__common_subnav_subnavhalf_component__["a" /* SubNavHalfComponent */], [__WEBPACK_IMPORTED_MODULE_8__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]], { webSecurityRole: [0, "webSecurityRole"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform(_co.webSecurityRole$)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_FullHeaderComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_FullHeaderComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isSelectedpropertyExist; _ck(_v, 2, 0, currVal_0); }, null); }
function View_FullHeaderComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 20, "header", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 17, "nav", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 9, "div", [["class", "desktopMenu"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 1, "gme-main-nav", [], null, null, null, __WEBPACK_IMPORTED_MODULE_10__common_mainnav_mainnav_component_ngfactory__["b" /* View_MainNavComponent_0 */], __WEBPACK_IMPORTED_MODULE_10__common_mainnav_mainnav_component_ngfactory__["a" /* RenderType_MainNavComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_11__common_mainnav_mainnav_component__["a" /* MainNavComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_FullHeaderComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](0, [["showHalfHeader", 2]], null, 0, null, View_FullHeaderComponent_2)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 1, "div", [["class", "mobileMenu"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 7, 0); var currVal_0 = _co.isSelectedpropertyExist; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12); _ck(_v, 10, 0, currVal_0, currVal_1); }, null); }
function View_FullHeaderComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-full-header", [], null, null, null, View_FullHeaderComponent_0, RenderType_FullHeaderComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_12__fullheader_component__["a" /* FullHeaderComponent */], [__WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FullHeaderComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("gme-full-header", __WEBPACK_IMPORTED_MODULE_12__fullheader_component__["a" /* FullHeaderComponent */], View_FullHeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/fullheader/fullheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_subject__ = __webpack_require__("./node_modules/rxjs/subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");







var FullHeaderComponent = /** @class */ (function () {
    function FullHeaderComponent(userService, router, store) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.store = store;
        this.startEnabled = true;
        this.stopEnabled = true;
        this.billingEnabled = true;
        this.isSelectedpropertyExist = true;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_subject__["Subject"]();
        this.webSecurityRole$ = store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["v" /* getLoggedInUserSecurityRole */]);
        store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["a" /* getAccessPrivForSelectedProperty */]).takeUntil(this.destroy$).subscribe(function (accessPriv) {
            _this.startEnabled = accessPriv.startEnabled;
            _this.stopEnabled = accessPriv.stopEnabled;
            _this.startRestrictionReason = accessPriv.startRestrictionReason;
            _this.stopRestrictionReason = accessPriv.stopRestrictionReason;
            _this.billingEnabled = accessPriv.billingEnabled;
            _this.billingRestrictionReason = accessPriv.billingRestrictionReason;
        });
        store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["_3" /* isPropertySelected */]).takeUntil(this.destroy$).subscribe(function (propSelected) {
            _this.isSelectedpropertyExist = propSelected;
        });
    }
    FullHeaderComponent.prototype.ngOnInit = function () { };
    FullHeaderComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    return FullHeaderComponent;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map