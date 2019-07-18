webpackJsonp([3],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageIonicModule", function() { return PageIonicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_ionic_component__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageIonicModule = (function () {
    function PageIonicModule() {
    }
    PageIonicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_ionic_component__["a" /* PageIonic */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_ionic_component__["a" /* PageIonic */]),
            ],
        })
    ], PageIonicModule);
    return PageIonicModule;
}());

//# sourceMappingURL=page-ionic.component.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageIonic; });
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


var PageIonic = (function () {
    function PageIonic(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PageIonic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ionic',template:/*ion-inline-start:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-ionic\page-ionic.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Ionic</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n    <ion-content padding class="contentIonicStyle">\n\n  <h1 class="ionicTitle">Ionic</h1>\n\n  <h1 class="ionicSubtitle">Cross Platform mobile, Web And desktop apps</h1>\n\n \n\n  <img class="ionicImage" src="assets/images/ionic-logo.png" alt="logo de Ionic" />\n\n\n\n  <p>\n\n    El mercado móvil es enorme y cada vez crece más, por lo que muchas entidades quieren desarrollar sus propias aplicaciones móviles para abrirse su hueco en el mercado. Pero un desarrollo especifico para móvil necesita sus propios especialistas y puede ser costoso, es por ello que surgen las aplicaciones móviles híbridas que revolucionan el mercado.\n\nLo que antes te costaba dos o tres desarrollos independientes ahora se puede unir uno único, reduciendo considerablemente el cote y agilizando el proceso. También hace que no se necesite estar especializado en varias tecnologías diferentes, si no que con conocimientos de web puedes desarrollar la aplicación móvil, la web y la de escritorio.\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-ionic\page-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PageIonic);
    return PageIonic;
}());

//# sourceMappingURL=page-ionic.component.js.map

/***/ })

});
//# sourceMappingURL=3.js.map