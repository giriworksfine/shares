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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\r\n    background-color: black\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-inverse\" style=\"background-color:#17a2b8\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span> \n            </button>\n            <a class=\"navbar-brand\" href=\"#\" style=\"color:white\">Stock-Villa</a>\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li  routerLinkActive=\"active\" ><a routerLink=\"home\"style=\"color:white\"><i class=\"glyphicon glyphicon-home\" ></i> &nbsp;Home</a></li>\n              <li routerLinkActive=\"active\"><a routerLink=\"news\"  style=\"color:white\"><i class=\"glyphicon glyphicon-globe\"></i>&nbsp;News</a></li>\n              <li routerLinkActive=\"active\"><a routerLink=\"stocks\"  style=\"color:white\"><i class=\"glyphicon glyphicon-shopping-cart\"></i>&nbsp;Stocks</a></li>\n              <li routerLinkActive=\"active\"><a routerLink=\"portfolio\"  style=\"color:white\"><i class=\"glyphicon glyphicon-book\"></i>&nbsp;Portfolio</a></li>\n              <li  routerLinkActive=\"active\"><a routerLink=\"support\" style=\"color:white\"><i class=\"fab fa-rocketchat\"></i>&nbsp;Support</a></li>\n              <li routerLinkActive=\"active\"><a routerLink=\"contact\"  style=\"color:white\"><i class=\"glyphicon glyphicon-globe\"></i>&nbsp;Contact</a></li>\n              <li routerLinkActive=\"active\"><a routerLink=\"login\"  style=\"color:white\"><i class=\"glyphicon glyphicon-globe\"></i>&nbsp;Login</a></li>\n    \n            </ul>\n    \n          </div>\n        </div>\n      </nav>\n</header>\n<div class=\"container-fluid\" >\n    <router-outlet></router-outlet>\n</div>\n<footer>\n    \n</footer>"

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
        this.title = 'Crud';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stocks/stocks.component */ "./src/app/stocks/stocks.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _currency_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./currency.pipe */ "./src/app/currency.pipe.ts");
/* harmony import */ var _countrycode_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./countrycode.pipe */ "./src/app/countrycode.pipe.ts");
/* harmony import */ var _convert_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./convert.pipe */ "./src/app/convert.pipe.ts");
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/register/register.component */ "./src/app/login/register/register.component.ts");
/* harmony import */ var _login_access_access_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/access/access.component */ "./src/app/login/access/access.component.ts");
/* harmony import */ var _login_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/forgot/forgot.component */ "./src/app/login/forgot/forgot.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");






















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"] },
    { path: 'stocks', component: _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_9__["StocksComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], children: [
            { path: '', component: _login_access_access_component__WEBPACK_IMPORTED_MODULE_18__["AccessComponent"] },
            { path: 'register', component: _login_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"] },
            { path: 'forgot', component: _login_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_19__["ForgotComponent"] }
        ] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"] },
    { path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_13__["SupportComponent"] },
    { path: 'profile', redirectTo: 'home' },
    { path: '**', redirectTo: '/' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"], _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_9__["StocksComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"], _support_support_component__WEBPACK_IMPORTED_MODULE_13__["SupportComponent"], _currency_pipe__WEBPACK_IMPORTED_MODULE_14__["CurrencyPipe"], _countrycode_pipe__WEBPACK_IMPORTED_MODULE_15__["CountrycodePipe"], _convert_pipe__WEBPACK_IMPORTED_MODULE_16__["ConvertPipe"], _login_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _login_access_access_component__WEBPACK_IMPORTED_MODULE_18__["AccessComponent"], _login_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_19__["ForgotComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_20__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/convert.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/convert.pipe.ts ***!
  \*********************************/
/*! exports provided: ConvertPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertPipe", function() { return ConvertPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConvertPipe = /** @class */ (function () {
    function ConvertPipe() {
    }
    ConvertPipe.prototype.transform = function (value, ammount, from, to) {
        if (from != undefined && to != undefined && ammount != undefined) {
            return "";
        }
        else {
        }
    };
    ConvertPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'convert'
        })
    ], ConvertPipe);
    return ConvertPipe;
}());



/***/ }),

/***/ "./src/app/countrycode.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/countrycode.pipe.ts ***!
  \*************************************/
/*! exports provided: CountrycodePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrycodePipe", function() { return CountrycodePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CountrycodePipe = /** @class */ (function () {
    function CountrycodePipe() {
    }
    CountrycodePipe.prototype.transform = function (value) {
        for (var i = 0; i < Object.keys(value).length; i++) {
            return value['INR'];
        }
    };
    CountrycodePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'countrycode'
        })
    ], CountrycodePipe);
    return CountrycodePipe;
}());



/***/ }),

/***/ "./src/app/currency.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/currency.pipe.ts ***!
  \**********************************/
/*! exports provided: CurrencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyPipe", function() { return CurrencyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurrencyPipe = /** @class */ (function () {
    function CurrencyPipe() {
    }
    CurrencyPipe.prototype.transform = function (value) {
        return "1 USD =" + " " + value['INR'] + " " + "Indian Rupees";
    };
    CurrencyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'currency'
        })
    ], CurrencyPipe);
    return CurrencyPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blink {\r\n    animation: blink 2s steps(5, start) infinite;\r\n    -webkit-animation: blink 1s steps(5, start) infinite;\r\n  }\r\n  @keyframes blink {\r\n    to {\r\n      visibility: hidden;\r\n    }\r\n  }\r\n  @-webkit-keyframes blink {\r\n    to {\r\n      visibility: hidden;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7SUFDNUMsb0RBQW9EO0VBQ3REO0VBQ0E7SUFDRTtNQUNFLGtCQUFrQjtJQUNwQjtFQUNGO0VBQ0E7SUFDRTtNQUNFLGtCQUFrQjtJQUNwQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxpbmsge1xyXG4gICAgYW5pbWF0aW9uOiBibGluayAycyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIHRvIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xyXG4gICAgdG8ge1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<img src=\"./assets/stocks.jpg\" class=\"img-responsive\" style=\"min-width:100%;height:350px\">\r\n<div class=\"row\">\r\n  <div class=\"col-sm-3\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel panel-heading\">\r\n        <h5><strong>Commodities</strong></h5>\r\n      </div>\r\n      <div class=\"panel panel-body\">\r\n\r\n      </div>\r\n     \r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n      <div class=\"panel panel-info\">\r\n        <div class=\"panel panel-heading\">\r\n          <h5><strong>Currencies</strong></h5>\r\n        </div>\r\n        <div class=\"panel panel-body\">\r\n                    <h5 *ngFor=\"let c of currencies; let i=index\">\r\n                     <strong>{{c.rates |currency }}</strong> \r\n                    </h5>\r\n\r\n                      <table>\r\n                        <tr>\r\n                          <td colspan=\"2\" align=\"center\" style=\"padding-bottom: 10px\">\r\n                              <div class=\"form-group\">\r\n                                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"eval\" id=\"convertvalue\" placeholder=\"Enter Value to convert\">\r\n                           \r\n                                </div>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                              <div class=\"form-group\">\r\n                                  <label for=\"email\">From County:</label>\r\n                                  <select class=\"form-control\"  [(ngModel)]=\"from\">\r\n                                     <option>Select country</option>\r\n                                     <option *ngFor=\"let d of codes\" [ngValue]=\"d.code\"> {{d.name}}-[{{d.code}}]</option>\r\n                                    </select>\r\n                                </div>\r\n                       \r\n                          </td>\r\n                          <td>\r\n                              <div class=\"form-group\">\r\n                                  <label for=\"pwd\">To Country:</label>\r\n                                  <select class=\"form-control\"  [(ngModel)]=\"to\" (change)=\"gettotal(eval,from,to)\">\r\n                                      <option>Select country</option>\r\n                                     <option  *ngFor=\"let d of codes\"  [ngValue]=\"d.code\" > {{d.name}}-[{{d.code}}]</option>\r\n                                    </select>\r\n                                </div>\r\n                            \r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td colspan=\"2\" style=\"text-align:center\"></td>\r\n                        </tr>\r\n                      </table>\r\n                      \r\n                     \r\n               \r\n             \r\n          </div>\r\n       \r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel panel-heading\">\r\n            <h5><strong>Bonds</strong></h5>\r\n          </div>\r\n          <div class=\"panel panel-body\">\r\n    \r\n          </div>\r\n         \r\n        </div>\r\n      </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n  \r\n      <div class=\"panel panel-info\">\r\n          <div class=\"panel panel-heading\">\r\n              \r\n            <label><strong>Today Headlines : {{today |  date:'medium'}}</strong></label>&nbsp;&nbsp;<i class=\"fa fa-spinner fa-spin\" style=\"font-size:20px\"></i>\r\n          </div>\r\n          <div class=\"panel panel-body\">\r\n              <div class=\"panel panel-danger\">\r\n                 \r\n                  <div class=\"panel panel-body\">\r\n                       <ul>\r\n                         <li  *ngFor=\"let n of todayNews.articles\"><span >{{n.title}}</span></li>\r\n                       </ul>\r\n                    \r\n                  </div>\r\n                 \r\n                </div>\r\n\r\n          </div>\r\n         \r\n        </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(news, http) {
        this.news = news;
        this.http = http;
        this.todayNews = [];
        this.currencies = [];
        this.myJSON = [];
        this.rates = [];
        this.keys = [];
        this.codes = [];
        this.codeobj = {};
        this.records = [];
    }
    HomeComponent.prototype.gettotal = function () {
        var _this = this;
        this.records = [];
        this.http.get("https://api.exchangeratesapi.io/latest?base=" + this.from).subscribe(function (response) { return _this.records.push(response); });
        console.log(this.records);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todaycurrency();
        this.getnewsdata();
        this.id = setInterval(function () {
            _this.getnewsdata();
        }, 5000);
        this.getdate();
        this.k = setInterval(function () {
            _this.getdate();
        }, 1000);
        var obj = {
            "AED": "United Arab Emirates Dirham",
            "AFN": "Afghan Afghani",
            "ALL": "Albanian Lek",
            "AMD": "Armenian Dram",
            "ANG": "Netherlands Antillean Guilder",
            "AOA": "Angolan Kwanza",
            "ARS": "Argentine Peso",
            "AUD": "Australian Dollar",
            "AWG": "Aruban Florin",
            "AZN": "Azerbaijani Manat",
            "BAM": "Bosnia-Herzegovina Convertible Mark",
            "BBD": "Barbadian Dollar",
            "BDT": "Bangladeshi Taka",
            "BGN": "Bulgarian Lev",
            "BHD": "Bahraini Dinar",
            "BIF": "Burundian Franc",
            "BMD": "Bermudan Dollar",
            "BND": "Brunei Dollar",
            "BOB": "Bolivian Boliviano",
            "BRL": "Brazilian Real",
            "BSD": "Bahamian Dollar",
            "BTC": "Bitcoin",
            "BTN": "Bhutanese Ngultrum",
            "BWP": "Botswanan Pula",
            "BYN": "New Belarusian Ruble",
            "BYR": "Belarusian Ruble",
            "BZD": "Belize Dollar",
            "CAD": "Canadian Dollar",
            "CDF": "Congolese Franc",
            "CHF": "Swiss Franc",
            "CLF": "Chilean Unit of Account (UF)",
            "CLP": "Chilean Peso",
            "CNY": "Chinese Yuan",
            "COP": "Colombian Peso",
            "CRC": "Costa Rican Col\u00f3n",
            "CUC": "Cuban Convertible Peso",
            "CUP": "Cuban Peso",
            "CVE": "Cape Verdean Escudo",
            "CZK": "Czech Republic Koruna",
            "DJF": "Djiboutian Franc",
            "DKK": "Danish Krone",
            "DOP": "Dominican Peso",
            "DZD": "Algerian Dinar",
            "EGP": "Egyptian Pound",
            "ERN": "Eritrean Nakfa",
            "ETB": "Ethiopian Birr",
            "EUR": "Euro",
            "FJD": "Fijian Dollar",
            "FKP": "Falkland Islands Pound",
            "GBP": "British Pound Sterling",
            "GEL": "Georgian Lari",
            "GGP": "Guernsey Pound",
            "GHS": "Ghanaian Cedi",
            "GIP": "Gibraltar Pound",
            "GMD": "Gambian Dalasi",
            "GNF": "Guinean Franc",
            "GTQ": "Guatemalan Quetzal",
            "GYD": "Guyanaese Dollar",
            "HKD": "Hong Kong Dollar",
            "HNL": "Honduran Lempira",
            "HRK": "Croatian Kuna",
            "HTG": "Haitian Gourde",
            "HUF": "Hungarian Forint",
            "IDR": "Indonesian Rupiah",
            "ILS": "Israeli New Sheqel",
            "IMP": "Manx pound",
            "INR": "Indian Rupee",
            "IQD": "Iraqi Dinar",
            "IRR": "Iranian Rial",
            "ISK": "Icelandic Kr\u00f3na",
            "JEP": "Jersey Pound",
            "JMD": "Jamaican Dollar",
            "JOD": "Jordanian Dinar",
            "JPY": "Japanese Yen",
            "KES": "Kenyan Shilling",
            "KGS": "Kyrgystani Som",
            "KHR": "Cambodian Riel",
            "KMF": "Comorian Franc",
            "KPW": "North Korean Won",
            "KRW": "South Korean Won",
            "KWD": "Kuwaiti Dinar",
            "KYD": "Cayman Islands Dollar",
            "KZT": "Kazakhstani Tenge",
            "LAK": "Laotian Kip",
            "LBP": "Lebanese Pound",
            "LKR": "Sri Lankan Rupee",
            "LRD": "Liberian Dollar",
            "LSL": "Lesotho Loti",
            "LTL": "Lithuanian Litas",
            "LVL": "Latvian Lats",
            "LYD": "Libyan Dinar",
            "MAD": "Moroccan Dirham",
            "MDL": "Moldovan Leu",
            "MGA": "Malagasy Ariary",
            "MKD": "Macedonian Denar",
            "MMK": "Myanma Kyat",
            "MNT": "Mongolian Tugrik",
            "MOP": "Macanese Pataca",
            "MRO": "Mauritanian Ouguiya",
            "MUR": "Mauritian Rupee",
            "MVR": "Maldivian Rufiyaa",
            "MWK": "Malawian Kwacha",
            "MXN": "Mexican Peso",
            "MYR": "Malaysian Ringgit",
            "MZN": "Mozambican Metical",
            "NAD": "Namibian Dollar",
            "NGN": "Nigerian Naira",
            "NIO": "Nicaraguan C\u00f3rdoba",
            "NOK": "Norwegian Krone",
            "NPR": "Nepalese Rupee",
            "NZD": "New Zealand Dollar",
            "OMR": "Omani Rial",
            "PAB": "Panamanian Balboa",
            "PEN": "Peruvian Nuevo Sol",
            "PGK": "Papua New Guinean Kina",
            "PHP": "Philippine Peso",
            "PKR": "Pakistani Rupee",
            "PLN": "Polish Zloty",
            "PYG": "Paraguayan Guarani",
            "QAR": "Qatari Rial",
            "RON": "Romanian Leu",
            "RSD": "Serbian Dinar",
            "RUB": "Russian Ruble",
            "RWF": "Rwandan Franc",
            "SAR": "Saudi Riyal",
            "SBD": "Solomon Islands Dollar",
            "SCR": "Seychellois Rupee",
            "SDG": "Sudanese Pound",
            "SEK": "Swedish Krona",
            "SGD": "Singapore Dollar",
            "SHP": "Saint Helena Pound",
            "SLL": "Sierra Leonean Leone",
            "SOS": "Somali Shilling",
            "SRD": "Surinamese Dollar",
            "STD": "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
            "SVC": "Salvadoran Col\u00f3n",
            "SYP": "Syrian Pound",
            "SZL": "Swazi Lilangeni",
            "THB": "Thai Baht",
            "TJS": "Tajikistani Somoni",
            "TMT": "Turkmenistani Manat",
            "TND": "Tunisian Dinar",
            "TOP": "Tongan Pa\u02bbanga",
            "TRY": "Turkish Lira",
            "TTD": "Trinidad and Tobago Dollar",
            "TWD": "New Taiwan Dollar",
            "TZS": "Tanzanian Shilling",
            "UAH": "Ukrainian Hryvnia",
            "UGX": "Ugandan Shilling",
            "USD": "United States Dollar",
            "UYU": "Uruguayan Peso",
            "UZS": "Uzbekistan Som",
            "VEF": "Venezuelan Bol\u00edvar Fuerte",
            "VND": "Vietnamese Dong",
            "VUV": "Vanuatu Vatu",
            "WST": "Samoan Tala",
            "XAF": "CFA Franc BEAC",
            "XAG": "Silver (troy ounce)",
            "XAU": "Gold (troy ounce)",
            "XCD": "East Caribbean Dollar",
            "XDR": "Special Drawing Rights",
            "XOF": "CFA Franc BCEAO",
            "XPF": "CFP Franc",
            "YER": "Yemeni Rial",
            "ZAR": "South African Rand",
            "ZMK": "Zambian Kwacha (pre-2013)",
            "ZMW": "Zambian Kwacha",
            "ZWL": "Zimbabwean Dollar"
        };
        var result = Object.keys(obj).map(function (key) {
            return { "code": String(key), "name": obj[key] };
        });
        this.codes = result;
    };
    HomeComponent.prototype.todaycurrency = function () {
        var _this = this;
        this.news.getcurrencies().subscribe(function (data) { return _this.currencies.push(data); });
        this.keys.push(Object.keys(this.currencies));
    };
    HomeComponent.prototype.getnewsdata = function () {
        var _this = this;
        this.news.getnews().subscribe(function (data) { return _this.todayNews = data; });
    };
    HomeComponent.prototype.getdate = function () {
        this.today = new Date();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
        if (this.k) {
            clearInterval(this.id);
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            providers: [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/access/access.component.css":
/*!***************************************************!*\
  !*** ./src/app/login/access/access.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2FjY2Vzcy9hY2Nlc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login/access/access.component.html":
/*!****************************************************!*\
  !*** ./src/app/login/access/access.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel panel-heading\">\n      <img src=\"./assets/logo.png\" style=\"margin-left:auto;margin-right:auto\"  class=\"img-responsive\" width=\"100px\" height=\"100px\">\n      </div>\n      <div class=\"panel panel-body\">\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm)\">\n          <div class=\"form-group\">\n            <label for=\"uname\">\n              UserName:\n            </label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" name=\"username\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"pwd\">\n              Password:\n            </label>\n            <input type=\"password\"  formControlName=\"password\" class=\"form-control\" name=\"password\">\n          </div>\n          <div class=\"form-group\">\n            <button style=\"float: left\" type=\"submit\" class=\"btn btn-info\">Login</button>\n            <button style=\"float: right\" type=\"button\" (click)=\"reset()\" class=\"btn btn-info\">Reset</button>\n          </div>\n          <br>\n          <br>\n          <br>\n          <div class=\"form-group\">\n         <a style=\"float: left\" routerLink=\"forgot\">Forgot Password</a>\n         <a style=\"float: right\" routerLink=\"register\">Click to Register</a>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/access/access.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login/access/access.component.ts ***!
  \**************************************************/
/*! exports provided: AccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessComponent", function() { return AccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AccessComponent = /** @class */ (function () {
    function AccessComponent() {
    }
    AccessComponent.prototype.ngOnInit = function () {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    AccessComponent.prototype.onSubmit = function (form) {
        console.log(form.value);
    };
    AccessComponent.prototype.reset = function (form) {
        this.myForm.reset();
    };
    AccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-access',
            template: __webpack_require__(/*! ./access.component.html */ "./src/app/login/access/access.component.html"),
            styles: [__webpack_require__(/*! ./access.component.css */ "./src/app/login/access/access.component.css")]
        })
    ], AccessComponent);
    return AccessComponent;
}());



/***/ }),

/***/ "./src/app/login/forgot/forgot.component.css":
/*!***************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login/forgot/forgot.component.html":
/*!****************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel panel-heading\">\n      <img src=\"./assets/logo.png\" style=\"margin-left:auto;margin-right:auto\"  class=\"img-responsive\" width=\"100px\" height=\"100px\">\n      </div>\n      <div class=\"panel panel-body\">\n        <form *ngIf=\"!emailstatus\" [formGroup]=\"myForm\" (ngSubmit)=\"check_email(myForm)\">\n          <div class=\"form-group\">\n            <label for=\"uname\">\n            Registered Email\n            </label>\n            <input type=\"email\" formControlName=\"check_email\" class=\"form-control\" name=\"check_email\">\n          </div>\n      \n          <div class=\"form-group\">\n            <button style=\"float: left\" type=\"submit\" class=\"btn btn-info\">Check</button>\n            <button style=\"float: right\" type=\"button\" (click)=\"reset()\" class=\"btn btn-info\">Reset</button>\n          </div>\n           \n        </form>\n        <form *ngIf=\"emailstatus && !otp\" [formGroup]=\"myForm\" (ngSubmit)=\"check_otp(myForm)\">\n          <div class=\"form-group\">\n            <label for=\"uname\">\n            Enter OTP\n            </label>\n            <input type=\"number\" formControlName=\"check_otp\" class=\"form-control\" name=\"check_otp\">\n          </div>\n          <div class=\"form-group\">\n            <button style=\"float: left\" type=\"submit\" class=\"btn btn-info\">Check</button>\n            <button style=\"float: right\" type=\"button\" (click)=\"reset()\" class=\"btn btn-info\">Reset</button>\n          </div>\n           \n        </form>\n        <form *ngIf=\"otp\" [formGroup]=\"myForm\" (ngSubmit)=\"create_pwd(myForm)\">\n          <div class=\"form-group\">\n            <label for=\"uname\">\n           New Password\n            </label>\n            <input type=\"text\" formControlName=\"check_pwd1\" class=\"form-control\" name=\"check_otp\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"uname\">\n           Retype Password\n            </label>\n            <input type=\"text\" formControlName=\"check_pwd2\" class=\"form-control\" name=\"check_otp\">\n          </div>\n          <div class=\"form-group\">\n            <button style=\"float: left\" type=\"submit\" class=\"btn btn-info\">Confirm</button>\n            <button style=\"float: right\" type=\"button\" (click)=\"reset()\" class=\"btn btn-info\">Reset</button>\n          </div> \n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/forgot/forgot.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.ts ***!
  \**************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
        this.emailstatus = false;
        this.otp = false;
        this.useremail = "giri@gmail.com";
        this.userotp = 1234;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            check_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            check_otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    };
    ForgotComponent.prototype.check_email = function (form) {
        if (form.value.check_email == this.useremail) {
            this.emailstatus = !this.emailstatus;
        }
    };
    ForgotComponent.prototype.create_pwd = function (form) {
        console.log(form.value);
    };
    ForgotComponent.prototype.check_otp = function (form) {
        if (form.value.check_otp == this.userotp) {
            this.otp = !this.otp;
        }
    };
    ForgotComponent.prototype.reset = function (form) {
        this.myForm.reset();
    };
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/login/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/login/forgot/forgot.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/login/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel panel-heading\">\n      <img src=\"./assets/logo.png\" style=\"margin-left:auto;margin-right:auto\"  class=\"img-responsive\" width=\"100px\" height=\"100px\">\n      </div>\n      <div class=\"panel panel-body\">\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm)\">\n          <div class=\"form-group\">\n            <label for=\"uname\">\n              Name:\n            </label>\n            <input type=\"text\" formControlName=\"regname\" class=\"form-control\" name=\"username\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">\n              Email:\n            </label>\n            <input type=\"text\" formControlName=\"regemail\" class=\"form-control\" name=\"username\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"contact\">\n              Contact:\n            </label>\n            <input type=\"text\" formControlName=\"regcontact\" class=\"form-control\" name=\"username\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"pwd\">\n              Password:\n            </label>\n            <input type=\"password\"  formControlName=\"password\" class=\"form-control\" name=\"password\">\n          </div>\n          <div class=\"form-group\">\n            <button style=\"float: left\" type=\"submit\" class=\"btn btn-info\">Register</button>\n            <button style=\"float: right\" type=\"button\" (click)=\"reset()\" class=\"btn btn-info\">Reset</button>\n          </div>\n          <br>\n          <br>\n          <br>\n        \n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/login/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/login/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/news.service.ts":
/*!*********************************!*\
  !*** ./src/app/news.service.ts ***!
  \*********************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.getnews = function () {
        return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=e9659b6df7b941d8b8be2b0f7974ef58");
    };
    NewsService.prototype.getcurrencies = function () {
        return this.http.get("https://openexchangerates.org/api/latest.json?app_id=db5cbd941dda4a06ac6e1f04701002be");
    };
    NewsService.prototype.showstock = function () {
        return this.http.get("https://api.iextrading.com/1.0/stock/market/batch?symbols=INTC,MSFT,AAPL,LT,INFY,FB,ACN,GOOGL,JPM,UNH, PFE&types=quote&range=1m");
    };
    NewsService.prototype.conversion = function () {
    };
    NewsService.prototype.getcodes = function () {
        return this.http.get("https://api.iextrading.com/1.0/ref-data/symbols");
    };
    NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n    \n        <div class=\"panel panel-info\">\n            <div class=\"panel panel-heading\">\n                \n          <h4><strong>Today Headlines : {{today |  date:'medium'}}</strong>&nbsp;&nbsp;<i class=\"fa fa-spinner fa-spin\" style=\"font-size:20px\"></i></h4>\n            </div>\n            <div class=\"panel panel-body\">\n                <div class=\"panel panel-danger\">\n                   \n                    <div class=\"panel panel-body\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-6\"  *ngFor=\"let n of todayNews.articles\">\n                            <div class=\"panel panel-info\">\n                                <div class=\"panel panel-heading\">\n                                 <h5>{{n.title}}</h5>\n                                 <h5>Author:{{n.author}}</h5>\n                                 <h5>From:{{n.source.name}}</h5>\n                                </div>\n                                <div class=\"panel panel-body\">\n                                  <img src={{n.urlToImage}} width=\"600px\" height=\"400px\" class=\"img-responsive\">\n                                  <p >{{n.content}}</p>\n                                </div>\n                                <div class=\"panel panel-footer\">\n                                  <p>Source: {{n.url}}</p>\n                                </div>\n                                 \n                              </div>\n                        </div>\n                      </div>\n\n                   \n                    </div>\n                   \n                  </div>\n  \n            </div>\n           \n          </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(news) {
        this.news = news;
        this.todayNews = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getnewsdata();
        this.id = setInterval(function () {
            _this.getnewsdata();
        }, 5000);
        this.getdate();
        this.k = setInterval(function () {
            _this.getdate();
        }, 1000);
    };
    NewsComponent.prototype.getnewsdata = function () {
        var _this = this;
        this.news.getnews().subscribe(function (data) { return _this.todayNews = data; });
        console.log(this.today);
    };
    NewsComponent.prototype.getdate = function () {
        this.today = new Date();
        console.log(this.today);
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            providers: [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]],
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  portfolio works!\n</p>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/stocks/stocks.component.css":
/*!*********************************************!*\
  !*** ./src/app/stocks/stocks.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2Nrcy9zdG9ja3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/stocks/stocks.component.html":
/*!**********************************************!*\
  !*** ./src/app/stocks/stocks.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n      \n          <div class=\"panel panel-info\">\n              <div class=\"panel panel-heading\">\n                  \n            <h4><strong>Today Stock Exchange : {{tday  |  date:'medium'}}</strong>&nbsp;&nbsp;<i class=\"fa fa-spinner fa-spin\" style=\"font-size:20px\"></i></h4>\n              </div>\n              <div class=\"panel panel-body\">\n              <div class=\"row\">\n                <div class=\"col-sm-8\">\n                    \n               \n                    \n                        <select class=\"form-control\"  [(ngModel)]=\"add_company\" (change)=\"getstock(add_company)\">\n                          <option value=\"Select\">Add Company to watch</option>\n                          <option value=\"{{c.symbol}}\" *ngFor=\"let c of stock_codes\" >{{c.name}}-{{c.symbol}}</option>\n                        </select>\n                      \n                </div>\n                <div class=\"col-sm-4\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search the Company\">\n                </div>\n             \n              </div>\n              <br>\n            \n               <div class=\"row\">\n                 <div class=\"col-sm-12\">\n                    <div class=\"table-responsive\">\n                   <table class=\"table table-bordered\">\n                     <tr>\n                       <th>Sl.no</th>\n                       <th>Company Name</th>\n                       <th>Symbol</th>\n                       <th>Sector</th>\n                       <th>Status</th>\n                       <th>Last Updated</th>\n                       <th>View More</th>\n                     </tr>\n                     <tr *ngFor=\"let s of stocks let i=index\">\n                       <td>{{i}}</td>\n                       <td>{{s.quote.companyName}}</td>\n                       <td>{{s.quote.symbol}}</td>\n                       <td>{{s.quote.sector}}</td>\n                       <td *ngIf=\"(s.quote.latestPrice-s.quote.previousClose)>=0\">{{s.quote.latestPrice}}&nbsp;USD&nbsp;({{s.quote.change}}&nbsp;<i class=\"fa fa-arrow-up\" style=\"font-size:15px;color:green\"></i>)</td>\n                       <td *ngIf=\"(s.quote.latestPrice-s.quote.previousClose)<0\">{{s.quote.latestPrice}}&nbsp;USD&nbsp;({{s.quote.change}}&nbsp;<i class=\"fa fa-arrow-down\" style=\"font-size:15px;color:red\"></i>)</td>\n                       <td>{{s.quote.latestTime}}</td>\n                       <td><button class=\"btn btn-info\" (click)=showmore(s.quote,i)>View More</button></td>\n                       \n                       </tr>\n                       \n                   \n                   </table>\n                   \n                   </div>\n \n               </div>\n              \n    \n              </div>\n             \n            </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/stocks/stocks.component.ts":
/*!********************************************!*\
  !*** ./src/app/stocks/stocks.component.ts ***!
  \********************************************/
/*! exports provided: StocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksComponent", function() { return StocksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");



var StocksComponent = /** @class */ (function () {
    function StocksComponent(stock) {
        this.stock = stock;
        this.stocks = [];
        this.stock_codes = [];
        this.viewmore = [];
    }
    StocksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getdate();
        this.getstock();
        this.k = setInterval(function () {
            _this.getdate();
        }, 1000);
        this.j = setInterval(function () {
            _this.getstock();
        }, 1000);
        this.getstock_code();
    };
    StocksComponent.prototype.getstock = function () {
        var _this = this;
        this.stock.showstock().subscribe(function (data) { return _this.stocks = Object.values(data); });
    };
    StocksComponent.prototype.getstock_code = function () {
        var _this = this;
        this.stock.getcodes().subscribe(function (data) { return _this.stock_codes = Object.values(data); });
    };
    StocksComponent.prototype.getdate = function () {
        this.tday = new Date();
    };
    StocksComponent.prototype.showmore = function (symbol, ind) {
        var result = Object.keys(symbol).map(function (key) {
            return { "name": String(key), "value": symbol[key] };
        });
        this.viewmore = result;
        console.log(this.viewmore);
    };
    StocksComponent.prototype.ngOnDestroy = function () {
        if (this.j) {
            clearInterval(this.j);
        }
        if (this.k) {
            clearInterval(this.k);
        }
    };
    StocksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stocks',
            template: __webpack_require__(/*! ./stocks.component.html */ "./src/app/stocks/stocks.component.html"),
            providers: [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]],
            styles: [__webpack_require__(/*! ./stocks.component.css */ "./src/app/stocks/stocks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], StocksComponent);
    return StocksComponent;
}());



/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  support works!\n</p>\n"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\tgireesx\Desktop\SExchange\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map