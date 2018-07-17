webpackJsonp(["monitoring.module"],{

/***/ "./src/app/_directives/onlynumbers.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyNumbersDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes__ = __webpack_require__("./src/app/_pipes/index.ts");


var OnlyNumbersDirective = /** @class */ (function () {
    function OnlyNumbersDirective(elementRef) {
        this.elementRef = elementRef;
        this.onlyNumbersPipe = new __WEBPACK_IMPORTED_MODULE_1__pipes__["b" /* OnlyNumbersPipe */]();
        this.el = this.elementRef.nativeElement;
    }
    OnlyNumbersDirective.prototype.ngOnInit = function () {
        this.el.value = this.onlyNumbersPipe.transform(this.el.value);
    };
    OnlyNumbersDirective.prototype.onFocus = function (value) {
        this.el.value = this.onlyNumbersPipe.transform(value);
        //this.el.value = this.onlyNumbersPipe.parse(value); // opossite of transform
    };
    OnlyNumbersDirective.prototype.onBlur = function (value) {
        this.el.value = this.onlyNumbersPipe.transform(value);
    };
    return OnlyNumbersDirective;
}());



/***/ }),

/***/ "./src/app/app-state/effects/vum.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VUMEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_vum_service__ = __webpack_require__("./src/app/_services/vum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_vum__ = __webpack_require__("./src/app/app-state/actions/vum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VUMEffects = /** @class */ (function () {
    function VUMEffects(action$, vumService) {
        var _this = this;
        this.action$ = action$;
        this.vumService = vumService;
        this.vacantDailyReportEffects$ = this.action$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_vum__["a" /* GET_VACANT_DAILY_REPORT */])
            .map(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) { return _this.vumService.getVacantDailyReport(payload)
            .map(function (dailyReport) {
            return new __WEBPACK_IMPORTED_MODULE_7__actions_vum__["f" /* GetVacantDailyReportSuccess */](dailyReport);
        }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_vum__["e" /* GetVacantDailyReportFailure */]({})); });
        this.vumESIIDUpdateEffects$ = this.action$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_vum__["j" /* UPDATE_ESIID_ATTRIBUTE */])
            .map(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) { return _this.vumService.updateESIIDAttribute(payload)
            .map(function (dailyReport) {
            return new __WEBPACK_IMPORTED_MODULE_7__actions_vum__["o" /* UpdateESIIDAttributeSuccess */](dailyReport);
        }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_vum__["n" /* UpdateESIIDAttributeFailure */]({})); });
        this.vumEmailPreferenceEffects$ = this.action$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_vum__["g" /* UPDATE_EMAIL_PREFERENCE */])
            .map(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) { return _this.vumService.updateEmailPreference(payload)
            .map(function (result) {
            return new __WEBPACK_IMPORTED_MODULE_7__actions_vum__["r" /* UpdateEmailPreferenceSuccess */](result);
        }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_vum__["q" /* UpdateEmailPreferenceFailure */]({})); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], VUMEffects.prototype, "vacantDailyReportEffects$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], VUMEffects.prototype, "vumESIIDUpdateEffects$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], VUMEffects.prototype, "vumEmailPreferenceEffects$", void 0);
    return VUMEffects;
}());



/***/ }),

/***/ "./src/app/monitoring/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vumalertsetup_alertsetup_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/alertsetup.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vumalertsetup_alertsetup_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vumdailyreport_dailyreport_component__ = __webpack_require__("./src/app/monitoring/vumdailyreport/dailyreport.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__vumdailyreport_dailyreport_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vumdailyreport_findunits_component__ = __webpack_require__("./src/app/monitoring/vumdailyreport/findunits.component.ts");
/* unused harmony reexport FindUnitsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vumdailyreport_table_component__ = __webpack_require__("./src/app/monitoring/vumdailyreport/table.component.ts");
/* unused harmony reexport DailyReportTableComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vumalertsetup_emailsetup_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/emailsetup.component.ts");
/* unused harmony reexport EmailSetupComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vumalertsetup_setthreshold_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/setthreshold.component.ts");
/* unused harmony reexport SetThresholdComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vumalertsetup_managethreshold_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/managethreshold.component.ts");
/* unused harmony reexport ManageThresholdComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vumalertsetup_email_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/email.component.ts");
/* unused harmony reexport EmailComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vumalertsetup_editmodal_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/editmodal.component.ts");
/* unused harmony reexport SingleEditModalComponent */











/***/ }),

/***/ "./src/app/monitoring/monitoring-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitoringRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./src/app/monitoring/index.ts");


var routes = [
    { path: 'alertsetup.htm', component: __WEBPACK_IMPORTED_MODULE_1__index__["a" /* VacantUnitAlertSetupComponent */] },
    { path: 'dailyreport.htm', component: __WEBPACK_IMPORTED_MODULE_1__index__["b" /* VacantUnitDailyReportComponent */] }
];
var MonitoringRoutingModule = /** @class */ (function () {
    function MonitoringRoutingModule() {
    }
    return MonitoringRoutingModule;
}());



/***/ }),

/***/ "./src/app/monitoring/monitoring.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringModuleNgFactory", function() { return MonitoringModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monitoring_module__ = __webpack_require__("./src/app/monitoring/monitoring.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vumalertsetup_alertsetup_component_ngfactory__ = __webpack_require__("./src/app/monitoring/vumalertsetup/alertsetup.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vumdailyreport_dailyreport_component_ngfactory__ = __webpack_require__("./src/app/monitoring/vumdailyreport/dailyreport.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_page_service__ = __webpack_require__("./src/app/_services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_csv_service__ = __webpack_require__("./src/app/_services/csv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__monitoring_routing_module__ = __webpack_require__("./src/app/monitoring/monitoring-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_vum_service__ = __webpack_require__("./src/app/_services/vum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_state_effects_vum_effects__ = __webpack_require__("./src/app/app-state/effects/vum.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vumalertsetup_alertsetup_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/alertsetup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__vumdailyreport_dailyreport_component__ = __webpack_require__("./src/app/monitoring/vumdailyreport/dailyreport.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var MonitoringModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__monitoring_module__["a" /* MonitoringModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_2__vumalertsetup_alertsetup_component_ngfactory__["a" /* VacantUnitAlertSetupComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_3__vumdailyreport_dailyreport_component_ngfactory__["a" /* VacantUnitDailyReportComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_4__angular_common__["m" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["l" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_common__["q" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["y" /* ɵi */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["y" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */], __WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_7__services_page_service__["a" /* PagerService */], __WEBPACK_IMPORTED_MODULE_7__services_page_service__["a" /* PagerService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_8__services_csv_service__["a" /* CSVService */], __WEBPACK_IMPORTED_MODULE_8__services_csv_service__["a" /* CSVService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* HttpModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["w" /* ɵba */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["w" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_10__angular_router__["o" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_10__angular_router__["o" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_10__angular_router__["u" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_10__angular_router__["m" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["t" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["t" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__monitoring_routing_module__["a" /* MonitoringRoutingModule */], __WEBPACK_IMPORTED_MODULE_12__monitoring_routing_module__["a" /* MonitoringRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["i" /* ɵg */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["f" /* ɵb */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["j" /* ɵh */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["j" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["i" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectSources */], [__WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["j" /* ɵh */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["k" /* ɵi */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["k" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["a" /* Actions */], [__WEBPACK_IMPORTED_MODULE_14__ngrx_store__["j" /* ScannedActionsSubject */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* BrowserXhr */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_http__["h" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* BaseResponseOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_9__angular_http__["j" /* XSRFStrategy */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["k" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_http__["i" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["i" /* XHRBackend */], [__WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["h" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["j" /* XSRFStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_http__["g" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* BaseRequestOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["l" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_9__angular_http__["i" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["g" /* RequestOptions */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__services_vum_service__["a" /* VUMService */], __WEBPACK_IMPORTED_MODULE_15__services_vum_service__["a" /* VUMService */], [__WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__app_state_effects_vum_effects__["a" /* VUMEffects */], __WEBPACK_IMPORTED_MODULE_16__app_state_effects_vum_effects__["a" /* VUMEffects */], [__WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_15__services_vum_service__["a" /* VUMService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["h" /* ɵe */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["e" /* ɵa */], [__WEBPACK_IMPORTED_MODULE_16__app_state_effects_vum_effects__["a" /* VUMEffects */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["g" /* ɵc */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["g" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["k" /* ɵi */], __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["h" /* ɵe */], [2, __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["n" /* StoreModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__monitoring_module__["a" /* MonitoringModule */], __WEBPACK_IMPORTED_MODULE_1__monitoring_module__["a" /* MonitoringModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_10__angular_router__["k" /* ROUTES */], function () { return [[{ path: "alertsetup.htm", component: __WEBPACK_IMPORTED_MODULE_17__vumalertsetup_alertsetup_component__["a" /* VacantUnitAlertSetupComponent */] }, { path: "dailyreport.htm", component: __WEBPACK_IMPORTED_MODULE_18__vumdailyreport_dailyreport_component__["a" /* VacantUnitDailyReportComponent */] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/monitoring/monitoring.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitoringModule; });
var MonitoringModule = /** @class */ (function () {
    function MonitoringModule() {
    }
    return MonitoringModule;
}());



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/alertsetup.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_VacantUnitAlertSetupComponent */
/* unused harmony export View_VacantUnitAlertSetupComponent_0 */
/* unused harmony export View_VacantUnitAlertSetupComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacantUnitAlertSetupComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setthreshold_component_ngfactory__ = __webpack_require__("./src/app/monitoring/vumalertsetup/setthreshold.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setthreshold_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/setthreshold.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__managethreshold_component_ngfactory__ = __webpack_require__("./src/app/monitoring/vumalertsetup/managethreshold.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__managethreshold_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/managethreshold.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_modal_service__ = __webpack_require__("./src/app/_services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_error_error_component_ngfactory__ = __webpack_require__("./src/app/shared/error/error.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_error_error_component__ = __webpack_require__("./src/app/shared/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__emailsetup_component_ngfactory__ = __webpack_require__("./src/app/monitoring/vumalertsetup/emailsetup.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__emailsetup_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/emailsetup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_loading_loading_component_ngfactory__ = __webpack_require__("./src/app/shared/loading/loading.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_loading_loading_component__ = __webpack_require__("./src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__alertsetup_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/alertsetup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_vum_service__ = __webpack_require__("./src/app/_services/vum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_VacantUnitAlertSetupComponent = ["vum-email-setup[_ngcontent-%COMP%]{margin-bottom: 100px;}"];
var RenderType_VacantUnitAlertSetupComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_VacantUnitAlertSetupComponent, data: {} });

function View_VacantUnitAlertSetupComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 1, "vum-set-threshold", [], null, [[null, "applyToAllEvnt"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("applyToAllEvnt" === en)) {
        var pd_0 = (_co.applyToAll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__setthreshold_component_ngfactory__["b" /* View_SetThresholdComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__setthreshold_component_ngfactory__["a" /* RenderType_SetThresholdComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](3, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__setthreshold_component__["a" /* SetThresholdComponent */], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]], null, { applyToAllEvnt: "applyToAllEvnt" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 2, "vum-manage-threshold", [], null, [[null, "updateVUMESIIDAttribute"], [null, "updateVUMESIIDAttributes"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("updateVUMESIIDAttribute" === en)) {
        var pd_0 = (_co.updateVUMESIIDAttribute($event) !== false);
        ad = (pd_0 && ad);
    } if (("updateVUMESIIDAttributes" === en)) {
        var pd_1 = (_co.updateVUMESIIDAttributes($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_4__managethreshold_component_ngfactory__["b" /* View_ManageThresholdComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__managethreshold_component_ngfactory__["a" /* RenderType_ManageThresholdComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_5__managethreshold_component__["a" /* ManageThresholdComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { unitList: [0, "unitList"], updateStatus: [1, "updateStatus"] }, { updateVUMESIIDAttribute: "updateVUMESIIDAttribute", updateVUMESIIDAttributes: "updateVUMESIIDAttributes" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); var currVal_0 = ((_co.vumData == null) ? null : _co.vumData.unitList); var currVal_1 = _co.updateStatus; _ck(_v, 6, 0, currVal_0, currVal_1); }, null); }
function View_VacantUnitAlertSetupComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 1, "gme-error", [["errorMessage", "There are no units found for this property."]], null, null, null, __WEBPACK_IMPORTED_MODULE_8__shared_error_error_component_ngfactory__["b" /* View_ErrorComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_error_error_component_ngfactory__["a" /* RenderType_ErrorComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](2, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_error_error_component__["a" /* ErrorComponent */], [], { errorMessage: [0, "errorMessage"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"]))], function (_ck, _v) { var currVal_0 = "There are no units found for this property."; _ck(_v, 2, 0, currVal_0); }, null); }
function View_VacantUnitAlertSetupComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 13, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Vacant Unit Alert Set Up"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 2, "vum-email-setup", [], null, [[null, "emailPrefEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("emailPrefEvent" === en)) {
        var pd_0 = (_co.updateEmailPreference($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_10__emailsetup_component_ngfactory__["b" /* View_EmailSetupComponent_0 */], __WEBPACK_IMPORTED_MODULE_10__emailsetup_component_ngfactory__["a" /* RenderType_EmailSetupComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_11__emailsetup_component__["a" /* EmailSetupComponent */], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]], { vumEmail: [0, "vumEmail"], status: [1, "status"], message: [2, "message"] }, { emailPrefEvent: "emailPrefEvent" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_VacantUnitAlertSetupComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](0, [["showError", 2]], null, 0, null, View_VacantUnitAlertSetupComponent_3)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\n\t"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.vumData == null) ? null : _co.vumData.vumEmail); var currVal_1 = _co.updateEmailStatus; var currVal_2 = _co.statusMessage; _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = (((_co.vumData == null) ? null : ((_co.vumData.unitList == null) ? null : _co.vumData.unitList.length)) > 0); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 12); _ck(_v, 10, 0, currVal_3, currVal_4); }, null); }
function View_VacantUnitAlertSetupComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 1, "loading-indicator", [], null, null, null, __WEBPACK_IMPORTED_MODULE_13__shared_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_13__shared_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](2, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_14__shared_loading_loading_component__["a" /* LoadingComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t"]))], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_VacantUnitAlertSetupComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 6, "section", [["id", "contentWrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_VacantUnitAlertSetupComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](0, [["loaing", 2]], null, 0, null, View_VacantUnitAlertSetupComponent_4)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.vumData == null) ? null : _co.vumData.vumEmail); var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 5); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_VacantUnitAlertSetupComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_VacantUnitAlertSetupComponent_0, RenderType_VacantUnitAlertSetupComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_15__alertsetup_component__["a" /* VacantUnitAlertSetupComponent */], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_16__services_vum_service__["a" /* VUMService */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VacantUnitAlertSetupComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("ng-component", __WEBPACK_IMPORTED_MODULE_15__alertsetup_component__["a" /* VacantUnitAlertSetupComponent */], View_VacantUnitAlertSetupComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/alertsetup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacantUnitAlertSetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vum_service__ = __webpack_require__("./src/app/_services/vum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_state_actions_vum__ = __webpack_require__("./src/app/app-state/actions/vum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);










var VacantUnitAlertSetupComponent = /** @class */ (function () {
    function VacantUnitAlertSetupComponent(route, vumService, store) {
        var _this = this;
        this.route = route;
        this.vumService = vumService;
        this.store = store;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["b" /* Subject */]();
        this.emailDestroy$ = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["b" /* Subject */]();
        __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["a" /* Observable */].combineLatest(store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["H" /* getRelationshipId */]), store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["P" /* getSelectedpropertyName */]))
            .takeUntil(this.destroy$)
            .subscribe(function (result) {
            _this.relationshipId = result[0];
            _this.propertyName = result[1];
        });
    }
    VacantUnitAlertSetupComponent.prototype.applyToAll = function (applyAllObj) {
        var _this = this;
        var unitList = this.vumData.unitList;
        unitList.forEach(function (unit) {
            if (unit.unitType == "1")
                unit.unitThreshold = ("" != applyAllObj.bed1Threshold) ? applyAllObj.bed1Threshold : unit.unitThreshold;
            if (unit.unitType == "2")
                unit.unitThreshold = ("" != applyAllObj.bed2Threshold) ? applyAllObj.bed2Threshold : unit.unitThreshold;
            if (unit.unitType == "3")
                unit.unitThreshold = ("" != applyAllObj.bed3Threshold) ? applyAllObj.bed3Threshold : unit.unitThreshold;
            if (unit.unitType == "0")
                unit.unitThreshold = ("" != applyAllObj.otherThreshold) ? applyAllObj.otherThreshold : unit.unitThreshold;
        });
        var inData = { unitList: unitList, propertyName: this.propertyName };
        this.vumService.updateESIIDAttribute(inData).subscribe(function (data) {
            _this.vumData.unitList = unitList;
        });
    };
    VacantUnitAlertSetupComponent.prototype.updateEmailPreference = function (emailObj) {
        var _this = this;
        //console.log('emailObj.vumEmailStatus::::'+emailObj.vumEmailStatus)
        var emailFlag = emailObj.vumEmailStatus ? 'Y' : 'N';
        var propertyName = this.propertyName;
        var relationshipId = this.relationshipId;
        var email1 = emailObj.email1;
        var email2 = emailObj.email2;
        var updateType = emailObj.updateType;
        var inData = { emailFlag: emailFlag, propertyName: propertyName, relationshipId: relationshipId, email1: email1, email2: email2, updateType: updateType };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_state_actions_vum__["p" /* UpdateEmailPreference */](inData));
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["W" /* getUpdateEmailPreferenceStatus */])
            .takeUntil(this.destroy$)
            .subscribe(function (data) {
            if (data.isLoadingSuccess) {
                _this.updateEmailStatus = data.status.status;
                _this.statusMessage = data.status.status ? "Updated Email Preference Successfully." : "Update email preference failed. Please try again.";
            }
            else {
                _this.updateEmailStatus = undefined;
            }
        });
    };
    VacantUnitAlertSetupComponent.prototype.afterEmailPreferenceUpdate = function () {
        this.emailDestroy$.next(true);
    };
    VacantUnitAlertSetupComponent.prototype.updateVUMESIIDAttribute = function (unit) {
        var _this = this;
        var unitList = [];
        unitList.push(unit);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_state_actions_vum__["m" /* UpdateESIIDAttribute */]({ unitList: unitList, propertyName: this.propertyName }));
        this.updateStatus = undefined;
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["V" /* getUpdateESIIDAttributeSatatus */]).takeUntil(this.destroy$).subscribe(function (resp) {
            if (resp.isLoadingSuccess) {
                if (resp.status.status) {
                    _this.updateStatus = resp.status.status;
                    var unitList_1 = _this.vumData.unitList;
                    unitList_1.forEach(function (u) {
                        if (u.unitNumber == unit.unitNumber) {
                            u.unitThreshold = unit.unitThreshold;
                            u.unitType = unit.unitType;
                        }
                    });
                    _this.vumData.unitList = unitList_1;
                }
                else {
                    _this.updateStatus = false;
                }
            }
        });
    };
    VacantUnitAlertSetupComponent.prototype.updateVUMESIIDAttributes = function (inUnitList) {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_state_actions_vum__["m" /* UpdateESIIDAttribute */]({ unitList: inUnitList, propertyName: this.propertyName }));
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["V" /* getUpdateESIIDAttributeSatatus */]).takeUntil(this.destroy$).subscribe(function (resp) {
            if (resp.isLoadingSuccess && resp.status.status) {
                _this.updateStatus = resp.status.status;
                var unitList = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](_this.vumData.unitList);
                unitList.forEach(function (u) {
                    inUnitList.forEach(function (unit) {
                        if (u.unitNumber == unit.unitNumber) {
                            u.unitThreshold = unit.unitThreshold;
                            u.unitType = unit.unitType;
                        }
                    });
                });
                _this.vumData.unitList = unitList;
            }
            else {
                _this.updateStatus = false;
            }
        });
    };
    VacantUnitAlertSetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["l" /* getESIIDList */]).takeUntil(this.destroy$).subscribe(function (result) {
            ////console.log("ESIID LENGTH SENDING TO START SERVICE LIST:::::"+esiidList.length);
            if (undefined == result.esiidList || result.esiidList.length == 0) {
                _this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_state_reducers__["z" /* getNONCAARealBPList */]).takeUntil(_this.destroy$).subscribe(function (bpNumberList) {
                    //console.log("ESIID LENGTH SENDING TO START SERVICE LIST:::::"+bpNumberList.length);
                    _this.vumService.getVacantDataSetup({ bpNumberList: bpNumberList, relationshipId: _this.relationshipId }).subscribe(function (data) {
                        _this.vumData = data;
                    });
                });
            }
            else {
                _this.vumService.getVacantDataSetup({ esiidList: result.esiidList, relationshipId: _this.relationshipId }).subscribe(function (data) {
                    _this.vumData = data;
                });
            }
        });
    };
    VacantUnitAlertSetupComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    return VacantUnitAlertSetupComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/editmodal.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_SingleEditModalComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_SingleEditModalComponent_0;
/* unused harmony export View_SingleEditModalComponent_Host_0 */
/* unused harmony export SingleEditModalComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_error_error_component_ngfactory__ = __webpack_require__("./src/app/shared/error/error.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_error_error_component__ = __webpack_require__("./src/app/shared/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dialog_modal_component_ngfactory__ = __webpack_require__("./src/app/shared/dialog/modal.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_dialog_modal_component__ = __webpack_require__("./src/app/shared/dialog/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_modal_service__ = __webpack_require__("./src/app/_services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_onlynumbers_directive__ = __webpack_require__("./src/app/_directives/onlynumbers.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editmodal_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/editmodal.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_SingleEditModalComponent = ["#errordiv[_ngcontent-%COMP%]:{width:90%;}"];
var RenderType_SingleEditModalComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_SingleEditModalComponent, data: {} });

function View_SingleEditModalComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-error", [["errorMessage", "Unit Threshold should not be empty."]], null, null, null, __WEBPACK_IMPORTED_MODULE_1__shared_error_error_component_ngfactory__["b" /* View_ErrorComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_error_error_component_ngfactory__["a" /* RenderType_ErrorComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_error_error_component__["a" /* ErrorComponent */], [], { errorMessage: [0, "errorMessage"] }, null)], function (_ck, _v) { var currVal_0 = "Unit Threshold should not be empty."; _ck(_v, 1, 0, currVal_0); }, null); }
function View_SingleEditModalComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](402653184, 1, { unitType: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](402653184, 2, { unitThreshold: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 96, "gme-modal", [["id", "single-edit-vum-modal"]], null, null, null, __WEBPACK_IMPORTED_MODULE_3__shared_dialog_modal_component_ngfactory__["b" /* View_ModalComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__shared_dialog_modal_component_ngfactory__["a" /* RenderType_ModalComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](3, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_dialog_modal_component__["a" /* ModalComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]], { id: [0, "id"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, 0, 1, null, View_SingleEditModalComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](8, 0, null, 0, 1, "h1", [["class", "b"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Update Vacant Unit Alert Thresholds"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](11, 0, null, 0, 12, "div", [["class", "infoHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](13, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](15, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Service Address"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](18, 0, null, null, 3, "div", [["class", "data"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](19, null, ["", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](20, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](21, null, ["", ", ", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](25, 0, null, 0, 10, "div", [["class", "infoHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](27, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](29, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["ESIID"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](32, 0, null, null, 1, "div", [["class", "data"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](33, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](37, 0, null, 0, 10, "div", [["class", "infoHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](39, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](41, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Unit Number"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](44, 0, null, null, 1, "div", [["class", "data"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](45, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](49, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["You can setup a threshold amount for this unit below. If a unit type exceeds the threshold you specified, it will appear in the daily Vacant Unit Alert report and email"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](52, 0, null, 0, 27, "div", [["class", "inlineBlock"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](54, 0, null, null, 1, "label", [["class", "label"], ["for", "searchBy"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Unit Type"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](57, 0, [[1, 0], ["unitType", 1]], null, 21, "select", [["id", "searchBy"], ["name", "searchBy"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](59, 0, null, null, 3, "option", [["value", "1"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](60, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](61, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["1 Bedroom"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](64, 0, null, null, 3, "option", [["value", "2"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](65, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](66, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["2 Bedroom"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](69, 0, null, null, 3, "option", [["value", "3"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](70, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](71, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["3 Bedroom"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](74, 0, null, null, 3, "option", [["value", "0"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](75, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](76, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Others"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](81, 0, null, 0, 7, "div", [["class", "inlineBlock right"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](83, 0, null, null, 1, "label", [["class", "label"], ["for", "searchBy"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Unit Threshold"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](86, 0, [[2, 0], ["unitThreshold", 1]], null, 1, "input", [["class", "unitBox"], ["maxlength", "4"], ["name", "unitThreshold"], ["onlynumbers", ""], ["type", "textbox"]], [[8, "value", 0]], [[null, "input"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 87).onFocus($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 87).onBlur($event.target.value) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](87, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_8__directives_onlynumbers_directive__["a" /* OnlyNumbersDirective */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["kWh\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](90, 0, null, 0, 7, "div", [["class", "text-right"], ["id", "buttonHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](92, 0, null, null, 1, "button", [["class", "black"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCancel("single-edit-vum-modal") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Cancel"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](95, 0, null, null, 1, "button", [["class", "blue"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onUpdate("single-edit-vum-modal") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Update"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "single-edit-vum-modal"; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.isError; _ck(_v, 6, 0, currVal_1); var currVal_9 = "1"; _ck(_v, 60, 0, currVal_9); var currVal_10 = "1"; _ck(_v, 61, 0, currVal_10); var currVal_11 = "2"; _ck(_v, 65, 0, currVal_11); var currVal_12 = "2"; _ck(_v, 66, 0, currVal_12); var currVal_13 = "3"; _ck(_v, 70, 0, currVal_13); var currVal_14 = "3"; _ck(_v, 71, 0, currVal_14); var currVal_15 = "0"; _ck(_v, 75, 0, currVal_15); var currVal_16 = "0"; _ck(_v, 76, 0, currVal_16); _ck(_v, 87, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.unit == null) ? null : _co.unit.streetNum); var currVal_3 = ((_co.unit == null) ? null : _co.unit.streetName); _ck(_v, 19, 0, currVal_2, currVal_3); var currVal_4 = ((_co.unit == null) ? null : _co.unit.city); var currVal_5 = ((_co.unit == null) ? null : _co.unit.state); var currVal_6 = ((_co.unit == null) ? null : _co.unit.zipcode); _ck(_v, 21, 0, currVal_4, currVal_5, currVal_6); var currVal_7 = ((_co.unit == null) ? null : _co.unit.esiid); _ck(_v, 33, 0, currVal_7); var currVal_8 = ((_co.unit == null) ? null : _co.unit.unitNumber); _ck(_v, 45, 0, currVal_8); var currVal_17 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵinlineInterpolate"](1, "", ((_co.unit == null) ? null : _co.unit.unitThreshold), ""); _ck(_v, 86, 0, currVal_17); }); }
function View_SingleEditModalComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "vum-edit-modal", [], null, null, null, View_SingleEditModalComponent_0, RenderType_SingleEditModalComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_9__editmodal_component__["a" /* SingleEditModalComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_modal_service__["a" /* ModalService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SingleEditModalComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("vum-edit-modal", __WEBPACK_IMPORTED_MODULE_9__editmodal_component__["a" /* SingleEditModalComponent */], View_SingleEditModalComponent_Host_0, { unit: "unit" }, { esiidAttrUpdate: "esiidAttrUpdate" }, []);



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/editmodal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleEditModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");


var SingleEditModalComponent = /** @class */ (function () {
    function SingleEditModalComponent(modalService) {
        this.modalService = modalService;
        this.esiidAttrUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isError = false;
    }
    SingleEditModalComponent.prototype.onUpdate = function (id) {
        var unit = Object.assign({}, this.unit);
        unit.unitThreshold = this.unitThreshold.nativeElement.value;
        unit.unitType = this.unitType.nativeElement.value;
        if (unit.unitThreshold != "" && unit.unitThreshold != undefined) {
            this.isError = false;
            this.esiidAttrUpdate.emit(unit);
            this.modalService.close(id);
        }
        else {
            this.isError = true;
        }
    };
    SingleEditModalComponent.prototype.onCancel = function (id) {
        this.modalService.close(id);
        this.esiidAttrUpdate.emit('cancel');
        this.isError = false;
    };
    SingleEditModalComponent.prototype.ngOnChanges = function (changes) {
        if (changes["unit"]) {
            if (undefined != this.unit) {
                this.unitType.nativeElement.value = this.unit.unitType;
                this.unitThreshold.nativeElement.value = this.unit.unitThreshold;
            }
        }
    };
    SingleEditModalComponent.prototype.ngOnInit = function () {
        this.unit = Object.assign({}, this.unit);
    };
    return SingleEditModalComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/email.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["a.disabled[_ngcontent-%COMP%] {\r\n   pointer-events: none;\r\n   cursor: not-allowed;\r\n}\r\n\r\n.extrspace[_ngcontent-%COMP%]{\r\n    min-width:300px;\r\n    display: inline-block;\r\n}"];



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/email.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_EmailComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_EmailComponent_0;
/* unused harmony export View_EmailComponent_Host_0 */
/* unused harmony export EmailComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__email_component_css_shim_ngstyle__ = __webpack_require__("./src/app/monitoring/vumalertsetup/email.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_commonutils_pipe__ = __webpack_require__("./src/app/_pipes/commonutils.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_EmailComponent = [__WEBPACK_IMPORTED_MODULE_0__email_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_EmailComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_EmailComponent, data: {} });

function View_EmailComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_2__pipes_commonutils_pipe__["d" /* NotProvidedPipe */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](402653184, 1, { email1Ref: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 11, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "label", [["for", "alertSetEmail1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](5, null, ["Email ", ":"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 2, "div", [["class", "extrspace"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](8, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](9, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "a", [["class", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEmailEdit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Edit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](15, 0, null, null, 12, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 1, "label", [["for", "alertSetEmail1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](18, null, ["Email ", ":"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, [[1, 0], ["email", 1]], null, 0, "input", [["name", "alertSetEmail1"], ["type", "text"]], [[8, "value", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 1, "a", [["class", "button black textBoxButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEmailCancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Cancel"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](25, 0, null, null, 1, "a", [["class", "button blue textBoxButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEmailSave() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Save"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "mT1P ", (_co.editing ? "hide" : ""), ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.index; _ck(_v, 5, 0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 0), _co.inEmail)); _ck(_v, 8, 0, currVal_2); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "mT1P ", (_co.editing ? "" : "hide"), ""); _ck(_v, 15, 0, currVal_3); var currVal_4 = _co.index; _ck(_v, 18, 0, currVal_4); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", _co.inEmail, ""); _ck(_v, 20, 0, currVal_5); }); }
function View_EmailComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "vum-email", [], null, null, null, View_EmailComponent_0, RenderType_EmailComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__email_component__["a" /* EmailComponent */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmailComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("vum-email", __WEBPACK_IMPORTED_MODULE_3__email_component__["a" /* EmailComponent */], View_EmailComponent_Host_0, { inEmail: "inEmail", index: "index" }, { emailOut: "emailOut" }, []);



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");


var EmailComponent = /** @class */ (function () {
    function EmailComponent(route) {
        this.route = route;
        this.emailOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.editing = false;
    }
    EmailComponent.prototype.onEmailEdit = function () {
        this.editing = true;
    };
    EmailComponent.prototype.onEmailCancel = function () {
        this.editing = false;
    };
    EmailComponent.prototype.onEmailSave = function () {
        this.editing = false;
        this.inEmail = this.email1Ref.nativeElement.value;
        var outObj = this.index == "1" ? { index: this.index, email1: this.inEmail } : { index: this.index, email2: this.inEmail };
        this.emailOut.emit(outObj);
    };
    EmailComponent.prototype.ngOnInit = function () {
        //console.log('index:::::::'+this.index)
    };
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/emailsetup.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".btndisabled[_ngcontent-%COMP%] {\r\n    background-color: grey;\r\n    border-bottom: 5px solid grey;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.mrgbtm30[_ngcontent-%COMP%]{\r\n    margin-bottom: 30px;\r\n}"];



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/emailsetup.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_EmailSetupComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_EmailSetupComponent_0;
/* unused harmony export View_EmailSetupComponent_Host_0 */
/* unused harmony export EmailSetupComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emailsetup_component_css_shim_ngstyle__ = __webpack_require__("./src/app/monitoring/vumalertsetup/emailsetup.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_statusbox_statusbox_component_ngfactory__ = __webpack_require__("./src/app/shared/statusbox/statusbox.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_statusbox_statusbox_component__ = __webpack_require__("./src/app/shared/statusbox/statusbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__email_component_ngfactory__ = __webpack_require__("./src/app/monitoring/vumalertsetup/email.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__emailsetup_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/emailsetup.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_EmailSetupComponent = [__WEBPACK_IMPORTED_MODULE_0__emailsetup_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_EmailSetupComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_EmailSetupComponent, data: {} });

function View_EmailSetupComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "gme-status-box", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__shared_statusbox_statusbox_component_ngfactory__["b" /* View_StatusBoxComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_statusbox_statusbox_component_ngfactory__["a" /* RenderType_StatusBoxComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_statusbox_statusbox_component__["a" /* StatusBoxComponent */], [], { message: [0, "message"], isSuccess: [1, "isSuccess"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.message; var currVal_1 = _co.status; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_EmailSetupComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_EmailSetupComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 28, "div", [["class", "mT3P mrgbtm30"], ["id", "vaccantUnitEmailSection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 1, "h2", [["class", "subheader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Vacant Unit Monitor Set up"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 8, "div", [["class", "mT1P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 0, "input", [["id", "setEmailAlert"], ["name", "setEmailAlert"], ["type", "checkbox"], ["value", "setEmailAlert"]], [[8, "checked", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onRecieveCheckBox($event.target) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 3, "label", [["class", "checkbox-inline"], ["for", "setEmailAlert"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 0, "span", [["class", "gmeCheckbox"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      I would like to receive the Vacant Unit Monitor Email at the following email addresses:\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 1, "vum-email", [["index", "1"]], null, [[null, "emailOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("emailOut" === en)) {
        var pd_0 = (_co.emailUpdated($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_5__email_component_ngfactory__["b" /* View_EmailComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__email_component_ngfactory__["a" /* RenderType_EmailComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_6__email_component__["a" /* EmailComponent */], [__WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]], { inEmail: [0, "inEmail"], index: [1, "index"] }, { emailOut: "emailOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 1, "vum-email", [["index", "2"]], null, [[null, "emailOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("emailOut" === en)) {
        var pd_0 = (_co.emailUpdated($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_5__email_component_ngfactory__["b" /* View_EmailComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__email_component_ngfactory__["a" /* RenderType_EmailComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_6__email_component__["a" /* EmailComponent */], [__WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]], { inEmail: [0, "inEmail"], index: [1, "index"] }, { emailOut: "emailOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, null, 6, "div", [["class", "mT1P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 3, "button", [["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onConfirm() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](27, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](28, { "btndisabled": 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Confirm"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.status; _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.vumEmail.email1; var currVal_3 = "1"; _ck(_v, 19, 0, currVal_2, currVal_3); var currVal_4 = _co.vumEmail.email2; var currVal_5 = "2"; _ck(_v, 22, 0, currVal_4, currVal_5); var currVal_7 = _ck(_v, 28, 0, !_co.btndisabled); _ck(_v, 27, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.vumEmailStatus; _ck(_v, 10, 0, currVal_1); var currVal_6 = !_co.btndisabled; _ck(_v, 26, 0, currVal_6); }); }
function View_EmailSetupComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "vum-email-setup", [], null, null, null, View_EmailSetupComponent_0, RenderType_EmailSetupComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_8__emailsetup_component__["a" /* EmailSetupComponent */], [__WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmailSetupComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("vum-email-setup", __WEBPACK_IMPORTED_MODULE_8__emailsetup_component__["a" /* EmailSetupComponent */], View_EmailSetupComponent_Host_0, { vumEmail: "vumEmail", status: "status", message: "message" }, { emailPrefEvent: "emailPrefEvent" }, []);



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/emailsetup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailSetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");


var EmailSetupComponent = /** @class */ (function () {
    function EmailSetupComponent(route) {
        this.route = route;
        this.emailPrefEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.btndisabled = false;
    }
    EmailSetupComponent.prototype.onRecieveCheckBox = function (eventTarget) {
        this.vumEmailStatus = eventTarget.checked;
        this.status = false;
        this.btndisabled = !this.btndisabled;
    };
    EmailSetupComponent.prototype.onConfirm = function () {
        var obj = { email1: this.updatedEmail1, email2: this.updatedEmail2, updateType: "EP", vumEmailStatus: this.vumEmailStatus };
        this.emailPrefEvent.emit(obj);
    };
    EmailSetupComponent.prototype.emailUpdated = function (emailOut) {
        var index = emailOut.index;
        if (index == "1") {
            this.updatedEmail1 = emailOut.email1;
            this.updateType = "E1";
        }
        if (index == "2") {
            this.updatedEmail2 = emailOut.email2;
            this.updateType = "E2";
        }
        var obj = { email1: this.updatedEmail1, email2: this.updatedEmail2, updateType: this.updateType, vumEmailStatus: this.vumEmailStatus };
        this.emailPrefEvent.emit(obj);
    };
    EmailSetupComponent.prototype.ngOnInit = function () {
        this.vumEmailStatus = this.vumEmail.vueEmailStatus;
        this.updatedEmail1 = this.vumEmail.email1;
        this.updatedEmail2 = this.vumEmail.email2;
    };
    EmailSetupComponent.prototype.ngOnChanges = function (changes) {
        if (!changes["status"].firstChange) {
            this.btndisabled = !this.status;
        }
    };
    return EmailSetupComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/managethreshold.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ManageThresholdComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ManageThresholdComponent_0;
/* unused harmony export View_ManageThresholdComponent_Host_0 */
/* unused harmony export ManageThresholdComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_statusbox_statusbox_component_ngfactory__ = __webpack_require__("./src/app/shared/statusbox/statusbox.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_statusbox_statusbox_component__ = __webpack_require__("./src/app/shared/statusbox/statusbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_error_error_component_ngfactory__ = __webpack_require__("./src/app/shared/error/error.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_error_error_component__ = __webpack_require__("./src/app/shared/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_onlynumbers_directive__ = __webpack_require__("./src/app/_directives/onlynumbers.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_commonutils_pipe__ = __webpack_require__("./src/app/_pipes/commonutils.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_pagination_pagination_component_ngfactory__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_pagination_pagination_component__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_page_service__ = __webpack_require__("./src/app/_services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_sortable_directive__ = __webpack_require__("./src/app/_directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__ = __webpack_require__("./src/app/shared/sorting/sortablecolumn.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_sorting_sortablecolumn_component__ = __webpack_require__("./src/app/shared/sorting/sortablecolumn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__editmodal_component_ngfactory__ = __webpack_require__("./src/app/monitoring/vumalertsetup/editmodal.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__editmodal_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/editmodal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_modal_service__ = __webpack_require__("./src/app/_services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__managethreshold_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/managethreshold.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var styles_ManageThresholdComponent = [".editIcon[_ngcontent-%COMP%]{cursor:pointer}"];
var RenderType_ManageThresholdComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ManageThresholdComponent, data: {} });

function View_ManageThresholdComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-status-box", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__shared_statusbox_statusbox_component_ngfactory__["b" /* View_StatusBoxComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_statusbox_statusbox_component_ngfactory__["a" /* RenderType_StatusBoxComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_statusbox_statusbox_component__["a" /* StatusBoxComponent */], [], { message: [0, "message"], isSuccess: [1, "isSuccess"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.message; var currVal_1 = _co.updateStatus; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ManageThresholdComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-error", [], null, null, null, __WEBPACK_IMPORTED_MODULE_3__shared_error_error_component_ngfactory__["b" /* View_ErrorComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__shared_error_error_component_ngfactory__["a" /* RenderType_ErrorComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_error_error_component__["a" /* ErrorComponent */], [], { errorMessage: [0, "errorMessage"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.validateMessage; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ManageThresholdComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 0, "span", [["class", "editIcon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEditAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_ManageThresholdComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 5, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 0, "span", [["class", "cancelAllIcon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCancelAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 0, "span", [["class", "saveAllIcon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSaveAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "]))], null, null); }
function View_ManageThresholdComponent_7(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Other"]))], null, null); }
function View_ManageThresholdComponent_8(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](1, null, ["", " Bedroom"]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.unitType; _ck(_v, 1, 0, currVal_0); }); }
function View_ManageThresholdComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 7, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_7)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_8)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "]))], function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.unitType == "0"); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_v.parent.context.$implicit.unitType != "0"); _ck(_v, 6, 0, currVal_1); }, null); }
function View_ManageThresholdComponent_9(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](1, null, ["", " kWh"])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v.parent.parent, 0), _v.parent.context.$implicit.unitThreshold)); _ck(_v, 1, 0, currVal_0); }); }
function View_ManageThresholdComponent_10(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 0, "span", [["class", "editIcon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEdit(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_ManageThresholdComponent_11(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 24, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 21, "select", [["id", "searchBy"], ["name", "searchBy"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.unitTypeChange(_v.parent.context.$implicit, $event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 3, "option", [["value", "1"]], [[8, "selected", 0]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](5, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["1 Bedroom"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](9, 0, null, null, 3, "option", [["value", "2"]], [[8, "selected", 0]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](10, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](11, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["2 Bedroom"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](14, 0, null, null, 3, "option", [["value", "3"]], [[8, "selected", 0]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](15, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](16, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["3 Bedroom"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](19, 0, null, null, 3, "option", [["value", "0"]], [[8, "selected", 0]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](20, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](21, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Other"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "]))], function (_ck, _v) { var currVal_1 = "1"; _ck(_v, 5, 0, currVal_1); var currVal_2 = "1"; _ck(_v, 6, 0, currVal_2); var currVal_4 = "2"; _ck(_v, 10, 0, currVal_4); var currVal_5 = "2"; _ck(_v, 11, 0, currVal_5); var currVal_7 = "3"; _ck(_v, 15, 0, currVal_7); var currVal_8 = "3"; _ck(_v, 16, 0, currVal_8); var currVal_10 = "0"; _ck(_v, 20, 0, currVal_10); var currVal_11 = "0"; _ck(_v, 21, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.unitType == "1"); _ck(_v, 4, 0, currVal_0); var currVal_3 = (_v.parent.context.$implicit.unitType == "2"); _ck(_v, 9, 0, currVal_3); var currVal_6 = (_v.parent.context.$implicit.unitType == "3"); _ck(_v, 14, 0, currVal_6); var currVal_9 = (_v.parent.context.$implicit.unitType == "0"); _ck(_v, 19, 0, currVal_9); }); }
function View_ManageThresholdComponent_12(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 1, "input", [["class", "unitBox"], ["maxlength", "4"], ["onlynumbers", ""], ["type", "textbox"]], [[8, "value", 0]], [[null, "change"], [null, "input"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 3).onFocus($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 3).onBlur($event.target.value) !== false);
        ad = (pd_1 && ad);
    } if (("change" === en)) {
        var pd_2 = (_co.unitThresholdChange(_v.parent.context.$implicit, $event.target.value) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](3, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_7__directives_onlynumbers_directive__["a" /* OnlyNumbersDirective */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["kWh\n          "]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.unitThreshold, ""); _ck(_v, 2, 0, currVal_0); }); }
function View_ManageThresholdComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 36, "tr", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpod"](2, { odd: 0, even: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](5, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](8, null, ["", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](11, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](13, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](14, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](16, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](17, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_6)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_9)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](25, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          \t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_10)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_11)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](32, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_12)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](35, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _v.context.even, _v.context.odd); _ck(_v, 1, 0, currVal_0); var currVal_7 = !_co.editAllClicked; _ck(_v, 20, 0, currVal_7); var currVal_8 = !_co.editAllClicked; _ck(_v, 23, 0, currVal_8); var currVal_9 = !_co.editAllClicked; _ck(_v, 28, 0, currVal_9); var currVal_10 = _co.editAllClicked; _ck(_v, 32, 0, currVal_10); var currVal_11 = _co.editAllClicked; _ck(_v, 35, 0, currVal_11); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.unitNumber; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.streetNum; var currVal_3 = _v.context.$implicit.streetName; _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_4 = _v.context.$implicit.city; _ck(_v, 11, 0, currVal_4); var currVal_5 = _v.context.$implicit.state; _ck(_v, 14, 0, currVal_5); var currVal_6 = _v.context.$implicit.zipcode; _ck(_v, 17, 0, currVal_6); }); }
function View_ManageThresholdComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_8__pipes_commonutils_pipe__["i" /* StripLeadingZeroPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 1, "div", [["class", "subheader mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Manage Unit Types and Thresholds"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["If you need to track a specific unit more closely, you can do so by setting up threshold amounts for each unit number. Please note, if you make a change to the threshold amounts above, it will override any changes below."])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](13, 0, null, null, 1, "gme-pagination", [["placement", "top"]], null, [[null, "pagerOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pagerOut" === en)) {
        var pd_0 = (_co.onPagination($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_9__shared_pagination_pagination_component_ngfactory__["b" /* View_PaginationComponent_0 */], __WEBPACK_IMPORTED_MODULE_9__shared_pagination_pagination_component_ngfactory__["a" /* RenderType_PaginationComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](14, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_10__shared_pagination_pagination_component__["a" /* PaginationComponent */], [__WEBPACK_IMPORTED_MODULE_11__services_page_service__["a" /* PagerService */]], { totalSize: [0, "totalSize"], placement: [1, "placement"] }, { pagerOut: "pagerOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](16, 0, null, null, 51, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](18, 0, null, null, 48, "table", [["class", "actionTable"], ["sortable-table", ""]], [[8, "className", 0]], [[null, "sorted"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("sorted" === en)) {
        var pd_0 = (_co.onSorted($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](19, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_12__directives_sortable_directive__["a" /* SortableTableDirective */], [__WEBPACK_IMPORTED_MODULE_13__services_sort_service__["a" /* SortService */]], null, { sorted: "sorted" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](21, 0, null, null, 38, "thead", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](23, 0, null, null, 35, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](25, 0, null, null, 2, "th", [["sortable-column", "unitNumber"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 26).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](26, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_15__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_13__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["Unit #"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](29, 0, null, null, 2, "th", [["sortable-column", "streetNum"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 30).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](30, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_15__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_13__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["Street Address"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](33, 0, null, null, 2, "th", [["sortable-column", "city"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 34).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](34, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_15__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_13__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["City"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](37, 0, null, null, 2, "th", [["sortable-column", "state"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 38).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](38, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_15__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_13__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["State"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](41, 0, null, null, 2, "th", [["sortable-column", "zipcode"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 42).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](42, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_15__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_13__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["Zip Code"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](45, 0, null, null, 2, "th", [["sortable-column", "unitType"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 46).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](46, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_15__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_13__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["Unit Type"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](49, 0, null, null, 2, "th", [["sortable-column", "unitThreshold"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 50).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_14__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](50, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_15__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_13__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["Unit Alert Thresholds"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](54, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](57, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](61, 0, null, null, 4, "tbody", [["id", "transTbody"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_ManageThresholdComponent_5)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](64, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](69, 0, null, null, 1, "gme-pagination", [], null, [[null, "pagerOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pagerOut" === en)) {
        var pd_0 = (_co.onPagination($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_9__shared_pagination_pagination_component_ngfactory__["b" /* View_PaginationComponent_0 */], __WEBPACK_IMPORTED_MODULE_9__shared_pagination_pagination_component_ngfactory__["a" /* RenderType_PaginationComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](70, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_10__shared_pagination_pagination_component__["a" /* PaginationComponent */], [__WEBPACK_IMPORTED_MODULE_11__services_page_service__["a" /* PagerService */]], { totalSize: [0, "totalSize"] }, { pagerOut: "pagerOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](72, 0, null, null, 1, "vum-edit-modal", [], null, [[null, "esiidAttrUpdate"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("esiidAttrUpdate" === en)) {
        var pd_0 = (_co.updateESIIDAttribute($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_16__editmodal_component_ngfactory__["b" /* View_SingleEditModalComponent_0 */], __WEBPACK_IMPORTED_MODULE_16__editmodal_component_ngfactory__["a" /* RenderType_SingleEditModalComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](73, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_17__editmodal_component__["a" /* SingleEditModalComponent */], [__WEBPACK_IMPORTED_MODULE_18__services_modal_service__["a" /* ModalService */]], { unit: [0, "unit"] }, { esiidAttrUpdate: "esiidAttrUpdate" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.updateStatus && _co.message); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.isError; _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.totalSize; var currVal_3 = "top"; _ck(_v, 14, 0, currVal_2, currVal_3); _ck(_v, 19, 0); var currVal_6 = "unitNumber"; _ck(_v, 26, 0, currVal_6); var currVal_8 = "streetNum"; _ck(_v, 30, 0, currVal_8); var currVal_10 = "city"; _ck(_v, 34, 0, currVal_10); var currVal_12 = "state"; _ck(_v, 38, 0, currVal_12); var currVal_14 = "zipcode"; _ck(_v, 42, 0, currVal_14); var currVal_16 = "unitType"; _ck(_v, 46, 0, currVal_16); var currVal_18 = "unitThreshold"; _ck(_v, 50, 0, currVal_18); var currVal_19 = !_co.editAllClicked; _ck(_v, 54, 0, currVal_19); var currVal_20 = _co.editAllClicked; _ck(_v, 57, 0, currVal_20); var currVal_21 = _co.unitList; _ck(_v, 64, 0, currVal_21); var currVal_22 = _co.totalSize; _ck(_v, 70, 0, currVal_22); var currVal_23 = _co.selectedUnitForEdit; _ck(_v, 73, 0, currVal_23); }, function (_ck, _v) { var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 19).elementClass; _ck(_v, 18, 0, currVal_4); var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 26).elementClass; _ck(_v, 25, 0, currVal_5); var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 30).elementClass; _ck(_v, 29, 0, currVal_7); var currVal_9 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 34).elementClass; _ck(_v, 33, 0, currVal_9); var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 38).elementClass; _ck(_v, 37, 0, currVal_11); var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 42).elementClass; _ck(_v, 41, 0, currVal_13); var currVal_15 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 46).elementClass; _ck(_v, 45, 0, currVal_15); var currVal_17 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 50).elementClass; _ck(_v, 49, 0, currVal_17); }); }
function View_ManageThresholdComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "vum-manage-threshold", [], null, null, null, View_ManageThresholdComponent_0, RenderType_ManageThresholdComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_19__managethreshold_component__["a" /* ManageThresholdComponent */], [__WEBPACK_IMPORTED_MODULE_18__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_13__services_sort_service__["a" /* SortService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ManageThresholdComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("vum-manage-threshold", __WEBPACK_IMPORTED_MODULE_19__managethreshold_component__["a" /* ManageThresholdComponent */], View_ManageThresholdComponent_Host_0, { unitList: "unitList", updateStatus: "updateStatus" }, { updateVUMESIIDAttribute: "updateVUMESIIDAttribute", updateVUMESIIDAttributes: "updateVUMESIIDAttributes" }, []);



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/managethreshold.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageThresholdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



var ManageThresholdComponent = /** @class */ (function () {
    function ManageThresholdComponent(modalService, sortService) {
        this.modalService = modalService;
        this.sortService = sortService;
        this.updateVUMESIIDAttribute = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateVUMESIIDAttributes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelUnitList = [];
        this.validateMessage = "Unit Threshold should not be empty.";
        this.isError = false;
        this.editAllClicked = false;
        this.editAllUnitList = [];
    }
    ManageThresholdComponent.prototype.onPagination = function (pagerObj) {
        this.unitList = this.allItems.slice(pagerObj.rangeStart - 1, pagerObj.rangeEnd + 1);
    };
    ManageThresholdComponent.prototype.ngOnInit = function () {
        this.setPagination();
        this.cancelUnitList = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](this.unitList);
    };
    ManageThresholdComponent.prototype.setPagination = function () {
        this.allItems = this.unitList;
        this.totalSize = this.allItems.length;
        this.unitList = this.allItems.slice(0, 25);
    };
    ManageThresholdComponent.prototype.onSorted = function (event) {
        this.sortService.sort(this.unitList, event.sortColumn, event.sortDirection);
    };
    ManageThresholdComponent.prototype.ngOnChanges = function (changes) {
        if (changes['updateStatus']) {
            if (undefined != this.updateStatus) {
                if (this.updateStatus) {
                    this.message = "Your unit update has been applied.";
                }
                if (!this.updateStatus) {
                    this.message = "Units Update Failure.";
                }
            }
        }
        if (undefined != changes['unitList'] && !changes['unitList'].firstChange) {
            if (undefined != this.unitList && this.unitList.length > 0) {
                this.cancelUnitList = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](this.unitList);
                this.setPagination();
            }
        }
    };
    ManageThresholdComponent.prototype.onEdit = function (unit) {
        this.selectedUnitForEdit = unit;
        this.message = undefined;
        this.modalService.open('single-edit-vum-modal');
    };
    ManageThresholdComponent.prototype.onEditAll = function () {
        this.message = undefined;
        this.editAllClicked = true;
    };
    ManageThresholdComponent.prototype.unitThresholdChange = function (unit, newThreshold) {
        var foundUnit = this.editAllUnitList.find(function (u) { return u.unitNumber == unit.unitNumber; });
        if (undefined != foundUnit) {
            this.editAllUnitList.forEach(function (u) {
                if (foundUnit.unitNumber == u.unitNumber) {
                    u.unitThreshold = newThreshold;
                }
            });
        }
        else {
            unit.unitThreshold = newThreshold;
            this.editAllUnitList.push(unit);
        }
    };
    ManageThresholdComponent.prototype.unitTypeChange = function (unit, newUnitType) {
        var foundUnit = this.editAllUnitList.find(function (u) { return u.unitNumber == unit.unitNumber; });
        if (undefined != foundUnit) {
            this.editAllUnitList.forEach(function (u) {
                if (foundUnit.unitNumber == u.unitNumber) {
                    u.unitThreshold = newUnitType;
                }
            });
        }
        else {
            unit.unitType = newUnitType;
            this.editAllUnitList.push(unit);
        }
    };
    ManageThresholdComponent.prototype.updateESIIDAttribute = function (updatedUnit) {
        if (updatedUnit != 'cancel') {
            this.updateVUMESIIDAttribute.emit(updatedUnit);
        }
        this.selectedUnitForEdit = {};
    };
    ManageThresholdComponent.prototype.onSaveAll = function () {
        var emptyThresholdUnitFound = this.editAllUnitList.find(function (u) { return u.unitThreshold == "" || u.unitThreshold == undefined; });
        if (undefined != emptyThresholdUnitFound) {
            this.validateMessage = "Unit Threshold should not be empty.";
            this.isError = true;
        }
        else {
            this.isError = false;
            this.editAllClicked = false;
            this.updateVUMESIIDAttributes.emit(this.editAllUnitList);
            this.editAllUnitList = [];
        }
    };
    ManageThresholdComponent.prototype.onCancelAll = function () {
        this.isError = false;
        this.editAllClicked = false;
        this.editAllUnitList = [];
        this.unitList = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](this.cancelUnitList);
    };
    ManageThresholdComponent.prototype.updateESIIDAttributes = function (updatedUnit) {
        this.updateVUMESIIDAttribute.emit(updatedUnit);
        this.selectedUnitForEdit = {};
    };
    return ManageThresholdComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/setthreshold.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_SetThresholdComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_SetThresholdComponent_0;
/* unused harmony export View_SetThresholdComponent_Host_0 */
/* unused harmony export SetThresholdComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_error_error_component_ngfactory__ = __webpack_require__("./src/app/shared/error/error.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_error_error_component__ = __webpack_require__("./src/app/shared/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_onlynumbers_directive__ = __webpack_require__("./src/app/_directives/onlynumbers.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setthreshold_component__ = __webpack_require__("./src/app/monitoring/vumalertsetup/setthreshold.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_SetThresholdComponent = ["gme-error[_ngcontent-%COMP%] {margin-bottom:20px;}"];
var RenderType_SetThresholdComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_SetThresholdComponent, data: {} });

function View_SetThresholdComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-error", [["errorMessage", "Please enter Threshold for update."]], null, null, null, __WEBPACK_IMPORTED_MODULE_1__shared_error_error_component_ngfactory__["b" /* View_ErrorComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_error_error_component_ngfactory__["a" /* RenderType_ErrorComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_error_error_component__["a" /* ErrorComponent */], [], { errorMessage: [0, "errorMessage"] }, null)], function (_ck, _v) { var currVal_0 = "Please enter Threshold for update."; _ck(_v, 1, 0, currVal_0); }, null); }
function View_SetThresholdComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](402653184, 1, { bedOneRef: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](402653184, 2, { bedTwoRef: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](402653184, 3, { bedThreeRef: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](402653184, 4, { otherRef: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Set Vacant Unit Thresholds"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["You can set a threshold per unit type below. If a unit type exceeds the threshold you specified, it will appear in the daily Vacant Unit Alert report."])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_SetThresholdComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](13, 0, null, null, 61, "div", [["class", "mrgtop10"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](15, 0, null, null, 58, "table", [["class", "actionTable "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](17, 0, null, null, 22, "thead", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](19, 0, null, null, 19, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](21, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Unit Type"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](24, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["1 Bedroom"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](27, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["2 Bedroom"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](30, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["3 Bedroom"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](33, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Other"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](36, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Update"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](41, 0, null, null, 31, "tbody", [["id", "transTbody"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](43, 0, null, null, 28, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](45, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            Unit Alert Thresholds\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](48, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](49, 0, [[1, 0], ["bedone", 1]], null, 1, "input", [["class", "unitBox"], ["id", "1bdUnit"], ["maxlength", "4"], ["name", "1bdUnit"], ["onlynumbers", ""], ["type", "textbox"], ["value", "10"]], null, [[null, "input"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 50).onFocus($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 50).onBlur($event.target.value) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](50, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__directives_onlynumbers_directive__["a" /* OnlyNumbersDirective */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["kWh"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](53, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](54, 0, [[2, 0], ["bedtwo", 1]], null, 1, "input", [["class", "unitBox"], ["id", "2bdUnit"], ["maxlength", "4"], ["name", "2bdUnit"], ["onlynumbers", ""], ["type", "textbox"], ["value", "10"]], null, [[null, "input"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 55).onFocus($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 55).onBlur($event.target.value) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](55, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__directives_onlynumbers_directive__["a" /* OnlyNumbersDirective */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["kWh"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](58, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](59, 0, [[3, 0], ["bedthree", 1]], null, 1, "input", [["class", "unitBox"], ["id", "3bdUnit"], ["maxlength", "4"], ["name", "3bdUnit"], ["onlynumbers", ""], ["type", "textbox"], ["value", "10"]], null, [[null, "input"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 60).onFocus($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 60).onBlur($event.target.value) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](60, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__directives_onlynumbers_directive__["a" /* OnlyNumbersDirective */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["kWh"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](63, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](64, 0, [[4, 0], ["other", 1]], null, 1, "input", [["class", "unitBox"], ["id", "otherUnit"], ["maxlength", "4"], ["name", "otherUnit"], ["onlynumbers", ""], ["type", "textbox"], ["value", "10"]], null, [[null, "input"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 65).onFocus($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 65).onBlur($event.target.value) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](65, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__directives_onlynumbers_directive__["a" /* OnlyNumbersDirective */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["kWh"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](68, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](69, 0, null, null, 1, "a", [["class", "button blue"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.applyToAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Apply to All"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isThresholdValEmpty; _ck(_v, 11, 0, currVal_0); _ck(_v, 50, 0); _ck(_v, 55, 0); _ck(_v, 60, 0); _ck(_v, 65, 0); }, null); }
function View_SetThresholdComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "vum-set-threshold", [], null, null, null, View_SetThresholdComponent_0, RenderType_SetThresholdComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__setthreshold_component__["a" /* SetThresholdComponent */], [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SetThresholdComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("vum-set-threshold", __WEBPACK_IMPORTED_MODULE_5__setthreshold_component__["a" /* SetThresholdComponent */], View_SetThresholdComponent_Host_0, {}, { applyToAllEvnt: "applyToAllEvnt" }, []);



/***/ }),

/***/ "./src/app/monitoring/vumalertsetup/setthreshold.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetThresholdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");


var SetThresholdComponent = /** @class */ (function () {
    function SetThresholdComponent(route) {
        this.route = route;
        this.applyToAllEvnt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isThresholdValEmpty = false;
    }
    SetThresholdComponent.prototype.applyToAll = function () {
        this.isThresholdValEmpty = false;
        var bed1Threshold = this.bedOneRef.nativeElement.value;
        var bed2Threshold = this.bedTwoRef.nativeElement.value;
        var bed3Threshold = this.bedThreeRef.nativeElement.value;
        var otherThreshold = this.otherRef.nativeElement.value;
        if ("" != bed1Threshold && "" != bed2Threshold && "" != bed3Threshold && "" != otherThreshold) {
            var obj = { bed1Threshold: bed1Threshold, bed2Threshold: bed2Threshold, bed3Threshold: bed3Threshold, otherThreshold: otherThreshold };
            this.applyToAllEvnt.emit(obj);
        }
        else {
            this.isThresholdValEmpty = true;
        }
    };
    SetThresholdComponent.prototype.ngOnInit = function () {
    };
    return SetThresholdComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/vumdailyreport/dailyreport.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_VacantUnitDailyReportComponent */
/* unused harmony export View_VacantUnitDailyReportComponent_0 */
/* unused harmony export View_VacantUnitDailyReportComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacantUnitDailyReportComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_component_ngfactory__ = __webpack_require__("./src/app/monitoring/vumdailyreport/table.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_component__ = __webpack_require__("./src/app/monitoring/vumdailyreport/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_error_error_component_ngfactory__ = __webpack_require__("./src/app/shared/error/error.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_error_error_component__ = __webpack_require__("./src/app/shared/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_loading_loading_component_ngfactory__ = __webpack_require__("./src/app/shared/loading/loading.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_loading_loading_component__ = __webpack_require__("./src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_csv_csv_component_ngfactory__ = __webpack_require__("./src/app/shared/csv/csv.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_csv_csv_component__ = __webpack_require__("./src/app/shared/csv/csv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_csv_service__ = __webpack_require__("./src/app/_services/csv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__findunits_component_ngfactory__ = __webpack_require__("./src/app/monitoring/vumdailyreport/findunits.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__findunits_component__ = __webpack_require__("./src/app/monitoring/vumdailyreport/findunits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_print_print_component_ngfactory__ = __webpack_require__("./src/app/shared/print/print.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_print_print_component__ = __webpack_require__("./src/app/shared/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_message_message_component_ngfactory__ = __webpack_require__("./src/app/shared/message/message.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_message_message_component__ = __webpack_require__("./src/app/shared/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_shared_service__ = __webpack_require__("./src/app/_services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dailyreport_component__ = __webpack_require__("./src/app/monitoring/vumdailyreport/dailyreport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















var styles_VacantUnitDailyReportComponent = [];
var RenderType_VacantUnitDailyReportComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_VacantUnitDailyReportComponent, data: {} });

function View_VacantUnitDailyReportComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 2, "vum-daily-report-table", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__table_component_ngfactory__["b" /* View_DailyReportTableComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__table_component_ngfactory__["a" /* RenderType_DailyReportTableComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__table_component__["a" /* DailyReportTableComponent */], [__WEBPACK_IMPORTED_MODULE_3__services_sort_service__["a" /* SortService */]], { dailyReportList: [0, "dailyReportList"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 2).transform(_co.dailyReportList$)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_VacantUnitDailyReportComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-error", [["errorMessage", "No daily usage found for this date. For assistance, please call Customer Care at 800-273-2135."]], null, null, null, __WEBPACK_IMPORTED_MODULE_5__shared_error_error_component_ngfactory__["b" /* View_ErrorComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__shared_error_error_component_ngfactory__["a" /* RenderType_ErrorComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_6__shared_error_error_component__["a" /* ErrorComponent */], [], { errorMessage: [0, "errorMessage"] }, null)], function (_ck, _v) { var currVal_0 = "No daily usage found for this date. For assistance, please call Customer Care at 800-273-2135."; _ck(_v, 1, 0, currVal_0); }, null); }
function View_VacantUnitDailyReportComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 1, "loading-indicator", [], null, null, null, __WEBPACK_IMPORTED_MODULE_7__shared_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_7__shared_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](2, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_8__shared_loading_loading_component__["a" /* LoadingComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"]))], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_VacantUnitDailyReportComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 2, null, View_VacantUnitDailyReportComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](0, [["loading", 2]], null, 0, null, View_VacantUnitDailyReportComponent_4)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"]))], function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = ((((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 2, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 3).transform(_co.dailyReportList$))) == null) ? null : tmp_0_0.length) == 0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 5); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_VacantUnitDailyReportComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 2, "gme-csv", [], null, null, null, __WEBPACK_IMPORTED_MODULE_9__shared_csv_csv_component_ngfactory__["b" /* View_CSVComponent_0 */], __WEBPACK_IMPORTED_MODULE_9__shared_csv_csv_component_ngfactory__["a" /* RenderType_CSVComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_10__shared_csv_csv_component__["a" /* CSVComponent */], [__WEBPACK_IMPORTED_MODULE_11__services_csv_service__["a" /* CSVService */]], { csvList: [0, "csvList"], name: [1, "name"], headers: [2, "headers"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 2).transform(_co.dailyReportList$)); var currVal_1 = _co.csvName; var currVal_2 = _co.csvHeaders; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_VacantUnitDailyReportComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 29, "section", [["id", "contentWrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 26, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Vacant Unit Daily Report"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 1, "vum-find-units", [], null, [[null, "onChangeReportDate"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onChangeReportDate" === en)) {
        var pd_0 = (_co.onChangeReportDate($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__findunits_component_ngfactory__["b" /* View_FindUnitsComponent_0 */], __WEBPACK_IMPORTED_MODULE_12__findunits_component_ngfactory__["a" /* RenderType_FindUnitsComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](8, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_13__findunits_component__["a" /* FindUnitsComponent */], [__WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* ActivatedRoute */]], null, { onChangeReportDate: "onChangeReportDate" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 2, null, View_VacantUnitDailyReportComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](0, [["errResult", 2]], null, 0, null, View_VacantUnitDailyReportComponent_2)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](16, 0, null, null, 8, "div", [["class", "text-right"], ["id", "buttonHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](18, 0, null, null, 1, "gme-print", [["title", "Vacant Unit Alert Daily Report"]], null, null, null, __WEBPACK_IMPORTED_MODULE_15__shared_print_print_component_ngfactory__["b" /* View_PrintComponent_0 */], __WEBPACK_IMPORTED_MODULE_15__shared_print_print_component_ngfactory__["a" /* RenderType_PrintComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](19, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_16__shared_print_print_component__["a" /* PrintComponent */], [], { title: [0, "title"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 2, null, View_VacantUnitDailyReportComponent_5)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](22, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](26, 0, null, null, 1, "message", [], null, null, null, __WEBPACK_IMPORTED_MODULE_17__shared_message_message_component_ngfactory__["b" /* View_MessageComponent_0 */], __WEBPACK_IMPORTED_MODULE_17__shared_message_message_component_ngfactory__["a" /* RenderType_MessageComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](27, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_18__shared_message_message_component__["a" /* MessageComponent */], [__WEBPACK_IMPORTED_MODULE_19__services_shared_service__["a" /* SharedService */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 8, 0); var tmp_0_0 = null; var currVal_0 = ((((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 11, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 12).transform(_co.dailyReportList$))) == null) ? null : tmp_0_0.length) > 0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 14); _ck(_v, 11, 0, currVal_0, currVal_1); var currVal_2 = "Vacant Unit Alert Daily Report"; _ck(_v, 19, 0, currVal_2); var tmp_3_0 = null; var currVal_3 = ((((tmp_3_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 22, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 23).transform(_co.dailyReportList$))) == null) ? null : tmp_3_0.length) > 0); _ck(_v, 22, 0, currVal_3); _ck(_v, 27, 0); }, null); }
function View_VacantUnitDailyReportComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_VacantUnitDailyReportComponent_0, RenderType_VacantUnitDailyReportComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_20__dailyreport_component__["a" /* VacantUnitDailyReportComponent */], [__WEBPACK_IMPORTED_MODULE_21__ngrx_store__["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VacantUnitDailyReportComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("ng-component", __WEBPACK_IMPORTED_MODULE_20__dailyreport_component__["a" /* VacantUnitDailyReportComponent */], View_VacantUnitDailyReportComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/monitoring/vumdailyreport/dailyreport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacantUnitDailyReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_actions_vum__ = __webpack_require__("./src/app/app-state/actions/vum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishReplay.js");





var VacantUnitDailyReportComponent = /** @class */ (function () {
    function VacantUnitDailyReportComponent(store) {
        var _this = this;
        this.store = store;
        this.csvName = "dailyreport";
        this.csvHeaders = ["Date", "Address", "ESI ID", "kWh", "Threshold", "Consecutive Days on Report", "Unit Type"];
        this.relationshipIdSubs = store.select(__WEBPACK_IMPORTED_MODULE_2__app_state_reducers__["H" /* getRelationshipId */]).subscribe(function (id) { return _this.relationshipId = id; });
    }
    VacantUnitDailyReportComponent.prototype.onChangeReportDate = function (inVar) {
        this.getVacantDailyReportList(inVar.reportDate);
    };
    VacantUnitDailyReportComponent.prototype.getVacantDailyReportList = function (reportDate) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__app_state_actions_vum__["d" /* GetVacantDailyReport */]({ reportDate: reportDate, relationshipId: this.relationshipId }));
        this.dailyReportList$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_state_reducers__["_2" /* getVacantDailyReport */]).publishReplay().refCount();
    };
    VacantUnitDailyReportComponent.prototype.ngOnInit = function () {
    };
    VacantUnitDailyReportComponent.prototype.ngOnDestroy = function () {
        this.relationshipIdSubs.unsubscribe();
    };
    return VacantUnitDailyReportComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/vumdailyreport/findunits.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_FindUnitsComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_FindUnitsComponent_0;
/* unused harmony export View_FindUnitsComponent_Host_0 */
/* unused harmony export FindUnitsComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findunits_component__ = __webpack_require__("./src/app/monitoring/vumdailyreport/findunits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_FindUnitsComponent = [];
var RenderType_FindUnitsComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_FindUnitsComponent, data: {} });

function View_FindUnitsComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](2, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 3, 0, currVal_2); }); }
function View_FindUnitsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 19, "div", [["class", "mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 13, "div", [["id", "searchAreaHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 10, "div", [["class", "inlineBlock"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](6, 0, null, null, 1, "label", [["class", "label"], ["for", "searchBy"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Find Units:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](9, 0, null, null, 4, "select", [["id", "searchBy"], ["name", "searchBy"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onDateChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_FindUnitsComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](12, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["*Vacant units on the report for more than one day"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dates; _ck(_v, 12, 0, currVal_0); }, null); }
function View_FindUnitsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "vum-find-units", [], null, null, null, View_FindUnitsComponent_0, RenderType_FindUnitsComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__findunits_component__["a" /* FindUnitsComponent */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FindUnitsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("vum-find-units", __WEBPACK_IMPORTED_MODULE_3__findunits_component__["a" /* FindUnitsComponent */], View_FindUnitsComponent_Host_0, {}, { onChangeReportDate: "onChangeReportDate" }, []);



/***/ }),

/***/ "./src/app/monitoring/vumdailyreport/findunits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindUnitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);



var FindUnitsComponent = /** @class */ (function () {
    function FindUnitsComponent(route) {
        this.route = route;
        this.dateFormat = "MM/DD/YYYY";
        this.onChangeReportDate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FindUnitsComponent.prototype.onDateChange = function (e) {
        var inVar = { reportDate: e.target.value };
        this.onChangeReportDate.emit(inVar);
    };
    FindUnitsComponent.prototype.ngOnInit = function () {
        var dates = [];
        for (var i = 0; i < 7; i++) {
            dates.push(__WEBPACK_IMPORTED_MODULE_2_moment__().subtract(i, 'days').format(this.dateFormat));
        }
        this.dates = dates;
        this.onChangeReportDate.emit({ reportDate: dates[0] });
    };
    return FindUnitsComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/vumdailyreport/table.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_DailyReportTableComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_DailyReportTableComponent_0;
/* unused harmony export View_DailyReportTableComponent_Host_0 */
/* unused harmony export DailyReportTableComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_pagination_pagination_component_ngfactory__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service__ = __webpack_require__("./src/app/_services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_sortable_directive__ = __webpack_require__("./src/app/_directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__ = __webpack_require__("./src/app/shared/sorting/sortablecolumn.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component__ = __webpack_require__("./src/app/shared/sorting/sortablecolumn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__table_component__ = __webpack_require__("./src/app/monitoring/vumdailyreport/table.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_DailyReportTableComponent = [];
var RenderType_DailyReportTableComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_DailyReportTableComponent, data: {} });

function View_DailyReportTableComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 24, "tr", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpod"](2, { odd: 0, even: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](5, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](8, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](11, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](13, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](14, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](16, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](17, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](19, 0, null, null, 1, "td", [["class", "redText"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](20, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](22, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](23, null, ["", " Bedroom"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, _v.context.even, _v.context.odd); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.date; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.address; _ck(_v, 8, 0, currVal_2); var currVal_3 = _v.context.$implicit.esiid; _ck(_v, 11, 0, currVal_3); var currVal_4 = _v.context.$implicit.kwh; _ck(_v, 14, 0, currVal_4); var currVal_5 = _v.context.$implicit.threshold; _ck(_v, 17, 0, currVal_5); var currVal_6 = _v.context.$implicit.consecuteDays; _ck(_v, 20, 0, currVal_6); var currVal_7 = _v.context.$implicit.unitType; _ck(_v, 23, 0, currVal_7); }); }
function View_DailyReportTableComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-pagination", [["placement", "top"]], null, [[null, "pagerOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pagerOut" === en)) {
        var pd_0 = (_co.onPagination($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__shared_pagination_pagination_component_ngfactory__["b" /* View_PaginationComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_pagination_pagination_component_ngfactory__["a" /* RenderType_PaginationComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component__["a" /* PaginationComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_page_service__["a" /* PagerService */]], { totalSize: [0, "totalSize"], placement: [1, "placement"] }, { pagerOut: "pagerOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 44, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 41, "table", [["class", "vacantUnitAlertTable"], ["sortable-table", ""]], [[8, "className", 0]], [[null, "sorted"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("sorted" === en)) {
        var pd_0 = (_co.onSorted($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_5__directives_sortable_directive__["a" /* SortableTableDirective */], [__WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */]], null, { sorted: "sorted" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](8, 0, null, null, 31, "thead", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](10, 0, null, null, 28, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Date"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](15, 0, null, null, 2, "th", [["sortable-column", "address"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 16).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](16, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["Address"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](19, 0, null, null, 2, "th", [["sortable-column", "esiid"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 20).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](20, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["ESI ID"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](23, 0, null, null, 2, "th", [["sortable-column", "kwh"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 24).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](24, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["kWh"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](27, 0, null, null, 2, "th", [["sortable-column", "threshold"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 28).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](28, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["Threshold"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](31, 0, null, null, 2, "th", [["sortable-column", "consecuteDays"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 32).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](32, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["Consecutive Days on Report"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](35, 0, null, null, 2, "th", [["sortable-column", "unitType"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 36).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_7__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](36, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, 0, ["Unit Type"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](41, 0, null, null, 4, "tbody", [["id", "transTbody"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_DailyReportTableComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](44, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](49, 0, null, null, 1, "gme-pagination", [], null, [[null, "pagerOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pagerOut" === en)) {
        var pd_0 = (_co.onPagination($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__shared_pagination_pagination_component_ngfactory__["b" /* View_PaginationComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_pagination_pagination_component_ngfactory__["a" /* RenderType_PaginationComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](50, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component__["a" /* PaginationComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_page_service__["a" /* PagerService */]], { totalSize: [0, "totalSize"] }, { pagerOut: "pagerOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.totalSize; var currVal_1 = "top"; _ck(_v, 1, 0, currVal_0, currVal_1); _ck(_v, 6, 0); var currVal_4 = "address"; _ck(_v, 16, 0, currVal_4); var currVal_6 = "esiid"; _ck(_v, 20, 0, currVal_6); var currVal_8 = "kwh"; _ck(_v, 24, 0, currVal_8); var currVal_10 = "threshold"; _ck(_v, 28, 0, currVal_10); var currVal_12 = "consecuteDays"; _ck(_v, 32, 0, currVal_12); var currVal_14 = "unitType"; _ck(_v, 36, 0, currVal_14); var currVal_15 = _co.cloneList; _ck(_v, 44, 0, currVal_15); var currVal_16 = _co.totalSize; _ck(_v, 50, 0, currVal_16); }, function (_ck, _v) { var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 6).elementClass; _ck(_v, 5, 0, currVal_2); var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 16).elementClass; _ck(_v, 15, 0, currVal_3); var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 20).elementClass; _ck(_v, 19, 0, currVal_5); var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 24).elementClass; _ck(_v, 23, 0, currVal_7); var currVal_9 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 28).elementClass; _ck(_v, 27, 0, currVal_9); var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 32).elementClass; _ck(_v, 31, 0, currVal_11); var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 36).elementClass; _ck(_v, 35, 0, currVal_13); }); }
function View_DailyReportTableComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "vum-daily-report-table", [], null, null, null, View_DailyReportTableComponent_0, RenderType_DailyReportTableComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_9__table_component__["a" /* DailyReportTableComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DailyReportTableComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("vum-daily-report-table", __WEBPACK_IMPORTED_MODULE_9__table_component__["a" /* DailyReportTableComponent */], View_DailyReportTableComponent_Host_0, { dailyReportList: "dailyReportList" }, {}, []);



/***/ }),

/***/ "./src/app/monitoring/vumdailyreport/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyReportTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



var DailyReportTableComponent = /** @class */ (function () {
    function DailyReportTableComponent(sortService) {
        this.sortService = sortService;
    }
    DailyReportTableComponent.prototype.onPagination = function (pagerObj) {
        this.cloneList = this.allItems.slice(pagerObj.rangeStart - 1, pagerObj.rangeEnd + 1);
    };
    DailyReportTableComponent.prototype.onSorted = function (event) {
        this.sortService.sort(this.cloneList, event.sortColumn, event.sortDirection);
    };
    DailyReportTableComponent.prototype.ngOnInit = function () {
        this.cloneList = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](this.dailyReportList);
        this.allItems = this.cloneList;
        this.totalSize = this.allItems.length;
        this.cloneList = this.allItems.slice(0, 25);
    };
    return DailyReportTableComponent;
}());



/***/ })

});
//# sourceMappingURL=monitoring.module.chunk.js.map