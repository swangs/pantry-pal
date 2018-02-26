webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_details_recipe_details_component__ = __webpack_require__("./src/app/recipe-details/recipe-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loggedin_guard__ = __webpack_require__("./src/app/loggedin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// , canActivate: [AuthGuard]
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__landing_page_landing_page_component__["a" /* LandingPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__loggedin_guard__["a" /* LoggedInGuard */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]] },
    { path: 'recipes/:id', component: __WEBPACK_IMPORTED_MODULE_3__recipe_details_recipe_details_component__["a" /* RecipeDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__loggedin_guard__["a" /* LoggedInGuard */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__loggedin_guard__["a" /* LoggedInGuard */]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_8__loggedin_guard__["a" /* LoggedInGuard */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipes_recipes_component__ = __webpack_require__("./src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipe_details_recipe_details_component__ = __webpack_require__("./src/app/recipe-details/recipe-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // replaces previous Http service



// import { IngredientsComponent } from './ingredients/ingredients.component';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */],
                // IngredientsComponent,
                __WEBPACK_IMPORTED_MODULE_6__recipes_recipes_component__["a" /* RecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__recipe_details_recipe_details_component__["a" /* RecipeDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__landing_page_landing_page_component__["a" /* LandingPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__recipe_service__["a" /* RecipeService */],
                __WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signupUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('api/users/', user, { headers: headers });
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('api/users/login', user, { headers: headers });
    };
    AuthService.prototype.userPage = function () {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.http.get('api/users/user', { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    // Checks if token is stored in localstorage
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports) {

module.exports = ".landing-page {\n  margin-top: 50px;\n  padding: 100px 0px;\n  width: 100%;\n  min-width: 1000px;\n  height: 500px;\n  background-color: #659DBD;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-image: url(https://images.unsplash.com/photo-1503767849114-976b67568b02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=834896599ce28318d8bc1500ad27112a&auto=format&fit=crop&w=1350&q=80);\n  background-size: cover;\n}\n\n.content-container {\n  width: 60%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.title-and-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#welcome {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: 100;\n  font-size: 15px;\n  font-weight: 100;\n  padding-bottom: 2px;\n  border-bottom: 1px solid white;\n}\n\n#title {\n  font-family: 'Roboto Slab', serif;\n  font-size: 100px;\n  font-weight: 700;\n  line-height: 100px;\n}\n\n#description {\n  font-family: 'Roboto Slab', serif;\n  font-size: 22px;\n  letter-spacing: 0.04em;\n  padding-top: 30px;\n  text-align: center;\n  text-shadow: 0px 0px 1px black;\n}\n\n.buttons {\n  padding: 30px;\n}\n\n.md-trigger {\n  width: 200px;\n  height: 65px;\n  border-radius: 40px;\n  background-color: #659DBD;\n  border: 3px solid white;\n  color: white;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 18px;\n  letter-spacing: 0.06em;\n  margin: 0px 20px;\n}\n\n.md-trigger:hover {\n  width: 200px;\n  height: 65px;\n  border-radius: 40px;\n  background-color: white;\n  border: 3px solid white;\n  color: #659DBD;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 18px;\n  letter-spacing: 0.06em;\n  margin: 0px 20px;\n  cursor: pointer;\n}\n\n.functionality {\n  width: 100%;\n  min-width: 910px;\n  height: 700px;\n  background-color: #fbeec1;\n}\n\n.technologies {\n  width: 100%;\n  min-width: 910px;\n  height: 600px;\n  background-color: #daad86;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.technologies img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 70%;\n  padding: 80px 50px;\n  padding-left: 0px;\n}\n\n.footer {\n  width: 100%;\n  height: 100px;\n  background-color: #8d8741;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.footer img {\n  width: 35px;\n  height: 35px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 20%;\n}\n\n.footer div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.footer div p {\n  padding: 20px 70px;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 35px;\n}\n\n.footer div section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n/* Carosel - code from https://codepen.io/AMKohn/details/EKJHf */\n\n.slides {\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    margin: 0 auto;\n    position: relative;\n}\n\n.slides * {\n    user-select: none;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n    -webkit-touch-callout: none;\n}\n\n.slides input { display: none; }\n\n.slide-container { display: block; }\n\n.slide {\n    top: 0;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transition: all 1.0s forwards;\n    transition: all 1.0s forwards;\n}\n\n.slide img {\n    width: 60%;\n    height: 70%;\n    padding: 20px 50px;\n}\n\n.slide p {\n    width: 50%;\n    height: 70%;\n    padding: 50px 100px;\n}\n\n.nav label {\n    width: 150px;\n    height: 100%;\n    display: none;\n    position: absolute;\n\t  opacity: 0;\n    z-index: 9;\n    cursor: pointer;\n    -webkit-transition: opacity .2s;\n    transition: opacity .2s;\n    color: white;\n    font-size: 150px;\n    text-align: center;\n    line-height: 700px;\n    font-family: \"Varela Round\", sans-serif;\n    /* background-color: rgba(204, 203, 203, 0.2); */\n    text-shadow: 0px 0px 15px rgb(209, 203, 203);\n}\n\n.slide:hover + .nav label { opacity: 0.3; }\n\n.nav label:hover { opacity: 1; }\n\n.nav .next { right: 0; }\n\ninput:checked + .slide-container .slide {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-transition: all .5s ease-in-out;\n    transition: all .5s ease-in-out;\n}\n\ninput:checked + .slide-container .nav label { display: block; }\n\n.nav-dots {\n\twidth: 100%;\n\tbottom: 9px;\n\theight: 11px;\n\tdisplay: block;\n\tposition: absolute;\n\ttext-align: center;\n}\n\n.nav-dots .nav-dot {\n\ttop: -5px;\n\twidth: 11px;\n\theight: 11px;\n\tmargin: 0 4px;\n\tposition: relative;\n\tborder-radius: 100%;\n\tdisplay: inline-block;\n\tbackground-color: rgba(0, 0, 0, 0.6);\n}\n\n.nav-dots .nav-dot:hover {\n\tcursor: pointer;\n\tbackground-color: rgba(0, 0, 0, 0.8);\n}\n\ninput#img-1:checked ~ .nav-dots label#img-dot-1,\ninput#img-2:checked ~ .nav-dots label#img-dot-2,\ninput#img-3:checked ~ .nav-dots label#img-dot-3 {\n\tbackground: rgba(0, 0, 0, 0.8);\n}"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"landing-page\">\n    <div class='content-container'>\n      <div class='title-and-body'>\n        <p id='welcome'>\n          WELCOME TO\n        </p>\n        <p id='title'>\n          Pantry Pal\n        </p>\n        <p id='description'>\n        Unused food and leftovers are a problem everyone faces. Ever find yourself unsure of what you can make with that half full\n        bottle of teriyaki sauce? $165 billion worth of food is wasted each year by Americans. Pantry Pal solves this problem by\n        searching a recipe database and determining which recipes are readily available to make. Users can customize their list of\n        current ingredients and find new or favorite recipes to make. Sign up and start cooking today!\n        </p>\n      </div>\n      <div class='buttons'>\n        <app-signup></app-signup>\n        <app-login></app-login>\n        <button class=\"md-trigger\" data-modal=\"modal-1\" (click)=\"openSignupModal()\">Sign Up</button>\n        <button class=\"md-trigger\" data-modal=\"modal-1\" (click)=\"openLoginModal()\">Login</button>\n      </div>\n    </div>\n  </div>\n\n  <div class='functionality'>\n    <ul class=\"slides\">\n      <input type=\"radio\" name=\"radio-btn\" id=\"img-1\" checked />\n      <li class=\"slide-container\">\n        <div class=\"slide\">\n          <p>Adding Ingredients</p>\n          <img src=\"http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg\" />\n        </div>\n        <div class=\"nav\">\n          <label for=\"img-3\" class=\"prev\">&#x2039;</label>\n          <label for=\"img-2\" class=\"next\">&#x203a;</label>\n        </div>\n      </li>\n    \n      <input type=\"radio\" name=\"radio-btn\" id=\"img-2\" />\n      <li class=\"slide-container\">\n        <div class=\"slide\">\n          <p>Selecting Recipes</p>\n          <img src=\"http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg\" />\n        </div>\n        <div class=\"nav\">\n          <label for=\"img-1\" class=\"prev\">&#x2039;</label>\n          <label for=\"img-3\" class=\"next\">&#x203a;</label>\n        </div>\n      </li>\n    \n      <input type=\"radio\" name=\"radio-btn\" id=\"img-3\" />\n      <li class=\"slide-container\">\n        <div class=\"slide\">\n          <p>Slide 3</p>\n          <img src=\"http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg\" />\n        </div>\n        <div class=\"nav\">\n          <label for=\"img-2\" class=\"prev\">&#x2039;</label>\n          <label for=\"img-1\" class=\"next\">&#x203a;</label>\n        </div>\n      </li>\n    \n      <li class=\"nav-dots\">\n        <label for=\"img-1\" class=\"nav-dot\" id=\"img-dot-1\"></label>\n        <label for=\"img-2\" class=\"nav-dot\" id=\"img-dot-2\"></label>\n        <label for=\"img-3\" class=\"nav-dot\" id=\"img-dot-3\"></label>\n      </li>\n    </ul>\n  </div>\n    \n  <div class='technologies'>\n    <img src=\"https://i.imgur.com/bKgzF4D.png\" alt=\"\">\n  </div>\n\n  <div class='footer'>\n    <div>\n      <section>\n        <p>\n          Jonathan Abantao\n          <a target='_blank' href='https://github.com/swangs/pantry-pal'><img src=\"https://image.flaticon.com/icons/svg/23/23957.svg\" alt=\"github\"></a>\n          <a target='_blank' href='https://www.linkedin.com/in/jmabantao/'><img src=\"https://image.freepik.com/free-icon/linkedin-logo-ios-7-interface-symbol_318-33633.jpg\" alt=\"linkedin\"></a>\n        </p>\n      </section>\n      <section>\n        <p>\n          Katie Noonan\n          <a target='_blank' href='https://github.com/swangs/pantry-pal'><img src=\"https://image.flaticon.com/icons/svg/23/23957.svg\" alt=\"github\"></a>      \n          <a target='_blank' href='https://www.linkedin.com/in/catherine-noonan-601330133/'><img src=\"https://image.freepik.com/free-icon/linkedin-logo-ios-7-interface-symbol_318-33633.jpg\" alt=\"linkedin\"></a>\n        </p>\n      </section>\n      <section>\n        <p>\n          Steven Wang\n          <a target='_blank' href='https://github.com/swangs/pantry-pal'><img src=\"https://image.flaticon.com/icons/svg/23/23957.svg\" alt=\"github\"></a>      \n          <a target='_blank' href='https://www.linkedin.com/in/s-wang/'><img src=\"https://image.freepik.com/free-icon/linkedin-logo-ios-7-interface-symbol_318-33633.jpg\" alt=\"linkedin\"></a>\n        </p>\n      </section>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.openSignupModal = function () {
        document.getElementsByClassName('signup-modal')[0].classList.add('md-show');
    };
    LandingPageComponent.prototype.openLoginModal = function () {
        document.getElementsByClassName('login-modal')[0].classList.add('md-show');
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__("./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/loggedin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['./user']);
            return false;
        }
    };
    LoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-modal {\n\tposition: fixed;\n\tcolor: black;\n\ttop: 40%;\n\tleft: 50%;\n\twidth: 30%;\n\theight: 30%;\n\tmin-width: 500px;\n\tmin-height: 300px;\n\tz-index: 2000;\n\tvisibility: hidden;\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\t-webkit-transform: translateX(-50%) translateY(-50%);\n\t        transform: translateX(-50%) translateY(-50%);\n}\n\n.md-show {\n\tvisibility: visible;\n}\n\n.md-overlay {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\tvisibility: hidden;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1000;\n\topacity: 0;\n\tbackground: rgba(50,50,50,0.8);\n\t-webkit-transition: all 0.3s;\n\ttransition: all 0.3s;\n}\n\n.md-show ~ .md-overlay {\n\topacity: 1;\n\tvisibility: visible;\n}\n\n.md-perspective,\n.md-perspective body {\n\theight: 100%;\n\toverflow: hidden;\n}\n\n.md-perspective body  {\n\tbackground: #222;\n\t-webkit-perspective: 600px;\n\t        perspective: 600px;\n}\n\n.container {\n\tbackground: #e74c3c;\n\tmin-height: 100%;\n}\n\n.md-effect-1 .md-content {\n\t-webkit-transform: scale(0.7);\n\ttransform: scale(0.7);\n\topacity: 0;\n\t-webkit-transition: all 0.3s;\n\ttransition: all 0.3s;\n}\n\n.md-show.md-effect-1 .md-content {\n\t-webkit-transform: scale(1);\n\ttransform: scale(1);\n\topacity: 1;\n}\n\n.md-content {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground: #FFFFFF;\n\tposition: relative;\n\tborder-radius: 15px;\n\theight: 100%;\n\tpadding: 50px;\n\tborder: 5px solid #659dbd;\n}\n\n.md-content p {\n\tfont-family: 'Roboto Slab', serif;\n\tfont-weight: 700;\n\tfont-size: 40px;\n\tcolor: #659dbd;\n\ttext-align: center;\n\twidth: 100%;\n\tpadding: 20px;\n\tborder-bottom: 1px solid #d3d3d3;\n}\n\n.login-form {\n\tpadding: 20px;\n\twidth: 100%;\n\tmin-width: 400px;\n}\n\n.login-username-total {\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding-bottom: 20px;\n}\n\n#login-username {\n\tfont-family: 'Roboto Slab', serif;\n\twidth: 22%;\n\tfont-size: 17px;\n\tpadding-top: 5px;\n}\n\n#login-username-input {\n\twidth: 78%;\n\theight: 25px;\n\tpadding: 0px 5px;\n\tfont-family: 'Roboto Slab', serif;\n\tfont-weight: 700;\n\tfont-size: 14px;\n\tletter-spacing: 0.07em;\n\tcolor: black;\n}\n\n.login-password-total {\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding-bottom: 20px;\n}\n\n#login-password {\n\tfont-family: 'Roboto Slab', serif;\n\twidth: 22%;\n\tfont-size: 17px;\n\tpadding-top: 5px;\n}\n\n#login-password-input {\n\twidth: 78%;\n\theight: 25px;\n\tpadding: 0px 5px;\n}\n\ninput[type=submit], input[type=reset] {\n\tfont-family: 'Roboto Slab', serif;\n\tfont-weight: 700;\n\tfont-size: 20px;\n\tletter-spacing: 0.07em;\n    background-color: #659dbd;\n    border: none;\n    color: white;\n    padding: 10px 32px;\n    margin: 4px 2px;\n    cursor: pointer;\n\twidth: 100%;\n}\n\n.close-button {\n\tposition: absolute;\n    top: 20px;\n\tleft: 20px;\n\tfont-size: 25px;\n\tfont-weight: 100;\n\topacity: 0.3;\n\tbackground: none;\n    border: none;\n    cursor: pointer;\n}\n\n.close-button:hover {\n\tcursor: pointer;\n\topacity: 1.0;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-modal md-effect-1\" id=\"modal-2\">\n  <div class=\"md-content\">\n    <button class='close-button' (click)=\"closeModal()\">X</button>\n\n    <p>Log In!</p>\n\n    <form class='login-form' (submit)=\"handleLogin()\">\n      <div class='login-username-total'>\n        <label id='login-username'>Username:</label>\n        <input id='login-username-input' type=\"text\" [(ngModel)]=\"username\" name=\"username\" />\n      </div>\n      <div class='login-password-total'>\n        <label id='login-password'>Password:</label>\n        <input id='login-password-input' type=\"password\" [(ngModel)]=\"password\" name=\"password\" />\n      </div>\n      <input id='login-button' type=\"submit\" value=\"Log In\" />\n    </form>\n\t</div>\n</div>\n\n<div class=\"md-overlay\" (click)=\"closeModal()\"></div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.closeModal = function () {
        document.getElementsByClassName('login-modal')[0].classList.remove('md-show');
    };
    LoginComponent.prototype.handleError = function (_a) {
        var error = _a.error;
        if (error && error.errors) {
            Object.values(error.errors).forEach(function (errMsg) {
                console.log(errMsg['message']);
            });
        }
    };
    LoginComponent.prototype.handleLogin = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (data) {
            _this.authService.storeUserData(data['token'], data['user']);
            _this.router.navigate(['/user']);
        }, function (err) {
            _this.handleError(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50px;\n  width: 100vw;\n  -webkit-box-shadow: 0px 2px 25px 0px #90909075;\n          box-shadow: 0px 2px 25px 0px #90909075;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  background-color: #FBEEC1;\n}\n\n.nav-title {\n  font-size: 25px;\n  font-weight: 700;\n  color: #659DBD;\n  margin: auto 0px auto 25px;\n  cursor: pointer;\n}\n\n.nav-buttons {\n  margin: auto 25px auto 0px;\n}\n\n.nav-button {\n  cursor: pointer;\n  height: 25px;\n  margin-right: 5px;\n  border-radius: 5px;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <h1 routerLink=\"/\" class=\"nav-title\">{{title}}</h1>\n  <div class=\"nav-buttons\">\n    <!-- <button *ngIf=\"authService.loggedIn()\" routerLink=\"/user\" class=\"nav-button\" type=\"button\" name=\"button\">My Recipies</button> -->\n    <button *ngIf=\"!authService.loggedIn()\" class=\"nav-button\" (click)=\"openSignupModal()\" type=\"button\" name=\"button\">Sign Up</button>\n    <button *ngIf=\"!authService.loggedIn()\" class=\"nav-button\" (click)=\"openLoginModal()\" type=\"button\" name=\"button\">Login</button>\n    <button *ngIf=\"authService.loggedIn()\" routerLink=\"/\" class=\"nav-button\" type=\"button\" name=\"button\" (click)=\"handleLogout()\">Logout</button>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Pantry Pal';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.handleLogout = function () {
        this.authService.logout();
    };
    NavbarComponent.prototype.openSignupModal = function () {
        document.getElementsByClassName('signup-modal')[0].classList.add('md-show');
    };
    NavbarComponent.prototype.openLoginModal = function () {
        document.getElementsByClassName('login-modal')[0].classList.add('md-show');
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/recipe-details/recipe-details.component.css":
/***/ (function(module, exports) {

module.exports = "p {\n  font-weight: 400;\n  font-size: 18px;\n  color: #659DBD;\n  margin: 15px 0px;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.recipe-detail {\n  margin-top: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow-y: scroll;\n  min-height: calc(100vh - 50px);\n}\n\n.recipe-sidebar {\n  width: 400px;\n  -webkit-box-shadow: 2px 0px 10px 0px #90909075;\n          box-shadow: 2px 0px 10px 0px #90909075;\n  background: #FBEEC125;\n}\n\n.recipe-title {\n  font-weight: 700;\n  font-size: 45px;\n  margin: 15px 30px;\n  color: #607D8B;\n}\n\n.recipe-img {\n  margin: 15px 30px;\n  width: 350px;\n  border-radius: 15px;\n  -webkit-box-shadow: 2px 2px 5px 1px #607D8B;\n          box-shadow: 2px 2px 5px 1px #607D8B;\n}\n\n.ingredient-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.ingredient-img {\n  min-width: 50px;\n  min-height: 50px;\n  max-width: 50px;\n  max-height: 50px;\n  margin: 5px 15px 5px 30px;\n}\n\n.recipe-main {\n  padding: 0px 30px;\n  background: #8D874125;\n}\n\n.directions-title {\n  font-weight: 700;\n  font-size: 35px;\n  margin: 15px 0px;\n  color: #607D8B;\n}\n\n.additional-info {\n  min-width: 200px;\n  padding: 0px 15px;\n  -webkit-box-shadow: -2px 0px 10px 0px #90909075;\n          box-shadow: -2px 0px 10px 0px #90909075;\n}\n\n.nutrition-list {\n  margin: auto;\n}\n\n.nutrition-list h1 {\n  font-weight: 700;\n  font-size: 20px;\n  margin: 15px 0px;\n  color: #607D8B;\n}\n\n.nutrition-list p {\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/recipe-details/recipe-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"recipe-detail\" *ngIf=\"recipe\">\n  <div class=\"recipe-sidebar\">\n    <h2 class=\"recipe-title\" >{{ recipe.title | uppercase }}</h2>\n    <img class=\"recipe-img\" src=\"{{recipe.image}}\" alt=\"\">\n    <ul class=\"ingredients-list\">\n      <li class=\"ingredient-item\" *ngFor=\"let ingredient of recipe.extendedIngredients\">\n        <img class=\"ingredient-img\" src=\"{{ingredient.image}}\" alt=\"\">\n        <p>{{ingredient.originalString}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"recipe-main\">\n    <h3 class=\"directions-title\">Directions</h3>\n    <ul *ngFor=\"let instructions of recipe.analyzedInstructions\">\n      <li *ngFor=\"let steps of instructions.steps\">\n        <p>{{steps.step}}</p>\n      </li>\n      <p>For more details, visit <a href=\"{{recipe.sourceUrl}}\" target=\"_blank\">{{recipe.sourceName}}</a></p>\n    </ul>\n    <button (click)=\"goBack()\">go back</button>\n  </div>\n  <div class=\"additional-info\">\n    <ul class=\"nutrition-list\">\n      <h1>Nutrition Information</h1>\n      <p>Vegetarian: {{recipe.vegetarian}}</p>\n      <p>Vegan: {{recipe.vegan}}</p>\n      <p>Gluten Free: {{recipe.glutenFree}}</p>\n      <p>Dairy Free: {{recipe.dairyFree}}</p>\n      <p>Healty Choice: {{recipe.veryHealthy}}</p>\n      <p>Weight Watcher Smart Points: {{recipe.weightWatcherSmartPoints}}</p>\n      <hr>\n      <p>Caloric Breakdown</p>\n      <!-- <li *ngFor=\"let caloricBreakdown of recipe.nutrition.caloricBreakdown\"> -->\n        <p>Fat: {{recipe.nutrition.caloricBreakdown.percentFat}}%</p>\n        <p>Carbs: {{recipe.nutrition.caloricBreakdown.percentCarbs}}%</p>\n        <p>Protein: {{recipe.nutrition.caloricBreakdown.percentProtein}}%</p>\n      <!-- </li> -->\n      <hr>\n      <li *ngFor=\"let nutrient of recipe.nutrition.nutrients\">\n        <p>{{nutrient.title}}: {{nutrient.amount}}{{nutrient.unit}} ({{nutrient.percentOfDailyNeeds}}% DV)</p>\n        <!-- <p>({{nutrient.percentOfDailyNeeds}}% Daily Value)</p> -->\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipe-details/recipe-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeDetailsComponent = /** @class */ (function () {
    function RecipeDetailsComponent(route, recipeService, location) {
        this.route = route;
        this.recipeService = recipeService;
        this.location = location;
    }
    RecipeDetailsComponent.prototype.ngOnInit = function () {
        this.getRecipe();
    };
    RecipeDetailsComponent.prototype.getRecipe = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.recipeService.getRecipe(id)
            .subscribe(function (recipe) { return _this.recipe = recipe; });
    };
    RecipeDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    RecipeDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recipe-details',
            template: __webpack_require__("./src/app/recipe-details/recipe-details.component.html"),
            styles: [__webpack_require__("./src/app/recipe-details/recipe-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], RecipeDetailsComponent);
    return RecipeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
    }
    //// getIngredients for local file
    // getIngredients(userid): Observable<string[]>{
    //   return of(INGREDIENTS)
    // }
    //// getIngredients and updateIngredients for backend
    RecipeService.prototype.generateTokenHeader = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
    };
    RecipeService.prototype.getIngredients = function (userid) {
        var headers = this.generateTokenHeader();
        return this.http.get("api/users/" + userid, { headers: headers });
    };
    RecipeService.prototype.updateIngredients = function (userid, ingredients) {
        var headers = this.generateTokenHeader();
        return this.http.patch("api/users/" + userid, { ingredients: ingredients }, { headers: headers });
    };
    RecipeService.prototype.getRecipes = function (ingredients) {
        var ingredientsString = ingredients.join(',');
        var ingredientsURI = encodeURIComponent(ingredientsString);
        return this.http.get("api/recipes/findByIngredients?ingredients=" + ingredientsURI);
    };
    RecipeService.prototype.getRecipe = function (id) {
        return this.http.get("api/recipes/" + id);
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-weight: 700;\n  font-size: 35px;\n  margin: 15px 30px;\n  color: #607D8B;\n}\n\n.recipes-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.text {\n  width: 80%;\n}\n\nh3 {\n  color: #659DBD;\n  font-size: 25px;\n  margin: 5px 0px;\n}\n\np {\n  color: #659DBD;\n  font-size: 18px;\n  margin: 5px 0px;\n}\n\nli {\n  width: 350px;\n  height: 350px;\n  cursor: pointer;\n  margin: 10px;\n  padding-top: 15px;\n  background: #DAAD8625;\n  border-radius: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nimg {\n  width: 300px;\n  max-height: 300px;\n  border-radius: 15px;\n  -webkit-box-shadow: 2px 2px 5px 1px #607D8B;\n          box-shadow: 2px 2px 5px 1px #607D8B;\n}\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Recipes</h2>\n<ul class=\"recipes-list\">\n  <li routerLink=\"/recipes/{{recipe.id}}\" *ngFor=\"let recipe of recipes\">\n    <img src=\"{{recipe.image}}\" alt=\"\">\n    <div class=\"text\">\n      <h3>{{recipe.title}}</h3>\n      <p>Used Ingredients: {{recipe.usedIngredientCount}}</p>\n      <p>Missing Ingredients: {{recipe.missedIngredientCount}}</p>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        // this.getRecipes();
        // this.interval = setInterval(() => {
        //      // this.refreshData();
        //      console.log(this.recipes);
        //  }, 5000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], RecipesComponent.prototype, "recipes", void 0);
    RecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__("./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".signup-modal {\n\tposition: fixed;\n\tcolor: black;\n\ttop: 40%;\n\tleft: 50%;\n\twidth: 30%;\n\theight: 30%;\n\tmin-width: 500px;\n\tmin-height: 300px;\n\tz-index: 2000;\n\tvisibility: hidden;\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\t-webkit-transform: translateX(-50%) translateY(-50%);\n\t        transform: translateX(-50%) translateY(-50%);\n}\n\n.md-show {\n\tvisibility: visible;\n}\n\n.md-overlay {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\tvisibility: hidden;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1000;\n\topacity: 0;\n\tbackground: rgba(50,50,50,0.8);\n\t-webkit-transition: all 0.3s;\n\ttransition: all 0.3s;\n}\n\n.md-show ~ .md-overlay {\n\topacity: 1;\n\tvisibility: visible;\n}\n\n.md-perspective,\n.md-perspective body {\n\theight: 100%;\n\toverflow: hidden;\n}\n\n.md-perspective body  {\n\tbackground: #222;\n\t-webkit-perspective: 600px;\n\t        perspective: 600px;\n}\n\n.container {\n\tbackground: #e74c3c;\n\tmin-height: 100%;\n}\n\n.md-effect-1 .md-content {\n\t-webkit-transform: scale(0.7);\n\ttransform: scale(0.7);\n\topacity: 0;\n\t-webkit-transition: all 0.3s;\n\ttransition: all 0.3s;\n}\n\n.md-show.md-effect-1 .md-content {\n\t-webkit-transform: scale(1);\n\ttransform: scale(1);\n\topacity: 1;\n}\n\n.md-content {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground: #FFFFFF;\n\tposition: relative;\n\tborder-radius: 15px;\n\theight: 100%;\n\tpadding: 50px;\n\tborder: 5px solid #659dbd;\n}\n\n.md-content p {\n\tfont-family: 'Roboto Slab', serif;\n\tfont-weight: 700;\n\tfont-size: 40px;\n\tcolor: #659dbd;\n\ttext-align: center;\n\twidth: 100%;\n\tpadding: 20px;\n\tborder-bottom: 1px solid #d3d3d3;\n}\n\n.signup-form {\n\tpadding: 20px;\n\twidth: 100%;\n\tmin-width: 400px;\n}\n\n.signup-username-total {\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding-bottom: 20px;\n}\n\n#signup-username {\n\tfont-family: 'Roboto Slab', serif;\n\twidth: 22%;\n\tfont-size: 17px;\n\tpadding-top: 5px;\n}\n\n#signup-username-input {\n\twidth: 78%;\n\theight: 25px;\n\tpadding: 0px 5px;\n\tfont-family: 'Roboto Slab', serif;\n\tfont-weight: 700;\n\tfont-size: 14px;\n\tletter-spacing: 0.07em;\n\tcolor: black;\n}\n\n.signup-password-total {\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding-bottom: 20px;\n}\n\n#signup-password {\n\tfont-family: 'Roboto Slab', serif;\n\twidth: 22%;\n\tfont-size: 17px;\n\tpadding-top: 5px;\n}\n\n#signup-password-input {\n\twidth: 78%;\n\theight: 25px;\n\tpadding: 0px 5px;\n}\n\ninput[type=submit], input[type=reset] {\n\tfont-family: 'Roboto Slab', serif;\n\tfont-weight: 700;\n\tfont-size: 20px;\n\tletter-spacing: 0.07em;\n    background-color: #659dbd;\n    border: none;\n    color: white;\n    padding: 10px 32px;\n    margin: 4px 2px;\n    cursor: pointer;\n\twidth: 100%;\n}\n\n.close-button {\n\tposition: absolute;\n    top: 20px;\n\tleft: 20px;\n\tfont-size: 25px;\n\tfont-weight: 100;\n\topacity: 0.3;\n\tbackground: none;\n    border: none;\n    cursor: pointer;\n}\n\n.close-button:hover {\n\tcursor: pointer;\n\topacity: 1.0;\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-modal md-effect-1\" id=\"modal-1\">\n\t<div class=\"md-content\">\n    <button class='close-button' (click)=\"closeModal()\">X</button>\n\n    <p>Sign Up!</p>\n\n    <form class='signup-form' (submit)=\"handleSignup()\">\n      <div class='signup-username-total'>\n        <label id='signup-username'>Username:</label>\n        <input id='signup-username-input' type=\"text\" [(ngModel)]=\"username\" name=\"username\" />\n      </div>\n      <div class='signup-password-total'>\n        <label id='signup-password'>Password:</label>\n        <input id='signup-password-input' type=\"password\" [(ngModel)]=\"password\" name=\"password\" />\n      </div>\n      <input id='signup-button' type=\"submit\" value=\"Sign Up!\" />\n    </form>\n\t</div>\n</div>\n\n<div class=\"md-overlay\" (click)=\"closeModal()\"></div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.closeModal = function () {
        document.getElementsByClassName('signup-modal')[0].classList.remove('md-show');
    };
    SignupComponent.prototype.handleError = function (_a) {
        var error = _a.error;
        if (error && error.errors) {
            Object.values(error.errors).forEach(function (errMsg) {
                console.log(errMsg['message']);
            });
        }
    };
    SignupComponent.prototype.handleSignup = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.signupUser(user).subscribe(function (data) {
            _this.authService.storeUserData(data['token'], data['user']);
            _this.router.navigate(['/user']);
        }, function (error) {
            _this.handleError(error);
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ".user-page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow-y: scroll;\n  margin-top: 50px;\n  min-height: calc(100vh - 50px);\n}\n\n.ingredients {\n  min-width: 300px;\n  -webkit-box-shadow: 2px 0px 10px 0px #90909075;\n          box-shadow: 2px 0px 10px 0px #90909075;\n  background: #FBEEC125;\n}\n\n.ingredients h1 {\n  font-size: 40px;\n  font-weight: 700;\n  margin: 15px 30px;\n  color: #659DBD;\n}\n\n.recipes {\n  width: calc(100vw - 300px);\n  background: #8D874125;\n}\n\n.ingredients-title {\n  font-weight: 700;\n  font-size: 25px;\n  margin: 15px 30px;\n  color: #607D8B;\n}\n\n.ingredients-list {\n  margin: 0px 30px;\n}\n\n.ingredients-item {\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em 0px;\n  padding: .3em 0;\n  height: 1.6em;\n  width: 100%;\n  border-radius: 4px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.ingredient-name {\n  margin-left: 15px;\n  color: #659DBD;\n  font-size: 20px;\n}\n\n.remove-ingredient {\n  margin-right: 15px;\n  border-radius: 5px;\n  color: #FF543E;\n}\n\n.remove-ingredient:hover {\n  cursor: pointer;\n  border: 1px solid #FF543E;\n}\n\n.ingredients-input {\n  height: 1.8em;\n  width: 240px;\n  padding: 0px 5px;\n  margin: 15px 30px;\n}\n"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-page\">\n  <div class=\"ingredients\">\n    <h1 *ngIf=\"user\">{{user.username}}</h1>\n    <!-- <app-ingredients [ingredients]=\"ingredients\"></app-ingredients> -->\n    <h2 class=\"ingredients-title\">My Ingredients</h2 >\n    <ul class=\"ingredients-list\">\n      <li class=\"ingredients-item\" *ngFor=\"let ingredient of ingredients\">\n        <h3 class=\"ingredient-name\">{{ingredient}}</h3>\n        <button class=\"remove-ingredient\" type=\"button\" (click)=\"removeIngredient(ingredient)\">X</button>\n      </li>\n    </ul>\n    <input class=\"ingredients-input\"\n      type=\"text\"\n      name=\"\"\n      placeholder=\"Add Ingredient\"\n      (keyup.enter)=\"addIngredient()\"\n      [(ngModel)]=\"ingredient\" >\n\n  </div>\n  <div class=\"recipes\">\n    <app-recipes [recipes]=\"recipes\"></app-recipes>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(recipeService, authService, router) {
        this.recipeService = recipeService;
        this.authService = authService;
        this.router = router;
        this.ingredient = '';
    }
    UserComponent.prototype.ngOnInit = function () {
        // this.getIngredients();
        var _this = this;
        this.authService.userPage().subscribe(function (data) {
            _this.user = data['user'];
            _this.getIngredients();
        }, function (err) {
            return false;
        });
    };
    // to convert to backend
    // 1. Add Auth routes in app-routing-module
    // 2. change recipe.service methods from local to backend.
    // 3. change user.component methods from local to backend.
    // 4. change onInit to getIngredients instead of authService.
    //// methods for local file access
    // getIngredients(): void {
    //   this.recipeService.getIngredients(5)
    //     .flatMap(ingredients => {
    //       this.ingredients = ingredients;
    //       return this.recipeService.getRecipes(ingredients);
    //     }).subscribe(recipes => { this.recipes = recipes; });
    // }
    //
    // addIngredient($event): void {
    //   if (!this.ingredients.includes(this.ingredient)) {
    //     this.ingredients.push(this.ingredient);
    //   }
    //   this.ingredient = ""
    //   this.getIngredients();
    // }
    //
    // removeIngredient(name): void {
    //   const index = this.ingredients.indexOf(name);
    //   this.ingredients.splice(index, 1);
    //   this.getIngredients();
    // }
    //// methods for backend file access
    UserComponent.prototype.getIngredients = function () {
        var _this = this;
        this.recipeService.getIngredients(this.user['_id'])
            .flatMap(function (ingredients) {
            _this.ingredients = ingredients;
            return _this.recipeService.getRecipes(ingredients);
        }).subscribe(function (recipes) { _this.recipes = recipes; });
    };
    UserComponent.prototype.addIngredient = function () {
        var _this = this;
        if (!this.ingredients.includes(this.ingredient)) {
            this.ingredients.push(this.ingredient);
            var options = {
                ingredients: this.ingredients,
                userid: this.user['_id']
            };
            this.recipeService.updateIngredients(this.user['_id'], this.ingredients)
                .flatMap(function (result) { _this.getIngredients(); return result; })
                .subscribe();
        }
        this.ingredient = '';
    };
    UserComponent.prototype.removeIngredient = function (name) {
        var _this = this;
        var index = this.ingredients.indexOf(name);
        this.ingredients.splice(index, 1);
        this.recipeService.updateIngredients(this.user['_id'], this.ingredients)
            .flatMap(function (result) { _this.getIngredients(); return result; })
            .subscribe();
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map