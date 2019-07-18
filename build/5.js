webpackJsonp([5],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAngularModule", function() { return PageAngularModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_angular_component__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageAngularModule = (function () {
    function PageAngularModule() {
    }
    PageAngularModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_angular_component__["a" /* PageAngular */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_angular_component__["a" /* PageAngular */]),
            ],
        })
    ], PageAngularModule);
    return PageAngularModule;
}());

//# sourceMappingURL=page-angular.component.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageAngular; });
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


var PageAngular = (function () {
    function PageAngular(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PageAngular = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-angular',template:/*ion-inline-start:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-angular\page-angular.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Angular</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n    <ion-content padding class="contentAngularStyle">\n\n  <h1 class="angularTitle">Angular</h1>\n\n  <h1 class="angularSubtitle">Web Applications</h1>\n\n\n\n  <img class="angularImage" src="assets/images/angular-logo.png" alt="logo de Angular" />\n\n\n\n  <p>\n\n    Podemos definir Angular como un framework web para la parte de front-end en las aplicaciones Cliente-Servidor, tiene una primera versión bajo el nombre de AngularJS, que trabaja con JavaScript, sin embargo, nosotros usaremos las nuevas versiones de Angular que trabajan con TypeScript y que presentan muchas nuevas funcionalidades y mejoras de rendimiento y a la hora de desarrollar.\n\n\n\nTambién debemos alabar al CLI de Angular, una herramienta del propio Angular que nos permite crear de forma muy sencilla mediante comandos por la terminar proyectos y otros muchos elementos como interfaces, enumeraciones, componentes, etc.\n\n\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-angular\page-angular.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PageAngular);
    return PageAngular;
}());

//# sourceMappingURL=page-angular.component.js.map

/***/ })

});
//# sourceMappingURL=5.js.map