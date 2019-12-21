(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Ajit Kumar Baral. Personal Website";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2modules-easypiechart */ "./node_modules/ng2modules-easypiechart/index.js");
/* harmony import */ var ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_6__["EasyPieChartModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header #home>\n  <div class=\"container\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n      <button class=\"navbar-toggler ml-auto\" type=\"button\" data-toggle=\"collapse\" data-target=\"#menuBar\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"menuBar\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\" \n          *ngFor=\"let menu of menuItems\" [class]=\"currentMenu === menu ? 'active' : ''\">\n          <a class=\"nav-link text-uppercase\" (click)=\"setMenu(menu)\">{{ menu }}</a></li>\n        </ul>\n      </div>\n    </nav>\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"introduction\">\n          <p class=\"greed\">Hey there !</p>\n          <p class=\"intro-name\">I am Ajit Kumar Baral</p>\n          <p class=\"designation\">Software Engineer</p>\n        </div>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <img src=\"/assets/photo.png\" alt=\"ajit-kumar-baral-photo-png\" width=\"100%\"/>\n        <div class=\"media\">\n          <a target=\"_blank\" href=\"https://github.com/ajitkbaral\"\n            ><img src=\"/assets/github.png\" alt=\"ajit-kumar-baral-github-url\"\n          /></a>\n          <a target=\"_blank\" href=\"https://www.linkedin.com/in/ajitkbaral/\"\n            ><img src=\"/assets/linkedin.png\" alt=\"ajit-kumar-baral-linkedin-url\"\n          /></a>\n          <a target=\"_blank\" href=\"https://www.facebook.com/ajitkbaral\"\n            ><img src=\"/assets/facebook.png\" alt=\"ajit-kumar-baral-facebook-url\"\n          /></a>\n          <a target=\"_blank\" href=\"https://www.instagram.com/ajitkbaral/\"\n            ><img\n              src=\"/assets/instagram.png\"\n              alt=\"ajit-kumar-baral-instagram-url\"\n          /></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<section id=\"about\" #about>\n  <div class=\"container\">\n    <h2 class=\"text-uppercase\">About me</h2>\n    <p>\n      I am a <b>full-stack developer</b> specialized in <b>frontend</b> and <b>backend</b> development for complex scalable web application. I also specialized in create <b>mobile</b> applications for both <b>Android</b> and <b>iOS</b> devices. \n    </p>\n  </div>\n</section>\n<hr />\n<section id=\"portfolio\" #portfolio>\n  <div class=\"container mt-5\">\n    <h2 class=\"text-uppercase\">Portfolio</h2>\n    <h5 class=\"text-center text-uppercase\"><b>Work Place</b></h5>\n    <div class=\"text-center p-5\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6 col-lg-4\" *ngFor=\"let workPlace of workPlaces; index as i\">\n          <div class=\"image-container\">\n            <img [src]=\"'/assets/' + workPlace.imageName + '.png'\" />\n          </div>\n          <p class=\"pt-3 text-center\"><b>{{ workPlace.organizationName }}</b></p>\n          <p class=\"text-center\">{{ workPlace.designation }}</p>\n          <hr *ngIf=\"i !== workPlaces.length - 1\"/>\n        </div>\n      </div>\n    </div>\n    <hr />\n    <h5 class=\"text-center text-uppercase mt-5\"><b>Freelance</b></h5>\n    <div class=\"text-center p-5\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-12\">\n          <div class=\"image-container\">\n            <img\n              src=\"/assets/nepal_govt_logo.png\"\n              alt=\"nepal-government-logo\"\n            />\n          </div>\n          <p class=\"pt-3 text-center\"><b>Hamro Geruwa</b></p>\n          <p class=\"text-center\">Geruwa Municipality</p>\n          <hr />\n        </div>\n        <div class=\"col-md-4 col-sm-12\">\n          <div class=\"image-container\">\n            <img\n              src=\"/assets/kvda_logo.png\"\n              alt=\"kathmandu-valley-development-authority-logo\"\n            />\n          </div>\n          <p class=\"pt-3 text-center\"><b>KVDA</b></p>\n          <p class=\"text-center\">Kathmandu Valley Development Authority</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<hr />\n<section id=\"my-skills\" #mySkills>\n  <div class=\"container mt-5 mb-5\">\n    <h2 class=\"text-uppercase\">Skills</h2>\n    <div class=\"skills-container mt-4 mb-4\">\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-3\" *ngFor=\"let skill of skills\">\n          <div class=\"skill-item\">\n            <span>{{ skill.percent }}%</span>\n            <easy-pie-chart\n              [percent]=\"skill.percent\"\n              [options]=\"{ barColor: '#000' }\"\n            ></easy-pie-chart>\n          </div>\n          <p>{{ skill.name }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<hr />\n<section id=\"personal-works\" #personalWork>\n  <div class=\"container mt-5 mb-5\">\n    <h2 class=\"text-uppercase\">Personal Works</h2>\n    <div *ngFor=\"let work of personalWorks; index as i\">\n      <div class=\"row mt-4 mb-4\">\n        <div class=\"col-md-8\">\n          <div class=\"per-work-container mt-3\">\n            <img src=\"/assets/{{ work.logoName }}\" [alt]=\"work.logoName\">\n            <div class=\"ml-2\">\n              <span>{{ work.title }}</span>\n              <p>{{ work.type }}</p>\n            </div>\n          </div>\n          <p class=\"mt-3\">{{ work.description }}</p>\n        </div>\n        <div class=\"col-md-4 text-center\">\n          <img src=\"/assets/{{ work.imageName }}\" [alt]=\"work.imageName\" width=\"100%\">\n        </div>\n      </div>\n      <hr *ngIf=\"i !== personalWorks.length - 1\">\n    </div>\n  </div>\n</section>\n<hr />\n<section id=\"contact\" #contact>\n  <div class=\"container mt-5 mb-5\">\n    <h2 class=\"text-uppercase\">Contact</h2>\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"messageSent\">\n      Your message has been sent! I will contact you soon. Thank you.\n    </div>\n    <div class=\"form-container p-3\">\n        <p>If you want to contact me, send me a message. I will contact you soon.</p>\n        <form [formGroup]=\"messageFormGroup\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"firstNameHelp\"\n                  placeholder=\"First Name\" formControlName=\"firstName\">\n                <small id=\"firstNameHelp\" class=\"form-text text-muted\">Please enter your first name</small>\n                <small class=\"form-text text-danger\" *ngIf=\"messageFormGroup.get('firstName').hasError('required') && messageFormGroup.get('firstName').touched\">This field is required</small>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" aria-describedby=\"lastNameHelp\" placeholder=\"Last Name\" formControlName=\"lastName\">\n                  <small id=\"lastNameHelp\" class=\"form-text text-muted\">Please enter your last name</small>\n                  <small class=\"form-text text-danger\" *ngIf=\"messageFormGroup.get('lastName').hasError('required') && messageFormGroup.get('lastName').touched\">This field is required</small>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" formControlName=\"email\">\n                <small id=\"emailHelp\" class=\"form-text text-muted\">Please enter your email address</small>\n                <small class=\"form-text text-danger\" *ngIf=\"messageFormGroup.get('email').hasError('required') && messageFormGroup.get('email').touched\">This field is required</small>\n                <small class=\"form-text text-danger\" *ngIf=\"messageFormGroup.get('email').hasError('email') && messageFormGroup.get('email').touched\">Invalid email format.</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" rows=\"5\" placeholder=\"Message\" formControlName=\"message\"></textarea>\n                <small class=\"form-text text-danger\" *ngIf=\"messageFormGroup.get('message').hasError('required') && messageFormGroup.get('message').touched\">This field is required</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"d-flex justify-content-center\">\n            <button type=\"submit\" class=\"btn btn-dark pl-5 pr-5 mt-3\">Send</button>\n          </div>\n        </form>\n    </div>\n  </div>\n</section>\n<footer class=\"p-3\">\n  <div class=\"d-flex justify-content-center\">\n    <span>Ajit Kumar Baral &copy; 2019</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  padding: 0; }\n\nh2 {\n  font-size: 48px;\n  font-weight: 490; }\n\nheader {\n  -webkit-clip-path: polygon(0 70%, 0 0, 100% 0, 100% 100%);\n  clip-path: polygon(0 70%, 0 0, 100% 0, 100% 100%);\n  width: 100%;\n  background-color: #1a1a1a; }\n\nheader nav.bg-dark {\n    background-color: #1a1a1a !important; }\n\nheader nav ul li a {\n    cursor: pointer; }\n\nheader .introduction {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    height: 100%; }\n\nheader .introduction p {\n      text-transform: uppercase;\n      color: white; }\n\nheader .introduction p.greed {\n        font-size: 24px; }\n\nheader .introduction p.intro-name {\n        font-size: 48px; }\n\nheader .introduction p.designation {\n        font-size: 30px; }\n\nheader .media {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 10px 0; }\n\n#about {\n  margin-top: -70px; }\n\n#about p {\n    padding: 35px 0; }\n\n#portfolio .image-container {\n  height: 140px; }\n\n#portfolio hr {\n  display: none; }\n\n#my-skills .skills-container {\n  text-align: center; }\n\n#my-skills .skills-container p {\n    font-weight: 600; }\n\n#my-skills .skills-container .skill-item {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center; }\n\n#my-skills .skills-container .skill-item span {\n      position: absolute;\n      font-size: 28px; }\n\n#personal-works .per-work-container {\n  display: -webkit-box;\n  display: flex; }\n\n#personal-works .per-work-container span {\n    font-size: 28px; }\n\nfooter {\n  background-color: #1a1a1a;\n  color: white; }\n\n@media only screen and (min-width: 1200px) {\n  header {\n    height: 605px; } }\n\n@media only screen and (max-width: 1200px) {\n  header {\n    height: 505px; } }\n\n@media only screen and (max-width: 768px) {\n  p, h2 {\n    text-align: center; }\n  header {\n    -webkit-clip-path: none;\n    clip-path: none;\n    height: inherit;\n    padding-bottom: 20px; }\n  #about {\n    margin-top: 20px; }\n  #portfolio hr {\n    display: block;\n    margin: 50px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaHJleWFiYXJhbC9EZXNrdG9wL0FqaXQgS3VtYXIgQmFyYWwvRGV2ZWxvcG1lbnRzL1dlYiBEZXZlbG9wbWVudHMvbXktd2Vic2l0ZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseURBQXlEO0VBQ3pELGlEQUFpRDtFQUNqRCxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBSjNCO0lBUU0sb0NBQW9DLEVBQUE7O0FBUjFDO0lBYVUsZUFBZSxFQUFBOztBQWJ6QjtJQThDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVksRUFBQTs7QUFqRGhCO01BbURNLHlCQUF5QjtNQUN6QixZQUFZLEVBQUE7O0FBcERsQjtRQXNEUSxlQUFlLEVBQUE7O0FBdER2QjtRQXlEUSxlQUFlLEVBQUE7O0FBekR2QjtRQTREUSxlQUFlLEVBQUE7O0FBNUR2QjtJQWtFSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGNBQWMsRUFBQTs7QUFJbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFEbkI7SUFHSSxlQUFlLEVBQUE7O0FBSW5CO0VBRUksYUFBYSxFQUFBOztBQUZqQjtFQUtJLGFBQWEsRUFBQTs7QUFJakI7RUFFSSxrQkFBa0IsRUFBQTs7QUFGdEI7SUFJTSxnQkFBZ0IsRUFBQTs7QUFKdEI7SUFPTSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTs7QUFUekI7TUFXUSxrQkFBa0I7TUFDbEIsZUFBZSxFQUFBOztBQU12QjtFQUVJLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQUZqQjtJQUlNLGVBQWUsRUFBQTs7QUFLckI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUlkO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CLEVBQUE7RUFHdEI7SUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtJQUVJLGNBQWM7SUFDZCxjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogNDkwO1xufVxuXG5oZWFkZXIge1xuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwIDcwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSk7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDcwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuXG4gIG5hdiB7XG4gICAgJi5iZy1kYXJrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWEgIWltcG9ydGFudDtcbiAgICB9XG4gICAgdWwge1xuICAgICAgbGkge1xuICAgICAgICBhIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBuYXYge1xuICAvLyAgIHVsIHtcbiAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAvLyAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAvLyAgICAgcGFkZGluZzogNDBweCAwO1xuICAvLyAgICAgbGkge1xuICAvLyAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAvLyAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgLy8gICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxYTFhMWE7XG4gIC8vICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4zcztcbiAgLy8gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAvLyAgICAgICBhIHtcbiAgLy8gICAgICAgICBjb2xvcjogd2hpdGU7XG4gIC8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGxpOmhvdmVyLFxuICAvLyAgICAgLmFjdGl2ZSB7XG4gIC8vICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcbiAgLy8gICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLmludHJvZHVjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAmLmdyZWVkIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuICAgICAgJi5pbnRyby1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgfVxuICAgICAgJi5kZXNpZ25hdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWVkaWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG59XG5cbiNhYm91dCB7XG4gIG1hcmdpbi10b3A6IC03MHB4O1xuICBwIHtcbiAgICBwYWRkaW5nOiAzNXB4IDA7XG4gIH1cbn1cblxuI3BvcnRmb2xpbyB7XG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTQwcHg7XG4gIH1cbiAgaHIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuI215LXNraWxscyB7XG4gIC5za2lsbHMtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuc2tpbGwtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4jcGVyc29uYWwtd29ya3Mge1xuICAucGVyLXdvcmstY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgfVxufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYwNXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgaGVpZ2h0OiA1MDVweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHAsIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBoZWFkZXIge1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBub25lO1xuICAgIGNsaXAtcGF0aDogbm9uZTtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAjYWJvdXQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAjcG9ydGZvbGlvIHtcbiAgICBociB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, db) {
        this.fb = fb;
        this.db = db;
        this.menuItems = [
            "Home",
            "About",
            "Portfolio",
            "Skills",
            "Personal works",
            "Contact"
        ];
        this.workPlaces = [
            {
                organizationName: 'Bajra Technologies Pvt. Ltd.',
                designation: 'Software Engineer',
                imageName: 'bajra_logo'
            },
            {
                organizationName: 'United Nations',
                designation: 'Mobile Application Developer',
                imageName: 'un_logo'
            },
            {
                organizationName: 'K.K. Engineering & Constructions Pvt. Ltd.',
                designation: 'Associated Web & Software Developer',
                imageName: 'kkec_logo'
            }
        ];
        this.skills = [
            {
                name: "Java",
                percent: 90
            },
            {
                name: "Python",
                percent: 80
            },
            {
                name: "JavaScript",
                percent: 75
            },
            {
                name: "Swift",
                percent: 68
            },
            {
                name: "Database",
                percent: 80
            },
            {
                name: "HTML",
                percent: 90
            },
            {
                name: "CSS",
                percent: 75
            }
        ];
        this.personalWorks = [
            {
                title: "Service Prov",
                type: "Android Application",
                description: "Service Prov is the application where the users can search and book local service providing professionals. This application is created for Android using Java and the backend is created in Python Django Framework with MySQL database.",
                logoName: "service_prov_logo.png",
                imageName: "service_prov_app.png"
            },
            {
                title: "Air Pay",
                type: "Android Application",
                description: "Air Pay is the financial application in which the users can pay digitally using the Android device created in Java where as the backend implementation uses the Java Spring Framework with MySQL database.",
                logoName: "airpay_logo.png",
                imageName: "airpay_app.png"
            }
        ];
        this.messageFormGroup = fb.group({
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.setMenu(this.menuItems[0]);
    };
    HomeComponent.prototype.setMenu = function (menu) {
        this.currentMenu = menu;
        var elementRef;
        switch (menu) {
            case "About":
                elementRef = this.about;
                break;
            case "Portfolio":
                elementRef = this.portfolio;
                break;
            case "Skills":
                elementRef = this.mySkills;
                break;
            case "Personal works":
                elementRef = this.personalWork;
                break;
            case "Contact":
                elementRef = this.contact;
                break;
            default:
                elementRef = this.home;
        }
        this.scrollToMenu(elementRef);
    };
    HomeComponent.prototype.scrollToMenu = function (elementRef) {
        elementRef.nativeElement.scrollIntoView({ behavior: "smooth" });
        this.currentMenu = this.menuItems[0];
    };
    HomeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.sendClick) {
            return;
        }
        this.sendClick = true;
        if (this.messageFormGroup.valid) {
            this.db.collection('messages').add({
                firstName: this.messageFormGroup.get('firstName').value,
                lastName: this.messageFormGroup.get('lastName').value,
                email: this.messageFormGroup.get('email').value,
                message: this.messageFormGroup.get('message').value,
                submittedDate: new Date()
            });
            this.messageSent = true;
            this.messageFormGroup.reset();
            setTimeout(function () {
                _this.messageSent = false;
            }, 5000);
            this.sendClick = false;
        }
        else {
            this.messageFormGroup.get('firstName').markAsTouched();
            this.messageFormGroup.get('lastName').markAsTouched();
            this.messageFormGroup.get('email').markAsTouched();
            this.messageFormGroup.get('message').markAsTouched();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("home"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "home", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("about"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "about", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("portfolio"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "portfolio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mySkills"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "mySkills", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("personalWork"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "personalWork", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("contact"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "contact", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC-ZbAr1uc07zjSt9YJvTBPhK6idCIPJDc",
        authDomain: "my-website-7008f.firebaseapp.com",
        databaseURL: "https://my-website-7008f.firebaseio.com",
        projectId: "my-website-7008f",
        storageBucket: "my-website-7008f.appspot.com",
        messagingSenderId: "977853593021",
        appId: "1:977853593021:web:d93360269b3f8fb43fced4",
        measurementId: "G-VGW54S0V1W"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shreyabaral/Desktop/Ajit Kumar Baral/Developments/Web Developments/my-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map