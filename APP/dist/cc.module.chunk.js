webpackJsonp(["cc.module"],{

/***/ "./src/app/app-state/effects/cc.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CCEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_cc__ = __webpack_require__("./src/app/app-state/actions/cc.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CCEffects = /** @class */ (function () {
    function CCEffects(action$, ccService) {
        var _this = this;
        this.action$ = action$;
        this.ccService = ccService;
        this.emailUsEffects$ = this.action$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_cc__["a" /* EMAIL_US */])
            .map(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) { return _this.ccService.emailUs(payload)
            .map(function (result) {
            return new __WEBPACK_IMPORTED_MODULE_7__actions_cc__["f" /* EmailUsSuccess */](result);
        }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_cc__["e" /* EmailUsFailure */]({})); });
        this.FAQsEffects$ = this.action$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_cc__["g" /* GET_FAQS */])
            .map(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) { return _this.ccService.getFaqs(payload)
            .map(function (result) {
            return new __WEBPACK_IMPORTED_MODULE_7__actions_cc__["l" /* GetFAQsSuccess */](result);
        }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_cc__["k" /* GetFAQsFailure */]({})); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], CCEffects.prototype, "emailUsEffects$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], CCEffects.prototype, "FAQsEffects$", void 0);
    return CCEffects;
}());



/***/ }),

/***/ "./src/app/customercare/cc-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerCareRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./src/app/customercare/index.ts");


var routes = [
    //{ path: 'faqs.htm', component: HalfLayout, children: [{path: '', component: FAQsComponent},]},
    { path: 'faqs.htm', component: __WEBPACK_IMPORTED_MODULE_1__index__["c" /* FAQsComponent */] },
    { path: 'overview.htm', component: __WEBPACK_IMPORTED_MODULE_1__index__["d" /* OverviewComponent */] },
    { path: 'emailus.htm', component: __WEBPACK_IMPORTED_MODULE_1__index__["a" /* EmailUsComponent */] },
    { path: 'emailconfirm.htm', component: __WEBPACK_IMPORTED_MODULE_1__index__["b" /* EmailUsConfirmComponent */] }
];
var CustomerCareRoutingModule = /** @class */ (function () {
    function CustomerCareRoutingModule() {
    }
    return CustomerCareRoutingModule;
}());



/***/ }),

/***/ "./src/app/customercare/cc.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCareModuleNgFactory", function() { return CustomerCareModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cc_module__ = __webpack_require__("./src/app/customercare/cc.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faqs_faqs_component_ngfactory__ = __webpack_require__("./src/app/customercare/faqs/faqs.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overview_component_ngfactory__ = __webpack_require__("./src/app/customercare/overview.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emailus_emailus_component_ngfactory__ = __webpack_require__("./src/app/customercare/emailus/emailus.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emailus_emailus_confirm_component_ngfactory__ = __webpack_require__("./src/app/customercare/emailus/emailus.confirm.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_page_service__ = __webpack_require__("./src/app/_services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_csv_service__ = __webpack_require__("./src/app/_services/csv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cc_routing_module__ = __webpack_require__("./src/app/customercare/cc-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_cc_service__ = __webpack_require__("./src/app/_services/cc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_state_effects_cc_effects__ = __webpack_require__("./src/app/app-state/effects/cc.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__faqs_faqs_component__ = __webpack_require__("./src/app/customercare/faqs/faqs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__overview_component__ = __webpack_require__("./src/app/customercare/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__emailus_emailus_component__ = __webpack_require__("./src/app/customercare/emailus/emailus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__emailus_emailus_confirm_component__ = __webpack_require__("./src/app/customercare/emailus/emailus.confirm.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 























var CustomerCareModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__cc_module__["a" /* CustomerCareModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_2__faqs_faqs_component_ngfactory__["a" /* FAQsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_3__overview_component_ngfactory__["a" /* OverviewComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_4__emailus_emailus_component_ngfactory__["a" /* EmailUsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_5__emailus_emailus_confirm_component_ngfactory__["a" /* EmailUsConfirmComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_6__angular_common__["m" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["l" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_6__angular_common__["q" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["y" /* ɵi */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["y" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_8__services_sort_service__["a" /* SortService */], __WEBPACK_IMPORTED_MODULE_8__services_sort_service__["a" /* SortService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__services_page_service__["a" /* PagerService */], __WEBPACK_IMPORTED_MODULE_9__services_page_service__["a" /* PagerService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_10__services_csv_service__["a" /* CSVService */], __WEBPACK_IMPORTED_MODULE_10__services_csv_service__["a" /* CSVService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* HttpModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["w" /* ɵba */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["w" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["t" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["t" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_router__["o" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_12__angular_router__["o" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_12__angular_router__["u" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_12__angular_router__["m" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__cc_routing_module__["a" /* CustomerCareRoutingModule */], __WEBPACK_IMPORTED_MODULE_13__cc_routing_module__["a" /* CustomerCareRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["i" /* ɵg */], __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["f" /* ɵb */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["j" /* ɵh */], __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["j" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["i" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["c" /* EffectSources */], [__WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["j" /* ɵh */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["k" /* ɵi */], __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["k" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_16__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["a" /* Actions */], [__WEBPACK_IMPORTED_MODULE_16__ngrx_store__["j" /* ScannedActionsSubject */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* BrowserXhr */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_11__angular_http__["h" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* BaseResponseOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_11__angular_http__["j" /* XSRFStrategy */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["k" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_11__angular_http__["i" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["i" /* XHRBackend */], [__WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["h" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["j" /* XSRFStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_11__angular_http__["g" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* BaseRequestOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_11__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["l" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_11__angular_http__["i" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["g" /* RequestOptions */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_17__services_cc_service__["a" /* CCService */], __WEBPACK_IMPORTED_MODULE_17__services_cc_service__["a" /* CCService */], [__WEBPACK_IMPORTED_MODULE_11__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_16__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_18__app_state_effects_cc_effects__["a" /* CCEffects */], __WEBPACK_IMPORTED_MODULE_18__app_state_effects_cc_effects__["a" /* CCEffects */], [__WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_17__services_cc_service__["a" /* CCService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["h" /* ɵe */], __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["e" /* ɵa */], [__WEBPACK_IMPORTED_MODULE_18__app_state_effects_cc_effects__["a" /* CCEffects */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["g" /* ɵc */], __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["g" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["k" /* ɵi */], __WEBPACK_IMPORTED_MODULE_16__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["h" /* ɵe */], [2, __WEBPACK_IMPORTED_MODULE_16__ngrx_store__["n" /* StoreModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__cc_module__["a" /* CustomerCareModule */], __WEBPACK_IMPORTED_MODULE_1__cc_module__["a" /* CustomerCareModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_12__angular_router__["k" /* ROUTES */], function () { return [[{ path: "faqs.htm", component: __WEBPACK_IMPORTED_MODULE_19__faqs_faqs_component__["a" /* FAQsComponent */] }, { path: "overview.htm", component: __WEBPACK_IMPORTED_MODULE_20__overview_component__["a" /* OverviewComponent */] }, { path: "emailus.htm", component: __WEBPACK_IMPORTED_MODULE_21__emailus_emailus_component__["a" /* EmailUsComponent */] }, { path: "emailconfirm.htm", component: __WEBPACK_IMPORTED_MODULE_22__emailus_emailus_confirm_component__["a" /* EmailUsConfirmComponent */] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/customercare/cc.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerCareModule; });
var CustomerCareModule = /** @class */ (function () {
    function CustomerCareModule() {
    }
    return CustomerCareModule;
}());



/***/ }),

/***/ "./src/app/customercare/emailus/emailus.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_EmailUsComponent */
/* unused harmony export View_EmailUsComponent_0 */
/* unused harmony export View_EmailUsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailUsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_error_error_component_ngfactory__ = __webpack_require__("./src/app/shared/error/error.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_error_error_component__ = __webpack_require__("./src/app/shared/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__emailus_component__ = __webpack_require__("./src/app/customercare/emailus/emailus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_EmailUsComponent = [".bordercls[_ngcontent-%COMP%]{border-color:#ff8080}"];
var RenderType_EmailUsComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_EmailUsComponent, data: {} });

function View_EmailUsComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 1, "span", [["class", "errorMsg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Email Address is required."]))], null, null); }
function View_EmailUsComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 1, "span", [["class", "errorMsg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Email Address is not valid."]))], null, null); }
function View_EmailUsComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 1, "span", [["class", "errorMsg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Re-Type Email Address is required."]))], null, null); }
function View_EmailUsComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 1, "span", [["class", "errorMsg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Email Address is not valid."]))], null, null); }
function View_EmailUsComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 1, "span", [["class", "errorMsg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Comments is required."]))], null, null); }
function View_EmailUsComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-error", [["errorMessage", "Email address must match in both fields."]], null, null, null, __WEBPACK_IMPORTED_MODULE_1__shared_error_error_component_ngfactory__["b" /* View_ErrorComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_error_error_component_ngfactory__["a" /* RenderType_ErrorComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_error_error_component__["a" /* ErrorComponent */], [], { errorMessage: [0, "errorMessage"] }, null)], function (_ck, _v) { var currVal_0 = "Email address must match in both fields."; _ck(_v, 1, 0, currVal_0); }, null); }
function View_EmailUsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 196, "section", [["id", "contentWrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 193, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Email Us"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 8, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Use our email form below to submit your email. Information you provide is strictly confidential. This information will not be given, sold or shared with any person or organization external to Green Mountain Energy. See our "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](9, 0, null, null, 1, "a", [["href", "https://www.greenmountainenergy.com/privacy-policy/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["privacy statement"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, [" for more details. You can also view our "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](12, 0, null, null, 2, "a", [["routerLink", "/protected/customer/cc/faqs.htm"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](13, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["FAQs"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, [" to find answers to your questions."])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](17, 0, null, null, 176, "form", [["autocomplete", "off"], ["id", "addUserFrm"], ["name", "addUserFrm"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 19).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 19).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.sendEmail(_co.ccForm.value) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["x" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](19, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* FormGroupDirective */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](21, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["o" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](23, 0, null, null, 160, "div", [["class", "infoHolder mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](25, 0, null, null, 46, "div", [["class", "width70Per"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](27, 0, null, null, 22, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](29, 0, null, null, 19, "div", [["class", "split inlineBlock"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](31, 0, null, null, 1, "label", [["for", "emailAddress"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Email Address"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](34, 0, null, null, 7, "input", [["formControlName", "emailAddress"], ["name", "emailAddress"], ["placeholder", "smith@email.com"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 37)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 37).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 37)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 37)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](35, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpod"](36, { "bordercls": 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](37, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](39, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](41, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_EmailUsComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](44, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_EmailUsComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](47, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](51, 0, null, null, 19, "div", [["class", "mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](53, 0, null, null, 1, "label", [["for", "reEmailAddress"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Re-Type Email Address"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](56, 0, null, null, 7, "input", [["formControlName", "reEmailAddress"], ["name", "reEmailAddress"], ["placeholder", "smith@email.com"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 59)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 59).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 59)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 59)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](57, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpod"](58, { "bordercls": 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](59, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](61, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](63, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_EmailUsComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](66, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_EmailUsComponent_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](69, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](73, 0, null, null, 1, "div", [["class", "subheader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Your message to Green Mountain Energy:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](76, 0, null, null, 1, "div", [["class", "greyLineSeperator"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u00A0"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\n\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](79, 0, null, null, 87, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](81, 0, null, null, 1, "label", [["for", "subject"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Subject"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](84, 0, null, null, 81, "select", [["class", "inboxEqual"], ["formControlName", "subject"], ["id", "subject"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 85).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 85).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](85, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](87, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](89, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](91, 0, null, null, 3, "option", [["value", "Activity Reports"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](92, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](93, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Activity Reports"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](96, 0, null, null, 3, "option", [["value", "Billing and Invoicing"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](97, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](98, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Billing and Invoicing"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](101, 0, null, null, 3, "option", [["value", "Builder Turn Down"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](102, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](103, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Builder Turn Down"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](106, 0, null, null, 3, "option", [["value", "Change of Contracts"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](107, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](108, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Change of Contracts"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](111, 0, null, null, 3, "option", [["value", "CSA (issues, requests, reports"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](112, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](113, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["CSA (issues, requests, reports"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](116, 0, null, null, 3, "option", [["value", "General Account Information"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](117, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](118, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["General Account Information"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](121, 0, null, null, 3, "option", [["value", "Marketing Agreement Reports"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](122, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](123, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Marketing Agreement Reports"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](126, 0, null, null, 3, "option", [["value", "Marketing Materials"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](127, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](128, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Marketing Materials"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](131, 0, null, null, 3, "option", [["value", "Pricing Requests"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](132, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](133, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Pricing Requests"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](136, 0, null, null, 3, "option", [["value", "Remittance/Payment Issues"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](137, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](138, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Remittance/Payment Issues"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](141, 0, null, null, 3, "option", [["value", "Residential Enrollments"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](142, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](143, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Residential Enrollments"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](146, 0, null, null, 3, "option", [["value", "Start/Stop Forms"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](147, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](148, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Start/Stop Forms"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](151, 0, null, null, 3, "option", [["value", "Status of Request"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](152, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](153, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Status of Request"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](156, 0, null, null, 3, "option", [["value", "Tax issues"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](157, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](158, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Tax issues"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t\t  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](161, 0, null, null, 3, "option", [["value", "Other"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](162, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](163, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Other"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](168, 0, null, null, 14, "div", [["class", "mT1P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](170, 0, null, null, 1, "label", [["for", "comments"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Comments"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](173, 0, null, null, 5, "textarea", [["class", "fullwidth"], ["formControlName", "comments"], ["id", "comments"], ["name", "comments"], ["rows", "10"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 174)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 174).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 174)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 174)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](174, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](176, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](178, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_EmailUsComponent_5)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](181, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_EmailUsComponent_6)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](186, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](188, 0, null, null, 4, "div", [["class", "text-right"], ["id", "buttonHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](190, 0, null, null, 1, "button", [["class", "blue"], ["type", "submit"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Send Email"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/protected/customer/cc/faqs.htm"; _ck(_v, 13, 0, currVal_2); var currVal_10 = _co.ccForm; _ck(_v, 19, 0, currVal_10); var currVal_18 = _ck(_v, 36, 0, _co.emailsMismatch); _ck(_v, 35, 0, currVal_18); var currVal_19 = "emailAddress"; _ck(_v, 39, 0, currVal_19); var tmp_20_0 = null; var currVal_20 = ((_co.isFormNotValid && _co.ccForm.get("emailAddress").untouched) || ((_co.ccForm.get("emailAddress").touched && (((tmp_20_0 = _co.ccForm.get("emailAddress")) == null) ? null : tmp_20_0.errors)) && (((tmp_20_0 = _co.ccForm.get("emailAddress")) == null) ? null : ((tmp_20_0.errors == null) ? null : tmp_20_0.errors.required)))); _ck(_v, 44, 0, currVal_20); var tmp_21_0 = null; var currVal_21 = ((_co.ccForm.get("emailAddress").touched && (((tmp_21_0 = _co.ccForm.get("emailAddress")) == null) ? null : tmp_21_0.errors)) && (((tmp_21_0 = _co.ccForm.get("emailAddress")) == null) ? null : ((tmp_21_0.errors == null) ? null : tmp_21_0.errors.pattern))); _ck(_v, 47, 0, currVal_21); var currVal_29 = _ck(_v, 58, 0, _co.emailsMismatch); _ck(_v, 57, 0, currVal_29); var currVal_30 = "reEmailAddress"; _ck(_v, 61, 0, currVal_30); var tmp_31_0 = null; var currVal_31 = ((_co.isFormNotValid && _co.ccForm.get("reEmailAddress").untouched) || ((_co.ccForm.get("reEmailAddress").touched && (((tmp_31_0 = _co.ccForm.get("reEmailAddress")) == null) ? null : tmp_31_0.errors)) && (((tmp_31_0 = _co.ccForm.get("reEmailAddress")) == null) ? null : ((tmp_31_0.errors == null) ? null : tmp_31_0.errors.required)))); _ck(_v, 66, 0, currVal_31); var tmp_32_0 = null; var currVal_32 = ((_co.ccForm.get("reEmailAddress").touched && (((tmp_32_0 = _co.ccForm.get("reEmailAddress")) == null) ? null : tmp_32_0.errors)) && (((tmp_32_0 = _co.ccForm.get("reEmailAddress")) == null) ? null : ((tmp_32_0.errors == null) ? null : tmp_32_0.errors.pattern))); _ck(_v, 69, 0, currVal_32); var currVal_40 = "subject"; _ck(_v, 87, 0, currVal_40); var currVal_41 = "Activity Reports"; _ck(_v, 92, 0, currVal_41); var currVal_42 = "Activity Reports"; _ck(_v, 93, 0, currVal_42); var currVal_43 = "Billing and Invoicing"; _ck(_v, 97, 0, currVal_43); var currVal_44 = "Billing and Invoicing"; _ck(_v, 98, 0, currVal_44); var currVal_45 = "Builder Turn Down"; _ck(_v, 102, 0, currVal_45); var currVal_46 = "Builder Turn Down"; _ck(_v, 103, 0, currVal_46); var currVal_47 = "Change of Contracts"; _ck(_v, 107, 0, currVal_47); var currVal_48 = "Change of Contracts"; _ck(_v, 108, 0, currVal_48); var currVal_49 = "CSA (issues, requests, reports"; _ck(_v, 112, 0, currVal_49); var currVal_50 = "CSA (issues, requests, reports"; _ck(_v, 113, 0, currVal_50); var currVal_51 = "General Account Information"; _ck(_v, 117, 0, currVal_51); var currVal_52 = "General Account Information"; _ck(_v, 118, 0, currVal_52); var currVal_53 = "Marketing Agreement Reports"; _ck(_v, 122, 0, currVal_53); var currVal_54 = "Marketing Agreement Reports"; _ck(_v, 123, 0, currVal_54); var currVal_55 = "Marketing Materials"; _ck(_v, 127, 0, currVal_55); var currVal_56 = "Marketing Materials"; _ck(_v, 128, 0, currVal_56); var currVal_57 = "Pricing Requests"; _ck(_v, 132, 0, currVal_57); var currVal_58 = "Pricing Requests"; _ck(_v, 133, 0, currVal_58); var currVal_59 = "Remittance/Payment Issues"; _ck(_v, 137, 0, currVal_59); var currVal_60 = "Remittance/Payment Issues"; _ck(_v, 138, 0, currVal_60); var currVal_61 = "Residential Enrollments"; _ck(_v, 142, 0, currVal_61); var currVal_62 = "Residential Enrollments"; _ck(_v, 143, 0, currVal_62); var currVal_63 = "Start/Stop Forms"; _ck(_v, 147, 0, currVal_63); var currVal_64 = "Start/Stop Forms"; _ck(_v, 148, 0, currVal_64); var currVal_65 = "Status of Request"; _ck(_v, 152, 0, currVal_65); var currVal_66 = "Status of Request"; _ck(_v, 153, 0, currVal_66); var currVal_67 = "Tax issues"; _ck(_v, 157, 0, currVal_67); var currVal_68 = "Tax issues"; _ck(_v, 158, 0, currVal_68); var currVal_69 = "Other"; _ck(_v, 162, 0, currVal_69); var currVal_70 = "Other"; _ck(_v, 163, 0, currVal_70); var currVal_78 = "comments"; _ck(_v, 176, 0, currVal_78); var tmp_79_0 = null; var currVal_79 = ((_co.isFormNotValid && _co.ccForm.get("comments").untouched) || ((_co.ccForm.get("comments").touched && (((tmp_79_0 = _co.ccForm.get("comments")) == null) ? null : tmp_79_0.errors)) && ((_co.ccForm.get("comments").errors == null) ? null : _co.ccForm.get("comments").errors.required))); _ck(_v, 181, 0, currVal_79); var currVal_80 = _co.emailsMismatch; _ck(_v, 186, 0, currVal_80); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 13).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 13).href; _ck(_v, 12, 0, currVal_0, currVal_1); var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 21).ngClassUntouched; var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 21).ngClassTouched; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 21).ngClassPristine; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 21).ngClassDirty; var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 21).ngClassValid; var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 21).ngClassInvalid; var currVal_9 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 21).ngClassPending; _ck(_v, 17, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 41).ngClassUntouched; var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 41).ngClassTouched; var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 41).ngClassPristine; var currVal_14 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 41).ngClassDirty; var currVal_15 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 41).ngClassValid; var currVal_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 41).ngClassInvalid; var currVal_17 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 41).ngClassPending; _ck(_v, 34, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_22 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 63).ngClassUntouched; var currVal_23 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 63).ngClassTouched; var currVal_24 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 63).ngClassPristine; var currVal_25 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 63).ngClassDirty; var currVal_26 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 63).ngClassValid; var currVal_27 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 63).ngClassInvalid; var currVal_28 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 63).ngClassPending; _ck(_v, 56, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_33 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 89).ngClassUntouched; var currVal_34 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 89).ngClassTouched; var currVal_35 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 89).ngClassPristine; var currVal_36 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 89).ngClassDirty; var currVal_37 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 89).ngClassValid; var currVal_38 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 89).ngClassInvalid; var currVal_39 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 89).ngClassPending; _ck(_v, 84, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_71 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 178).ngClassUntouched; var currVal_72 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 178).ngClassTouched; var currVal_73 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 178).ngClassPristine; var currVal_74 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 178).ngClassDirty; var currVal_75 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 178).ngClassValid; var currVal_76 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 178).ngClassInvalid; var currVal_77 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 178).ngClassPending; _ck(_v, 173, 0, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77); }); }
function View_EmailUsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_EmailUsComponent_0, RenderType_EmailUsComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_6__emailus_component__["a" /* EmailUsComponent */], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmailUsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("ng-component", __WEBPACK_IMPORTED_MODULE_6__emailus_component__["a" /* EmailUsComponent */], View_EmailUsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/customercare/emailus/emailus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_state_actions_cc__ = __webpack_require__("./src/app/app-state/actions/cc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");








var EmailUsComponent = /** @class */ (function () {
    function EmailUsComponent(router, store) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.emailsMismatch = false;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["b" /* Subject */]();
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["P" /* getSelectedpropertyName */]).takeUntil(this.destroy$).subscribe(function (bpName) { return _this.propertyName = bpName; });
    }
    EmailUsComponent.prototype.sendEmail = function (formValues) {
        this.emailsMismatch = this.isEmailsMismatch(formValues);
        if (this.ccForm.valid && !this.emailsMismatch) {
            this.isFormNotValid = false;
            var inData = { comments: formValues.comments, subject: formValues.subject, email: formValues.emailAddress, bpName: this.propertyName };
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_state_actions_cc__["d" /* EmailUs */](inData));
            this.router.navigate(['/protected/customer/cc/emailconfirm.htm']);
        }
        else {
            this.isFormNotValid = true;
        }
    };
    EmailUsComponent.prototype.isEmailsMismatch = function (formValues) {
        return formValues.emailAddress !== formValues.reEmailAddress;
    };
    EmailUsComponent.prototype.ngOnInit = function () {
        var emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        var subject = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('Activity Reports', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["v" /* Validators */].required]);
        var emailAddress = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["v" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["v" /* Validators */].pattern(emailPattern)]);
        var reEmailAddress = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["v" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["v" /* Validators */].pattern(emailPattern)]);
        var comments = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["v" /* Validators */].required]);
        this.ccForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormGroup */]({
            comments: comments,
            subject: subject,
            emailAddress: emailAddress,
            reEmailAddress: reEmailAddress
        });
    };
    EmailUsComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    return EmailUsComponent;
}());



/***/ }),

/***/ "./src/app/customercare/emailus/emailus.confirm.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_EmailUsConfirmComponent */
/* unused harmony export View_EmailUsConfirmComponent_0 */
/* unused harmony export View_EmailUsConfirmComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailUsConfirmComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_print_print_component_ngfactory__ = __webpack_require__("./src/app/shared/print/print.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_print_print_component__ = __webpack_require__("./src/app/shared/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emailus_confirm_component__ = __webpack_require__("./src/app/customercare/emailus/emailus.confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_EmailUsConfirmComponent = [];
var RenderType_EmailUsConfirmComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_EmailUsConfirmComponent, data: {} });

function View_EmailUsConfirmComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 53, "section", [["id", "contentWrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Email Us Confirmation"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Your request was sent. You will receive an automated email response shortly. Our most important goal at Green Mountain Energy is to provide you with service you can count on. With the information you have provided, we hope to resolve your request to your satisfaction."])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](8, 0, null, null, 41, "div", [["class", "infoHolder mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](10, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](12, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Email sent on:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](15, 0, null, null, 2, "div", [["class", "data"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](16, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](20, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](22, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Reply email will be sent to:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](25, 0, null, null, 2, "div", [["class", "data"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](26, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](30, 0, null, null, 8, "div", [["class", "mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](32, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Subject:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](35, 0, null, null, 2, "div", [["class", "data"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](36, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](40, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](42, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Comments:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](45, 0, null, null, 2, "div", [["class", "data"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](46, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](51, 0, null, null, 1, "gme-print", [["title", "Email Us Confirmation"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__shared_print_print_component_ngfactory__["b" /* View_PrintComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_print_print_component_ngfactory__["a" /* RenderType_PrintComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](52, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_print_print_component__["a" /* PrintComponent */], [], { title: [0, "title"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_4 = "Email Us Confirmation"; _ck(_v, 52, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = (((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 16, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 17).transform(_co.confirm$))) == null) ? null : tmp_0_0.txnDateAndTime); _ck(_v, 16, 0, currVal_0); var tmp_1_0 = null; var currVal_1 = (((tmp_1_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 26, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 27).transform(_co.confirm$))) == null) ? null : tmp_1_0.email); _ck(_v, 26, 0, currVal_1); var tmp_2_0 = null; var currVal_2 = (((tmp_2_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 36, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 37).transform(_co.confirm$))) == null) ? null : tmp_2_0.subject); _ck(_v, 36, 0, currVal_2); var tmp_3_0 = null; var currVal_3 = (((tmp_3_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 46, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 47).transform(_co.confirm$))) == null) ? null : tmp_3_0.comments); _ck(_v, 46, 0, currVal_3); }); }
function View_EmailUsConfirmComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_EmailUsConfirmComponent_0, RenderType_EmailUsConfirmComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__emailus_confirm_component__["a" /* EmailUsConfirmComponent */], [__WEBPACK_IMPORTED_MODULE_5__ngrx_store__["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmailUsConfirmComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("ng-component", __WEBPACK_IMPORTED_MODULE_4__emailus_confirm_component__["a" /* EmailUsConfirmComponent */], View_EmailUsConfirmComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/customercare/emailus/emailus.confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailUsConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishReplay.js");




var EmailUsConfirmComponent = /** @class */ (function () {
    function EmailUsConfirmComponent(store) {
        this.store = store;
    }
    EmailUsConfirmComponent.prototype.ngOnInit = function () {
        this.confirm$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_state_reducers__["n" /* getEmailUsConfirmation */]).publishReplay().refCount();
    };
    return EmailUsConfirmComponent;
}());



/***/ }),

/***/ "./src/app/customercare/faqs/faq.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_FAQComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_FAQComponent_0;
/* unused harmony export View_FAQComponent_Host_0 */
/* unused harmony export FAQComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_component__ = __webpack_require__("./src/app/customercare/faqs/faq.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_FAQComponent = [];
var RenderType_FAQComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_FAQComponent, data: {} });

function View_FAQComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 18, "div", [["class", "quesnans"], ["gmeFaqToggle", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 8, "div", [["class", "question expandedLink"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onLinkClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 1, "div", [["class", "questionText"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["?"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 2, "div", [["class", "right"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](8, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpod"](9, { "openAnswer": 0, "closeAnswer": 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](12, 0, null, null, 5, "div", [["class", "answer"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](13, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpod"](14, { "hide": 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](16, 0, null, null, 1, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["."])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "right"; var currVal_2 = _ck(_v, 9, 0, _co.isCollapsed, !_co.isCollapsed); _ck(_v, 8, 0, currVal_1, currVal_2); var currVal_3 = "answer"; var currVal_4 = _ck(_v, 14, 0, _co.isCollapsed); _ck(_v, 13, 0, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.question; _ck(_v, 4, 0, currVal_0); var currVal_5 = _co.answer; _ck(_v, 16, 0, currVal_5); }); }
function View_FAQComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-faq", [], null, null, null, View_FAQComponent_0, RenderType_FAQComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__faq_component__["a" /* FAQComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FAQComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("gme-faq", __WEBPACK_IMPORTED_MODULE_2__faq_component__["a" /* FAQComponent */], View_FAQComponent_Host_0, { question: "question", answer: "answer" }, {}, []);



/***/ }),

/***/ "./src/app/customercare/faqs/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var FAQComponent = /** @class */ (function () {
    function FAQComponent() {
        this.isCollapsed = true;
    }
    FAQComponent.prototype.onLinkClick = function () {
        //console.log("this.collapsed:::"+this.isCollapsed)
        this.isCollapsed = !this.isCollapsed;
    };
    FAQComponent.prototype.ngOnInit = function () {
    };
    return FAQComponent;
}());



/***/ }),

/***/ "./src/app/customercare/faqs/faqs.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_FAQsComponent */
/* unused harmony export View_FAQsComponent_0 */
/* unused harmony export View_FAQsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loading_loading_component_ngfactory__ = __webpack_require__("./src/app/shared/loading/loading.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component__ = __webpack_require__("./src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_component_ngfactory__ = __webpack_require__("./src/app/customercare/faqs/faq.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_component__ = __webpack_require__("./src/app/customercare/faqs/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_error_error_component_ngfactory__ = __webpack_require__("./src/app/shared/error/error.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_error_error_component__ = __webpack_require__("./src/app/shared/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__faqs_component__ = __webpack_require__("./src/app/customercare/faqs/faqs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_shared_service__ = __webpack_require__("./src/app/_services/shared.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_FAQsComponent = [];
var RenderType_FAQsComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_FAQsComponent, data: {} });

function View_FAQsComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "loading-indicator", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__shared_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_loading_loading_component__["a" /* LoadingComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_FAQsComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 4, "div", [["class", "quesnanssection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 1, "gme-faq", [["gmeFaqToggle", ""]], null, null, null, __WEBPACK_IMPORTED_MODULE_3__faq_component_ngfactory__["b" /* View_FAQComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__faq_component_ngfactory__["a" /* RenderType_FAQComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](3, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__faq_component__["a" /* FAQComponent */], [], { question: [0, "question"], answer: [1, "answer"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.question; var currVal_1 = _v.context.$implicit.answer; _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_FAQsComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 0, "div", [["class", "subheader mT3P"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 0, "div", [["class", "greyBorder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_FAQsComponent_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](7, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.questions; _ck(_v, 7, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0); }); }
function View_FAQsComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 2, null, View_FAQsComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](3, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = (((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 3, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 4).transform(_co.faqs$))) == null) ? null : ((tmp_0_0.faqs == null) ? null : tmp_0_0.faqs.topics)); _ck(_v, 3, 0, currVal_0); }, null); }
function View_FAQsComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-error", [["errorMessage", "No FAQs Available."]], null, null, null, __WEBPACK_IMPORTED_MODULE_6__shared_error_error_component_ngfactory__["b" /* View_ErrorComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__shared_error_error_component_ngfactory__["a" /* RenderType_ErrorComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_7__shared_error_error_component__["a" /* ErrorComponent */], [], { errorMessage: [0, "errorMessage"] }, null)], function (_ck, _v) { var currVal_0 = "No FAQs Available."; _ck(_v, 1, 0, currVal_0); }, null); }
function View_FAQsComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 2, null, View_FAQsComponent_6)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = !(((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 3, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 4).transform(_co.faqs$))) == null) ? null : tmp_0_0.isLoading); _ck(_v, 3, 0, currVal_0); }, null); }
function View_FAQsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 21, "section", [["id", "contentWrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 18, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "pageHeader b"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["FAQs"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 2, null, View_FAQsComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 3, null, View_FAQsComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 3, null, View_FAQsComponent_5)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](17, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = (((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 8, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 9).transform(_co.faqs$))) == null) ? null : tmp_0_0.isLoading); _ck(_v, 8, 0, currVal_0); var tmp_1_0 = null; var currVal_1 = ((((tmp_1_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 12, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 13).transform(_co.faqs$))) == null) ? null : tmp_1_0.isLoadingSuccess) && ((((tmp_1_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 12, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 14).transform(_co.faqs$))) == null) ? null : ((tmp_1_0.faqs == null) ? null : ((tmp_1_0.faqs.topics == null) ? null : tmp_1_0.faqs.topics.length))) > 0)); _ck(_v, 12, 0, currVal_1); var tmp_2_0 = null; var currVal_2 = ((((tmp_2_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 17, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 18).transform(_co.faqs$))) == null) ? null : tmp_2_0.isLoadingSuccess) && !(((tmp_2_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 17, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 19).transform(_co.faqs$))) == null) ? null : ((tmp_2_0.faqs == null) ? null : tmp_2_0.faqs.topics))); _ck(_v, 17, 0, currVal_2); }, null); }
function View_FAQsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_FAQsComponent_0, RenderType_FAQsComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_8__faqs_component__["a" /* FAQsComponent */], [__WEBPACK_IMPORTED_MODULE_9__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_10__services_shared_service__["a" /* SharedService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FAQsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("ng-component", __WEBPACK_IMPORTED_MODULE_8__faqs_component__["a" /* FAQsComponent */], View_FAQsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/customercare/faqs/faqs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state_actions_cc__ = __webpack_require__("./src/app/app-state/actions/cc.ts");





var FAQsComponent = /** @class */ (function () {
    function FAQsComponent(store, sharedService) {
        this.store = store;
        this.sharedService = sharedService;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__app_state_actions_cc__["j" /* GetFAQs */]({ containerId: "GME_BMF_FAQ" }));
    }
    FAQsComponent.prototype.ngOnInit = function () {
        this.sharedService.setImage(true);
        this.faqs$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["o" /* getFAQs */]);
    };
    FAQsComponent.prototype.ngOnDestroy = function () {
        this.sharedService.setImage(false);
    };
    return FAQsComponent;
}());



/***/ }),

/***/ "./src/app/customercare/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__faqs_faqs_component__ = __webpack_require__("./src/app/customercare/faqs/faqs.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__faqs_faqs_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faqs_faq_component__ = __webpack_require__("./src/app/customercare/faqs/faq.component.ts");
/* unused harmony reexport FAQComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emailus_emailus_component__ = __webpack_require__("./src/app/customercare/emailus/emailus.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__emailus_emailus_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overview_component__ = __webpack_require__("./src/app/customercare/overview.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__overview_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emailus_emailus_confirm_component__ = __webpack_require__("./src/app/customercare/emailus/emailus.confirm.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__emailus_emailus_confirm_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_half__ = __webpack_require__("./src/app/customercare/layout.half.ts");
/* unused harmony reexport HalfLayout */








/***/ }),

/***/ "./src/app/customercare/layout.half.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HalfLayout */
var HalfLayout = /** @class */ (function () {
    function HalfLayout() {
    }
    return HalfLayout;
}());



/***/ }),

/***/ "./src/app/customercare/overview.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_OverviewComponent */
/* unused harmony export View_OverviewComponent_0 */
/* unused harmony export View_OverviewComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_message_sdlmessage_component_ngfactory__ = __webpack_require__("./src/app/shared/message/sdlmessage.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_message_sdlmessage_component__ = __webpack_require__("./src/app/shared/message/sdlmessage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("./src/app/_services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overview_component__ = __webpack_require__("./src/app/customercare/overview.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_OverviewComponent = [];
var RenderType_OverviewComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_OverviewComponent, data: {} });

function View_OverviewComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 13, "section", [["id", "contentWrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Customer Care"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n         "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](9, 0, null, null, 1, "sdl-message", [["key", "gmess_bmf_customer_care_overview_tctxt"]], null, null, null, __WEBPACK_IMPORTED_MODULE_1__shared_message_sdlmessage_component_ngfactory__["b" /* View_SDLMessageComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_message_sdlmessage_component_ngfactory__["a" /* RenderType_SDLMessageComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](10, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_message_sdlmessage_component__["a" /* SDLMessageComponent */], [__WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]], { key: [0, "key"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_0 = "gmess_bmf_customer_care_overview_tctxt"; _ck(_v, 10, 0, currVal_0); }, null); }
function View_OverviewComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_OverviewComponent_0, RenderType_OverviewComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__overview_component__["a" /* OverviewComponent */], [], null, null)], null, null); }
var OverviewComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("ng-component", __WEBPACK_IMPORTED_MODULE_4__overview_component__["a" /* OverviewComponent */], View_OverviewComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/customercare/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    return OverviewComponent;
}());



/***/ })

});
//# sourceMappingURL=cc.module.chunk.js.map