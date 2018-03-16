webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_email_component__ = __webpack_require__("./src/app/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__members_members_component__ = __webpack_require__("./src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// Must export the config
var firebaseConfig = {
    apiKey: 'AIzaSyDh-uMvzLJkT5knIi9qQgHUVQBoHCJwhog',
    authDomain: 'angular-432d0.firebaseapp.com',
    databaseURL: 'https://angular-432d0.firebaseio.com',
    projectId: 'angular-432d0',
    storageBucket: 'angular-432d0.appspot.com',
    messagingSenderId: '434428323612'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__email_email_component__["a" /* EmailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__members_members_component__["a" /* MembersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routes */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__auth_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/app.module.js.map

/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members_members_component__ = __webpack_require__("./src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__email_email_component__ = __webpack_require__("./src/app/email/email.component.ts");






var router = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login-email', component: __WEBPACK_IMPORTED_MODULE_5__email_email_component__["a" /* EmailComponent */] },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_2__members_members_component__["a" /* MembersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthGuard */]] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(router);
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/app.routes.js.map

/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__ = __webpack_require__("./node_modules/angularfire2/angularfire2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].from(this.auth)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['/login']);
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__["b" /* AngularFireAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__["b" /* AngularFireAuth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/auth.service.js.map

/***/ }),

/***/ "./src/app/email/email.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n    <a routerLink=\"/login\" id=\"goback\">Go back</a>\r\n    <h2>Custom Login</h2>\r\n\r\n    <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\r\n\r\n    <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\r\n\r\n      <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\r\n      <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\r\n\r\n      <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Log in</button>\r\n      <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailComponent = (function () {
    function EmailComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.state = '';
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    EmailComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            }, {
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthProviders */].Password,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Password,
            }).then(function (success) {
                console.log(success);
                _this.router.navigate(['/members']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-email',
            template: __webpack_require__("./src/app/email/email.component.html"),
            styles: [__webpack_require__("./src/app/email/email.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* moveIn */])(), Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* fallIn */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], EmailComponent);
    return EmailComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/email.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "#lock {\r\n    width:40%;\r\n    margin: 1.5em auto 4em auto;\r\n    display:block;\r\n}\r\n\r\n#fb {\r\n    background:#3B5998 url('facebook.df111651ca25e5a54a2e.svg') no-repeat 14px 6px;\r\n    background-size: 47px;\r\n    color:#fff;\r\n}\r\n\r\n#google {\r\n    border: 1px solid #95989A;\r\n    background: #fff  url('google.45dff0bab1cfddd02551.svg') no-repeat 25px;\r\n    background-size: 25px;\r\n}\r\n\r\n#email {\r\n    background: #ECECEC  url('email.e75a0390ebcf4b02d1bd.svg') no-repeat 25px;\r\n    background-size: 25px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #page {\r\n        padding:1em;\r\n    }\r\n    #toolbar {\r\n        width:90%;\r\n        margin-left: -45%;\r\n    }\r\n    #fb {\r\n        background:#3B5998;\r\n    }\r\n\r\n    #google {\r\n        background: #fff;\r\n    }\r\n\r\n    #email {\r\n        background: #ECECEC;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n  <img src=\"assets/images/lock.svg\" id=\"lock\">\r\n\r\n    <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\r\n\r\n  <button (click)=\"loginFb()\" id=\"fb\">Login With Facebook</button><br>\r\n  <button (click)=\"loginGoogle()\" id=\"google\">Login With Google</button>\r\n  <button routerLink=\"/login-email\" id=\"email\">Email</button>\r\n\r\n  <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"alc\">No account? <strong>Create one here</strong></a>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    LoginComponent.prototype.loginFb = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthProviders */].Facebook,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup,
        }).then(function (success) {
            _this.router.navigate(['/members']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup,
        }).then(function (success) {
            _this.router.navigate(['/members']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* moveIn */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/login.component.js.map

/***/ }),

/***/ "./src/app/members/members.component.css":
/***/ (function(module, exports) {

module.exports = "#toolbar {\r\n    padding:0;\r\n    width:70%;\r\n    margin-left:-35%;\r\n}\r\n\r\nheader {\r\n    background:#3B8598;\r\n    width:100%;\r\n}\r\n\r\n.basic-btn {\r\n    width:100px;\r\n    margin:0;\r\n}\r\n\r\n#page {\r\n    padding:3em;\r\n    margin:0;\r\n}\r\n\r\n#page img {\r\n    margin-top:30px;\r\n}\r\n\r\nh2 {\r\n    margin:0;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #page {\r\n        padding:1em;\r\n    }\r\n    #toolbar {\r\n        width:90%;\r\n        margin-left: -45%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\" id=\"toolbar\">\r\n    <header [@fallIn]=\"state\">\r\n      <button (click)=\"logout()\" class=\"basic-btn\">Logout</button>\r\n    </header>\r\n    <div id=\"page\" [@moveInLeft]=\"state\">\r\n      <h2>Hey {{ name.auth.displayName }}!</h2>\r\n\r\n      <img src=\"assets/images/filler.png\" />\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MembersComponent = (function () {
    function MembersComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.state = '';
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.name = auth;
            }
        });
    }
    MembersComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/login');
    };
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-members',
            template: __webpack_require__("./src/app/members/members.component.html"),
            styles: [__webpack_require__("./src/app/members/members.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* moveIn */])(), Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* fallIn */])(), Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["c" /* moveInLeft */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], MembersComponent);
    return MembersComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/members.component.js.map

/***/ }),

/***/ "./src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = moveIn;
/* harmony export (immutable) */ __webpack_exports__["a"] = fallIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = moveInLeft;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");

function moveIn() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* trigger */])('moveIn', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ opacity: '0', transform: 'translateX(100px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* animate */])('.6s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* animate */])('.3s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* trigger */])('fallIn', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ opacity: '0', transform: 'translateY(40px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* animate */])('.4s .2s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* animate */])('.3s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* trigger */])('moveInLeft', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ opacity: '0', transform: 'translateX(-100px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* animate */])('.6s .2s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/router.animations.js.map

/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n  <a routerLink=\"/login\" id=\"goback\">Go back</a>\r\n\r\n  <h2>Join now</h2>\r\n\r\n  <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\r\n    \r\n  <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\r\n\r\n    <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\r\n    <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\r\n\r\n    <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Create my account</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(af, router) {
        this.af = af;
        this.router = router;
        this.state = '';
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.createUser({
                email: formData.value.email,
                password: formData.value.password
            }).then(function (success) {
                _this.router.navigate(['/members']);
            }).catch(function (err) {
                _this.error = err;
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* moveIn */])(), Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* fallIn */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/signup.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_28" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("./node_modules/core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("./node_modules/core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("./node_modules/core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("./node_modules/core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("./node_modules/core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("./node_modules/core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("./node_modules/core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("./node_modules/core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("./node_modules/core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("./node_modules/core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("./node_modules/core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/achud/Documents/New Trash/SEHPL/SEHPLWEBSITE/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map