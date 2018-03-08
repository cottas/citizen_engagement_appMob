webpackJsonp([0],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
// Copy this file to config.ts and fill in appropriate values.
var config = {
    apiUrl: 'https://comem-citizen-engagement.herokuapp.com/api',
    qimgUrl: 'https://comem-qimg.herokuapp.com/api',
    qimgSecret: 'xSqn2Ck9L4FuDqo8VjNdodBR8Z/8QfHippRnm6s2QaZVZ7kybgOSILiV1S9M02VkDqpcOj1h96gBmPLb9BFew8QuLHs1716PjEX4hzpcgwZcZk2OCliQd0i0nGLRd+GkWMpgKe6Z0pV7mszfICyMntz5evi/J/crjR5A5/aYTzA='
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 216:
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
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_issue_create_issue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__issue_map_issue_map__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__issue_list_issue_list__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tabs = [
            { title: 'New Issue', icon: 'add', component: __WEBPACK_IMPORTED_MODULE_2__create_issue_create_issue__["a" /* CreateIssuePage */] },
            { title: 'Issue Map', icon: 'map', component: __WEBPACK_IMPORTED_MODULE_3__issue_map_issue_map__["a" /* IssueMapPage */] },
            { title: 'Issue List', icon: 'list', component: __WEBPACK_IMPORTED_MODULE_4__issue_list_issue_list__["a" /* IssueListPage */] }
        ];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\home\home.html"*/'<ion-tabs>\n\n  <ion-tab *ngFor=\'let tab of tabs\' [tabTitle]=\'tab.title\' [tabIcon]=\'tab.icon\' [root]=\'tab.component\'></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateIssuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_picture_picture__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CreateIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateIssuePage = (function () {
    function CreateIssuePage(auth, geolocation, httpClient, navCtrl, navParams, pictureService, platform) {
        this.auth = auth;
        this.geolocation = geolocation;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pictureService = pictureService;
        this.platform = platform;
    }
    CreateIssuePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CreateIssuePage');
        var url = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].apiUrl + "/issueTypes";
        this.httpClient.get(url).subscribe(function (issueTypes) {
            console.log('Issue types loaded', issueTypes);
        });
        this.platform.ready().then(function () {
            var geolocationPromise = _this.geolocation.getCurrentPosition();
            geolocationPromise.then(function (position) {
                console.log("User is at " + position.coords.longitude + ", " + position.coords.latitude);
            }, function (err) {
                console.warn("Could not retrieve user position because: " + err.message);
            });
        });
    };
    CreateIssuePage.prototype.logOut = function () {
        this.auth.logOut();
    };
    CreateIssuePage.prototype.takePicture = function () {
        var _this = this;
        this.pictureService.takeAndUploadPicture().subscribe(function (picture) {
            _this.picture = picture;
        }, function (err) {
            console.warn('Could not take picture', err);
        });
    };
    CreateIssuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-create-issue',template:/*ion-inline-start:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\create-issue\create-issue.html"*/'<!--\n\n  Generated template for the CreateIssuePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>CreateIssue</ion-title>\n\n\n\n    <!-- Logout button -->\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logOut()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  Let\'s create an issue.\n\n  <button ion-button (click)=\'takePicture()\'>Take picture</button>\n\n  <img *ngIf=\'picture\' [src]=\'picture.url\' />\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\create-issue\create-issue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_picture_picture__["a" /* PictureProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */]])
    ], CreateIssuePage);
    return CreateIssuePage;
}());

//# sourceMappingURL=create-issue.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Service to take pictures and upload them to the qimg API.
 */
var PictureProvider = (function () {
    function PictureProvider(camera, http) {
        this.camera = camera;
        this.http = http;
        console.log('Hello PictureProvider Provider');
        console.log('@@@ http client', !!this.http);
    }
    /**
     * Takes a picture, uploads it to the qimg API, and returns the created image.
     *
     * Returns an observable that will emit the created QimgObject if the picture
     * has been taken and successfully uploaded to the qimg API. An error may be
     * emitted instead if the user does not take a picture of if the upload fails.
     */
    PictureProvider.prototype.takeAndUploadPicture = function () {
        var _this = this;
        // Take a picture.
        // This creates an observable of picture data.
        var pictureData$ = this.takePicture();
        // Once the picture has been taken, upload it to the qimg API.
        // This returns a new observable of the resulting QimgImage object.
        var uploadedImage$ = pictureData$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["switchMap"])(function (data) { return _this.uploadPicture(data); }));
        // Once the picture has been uploaded, log a message to the console
        // indicating that all went well.
        // This does not change the observable stream.
        var debug$ = uploadedImage$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (image) { return console.log("Successfully uploaded picture to " + image.url); }));
        // Return the observable stream.
        return debug$;
    };
    /**
     * Launches the camera to take a picture.
     *
     * Returns an observable that will emit the raw picture data as a string
     * once the picture has been taken. An error may be emitted instead if the
     * user does not take a picture.
     */
    PictureProvider.prototype.takePicture = function () {
        // Prepare camera options.
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        // Start taking a picture.
        // The promise will be resolved when the user has snapped and validated the picture.
        // It may be rejected if the user does not take a picture.
        var pictureDataPromise = this.camera.getPicture(options);
        // Convert the promise to an observable and return it.
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(pictureDataPromise);
    };
    /**
     * Uploads raw picture data to the qimg API.
     *
     * Returns an observable that will emit the created QimgImage object.
     * An error may be emitted instead if the upload fails.
     */
    PictureProvider.prototype.uploadPicture = function (pictureData) {
        var requestBody = {
            data: pictureData
        };
        var requestOptions = {
            headers: {
                Authorization: "Bearer " + __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].qimgSecret
            }
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].qimgUrl + "/images", requestBody, requestOptions);
    };
    PictureProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], PictureProvider);
    return PictureProvider;
}());

//# sourceMappingURL=picture.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_issues_issues__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IssueMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssueMapPage = (function () {
    function IssueMapPage(navCtrl, navParams, issues) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.issues = issues;
        this.mapOptions = {
            layers: [
                Object(__WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
            ],
            zoom: 13,
            center: Object(__WEBPACK_IMPORTED_MODULE_2_leaflet__["latLng"])(46.778186, 6.641524)
        };
    }
    IssueMapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.issues.getIssues(50).subscribe(function (data) {
            _this.mapMarkers = [];
            data.forEach(function (element) {
                var newMarker = Object(__WEBPACK_IMPORTED_MODULE_2_leaflet__["marker"])([element.location.coordinates[1], element.location.coordinates[0]]).on('click', _this.onClickMarker);
                _this.mapMarkers.push(newMarker);
            });
        });
    };
    IssueMapPage.prototype.onClickMarker = function (event) {
        alert("hi. you clicked the marker at " + event.latlng);
    };
    IssueMapPage.prototype.onMapReady = function (map) {
        var _this = this;
        this.map = map;
        this.map.on('moveend', function () {
            var center = _this.map.getCenter();
            console.log("Map moved to " + center.lng + ", " + center.lat);
        });
    };
    IssueMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-issue-map',template:/*ion-inline-start:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\issue-map\issue-map.html"*/'<div class=\'map\' leaflet [leafletOptions]=\'mapOptions\' [leafletLayers]=\'mapMarkers\' (leafletMapReady)=\'onMapReady($event)\'></div>\n\n'/*ion-inline-end:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\issue-map\issue-map.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_issues_issues__["a" /* IssuesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_issues_issues__["a" /* IssuesProvider */]) === "function" && _c || Object])
    ], IssueMapPage);
    return IssueMapPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=issue-map.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var URL_API = 'https://comem-citizen-engagement.herokuapp.com/api';
/*
  Generated class for the ProvidersIssuesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var IssuesProvider = (function () {
    function IssuesProvider(http) {
        this.http = http;
    }
    IssuesProvider.prototype.getIssues = function (pageSize) {
        if (!pageSize) {
            return this.http.get(URL_API + '/issues');
        }
        else {
            return this.http.get(URL_API + '/issues?pageSize=' + pageSize);
        }
    };
    IssuesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], IssuesProvider);
    return IssuesProvider;
    var _a;
}());

//# sourceMappingURL=issues.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__issue_details_issue_details__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IssueListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssueListPage = (function () {
    function IssueListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IssueListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IssueListPage');
    };
    IssueListPage.prototype.goToDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__issue_details_issue_details__["a" /* IssueDetailsPage */], {
            foo: 'bar'
        });
    };
    IssueListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-issue-list',template:/*ion-inline-start:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\issue-list\issue-list.html"*/'<!--\n\n  Generated template for the IssueListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>IssueList</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  Let\'s list the issues.\n\n  <button ion-button (click)=\'goToDetails()\'>Go to details</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\issue-list\issue-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], IssueListPage);
    return IssueListPage;
}());

//# sourceMappingURL=issue-list.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IssueDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssueDetailsPage = (function () {
    function IssueDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IssueDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IssueDetailsPage');
    };
    IssueDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-issue-details',template:/*ion-inline-start:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\issue-details\issue-details.html"*/'<!--\n\n  Generated template for the IssueDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>IssueDetails</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  Details: {{ navParams.data.foo }}\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\issue-details\issue-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], IssueDetailsPage);
    return IssueDetailsPage;
}());

//# sourceMappingURL=issue-details.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_request__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(auth) {
        this.auth = auth;
        this.authRequest = new __WEBPACK_IMPORTED_MODULE_2__models_auth_request__["a" /* AuthRequest */]();
    }
    /**
     * Called when the login form is submitted.
     */
    LoginPage.prototype.onSubmit = function ($event) {
        var _this = this;
        // Prevent default HTML form behavior.
        $event.preventDefault();
        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }
        // Hide any previous login error.
        this.loginError = false;
        // Perform the authentication request to the API.
        this.auth.logIn(this.authRequest).subscribe(undefined, function (err) {
            _this.loginError = true;
            console.warn("Authentication failed: " + err.message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
    ], LoginPage.prototype, "form", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form (submit)="onSubmit($event)">\n\n    <ion-list>\n\n\n\n      <!-- Name input -->\n\n      <ion-item>\n\n        <ion-label floating>Name</ion-label>\n\n        <ion-input type="text" name="name" #nameInput="ngModel" [(ngModel)]="authRequest.name" required></ion-input>\n\n      </ion-item>\n\n\n\n      <!-- Error message displayed if the name is invalid -->\n\n      <ion-item *ngIf="nameInput.invalid && nameInput.dirty" no-lines>\n\n        <p ion-text color="danger">Name is required.</p>\n\n      </ion-item>\n\n\n\n      <!-- Password input -->\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" name="password" #passwordInput="ngModel" [(ngModel)]="authRequest.password" required></ion-input>\n\n      </ion-item>\n\n\n\n      <!-- Error message displayed if the password is invalid -->\n\n      <ion-item *ngIf="passwordInput.invalid && passwordInput.dirty" no-lines>\n\n        <p ion-text color="danger">Password is required.</p>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n\n\n      <!-- Submit button -->\n\n      <button type="submit" [disabled]="form.invalid" ion-button block>Log in</button>\n\n\n\n      <!-- Error message displayed if the login failed -->\n\n      <p *ngIf="loginError" ion-text color="danger">Name or password is invalid.</p>\n\n\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asymmetrik_ngx_leaflet__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_create_issue_create_issue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_issue_details_issue_details__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_issue_list_issue_list__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_issue_map_issue_map__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_interceptor_auth_interceptor__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_picture_picture__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_issues_issues__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_issue_create_issue__["a" /* CreateIssuePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_issue_details_issue_details__["a" /* IssueDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_issue_list_issue_list__["a" /* IssueListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_issue_map_issue_map__["a" /* IssueMapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__asymmetrik_ngx_leaflet__["a" /* LeafletModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_issue_create_issue__["a" /* CreateIssuePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_issue_details_issue_details__["a" /* IssueDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_issue_list_issue_list__["a" /* IssueListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_issue_map_issue_map__["a" /* IssueMapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_18__providers_auth_interceptor_auth_interceptor__["a" /* AuthInterceptorProvider */], multi: true },
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__providers_picture_picture__["a" /* PictureProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_issues_issues__["a" /* IssuesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(auth, platform, statusBar, splashScreen) {
        var _this = this;
        this.auth = auth;
        // Direct the user to the correct page depending on whether he or she is logged in.
        this.auth.isAuthenticated().subscribe(function (authenticated) {
            if (authenticated) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\cedri\webserv\citizen_engagement_appMob\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Authentication service for login/logout.
 */
var AuthProvider = (function () {
    function AuthProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.authSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["ReplaySubject"](1);
        this.auth$ = this.authSource.asObservable();
        this.storage.get('auth').then(function (auth) {
            _this.authSource.next(auth);
        });
    }
    AuthProvider.prototype.isAuthenticated = function () {
        return this.auth$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (auth) { return !!auth; }));
    };
    AuthProvider.prototype.getUser = function () {
        return this.auth$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (auth) { return auth ? auth.user : undefined; }));
    };
    AuthProvider.prototype.getToken = function () {
        return this.auth$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (auth) { return auth ? auth.token : undefined; }));
    };
    AuthProvider.prototype.logIn = function (authRequest) {
        var _this = this;
        var authUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].apiUrl + "/auth";
        return this.http.post(authUrl, authRequest).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["delayWhen"])(function (auth) {
            return _this.saveAuth(auth);
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (auth) {
            _this.authSource.next(auth);
            console.log("User " + auth.user.name + " logged in");
            return auth.user;
        }));
    };
    AuthProvider.prototype.logOut = function () {
        this.authSource.next(null);
        this.storage.remove('auth');
        console.log('User logged out');
    };
    AuthProvider.prototype.saveAuth = function (auth) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].fromPromise(this.storage.set('auth', auth));
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRequest; });
var AuthRequest = (function () {
    function AuthRequest() {
    }
    return AuthRequest;
}());

//# sourceMappingURL=auth-request.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptorProvider = (function () {
    function AuthInterceptorProvider(injector) {
        this.injector = injector;
    }
    AuthInterceptorProvider.prototype.intercept = function (req, next) {
        // Retrieve AuthProvider at runtime from the injector.
        // (Otherwise there would be a circular dependency:
        //  AuthInterceptorProvider -> AuthProvider -> HttpClient -> AuthInterceptorProvider).
        var auth = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */]);
        // Get the bearer token (if any).
        return auth.getToken().pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["first"])(), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["switchMap"])(function (token) {
            // Add it to the request if it doesn't already have an Authorization header.
            if (token && !req.headers.has('Authorization')) {
                req = req.clone({
                    headers: req.headers.set('Authorization', "Bearer " + token)
                });
            }
            return next.handle(req);
        }));
    };
    AuthInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], AuthInterceptorProvider);
    return AuthInterceptorProvider;
}());

//# sourceMappingURL=auth-interceptor.js.map

/***/ })

},[361]);
//# sourceMappingURL=main.js.map