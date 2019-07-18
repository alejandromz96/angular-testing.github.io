webpackJsonp([1],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProtractorModule", function() { return PageProtractorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_protractor_component__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageProtractorModule = (function () {
    function PageProtractorModule() {
    }
    PageProtractorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_protractor_component__["a" /* PageProtractor */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_protractor_component__["a" /* PageProtractor */]),
            ],
        })
    ], PageProtractorModule);
    return PageProtractorModule;
}());

//# sourceMappingURL=page-protractor.component.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageProtractor; });
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


var PageProtractor = (function () {
    function PageProtractor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PageProtractor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-protractor',template:/*ion-inline-start:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-protractor\page-protractor.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Protractor</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n    <ion-content padding class="contentProtractorStyle">\n\n  <h1 class="protractorTitle">Protractor</h1>\n\n  <h1 class="protractorSubtitle">End To End Test</h1>\n\n \n\n  <img class="protractorImage" src="assets/images/protractor-logo.png" alt="logo de Protractor" />\n\n\n\n  <p>\n\n    Protractor es la última gran tecnología de la que hablaremos, y es un framework, que apoyado en Jassmine, nos proporciona una serie de herramientas para desarrollar test de integración, como si de un usuario se tratase, en aplicaciones de Angular.\n\nAl principio cuesta un poco comenzar a entender como funciona, pero su curva de aprendizaje es mucho más ligera que con los tests unitarios.\n\nLa mecánica principal en los tests de Protractor es buscar mediante JQuery elementos en el html de la interfaz de la aplicación y hacer comprobaciones sobre ellos y interactuar como un usuario.\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-protractor\page-protractor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PageProtractor);
    return PageProtractor;
}());

//# sourceMappingURL=page-protractor.component.js.map

/***/ })

});
//# sourceMappingURL=1.js.map