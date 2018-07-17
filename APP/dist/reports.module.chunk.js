webpackJsonp(["reports.module"],{

/***/ "./src/app/app-state/effects/reports.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_reports_service__ = __webpack_require__("./src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_reports__ = __webpack_require__("./src/app/app-state/actions/reports.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportsEffects = /** @class */ (function () {
    function ReportsEffects(action$, reportsService) {
        var _this = this;
        this.action$ = action$;
        this.reportsService = reportsService;
        this.vacancyReportEffects$ = this.action$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_reports__["d" /* GET_VACANT_REPORT */])
            .map(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) { return _this.reportsService.getVacancyReport(payload)
            .map(function (result) {
            return new __WEBPACK_IMPORTED_MODULE_7__actions_reports__["k" /* GetVacantReportSuccess */](result);
        }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_reports__["j" /* GetVacantReportFailure */]({})); });
        this.rollReportEffects$ = this.action$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_reports__["a" /* GET_ROLL_REPORT */])
            .map(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) { return _this.reportsService.getRollReport(payload)
            .map(function (result) {
            return new __WEBPACK_IMPORTED_MODULE_7__actions_reports__["h" /* GetRollReportSuccess */](result);
        }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_reports__["g" /* GetRollReportFailure */]({})); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ReportsEffects.prototype, "vacancyReportEffects$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ReportsEffects.prototype, "rollReportEffects$", void 0);
    return ReportsEffects;
}());



/***/ }),

/***/ "./src/app/reports/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vacancy_vacancy_component__ = __webpack_require__("./src/app/reports/vacancy/vacancy.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vacancy_vacancy_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__roll_roll_component__ = __webpack_require__("./src/app/reports/roll/roll.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__roll_roll_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roll_search_component__ = __webpack_require__("./src/app/reports/roll/search.component.ts");
/* unused harmony reexport SearchComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roll_table_component__ = __webpack_require__("./src/app/reports/roll/table.component.ts");
/* unused harmony reexport RollTableComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vacancy_search_component__ = __webpack_require__("./src/app/reports/vacancy/search.component.ts");
/* unused harmony reexport VacancySearchComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vacancy_table_component__ = __webpack_require__("./src/app/reports/vacancy/table.component.ts");
/* unused harmony reexport VacancyTableComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__roll_rollinfo_component__ = __webpack_require__("./src/app/reports/roll/rollinfo.component.ts");
/* unused harmony reexport RollInfoComponent */









/***/ }),

/***/ "./src/app/reports/reports-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./src/app/reports/index.ts");


var routes = [
    { path: 'vacancy.htm', component: __WEBPACK_IMPORTED_MODULE_1__index__["b" /* VacancyReportComponent */] },
    { path: 'roll.htm', component: __WEBPACK_IMPORTED_MODULE_1__index__["a" /* RollReportComponent */] }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/reports/reports.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModuleNgFactory", function() { return ReportsModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reports_module__ = __webpack_require__("./src/app/reports/reports.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vacancy_vacancy_component_ngfactory__ = __webpack_require__("./src/app/reports/vacancy/vacancy.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roll_roll_component_ngfactory__ = __webpack_require__("./src/app/reports/roll/roll.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_page_service__ = __webpack_require__("./src/app/_services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_csv_service__ = __webpack_require__("./src/app/_services/csv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reports_routing_module__ = __webpack_require__("./src/app/reports/reports-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_reports_service__ = __webpack_require__("./src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_state_effects_reports_effects__ = __webpack_require__("./src/app/app-state/effects/reports.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vacancy_vacancy_component__ = __webpack_require__("./src/app/reports/vacancy/vacancy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__roll_roll_component__ = __webpack_require__("./src/app/reports/roll/roll.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var ReportsModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__reports_module__["a" /* ReportsModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_2__vacancy_vacancy_component_ngfactory__["a" /* VacancyReportComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_3__roll_roll_component_ngfactory__["a" /* RollReportComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_4__angular_common__["m" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["l" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_common__["q" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["y" /* ɵi */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["y" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */], __WEBPACK_IMPORTED_MODULE_6__services_sort_service__["a" /* SortService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_7__services_page_service__["a" /* PagerService */], __WEBPACK_IMPORTED_MODULE_7__services_page_service__["a" /* PagerService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_8__services_csv_service__["a" /* CSVService */], __WEBPACK_IMPORTED_MODULE_8__services_csv_service__["a" /* CSVService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* HttpModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["w" /* ɵba */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["w" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["t" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["t" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_10__angular_router__["o" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_10__angular_router__["o" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_10__angular_router__["u" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_10__angular_router__["m" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_11__reports_routing_module__["a" /* ReportsRoutingModule */], __WEBPACK_IMPORTED_MODULE_11__reports_routing_module__["a" /* ReportsRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["i" /* ɵg */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["f" /* ɵb */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["j" /* ɵh */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["j" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["i" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectSources */], [__WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["j" /* ɵh */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["k" /* ɵi */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["k" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["a" /* Actions */], [__WEBPACK_IMPORTED_MODULE_14__ngrx_store__["j" /* ScannedActionsSubject */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* BrowserXhr */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_http__["h" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* BaseResponseOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_9__angular_http__["j" /* XSRFStrategy */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["k" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_http__["i" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["i" /* XHRBackend */], [__WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["h" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["j" /* XSRFStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_http__["g" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* BaseRequestOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["l" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_9__angular_http__["i" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["g" /* RequestOptions */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__services_reports_service__["a" /* ReportsService */], __WEBPACK_IMPORTED_MODULE_15__services_reports_service__["a" /* ReportsService */], [__WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__app_state_effects_reports_effects__["a" /* ReportsEffects */], __WEBPACK_IMPORTED_MODULE_16__app_state_effects_reports_effects__["a" /* ReportsEffects */], [__WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_15__services_reports_service__["a" /* ReportsService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["h" /* ɵe */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["e" /* ɵa */], [__WEBPACK_IMPORTED_MODULE_16__app_state_effects_reports_effects__["a" /* ReportsEffects */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["g" /* ɵc */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["g" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectSources */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["k" /* ɵi */], __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["h" /* ɵe */], [2, __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["n" /* StoreModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__reports_module__["a" /* ReportsModule */], __WEBPACK_IMPORTED_MODULE_1__reports_module__["a" /* ReportsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_10__angular_router__["k" /* ROUTES */], function () { return [[{ path: "vacancy.htm", component: __WEBPACK_IMPORTED_MODULE_17__vacancy_vacancy_component__["a" /* VacancyReportComponent */] }, { path: "roll.htm", component: __WEBPACK_IMPORTED_MODULE_18__roll_roll_component__["a" /* RollReportComponent */] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsModule; });
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    return ReportsModule;
}());



/***/ }),

/***/ "./src/app/reports/roll/roll.component.css.shim.ngstyle.js":
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

/***/ "./src/app/reports/roll/roll.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_RollReportComponent */
/* unused harmony export View_RollReportComponent_0 */
/* unused harmony export View_RollReportComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RollReportComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__roll_component_css_shim_ngstyle__ = __webpack_require__("./src/app/reports/roll/roll.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_component_ngfactory__ = __webpack_require__("./src/app/reports/roll/table.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_component__ = __webpack_require__("./src/app/reports/roll/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_error_error_component_ngfactory__ = __webpack_require__("./src/app/shared/error/error.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_error_error_component__ = __webpack_require__("./src/app/shared/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_loading_loading_component_ngfactory__ = __webpack_require__("./src/app/shared/loading/loading.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_loading_loading_component__ = __webpack_require__("./src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_csv_csv_component_ngfactory__ = __webpack_require__("./src/app/shared/csv/csv.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_csv_csv_component__ = __webpack_require__("./src/app/shared/csv/csv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_csv_service__ = __webpack_require__("./src/app/_services/csv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_component_ngfactory__ = __webpack_require__("./src/app/reports/roll/search.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_component__ = __webpack_require__("./src/app/reports/roll/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rollinfo_component_ngfactory__ = __webpack_require__("./src/app/reports/roll/rollinfo.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rollinfo_component__ = __webpack_require__("./src/app/reports/roll/rollinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__roll_component__ = __webpack_require__("./src/app/reports/roll/roll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_reports_service__ = __webpack_require__("./src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var styles_RollReportComponent = [__WEBPACK_IMPORTED_MODULE_0__roll_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_RollReportComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_RollReportComponent, data: {} });

function View_RollReportComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "roll-table", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__table_component_ngfactory__["b" /* View_RollTableComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__table_component_ngfactory__["a" /* RenderType_RollTableComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__table_component__["a" /* RollTableComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_sort_service__["a" /* SortService */]], { reportList: [0, "reportList"], rollType: [1, "rollType"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform(_co.reportList$)); var currVal_1 = _co.rollType; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_RollReportComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-error", [["errorMessage", "No Data available for the selected report type."]], null, null, null, __WEBPACK_IMPORTED_MODULE_6__shared_error_error_component_ngfactory__["b" /* View_ErrorComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__shared_error_error_component_ngfactory__["a" /* RenderType_ErrorComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_7__shared_error_error_component__["a" /* ErrorComponent */], [], { errorMessage: [0, "errorMessage"] }, null)], function (_ck, _v) { var currVal_0 = "No Data available for the selected report type."; _ck(_v, 1, 0, currVal_0); }, null); }
function View_RollReportComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 1, "loading-indicator", [], null, null, null, __WEBPACK_IMPORTED_MODULE_8__shared_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_loading_loading_component__["a" /* LoadingComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"]))], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_RollReportComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_RollReportComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](0, [["loading", 2]], null, 0, null, View_RollReportComponent_4)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"]))], function (_ck, _v) { var _co = _v.component; var tmp_0_0 = null; var currVal_0 = ((((tmp_0_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 2, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).transform(_co.reportList$))) == null) ? null : tmp_0_0.length) == 0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 5); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_RollReportComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "gme-csv", [], null, null, null, __WEBPACK_IMPORTED_MODULE_10__shared_csv_csv_component_ngfactory__["b" /* View_CSVComponent_0 */], __WEBPACK_IMPORTED_MODULE_10__shared_csv_csv_component_ngfactory__["a" /* RenderType_CSVComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_11__shared_csv_csv_component__["a" /* CSVComponent */], [__WEBPACK_IMPORTED_MODULE_12__services_csv_service__["a" /* CSVService */]], { csvList: [0, "csvList"], name: [1, "name"], headers: [2, "headers"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform(_co.reportList$)); var currVal_1 = _co.csvName; var currVal_2 = _co.csvHeaders; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_RollReportComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 26, "section", [["id", "contentWrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Roll Report"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "roll-search", [], null, [[null, "onApplyClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onApplyClick" === en)) {
        var pd_0 = (_co.onApply($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_13__search_component_ngfactory__["b" /* View_SearchComponent_0 */], __WEBPACK_IMPORTED_MODULE_13__search_component_ngfactory__["a" /* RenderType_SearchComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_14__search_component__["a" /* SearchComponent */], [], null, { onApplyClick: "onApplyClick" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "roll-info", [], null, null, null, __WEBPACK_IMPORTED_MODULE_15__rollinfo_component_ngfactory__["b" /* View_RollInfoComponent_0 */], __WEBPACK_IMPORTED_MODULE_15__rollinfo_component_ngfactory__["a" /* RenderType_RollInfoComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_16__rollinfo_component__["a" /* RollInfoComponent */], [], { propertyName: [0, "propertyName"], reportExecutionDate: [1, "reportExecutionDate"], reportPeriod: [2, "reportPeriod"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_RollReportComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](14, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](0, [["showErrResult", 2]], null, 0, null, View_RollReportComponent_2)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 5, "div", [["class", "text-right"], ["id", "buttonHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_RollReportComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 8, 0); var currVal_0 = _co.propertyName; var currVal_1 = _co.reportExecutionDate; var currVal_2 = _co.reportPeriod; _ck(_v, 11, 0, currVal_0, currVal_1, currVal_2); var tmp_3_0 = null; var currVal_3 = ((((tmp_3_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 14, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).transform(_co.reportList$))) == null) ? null : tmp_3_0.length) > 0); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 17); _ck(_v, 14, 0, currVal_3, currVal_4); var tmp_5_0 = null; var currVal_5 = ((((tmp_5_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 22, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 23).transform(_co.reportList$))) == null) ? null : tmp_5_0.length) > 0); _ck(_v, 22, 0, currVal_5); }, null); }
function View_RollReportComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_RollReportComponent_0, RenderType_RollReportComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_17__roll_component__["a" /* RollReportComponent */], [__WEBPACK_IMPORTED_MODULE_18__services_reports_service__["a" /* ReportsService */], __WEBPACK_IMPORTED_MODULE_19__ngrx_store__["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RollReportComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("ng-component", __WEBPACK_IMPORTED_MODULE_17__roll_component__["a" /* RollReportComponent */], View_RollReportComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/reports/roll/roll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RollReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reports_service__ = __webpack_require__("./src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");









var RollReportComponent = /** @class */ (function () {
    function RollReportComponent(reportsService, store) {
        var _this = this;
        this.reportsService = reportsService;
        this.store = store;
        this.dateFormat = "MM/DD/YYYY";
        this.csvName = "rollReport";
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["b" /* Subject */]();
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].combineLatest(store.select(__WEBPACK_IMPORTED_MODULE_5__app_state_reducers__["H" /* getRelationshipId */]), store.select(__WEBPACK_IMPORTED_MODULE_5__app_state_reducers__["P" /* getSelectedpropertyName */]))
            .takeUntil(this.destroy$)
            .subscribe(function (result) {
            _this.relationshipId = result[0];
            _this.propertyName = result[1];
        });
    }
    RollReportComponent.prototype.setCSVHeadersAndName = function () {
        var data = this.reportsService.getCSVHeadersAndName(this.propertyName, this.rollType);
        this.csvHeaders = data.csvHeaders;
        this.csvName = data.csvName;
    };
    RollReportComponent.prototype.onApply = function (inVar) {
        var startDate = __WEBPACK_IMPORTED_MODULE_2_moment__(inVar.fromDate).format(this.dateFormat);
        var endDate = __WEBPACK_IMPORTED_MODULE_2_moment__(inVar.toDate).format(this.dateFormat);
        this.reportPeriod = startDate + "-" + endDate;
        this.rollType = inVar.rollType;
        this.setCSVHeadersAndName();
        this.getRollReport(startDate, endDate, this.rollType);
    };
    RollReportComponent.prototype.getRollReport = function (startDate, endDate, rollType) {
        var inData = { fromDate: startDate, toDate: endDate, reportType: rollType, relationshipId: this.relationshipId };
        this.reportList$ = this.reportsService.getRollReport(inData).publishReplay().refCount();
    };
    RollReportComponent.prototype.ngOnInit = function () {
        var startDate = __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(7, 'days').format((this.dateFormat));
        var endDate = __WEBPACK_IMPORTED_MODULE_2_moment__().format(this.dateFormat);
        this.reportExecutionDate = endDate;
        this.reportPeriod = startDate + "-" + endDate;
        this.rollType = "rollin";
        this.getRollReport(startDate, endDate, this.rollType);
        this.setCSVHeadersAndName();
    };
    RollReportComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    return RollReportComponent;
}());



/***/ }),

/***/ "./src/app/reports/roll/rollinfo.component.css.shim.ngstyle.js":
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

/***/ "./src/app/reports/roll/rollinfo.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_RollInfoComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_RollInfoComponent_0;
/* unused harmony export View_RollInfoComponent_Host_0 */
/* unused harmony export RollInfoComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rollinfo_component_css_shim_ngstyle__ = __webpack_require__("./src/app/reports/roll/rollinfo.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rollinfo_component__ = __webpack_require__("./src/app/reports/roll/rollinfo.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_RollInfoComponent = [__WEBPACK_IMPORTED_MODULE_0__rollinfo_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_RollInfoComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_RollInfoComponent, data: {} });

function View_RollInfoComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 28, "div", [["class", "mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 7, "div", [["class", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Property:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "div", [["class", "data"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](8, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 7, "div", [["class", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Report Execution Date:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 1, "div", [["class", "data"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](17, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 7, "div", [["class", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Report Period:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](25, 0, null, null, 1, "div", [["class", "data"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](26, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.propertyName; _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.reportExecutionDate; _ck(_v, 17, 0, currVal_1); var currVal_2 = _co.reportPeriod; _ck(_v, 26, 0, currVal_2); }); }
function View_RollInfoComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "roll-info", [], null, null, null, View_RollInfoComponent_0, RenderType_RollInfoComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__rollinfo_component__["a" /* RollInfoComponent */], [], null, null)], null, null); }
var RollInfoComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("roll-info", __WEBPACK_IMPORTED_MODULE_2__rollinfo_component__["a" /* RollInfoComponent */], View_RollInfoComponent_Host_0, { propertyName: "propertyName", reportExecutionDate: "reportExecutionDate", reportPeriod: "reportPeriod" }, {}, []);



/***/ }),

/***/ "./src/app/reports/roll/rollinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RollInfoComponent; });
var RollInfoComponent = /** @class */ (function () {
    function RollInfoComponent() {
    }
    return RollInfoComponent;
}());



/***/ }),

/***/ "./src/app/reports/roll/search.component.css.shim.ngstyle.js":
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

/***/ "./src/app/reports/roll/search.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_SearchComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_SearchComponent_0;
/* unused harmony export View_SearchComponent_Host_0 */
/* unused harmony export SearchComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_component_css_shim_ngstyle__ = __webpack_require__("./src/app/reports/roll/search.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_datepicker_datepicker_component_ngfactory__ = __webpack_require__("./src/app/shared/datepicker/datepicker.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_datepicker_datepicker_component__ = __webpack_require__("./src/app/shared/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_component__ = __webpack_require__("./src/app/reports/roll/search.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_SearchComponent = [__WEBPACK_IMPORTED_MODULE_0__search_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_SearchComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_SearchComponent, data: {} });

function View_SearchComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 52, "div", [["class", "mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 49, "div", [["id", "searchAreaHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 22, "div", [["class", "inlineBlock mR3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 1, "label", [["class", "label"], ["for", "searchBy"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Report Type:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 16, "select", [["id", "searchBy"], ["name", "searchBy"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 10).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.rollType = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["u" /* SelectControlValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["u" /* SelectControlValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](14, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 3, "option", [["value", "rollin"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](17, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](18, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Roll In"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 3, "option", [["value", "rollout"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Roll Out"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, null, 7, "div", [["class", "inlineBlock mR3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 1, "label", [["class", "label"], ["for", "fromDate"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["From:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](33, 0, null, null, 1, "gme-datepicker", [["maxDate", "0"], ["minDate", "-12m"]], null, [[null, "dateChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dateChange" === en)) {
        var pd_0 = (_co.onDateChange($event, "from") !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_3__shared_datepicker_datepicker_component_ngfactory__["b" /* View_DatePickerComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__shared_datepicker_datepicker_component_ngfactory__["a" /* RenderType_DatePickerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](34, 4898816, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_datepicker_datepicker_component__["a" /* DatePickerComponent */], [], { defaultDate: [0, "defaultDate"], maxDate: [1, "maxDate"], minDate: [2, "minDate"] }, { dateChange: "dateChange" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](37, 0, null, null, 7, "div", [["class", "inlineBlock mR3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](39, 0, null, null, 1, "label", [["class", "label"], ["for", "fromDate"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["To:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](42, 0, null, null, 1, "gme-datepicker", [["maxDate", "+13d"], ["minDate", "-12m"]], null, [[null, "dateChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dateChange" === en)) {
        var pd_0 = (_co.onDateChange($event, "to") !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_3__shared_datepicker_datepicker_component_ngfactory__["b" /* View_DatePickerComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__shared_datepicker_datepicker_component_ngfactory__["a" /* RenderType_DatePickerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](43, 4898816, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_datepicker_datepicker_component__["a" /* DatePickerComponent */], [], { defaultDate: [0, "defaultDate"], maxDate: [1, "maxDate"], minDate: [2, "minDate"] }, { dateChange: "dateChange" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](46, 0, null, null, 4, "div", [["class", "inlineBlock"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](48, 0, null, null, 1, "a", [["class", "button textBoxButton blue"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onApply() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Apply"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "searchBy"; var currVal_8 = _co.rollType; _ck(_v, 12, 0, currVal_7, currVal_8); var currVal_9 = "rollin"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "rollin"; _ck(_v, 18, 0, currVal_10); var currVal_11 = "rollout"; _ck(_v, 22, 0, currVal_11); var currVal_12 = "rollout"; _ck(_v, 23, 0, currVal_12); var currVal_13 = _co.fromDate; var currVal_14 = "0"; var currVal_15 = "-12m"; _ck(_v, 34, 0, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.toDate; var currVal_17 = "+13d"; var currVal_18 = "-12m"; _ck(_v, 43, 0, currVal_16, currVal_17, currVal_18); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_SearchComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "roll-search", [], null, null, null, View_SearchComponent_0, RenderType_SearchComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__search_component__["a" /* SearchComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SearchComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("roll-search", __WEBPACK_IMPORTED_MODULE_5__search_component__["a" /* SearchComponent */], View_SearchComponent_Host_0, {}, { onApplyClick: "onApplyClick" }, []);



/***/ }),

/***/ "./src/app/reports/roll/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.fromDate = __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(7, 'days').toDate();
        this.toDate = __WEBPACK_IMPORTED_MODULE_1_moment__().toDate();
        this.rollType = "rollin";
        this.onApplyClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchComponent.prototype.onDateChange = function (date, type) {
        if (type == 'from') {
            this.fromDate = date;
        }
        else {
            this.toDate = date;
        }
    };
    SearchComponent.prototype.onApply = function () {
        var inVar = { fromDate: this.fromDate, toDate: this.toDate, rollType: this.rollType };
        var rollType = inVar.rollType;
        this.rollType = rollType;
        this.onApplyClick.emit(inVar);
    };
    SearchComponent.prototype.clearDates = function () {
        this.fromDate = null;
        this.toDate = null;
    };
    /*
    var fromDateLimits = {
            minDate : '-12M',
            maxDate : '+0d'

            }

            var toDateLimits={
            minDate : '-12M',
            maxDate : '+13d'

            }
     */
    SearchComponent.prototype.ngOnInit = function () {
        this.toRangeEnd = __WEBPACK_IMPORTED_MODULE_1_moment__().add(13, 'days').toDate();
        this.toRangeStart = __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(12, 'months').toDate();
        this.fromRangeEnd = __WEBPACK_IMPORTED_MODULE_1_moment__().add(0, 'days').toDate();
        this.fromRangeStart = __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(12, 'months').toDate();
    };
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/reports/roll/table.component.css.shim.ngstyle.js":
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

/***/ "./src/app/reports/roll/table.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_RollTableComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_RollTableComponent_0;
/* unused harmony export View_RollTableComponent_Host_0 */
/* unused harmony export RollTableComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_component_css_shim_ngstyle__ = __webpack_require__("./src/app/reports/roll/table.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sorting_sortablecolumn_component_ngfactory__ = __webpack_require__("./src/app/shared/sorting/sortablecolumn.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sorting_sortablecolumn_component__ = __webpack_require__("./src/app/shared/sorting/sortablecolumn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pagination_pagination_component_ngfactory__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pagination_pagination_component__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_page_service__ = __webpack_require__("./src/app/_services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_sortable_directive__ = __webpack_require__("./src/app/_directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__table_component__ = __webpack_require__("./src/app/reports/roll/table.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_RollTableComponent = [__WEBPACK_IMPORTED_MODULE_0__table_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_RollTableComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_RollTableComponent, data: {} });

function View_RollTableComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "th", [["sortable-column", "transactionDate"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["(Roll In) Date Active"]))], function (_ck, _v) { var currVal_1 = "transactionDate"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).elementClass; _ck(_v, 0, 0, currVal_0); }); }
function View_RollTableComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "th", [["sortable-column", "transactionDate"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["(Roll Out) Date Inactive"]))], function (_ck, _v) { var currVal_1 = "transactionDate"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).elementClass; _ck(_v, 0, 0, currVal_0); }); }
function View_RollTableComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 12, "tr", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](2, { odd: 0, even: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](5, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](8, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](11, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, _v.context.even, _v.context.odd); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.esiid; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.serviceAddress; _ck(_v, 8, 0, currVal_2); var currVal_3 = _v.context.$implicit.transactionDate; _ck(_v, 11, 0, currVal_3); }); }
function View_RollTableComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 40, "div", [["class", "mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "gme-pagination", [["placement", "top"]], null, [[null, "pagerOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pagerOut" === en)) {
        var pd_0 = (_co.onPagination($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_6__shared_pagination_pagination_component_ngfactory__["b" /* View_PaginationComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__shared_pagination_pagination_component_ngfactory__["a" /* RenderType_PaginationComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_7__shared_pagination_pagination_component__["a" /* PaginationComponent */], [__WEBPACK_IMPORTED_MODULE_8__services_page_service__["a" /* PagerService */]], { totalSize: [0, "totalSize"], placement: [1, "placement"] }, { pagerOut: "pagerOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 31, "div", [["id", "tableHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 28, "table", [["id", "rollReportTbl"], ["sortable-table", ""]], [[8, "className", 0]], [[null, "sorted"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("sorted" === en)) {
        var pd_0 = (_co.onSorted($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_9__directives_sortable_directive__["a" /* SortableTableDirective */], [__WEBPACK_IMPORTED_MODULE_4__services_sort_service__["a" /* SortService */]], null, { sorted: "sorted" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 18, "thead", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 15, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 2, "th", [["sortable-column", "esiid"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](15, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["ESIID"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 2, "th", [["sortable-column", "serviceAddress"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Service Address"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RollTableComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RollTableComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](26, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 4, "tbody", [["id", "transTbody"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RollTableComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](33, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](38, 0, null, null, 1, "gme-pagination", [], null, [[null, "pagerOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pagerOut" === en)) {
        var pd_0 = (_co.onPagination($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_6__shared_pagination_pagination_component_ngfactory__["b" /* View_PaginationComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__shared_pagination_pagination_component_ngfactory__["a" /* RenderType_PaginationComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](39, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_7__shared_pagination_pagination_component__["a" /* PaginationComponent */], [__WEBPACK_IMPORTED_MODULE_8__services_page_service__["a" /* PagerService */]], { totalSize: [0, "totalSize"] }, { pagerOut: "pagerOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.totalSize; var currVal_1 = "top"; _ck(_v, 3, 0, currVal_0, currVal_1); _ck(_v, 8, 0); var currVal_4 = "esiid"; _ck(_v, 15, 0, currVal_4); var currVal_6 = "serviceAddress"; _ck(_v, 19, 0, currVal_6); var currVal_7 = (_co.rollType == "rollin"); _ck(_v, 23, 0, currVal_7); var currVal_8 = (_co.rollType == "rollout"); _ck(_v, 26, 0, currVal_8); var currVal_9 = _co.reportList; _ck(_v, 33, 0, currVal_9); var currVal_10 = _co.totalSize; _ck(_v, 39, 0, currVal_10); }, function (_ck, _v) { var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).elementClass; _ck(_v, 7, 0, currVal_2); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).elementClass; _ck(_v, 14, 0, currVal_3); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).elementClass; _ck(_v, 18, 0, currVal_5); }); }
function View_RollTableComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "roll-table", [], null, null, null, View_RollTableComponent_0, RenderType_RollTableComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_10__table_component__["a" /* RollTableComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_sort_service__["a" /* SortService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RollTableComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("roll-table", __WEBPACK_IMPORTED_MODULE_10__table_component__["a" /* RollTableComponent */], View_RollTableComponent_Host_0, { reportList: "reportList", rollType: "rollType" }, {}, []);



/***/ }),

/***/ "./src/app/reports/roll/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RollTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");


var RollTableComponent = /** @class */ (function () {
    function RollTableComponent(sortService) {
        this.sortService = sortService;
    }
    RollTableComponent.prototype.onPagination = function (pagerObj) {
        this.reportList = this.allItems.slice(pagerObj.rangeStart - 1, pagerObj.rangeEnd + 1);
    };
    RollTableComponent.prototype.onSorted = function (event) {
        this.sortService.sort(this.reportList, event.sortColumn, event.sortDirection);
    };
    RollTableComponent.prototype.ngOnInit = function () {
        this.allItems = this.reportList;
        this.totalSize = this.allItems.length;
        this.reportList = this.allItems.slice(0, 25);
    };
    return RollTableComponent;
}());



/***/ }),

/***/ "./src/app/reports/vacancy/search.component.css.shim.ngstyle.js":
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

/***/ "./src/app/reports/vacancy/search.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_VacancySearchComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_VacancySearchComponent_0;
/* unused harmony export View_VacancySearchComponent_Host_0 */
/* unused harmony export VacancySearchComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_component_css_shim_ngstyle__ = __webpack_require__("./src/app/reports/vacancy/search.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_component__ = __webpack_require__("./src/app/reports/vacancy/search.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_VacancySearchComponent = [__WEBPACK_IMPORTED_MODULE_0__search_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_VacancySearchComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_VacancySearchComponent, data: {} });

function View_VacancySearchComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 44, "div", [["class", "mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 41, "div", [["id", "searchAreaHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 32, "div", [["class", "inlineBlock mR3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 1, "label", [["class", "label"], ["for", "searchBy"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Show:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 26, "select", [["id", "searchBy"], ["name", "searchBy"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 10).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.stateType = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["u" /* SelectControlValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["u" /* SelectControlValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](14, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 3, "option", [["value", "All"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](17, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](18, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["All"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 3, "option", [["value", "Not-Powered"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Not-Powered"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 3, "option", [["value", "Occupied"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](27, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](28, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Occupied"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](31, 0, null, null, 3, "option", [["value", "Vacant"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](32, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["r" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["u" /* SelectControlValueAccessor */]]], { value: [0, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](33, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["z" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Vacant"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](38, 0, null, null, 4, "div", [["class", "inlineBlock"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](40, 0, null, null, 1, "a", [["class", "button textBoxButton blue"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onApply() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Apply"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "searchBy"; var currVal_8 = _co.stateType; _ck(_v, 12, 0, currVal_7, currVal_8); var currVal_9 = "All"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "All"; _ck(_v, 18, 0, currVal_10); var currVal_11 = "Not-Powered"; _ck(_v, 22, 0, currVal_11); var currVal_12 = "Not-Powered"; _ck(_v, 23, 0, currVal_12); var currVal_13 = "Occupied"; _ck(_v, 27, 0, currVal_13); var currVal_14 = "Occupied"; _ck(_v, 28, 0, currVal_14); var currVal_15 = "Vacant"; _ck(_v, 32, 0, currVal_15); var currVal_16 = "Vacant"; _ck(_v, 33, 0, currVal_16); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).ngClassPending; _ck(_v, 9, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_VacancySearchComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "vacancy-search", [], null, null, null, View_VacancySearchComponent_0, RenderType_VacancySearchComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__search_component__["a" /* VacancySearchComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VacancySearchComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("vacancy-search", __WEBPACK_IMPORTED_MODULE_3__search_component__["a" /* VacancySearchComponent */], View_VacancySearchComponent_Host_0, {}, { onApplyClick: "onApplyClick" }, []);



/***/ }),

/***/ "./src/app/reports/vacancy/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacancySearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var VacancySearchComponent = /** @class */ (function () {
    function VacancySearchComponent() {
        this.stateType = "All";
        this.onApplyClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VacancySearchComponent.prototype.onApply = function () {
        var inVar = { stateType: this.stateType };
        this.onApplyClick.emit(inVar);
    };
    VacancySearchComponent.prototype.ngOnInit = function () {
    };
    return VacancySearchComponent;
}());



/***/ }),

/***/ "./src/app/reports/vacancy/table.component.css.shim.ngstyle.js":
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

/***/ "./src/app/reports/vacancy/table.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_VacancyTableComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_VacancyTableComponent_0;
/* unused harmony export View_VacancyTableComponent_Host_0 */
/* unused harmony export VacancyTableComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_component_css_shim_ngstyle__ = __webpack_require__("./src/app/reports/vacancy/table.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component_ngfactory__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pagination_pagination_component__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service__ = __webpack_require__("./src/app/_services/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_sortable_directive__ = __webpack_require__("./src/app/_directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__ = __webpack_require__("./src/app/shared/sorting/sortablecolumn.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__ = __webpack_require__("./src/app/shared/sorting/sortablecolumn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__table_component__ = __webpack_require__("./src/app/reports/vacancy/table.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_VacancyTableComponent = [__WEBPACK_IMPORTED_MODULE_0__table_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_VacancyTableComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_VacancyTableComponent, data: {} });

function View_VacancyTableComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 18, "tr", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](2, { odd: 0, even: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](5, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](8, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](11, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](14, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](17, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, _v.context.even, _v.context.odd); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.serviceAddress; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.unit; _ck(_v, 8, 0, currVal_2); var currVal_3 = _v.context.$implicit.changeDate; _ck(_v, 11, 0, currVal_3); var currVal_4 = _v.context.$implicit.daysVacant; _ck(_v, 14, 0, currVal_4); var currVal_5 = _v.context.$implicit.stateOfUnit; _ck(_v, 17, 0, currVal_5); }); }
function View_VacancyTableComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 46, "div", [["class", "mT3P"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "gme-pagination", [["placement", "top"]], null, [[null, "pagerOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pagerOut" === en)) {
        var pd_0 = (_co.onPagination($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component_ngfactory__["b" /* View_PaginationComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component_ngfactory__["a" /* RenderType_PaginationComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_pagination_pagination_component__["a" /* PaginationComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_page_service__["a" /* PagerService */]], { totalSize: [0, "totalSize"], placement: [1, "placement"] }, { pagerOut: "pagerOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 37, "div", [["id", "tableHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 34, "table", [["id", "rollReportTbl"], ["sortable-table", ""]], [[8, "className", 0]], [[null, "sorted"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("sorted" === en)) {
        var pd_0 = (_co.onSorted($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_6__directives_sortable_directive__["a" /* SortableTableDirective */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], null, { sorted: "sorted" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 24, "thead", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 21, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 2, "th", [["sortable-column", "serviceAddress"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](15, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Service Address"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 2, "th", [["sortable-column", "unit"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Unit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 2, "th", [["sortable-column", "changeDate"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 23).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Change Date"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 2, "th", [["sortable-column", "daysVacant"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 27).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](27, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["Days in Current State"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 2, "th", [["sortable-column", "stateOfUnit"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31).sort() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["b" /* View_SortableColumnComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_sorting_sortablecolumn_component_ngfactory__["a" /* RenderType_SortableColumnComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](31, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_sorting_sortablecolumn_component__["a" /* SortableColumnComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], { columnName: [0, "columnName"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["State of Unit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](36, 0, null, null, 4, "tbody", [["id", "transTbody"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_VacancyTableComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](39, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](44, 0, null, null, 1, "gme-pagination", [], null, [[null, "pagerOut"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pagerOut" === en)) {
        var pd_0 = (_co.onPagination($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component_ngfactory__["b" /* View_PaginationComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__shared_pagination_pagination_component_ngfactory__["a" /* RenderType_PaginationComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](45, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_pagination_pagination_component__["a" /* PaginationComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_page_service__["a" /* PagerService */]], { totalSize: [0, "totalSize"] }, { pagerOut: "pagerOut" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.totalSize; var currVal_1 = "top"; _ck(_v, 3, 0, currVal_0, currVal_1); _ck(_v, 8, 0); var currVal_4 = "serviceAddress"; _ck(_v, 15, 0, currVal_4); var currVal_6 = "unit"; _ck(_v, 19, 0, currVal_6); var currVal_8 = "changeDate"; _ck(_v, 23, 0, currVal_8); var currVal_10 = "daysVacant"; _ck(_v, 27, 0, currVal_10); var currVal_12 = "stateOfUnit"; _ck(_v, 31, 0, currVal_12); var currVal_13 = _co.reportList; _ck(_v, 39, 0, currVal_13); var currVal_14 = _co.totalSize; _ck(_v, 45, 0, currVal_14); }, function (_ck, _v) { var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).elementClass; _ck(_v, 7, 0, currVal_2); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).elementClass; _ck(_v, 14, 0, currVal_3); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).elementClass; _ck(_v, 18, 0, currVal_5); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 23).elementClass; _ck(_v, 22, 0, currVal_7); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 27).elementClass; _ck(_v, 26, 0, currVal_9); var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31).elementClass; _ck(_v, 30, 0, currVal_11); }); }
function View_VacancyTableComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "vacancy-table", [], null, null, null, View_VacancyTableComponent_0, RenderType_VacancyTableComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_10__table_component__["a" /* VacancyTableComponent */], [__WEBPACK_IMPORTED_MODULE_7__services_sort_service__["a" /* SortService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VacancyTableComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("vacancy-table", __WEBPACK_IMPORTED_MODULE_10__table_component__["a" /* VacancyTableComponent */], View_VacancyTableComponent_Host_0, { reportList: "reportList" }, {}, []);



/***/ }),

/***/ "./src/app/reports/vacancy/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacancyTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");


var VacancyTableComponent = /** @class */ (function () {
    function VacancyTableComponent(sortService) {
        this.sortService = sortService;
    }
    VacancyTableComponent.prototype.onPagination = function (pagerObj) {
        this.reportList = this.allItems.slice(pagerObj.rangeStart - 1, pagerObj.rangeEnd + 1);
    };
    VacancyTableComponent.prototype.onSorted = function (event) {
        this.sortService.sort(this.reportList, event.sortColumn, event.sortDirection);
    };
    VacancyTableComponent.prototype.ngOnChanges = function (changes) {
        if (!changes['reportList'].firstChange) {
            if (undefined != this.allItems && this.allItems.length > 0) {
                this.allItems = this.reportList;
                this.totalSize = this.allItems.length;
                this.reportList = this.allItems.slice(0, 25);
            }
        }
    };
    VacancyTableComponent.prototype.ngOnInit = function () {
        this.allItems = this.reportList;
        this.totalSize = this.allItems.length;
        this.reportList = this.allItems.slice(0, 25);
    };
    return VacancyTableComponent;
}());



/***/ }),

/***/ "./src/app/reports/vacancy/vacancy.component.css.shim.ngstyle.js":
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

/***/ "./src/app/reports/vacancy/vacancy.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_VacancyReportComponent */
/* unused harmony export View_VacancyReportComponent_0 */
/* unused harmony export View_VacancyReportComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacancyReportComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vacancy_component_css_shim_ngstyle__ = __webpack_require__("./src/app/reports/vacancy/vacancy.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_component_ngfactory__ = __webpack_require__("./src/app/reports/vacancy/table.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_component__ = __webpack_require__("./src/app/reports/vacancy/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sort_service__ = __webpack_require__("./src/app/_services/sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_loading_loading_component_ngfactory__ = __webpack_require__("./src/app/shared/loading/loading.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_loading_loading_component__ = __webpack_require__("./src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_error_error_component_ngfactory__ = __webpack_require__("./src/app/shared/error/error.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_error_error_component__ = __webpack_require__("./src/app/shared/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_csv_csv_component_ngfactory__ = __webpack_require__("./src/app/shared/csv/csv.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_csv_csv_component__ = __webpack_require__("./src/app/shared/csv/csv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_csv_service__ = __webpack_require__("./src/app/_services/csv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_component_ngfactory__ = __webpack_require__("./src/app/reports/vacancy/search.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_component__ = __webpack_require__("./src/app/reports/vacancy/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vacancy_component__ = __webpack_require__("./src/app/reports/vacancy/vacancy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_reports_service__ = __webpack_require__("./src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_VacancyReportComponent = [__WEBPACK_IMPORTED_MODULE_0__vacancy_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_VacancyReportComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_VacancyReportComponent, data: {} });

function View_VacancyReportComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "vacancy-table", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__table_component_ngfactory__["b" /* View_VacancyTableComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__table_component_ngfactory__["a" /* RenderType_VacancyTableComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_3__table_component__["a" /* VacancyTableComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_sort_service__["a" /* SortService */]], { reportList: [0, "reportList"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.reportList; _ck(_v, 1, 0, currVal_0); }, null); }
function View_VacancyReportComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "loading-indicator", [], null, null, null, __WEBPACK_IMPORTED_MODULE_5__shared_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__shared_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_6__shared_loading_loading_component__["a" /* LoadingComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_VacancyReportComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-error", [["errorMessage", "No Data available for the selected report type."]], null, null, null, __WEBPACK_IMPORTED_MODULE_7__shared_error_error_component_ngfactory__["b" /* View_ErrorComponent_0 */], __WEBPACK_IMPORTED_MODULE_7__shared_error_error_component_ngfactory__["a" /* RenderType_ErrorComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_8__shared_error_error_component__["a" /* ErrorComponent */], [], { errorMessage: [0, "errorMessage"] }, null)], function (_ck, _v) { var currVal_0 = "No Data available for the selected report type."; _ck(_v, 1, 0, currVal_0); }, null); }
function View_VacancyReportComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "gme-csv", [], null, null, null, __WEBPACK_IMPORTED_MODULE_9__shared_csv_csv_component_ngfactory__["b" /* View_CSVComponent_0 */], __WEBPACK_IMPORTED_MODULE_9__shared_csv_csv_component_ngfactory__["a" /* RenderType_CSVComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_10__shared_csv_csv_component__["a" /* CSVComponent */], [__WEBPACK_IMPORTED_MODULE_11__services_csv_service__["a" /* CSVService */]], { csvList: [0, "csvList"], name: [1, "name"], headers: [2, "headers"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.reportList; var currVal_1 = _co.csvName; var currVal_2 = _co.csvHeaders; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_VacancyReportComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 25, "section", [["id", "contentWrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 22, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "pageHeader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Vacancy Report"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "vacancy-search", [], null, [[null, "onApplyClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onApplyClick" === en)) {
        var pd_0 = (_co.onApply($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__search_component_ngfactory__["b" /* View_VacancySearchComponent_0 */], __WEBPACK_IMPORTED_MODULE_12__search_component_ngfactory__["a" /* RenderType_VacancySearchComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_13__search_component__["a" /* VacancySearchComponent */], [], null, { onApplyClick: "onApplyClick" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_VacancyReportComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_VacancyReportComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](14, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_VacancyReportComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](17, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 4, "div", [["class", "text-right"], ["id", "buttonHolder"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_VacancyReportComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\t\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 8, 0); var currVal_0 = _co.isLoadingSuccess; _ck(_v, 11, 0, currVal_0); var currVal_1 = _co.isLoading; _ck(_v, 14, 0, currVal_1); var currVal_2 = _co.isLoadingFailure; _ck(_v, 17, 0, currVal_2); var currVal_3 = (((_co.reportList == null) ? null : _co.reportList.length) > 0); _ck(_v, 22, 0, currVal_3); }, null); }
function View_VacancyReportComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_VacancyReportComponent_0, RenderType_VacancyReportComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_15__vacancy_component__["a" /* VacancyReportComponent */], [__WEBPACK_IMPORTED_MODULE_16__services_reports_service__["a" /* ReportsService */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VacancyReportComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("ng-component", __WEBPACK_IMPORTED_MODULE_15__vacancy_component__["a" /* VacancyReportComponent */], View_VacancyReportComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/reports/vacancy/vacancy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacancyReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reports_service__ = __webpack_require__("./src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_reducers__ = __webpack_require__("./src/app/app-state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state_actions_reports__ = __webpack_require__("./src/app/app-state/actions/reports.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");









var VacancyReportComponent = /** @class */ (function () {
    function VacancyReportComponent(reportsService, store) {
        var _this = this;
        this.reportsService = reportsService;
        this.store = store;
        this.isLoading = false;
        this.isLoadingSuccess = false;
        this.isLoadingFailure = false;
        this.type = "All";
        //reportlistCsv:any[];
        this.dateFormat = "MM/DD/YYYY";
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["b" /* Subject */]();
        this.csvHeaders = ["Service Address", "Unit", "Change Date", "Days in Current State", "State of Unit"];
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].combineLatest(store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["H" /* getRelationshipId */]), store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["P" /* getSelectedpropertyName */]))
            .takeUntil(this.destroy$)
            .subscribe(function (result) {
            _this.relationshipId = result[0];
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__app_state_actions_reports__["i" /* GetVacantReport */]({ relationshipId: _this.relationshipId }));
            _this.propertyName = result[1];
        });
    }
    VacancyReportComponent.prototype.onApply = function (inVar) {
        var _this = this;
        this.isLoading = true;
        this.isLoadingSuccess = false;
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["S" /* getStoredVacancyReport */]).takeUntil(this.destroy$).subscribe(function (data) {
            var vacantData = _this.reportsService.processVacantDataOnApply(data, inVar);
            _this.reportList = vacantData.reportList;
            _this.isLoadingSuccess = vacantData.isLoadingSuccess;
            _this.isLoading = vacantData.isLoading;
            _this.isLoadingFailure = vacantData.isLoadingFailure;
        });
    };
    VacancyReportComponent.prototype.getVacancyReport = function (stateType) {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_state_reducers__["_1" /* getVacancyReport */]).takeUntil(this.destroy$).subscribe(function (resp) {
            _this.isLoading = resp.isLoading;
            _this.isLoadingSuccess = resp.isLoadingSuccess;
            _this.reportList = resp.vacancyReportList;
            _this.isLoadingFailure = (undefined != resp.vacancyReportList && !(resp.vacancyReportList.length > 0));
        });
    };
    VacancyReportComponent.prototype.ngOnInit = function () {
        this.getVacancyReport(this.type);
        this.csvName = this.propertyName + "_" + __WEBPACK_IMPORTED_MODULE_6_moment__().format(this.dateFormat) + "__VacancyReport";
    };
    VacancyReportComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    return VacancyReportComponent;
}());



/***/ })

});
//# sourceMappingURL=reports.module.chunk.js.map