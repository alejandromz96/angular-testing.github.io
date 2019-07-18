webpackJsonp([2],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageJasmineModule", function() { return PageJasmineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_jasmine_component__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageJasmineModule = (function () {
    function PageJasmineModule() {
    }
    PageJasmineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_jasmine_component__["a" /* PageJasmine */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_jasmine_component__["a" /* PageJasmine */]),
            ],
        })
    ], PageJasmineModule);
    return PageJasmineModule;
}());

//# sourceMappingURL=page-jasmine.component.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageJasmine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageJasmine = (function () {
    function PageJasmine(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PageJasmine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jasmine',template:/*ion-inline-start:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-jasmine\page-jasmine.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Jasmine</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n    <ion-content padding class="contentJasmineStyle">\n\n  <h1 class="jasmineTitle">Jasmine</h1>\n\n  <h1 class="jasmineSubtitle">Unit Test</h1>\n\n  \n\n  <img class="jasmineImage" src="assets/images/jasmine-logo.png" alt="logo de Jasmine" />\n\n\n\n  <p>\n\n    Jassmine es un framework para el desarrollo de testing de código JavaScript, con una sintaxis limpia y sencilla una vez comienzas a entenderla, y que nos permite hacer test de forma muy sencillo con unas potentes herramientas.\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-jasmine\page-jasmine.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PageJasmine);
    return PageJasmine;
}());

//# sourceMappingURL=page-jasmine.component.js.map

/***/ })

});
//# sourceMappingURL=2.js.map