webpackJsonp([0],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTestingModule", function() { return PageTestingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_testing_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_warrior_component_warrior_component__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageTestingModule = (function () {
    function PageTestingModule() {
    }
    PageTestingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_testing_component__["a" /* PageTesting */],
                __WEBPACK_IMPORTED_MODULE_3__components_warrior_component_warrior_component__["a" /* WarriorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_testing_component__["a" /* PageTesting */]),
            ],
        })
    ], PageTestingModule);
    return PageTestingModule;
}());

//# sourceMappingURL=page-testing.component.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarriorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WarriorComponent = (function () {
    function WarriorComponent() {
        this.warriorClasses = ["Luchador", "Mago", "Paladin", "Sacerdote", "Cazador"];
        this.weapons = ["Gran espada", "Espadas dobles", "Arco", "Maza", "Espada larga", "Hacha", "Báculo"];
        this.warriors = [];
    }
    WarriorComponent.prototype.getWarriorClasses = function () {
        return this.warriorClasses;
    };
    WarriorComponent.prototype.getWeapons = function () {
        return this.weapons;
    };
    WarriorComponent.prototype.setWarrior = function (warrior) {
        this.warriors.push(warrior);
    };
    WarriorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'warrior-component',template:/*ion-inline-start:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-testing\components\warrior-component\warrior-component.html"*/'<div class="divWarriorStyle" *ngFor="let warrior of warriors">\n\n    <h3>Guerrero: {{warrior.name}}</h3>\n\n    <p>Clase: {{warrior.warriorClass}}</p>\n\n    <p>Arma: {{warrior.weapon}}</p>\n\n    <p>Descripción: {{warrior.description}}</p>\n\n    <p></p>\n\n</div>'/*ion-inline-end:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-testing\components\warrior-component\warrior-component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], WarriorComponent);
    return WarriorComponent;
}());

//# sourceMappingURL=warrior-component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTesting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_warrior_component_warrior_component__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageTesting = (function () {
    function PageTesting(navCtrl) {
        this.navCtrl = navCtrl;
        this.warriorClasses = [];
        this.weapons = [];
        this.defaultWarrior = {
            name: "",
            warriorClass: "",
            weapon: "",
            description: ""
        };
        this.warrior = JSON.parse(JSON.stringify(this.defaultWarrior));
        this.nameProvided = false;
    }
    PageTesting.prototype.ngOnInit = function () {
        this.warriorClasses = this.warriorComponent.getWarriorClasses();
        this.weapons = this.warriorComponent.getWeapons();
    };
    PageTesting.prototype.createWarrior = function () {
        if (this.warrior.name === "") {
            this.nameProvided = true;
        }
        else {
            this.nameProvided = false;
            this.warriorComponent.setWarrior(JSON.parse(JSON.stringify(this.warrior)));
            this.warrior = JSON.parse(JSON.stringify(this.defaultWarrior));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("warriorComponent"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_warrior_component_warrior_component__["a" /* WarriorComponent */])
    ], PageTesting.prototype, "warriorComponent", void 0);
    PageTesting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-testing',template:/*ion-inline-start:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-testing\page-testing.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Zona de pruebas</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="contentTestingStyle">\n\n   \n\n    <h1 class="testingTitle">Zona de Pruebas</h1>\n\n    <h1 class="testingSubtitle">zona para probar tests unitarios y e2e</h1>\n\n    <div style="margin-top: 5%">\n\n      <ion-item class="itemTestingStyle" id="NameField">\n\n        <ion-label  *ngIf="nameProvided" style=\'color: red\'>Campo requerido</ion-label>\n\n          <ion-label > Nombre: <span style=\'color: red\'>*</span></ion-label>\n\n          <ion-input type="text" [(ngModel)]="warrior.name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="itemTestingStyle" id="ClassField">\n\n        <ion-label> Clase del guerrero</ion-label>\n\n        <ion-select [(ngModel)]="warrior.warriorClass" interface="popover">\n\n          <ion-option  *ngFor="let warriorClass of warriorClasses">{{warriorClass}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="itemTestingStyle" id="WeaponField">\n\n        <ion-label> Arma</ion-label>\n\n        <ion-select [(ngModel)]="warrior.weapon" interface="popover">\n\n          <ion-option  *ngFor="let weapon of weapons">{{weapon}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      \n\n      <ion-item class="itemTestingStyle" id="DescriptionField">\n\n        <ion-label> Descripción</ion-label>\n\n        <ion-textarea rows="6" cols="20" placeholder="Introduce aqui una description" [(ngModel)]="warrior.description"></ion-textarea>\n\n      </ion-item>\n\n    </div>\n\n\n\n    <button ion-button (click)="createWarrior()" class="testingButton">Crear Guerrero</button>\n\n    <warrior-component #warriorComponent></warrior-component>    \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"E:\Ingenieria Informatica\Trabajo final carrera\tfg-ionic-warriors\ionic-unit-testing-example\src\pages\page-testing\page-testing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PageTesting);
    return PageTesting;
}());

//# sourceMappingURL=page-testing.component.js.map

/***/ })

});
//# sourceMappingURL=0.js.map