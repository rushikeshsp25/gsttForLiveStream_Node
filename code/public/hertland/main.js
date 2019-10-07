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
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_live_live_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/live/live.component */ "./src/app/components/live/live.component.ts");
/* harmony import */ var _components_playlists_playlists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/playlists/playlists.component */ "./src/app/components/playlists/playlists.component.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");
/* harmony import */ var _components_test_player_test_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/test-player/test-player.component */ "./src/app/components/test-player/test-player.component.ts");








var routes = [
    { path: 'main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'live', component: _components_live_live_component__WEBPACK_IMPORTED_MODULE_4__["LiveComponent"] },
    { path: '', redirectTo: '/live', pathMatch: 'full' },
    { path: 'playlist', component: _components_playlists_playlists_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistsComponent"] },
    { path: 'playlist/player', component: _components_player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"] },
    { path: 'testplayer', component: _components_test_player_test_player_component__WEBPACK_IMPORTED_MODULE_7__["TestPlayerComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Header -->\n<app-header> </app-header>\n\n<!-- Body -->\n\n<router-outlet></router-outlet>\n\n<!-- Footer -->\n\n<app-footer></app-footer>"

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
        this.title = 'hertland';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/fesm5/mat-video.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_playlists_playlists_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/playlists/playlists.component */ "./src/app/components/playlists/playlists.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_live_live_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/live/live.component */ "./src/app/components/live/live.component.ts");
/* harmony import */ var _components_playlist_child_playlist_child_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/playlist-child/playlist-child.component */ "./src/app/components/playlist-child/playlist-child.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");
/* harmony import */ var _components_test_player_test_player_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/test-player/test-player.component */ "./src/app/components/test-player/test-player.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _components_playlists_playlists_component__WEBPACK_IMPORTED_MODULE_9__["PlaylistsComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_live_live_component__WEBPACK_IMPORTED_MODULE_12__["LiveComponent"],
                _components_playlist_child_playlist_child_component__WEBPACK_IMPORTED_MODULE_13__["PlaylistChildComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_14__["SafePipe"],
                _components_player_player_component__WEBPACK_IMPORTED_MODULE_15__["PlayerComponent"],
                _components_test_player_test_player_component__WEBPACK_IMPORTED_MODULE_16__["TestPlayerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                mat_video__WEBPACK_IMPORTED_MODULE_4__["MatVideoModule"],
                ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__["EmbedVideo"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  margin-top: 30px;\n  width: 100%;\n  line-height: 60px;\n  background-color: #000;\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer p-0 fixed-bottom h-1\">\n  <div class=\"container-fluid m-0 p-0 text-center\">\n    <span class=\"text-muted  \">\n      © 2018 Heartland Media LLC\n    </span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/***************************\nHEADLINES\n***************************/\n\nh1 {\n  margin-top: 50px;\n}\n\n.first-h1 {\n  margin-top: 100px;\n}\n\n.fixed-top {\n  height: 100px;\n}\n\n.navborder {\n  border-top: 4px solid #990000;\n  border-bottom: 1px solid #999;\n  box-shadow: 2px 2px 8px #666;\n}\n\n.btn-danger {\n  font-family: Raleway-SemiBold;\n  font-size: 13px;\n  color: rgba(217, 83, 78, 0.75);\n  letter-spacing: 1px;\n  line-height: 15px;\n  border: 2px solid rgba(217, 83, 78, 0.75);\n  border-radius: 40px;\n  background: transparent;\n  transition: all 0.3s ease 0s;\n}\n\n.btn-danger:hover {\n  color: #FFF;\n  background: rgba(217, 83, 78, 0.75);\n  border: 2px solid rgba(217, 83, 78, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzJCQUUyQjs7QUFFM0I7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFHQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1DQUFtQztFQUNuQyx5Q0FBeUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKipcbkhFQURMSU5FU1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5maXJzdC1oMSB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uZml4ZWQtdG9wIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm5hdmJvcmRlciB7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjOTkwMDAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggIzY2Njtcbn1cblxuXG4uYnRuLWRhbmdlciB7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5LVNlbWlCb2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDIxNywgODMsIDc4LCAwLjc1KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjE3LCA4MywgNzgsIDAuNzUpO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLmJ0bi1kYW5nZXI6aG92ZXIge1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTcsIDgzLCA3OCwgMC43NSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjE3LCA4MywgNzgsIDAuNzUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navborder navbar navbar-expand-md fixed-top navbar-light bg-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/live\">\n      <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item mr-1\">\n          <button type=\"button\" class=\"btn btn-danger btn-block\" routerLink=\"/live\" routerLinkActive=\"active\">  Live  </button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-danger btn-block\" routerLink=\"/playlist\" routerLinkActive=\"active\">Recorded</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/live/live.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/live/live.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#breaking_now_card{\n  margin-top: 120px;\n}\n\n#subtitles_div{\n  background-color: darkgray;\n}\n\n/* #subtitles{\n  margin-top: 170px;\n  margin-bottom: 15px;\n  text-align: center;\n} */\n\n#live_stream_player::cue {\n  background-color: transparent;\n  color: #FFF;\n  font-size: 32px;\n  font-family: \"Lobster\", cursive;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXZlL2xpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7OztHQUlHOztBQUVIO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXZlL2xpdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNicmVha2luZ19ub3dfY2FyZHtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG59XG5cbiNzdWJ0aXRsZXNfZGl2e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLyogI3N1YnRpdGxlc3tcbiAgbWFyZ2luLXRvcDogMTcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0gKi9cblxuI2xpdmVfc3RyZWFtX3BsYXllcjo6Y3VlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgY3Vyc2l2ZTtcbn1cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/live/live.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/live/live.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container ml-0 pl-0\" id=\"breaking_now_card\">\n  <div class=\"row ml-0\">\n    <div class=\"col-10 ml-0\">\n      <div class=\"embed-responsive embed-responsive-21by9 ml-0\">\n        <video class=\"video-fluid\" id=\"video\" autoplay='true' preload=\"metadata\" controls>\n          <source\n            src=\"https://video-static-01.clipsyndicate.com/1fba/2019/09/23/02/31/7688067cdcd944b1bf105511eef3db5e.mp4?co_id=898&syndi_feed_id=1116\"\n            type=\"video/mp4\">\n        </video>\n        <div *ngIf=\" showTrans\" class=\"carousel-caption mb-7\">\n          <span class=\"badge badge-dark\">\n            <p class=\"h5\">{{title}}</p>\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-2\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/live/live.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/live/live.component.ts ***!
  \***************************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LiveComponent = /** @class */ (function () {
    function LiveComponent(elementRef) {
        this.elementRef = elementRef;
        this.myString = 'Hello World!';
        this.title = 'Here goes the subtitles!';
        this.showTrans = false;
    }
    LiveComponent.prototype.ngOnInit = function () {
        console.log('Full Screen Element : ', document.fullscreenElement);
    };
    LiveComponent.prototype.ngAfterViewInit = function () {
        var cue = new VTTCue(0, 30, 'Cool text to be displayed');
        var video = this.elementRef.nativeElement.querySelector('video');
        //   if(Hls.isSupported()) {
        //     var hls = new Hls();
        //     hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
        //     hls.attachMedia(video);
        //     hls.on(Hls.Events.MANIFEST_PARSED,function() {
        //       video.play();
        //   });
        //  }
        video.addEventListener('loadedmetadata', function () {
            var track = document.createElement('track');
            track.kind = 'captions';
            track.label = 'English';
            track.srclang = 'en';
            track.src = 'assets/scripts/test_transcript.vtt';
            track.setAttribute('default', 'default');
            track.addEventListener('load', function () {
                video.textTracks[0].mode = 'showing';
            });
            this.appendChild(track);
        });
        video.textTracks.addEventListener('change', function () {
            video.textTracks[0].addCue(cue);
        }, false);
    };
    LiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live',
            template: __webpack_require__(/*! ./live.component.html */ "./src/app/components/live/live.component.html"),
            styles: [__webpack_require__(/*! ./live.component.css */ "./src/app/components/live/live.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], LiveComponent);
    return LiveComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-playlists></app-playlists>\n\n"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/player/player.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/player/player.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#breaking_now_card{\n    margin-top: 120px;\n  }\n  \n  #subtitles_div{\n    background-color: darkgray;\n  }\n  \n  /* #subtitles{\n    margin-top: 170px;\n    margin-bottom: 15px;\n    text-align: center;\n  } */\n  \n  #live_stream_player::cue {\n    background-color: transparent;\n    color: #FFF;\n    font-size: 32px;\n    font-family: \"Lobster\", cursive;\n  }\n  \n  \n  \n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7Ozs7S0FJRzs7RUFFSDtJQUNFLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZUFBZTtJQUNmLCtCQUErQjtFQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JyZWFraW5nX25vd19jYXJke1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICB9XG4gIFxuICAjc3VidGl0bGVzX2RpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbiAgfVxuICBcbiAgLyogI3N1YnRpdGxlc3tcbiAgICBtYXJnaW4tdG9wOiAxNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfSAqL1xuICBcbiAgI2xpdmVfc3RyZWFtX3BsYXllcjo6Y3VlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/player/player.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/player/player.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" id=\"breaking_now_card\">\n    <div class=\"row \">\n      <div class=\"col-10\">\n          <video id=\"live_stream_player\" width=\"720\" height=\"520\" autoplay='true' controls>\n            <source src=\"{{videoUrl}}\" type=\"video/mp4\">\n            <track id=\"live_eng_track\" label=\"English\" kind=\"subtitles\" src=\"{{subtitle}}\" srclang=\"en\">\n          </video>\n      </div>\n      <div class=\"col-2\">\n        <h1>Something</h1>\n      </div>\n    </div>\n  </div> -->\n\n<div class=\"container\" id=\"breaking_now_card\">\n    <div class=\"row \">\n        <div class=\"col-10\">\n            <div class=\"embed-responsive embed-responsive-21by9\">\n                <video class=\"video-fluid\" id=\"video\" width=\"720\" autoplay='true' preload=\"metadata\" controls='true'>\n              <source\n                src=\"{{videoUrl}}\"\n                type=\"video/mp4\">\n              <track id=\"live_eng_track\" label=\"English\" kind=\"subtitles\" srclang=\"en\"\n                src=\"{{subtitle}}\" >\n            </video>\n            </div>\n        </div>\n        <div class=\"col-2\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.videoUrl = this.route.snapshot.paramMap.get('videoUrl');
        this.subtitle = this.route.snapshot.paramMap.get('subtitle');
        console.log('Subtitle : ', this.subtitle);
        console.log('Player Check : ', this.route.snapshot.paramMap.get('videoUrl'));
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/components/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/components/player/player.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/playlist-child/playlist-child.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/playlist-child/playlist-child.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-tile:hover{\n  cursor:pointer;\n}\n\n.card-cover {\n  position: relative;\n}\n\n.card-cover .btn {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  color: white;\n  cursor: pointer;\n}\n\n.material-icons{\n  font-size:50px;\n}\n\n#my-video-stream::cue {\n  background-color: transparent;\n  color: #FFF;\n  font-size: 32px;\n  font-family: \"Lobster\", cursive;\n}\n\n.card-block{\n  padding-left: 0.8rem;\n}\n\n.card-block .card-text{\n  font-weight: bold;\n}\n\na {\n  transition: .25s all;\n }\n\n.card {\n   padding-left:auto;\n   padding-right:auto;\n   margin-top:10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: .25s box-shadow;\n }\n\n.card:focus, .card:hover {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n }\n\n.card-inverse .card-img-overlay {\n  background-color: rgba(51, 51, 51, 0.85);\n  border-color: rgba(51, 51, 51, 0.85);\n }\n\n.card-img-top{\n   margin-top:0px;\n }\n\n.col-xs-12{\n   text-align:center;\n   margin-left:auto;\n   margin-right:auto;\n }\n\n.row{\n   margin-left:auto;\n   margin-right:auto;\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC1jaGlsZC9wbGF5bGlzdC1jaGlsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBRUUsb0JBQW9CO0NBQ3JCOztBQUNBO0dBQ0UsaUJBQWlCO0dBQ2pCLGtCQUFrQjtHQUNsQixlQUFlO0VBQ2hCLDZFQUE2RTtFQUU3RSwyQkFBMkI7Q0FDNUI7O0FBQ0E7RUFDQyw4RUFBOEU7Q0FDL0U7O0FBQ0E7RUFDQyx3Q0FBd0M7RUFDeEMsb0NBQW9DO0NBQ3JDOztBQUNBO0dBQ0UsY0FBYztDQUNoQjs7QUFDQTtHQUNFLGlCQUFpQjtHQUNqQixnQkFBZ0I7R0FDaEIsaUJBQWlCO0NBQ25COztBQUNBO0dBQ0UsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWxpc3QtY2hpbGQvcGxheWxpc3QtY2hpbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby10aWxlOmhvdmVye1xuICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuLmNhcmQtY292ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZC1jb3ZlciAuYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYXRlcmlhbC1pY29uc3tcbiAgZm9udC1zaXplOjUwcHg7XG59XG5cbiNteS12aWRlby1zdHJlYW06OmN1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIGN1cnNpdmU7XG59XG4uY2FyZC1ibG9ja3tcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XG59XG4uY2FyZC1ibG9jayAuY2FyZC10ZXh0e1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuYSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjI1cyBhbGw7XG4gIHRyYW5zaXRpb246IC4yNXMgYWxsO1xuIH1cbiAuY2FyZCB7XG4gICBwYWRkaW5nLWxlZnQ6YXV0bztcbiAgIHBhZGRpbmctcmlnaHQ6YXV0bztcbiAgIG1hcmdpbi10b3A6MTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjI1cyBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uOiAuMjVzIGJveC1zaGFkb3c7XG4gfVxuIC5jYXJkOmZvY3VzLCAuY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiB9XG4gLmNhcmQtaW52ZXJzZSAuY2FyZC1pbWctb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC44NSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjg1KTtcbiB9XG4gLmNhcmQtaW1nLXRvcHtcbiAgIG1hcmdpbi10b3A6MHB4O1xuIH1cbiAuY29sLXhzLTEye1xuICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICBtYXJnaW4tbGVmdDphdXRvO1xuICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gfVxuIC5yb3d7XG4gICBtYXJnaW4tbGVmdDphdXRvO1xuICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/playlist-child/playlist-child.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/playlist-child/playlist-child.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <a *ngFor=\"let item of paginationShowItems\" class=\"col-12 col-md-4 col-lg-3 video-tile\">\n      <div class=\"card\" (click)=\"onClick(item)\"\n        [routerLink]=\"['player', {videoUrl: item.video_url, subtitle: item.transcript_url}]\">\n        <div class=\"card-cover\">\n          <video class=\"card-img-top\" preload=\"metadata\">\n            <source src=\"{{item.video_url}}#t=2\" type=\"video/mp4\">\n          </video>\n          <i class=\"material-icons btn\">\n            play_circle_outline\n          </i>\n        </div>\n        <div class=\"card-block\">\n          <p class=\"card-text\">{{item.title}}</p>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/playlist-child/playlist-child.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/playlist-child/playlist-child.component.ts ***!
  \***********************************************************************/
/*! exports provided: PlaylistChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistChildComponent", function() { return PlaylistChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PlaylistChildComponent = /** @class */ (function () {
    function PlaylistChildComponent(router) {
        this.router = router;
        this.myString = 'Hello World!';
        this.title = 'Here goes the subtitles!';
        this.showTrans = false;
    }
    PlaylistChildComponent.prototype.ngOnInit = function () {
        console.log('Data check at child : ', this.paginationShowItems);
    };
    PlaylistChildComponent.prototype.showTranscript = function () {
        this.showTrans = !this.showTrans;
    };
    PlaylistChildComponent.prototype.onClick = function (item) {
        console.log('Event fire data check, item : ', item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlaylistChildComponent.prototype, "paginationShowItems", void 0);
    PlaylistChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist-child',
            template: __webpack_require__(/*! ./playlist-child.component.html */ "./src/app/components/playlist-child/playlist-child.component.html"),
            styles: [__webpack_require__(/*! ./playlist-child.component.css */ "./src/app/components/playlist-child/playlist-child.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlaylistChildComponent);
    return PlaylistChildComponent;
}());



/***/ }),

/***/ "./src/app/components/playlists/playlists.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/playlists/playlists.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#breaking_now_card{\n  margin-top: 100px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdHMvcGxheWxpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXlsaXN0cy9wbGF5bGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNicmVha2luZ19ub3dfY2FyZHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/playlists/playlists.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/playlists/playlists.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-footer text-muted\">\n  <div class=\"container\" id=\"breaking_now_card\">\n    <app-playlist-child [paginationShowItems]=\"paginationShowItems\"></app-playlist-child>\n    <div class=\"container mt-5\">\n      <div class=\"row justify-content-md-center\">\n        <ul class=\"pagination pagination-sm \">\n\n          <li class=\"page-item color-danger\">\n            <button class=\"page-link\" (click)=\"paginationPrevious()\"\n              aria-label=\"Previous\">&laquo;</button>\n            </li>\n          <li class=\"page-item \" *ngFor=\"let page of indexArr; let i = index\">\n            <button class=\"page-link \" value='{{ i + 1 }}' (click)=\"paginationNumber($event)\">{{ i + 1 }}</button>\n          </li>\n          <li class=\"page-item\">\n            <button class=\"page-link\" (click)=\"paginationNext()\" aria-label=\"Next\">&raquo;</button>\n          </li>\n\n          <!-- <li class=\"page-item color-danger\"><button class=\"page-link\" (click)=\"paginationPrevious()\"\n              aria-label=\"Previous\">&laquo;</button></li>\n          <li class=\"page-item \"><button class=\"page-link active\"  value='0' (click)=\"paginationNumber($event)\">0</button></li>\n          <li class=\"page-item \"><button class=\"page-link \" value='1' (click)=\"paginationNumber($event)\">1</button></li>\n          <li class=\"page-item\"><button class=\"page-link\" value='2' (click)=\"paginationNumber($event)\">2</button></li>\n          <li class=\"page-item\"><button class=\"page-link\" value='3' (click)=\"paginationNumber($event)\">3</button></li>\n          <li class=\"page-item\"><button class=\"page-link\" value='4' (click)=\"paginationNumber($event)\">4</button></li>\n          <li class=\"page-item\"><button class=\"page-link\" (click)=\"paginationNext()\" aria-label=\"Next\">&raquo;</button></li> -->\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/playlists/playlists.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/playlists/playlists.component.ts ***!
  \*************************************************************/
/*! exports provided: PlaylistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsComponent", function() { return PlaylistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");



var PlaylistsComponent = /** @class */ (function () {
    function PlaylistsComponent(mainService) {
        this.mainService = mainService;
        this.myString = 'Hello World!';
        this.title = 'Here goes the subtitles!';
        this.showTrans = false;
        this.paginationCurrent = 1;
        this.paginationLimit = 10;
        this.paginationMax = 10;
        this.indexArr = [];
    }
    PlaylistsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getVideoCount().subscribe(function (res) {
            _this.paginationMax = Math.floor(parseInt(res['count']) / _this.paginationLimit);
            console.log(res, _this.paginationMax);
            if (_this.paginationMax == 0) {
                _this.indexArr = _this.getArrayOfIndex(_this.paginationMax + 1);
            }
            else {
                _this.indexArr = _this.getArrayOfIndex(_this.paginationMax);
            }
            // let index = this.paginationMax + 1;
            // console.log(index);
            console.log(_this.indexArr);
        });
        this.mainService.getPlaylists(this.paginationCurrent, this.paginationLimit).subscribe(function (res) {
            _this.paginationShowItems = res;
            console.log('recorded check : ', res);
        });
    };
    PlaylistsComponent.prototype.getArrayOfIndex = function (i) {
        return new Array(i);
    };
    PlaylistsComponent.prototype.paginationNext = function () {
        if (this.paginationCurrent !== this.paginationMax) {
            this.paginationCurrent++;
            this.mainService.getPlaylists(this.paginationCurrent, this.paginationLimit).subscribe(function (result) {
                console.log('Result Check : ', result);
            });
        }
    };
    PlaylistsComponent.prototype.paginationNumber = function (event) {
        console.log('Current Button pressed : ', event.target.value);
        this.paginationCurrent = event.target.value;
        this.mainService.getPlaylists(this.paginationCurrent, this.paginationLimit).subscribe(function (result) {
            console.log('Result Check : ', result);
        });
    };
    PlaylistsComponent.prototype.paginationPrevious = function () {
        if (this.paginationCurrent !== 0) {
            this.paginationCurrent--;
            this.mainService.getPlaylists(this.paginationCurrent, this.paginationLimit).subscribe(function (result) {
                console.log('Result Check : ', result);
            });
        }
    };
    PlaylistsComponent.prototype.showTranscript = function () {
        this.showTrans = !this.showTrans;
    };
    PlaylistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlists',
            template: __webpack_require__(/*! ./playlists.component.html */ "./src/app/components/playlists/playlists.component.html"),
            styles: [__webpack_require__(/*! ./playlists.component.css */ "./src/app/components/playlists/playlists.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], PlaylistsComponent);
    return PlaylistsComponent;
}());



/***/ }),

/***/ "./src/app/components/test-player/test-player.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/test-player/test-player.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    align-items: center;\n    background: #000046;\n    background: linear-gradient(to right, #1cb5e0, #000046);\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n}\n\n#breaking_now_card{\n    margin-top: 120px;\n  }\n\n#subtitles_div{\n    background-color: darkgray;\n  }\n\n/* #subtitles{\n    margin-top: 170px;\n    margin-bottom: 15px;\n    text-align: center;\n  } */\n\n#live_stream_player::cue {\n    background-color: transparent;\n    color: #FFF;\n    font-size: 32px;\n    font-family: \"Lobster\", cursive;\n  }\n\n.player {\n    max-width: 800px;\n    border: 6px solid rgba(255, 255, 255, 0.2);\n    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.1);\n    position: relative;\n    overflow: hidden;\n}\n\n.player:hover .progress {\n    height: 10px;\n}\n\n.player:hover .player-controls {\n    transform: translateY(0);\n}\n\n.player:-webkit-full-screen, .player:-webkit-full-screen {\n    max-width: none;\n    width: 100%;\n}\n\n.player:-webkit-full-screen, .player:fullscreen {\n    max-width: none;\n    width: 100%;\n}\n\n.play-btn {\n    flex: 1;\n}\n\n.player-video {\n    width: 100%;\n    display: block;\n}\n\n.player-btn {\n    background: none;\n    border: 0;\n    color: white;\n    text-align: center;\n    max-width: 60px;\n    padding: 5px 8px;\n}\n\n.player-btn svg {\n    fill: #fff;\n}\n\n.player-btn:hover, .player-btn:focus {\n    border-color: #ffec41;\n    background: rgba(255, 255, 255, .2);\n}\n\n.player-slider {\n    width: 10px;\n    height: 30px;\n}\n\n.player-controls {\n    align-items: center;\n    display: flex;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    transform: translateY(100%) translateY(-5px);\n    transition: all 0.3s;\n    flex-wrap: wrap;\n    background: rgba(0, 0, 0, 0.3);\n}\n\n.player-controls > * {\n    flex: 1;\n}\n\n.progress {\n    position: relative;\n    display: flex;\n    flex: 10;\n    flex-basis: 100%;\n    height: 4px;\n    transition: height 0.3s;\n    background: rgba(0, 0, 0, 0.5);\n}\n\n.filled-progress {\n    width: 50%;\n    background: #ffec41;\n    flex: 0;\n    flex-basis: 50%;\n}\n\n.sliders {\n    max-width: 200px;\n    display: flex;\n}\n\ninput[type=range] {\n    -webkit-appearance: none;\n    background: transparent;\n    width: 100%;\n    margin: 0 5px;\n}\n\ninput[type=range]:focus {\n    outline: none;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 8px;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);\n    background: rgba(255, 255, 255, 0.5);\n    border-radius: 10px;\n    border: 0.2px solid rgba(1, 1, 1, 0);\n}\n\ninput[type=range]::-webkit-slider-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50px;\n    background: white;\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -3.5px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n    background: rgba(255, 255, 255, 0.8);\n}\n\ninput[type=range]::-moz-range-track {\n    width: 100%;\n    height: 8px;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);\n    background: #fff;\n    border-radius: 10px;\n    border: 0.2px solid rgba(1, 1, 1, 0);\n}\n\ninput[type=range]::-moz-range-thumb {\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);\n    height: 15px;\n    width: 15px;\n    border-radius: 50px;\n    background: white;\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0LXBsYXllci90ZXN0LXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1REFBdUQ7SUFDdkQsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7QUFFQTs7OztLQUlHOztBQUVIO0lBQ0UsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsK0JBQStCO0VBQ2pDOztBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxxRUFBcUU7SUFDckUsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUhBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLE9BQU87QUFDWDs7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUNBQW1DO0FBQ3ZDOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLDRDQUE0QztJQUM1QyxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLE9BQU87QUFDWDs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUVBQXFFO0lBQ3JFLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1Qzs7QUFDQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLHFFQUFxRTtJQUNyRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUNJLGlFQUFpRTtJQUNqRSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1wbGF5ZXIvdGVzdC1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzAwMDA0NjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxY2I1ZTAsICMwMDAwNDYpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI2JyZWFraW5nX25vd19jYXJke1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICB9XG4gIFxuICAjc3VidGl0bGVzX2RpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbiAgfVxuICBcbiAgLyogI3N1YnRpdGxlc3tcbiAgICBtYXJnaW4tdG9wOiAxNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfSAqL1xuICBcbiAgI2xpdmVfc3RyZWFtX3BsYXllcjo6Y3VlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xuICB9XG5cbi5wbGF5ZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wbGF5ZXI6aG92ZXIgLnByb2dyZXNzIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG59XG4ucGxheWVyOmhvdmVyIC5wbGF5ZXItY29udHJvbHMge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5wbGF5ZXI6LXdlYmtpdC1mdWxsLXNjcmVlbiwgLnBsYXllcjpmdWxsc2NyZWVuIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucGxheS1idG4ge1xuICAgIGZsZXg6IDE7XG59XG4ucGxheWVyLXZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5wbGF5ZXItYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogNjBweDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xufVxuLnBsYXllci1idG4gc3ZnIHtcbiAgICBmaWxsOiAjZmZmO1xufVxuLnBsYXllci1idG46aG92ZXIsIC5wbGF5ZXItYnRuOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICNmZmVjNDE7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XG59XG4ucGxheWVyLXNsaWRlciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuLnBsYXllci1jb250cm9scyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5wbGF5ZXItY29udHJvbHMgPiAqIHtcbiAgICBmbGV4OiAxO1xufVxuLnByb2dyZXNzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxMDtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5maWxsZWQtcHJvZ3Jlc3Mge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZWM0MTtcbiAgICBmbGV4OiAwO1xuICAgIGZsZXgtYmFzaXM6IDUwJTtcbn1cbi5zbGlkZXJzIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5pbnB1dFt0eXBlPXJhbmdlXSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMCksIDAgMCAxcHggcmdiYSgxMywgMTMsIDEzLCAwKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDAuMnB4IHNvbGlkIHJnYmEoMSwgMSwgMSwgMCk7XG59XG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogLTMuNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbmlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwKSwgMCAwIDFweCByZ2JhKDEzLCAxMywgMTMsIDApO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDAuMnB4IHNvbGlkIHJnYmEoMSwgMSwgMSwgMCk7XG59XG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDApLCAwIDAgMXB4IHJnYmEoMTMsIDEzLCAxMywgMCk7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/test-player/test-player.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/test-player/test-player.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"breaking_now_card\">\n  <div class=\"row \">\n    <div class=\"col-10\">\n      <div class=\"player\">\n        <video class=\"player-video\" src=\"https://video-static-01.clipsyndicate.com/1fba/2019/09/23/02/31/7688067cdcd944b1bf105511eef3db5e.mp4?co_id=898&syndi_feed_id=1116\"></video>\n        \n        <div class=\"player-controls\">\n          \n          <div class=\"ply-btn\">\n            <button class=\"player-btn toggle-play\" title=\"Toggle Play\">\n              <svg class=\"\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n                <title>play</title>\n                <path d=\"M3 2l10 6-10 6z\"></path>\n              </svg>\n            </button>\n          </div>\n\n          <div class=\"sliders\">\n            <input type=\"range\" name=\"volume\" class=\"player-slider\" min=\"0\" max=\"1\" step=\"0.05\" value=\"1\">\n          </div>\n\n          <button data-skip=\"-10\" class=\"player-btn\" (click)=\"showTranscript()\" >CC</button>\n\n        </div>\n        <div *ngIf=\" showTrans\" class=\"carousel-caption mb-7\">\n          <span class=\"badge badge-dark\">\n            <p class=\"h5\">{{title}}</p>\n          </span>\n        </div>\n      </div>\n      <div class=\"col-2\">\n        \n      </div>\n    </div>\n  </div>\n\n\n\n\n  <script>\n    /* Let's Build: With JavaScript - Web-Crunch.com\n     Subscribe on YouTube - https://youtube.com/c/webcrunch\n     \n     Let's Build: HTML5 Video Player\n     \n     Overall Concept Credit: Wes Bos https://wesbos.com\n  */\n\n    const player = document.querySelector('.player');\n    const video = player.querySelector('.player-video');\n    const progress = player.querySelector('.progress');\n    const progressFilled = player.querySelector('.filled-progress');\n    const toggle = player.querySelector('.toggle-play');\n    const skippers = player.querySelectorAll('[data-skip]');\n    const ranges = player.querySelectorAll('.player-slider');\n\n    // Logic\n    function togglePlay() {\n      const playState = video.paused ? 'play' : 'pause';\n      video[playState](); // Call play or paused method \n    }\n\n    function updateButton() {\n      const togglePlayBtn = document.querySelector('.toggle-play');\n\n      if (this.paused) {\n        togglePlayBtn.innerHTML = `<svg class=\"\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><title>play</title><path d=\"M3 2l10 6-10 6z\"></path></svg>`;\n      } else {\n        togglePlayBtn.innerHTML = `<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><title>pause</title><path d=\"M2 2h5v12H2zm7 0h5v12H9z\"></path></svg>`;\n      }\n    }\n\n    function skip() {\n      video.currentTime += parseFloat(this.dataset.skip);\n    }\n\n    function rangeUpdate() {\n      video[this.name] = this.value;\n    }\n\n    function progressUpdate() {\n      const percent = (video.currentTime / video.duration) * 100;\n      progressFilled.style.flexBasis = `${percent}%`;\n    }\n\n    function scrub(e) {\n      const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;\n      video.currentTime = scrubTime;\n    }\n\n    // Event listeners\n\n    video.addEventListener('click', togglePlay);\n    video.addEventListener('play', updateButton);\n    video.addEventListener('pause', updateButton);\n    video.addEventListener('timeupdate', progressUpdate);\n\n    toggle.addEventListener('click', togglePlay);\n    skippers.forEach(button => button.addEventListener('click', skip));\n    ranges.forEach(range => range.addEventListener('change', rangeUpdate));\n    ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));\n\n    let mousedown = false;\n    progress.addEventListener('click', scrub);\n    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));\n    progress.addEventListener('mousedown', () => mousedown = true);\n    progress.addEventListener('mouseup', () => mousedown = false);\n  </script>"

/***/ }),

/***/ "./src/app/components/test-player/test-player.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/test-player/test-player.component.ts ***!
  \*****************************************************************/
/*! exports provided: TestPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPlayerComponent", function() { return TestPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestPlayerComponent = /** @class */ (function () {
    function TestPlayerComponent() {
        this.myString = 'Hello World!';
        this.title = 'Here goes the subtitles!';
        this.showTrans = true;
    }
    TestPlayerComponent.prototype.ngOnInit = function () {
    };
    TestPlayerComponent.prototype.showTranscript = function () {
        this.showTrans = !this.showTrans;
        console.log('subtitle action check : Done! ');
    };
    TestPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-player',
            template: __webpack_require__(/*! ./test-player.component.html */ "./src/app/components/test-player/test-player.component.html"),
            styles: [__webpack_require__(/*! ./test-player.component.css */ "./src/app/components/test-player/test-player.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestPlayerComponent);
    return TestPlayerComponent;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
    }
    MainService.prototype.getPlaylists = function (skip, limit) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('skip', skip)
            .set('limit', limit);
        return this.http.get("/recorded", { params: params });
    };
    MainService.prototype.getVideoCount = function () {
        return this.http.get("/recorded/video/count");
    };
    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MainService);
    return MainService;
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

module.exports = __webpack_require__(/*! /home/rushikesh/HeartlandMedia/code/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map