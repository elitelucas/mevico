function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_config/constant.ts":
  /*!*************************************!*\
    !*** ./src/app/_config/constant.ts ***!
    \*************************************/

  /*! exports provided: constant */

  /***/
  function srcApp_configConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "constant", function () {
      return constant;
    });

    var constant = {
      defaultVideo: "http://localhost:3000/api/v1/public/video/movie.mp4",
      defaultImage: "assets/images/users/d5.jpg",
      tipsImage: "assets/images/front/tips.png",
      defaultText: "About Pasatrae.com\n" + "\n" + "We believe telemedicine will change the world by making it easier and more affordable for healthcare providers to care for their patients anywhere.\n" + "\n" + "Everyone should have access to telemedicine. Cost and complexity should not be a barrier.\n" + "\n" + "Doxy.me is simple and free so any healthcare provider can provide care to their patients using telemedicine.",
      TTL: 1000 * 60 * 120
    };
    /***/
  },

  /***/
  "./src/app/_helpers/auth.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/_helpers/auth.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: AuthInterceptor, authInterceptorProviders */

  /***/
  function srcApp_helpersAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
      return authInterceptorProviders;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TOKEN_HEADER_KEY = 'authorization';

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService, router) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authReq = req;
          var token = this.authService.getToken(); //console.log("intercept");

          /*console.log("token");
          console.log(token);*/

          var now = new Date();
          var tokenExpiredTime = JSON.parse(localStorage.getItem('tokenExpiredTime'));
          /*console.log("tokenExpiredTime");
          console.log(tokenExpiredTime);*/

          /*console.log("authReq");
          console.log(authReq.url);*/

          var index = authReq.url.indexOf("aws");

          if (index > 0) {
            return next.handle(authReq);
          } else {
            if (token != null) {
              if (now.getTime() - tokenExpiredTime > 0) {
                this.handleExpiredToken();
              } else {
                authReq = req.clone({
                  headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
                });
                /*console.log("authReq");
                console.log(authReq);*/
              }
            }
          }

          return next.handle(authReq);
        }
      }, {
        key: "handleExpiredToken",
        value: function handleExpiredToken() {
          this.authService.logout();
          this.router.navigateByUrl('/');
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();

    var authInterceptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
      useClass: AuthInterceptor,
      multi: true
    }];
    /***/
  },

  /***/
  "./src/app/_services/auth.patient.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/_services/auth.patient.service.ts ***!
    \***************************************************/

  /*! exports provided: baseUrl, AuthPatientService */

  /***/
  function srcApp_servicesAuthPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
      return baseUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPatientService", function () {
      return AuthPatientService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _config_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_config/constant */
    "./src/app/_config/constant.ts");

    var baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;

    var AuthPatientService =
    /*#__PURE__*/
    function () {
      function AuthPatientService(http) {
        _classCallCheck(this, AuthPatientService);

        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentPatient')));
        this.currentUser = this.userSubject.asObservable();
      }

      _createClass(AuthPatientService, [{
        key: "signUp",
        value: function signUp(userData) {
          var signUpUrl = baseUrl + 'auth/register';
          return this.http.post(signUpUrl, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "signIn",
        value: function signIn(userData) {
          var _this = this;

          var signInUrl = baseUrl + 'auth/login';
          return this.http.post(signInUrl, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.token) {
              _this.setToken(res);

              _this.setCurrentUser(res);
            }

            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error && error.status === 401) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }
          }));
        }
      }, {
        key: "setToken",
        value: function setToken(result) {
          /*console.log(result);*/
          var now = new Date();
          localStorage.setItem('token', result.token);
          localStorage.setItem('tokenExpiredTime', JSON.stringify(_config_constant__WEBPACK_IMPORTED_MODULE_5__["constant"].TTL + now.getTime()));
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "setCurrentUser",
        value: function setCurrentUser(result) {
          /*console.log("setCurrentUser result");
          console.log(result);*/
          localStorage.setItem('currentPatient', JSON.stringify(result));
          this.userSubject.next(result);
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return localStorage.getItem('token') !== null;
        }
      }, {
        key: "logout",
        value: function logout() {
          if (this.getCurrentUser && this.getCurrentUser.role !== 'Admin') {//this.meetRoomService.desactiveProvider(this.getCurrentUser);
          }

          localStorage.removeItem('token');
        }
      }, {
        key: "emailVerify",
        value: function emailVerify(token) {
          var emailVerifyUrl = baseUrl + "auth/verify-email";
          return this.http.post(emailVerifyUrl, {
            token: token
          });
        }
      }, {
        key: "smsVerify",
        value: function smsVerify(code, token) {
          var smsVerifyUrl = baseUrl + "auth/verify-sms";
          return this.http.post(smsVerifyUrl, {
            code: code,
            token: token
          });
        }
      }, {
        key: "join",
        value: function join(patientData) {
          /* console.log("patientData");
           console.log(patientData);*/
          var joinUrl = baseUrl + "auth/join";
          return this.http.post(joinUrl, patientData);
        }
      }, {
        key: "joinValidatePatient",
        value: function joinValidatePatient(patientData) {
          var _this2 = this;

          /*console.log("joinValidatePatient");
          console.log(patientData);*/
          var joinUrl = baseUrl + "auth/join/validate/patient";
          return this.http.post(joinUrl, patientData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.token) {
              _this2.setToken(res);

              _this2.setCurrentUser(res.patient);
            }

            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getCurrentUser",
        get: function get() {
          return this.userSubject.value;
        }
      }]);

      return AuthPatientService;
    }();

    AuthPatientService.ɵfac = function AuthPatientService_Factory(t) {
      return new (t || AuthPatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthPatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthPatientService,
      factory: AuthPatientService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthPatientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService, baseUrl */

  /***/
  function srcApp_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
      return baseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _config_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_config/constant */
    "./src/app/_config/constant.ts");
    /* harmony import */


    var _meet_room_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./meet-room.service */
    "./src/app/_services/meet-room.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, meetRoomService) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.meetRoomService = meetRoomService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.userSubject.asObservable();
      }

      _createClass(AuthService, [{
        key: "signUp",
        value: function signUp(userData) {
          var signUpUrl = baseUrl + 'auth/register';
          return this.http.post(signUpUrl, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "signIn",
        value: function signIn(userData) {
          var _this3 = this;

          var signInUrl = baseUrl + 'auth/login';
          return this.http.post(signInUrl, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.token) {
              _this3.setToken(res);

              _this3.setCurrentUser(res);
            }

            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error && error.status === 401) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }
          }));
        }
      }, {
        key: "setToken",
        value: function setToken(result) {
          var now = new Date();
          localStorage.setItem('token', result.token.accessToken);
          localStorage.setItem('tokenExpiredTime', JSON.stringify(_config_constant__WEBPACK_IMPORTED_MODULE_5__["constant"].TTL + now.getTime()));
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "setCurrentUser",
        value: function setCurrentUser(result) {
          console.log("setCurrentUser");
          console.log(result);
          localStorage.setItem('currentUser', JSON.stringify(result.user));
          this.userSubject.next(result.user);
        }
      }, {
        key: "refreshCurrentUser",
        value: function refreshCurrentUser(user) {
          console.log("refreshCurrentUser");
          console.log(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.userSubject.next(user);
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return localStorage.getItem('token') !== null;
        }
      }, {
        key: "logout",
        value: function logout() {
          if (this.getCurrentUser && this.getCurrentUser.role !== 'Admin') {//this.meetRoomService.desactiveProvider(this.getCurrentUser);
          }

          localStorage.removeItem('token');
        }
      }, {
        key: "emailVerify",
        value: function emailVerify(token) {
          var emailVerifyUrl = baseUrl + "auth/verify-email/" + token;
          return this.http.post(emailVerifyUrl, {});
        }
      }, {
        key: "smsVerify",
        value: function smsVerify(code, token) {
          var smsVerifyUrl = baseUrl + "auth/verify-sms";
          return this.http.post(smsVerifyUrl, {
            code: code,
            token: token
          });
        }
      }, {
        key: "join",
        value: function join(patientData) {
          var joinUrl = baseUrl + "auth/join";
          return this.http.post(joinUrl, patientData);
        }
      }, {
        key: "getCurrentUser",
        get: function get() {
          return this.userSubject.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return _meet_room_service__WEBPACK_IMPORTED_MODULE_6__["MeetRoomService"];
      })));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _meet_room_service__WEBPACK_IMPORTED_MODULE_6__["MeetRoomService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return _meet_room_service__WEBPACK_IMPORTED_MODULE_6__["MeetRoomService"];
            })]
          }]
        }];
      }, null);
    })();

    var baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    /***/
  },

  /***/
  "./src/app/_services/content-blog.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/_services/content-blog.service.ts ***!
    \***************************************************/

  /*! exports provided: ContentBlogService */

  /***/
  function srcApp_servicesContentBlogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentBlogService", function () {
      return ContentBlogService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContentBlogService =
    /*#__PURE__*/
    function () {
      function ContentBlogService(http) {
        _classCallCheck(this, ContentBlogService);

        this.http = http;
      }

      _createClass(ContentBlogService, [{
        key: "getByUrl",
        value: function getByUrl(url) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');
          return this.http.get(url, {
            headers: headers,
            responseType: 'text'
          });
        }
      }]);

      return ContentBlogService;
    }();

    ContentBlogService.ɵfac = function ContentBlogService_Factory(t) {
      return new (t || ContentBlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    ContentBlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ContentBlogService,
      factory: ContentBlogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentBlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/meet-room-patient.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/_services/meet-room-patient.service.ts ***!
    \********************************************************/

  /*! exports provided: MeetRoomPatientService */

  /***/
  function srcApp_servicesMeetRoomPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetRoomPatientService", function () {
      return MeetRoomPatientService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var MeetRoomPatientService =
    /*#__PURE__*/
    function () {
      function MeetRoomPatientService() {
        _classCallCheck(this, MeetRoomPatientService);

        this.localVideo = null;
        this.localStream = null;
        this.remoteVideo = null;
        this.myPeer = null;
        this.localCall = null;
        this.myPeerId = null;
      }

      _createClass(MeetRoomPatientService, [{
        key: "confirmConnectPatient",
        value: function confirmConnectPatient(patient) {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].socket_endpoint);
          console.log(this.socket);
          this.socket.emit('confirmConnectPatient', patient);
        }
        /*public connectioProvider() {
          return Observable.create((observer) => {
            this.socket.on('providerConnect', (patients) => {
              observer.next(patients)
            });
          })
        }
            public disconnectioProvider() {
          return Observable.create((observer) => {
            this.socket.on('providerDisconnect', (patients) => {
              observer.next(patients)
            });
          })
        }*/

      }, {
        key: "providerEntered",
        value: function providerEntered() {
          var _this4 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this4.socket.on('providerEnteredInPayProvider', function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "receiveConfirmProvider",
        value: function receiveConfirmProvider() {
          var _this5 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this5.socket.on('confirmProvider', function (confirmProvider) {
              observer.next(confirmProvider);
            });
          });
        }
      }, {
        key: "receiveEndCall",
        value: function receiveEndCall() {
          var _this6 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this6.socket.on("endCall", function (data) {
              return __awaiter(_this6, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        observer.next(data.text);

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
            });
          });
        }
      }, {
        key: "endCall",
        value: function endCall(to, text) {
          this.socket.emit("endCall", {
            text: text,
            from: this.socket.id,
            to: to
          });
        }
      }, {
        key: "stopVideoAudio",
        value: function stopVideoAudio() {
          try {
            if (this.localStream != null) {
              this.localStream.getTracks().forEach(function (track) {
                if (track.readyState == 'live' && track.kind === 'video') {
                  track.stop();
                }

                if (track.readyState == 'live' && track.kind === 'audio') {
                  track.stop();
                }
              });
              this.localStream = null;
            }

            if (this.localVideo != null) {
              this.localVideo.nativeElement.srcObject = null;
              this.localVideo = null;
            }

            this.remoteVideo = null;

            if (this.localCall != null) {
              this.localCall.close();
            }
          } catch (error) {
            console.log(error);
          }
        }
      }, {
        key: "disconnectMe",
        value: function disconnectMe() {
          console.log("disconnectMe"); //this.socket.disconnect();
        }
      }, {
        key: "confirmPay",
        value: function confirmPay(providerId, payMethodSelect) {
          this.socket.emit('confirmPay', providerId, payMethodSelect);
        }
      }, {
        key: "patientEnteredInPayPatient",
        value: function patientEnteredInPayPatient(providerId, patietDni) {
          this.socket.emit('patientEnteredInPayPatient', providerId, patietDni);
        }
      }, {
        key: "receivePay",
        value: function receivePay() {
          var _this7 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this7.socket.on('sendPay', function (payAmount) {
              observer.next(payAmount);
            });
          });
        }
      }, {
        key: "setLocalElement",
        value: function setLocalElement(lv) {
          this.localVideo = lv;
          this.localVideo.nativeElement.volume = 0;
          this.localVideo.nativeElement.muted = 0;
        }
      }, {
        key: "setRemoteElement",
        value: function setRemoteElement(rv) {
          this.remoteVideo = rv;
        }
      }, {
        key: "localMuteActive",
        value: function localMuteActive(active) {
          this.localStream.getAudioTracks()[0].enabled = !active;
        }
      }, {
        key: "localVideoActive",
        value: function localVideoActive(active) {
          this.localStream.getVideoTracks()[0].enabled = !active;
        }
      }, {
        key: "startLocalMediaVideo",
        value: function startLocalMediaVideo() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return window.navigator.mediaDevices.getUserMedia({
                      video: true,
                      audio: true
                    });

                  case 2:
                    this.localStream = _context2.sent;
                    this.localVideo.nativeElement.srcObject = this.localStream;

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "preparateVideoCallFormProviderListener",
        value: function preparateVideoCallFormProviderListener() {
          var _this8 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this8.socket.on('preparateVideoCallFormProvider', function (provider) {
              observer.next(provider);
            });
          });
        }
      }, {
        key: "connect",
        value: function connect() {
          var _this9 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var config = {
              host: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerServerHost,
              port: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerServerPort,
              path: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerServerPath,
              debug: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerServerDebugLevel,
              secure: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerServerSecure,
              config: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerConfig.config
            };
            _this9.myPeer = new Peer(undefined, config);

            _this9.myPeer.on('open', function () {
              _this9.myPeerId = _this9.myPeer.id;
              observer.next(_this9.myPeerId);
            });

            _this9.myPeer.on('call', function (call) {
              _this9.localCall = call;
              call.answer(_this9.localStream);
              call.on('stream', function (userVideoStream) {
                _this9.remoteVideo.nativeElement.srcObject = userVideoStream;
              });
            });

            _this9.myPeer.on('error', function (err) {
              console.log("err");
              console.log(err);
            });
          });
        }
      }, {
        key: "preparateVideoCallFormPatient",
        value: function preparateVideoCallFormPatient(provider, patient) {
          this.socket.emit("preparateVideoCallFormPatient", {
            provider: provider,
            patient: patient
          });
        }
      }, {
        key: "receiveUploadFile",
        value: function receiveUploadFile() {
          var _this10 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this10.socket.on('sendUploadFile', function (uploadFileName) {
              observer.next(uploadFileName);
            });
          });
        }
      }, {
        key: "recivetext",
        value: function recivetext() {
          var _this11 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this11.socket.on("chat_provider", function (data) {
              return __awaiter(_this11, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        observer.next(data.text);

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
            });
          });
        }
      }, {
        key: "sendtext",
        value: function sendtext(to, text) {
          this.socket.emit("chat_provider", {
            text: text,
            from: this.socket.id,
            to: to
          });
        }
      }, {
        key: "sendUploadFile",
        value: function sendUploadFile(uploadFileName, key, othersId) {
          this.socket.emit('sendUploadFile', uploadFileName, key, othersId);
        }
        /*
        revisar si es necesario
          public receiveProvideId() {
            this.trace("receiveProviderId :");
            return Observable.create((observer) => {
              this.socket.on('receiveProviderId', (providerId) => {
                observer.next(providerId)
              });
            });
          }
        */

      }, {
        key: "trace",
        value: function trace() {
          var now = (window.performance.now() / 1000).toFixed(3); //console.log(now + ': ', arg);
        }
      }]);

      return MeetRoomPatientService;
    }();

    MeetRoomPatientService.ɵfac = function MeetRoomPatientService_Factory(t) {
      return new (t || MeetRoomPatientService)();
    };

    MeetRoomPatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MeetRoomPatientService,
      factory: MeetRoomPatientService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetRoomPatientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/meet-room.service.ts":
  /*!************************************************!*\
    !*** ./src/app/_services/meet-room.service.ts ***!
    \************************************************/

  /*! exports provided: MeetRoomService */

  /***/
  function srcApp_servicesMeetRoomServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetRoomService", function () {
      return MeetRoomService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var MeetRoomService =
    /*#__PURE__*/
    function () {
      function MeetRoomService() {
        _classCallCheck(this, MeetRoomService);

        this.localVideo = null;
        this.localStream = null;
        this.remoteVideo = null;
        this.myPeer = null;
        this.localCall = null;
        this.myPeerId = null;
      }

      _createClass(MeetRoomService, [{
        key: "confirmConnect",
        value: function confirmConnect(userProvider) {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].socket_endpoint);
          console.log(this.socket);
          /* console.log("confirmConnect:", userProvider);
           console.log("confirmConnect:", this.myPeerId);*/

          this.socket.emit('confirmConnect', userProvider);
        }
      }, {
        key: "startLocalMediaVideo",
        value: function startLocalMediaVideo() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return window.navigator.mediaDevices.getUserMedia({
                      video: true,
                      audio: true
                    });

                  case 2:
                    this.localStream = _context4.sent;
                    this.localVideo.nativeElement.srcObject = this.localStream;

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "disconnectMe",
        value: function disconnectMe() {
          console.log("disconnectMe");

          if (this.socket) {
            this.socket.disconnect();
          }
        }
      }, {
        key: "stopVideoAudio",
        value: function stopVideoAudio() {
          try {
            if (this.localStream != null) {
              this.localStream.getTracks().forEach(function (track) {
                if (track.readyState == 'live' && track.kind === 'video') {
                  track.stop();
                }

                if (track.readyState == 'live' && track.kind === 'audio') {
                  track.stop();
                }
              });
              this.localStream = null;
            }

            if (this.localVideo != null) {
              this.localVideo.nativeElement.srcObject = null;
              this.localVideo = null;
            }

            this.remoteVideo = null;

            if (this.localCall != null) {
              this.localCall.close();
            }
          } catch (error) {
            console.log(error);
          }
        }
      }, {
        key: "setLocalElement",
        value: function setLocalElement(lv) {
          this.localVideo = lv;
          this.localVideo.nativeElement.volume = 0;
          this.localVideo.nativeElement.muted = 0;
        }
      }, {
        key: "setRemoteElement",
        value: function setRemoteElement(rv) {
          this.remoteVideo = rv;
        }
      }, {
        key: "localMuteActive",
        value: function localMuteActive(active) {
          this.localStream.getAudioTracks()[0].enabled = !active;
        }
      }, {
        key: "localVideoActive",
        value: function localVideoActive(active) {
          this.localStream.getVideoTracks()[0].enabled = !active;
        }
      }, {
        key: "connect",
        value: function connect() {
          var _this12 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var config = {
              host: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerServerHost,
              port: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerServerPort,
              path: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerServerPath,
              debug: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerServerDebugLevel,
              secure: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerServerSecure,
              config: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].peerConfig.config
            };
            _this12.myPeer = new Peer(undefined, config);

            _this12.myPeer.on('open', function () {
              console.log("open");
              _this12.myPeerId = _this12.myPeer.id;
              observer.next(_this12.myPeerId);
            });

            _this12.myPeer.on('call', function (call) {
              console.log("call               ---------------------------------------");
              _this12.localCall = call;
              call.answer(_this12.localStream);
              call.on('stream', function (userVideoStream) {
                _this12.remoteVideo.nativeElement.srcObject = userVideoStream;
              });
            });

            _this12.myPeer.on('error', function (err) {
              console.log("err");
              console.log(err);
            });
          });
        }
      }, {
        key: "callPatient",
        value: function callPatient(patient) {
          var _this13 = this;

          console.log("callPatient ", patient.peerId);
          /*console.log("callPatient this.localStream", this.localStream)*/

          this.localCall = this.myPeer.call(patient.peerId, this.localStream); //console.log("stream 2")

          this.localCall.on('stream', function (remoteStream) {
            //console.log("stream 3 " , remoteStream)
            _this13.remoteVideo.nativeElement.srcObject = remoteStream;
          });
        }
      }, {
        key: "waitCallComplete",
        value: function waitCallComplete() {
          var _this14 = this;

          console.log("waitCallComplete");
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this14.myPeer.on('call', function (call) {
              console.log("call               23432423324-----------------");
              _this14.localCall = call;
              console.log("call");
              console.log("call this.localStream", _this14.localStream);
              call.answer(_this14.localStream); //console.log("answer localStream")

              call.on('stream', function (remoteStream) {
                //console.log("stream : " , remoteStream)
                _this14.remoteVideo.nativeElement.srcObject = remoteStream;
              }); //console.log("stream 22")

              observer.next(call);
            });
          });
        }
      }, {
        key: "updatePatientState",
        value: function updatePatientState() {
          var _this15 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this15.socket.on('updatePatientState', function (patient) {
              observer.next(patient);
            });
          });
        }
      }, {
        key: "confirmConnectPatient",
        value: function confirmConnectPatient(patient) {
          //console.log("------------confirmConnectPatient:", patient);
          this.socket.emit('confirmConnectPatient', patient);
        } //send the information that the provider entered in pay-provider 
        //to patient that is in waiting room.

      }, {
        key: "providerEnteredInPayProvider",
        value: function providerEnteredInPayProvider(provider, patietDni) {
          /*console.log("------------providerEndteredInPayProvider", provider);
          console.log("------------patientDni", patietDni);*/
          this.socket.emit('providerEnteredInPayProvider', provider, patietDni);
        } //send the information that the patient entered in pay-patient 
        //to provider that is in pay-provider.

      }, {
        key: "patientEnteredInPayPatient",
        value: function patientEnteredInPayPatient(providerId, patietDni) {
          /*console.log("------------patientEnteredInPayPatient", providerId);
          console.log("------------patientDni", patietDni);*/
          this.socket.emit('patientEnteredInPayPatient', providerId, patietDni);
        } //send payAmount from provider to patient

      }, {
        key: "sendPay",
        value: function sendPay(payAmount, patientSocketId) {
          //console.log("-----------payAmount", payAmount);
          this.socket.emit('sendPay', payAmount, patientSocketId);
        } //send confirm pay infomation  from patient to provider

      }, {
        key: "confirmPay",
        value: function confirmPay(providerId, payMethodSelect) {
          /*console.log('providerId')
          console.log(providerId)*/
          this.socket.emit('confirmPay', providerId, payMethodSelect);
        } //send confirm provider infomation  from provider to patient

      }, {
        key: "confirmProvider",
        value: function confirmProvider(dni) {
          this.socket.emit('confirmProvider', dni);
        } //send uploadFileName from provider to patient

      }, {
        key: "sendUploadFile",
        value: function sendUploadFile(uploadFileName, key, othersId) {
          this.socket.emit('sendUploadFile', uploadFileName, key, othersId);
        }
      }, {
        key: "providerEntered",
        value: function providerEntered() {
          var _this16 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this16.socket.on('providerEnteredInPayProvider', function (data) {
              observer.next(data);
            });
          });
        }
      }, {
        key: "patientEntered",
        value: function patientEntered() {
          var _this17 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this17.socket.on('patientEnteredInPayPatient', function (patientSocketId) {
              observer.next(patientSocketId);
            });
          });
        }
      }, {
        key: "receivePay",
        value: function receivePay() {
          var _this18 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this18.socket.on('sendPay', function (payAmount) {
              observer.next(payAmount);
            });
          });
        }
      }, {
        key: "receiveConfirmPay",
        value: function receiveConfirmPay() {
          var _this19 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this19.socket.on('confirmPay', function (confirmPay) {
              observer.next(confirmPay);
            });
          });
        }
      }, {
        key: "receiveConfirmProvider",
        value: function receiveConfirmProvider() {
          var _this20 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this20.socket.on('confirmProvider', function (confirmProvider) {
              observer.next(confirmProvider);
            });
          });
        }
      }, {
        key: "receiveUploadFile",
        value: function receiveUploadFile() {
          var _this21 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this21.socket.on('sendUploadFile', function (uploadFileName) {
              observer.next(uploadFileName);
            });
          });
        }
      }, {
        key: "activeProvider",
        value: function activeProvider(userProvider) {
          userProvider.peerId = this.myPeerId;
          /*console.log("activeProvider:", userProvider);
          console.log("activeProvider:", this.myPeerId);*/

          this.trace("activeProvider:", userProvider);
          this.socket.emit('activate', userProvider);
        }
      }, {
        key: "desactiveProvider",
        value: function desactiveProvider(userProvider) {
          this.trace("desactiveProvider:", userProvider);
          this.socket.emit('desactivate', userProvider);
        }
        /*public countPatientRoom() {
          return Observable.create((observer) => {
            this.socket.on('countPatientRoom', (patients) => {
              observer.next(patients)
            });
          })
        }*/

      }, {
        key: "connectioProvider",
        value: function connectioProvider() {
          var _this22 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this22.socket.on('providerConnect', function (patients) {
              observer.next(patients);
            });
          });
        }
      }, {
        key: "disconnectioProvider",
        value: function disconnectioProvider() {
          var _this23 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this23.socket.on('providerDisconnect', function (patients) {
              observer.next(patients);
            });
          });
        }
      }, {
        key: "disconnectPatients",
        value: function disconnectPatients() {
          var _this24 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this24.socket.on('patientsDisconnect', function (patients) {
              observer.next(patients);
            });
          });
        }
      }, {
        key: "startCallPatient",
        value: function startCallPatient(provider, patient) {
          this.socket.emit("start_call_patient", {
            providerId: provider.id,
            peerId: provider.peerId,
            patientId: patient._id
          });
        }
      }, {
        key: "sendtext",
        value: function sendtext(to, text) {
          this.socket.emit("chat_provider", {
            text: text,
            from: this.socket.id,
            to: to
          });
        }
      }, {
        key: "recivetext",
        value: function recivetext() {
          var _this25 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this25.socket.on("chat_provider", function (data) {
              return __awaiter(_this25, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        observer.next(data.text);

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));
            });
          });
        }
      }, {
        key: "endCall",
        value: function endCall(to, text) {
          this.socket.emit("endCall", {
            text: text,
            from: this.socket.id,
            to: to
          });
        }
      }, {
        key: "receiveEndCall",
        value: function receiveEndCall() {
          var _this26 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this26.socket.on("endCall", function (data) {
              return __awaiter(_this26, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        observer.next(data.text);

                      case 1:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
            });
          });
        }
      }, {
        key: "preparateVideoCallFormProvider",
        value: function preparateVideoCallFormProvider(provider, patientId) {
          this.socket.emit("preparateVideoCallFormProvider", provider, patientId);
        }
      }, {
        key: "preparateVideoCallFormProviderListener",
        value: function preparateVideoCallFormProviderListener() {
          var _this27 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this27.socket.on('preparateVideoCallFormProvider', function (provider) {
              observer.next(provider);
            });
          });
        }
      }, {
        key: "patientConnected",
        value: function patientConnected() {
          var _this28 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this28.socket.on('patient_connected', function (patient) {
              observer.next(patient);
            });
          });
        }
      }, {
        key: "preparateVideoCallFormPatient",
        value: function preparateVideoCallFormPatient(provider, patient) {
          this.socket.emit("preparateVideoCallFormPatient", {
            provider: provider,
            patient: patient
          });
        }
        /*public confirmReadyPatient(patient) {
          this.trace("confirmReadyPatient :", patient);
          this.socket.emit('confirmReadyPatient', patient);
        }*/

        /*public confirmPatientCall() {
          this.trace("confirmReadyPatient :");
          return Observable.create((observer) => {
            this.socket.on('confirmReadyPatient', (patient) => {
              observer.next(patient)
            });
          });
        }*/

        /*public createRoom(data) {
          this.trace("createRoom :", data);
          this.socket.emit('createRoom', data);
        }*/

        /*public createProviderRoom(data) {
          this.trace("createProviderRoom :", data);
          this.socket.emit('createProviderRoom', data);
        }*/

      }, {
        key: "receiveProvideId",
        value: function receiveProvideId() {
          var _this29 = this;

          this.trace("receiveProviderId :");
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this29.socket.on('receiveProviderId', function (providerId) {
              observer.next(providerId);
            });
          });
        }
      }, {
        key: "publicMe",
        value: function publicMe(providerId) {
          this.socket.emit("publicMe", providerId);
        }
      }, {
        key: "privateMe",
        value: function privateMe(providerId) {
          this.socket.emit("publicMe", providerId);
        }
      }, {
        key: "trace",
        value: function trace() {
          var now = (window.performance.now() / 1000).toFixed(3); //console.log(now + ': ', arg);
        }
      }]);

      return MeetRoomService;
    }();

    MeetRoomService.ɵfac = function MeetRoomService_Factory(t) {
      return new (t || MeetRoomService)();
    };

    MeetRoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MeetRoomService,
      factory: MeetRoomService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetRoomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/patient.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/_services/patient.service.ts ***!
    \**********************************************/

  /*! exports provided: PatientService */

  /***/
  function srcApp_servicesPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientService", function () {
      return PatientService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng_event_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-event-source */
    "./node_modules/ng-event-source/eventsource.js");

    var PatientService =
    /*#__PURE__*/
    function () {
      function PatientService(zone, http) {
        _classCallCheck(this, PatientService);

        this.zone = zone;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "patient/";
      }

      _createClass(PatientService, [{
        key: "close",
        value: function close() {
          if (this.eventSourceProviderState) {
            console.log("PatientService close");
            this.eventSourceProviderState.close();
            this.eventSourceProviderState = null;
          }
        }
      }, {
        key: "getProviderState",
        value: function getProviderState(room, reconnect) {
          var _this30 = this;

          var waitingPatientUrl = this.baseUrl + 'provider-state/' + room;
          var options = {
            headers: {
              headerName: 'HeaderValue',
              header2: 'HeaderValue2'
            }
          };
          this.eventSourceProviderState = new ng_event_source__WEBPACK_IMPORTED_MODULE_5__["EventSourcePolyfill"](waitingPatientUrl, options);
          return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            _this30.eventSourceProviderState.onmessage = function (event) {
              _this30.zone.run(function () {
                observer.next(event.data);
              });
            };

            _this30.eventSourceProviderState.onerror = function (event) {
              console.log("onerror ", event.target["readyState"], event);

              switch (event.target["readyState"]) {
                case EventSource.CLOSED:
                  _this30.zone.run(function () {
                    _this30.eventSourceProviderState.close();

                    reconnect();
                  });

                  break;

                case 0:
                  _this30.close();

                  break;
              }
            };
          });
          /*this.eventSourceProviderState = new EventSource(waitingPatientUrl);
          return Observable.create(observer => {
            this.observableEventSoruce = observer;
            this.eventSourceProviderState.onopen = (event) => {
              console.log('getWaitingPatientsData2 connected');
            };
            this.eventSourceProviderState.onmessage = (event) => {
              //console.log("getWaitingPatientsData2 data onmessage",event.data);
              observer.next(event.data);
            };
            this.eventSourceProviderState.onerror = (event) => {
              console.log("onerror " , event.target["readyState"], event);
              this.eventSourceProviderState.close();
              if(event.target["readyState"] === 0) {
                console.log('The stream has been closed by the server.');
                this.eventSourceProviderState.close();
                observer.complete();
              } else {
                observer.error('EventSource error: ' + event);
              }
              switch (event.target["readyState"]) {
                case EventSource.CLOSED:
                  setTimeout(function () {
                    reconnect();
                  }, 5000);
                  break;
              }
            };
          });*/
        }
      }, {
        key: "updatePatient",
        value: function updatePatient(patientData) {
          var patientUrl = this.baseUrl;
          return this.http.put(patientUrl, patientData);
        }
      }, {
        key: "chartList",
        value: function chartList() {
          var chartListUrl = this.baseUrl + 'chart/list';
          return this.http.get(chartListUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "download",
        value: function download(fileName) {
          return this.http.get(this.baseUrl + fileName, {
            responseType: 'blob'
          });
        }
      }, {
        key: "checkRoomExist",
        value: function checkRoomExist(room) {
          var checkRoomUrl = this.baseUrl + 'roomName/' + room;
          return this.http.get(checkRoomUrl);
        }
      }, {
        key: "getPayData",
        value: function getPayData(id) {
          var paymentUrl = this.baseUrl + "payment/" + id;
          return this.http.get(paymentUrl);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(formData) {
          var fileUrl = this.baseUrl + "uploadFile";
          return this.http.post(fileUrl, formData, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "save",
        value: function save(providerId, patientId, feeback) {
          var saveFeedbackUrl = this.baseUrl + 'feedback';
          return this.http.post(saveFeedbackUrl, {
            providerId: providerId,
            patientId: patientId,
            feeback: feeback
          });
        }
      }, {
        key: "getBlog",
        value: function getBlog(id) {
          var getBlogUrl = this.baseUrl + "getBlog/" + id;
          return this.http.get(getBlogUrl);
        }
      }, {
        key: "disconnectPatient",
        value: function disconnectPatient(patientId) {
          var patientUrl = this.baseUrl + 'disconnect/' + patientId;
          return this.http.put(patientUrl, null);
        }
      }]);

      return PatientService;
    }();

    PatientService.ɵfac = function PatientService_Factory(t) {
      return new (t || PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PatientService,
      factory: PatientService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/provider.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_services/provider.service.ts ***!
    \***********************************************/

  /*! exports provided: ProviderService */

  /***/
  function srcApp_servicesProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProviderService", function () {
      return ProviderService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProviderService =
    /*#__PURE__*/
    function () {
      //eventSource: any = window['EventSource'];
      function ProviderService(http, _zone) {
        _classCallCheck(this, ProviderService);

        this.http = http;
        this._zone = _zone;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl;
      }

      _createClass(ProviderService, [{
        key: "close",
        value: function close() {
          if (this.eventSourceWaitingPatient) {
            this.eventSourceWaitingPatient.close();
            this.eventSourceWaitingPatient = null;
          }
        }
      }, {
        key: "getWaitingPatientsData",
        value: function getWaitingPatientsData(room, reconnect) {
          var _this31 = this;

          var waitingPatientUrl = this.baseUrl + 'provider/patients-waiting/' + room;
          this.eventSourceWaitingPatient = new EventSource(waitingPatientUrl);
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this31.eventSourceWaitingPatient.onopen = function (event) {
              console.log('getWaitingPatientsData2 connected');
            };

            _this31.eventSourceWaitingPatient.onmessage = function (event) {
              //console.log("getWaitingPatientsData2 data onmessage",event.data);
              observer.next(event.data);
            };

            _this31.eventSourceWaitingPatient.onerror = function (event) {
              console.log("onerror ", event.target["readyState"]);

              _this31.eventSourceWaitingPatient.close();

              switch (event.target["readyState"]) {
                case EventSource.CLOSED:
                  setTimeout(function () {
                    reconnect();
                  }, 5000);
                  break;
              }
            };
          });
        }
      }, {
        key: "sendSMS",
        value: function sendSMS(smsData) {
          var smsUrl = this.baseUrl + 'provider/invite-by-sms';
          this.trace("smsUrl:", smsUrl);
          return this.http.post(smsUrl, smsData);
        }
        /*getRoomData(userId) {
          const roomUrl = this.baseUrl + 'provider/room/' + userId;
          this.trace("roomUrl:", roomUrl);
          return this.http.get<any>(roomUrl)
        }*/

      }, {
        key: "changeText",
        value: function changeText(userId, text) {
          var textUrl = this.baseUrl + 'provider/text/' + userId;
          this.trace("changeText:", textUrl);
          return this.http.patch(textUrl, {
            text: text
          });
        }
        /*checkRoomExist(room) {
          const checkRoomUrl = this.baseUrl + 'provider/roomName/' + room;
          this.trace("checkRoomExist:", checkRoomUrl);
          console.log('checkRoomUrl')
          console.log(checkRoomUrl)
          return this.http.get<any>(checkRoomUrl)
        }*/

      }, {
        key: "checkPatient",
        value: function checkPatient(dni) {
          var checkPatientUrl = this.baseUrl + 'provider/checkPatient/' + dni;
          this.trace("checkPatientUrl:", dni);
          return this.http.get(checkPatientUrl);
        }
      }, {
        key: "postPatient",
        value: function postPatient(data) {
          var postPatientUrl = this.baseUrl + 'provider/postPatient';
          this.trace("postPatientUrl:", postPatientUrl);
          return this.http.put(postPatientUrl, {
            data: data
          });
        } //I added new func to get all patients data.

      }, {
        key: "getAllPatientsData",
        value: function getAllPatientsData(providerId, validateDni, validateName, limit, page) {
          var patientUrl = this.baseUrl + 'provider/allPatients/' + providerId;
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("dni", validateDni).set("fullName", validateName).set("limit", limit).set("page", page); // this.trace("getAllPatientsData:", patientUrl, params);

          return this.http.get(patientUrl, {
            params: params
          });
        }
        /*getInitPatientsData2(value, field) {
          const patientUrl = this.baseUrl + 'provider/initPatients';
          let params = new HttpParams().set("key", field).set("value", value);
          this.trace("getAllPatientsData:", patientUrl, params);
          return this.http.get<any>(patientUrl, { params });
        }
            getFilterPatientsData2(providerId, validateDni, validateName) {
          const patientUrl = this.baseUrl + 'provider/filterPatients/' + providerId ;
          this.trace("getFilterPatientsData:", patientUrl);
          let params = new HttpParams().set("dni", validateDni).set("fullName", validateName);
          return this.http.get<any>(patientUrl, { params });
        }*/

      }, {
        key: "getConsult",
        value: function getConsult(id, startDate, endDate) {
          var patientUrl = this.baseUrl + 'provider/consult/patient/' + id;
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();

          if (undefined != startDate && endDate != undefined) {
            params = params.set("startDate", startDate).set("endDate", endDate);
          }

          this.trace("getConsult:", patientUrl, params);
          return this.http.get(patientUrl, {
            params: params
          });
        }
      }, {
        key: "getInitConsult",
        value: function getInitConsult(id) {
          var patientUrl = this.baseUrl + 'provider/consult/' + id;
          this.trace("getConsult:", patientUrl);
          return this.http.get(patientUrl);
        }
      }, {
        key: "getConsultInChat",
        value: function getConsultInChat(patientId, providerId) {
          var patientUrl = this.baseUrl + 'provider/consultInChat';
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("patientId", patientId).set("providerId", providerId);
          this.trace("getConsultInChat:", patientUrl, params);
          return this.http.get(patientUrl, {
            params: params
          });
        }
      }, {
        key: "sendMail",
        value: function sendMail(from, email, subject, html) {
          //console.log('sdfsdfsdf')
          var mailUrl = this.baseUrl + 'provider/mail';
          this.trace("getConsultInChat:", mailUrl);
          return this.http.post(mailUrl, {
            from: from,
            email: email,
            subject: subject,
            html: html
          });
        }
      }, {
        key: "getOneConsult",
        value: function getOneConsult(patientId, consultId) {
          var patientUrl = this.baseUrl + 'provider/oneConsult';
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("patientId", patientId).set("consultId", consultId);
          this.trace("getOneConsult:", patientUrl, params);
          return this.http.get(patientUrl, {
            params: params
          });
        }
      }, {
        key: "updateConsult",
        value: function updateConsult(updateData) {
          var updateUrl = this.baseUrl + 'provider/updateConsult';
          this.trace("updateUrl:", updateUrl);
          return this.http.put(updateUrl, updateData);
        }
      }, {
        key: "getChart",
        value: function getChart(patientDni) {
          var chartUrl = this.baseUrl + 'provider/getChart/' + patientDni;
          this.trace("getChart:", chartUrl, patientDni);
          return this.http.get(chartUrl);
        }
      }, {
        key: "editChart",
        value: function editChart(updateData) {
          var updateUrl = this.baseUrl + 'provider/chart';
          this.trace("updateUrl:", updateUrl);
          return this.http.put(updateUrl, updateData);
        }
      }, {
        key: "getSignature",
        value: function getSignature(providerId) {
          /*console.log('providerId')
          console.log(providerId)*/
          var sigUrl = this.baseUrl + 'provider/getSignature/' + providerId;
          return this.http.get(sigUrl);
        } //I added end

      }, {
        key: "getPatient",
        value: function getPatient(value, field) {
          var patientUrl = this.baseUrl + 'provider/patientByField';
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("key", field).set("value", value);
          /*console.log(patientUrl);
          console.log(params);*/
          //this.trace("getPatient:", patientUrl, params);

          return this.http.get(patientUrl, {
            params: params
          });
        }
      }, {
        key: "updatePatient",
        value: function updatePatient(patientData) {
          var patientUrl = this.baseUrl + 'provider/patient';
          this.trace("patientUrl:", patientUrl, patientData);
          return this.http.put(patientUrl, patientData);
        }
      }, {
        key: "updatePatientOnChart",
        value: function updatePatientOnChart(patientData) {
          var patientUrl = this.baseUrl + 'provider/patient/chart';
          this.trace("patientUrl:", patientUrl, patientData);
          return this.http.put(patientUrl, patientData);
        }
      }, {
        key: "disconnectPatient",
        value: function disconnectPatient(patientId) {
          var patientUrl = this.baseUrl + 'provider/patient/disconnect/' + patientId;
          console.log("disconnectPatient:", patientUrl);
          return this.http.put(patientUrl, null);
        }
      }, {
        key: "createConsult",
        value: function createConsult(consult) {
          var createConsultUrl = this.baseUrl + "provider/consult";
          this.trace("createConsultUrl:", createConsultUrl);
          return this.http.post(createConsultUrl, consult);
        }
      }, {
        key: "closeConsult",
        value: function closeConsult(consultId) {
          var createConsultUrl = this.baseUrl + "provider/consult/" + consultId + "/close";
          this.trace("createConsultUrl:", createConsultUrl);
          return this.http.patch(createConsultUrl, null);
        }
      }, {
        key: "updateRoom",
        value: function updateRoom(providerId, room) {
          var createConsultUrl = this.baseUrl + "provider/room/" + providerId;
          return this.http.patch(createConsultUrl, {
            room: room
          });
        }
      }, {
        key: "getLastAttetionsPatientsDataProvider",
        value: function getLastAttetionsPatientsDataProvider(userId) {
          var lastAttetionsPatientsUrl = this.baseUrl + 'provider/consult/provider/' + userId;
          this.trace("getLastAttetionsPatientsDataProvider:", lastAttetionsPatientsUrl);
          return this.http.get(lastAttetionsPatientsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            if (result) {
              return result;
            }
          }));
        }
      }, {
        key: "getLastAttetionsPatientsDataPatient",
        value: function getLastAttetionsPatientsDataPatient(patientId) {
          var lastAttetionsPatientsUrl = this.baseUrl + 'provider/consult/patient/' + patientId;
          this.trace("getLastAttetionsPatientsDataPatient:", lastAttetionsPatientsUrl);
          return this.http.get(lastAttetionsPatientsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            if (result) {
              console.log(result);
              return result;
            }
          }));
        }
      }, {
        key: "getPlans",
        value: function getPlans() {
          var getPlansUrl = this.baseUrl + 'plans';
          return this.http.get(getPlansUrl);
        }
      }, {
        key: "getPlanSupcription",
        value: function getPlanSupcription(id) {
          var subcriptionUrl = this.baseUrl + 'provider/subcription/' + id;
          return this.http.get(subcriptionUrl);
        }
      }, {
        key: "sendSubcriptionData",
        value: function sendSubcriptionData(data) {
          var subcriptionUrl = this.baseUrl + 'provider/subcription';
          return this.http.post(subcriptionUrl, data);
        }
      }, {
        key: "cancelCharge",
        value: function cancelCharge(id) {
          var subcriptionUrl = this.baseUrl + 'provider/charge/' + id;
          return this.http["delete"](subcriptionUrl);
        }
      }, {
        key: "cancelSupcription",
        value: function cancelSupcription(id) {
          var subcriptionUrl = this.baseUrl + 'provider/subcription/' + id;
          return this.http["delete"](subcriptionUrl);
        }
      }, {
        key: "chargePayPLan",
        value: function chargePayPLan(data) {
          var subcriptionUrl = this.baseUrl + 'provider/charge';
          return this.http.post(subcriptionUrl, data);
        }
      }, {
        key: "changeSubscribePlan",
        value: function changeSubscribePlan(providerid, planId) {
          var subcriptionUrl = this.baseUrl + 'provider/subcription/' + providerid + '/' + planId;
          return this.http.put(subcriptionUrl, {});
        }
      }, {
        key: "sendMailForSubscription",
        value: function sendMailForSubscription(data) {
          var sendMailForSubscription = this.baseUrl + 'provider/sendMail';
          return this.http.post(sendMailForSubscription, data);
        }
      }, {
        key: "getPlansById",
        value: function getPlansById(planId) {
          var getPlansUrl = this.baseUrl + 'plans/' + planId;
          return this.http.get(getPlansUrl);
        }
      }, {
        key: "getCard",
        value: function getCard(providerId) {
          var getCardUrl = this.baseUrl + 'provider/card/' + providerId;
          return this.http.get(getCardUrl);
        }
      }, {
        key: "updateCard",
        value: function updateCard(data) {
          var updateCardUrl = this.baseUrl + 'provider/card';
          this.trace("updateCardUrl:", updateCardUrl);
          return this.http.put(updateCardUrl, data);
        }
      }, {
        key: "removeCard",
        value: function removeCard(cardId) {
          var deleteCardUrl = this.baseUrl + 'provider/card/' + cardId;
          this.trace("deletePlansUrl:", deleteCardUrl);
          return this.http["delete"](deleteCardUrl);
        }
      }, {
        key: "createPlan",
        value: function createPlan(data) {
          var createPlanUrl = this.baseUrl + 'plans';
          return this.http.post(createPlanUrl, data);
        }
      }, {
        key: "updatePlans",
        value: function updatePlans(data) {
          var updatePlansUrl = this.baseUrl + 'plans/update';
          this.trace("updatePlansUrl:", updatePlansUrl);
          return this.http.put(updatePlansUrl, data);
        }
      }, {
        key: "changeStatusPlan",
        value: function changeStatusPlan(id, status) {
          var changeStatusPlanUrl = this.baseUrl + 'plans/' + id + '/status';
          this.trace("changeStatusPlanUrl:", changeStatusPlanUrl);
          return this.http.patch(changeStatusPlanUrl, {
            status: status
          });
        }
      }, {
        key: "deletePlans",
        value: function deletePlans(planId) {
          var deletePlansUrl = this.baseUrl + 'plans/' + planId;
          this.trace("deletePlansUrl:", deletePlansUrl);
          return this.http["delete"](deletePlansUrl);
        }
      }, {
        key: "getFeedbacks",
        value: function getFeedbacks(providerId) {
          var feedbackUrl = this.baseUrl + 'provider/feedback/' + providerId;
          return this.http.get(feedbackUrl);
        }
      }, {
        key: "trace",
        value: function trace() {
          var now = (window.performance.now() / 1000).toFixed(3); //console.log(now + ': ', arg);
        }
      }]);

      return ProviderService;
    }();

    ProviderService.ɵfac = function ProviderService_Factory(t) {
      return new (t || ProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    ProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProviderService,
      factory: ProviderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/app.component.ts":
  /*!****************************************!*\
    !*** ./src/app/pages/app.component.ts ***!
    \****************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppPagesAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/spinner.component */
    "./src/app/pages/shared/spinner.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/app.module.ts":
  /*!*************************************!*\
    !*** ./src/app/pages/app.module.ts ***!
    \*************************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppPagesAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/pages/app.routing.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/pages/app.component.ts");
    /* harmony import */


    var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts/full/full.component */
    "./src/app/pages/layouts/full/full.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layouts/full/header/header.component */
    "./src/app/pages/layouts/full/header/header.component.ts");
    /* harmony import */


    var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layouts/full/sidebar/sidebar.component */
    "./src/app/pages/layouts/full/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _demo_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./demo-material-module */
    "./src/app/pages/demo-material-module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");
    /* harmony import */


    var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/spinner.component */
    "./src/app/pages/shared/spinner.component.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-navigations */
    "./node_modules/@syncfusion/ej2-angular-navigations/__ivy_ngcc__/@syncfusion/ej2-angular-navigations.js");
    /* harmony import */


    var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./layouts/default/default.component */
    "./src/app/pages/layouts/default/default.component.ts");
    /* harmony import */


    var _layouts_default_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./layouts/default/toolbar/toolbar.component */
    "./src/app/pages/layouts/default/toolbar/toolbar.component.ts");
    /* harmony import */


    var _layouts_default_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./layouts/default/menubar/menubar.component */
    "./src/app/pages/layouts/default/menubar/menubar.component.ts");
    /* harmony import */


    var _layouts_default_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./layouts/default/footer/footer.component */
    "./src/app/pages/layouts/default/footer/footer.component.ts");
    /* harmony import */


    var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../_helpers/auth.interceptor */
    "./src/app/_helpers/auth.interceptor.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_meet_room_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../_services/meet-room.service */
    "./src/app/_services/meet-room.service.ts");
    /* harmony import */


    var _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../_services/meet-room-patient.service */
    "./src/app/_services/meet-room-patient.service.ts");
    /* harmony import */


    var _video_room_video_room_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./video-room/video-room.component */
    "./src/app/pages/video-room/video-room.component.ts");
    /* harmony import */


    var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./layouts/admin/admin.component */
    "./src/app/pages/layouts/admin/admin.component.ts");
    /* harmony import */


    var _meet_patient_meet_patient_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./meet-patient/meet-patient.component */
    "./src/app/pages/meet-patient/meet-patient.component.ts");
    /* harmony import */


    var _meet_patient_meet_call_meet_call_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./meet-patient/meet-call/meet-call.component */
    "./src/app/pages/meet-patient/meet-call/meet-call.component.ts");
    /* harmony import */


    var _meet_patient_pay_patient_pay_patient_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./meet-patient/pay-patient/pay-patient.component */
    "./src/app/pages/meet-patient/pay-patient/pay-patient.component.ts");
    /* harmony import */


    var _meet_patient_wating_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./meet-patient/wating-room/waiting-room.component */
    "./src/app/pages/meet-patient/wating-room/waiting-room.component.ts");
    /* harmony import */


    var _meet_patient_feeback_feeback_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./meet-patient/feeback/feeback.component */
    "./src/app/pages/meet-patient/feeback/feeback.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["authInterceptorProviders"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"]
      }, _services_meet_room_service__WEBPACK_IMPORTED_MODULE_23__["MeetRoomService"], _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_24__["MeetRoomPatientService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__["CKEditorModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_16__["SidebarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"], {
        useHash: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_7__["FullComponent"], _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_9__["AppHeaderComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"], _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["AppSidebarComponent"], _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_17__["DefaultComponent"], _layouts_default_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["ToolbarComponent"], _layouts_default_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_19__["MenubarComponent"], _layouts_default_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"], //   MeetRoomComponent,
        _video_room_video_room_component__WEBPACK_IMPORTED_MODULE_25__["VideoRoomComponent"], _meet_patient_meet_call_meet_call_component__WEBPACK_IMPORTED_MODULE_28__["MeetCallComponent"], _meet_patient_pay_patient_pay_patient_component__WEBPACK_IMPORTED_MODULE_29__["PayPatientComponent"], _meet_patient_wating_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_30__["InviteBySms2"], _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_26__["AdminComponent"], _meet_patient_meet_patient_component__WEBPACK_IMPORTED_MODULE_27__["MeetPatientComponent"], _meet_patient_wating_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_30__["WaitingRoomComponent"], _meet_patient_feeback_feeback_component__WEBPACK_IMPORTED_MODULE_31__["FeebackComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__["CKEditorModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_16__["SidebarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_7__["FullComponent"], _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_9__["AppHeaderComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"], _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["AppSidebarComponent"], _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_17__["DefaultComponent"], _layouts_default_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["ToolbarComponent"], _layouts_default_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_19__["MenubarComponent"], _layouts_default_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"], //   MeetRoomComponent,
          _video_room_video_room_component__WEBPACK_IMPORTED_MODULE_25__["VideoRoomComponent"], _meet_patient_meet_call_meet_call_component__WEBPACK_IMPORTED_MODULE_28__["MeetCallComponent"], _meet_patient_pay_patient_pay_patient_component__WEBPACK_IMPORTED_MODULE_29__["PayPatientComponent"], _meet_patient_wating_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_30__["InviteBySms2"], _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_26__["AdminComponent"], _meet_patient_meet_patient_component__WEBPACK_IMPORTED_MODULE_27__["MeetPatientComponent"], _meet_patient_wating_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_30__["WaitingRoomComponent"], _meet_patient_feeback_feeback_component__WEBPACK_IMPORTED_MODULE_31__["FeebackComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__["CKEditorModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_16__["SidebarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"], {
            useHash: true
          })],
          providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["authInterceptorProviders"], {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"]
          }, _services_meet_room_service__WEBPACK_IMPORTED_MODULE_23__["MeetRoomService"], _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_24__["MeetRoomPatientService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/app.routing.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/app.routing.ts ***!
    \**************************************/

  /*! exports provided: AppRoutes */

  /***/
  function srcAppPagesAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
      return AppRoutes;
    });
    /* harmony import */


    var _meet_patient_meet_patient_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./meet-patient/meet-patient.component */
    "./src/app/pages/meet-patient/meet-patient.component.ts"); //import {MeetRoomComponent} from "./meet-room/meet-room.component";
    //import { VideoRoomComponent } from "./video-room/video-room.component";
    //import { MeetCallComponent } from './pay-patient/meet-call/meet-call.component';
    //import { PayPatientComponent } from './pay-patient/pay-patient.component';


    var AppRoutes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | front-front-module */
        "front-front-module").then(__webpack_require__.bind(null,
        /*! ./front/front.module */
        "./src/app/pages/front/front.module.ts")).then(function (m) {
          return m.FrontModule;
        });
      }
    }, {
      path: 'super',
      redirectTo: 'auth',
      pathMatch: 'full'
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | auth-auth-module */
        [__webpack_require__.e("common"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/pages/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | dashboard-dashboard-module */
        [__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
        /*! ./dashboard/dashboard.module */
        "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      }
    }, {
      path: ':roomName',
      //component: MeetRoomComponent
      component: _meet_patient_meet_patient_component__WEBPACK_IMPORTED_MODULE_0__["MeetPatientComponent"]
    }
    /*,
    {
    path: 'payAttetion/:roomName',
    component: PayPatientComponent
    },
    {
    path: 'attetion/:roomName',
    component: MeetCallComponent
    },*/
    ];
    /***/
  },

  /***/
  "./src/app/pages/demo-material-module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/demo-material-module.ts ***!
    \***********************************************/

  /*! exports provided: DemoMaterialModule */

  /***/
  function srcAppPagesDemoMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function () {
      return DemoMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/accordion */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/accordion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/observers.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/portal.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * NgModule that includes all Material modules that are required to serve the demo-app.
     */


    var DemoMaterialModule = function DemoMaterialModule() {
      _classCallCheck(this, DemoMaterialModule);
    };

    DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DemoMaterialModule
    });
    DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DemoMaterialModule_Factory(t) {
        return new (t || DemoMaterialModule)();
      },
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, {
        exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/layouts/admin/admin.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/layouts/admin/admin.component.ts ***!
    \********************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppPagesLayoutsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)();
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 2,
      vars: 0,
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/layouts/default/default.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/layouts/default/default.component.ts ***!
    \************************************************************/

  /*! exports provided: DefaultComponent */

  /***/
  function srcAppPagesLayoutsDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-items */
    "./src/app/pages/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/pages/layouts/default/toolbar/toolbar.component.ts");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./menubar/menubar.component */
    "./src/app/pages/layouts/default/menubar/menubar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/spinner.component */
    "./src/app/pages/shared/spinner.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/pages/layouts/default/footer/footer.component.ts");

    var DefaultComponent =
    /*#__PURE__*/
    function () {
      function DefaultComponent(changeDetectorRef, media, menuItems) {
        _classCallCheck(this, DefaultComponent);

        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 2000px)');

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(DefaultComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return DefaultComponent;
    }();

    DefaultComponent.ɵfac = function DefaultComponent_Factory(t) {
      return new (t || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]));
    };

    DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DefaultComponent,
      selectors: [["app-default"]],
      decls: 24,
      vars: 5,
      consts: [[1, "main-container"], ["color", "primary", 1, "topbar", "telative"], [1, "navbar-header"], ["href", "index.html", 1, "navbar-brand"], ["src", "assets/images/logo.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo.png", "alt", "homepage", 1, "light-logo"], ["fxShow", "false", "fxShow.gt-xs", "", 1, "text-dark"], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["mat-icon-button", "", "value", "sidebarclosed", 3, "click"], ["fxFlex", ""], [1, "example-sidenav-container"], ["id", "snav1", "fixedTopGap", "0", 1, "dark-sidebar", "pl-xs", 3, "mode", "opened", "disableClose"], ["snav1", ""], [1, "page-wrapper"], [1, "page-content"]],
      template: function DefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " MEVICO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultComponent_Template_button_click_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            return _r8.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-menubar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav-content", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_7__["MenubarComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
      styles: ["@media (min-width: 1105px){\r\n  button.mat-icon-button[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXlvdXRzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDExMDVweCl7XHJcbiAgYnV0dG9uLm1hdC1pY29uLWJ1dHRvbiwgbWF0LXNpZGVuYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-default',
          templateUrl: './default.component.html',
          styleUrls: ['./default.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]
        }, {
          type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/layouts/default/footer/footer.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/layouts/default/footer/footer.component.ts ***!
    \******************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppPagesLayoutsDefaultFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 118,
      vars: 0,
      consts: [[1, "footer"], [1, "footer-wrap", "pb-4"], [1, "footer-content"], [1, "row", "text-white", "p-3"], [1, "col-lg-2", "ft-right-border"], [1, "col-lg-2", "col-md-3", "col-sm-6", "ft-right-border"], [1, "list-unstyled"], [1, "pt-2"], [1, "font-weight-bold"], [1, "pb-2"], [1, "list-unstyled", "pl-2"], ["href", "/consulting", 1, "text-white-50", "d-block", "border-animation"], [1, "col-lg-2"], [1, "footer-contact"], [1, "company-address", "text-center", "pt-2", "pb-2"], [1, "text-white"], [1, "social-links", "flex-row", "text-center"], [1, "d-flex", "col-lg-4", "col-md-6", "col-sm-8", "m-auto", "justify-content-between"], ["href", "https://www.facebook.com", "target", "_blank"], ["src", "https://img.icons8.com/color/48/000000/facebook-new.png", "alt", "facebook"], ["href", "https://www.instagram.com", "target", "_blank"], ["src", "https://img.icons8.com/color/48/000000/instagram-new.png", "alt", "instagram"], ["href", "https://www.twitter.com", "target", "_blank"], ["src", "https://img.icons8.com/color/48/000000/twitter-squared.png", "alt", "twitter"], ["href", "https://www.youtube.com", "target", "_blank"], ["src", "https://img.icons8.com/color/48/000000/youtube.png", "alt", "youtube"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " > Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " > Hospital Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " - Consulting Services ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " > Hospital Business Analytics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " - Solutions and Services ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " > Market Strategy for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " - Healthcare Companies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " > Case Studies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " > Hospital Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " > Market Strategy for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " - Healthcare Companies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " > Discussion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " > Our Consultants ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " > Publications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " > Academia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " > About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " > Company Overview ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " > Getting to know MEVICO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " > Message from our CEO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " > Privacy Policy/Terms & Conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " > Information Security Policy / ISMS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Medical Video Consultancy Sri Lanka Co.Ltd. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " 111-123-45678, Colombo, Western City In Sri Lanka. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: relative;\r\n  bottom: 0;\r\n  background: #262626;\r\n}\r\n.footer-wrap[_ngcontent-%COMP%] {\r\n  margin-left: 15px;\r\n  margin-right: 15px;\r\n}\r\n.ft-right-border[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  border-right: 1px solid lightcoral;\r\n}\r\na.text-white-50[_ngcontent-%COMP%]:hover {\r\n  color: rgba(255,255,255, 1) !important;\r\n}\r\na.border-animation[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\na.border-animation[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  width: 0;\r\n  height: 2px;\r\n  bottom: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  background-color: #ffffff;\r\n  visibility: hidden;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\na.border-animation[_ngcontent-%COMP%]:hover:before {\r\n  visibility: visible;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0cy9kZWZhdWx0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7RUFDVCxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGF5b3V0cy9kZWZhdWx0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogIzI2MjYyNjtcclxufVxyXG4uZm9vdGVyLXdyYXAge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uZnQtcmlnaHQtYm9yZGVyIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRjb3JhbDtcclxufVxyXG5hLnRleHQtd2hpdGUtNTA6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAxKSAhaW1wb3J0YW50O1xyXG59XHJcbmEuYm9yZGVyLWFuaW1hdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmEuYm9yZGVyLWFuaW1hdGlvbjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5hLmJvcmRlci1hbmltYXRpb246aG92ZXI6YmVmb3JlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/layouts/default/menubar/menubar.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/layouts/default/menubar/menubar.component.ts ***!
    \********************************************************************/

  /*! exports provided: MenubarComponent */

  /***/
  function srcAppPagesLayoutsDefaultMenubarMenubarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenubarComponent", function () {
      return MenubarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/menu-items/menu-items */
    "./src/app/pages/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/accordion/accordion.directive */
    "./src/app/pages/shared/accordion/accordion.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/accordion/accordionlink.directive */
    "./src/app/pages/shared/accordion/accordionlink.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/accordion/accordionanchor.directive */
    "./src/app/pages/shared/accordion/accordionanchor.directive.ts");

    var _c0 = function _c0(a1) {
      return ["/", a1];
    };

    function MenubarComponent_mat_list_item_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuitem_r917 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, menuitem_r917.state));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", menuitem_r917.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r917.name);
      }
    }

    function MenubarComponent_mat_list_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenubarComponent_mat_list_item_1_a_1_Template, 4, 5, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuitem_r917 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", menuitem_r917.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r917.type === "link");
      }
    }

    var MenubarComponent =
    /*#__PURE__*/
    function () {
      function MenubarComponent(changeDetectorRef, media, menuItems) {
        _classCallCheck(this, MenubarComponent);

        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(MenubarComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }]);

      return MenubarComponent;
    }();

    MenubarComponent.ɵfac = function MenubarComponent_Factory(t) {
      return new (t || MenubarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]));
    };

    MenubarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenubarComponent,
      selectors: [["app-menubar"]],
      decls: 2,
      vars: 1,
      consts: [["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "w-100 p-2", "appAccordionToggle", "", "routerLinkActive", "active-link", 3, "routerLink", 4, "ngIf"], ["appAccordionToggle", "", "routerLinkActive", "active-link", 1, "w-100", "p-2", 3, "routerLink"], [1, "super-icon-size", 3, "src"], [1, "ml-5"]],
      template: function MenubarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenubarComponent_mat_list_item_1_Template, 2, 2, "mat-list-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem("front"));
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_6__["AccordionLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__["AccordionAnchorDirective"]],
      styles: [".active-link[_ngcontent-%COMP%]{\r\n  background: lightgray;\r\n  color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0cy9kZWZhdWx0L21lbnViYXIvbWVudWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dHMvZGVmYXVsdC9tZW51YmFyL21lbnViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtbGlua3tcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenubarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menubar',
          templateUrl: './menubar.component.html',
          styleUrls: ['./menubar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]
        }, {
          type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/layouts/default/toolbar/toolbar.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/layouts/default/toolbar/toolbar.component.ts ***!
    \********************************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppPagesLayoutsDefaultToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var ToolbarComponent =
    /*#__PURE__*/
    function () {
      function ToolbarComponent() {
        _classCallCheck(this, ToolbarComponent);
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)();
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["app-toolbar"]],
      decls: 23,
      vars: 1,
      consts: [[1, "toolbar"], ["routerLink", "/home", "routerLinkActive", "active-link", 1, "p-2"], ["routerLink", "/patient", "routerLinkActive", "active-link", 1, "p-2"], ["routerLink", "/provider", "routerLinkActive", "active-link", 1, "p-2"], ["routerLink", "/clinic", "routerLinkActive", "active-link", 1, "p-2"], ["routerLink", "/price", "routerLinkActive", "active-link", 1, "p-2"], ["routerLink", "/auth/sign-in", "mat-stroked-button", "", 1, "m-r-20", "hidden-sm-up", "bg-white", "text-black-50"], ["mat-stroked-button", "", 1, "m-r-20", "hidden-sm-up", "bg-white", "text-black-50", "w-p-180", 3, "matMenuTriggerFor"], [1, "w-p-180", "text-center", "mt-2", "mb-2"], ["afterMenu", "matMenu"], ["mat-raised-button", "", "routerLink", "/auth/sign-up/provider", 1, "bg-primary", "w-p-150", "mt-3", "p-3", "text-dark"], ["src", "https://img.icons8.com/doodle/48/000000/doctor-male.png", "alt", "doctor", 1, "w-25", "ml-n3"], ["mat-raised-button", "", "routerLink", "/auth/sign-in-patient", 1, "bg-info", "w-p-150", "mt-3", "p-3", "text-white-50"], ["src", "https://img.icons8.com/officel/16/000000/hospital-bed.png", "alt", "patient", 1, "ml-n3"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "For Patients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "For Providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "For Clinics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign up for free");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-menu", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " I am a Provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " I am a Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r915 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r915);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"]],
      styles: [".toolbar[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%] {\r\n  color: #000000;\r\n}\r\n.toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #bcccde;\r\n}\r\n@media (max-width: 1105px) {\r\n  .toolbar[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0cy9kZWZhdWx0L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dHMvZGVmYXVsdC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIGEuYWN0aXZlLWxpbmsge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi50b29sYmFyIGEge1xyXG4gIGNvbG9yOiAjYmNjY2RlO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTA1cHgpIHtcclxuICAudG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toolbar',
          templateUrl: './toolbar.component.html',
          styleUrls: ['./toolbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/layouts/full/full.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/layouts/full/full.component.ts ***!
    \******************************************************/

  /*! exports provided: FullComponent */

  /***/
  function srcAppPagesLayoutsFullFullComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullComponent", function () {
      return FullComponent;
    });
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-items */
    "./src/app/pages/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/pages/layouts/full/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/pages/layouts/full/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/spinner.component */
    "./src/app/pages/shared/spinner.component.ts");

    function FullComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Debe seleccionar un plan de subcripcion ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FullComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Le quedan ", ctx_r130.daysEndSubcriptions, " en su plan ");
      }
    }

    function FullComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Le quedan ", ctx_r131.daysEndFreeUse, " de libre uso ");
      }
    }
    /** @title Responsive sidenav */


    var FullComponent =
    /*#__PURE__*/
    function () {
      function FullComponent(authService, changeDetectorRef, media, menuItems) {
        _classCallCheck(this, FullComponent);

        this.authService = authService;
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.currentUser = this.authService.getCurrentUser;
        console.log("this.currentUser");
        console.log(this.currentUser);

        if (this.currentUser.endDate != null) {
          var now = new Date();
          var newDate = new Date(this.currentUser.endDate);
          var seconds = (newDate.getTime() - now.getTime()) / 1000;
          var minutes = seconds / 60;
          var hours = minutes / 60;
          var days = hours / 24;
          this.daysEndSubcriptions = Math.round(days);
        }

        if (this.currentUser.freeUseTime != null) {
          var _seconds = parseInt(this.currentUser.freeUseTime) / 1000;

          var _minutes = _seconds / 60;

          var _hours = _minutes / 60;

          var _days = _hours / 24;

          this.daysEndFreeUse = Math.round(_days);
        }
      }

      _createClass(FullComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return FullComponent;
    }();

    FullComponent.ɵfac = function FullComponent_Factory(t) {
      return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"]));
    };

    FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FullComponent,
      selectors: [["app-full-layout"]],
      decls: 18,
      vars: 8,
      consts: [[1, "main-container"], [1, "example-sidenav-container"], ["id", "snav2", "fixedTopGap", "0", 1, "dark-sidebar", "pl-xs", 3, "mode", "opened", "disableClose"], ["snav2", ""], [1, "page-wrapper"], [1, "topbar", "telative", "main-background", "p-r-5"], ["mat-icon-button", "", "value", "sidebarclosed", 1, "text-white", "m-r-3", 3, "click"], ["class", "text-white opacity-50", 4, "ngIf"], ["fxFlex", ""], [1, "page-content"], [1, "text-white", "opacity-50"]],
      template: function FullComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-sidenav-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-toolbar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullComponent_Template_button_click_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r132);

            var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

            return _r128.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FullComponent_div_10_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FullComponent_div_11_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FullComponent_div_12_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.currentUser.payToDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.daysEndSubcriptions != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.daysEndFreeUse != null);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["AppSidebarComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["AppHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"]],
      styles: [".tool-color[_ngcontent-%COMP%]{\r\n    background:#005662;\r\n    padding-right:5%;\r\n}\r\n.toggle-btn[_ngcontent-%COMP%]{\r\n    color: white;\r\n    margin-right: 3%;\r\n}\r\n.tool-text[_ngcontent-%COMP%]{\r\n    color: white;\r\n    opacity: 0.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZDojMDA1NjYyO1xyXG4gICAgcGFkZGluZy1yaWdodDo1JTtcclxufVxyXG4udG9nZ2xlLWJ0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbn1cclxuLnRvb2wtdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-full-layout',
          templateUrl: 'full.component.html',
          styleUrls: ['./full.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]
        }, {
          type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/layouts/full/header/header.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/layouts/full/header/header.component.ts ***!
    \***************************************************************/

  /*! exports provided: AppHeaderComponent */

  /***/
  function srcAppPagesLayoutsFullHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function () {
      return AppHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_meet_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../_services/meet-room.service */
    "./src/app/_services/meet-room.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppHeaderComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function AppHeaderComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r880 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r880.currentUser.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var AppHeaderComponent =
    /*#__PURE__*/
    function () {
      //publicUrl = environment.baseUrl + "public/image/";
      function AppHeaderComponent(authService, meetRoomService, route) {
        _classCallCheck(this, AppHeaderComponent);

        this.authService = authService;
        this.meetRoomService = meetRoomService;
        this.route = route;
        this.currentUser = this.authService.getCurrentUser;
      }

      _createClass(AppHeaderComponent, [{
        key: "viewProfile",
        value: function viewProfile() {
          var userProfile = "dashboard/profile";
          this.route.navigateByUrl(userProfile);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.meetRoomService.disconnectMe();
          this.route.navigateByUrl('');
        }
      }]);

      return AppHeaderComponent;
    }();

    AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) {
      return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_room_service__WEBPACK_IMPORTED_MODULE_3__["MeetRoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppHeaderComponent,
      selectors: [["app-header"]],
      decls: 15,
      vars: 3,
      consts: [["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"], [4, "ngIf"], ["src", "./../../../../../assets/images/profile-dot.svg", "alt", "dot", 1, "profile-pic"], [1, "mymegamenu"], ["profile", "matMenu"], ["mat-menu-item", "", 3, "click"], ["src", "./../../../../../assets/images/P10.svg", "alt", "user", 1, "profile-pic"], ["alt", "user", 1, "profile-pic", 3, "src"]],
      template: function AppHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppHeaderComponent_ng_container_1_Template, 2, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppHeaderComponent_ng_container_2_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_7_listener($event) {
            return ctx.viewProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "account_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_11_listener($event) {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sign Out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r881 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r881);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.image);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: []
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_meet_room_service__WEBPACK_IMPORTED_MODULE_3__["MeetRoomService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/layouts/full/sidebar/sidebar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/layouts/full/sidebar/sidebar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AppSidebarComponent */

  /***/
  function srcAppPagesLayoutsFullSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function () {
      return AppSidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/menu-items/menu-items */
    "./src/app/pages/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../_services/provider.service */
    "./src/app/_services/provider.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _services_meet_room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../_services/meet-room.service */
    "./src/app/_services/meet-room.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    function AppSidebarComponent_div_5_a_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var menuitem_r886 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r886.icon);
      }
    }

    function AppSidebarComponent_div_5_a_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var menuitem_r886 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", menuitem_r886.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AppSidebarComponent_div_5_a_1_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var badge_r893 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r893.type, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r893.value);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function AppSidebarComponent_div_5_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_div_5_a_1_ng_container_1_Template, 3, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppSidebarComponent_div_5_a_1_ng_container_2_Template, 2, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppSidebarComponent_div_5_a_1_span_7_Template, 2, 4, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuitem_r886 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, menuitem_r886.state));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r886.icon === "av_timer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r886.icon !== "av_timer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r886.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r886.badge);
      }
    }

    function AppSidebarComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_div_5_a_1_Template, 8, 7, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuitem_r886 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", menuitem_r886.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r886.type === "link");
      }
    }

    function AppSidebarComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r896 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Estados");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "visible");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-slide-toggle", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppSidebarComponent_ng_container_7_Template_mat_slide_toggle_change_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r896);

          var ctx_r895 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r895.onVisibleChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "activar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-slide-toggle", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppSidebarComponent_ng_container_7_Template_mat_slide_toggle_change_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r896);

          var ctx_r897 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r897.onActiveChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "activar alerta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-slide-toggle", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppSidebarComponent_ng_container_7_Template_mat_slide_toggle_change_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r896);

          var ctx_r898 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r898.onAlarmChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function AppSidebarComponent_ng_container_9_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r902 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppSidebarComponent_ng_container_9_button_5_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r902);

          var ctx_r901 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r901.nextAttetion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0SIGUIENTE PACIENTE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppSidebarComponent_ng_container_9_ng_container_7_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var patient_r904 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", patient_r904.fullName, "-", patient_r904.dni, " ");
      }
    }

    function AppSidebarComponent_ng_container_9_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_ng_container_9_ng_container_7_ng_container_1_Template, 3, 2, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r900 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r900.waitingPatientsData);
      }
    }

    function AppSidebarComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pacientes en espera");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppSidebarComponent_ng_container_9_button_5_Template, 4, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppSidebarComponent_ng_container_9_ng_container_7_Template, 2, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r884 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r884.waitingPatientsData && ctx_r884.waitingPatientsData.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r884.waitingPatientsData && ctx_r884.waitingPatientsData.length);
      }
    }

    function AppSidebarComponent_div_11_a_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var menuitem_r905 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r905.icon);
      }
    }

    function AppSidebarComponent_div_11_a_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var menuitem_r905 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", menuitem_r905.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AppSidebarComponent_div_11_a_1_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var badge_r912 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r912.type, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r912.value);
      }
    }

    function AppSidebarComponent_div_11_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_div_11_a_1_ng_container_1_Template, 3, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppSidebarComponent_div_11_a_1_ng_container_2_Template, 2, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppSidebarComponent_div_11_a_1_span_7_Template, 2, 4, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuitem_r905 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, menuitem_r905.state));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r905.icon === "av_timer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r905.icon !== "av_timer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r905.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r905.badge);
      }
    }

    function AppSidebarComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_div_11_a_1_Template, 8, 7, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuitem_r905 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", menuitem_r905.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r905.type === "link");
      }
    }

    var AppSidebarComponent =
    /*#__PURE__*/
    function () {
      function AppSidebarComponent(menuItems, authService, providerService, domSanitizer, meetRoomService, _ngZone, router) {
        _classCallCheck(this, AppSidebarComponent);

        this.menuItems = menuItems;
        this.authService = authService;
        this.providerService = providerService;
        this.domSanitizer = domSanitizer;
        this.meetRoomService = meetRoomService;
        this._ngZone = _ngZone;
        this.router = router;
        this.btnActiveShow = true;
        this.btnDesactiveShow = false;
        this.audioActivateShow = true;
        this.audioActivate = false;
        this.callOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentUserRole = '';
        this.provider_connect = 'OK';
        this.provider_connect_active = 'active';
        this.provider_connect_inactive = 'inactive';
        this.firstMenuItems = [];
        this.secondMenuItems = [];
        this.patientListMap = new Map();
        this.listEvent = null;
        this.providerRoleOptionsShow = true;
        this.patientOnattetion = null;
      }

      _createClass(AppSidebarComponent, [{
        key: "onBrowserClose",
        value: function onBrowserClose() {
          this.ngOnDestroy();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.providerRoleOptionsShow) {
            this.providerService.close();
          } //this.listEvent.unsubscribe(); 

        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.initSidebar();
          var tmpArr = [];
          this.firstMenuItems = this.menuItems.getMenuitem(this.currentUserRole);
          /*console.log("this.firstMenuItems");
          console.log(this.firstMenuItems);*/

          this.firstMenuItems.forEach(function (element, index) {
            /*console.log(element.state);
            console.log(element.state === 'subscription-plan');
            console.log(element.state === 'feedbacks');*/
            if (element.state === 'subscription-plan' || element.state === 'feedbacks') {
              _this32.secondMenuItems.push(element);

              tmpArr.push(index);
            }
          });
          /*console.log("this.secondMenuItems");
          console.log(this.secondMenuItems);*/

          tmpArr.sort(function (a, b) {
            return b - a;
          });
          tmpArr.forEach(function (item) {
            _this32.firstMenuItems.splice(item, 1);
          });
        }
      }, {
        key: "initSidebar",
        value: function initSidebar() {
          if (this.authService.getCurrentUser) {
            this.currentUser = this.authService.getCurrentUser;
            this.currentUserRole = this.authService.getCurrentUser.role;

            if ('SuperAdmin' == this.currentUserRole || 'Admin' == this.currentUserRole) {
              this.providerRoleOptionsShow = false;
            }
          }

          console.log("this.currentUser.payToDay");
          console.log(this.currentUser.payToDay);

          if (this.providerRoleOptionsShow && this.currentUser.payToDay) {
            this.confirmConnect();
            this.waitingPatientsData = [];
            this.listWaitingPatient();
          }
        }
      }, {
        key: "alarmActive",
        value: function alarmActive() {
          this.audioActivate = true;
          this.audioActivateShow = false;
        }
      }, {
        key: "alarmInactive",
        value: function alarmInactive() {
          this.audioActivate = false;
          this.audioActivateShow = true;
        }
      }, {
        key: "alarm",
        value: function alarm() {
          if (this.audioActivate) {
            this.audio = new Audio();
            this.audio.src = "../../../../../assets/sounds/patientAlarm.mp3";
            this.audio.load();
            this.audio.play();
          }
        }
      }, {
        key: "listWaitingPatient",
        value: function listWaitingPatient() {
          var _this33 = this;

          this.listEvent = this.providerService.getWaitingPatientsData(this.currentUser.room, function () {
            console.log("reconnect getWaitingPatientsData");

            _this33._ngZone.run(function () {
              _this33.listWaitingPatient();
            });
          });
          this.listEvent.subscribe(function (result) {
            _this33._ngZone.run(function () {
              var data = JSON.parse(result);

              if (data.connection) {
                //if (!this.patientListMap.get(data._id)) {
                _this33.patientListMap.set(data._id, data);

                _this33.updateList();

                if (_this33.waitingPatientsData.length < 2 && _this33.waitingPatientsData.length > 0) {
                  _this33.alarm();
                } //}

              } else {
                if (_this33.patientListMap.get(data._id)) {
                  _this33.patientListMap["delete"](data._id);

                  _this33.updateList();
                }
              }
            });
          });
        }
      }, {
        key: "updateList",
        value: function updateList() {
          this.waitingPatientsData = Array.from(this.patientListMap.values());
        }
      }, {
        key: "confirmConnect",
        value: function confirmConnect() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    //await timer(2000).toPromise();  
                    this.meetRoomService.confirmConnect(this.currentUser);

                    if (!(this.provider_connect_inactive == localStorage.getItem('provider_connect'))) {
                      _context7.next = 4;
                      break;
                    }

                    localStorage.setItem('provider_connect', this.provider_connect);
                    return _context7.abrupt("return");

                  case 4:
                    if (this.provider_connect_active == localStorage.getItem('provider_connect')) {
                      this.desactive();
                    }

                    this.active();

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "active",
        value: function active() {
          localStorage.setItem('provider_connect', this.provider_connect_active);
          this.btnDesactiveShow = true;
          this.btnActiveShow = false;
          this.meetRoomService.activeProvider(this.currentUser);
        }
      }, {
        key: "desactive",
        value: function desactive() {
          localStorage.setItem('provider_connect', this.provider_connect_inactive);
          this.btnDesactiveShow = false;
          this.btnActiveShow = true;
          this.meetRoomService.desactiveProvider(this.currentUser);
        }
      }, {
        key: "publicMe",
        value: function publicMe() {
          this.meetRoomService.publicMe(this.currentUser.id);
        }
      }, {
        key: "privateMe",
        value: function privateMe() {
          this.meetRoomService.privateMe(this.currentUser.id);
        }
      }, {
        key: "nextAttetion",
        value: function nextAttetion() {
          console.log("nextAttetion"); //console.log(this.waitingPatientsData)this.meetRoomService.init();

          if (this.waitingPatientsData && this.waitingPatientsData.length > 0) {
            var pat = this.waitingPatientsData[0];

            if (this.patientOnattetion != null) {
              if (pat.dni == this.patientOnattetion.dni) {
                var patListOne = this.waitingPatientsData.splice(0, 1);
                this.waitingPatientsData.push(patListOne[0]);
              }
            }

            this.patientOnattetion = this.waitingPatientsData[0]; //console.log(patient)

            localStorage.setItem('provider_data', JSON.stringify(this.currentUser));
            localStorage.setItem(this.patientOnattetion._id, JSON.stringify(this.patientOnattetion));
            this.router.navigateByUrl('/dashboard/pay-provider/' + this.patientOnattetion._id);
          }
        }
      }, {
        key: "trace",
        value: function trace() {
          var now = (window.performance.now() / 1000).toFixed(3); //console.log(now + ': ', arg);
        }
      }, {
        key: "onVisibleChange",
        value: function onVisibleChange($event) {
          console.log($event.checked);
          if ($event.checked) this.publicMe();else this.privateMe();
        }
      }, {
        key: "onActiveChange",
        value: function onActiveChange($event) {
          console.log($event.checked);
          if ($event.checked) this.active();else this.desactive();
        }
      }, {
        key: "onAlarmChange",
        value: function onAlarmChange($event) {
          console.log($event.checked);
          if ($event.checked) this.alarmActive();else this.alarmInactive();
        }
      }]);

      return AppSidebarComponent;
    }();

    AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) {
      return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_room_service__WEBPACK_IMPORTED_MODULE_5__["MeetRoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    AppSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppSidebarComponent,
      selectors: [["app-sidebar"]],
      hostBindings: function AppSidebarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function AppSidebarComponent_beforeunload_HostBindingHandler($event) {
            return ctx.onBrowserClose();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      outputs: {
        callOutput: "callOutput"
      },
      decls: 12,
      vars: 4,
      consts: [[1, "background", "pb-5"], ["href", "index.html"], ["src", "./../../../../../assets/images/sidebar-logo.svg", "alt", "homepage", 1, "light-logo", 2, "color", "white"], [3, "group", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "group"], ["class", "p-2 w-100  sidebar-list", 3, "routerLink", 4, "ngIf"], [1, "p-2", "w-100", "sidebar-list", 3, "routerLink"], [1, "ml-3", "font-bold"], [1, "item-color"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"], [1, "super-icon-size", 3, "src"], [1, "pl-4", "pt-3", "pb-4", "d-block"], [1, "h4-color"], [1, "row", "mb-2"], [1, "col-8", "h4-color"], [1, "col-4"], [3, "change"], ["mat-raised-button", "", "class", "mr-1 text-dark px-1 py-0 ", "style", "background-color: white;", 3, "click", 4, "ngIf"], [1, "patients-queue"], ["mat-raised-button", "", 1, "mr-1", "text-dark", "px-1", "py-0", 2, "background-color", "white", 3, "click"], ["src", "./../../../../../assets/images/P15.svg", "alt", "start-call", 2, "height", "32px"], [1, "signate-pad", 2, "color", "#047c7f"], [4, "ngFor", "ngForOf"]],
      template: function AppSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppSidebarComponent_div_5_Template, 2, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppSidebarComponent_ng_container_7_Template, 22, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppSidebarComponent_ng_container_9_Template, 8, 2, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppSidebarComponent_div_11_Template, 2, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.firstMenuItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUserRole !== "SuperAdmin" && ctx.currentUserRole !== "Admin" && ctx.currentUserRole !== "Patient" && ctx.currentUser.payToDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUserRole !== "SuperAdmin" && ctx.currentUserRole !== "Admin" && ctx.currentUserRole !== "Patient" && ctx.currentUser.payToDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.secondMenuItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: [".super-icon-size[_ngcontent-%COMP%] {\r\n  width: 22px;\r\n  height: 23px;\r\n}\r\n.active-link[_ngcontent-%COMP%]{\r\n  background: lightgray;\r\n  color: #000;\r\n}\r\n.jitsi-modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 99999!important; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw; \r\n  height: 100vh; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4); \r\n}\r\n.background[_ngcontent-%COMP%]{\r\n  \r\n    background-image: url('barra.png');\r\n    background-size: cover;\r\n\r\n\r\n}\r\n.sidebar-list[_ngcontent-%COMP%]{\r\n  background-color:white;\r\n  margin-bottom:10px;\r\n  border-radius: 8px 0 0 8px;\r\n  margin-bottom:17px;\r\n  margin-left:20px\r\n}\r\n.top-margin[_ngcontent-%COMP%]{\r\n  margin-top:6px;\r\n}\r\n.h4-color[_ngcontent-%COMP%]{\r\n  color:white;\r\n}\r\n.img-height[_ngcontent-%COMP%]{\r\n  height:38px;\r\n}\r\n.signate-pad[_ngcontent-%COMP%]{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n.patients-queue[_ngcontent-%COMP%]{\r\n  background-color: #046063;\r\n  margin-top:20px;\r\n  margin-right:30px;\r\n  border-radius: 5px;\r\n  color:white;\r\n  width:80%;\r\n}\r\n.patients-queue[_ngcontent-%COMP%]{\r\n  padding:5%;\r\n}\r\n.light-logo[_ngcontent-%COMP%]{\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  margin-left: 61px;\r\n}\r\n.item-color[_ngcontent-%COMP%]{\r\n  color:#005662;\r\n}\r\n.font-bold[_ngcontent-%COMP%]{\r\n  font-weight:bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0cy9mdWxsL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLHdCQUF3QixFQUFFLGVBQWU7RUFDekMsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZLEVBQUUsZUFBZTtFQUM3QixhQUFhLEVBQUUsZ0JBQWdCO0VBQy9CLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUMxRDtBQUNBOztJQUVJLGtDQUFpRTtJQUNqRSxzQkFBc0I7OztBQUcxQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGF5b3V0cy9mdWxsL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cGVyLWljb24tc2l6ZSB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcbi5hY3RpdmUtbGlua3tcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5qaXRzaS1tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiA5OTk5OSFpbXBvcnRhbnQ7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwdnc7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFycmEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcblxyXG59XHJcbi5zaWRlYmFyLWxpc3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbToxN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHhcclxufVxyXG4udG9wLW1hcmdpbntcclxuICBtYXJnaW4tdG9wOjZweDtcclxufVxyXG4uaDQtY29sb3J7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmltZy1oZWlnaHR7XHJcbiAgaGVpZ2h0OjM4cHg7XHJcbn1cclxuLnNpZ25hdGUtcGFke1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5wYXRpZW50cy1xdWV1ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2MDYzO1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICBtYXJnaW4tcmlnaHQ6MzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgd2lkdGg6ODAlO1xyXG59XHJcbi5wYXRpZW50cy1xdWV1ZXtcclxuICBwYWRkaW5nOjUlO1xyXG59XHJcbi5saWdodC1sb2dve1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDYxcHg7XHJcbn1cclxuLml0ZW0tY29sb3J7XHJcbiAgY29sb3I6IzAwNTY2MjtcclxufVxyXG4uZm9udC1ib2xke1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [{
          type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _services_meet_room_service__WEBPACK_IMPORTED_MODULE_5__["MeetRoomService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, {
        callOutput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBrowserClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/meet-patient/feeback/feeback.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/meet-patient/feeback/feeback.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FeebackComponent */

  /***/
  function srcAppPagesMeetPatientFeebackFeebackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeebackComponent", function () {
      return FeebackComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../_services/patient.service */
    "./src/app/_services/patient.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var FeebackComponent =
    /*#__PURE__*/
    function () {
      function FeebackComponent(formBuilder, patientService, _router) {
        _classCallCheck(this, FeebackComponent);

        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this._router = _router;
        this.disabledButton = false;
        this.feedBackForm = this.formBuilder.group({
          rankingProvider: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
          feedBackProvider: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
          rankingApp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
          feedBackApp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]]
        });
      }

      _createClass(FeebackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendFeedBack",
        value: function sendFeedBack() {
          var _this34 = this;

          if (this.feedBackForm.valid) {
            this.disabledButton = true;
            this.patientService.save(this.providerData._id, this.patientData._id, this.feedBackForm.value).subscribe(function (res) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Feedback register');

              _this34._router.navigateByUrl('/');
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.feedBackForm.controls;
        }
      }]);

      return FeebackComponent;
    }();

    FeebackComponent.ɵfac = function FeebackComponent_Factory(t) {
      return new (t || FeebackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    FeebackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeebackComponent,
      selectors: [["app-feeback"]],
      inputs: {
        patientData: "patientData",
        providerData: "providerData",
        roomName: "roomName"
      },
      decls: 64,
      vars: 2,
      consts: [[1, "row"], [1, "col-lg-12"], [1, "display-12", "pt-5", "d-flex", "justify-content-center"], [1, "font-weight-bold"], [3, "formGroup", "ngSubmit"], [1, "col-md-6", "w-100", "p-10", "border-radius-5", "scroll-div"], ["formControlName", "rankingProvider", "type", "radio", "name", "rankingProvider", "value", "1"], ["formControlName", "rankingProvider", "type", "radio", "name", "rankingProvider", "value", "2"], ["formControlName", "rankingProvider", "type", "radio", "name", "rankingProvider", "value", "3"], ["formControlName", "rankingProvider", "type", "radio", "name", "rankingProvider", "value", "4"], ["formControlName", "rankingProvider", "type", "radio", "name", "rankingProvider", "value", "5"], ["formControlName", "feedBackProvider", "name", "feedBackProvider", "type", "text", "placeholder", "Comment", "required", "", 1, "border-radius-5", "chat-input"], ["formControlName", "rankingApp", "type", "radio", "name", "rankingApp", "value", "1"], ["formControlName", "rankingApp", "type", "radio", "name", "rankingApp", "value", "2"], ["formControlName", "rankingApp", "type", "radio", "name", "rankingApp", "value", "3"], ["formControlName", "rankingApp", "type", "radio", "name", "rankingApp", "value", "4"], ["formControlName", "rankingApp", "type", "radio", "name", "rankingApp", "value", "5"], ["formControlName", "feedBackApp", "name", "feedBackApp", "type", "text", "placeholder", "Comment", "required", "", 1, "border-radius-5", "chat-input"], ["type", "submit", 1, "btn", "btn-primary", 2, "bottom", "0", 3, "disabled"]],
      template: function FeebackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FeebackComponent_Template_form_ngSubmit_7_listener($event) {
            return ctx.sendFeedBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dr: alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Raking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Muy mala atencion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mala atecion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Buena atecion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Muy buena atecion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Excelente atecion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Aplication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Raking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Muy mala experiencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Mala experiencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buena experiencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Muy buena experiencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Excelente experiencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.feedBackForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabledButton);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZXQtcGF0aWVudC9mZWViYWNrL2ZlZWJhY2suY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeebackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feeback',
          templateUrl: './feeback.component.html',
          styleUrls: ['./feeback.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        patientData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        providerData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roomName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/meet-patient/meet-call/meet-call.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/meet-patient/meet-call/meet-call.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MeetCallComponent */

  /***/
  function srcAppPagesMeetPatientMeetCallMeetCallComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetCallComponent", function () {
      return MeetCallComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../_services/patient.service */
    "./src/app/_services/patient.service.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../_services/meet-room-patient.service */
    "./src/app/_services/meet-room-patient.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var _c0 = ["fileUpload"];
    var _c1 = ["localVideo"];
    var _c2 = ["remoteVideo"];
    var _c3 = ["chatText"];

    function MeetCallComponent_div_40_p_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r933 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetCallComponent_div_40_p_3_Template_p_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r933);

          var i_r931 = ctx.index;

          var ctx_r932 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r932.changeClass(i_r931, "down");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r930 = ctx.$implicit;
        var i_r931 = ctx.index;

        var ctx_r929 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r929.classKey[i_r931] ? "list p-bckground" : "list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r931 + 1, ". ", item_r930, "");
      }
    }

    function MeetCallComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Uploaded By provider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MeetCallComponent_div_40_p_3_Template, 2, 4, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r924 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r924.downloadFileList);
      }
    }

    function MeetCallComponent_div_41_p_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r938 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetCallComponent_div_41_p_3_Template_p_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r938);

          var i_r936 = ctx.index;

          var ctx_r937 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r937.changeClass(i_r936, "up");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r935 = ctx.$implicit;
        var i_r936 = ctx.index;

        var ctx_r934 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r934.upClassKey[i_r936] ? "list p-bckground" : "list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r936 + 1, ". ", item_r935, "");
      }
    }

    function MeetCallComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Uploaded by you");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MeetCallComponent_div_41_p_3_Template, 2, 4, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r925 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r925.fileName);
      }
    }

    function MeetCallComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var name_r939 = ctx.$implicit;
        var i_r940 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r940 + 1, ".", name_r939, " ");
      }
    }

    function MeetCallComponent_ng_container_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var file_r941 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", file_r941.progress);
      }
    }

    var MeetCallComponent =
    /*#__PURE__*/
    function () {
      function MeetCallComponent(meetRoomPatientService, formBuilder, renderer, patientService) {
        _classCallCheck(this, MeetCallComponent);

        this.meetRoomPatientService = meetRoomPatientService;
        this.formBuilder = formBuilder;
        this.renderer = renderer;
        this.patientService = patientService;
        this.files = [];
        this.fileName = [];
        this.downloadFileList = [];
        this.classKey = [];
        this.upClassKey = [];
        this.roomChatForm = this.formBuilder.group({
          text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(MeetCallComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this35 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.meetRoomPatientService.confirmConnectPatient(this.patientData);
                    this.meetRoomPatientService.setLocalElement(this.localVideo);
                    this.meetRoomPatientService.setRemoteElement(this.remoteVideo);
                    this.meetRoomPatientService.startLocalMediaVideo();
                    this.meetRoomPatientService.preparateVideoCallFormProviderListener().subscribe(function (provider) {
                      _this35.providerData = provider;

                      _this35.meetRoomPatientService.connect().subscribe(function (peerId) {
                        _this35.patientData.peerId = peerId;

                        _this35.meetRoomPatientService.preparateVideoCallFormPatient(_this35.providerData, _this35.patientData);
                      });
                    });
                    this.meetRoomPatientService.receiveUploadFile().subscribe(function (uploadFileName) {
                      _this35.downloadFileList.push(uploadFileName);
                    });
                    this.meetRoomPatientService.recivetext().subscribe(function (text) {
                      var p = _this35.renderer.createElement('p');

                      var d = _this35.renderer.createText(text);

                      _this35.renderer.appendChild(p, d);

                      _this35.renderer.appendChild(_this35.chatText.nativeElement, p);
                    });

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "sendText",
        value: function sendText() {
          var text = this.f.text.value;
          this.meetRoomPatientService.sendtext(this.providerData.socketId, "Patient: " + text);
        }
      }, {
        key: "mute",
        value: function mute() {
          this.meetRoomPatientService.localMuteActive(true);
        }
      }, {
        key: "desmute",
        value: function desmute() {
          this.meetRoomPatientService.localMuteActive(false);
        }
      }, {
        key: "videomute",
        value: function videomute() {
          this.meetRoomPatientService.localVideoActive(true);
        }
      }, {
        key: "videodesmute",
        value: function videodesmute() {
          this.meetRoomPatientService.localVideoActive(false);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(file) {
          var _this36 = this;

          var dni = JSON.parse(localStorage.getItem('patient_dni'));
          var formData = new FormData();
          formData.append('file', file.data);
          formData.append('dni', dni);
          formData.append('key', 'patient');
          file.inProgress = true;
          var fileType = file.data.type.split('/')[0];
          this.patientService.uploadFile(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            /*console.log('event')
            console.log(event)*/
            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
                file.progress = Math.round(event.loaded * 100 / event.total);
                break;

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                return event;
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            file.inProgress = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("".concat(file.data.name, " upload failed."));
          })).subscribe(function (event) {
            console.log('event');
            console.log(event);

            if (typeof event === 'object') {
              setTimeout(function () {
                file.inProgress = false;
                file.progress = 0;
                _this36.files = [];
              }, 1000);

              _this36.fileName.push(event.body);

              _this36.meetRoomPatientService.sendUploadFile(event.body, 'patient', _this36.providerData._id);
            }
          });
        }
      }, {
        key: "uploadFiles",
        value: function uploadFiles() {
          var _this37 = this;

          this.fileUpload.nativeElement.value = '';
          this.files.forEach(function (file) {
            _this37.uploadFile(file);
          });
        }
      }, {
        key: "handleUpload",
        value: function handleUpload() {
          var _this38 = this;

          var fileUpload = this.fileUpload.nativeElement;

          fileUpload.onchange = function () {
            var _iterator = _createForOfIteratorHelper(fileUpload.files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var f = _step.value;
                var file = f;

                _this38.files.push({
                  data: file,
                  inProgress: false,
                  progress: 0
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this38.uploadFiles();
          };

          fileUpload.click();
        }
      }, {
        key: "changeClass",
        value: function changeClass(idx, key) {
          if (key === 'down') {
            this.initClass();
            this.classKey[idx] = true;
            this.downloadFile = this.downloadFileList[idx];
          } else {
            this.initClass();
            this.upClassKey[idx] = true;
            this.downloadFile = this.fileName[idx];
          }
        }
      }, {
        key: "initClass",
        value: function initClass() {
          var _this39 = this;

          this.classKey = [];
          this.upClassKey = [];
          this.downloadFileList.forEach(function (item) {
            _this39.classKey.push(false);
          });
          this.fileName.forEach(function (item) {
            _this39.upClassKey.push(false);
          });
        }
      }, {
        key: "handleDownload",
        value: function handleDownload() {
          var _this40 = this;

          if (this.downloadFile) {
            this.patientService.download('file-transfer/download/consult/' + this.downloadFile).subscribe(function (blob) {
              Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, _this40.downloadFile);
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.roomChatForm.controls;
        }
      }]);

      return MeetCallComponent;
    }();

    MeetCallComponent.ɵfac = function MeetCallComponent_Factory(t) {
      return new (t || MeetCallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_7__["MeetRoomPatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]));
    };

    MeetCallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MeetCallComponent,
      selectors: [["app-meet-call"]],
      viewQuery: function MeetCallComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.localVideo = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.remoteVideo = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatText = _t.first);
        }
      },
      inputs: {
        patientData: "patientData",
        providerData: "providerData",
        roomName: "roomName"
      },
      decls: 58,
      vars: 5,
      consts: [[1, "row"], [1, "col-lg-8", "d-flex", "flex-column"], [1, "p-3", "text-center"], ["type", "button", "mat-button", "", "color", "primary", 1, "mt-5", "p-2", "h-p-40", 3, "click"], ["type", "button", "mat-button", "", "color", "warn", 1, "mt-5", "p-2", "h-p-40", 3, "click"], [1, "video-container"], ["autoplay", "", "id", "remoteVideo", 1, "remote-video"], ["remoteVideo", ""], ["autoplay", "", "muted", "", "id", "localVideo", 1, "local-video"], ["localVideo", ""], [1, "col-lg-4"], [1, "display-6", "pt-5", "d-flex", "justify-content-center"], [1, "font-weight-bold"], [3, "formGroup", "ngSubmit"], ["id", "chatText", 1, "w-100", "p-10", "border-radius-5", "scroll-div"], ["chatText", ""], ["formControlName", "text", "type", "text", "placeholder", "message", 1, "border-radius-5", "chat-input"], ["textInput", ""], ["type", "submit", 1, "btn", "btn-primary", 2, "bottom", "0"], [1, "super"], [1, "main-div"], [1, "sub-div"], [4, "ngIf"], [1, "button-div"], [4, "ngFor", "ngForOf"], [1, "form-file-upload", "button-div"], [1, "upload-btn"], ["type", "file", "id", "fileUpload", "name", "fileUpload", "multiple", "multiple", "accept", "*", 2, "display", "none"], ["fileUpload", ""], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"]],
      template: function MeetCallComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r942 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Please watch video and Imagine how to do consultancy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetCallComponent_Template_button_click_8_listener($event) {
            return ctx.mute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Mute ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetCallComponent_Template_button_click_10_listener($event) {
            return ctx.desmute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " DesMute ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetCallComponent_Template_button_click_12_listener($event) {
            return ctx.videomute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Video Mute ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetCallComponent_Template_button_click_14_listener($event) {
            return ctx.videodesmute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Video Desmute ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "video", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "video", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-title", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Text Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MeetCallComponent_Template_form_ngSubmit_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r942);

            var _r923 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            ctx.sendText();
            return _r923.value = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "File share to consults!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MeetCallComponent_div_40_Template, 4, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MeetCallComponent_div_41_Template, 4, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetCallComponent_Template_button_click_43_listener($event) {
            return ctx.handleDownload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "file_download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MeetCallComponent_div_48_Template, 2, 2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, MeetCallComponent_ng_container_50_Template, 2, 1, "ng-container", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetCallComponent_Template_button_click_54_listener($event) {
            return ctx.handleUpload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "file_upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.roomChatForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.downloadFileList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"]],
      styles: [".remote-video[_ngcontent-%COMP%] {\r\n  border: 1px solid #cddfe7;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.local-video[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  border: 1px solid #cddfe7;\r\n  bottom: 60px;\r\n  right: 40px;\r\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\r\n  border-radius: 5px;\r\n  width: 200px;\r\n}\r\n\r\n.scroll-div[_ngcontent-%COMP%]{\r\n    border: 1px solid;\r\n    margin-bottom: 20px;\r\n    height: 150px;\r\n    overflow:auto;\r\n  }\r\n\r\n.chat-input[_ngcontent-%COMP%]{\r\n    width: 65%;\r\n    margin-right: 8%;\r\n  }\r\n\r\n.super[_ngcontent-%COMP%]{\r\n    padding-top: 25px;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n\r\n.main-div[_ngcontent-%COMP%]{\r\n    background-color:#808080b3;\r\n    padding:2%;\r\n}\r\n\r\n.sub-div[_ngcontent-%COMP%]{\r\n    background-color:#70d6cf99;\r\n    padding:2%;\r\n    margin-bottom:10px;\r\n}\r\n\r\n.button-div[_ngcontent-%COMP%]{\r\n    text-align:right;\r\n}\r\n\r\n.list[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.p-bckground[_ngcontent-%COMP%]{\r\n  background-color: #efbdbd;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVldC1wYXRpZW50L21lZXQtY2FsbC9tZWV0LWNhbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0VBQ2Y7O0FBQ0Y7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVldC1wYXRpZW50L21lZXQtY2FsbC9tZWV0LWNhbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucmVtb3RlLXZpZGVvIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2RkZmU3O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5sb2NhbC12aWRlbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGRmZTc7XHJcbiAgYm90dG9tOiA2MHB4O1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5zY3JvbGwtZGl2e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgfVxyXG4uY2hhdC1pbnB1dHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDglO1xyXG4gIH1cclxuICAuc3VwZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG59XHJcbi5tYWluLWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzgwODA4MGIzO1xyXG4gICAgcGFkZGluZzoyJTtcclxufVxyXG4uc3ViLWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzcwZDZjZjk5O1xyXG4gICAgcGFkZGluZzoyJTtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG4uYnV0dG9uLWRpdntcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuLmxpc3R7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnAtYmNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmJkYmQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetCallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-meet-call',
          templateUrl: './meet-call.component.html',
          styleUrls: ['./meet-call.component.css']
        }]
      }], function () {
        return [{
          type: _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_7__["MeetRoomPatientService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]
        }];
      }, {
        fileUpload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["fileUpload", {
            "static": false
          }]
        }],
        localVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['localVideo']
        }],
        remoteVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['remoteVideo']
        }],
        chatText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['chatText']
        }],
        patientData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        providerData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roomName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/meet-patient/meet-patient.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/meet-patient/meet-patient.component.ts ***!
    \**************************************************************/

  /*! exports provided: MeetPatientComponent */

  /***/
  function srcAppPagesMeetPatientMeetPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetPatientComponent", function () {
      return MeetPatientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/auth.patient.service */
    "./src/app/_services/auth.patient.service.ts");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_services/patient.service */
    "./src/app/_services/patient.service.ts");
    /* harmony import */


    var _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/meet-room-patient.service */
    "./src/app/_services/meet-room-patient.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
    /* harmony import */


    var _wating_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./wating-room/waiting-room.component */
    "./src/app/pages/meet-patient/wating-room/waiting-room.component.ts");
    /* harmony import */


    var _pay_patient_pay_patient_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pay-patient/pay-patient.component */
    "./src/app/pages/meet-patient/pay-patient/pay-patient.component.ts");
    /* harmony import */


    var _meet_call_meet_call_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./meet-call/meet-call.component */
    "./src/app/pages/meet-patient/meet-call/meet-call.component.ts");
    /* harmony import */


    var _feeback_feeback_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./feeback/feeback.component */
    "./src/app/pages/meet-patient/feeback/feeback.component.ts");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    function MeetPatientComponent_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Provider:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.providerData.role, " \xA0", ctx_r0.providerData.firstName, "");
      }
    }

    function MeetPatientComponent_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0Available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function MeetPatientComponent_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0No Available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function MeetPatientComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-waiting", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientData", ctx_r3.patientData)("providerData", ctx_r3.providerData)("roomName", ctx_r3.roomName);
      }
    }

    function MeetPatientComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pay-patient", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientData", ctx_r4.patientData)("providerData", ctx_r4.providerData)("roomName", ctx_r4.roomName);
      }
    }

    function MeetPatientComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-meet-call", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientData", ctx_r5.patientData)("providerData", ctx_r5.providerData)("roomName", ctx_r5.roomName);
      }
    }

    function MeetPatientComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-feeback", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientData", ctx_r6.patientData)("providerData", ctx_r6.providerData)("roomName", ctx_r6.roomName);
      }
    }

    var MeetPatientComponent =
    /*#__PURE__*/
    function () {
      function MeetPatientComponent(route, meetRoomPatientService, patientService, //private providerService: ProviderService,
      authPatientService, _ngZone, _router) {
        var _this41 = this;

        _classCallCheck(this, MeetPatientComponent);

        this.route = route;
        this.meetRoomPatientService = meetRoomPatientService;
        this.patientService = patientService;
        this.authPatientService = authPatientService;
        this._ngZone = _ngZone;
        this._router = _router;
        this.step = 0;
        this.step_waiting_page = 1;
        this.step_payment_page = 2;
        this.step_attetion_page = 3;
        this.step_feeback_page = 4;
        this.identify = null;
        this.identify_patient = 'OK';
        this.no_identify_patient = 'NOK';
        this.listEvent = null;
        this.patientData = this.authPatientService.getCurrentUser;
        /*console.log("MeetPatientComponent this.patientData");
        console.log(this.patientData);*/
        //this.patientData = localStorage.getItem('patient');

        this.identify = localStorage.getItem('patient_auth');
        this.providerData = JSON.parse(localStorage.getItem('provider'));
        this.patientData['providerId'] = this.providerData._id;
        this.patientData['room'] = this.providerData.room;
        this.patientData['providerId'] = this.providerData._id;
        this.route.paramMap.subscribe(function (params) {
          _this41.roomName = params.get('roomName');
        });
      }

      _createClass(MeetPatientComponent, [{
        key: "onBrowserClose",
        value: function onBrowserClose() {
          console.log("beforeunload");
          this.ngOnDestroy();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log("ngOnDestroyngOnDestroyngOnDestroyngOnDestroy");
          this.patientService.close(); //this.listEvent.unsubscribe(); 
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this42 = this;

          if (this.no_identify_patient == this.identify) {
            this._router.navigateByUrl('/auth/sign-in-patient');

            this.clean();
            return;
          }

          if (this.patientData == undefined || this.providerData == undefined) {
            this._router.navigateByUrl('/auth/sign-in-patient');

            this.clean();
            return;
          }

          this.getProviderState();
          this.patientService.updatePatient(this.patientData).subscribe(function (patientUpdated) {
            _this42.meetRoomPatientService.confirmConnectPatient(patientUpdated);

            _this42.patientData = patientUpdated;

            _this42.completeLoad();
          });
        }
      }, {
        key: "completeLoad",
        value: function completeLoad() {
          var _this43 = this;

          var step_cache = localStorage.getItem('step_attetion');

          if (step_cache) {
            this.step = parseInt(step_cache);
          } else {
            this.patientService.checkRoomExist(this.roomName).subscribe(function (result) {
              _this43.providerData = result;
              _this43.step = _this43.step_waiting_page;
            });
          }

          this.meetRoomPatientService.providerEntered().subscribe(function (data) {
            if (data) {
              _this43.patientService.checkRoomExist(_this43.roomName).subscribe(function (result) {
                _this43.providerData = result;
                _this43.step = _this43.step_payment_page;
                localStorage.setItem('step_attetion', _this43.step.toString());
              });
            }
          });
          this.meetRoomPatientService.receiveConfirmProvider().subscribe(function (confirmProvider) {
            if (confirmProvider) {
              _this43.patientService.checkRoomExist(_this43.roomName).subscribe(function (result) {
                _this43.providerData = result;
                _this43.step = _this43.step_attetion_page;
                localStorage.setItem('step_attetion', _this43.step.toString());
              });
            }
          });
          this.meetRoomPatientService.receiveEndCall().subscribe(function (text) {
            return __awaiter(_this43, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (text === 'endCall') {
                        console.log("send confirm End call to provider : " + this.providerData.socketId);
                        this.meetRoomPatientService.endCall(this.providerData.socketId, 'acceptEnd');
                        this.meetRoomPatientService.stopVideoAudio();
                        this.meetRoomPatientService.disconnectMe();
                        this.step = this.step_feeback_page;
                        localStorage.setItem('step_attetion', this.step.toString());
                      }

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          });
        }
      }, {
        key: "getProviderState",
        value: function getProviderState() {
          var _this44 = this;

          this.listEvent = this.patientService.getProviderState(this.providerData.room, function () {
            //console.log("reconnect getWaitingPatientsData2");
            _this44._ngZone.run(function () {
              _this44.getProviderState();
            });
          });
          this.listEvent.subscribe(function (result) {
            _this44._ngZone.run(function () {
              var prov = JSON.parse(result); //console.log(prov);

              console.log("prov.connection:", prov.connection);
              console.log("prov.calling:", prov.calling);
              _this44.providerData.connection = prov.connection;
            });
          });
        }
      }, {
        key: "exit",
        value: function exit() {
          var _this45 = this;

          this.patientService.disconnectPatient(this.patientData["_id"]).subscribe(function (text) {
            return __awaiter(_this45, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));
          });
          ;
        }
      }, {
        key: "clean",
        value: function clean() {
          this.providerData = null;
          localStorage.removeItem("patient_dni");
          localStorage.removeItem("patient_auth");
        }
      }, {
        key: "closeinstanceSession",
        value: function closeinstanceSession() {
          this.clean();

          this._router.navigateByUrl('/');
        }
      }]);

      return MeetPatientComponent;
    }();

    MeetPatientComponent.ɵfac = function MeetPatientComponent_Factory(t) {
      return new (t || MeetPatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_4__["MeetRoomPatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_patient_service__WEBPACK_IMPORTED_MODULE_2__["AuthPatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MeetPatientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MeetPatientComponent,
      selectors: [["app-meet-patient"]],
      hostBindings: function MeetPatientComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function MeetPatientComponent_beforeunload_HostBindingHandler($event) {
            return ctx.onBrowserClose();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 30,
      vars: 7,
      consts: [[1, "room-container"], ["mode", "side", "opened", "", 1, "room-sidebar"], [1, "p-3", "mt-4"], ["href", "index.html", 1, ""], ["src", "assets/images/logo.png", "alt", "homepage", 1, "w-25"], ["fxShow", "false", "fxShow.gt-xs", "", 1, "text-dark", "ml-4", "font-weight-bold"], [1, "font-weight-bold", "text-dark", "mt-5"], [1, "d-flex", "justify-content-around", "mt-2"], [4, "ngIf"], [1, "font-weight-bold", "text-dark"], [1, "mt-3"], ["mat-raised-button", "", "color", "primary", 1, "mr-1", "text-dark", "px-1", "py-0", 3, "click"], [1, "container-fluid"], ["alt", "provider", 1, "profile-image", 3, "src"], [1, "d-block"], [1, "font-weight-bold", "text-blue"], [1, "font-weight-bold", "text-warning"], [3, "patientData", "providerData", "roomName"]],
      template: function MeetPatientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " MEVICO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MeetPatientComponent_ng_container_13_Template, 8, 3, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MeetPatientComponent_ng_container_19_Template, 3, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MeetPatientComponent_ng_container_20_Template, 3, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetPatientComponent_Template_button_click_23_listener($event) {
            return ctx.exit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Salir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MeetPatientComponent_div_26_Template, 2, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MeetPatientComponent_div_27_Template, 2, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MeetPatientComponent_div_28_Template, 2, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MeetPatientComponent_div_29_Template, 2, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.providerData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.providerData && ctx.providerData.connection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.providerData && !ctx.providerData.connection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == ctx.step_waiting_page && ctx.patientData != undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == ctx.step_payment_page && ctx.patientData != undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == ctx.step_attetion_page && ctx.patientData != undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == ctx.step_feeback_page && ctx.patientData != undefined);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _wating_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_9__["WaitingRoomComponent"], _pay_patient_pay_patient_component__WEBPACK_IMPORTED_MODULE_10__["PayPatientComponent"], _meet_call_meet_call_component__WEBPACK_IMPORTED_MODULE_11__["MeetCallComponent"], _feeback_feeback_component__WEBPACK_IMPORTED_MODULE_12__["FeebackComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZXQtcGF0aWVudC9tZWV0LXBhdGllbnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetPatientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-meet-patient',
          templateUrl: './meet-patient.component.html',
          styleUrls: ['./meet-patient.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_4__["MeetRoomPatientService"]
        }, {
          type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
        }, {
          type: _services_auth_patient_service__WEBPACK_IMPORTED_MODULE_2__["AuthPatientService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        onBrowserClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/meet-patient/pay-patient/pay-patient.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/meet-patient/pay-patient/pay-patient.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PayPatientComponent */

  /***/
  function srcAppPagesMeetPatientPayPatientPayPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayPatientComponent", function () {
      return PayPatientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../_services/patient.service */
    "./src/app/_services/patient.service.ts");
    /* harmony import */


    var _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../_services/meet-room-patient.service */
    "./src/app/_services/meet-room-patient.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var _c0 = ["localVideo"];

    function PayPatientComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r943 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r943.payAmount);
      }
    }

    function PayPatientComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r944 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r944.payData.QRimg[0].description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r944.payData.QRimg[0].description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r944.payData.QRimg[0].name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PayPatientComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r945 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r945.payData.QRimg[1].description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r945.payData.QRimg[1].description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r945.payData.QRimg[1].name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PayPatientComponent_div_17_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r949 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r949);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r949);
      }
    }

    function PayPatientComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Banks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PayPatientComponent_div_17_div_3_Template, 4, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r946 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r946.payData.account);
      }
    }

    function PayPatientComponent_div_18_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r951 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r951);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r951);
      }
    }

    function PayPatientComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Link Pay");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PayPatientComponent_div_18_div_3_Template, 4, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r947 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r947.payData.url);
      }
    }

    var PayPatientComponent =
    /*#__PURE__*/
    function () {
      function PayPatientComponent(formBuilder, meetRoomPatientService, patientService, _route) {
        _classCallCheck(this, PayPatientComponent);

        this.formBuilder = formBuilder;
        this.meetRoomPatientService = meetRoomPatientService;
        this.patientService = patientService;
        this._route = _route;
        this.patientId = null;
        this.QRimgKey = [];
        this.accountKey = false;
        this.urlKey = false;
        this.identify_patient = 'OK';
        this.no_identify_patient = 'NOK';
        this.payForm = this.formBuilder.group({
          paySelect: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.QRimgKey[0] = false;
        this.QRimgKey[1] = false;
      }

      _createClass(PayPatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this46 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.patientService.getPayData(this.providerData._id).subscribe(function (res) {
                      _this46.payData = res;

                      if (res === null || res.length === 0) {
                        _this46.payData = {
                          QRimg: [],
                          account: [],
                          url: []
                        };
                      }

                      if (_this46.payData) {
                        if (_this46.payData.QRimg) {
                          if (_this46.payData.QRimg[0]) {
                            _this46.QRimgKey[0] = true;
                          }

                          if (_this46.payData.QRimg[1]) {
                            _this46.QRimgKey[1] = true;
                          }
                        } else {
                          _this46.payData.QRimg = [];
                        }

                        if (_this46.payData.account) {
                          _this46.accountKey = true;
                        } else {
                          _this46.payData.account = [];
                        }

                        if (_this46.payData.url) {
                          _this46.urlKey = true;
                        } else {
                          _this46.payData.url = [];
                        }
                      }
                    });
                    this.meetRoomPatientService.patientEnteredInPayPatient(this.providerData._id, this.patientData.dni);
                    this.meetRoomPatientService.receivePay().subscribe(function (payAmount) {
                      _this46.payAmount = payAmount;
                    });

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "confirmPay",
        value: function confirmPay() {
          if (this.payForm.invalid) {
            return;
          }

          this.meetRoomPatientService.confirmPay(this.providerData._id, this.f.paySelect.value);
        }
      }, {
        key: "Cancel",
        value: function Cancel() {
          this._route.navigateByUrl('/auth/sign-in-patient');

          this.clean();
          return;
        }
      }, {
        key: "clean",
        value: function clean() {
          this.providerData = null;
          localStorage.removeItem("patient_dni");
        }
      }, {
        key: "f",
        get: function get() {
          return this.payForm.controls;
        }
      }]);

      return PayPatientComponent;
    }();

    PayPatientComponent.ɵfac = function PayPatientComponent_Factory(t) {
      return new (t || PayPatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_4__["MeetRoomPatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    PayPatientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PayPatientComponent,
      selectors: [["app-pay-patient"]],
      viewQuery: function PayPatientComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.localVideo = _t.first);
        }
      },
      inputs: {
        patientData: "patientData",
        providerData: "providerData",
        roomName: "roomName"
      },
      decls: 26,
      vars: 7,
      consts: [[1, "container", "total"], [1, "header"], ["type", "number", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "detail-pane", "margin-div"], [1, "qr-code"], ["class", "row margin-div", 4, "ngIf"], ["class", "account margin-div", 4, "ngIf"], ["class", "link-pay margin-div", 4, "ngIf"], [1, "row", "button-div"], [1, "col-6"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "btn", "btn-danger", 3, "click"], ["type", "number"], [1, "row", "margin-div"], [1, "col-4"], ["formControlName", "paySelect", "type", "radio", "name", "paySelect", 3, "value"], [1, "col-8"], [1, "qrImage", 3, "src"], [1, "account", "margin-div"], ["class", "add-account", 4, "ngFor", "ngForOf"], [1, "add-account"], [1, "link-pay", "margin-div"]],
      template: function PayPatientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You should pay before starting video call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Amount to be paid($):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PayPatientComponent_span_8_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PayPatientComponent_Template_form_ngSubmit_9_listener($event) {
            return ctx.confirmPay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "QR codes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PayPatientComponent_div_15_Template, 7, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PayPatientComponent_div_16_Template, 7, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PayPatientComponent_div_17_Template, 4, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PayPatientComponent_div_18_Template, 4, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm Pay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PayPatientComponent_Template_button_click_24_listener($event) {
            return ctx.Cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.payForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.QRimgKey[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.QRimgKey[1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.payAmount ? false : true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".total[_ngcontent-%COMP%]{\r\n    width:70%;\r\n    margin: auto;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    padding:3%;\r\n    padding-top:50px;\r\n}\r\n.detail-pane[_ngcontent-%COMP%]{\r\n    background-color: darkgray;\r\n    padding:3%;\r\n}\r\n.qrImage[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n}\r\n.margin-div[_ngcontent-%COMP%]{\r\n    margin-bottom:10px;\r\n}\r\n.button-div[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n    margin-top:20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVldC1wYXRpZW50L3BheS1wYXRpZW50L3BheS1wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZXQtcGF0aWVudC9wYXktcGF0aWVudC9wYXktcGF0aWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdGFse1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOjMlO1xyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxufVxyXG4uZGV0YWlsLXBhbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxuICAgIHBhZGRpbmc6MyU7XHJcbn1cclxuLnFySW1hZ2V7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5tYXJnaW4tZGl2e1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbi5idXR0b24tZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayPatientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pay-patient',
          templateUrl: './pay-patient.component.html',
          styleUrls: ['./pay-patient.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_4__["MeetRoomPatientService"]
        }, {
          type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        localVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['localVideo']
        }],
        patientData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        providerData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roomName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/meet-patient/wating-room/waiting-room.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/meet-patient/wating-room/waiting-room.component.ts ***!
    \**************************************************************************/

  /*! exports provided: WaitingRoomComponent, InviteBySms2 */

  /***/
  function srcAppPagesMeetPatientWatingRoomWaitingRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WaitingRoomComponent", function () {
      return WaitingRoomComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InviteBySms2", function () {
      return InviteBySms2;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _config_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../_config/constant */
    "./src/app/_config/constant.ts");
    /* harmony import */


    var _services_content_blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../_services/content-blog.service */
    "./src/app/_services/content-blog.service.ts");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../_services/patient.service */
    "./src/app/_services/patient.service.ts");
    /* harmony import */


    var _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../_services/meet-room-patient.service */
    "./src/app/_services/meet-room-patient.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var _c0 = ["localVideo"];

    function WaitingRoomComponent_ng_container_41_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-card-content", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r958 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r958.postTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r958.postBody, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function WaitingRoomComponent_ng_container_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WaitingRoomComponent_ng_container_41_mat_card_1_Template, 4, 2, "mat-card", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r956 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r956.literalArr);
      }
    }

    function InviteBySms2_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone Number is invalid.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function InviteBySms2_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone Number is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "is-invalid": a0,
        "border-p-red": a1
      };
    };

    var WaitingRoomComponent =
    /*#__PURE__*/
    function () {
      function WaitingRoomComponent(dialog, patientService, meetRoomPatientService, _router, contentBlogService) {
        _classCallCheck(this, WaitingRoomComponent);

        this.dialog = dialog;
        this.patientService = patientService;
        this.meetRoomPatientService = meetRoomPatientService;
        this._router = _router;
        this.contentBlogService = contentBlogService;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domain;
        this.providerEnteredKey = false;
        this.defaultVideo = _config_constant__WEBPACK_IMPORTED_MODULE_4__["constant"].defaultVideo;
        this.defaultImage = _config_constant__WEBPACK_IMPORTED_MODULE_4__["constant"].defaultImage;
        this.tipsImage = _config_constant__WEBPACK_IMPORTED_MODULE_4__["constant"].tipsImage;
        this.defaultText = _config_constant__WEBPACK_IMPORTED_MODULE_4__["constant"].defaultText;
        this.literalArr = [];
      }

      _createClass(WaitingRoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this47 = this;

          this.patientService.getBlog(this.providerData._id).subscribe(function (res) {
            _this47.literalArr = res;

            _this47.literalArr.forEach(function (item) {
              _this47.contentBlogService.getByUrl(item.url).subscribe(function (html) {
                item.postBody = html;
              });
            });
          });
          this.showPreView();
        }
      }, {
        key: "sendInvite",
        value: function sendInvite(option) {
          /* switch (option) {
             case 'sms':
               this.patientService.sendSMS(this.smsData.data).subscribe(result => {
                 if (!result.errorCode) {
                   console.log("Invite sent by SMS", result)
                 }
               });
               break;
             case 'gmail':
               this.sendMail('GMail');
               break;
             case 'outlook':
               this.sendMail('OMail');
               break;
             default:
               this.sendMail('defaultMail');
           }*/
        }
      }, {
        key: "sendMail",
        value: function sendMail(option) {
          var subject = "Telemedicine meeting invitation";
          var body = "Hello, this is " + this.providerData.role + "." + this.providerData.lastName + " - please join me for a secure video call: \n" + "https://pasatra.com/" + this.providerData.room + "\n" + "%0a" + "%0a" + "Use a computer or device with a good internet connection and webcam. If you run into issues connecting, restart your computer " + "%0a" + "%0a" + "or check out the pasatra.com http://help.pasatra.com \n" + "Simple, free, and secure telemedicine powered by https://Pasatra.com \n";
          var mailUrl = option === 'GMail' ? 'https://mail.google.com/mail/?view=cm&fs=1&su=' + subject + '&body=' + body : option === "OMail" ? "https://outlook.live.com/owa/?path=/mail/action/compose&?&subject=" + subject + '&body=' + body : "mailto:?Subject=" + subject + '&body=' + body;

          this._router.navigate([]).then(function (result) {
            window.open(mailUrl, '_blank');
          });
        }
      }, {
        key: "openDialogue",
        value: function openDialogue(option) {
          var _this48 = this;

          var smsContent = " - please join me for a secure video call: \n" + "https://pasatra.com/" + this.providerData.room + "\n" + "Use a computer or device with a good internet connection and webcam. If you run into issues connecting, restart your computer or check out the pasatra.com http://help.pasatra.com \n" + "Simple, free, and secure telemedicine powered by https://Pasatra.com \n";
          var dialogRef = this.dialog.open(InviteBySms2, {
            width: '400px',
            data: {
              phoneNumber: '',
              room: this.roomUrl,
              smsContent: smsContent
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this48.smsData = result;

            _this48.sendInvite(option);
          });
        }
      }, {
        key: "showPreView",
        value: function showPreView() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var localStream;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return window.navigator.mediaDevices.getUserMedia({
                      video: true,
                      audio: false
                    });

                  case 2:
                    localStream = _context13.sent;
                    this.localVideo.nativeElement.srcObject = localStream;

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "receiveProviderId",
        value: function receiveProviderId() {
          /* this.meetRoomPatientService.receiveProvideId().subscribe(providerId => {
             console.log('providerIdqqq')
             console.log(providerId)
           })*/
        }
      }]);

      return WaitingRoomComponent;
    }();

    WaitingRoomComponent.ɵfac = function WaitingRoomComponent_Factory(t) {
      return new (t || WaitingRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_7__["MeetRoomPatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_blog_service__WEBPACK_IMPORTED_MODULE_5__["ContentBlogService"]));
    };

    WaitingRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WaitingRoomComponent,
      selectors: [["app-waiting"]],
      viewQuery: function WaitingRoomComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.localVideo = _t.first);
        }
      },
      inputs: {
        patientData: "patientData",
        providerData: "providerData",
        roomName: "roomName"
      },
      decls: 42,
      vars: 4,
      consts: [[1, "container-fluid"], [1, "row"], [1, "user-invite", "col-xl-6", "col-lg-6"], [1, "p-3"], [1, "p-3", "font-18", "text-black-50"], [1, "d-block", "justify-content-between", "p-3"], [1, "mb-3", "text-center"], ["type", "text", 1, "p-10", "border-radius-5"], ["inputRoom", ""], [1, "text-center"], [1, "mx-5", "d-block"], ["mat-stroked-button", "", "color", "primary", 1, "w-p-180", "p-3", "text-black", "font-20", 3, "matMenuTriggerFor"], ["src", "https://img.icons8.com/nolan/48/expand-arrow.png", 1, "w-25"], [1, "w-p-180", "mt-3"], ["inviteMenu", "matMenu"], ["mat-menu-item", "", 1, "w-45", "mx-auto", "bg-info", "text-white", "font-20", "text-center", 3, "click"], ["src", "https://img.icons8.com/dusk/64/000000/sms.png", 1, "w-25"], ["mat-menu-item", "", 1, "w-45", "mx-auto", "bg-success", "text-dark", "font-20", "mt-3", "text-center", 3, "matMenuTriggerFor"], ["src", "https://img.icons8.com/nolan/64/email-open.png", 1, "w-25"], [1, "w-p-180"], ["inviteByEmailMenu", "matMenu"], ["mat-menu-item", "", 1, "w-75", "mx-auto", "bg-warning", "text-white", "font-20", 3, "click"], ["src", "https://img.icons8.com/fluent/48/000000/gmail.png", 1, "w-25"], ["mat-menu-item", "", 1, "w-75", "mx-auto", "bg-purple", "text-dark", "font-20", "mt-3", 3, "click"], ["src", "https://img.icons8.com/color/48/000000/ms-outlook.png", 1, "w-25"], ["mat-menu-item", "", 1, "w-75", "mx-auto", "bg-secondary", "text-dark", "font-20", "mt-3", 3, "click"], ["src", "https://img.icons8.com/fluent/50/000000/mail.png", 1, "w-25"], [1, "col-xl-6", "col-lg-6"], [1, "video-container"], ["autoplay", "", "muted", "", "id", "localVideo", 1, "local-video"], ["localVideo", ""], [1, "d-flex", "flex-column"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "p-3", "text-center"], [2, "text-align", "center", "width", "100%", 3, "innerHtml"]],
      template: function WaitingRoomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You can invite any patient to your waiting room, share this link:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Invite by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaitingRoomComponent_Template_button_click_18_listener($event) {
            return ctx.openDialogue("sms");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SMS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-menu", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaitingRoomComponent_Template_button_click_26_listener($event) {
            return ctx.sendInvite("gmail");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Gmail ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaitingRoomComponent_Template_button_click_29_listener($event) {
            return ctx.sendInvite("outlook");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Outlook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaitingRoomComponent_Template_button_click_32_listener($event) {
            return ctx.sendInvite("defaultMail");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Default ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "video", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, WaitingRoomComponent_ng_container_41_Template, 2, 1, "ng-container", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r953 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r954 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.roomUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r953);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r954);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.literalArr);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]],
      styles: [".local-video[_ngcontent-%COMP%] {\r\n  border: 1px solid #cddfe7;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVldC1wYXRpZW50L3dhdGluZy1yb29tL3dhaXRpbmctcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVldC1wYXRpZW50L3dhdGluZy1yb29tL3dhaXRpbmctcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2FsLXZpZGVvIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2RkZmU3O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitingRoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-waiting',
          templateUrl: './waiting-room.component.html',
          styleUrls: ['./waiting-room.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"]
        }, {
          type: _services_meet_room_patient_service__WEBPACK_IMPORTED_MODULE_7__["MeetRoomPatientService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_content_blog_service__WEBPACK_IMPORTED_MODULE_5__["ContentBlogService"]
        }];
      }, {
        localVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['localVideo']
        }],
        patientData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        providerData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roomName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var InviteBySms2 =
    /*#__PURE__*/
    function () {
      function InviteBySms2(dialogRef, data) {
        _classCallCheck(this, InviteBySms2);

        this.dialogRef = dialogRef;
        this.data = data;
        this.isValidNumber = true;
        this.isInvited = false;
        console.log('data');
        console.log(data);
      }

      _createClass(InviteBySms2, [{
        key: "onCancelClick",
        value: function onCancelClick() {
          this.isValidNumber = true;
          this.dialogRef.close({
            event: 'cancel'
          });
        }
      }, {
        key: "inviteBySms",
        value: function inviteBySms() {
          this.isInvited = true;

          if (!this.data.phoneNumber || !this.isValidNumber) {
            return;
          }

          this.dialogRef.close({
            event: 'sendSms',
            data: this.data
          });
        }
      }, {
        key: "hasError",
        value: function hasError(status) {
          this.isValidNumber = status;
        }
      }, {
        key: "getNumber",
        value: function getNumber(phoneNumber) {
          this.data.phoneNumber = phoneNumber;
        }
      }]);

      return InviteBySms2;
    }();

    InviteBySms2.ɵfac = function InviteBySms2_Factory(t) {
      return new (t || InviteBySms2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    InviteBySms2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InviteBySms2,
      selectors: [["invite-by-sms2"]],
      decls: 21,
      vars: 9,
      consts: [["mat-dialog-content", ""], [1, "mb-3"], ["type", "text", "ng2TelInput", "", "matInput", "", "id", "phoneNumber", "name", "phoneNumber", 1, "form-control", "text-dark", "w-p-350", 3, "ngModel", "ngClass", "ngModelChange", "hasError", "ng2TelOutput"], ["phoneNumber", "ngModel"], [4, "ngIf"], [1, "mt-3"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-between"], ["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "d-block", "invalid-feedback", "mt-3"]],
      template: function InviteBySms2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InviteBySms2_Template_input_ngModelChange_4_listener($event) {
            return ctx.data.phoneNumber = $event;
          })("hasError", function InviteBySms2_Template_input_hasError_4_listener($event) {
            return ctx.hasError($event);
          })("ng2TelOutput", function InviteBySms2_Template_input_ng2TelOutput_4_listener($event) {
            return ctx.getNumber($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InviteBySms2_ng_container_6_Template, 3, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InviteBySms2_ng_container_7_Template, 3, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Invitation location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InviteBySms2_Template_input_ngModelChange_11_listener($event) {
            return ctx.data.room = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SMS Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InviteBySms2_Template_textarea_ngModelChange_15_listener($event) {
            return ctx.data.smsContent = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InviteBySms2_Template_button_click_17_listener($event) {
            return ctx.onCancelClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InviteBySms2_Template_button_click_19_listener($event) {
            return ctx.inviteBySms();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r959 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.phoneNumber)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, (!ctx.isValidNumber || !ctx.data.phoneNumber) && (_r959.dirty || _r959.touched || ctx.isInvited), (!ctx.isValidNumber || !ctx.data.phoneNumber) && (_r959.dirty || _r959.touched || ctx.isInvited)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isValidNumber && ctx.data.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.phoneNumber && (_r959.dirty || _r959.touched || ctx.isInvited));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.room);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.smsContent);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InviteBySms2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'invite-by-sms2',
          templateUrl: 'invite-by-sms2.html'
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/shared/accordion/accordion.directive.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/shared/accordion/accordion.directive.ts ***!
    \***************************************************************/

  /*! exports provided: AccordionDirective */

  /***/
  function srcAppPagesSharedAccordionAccordionDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionDirective", function () {
      return AccordionDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AccordionDirective =
    /*#__PURE__*/
    function () {
      function AccordionDirective(router) {
        var _this49 = this;

        _classCallCheck(this, AccordionDirective);

        this.router = router;
        this.navlinks = [];
        setTimeout(function () {
          return _this49.checkOpenLinks();
        });
      }

      _createClass(AccordionDirective, [{
        key: "closeOtherLinks",
        value: function closeOtherLinks(selectedLink) {
          this.navlinks.forEach(function (link) {
            if (link !== selectedLink) {
              link.selected = false;
            }
          });
        }
      }, {
        key: "addLink",
        value: function addLink(link) {
          this.navlinks.push(link);
        }
      }, {
        key: "removeGroup",
        value: function removeGroup(link) {
          var index = this.navlinks.indexOf(link);

          if (index !== -1) {
            this.navlinks.splice(index, 1);
          }
        }
      }, {
        key: "checkOpenLinks",
        value: function checkOpenLinks() {
          var _this50 = this;

          this.navlinks.forEach(function (link) {
            if (link.group) {
              var routeUrl = _this50.router.url;
              var currentUrl = routeUrl.split('/');

              if (currentUrl.indexOf(link.group) > 0) {
                link.selected = true;

                _this50.closeOtherLinks(link);
              }
            }
          });
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var _this51 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).subscribe(function (e) {
            return _this51.checkOpenLinks();
          });
        }
      }]);

      return AccordionDirective;
    }();

    AccordionDirective.ɵfac = function AccordionDirective_Factory(t) {
      return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AccordionDirective,
      selectors: [["", "appAccordion", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appAccordion]'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/shared/accordion/accordionanchor.directive.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/shared/accordion/accordionanchor.directive.ts ***!
    \*********************************************************************/

  /*! exports provided: AccordionAnchorDirective */

  /***/
  function srcAppPagesSharedAccordionAccordionanchorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function () {
      return AccordionAnchorDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./accordionlink.directive */
    "./src/app/pages/shared/accordion/accordionlink.directive.ts");

    var AccordionAnchorDirective =
    /*#__PURE__*/
    function () {
      function AccordionAnchorDirective(navlink) {
        _classCallCheck(this, AccordionAnchorDirective);

        this.navlink = navlink;
      }

      _createClass(AccordionAnchorDirective, [{
        key: "onClick",
        value: function onClick(e) {
          this.navlink.toggle();
        }
      }]);

      return AccordionAnchorDirective;
    }();

    AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) {
      return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]));
    };

    AccordionAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AccordionAnchorDirective,
      selectors: [["", "appAccordionToggle", ""]],
      hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appAccordionToggle]'
        }]
      }], function () {
        return [{
          type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]]
          }]
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/shared/accordion/accordionlink.directive.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/shared/accordion/accordionlink.directive.ts ***!
    \*******************************************************************/

  /*! exports provided: AccordionLinkDirective */

  /***/
  function srcAppPagesSharedAccordionAccordionlinkDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function () {
      return AccordionLinkDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./accordion.directive */
    "./src/app/pages/shared/accordion/accordion.directive.ts");

    var AccordionLinkDirective =
    /*#__PURE__*/
    function () {
      function AccordionLinkDirective(nav) {
        _classCallCheck(this, AccordionLinkDirective);

        this.nav = nav;
      }

      _createClass(AccordionLinkDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nav.addLink(this);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.nav.removeGroup(this);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.selected = !this.selected;
        }
      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        },
        set: function set(value) {
          this._selected = value;

          if (value) {
            this.nav.closeOtherLinks(this);
          }
        }
      }]);

      return AccordionLinkDirective;
    }();

    AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) {
      return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]));
    };

    AccordionLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AccordionLinkDirective,
      selectors: [["", "appAccordionLink", ""]],
      hostVars: 2,
      hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
        }
      },
      inputs: {
        group: "group",
        selected: "selected"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appAccordionLink]'
        }]
      }], function () {
        return [{
          type: _accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]]
          }]
        }];
      }, {
        group: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.selected']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/shared/accordion/index.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/shared/accordion/index.ts ***!
    \*************************************************/

  /*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */

  /***/
  function srcAppPagesSharedAccordionIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./accordionanchor.directive */
    "./src/app/pages/shared/accordion/accordionanchor.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function () {
      return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"];
    });
    /* harmony import */


    var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./accordionlink.directive */
    "./src/app/pages/shared/accordion/accordionlink.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function () {
      return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"];
    });
    /* harmony import */


    var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./accordion.directive */
    "./src/app/pages/shared/accordion/accordion.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccordionDirective", function () {
      return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"];
    });
    /***/

  },

  /***/
  "./src/app/pages/shared/menu-items/menu-items.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/shared/menu-items/menu-items.ts ***!
    \*******************************************************/

  /*! exports provided: MenuItems */

  /***/
  function srcAppPagesSharedMenuItemsMenuItemsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItems", function () {
      return MenuItems;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MenuItems =
    /*#__PURE__*/
    function () {
      function MenuItems() {
        _classCallCheck(this, MenuItems);

        this.MENUITEMS_SUPER = [{
          state: 'super',
          name: 'Dashboard',
          type: 'link',
          icon: 'av_timer'
        }, {
          state: 'profile',
          name: 'Profile',
          type: 'link',
          icon: 'https://img.icons8.com/doodle/48/000000/user.png'
        }, {
          state: 'providers',
          name: 'Providers',
          type: 'link',
          icon: 'https://img.icons8.com/doodle/48/000000/doctor-male.png'
        }, {
          state: 'administrators',
          name: 'Administrators',
          type: 'link',
          icon: 'https://img.icons8.com/doodle/48/000000/doctor-male.png'
        }, {
          state: 'feedbacks',
          name: 'Feedbacks',
          type: 'link',
          icon: 'https://img.icons8.com/doodle/48/000000/doctor-male.png'
        }, {
          state: 'plans',
          name: 'Plans',
          type: 'link',
          icon: 'https://img.icons8.com/doodle/48/000000/doctor-male.png'
        }];
        this.MENUITEMS_ADMIN = [{
          state: 'admin',
          type: 'link',
          name: 'Health Provider',
          icon: 'https://img.icons8.com/doodle/48/000000/doctor-male.png'
        }, {
          state: 'admin/patient',
          type: 'link',
          name: 'Patient',
          icon: 'https://img.icons8.com/officel/16/000000/hospital-bed.png'
        }, {
          state: 'profile',
          name: 'Profile',
          type: 'link',
          icon: 'https://img.icons8.com/doodle/48/000000/user.png'
        }];
        this.MENUITEMS_USER = [{
          state: 'health-provider',
          name: 'Dashboard',
          type: 'link',
          icon: './../../../../assets/images/P9.svg'
        }, {
          state: 'profile',
          name: 'Profile',
          type: 'link',
          icon: './../../../../assets/images/P10.svg'
        }, {
          state: 'health-provider/edit-room',
          name: 'Edit Waiting Room',
          type: 'link',
          icon: './../../../../assets/images/P11.svg'
        }, {
          state: 'patient-charts',
          name: 'Patient Charts',
          type: 'link',
          icon: './../../../../assets/images/P12.svg'
        }, {
          state: 'subscription-plan',
          name: 'Subscription Plan',
          type: 'link',
          icon: './../../../../assets/images/P16.svg'
        }, {
          state: 'feedbacks',
          name: 'Feedbacks',
          type: 'link',
          icon: './../../../../assets/images/P17.svg'
        }];
        this.MENUITEMS_FRONT = [{
          state: 'home',
          type: 'link',
          name: 'Home',
          icon: 'https://img.icons8.com/officel/16/000000/home.png'
        }, {
          state: 'patient',
          type: 'link',
          name: 'For Patients',
          icon: 'https://img.icons8.com/officel/16/000000/hospital-bed.png'
        }, {
          state: 'provider',
          type: 'link',
          name: 'For Providers',
          icon: 'https://img.icons8.com/doodle/16/000000/doctor-male.png'
        }, {
          state: 'clinics',
          type: 'link',
          name: 'For Clinics',
          icon: 'https://img.icons8.com/officel/16/000000/clinic.png'
        }, {
          state: 'pricing',
          type: 'link',
          name: 'Pricing',
          icon: 'https://img.icons8.com/officel/16/000000/money.png'
        }];
        console.log("constructor MENUITEMS_USER  :");
        console.log(this.MENUITEMS_USER);
      }

      _createClass(MenuItems, [{
        key: "getMenuitem",
        value: function getMenuitem(role) {
          if (role == "SuperAdmin") {
            return this.MENUITEMS_SUPER;
          } else if (role == "Admin") {
            return this.MENUITEMS_ADMIN;
          } else if (role == "front") {
            return this.MENUITEMS_FRONT;
          } else {
            console.log("MENUITEMS_USER");
            console.log(this.MENUITEMS_USER);
            return this.MENUITEMS_USER;
          }
        }
      }]);

      return MenuItems;
    }();

    MenuItems.ɵfac = function MenuItems_Factory(t) {
      return new (t || MenuItems)();
    };

    MenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MenuItems,
      factory: MenuItems.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItems, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/shared/shared.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/shared/shared.module.ts ***!
    \***********************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppPagesSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu-items/menu-items */
    "./src/app/pages/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./accordion */
    "./src/app/pages/shared/accordion/index.ts");
    /* harmony import */


    var ngx_videogular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-videogular */
    "./node_modules/ngx-videogular/__ivy_ngcc__/fesm2015/ngx-videogular.js");
    /* harmony import */


    var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-webcam */
    "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgControlsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgOverlayPlayModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgBufferingModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgControlsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgOverlayPlayModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgBufferingModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgControlsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgOverlayPlayModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgBufferingModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgControlsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgOverlayPlayModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgBufferingModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgControlsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgOverlayPlayModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgBufferingModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgControlsModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgOverlayPlayModule"], ngx_videogular__WEBPACK_IMPORTED_MODULE_3__["VgBufferingModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]],
          providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/shared/spinner.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/shared/spinner.component.ts ***!
    \***************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppPagesSharedSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SpinnerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SpinnerComponent =
    /*#__PURE__*/
    function () {
      function SpinnerComponent(router, document) {
        var _this52 = this;

        _classCallCheck(this, SpinnerComponent);

        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            _this52.isSpinnerVisible = true;
          } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            _this52.isSpinnerVisible = false;
          }
        }, function () {
          _this52.isSpinnerVisible = false;
        });
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isSpinnerVisible = false;
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
      return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
    };

    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      inputs: {
        backgroundColor: "backgroundColor"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-spinner',
          template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      }, {
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/video-room/video-room.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/video-room/video-room.component.ts ***!
    \**********************************************************/

  /*! exports provided: VideoRoomComponent */

  /***/
  function srcAppPagesVideoRoomVideoRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoRoomComponent", function () {
      return VideoRoomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_meet_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/meet-room.service */
    "./src/app/_services/meet-room.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /*
    declare let JitsiMeetExternalAPI: any;
    */


    var VideoRoomComponent =
    /*#__PURE__*/
    function () {
      function VideoRoomComponent(route, meetRoomService) {
        _classCallCheck(this, VideoRoomComponent);

        this.route = route;
        this.meetRoomService = meetRoomService;
        this.api = null;
        this.calling = false;
        this.getRoomName();
      }

      _createClass(VideoRoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.roomListener();
        }
      }, {
        key: "getRoomName",
        value: function getRoomName() {
          var _this53 = this;

          this.route.paramMap.subscribe(function (params) {
            _this53.roomName = params.get('roomName');
          });
        }
      }, {
        key: "roomListener",
        value: function roomListener() {
          /* this.meetRoomService.getUserDataObserver().subscribe(userData => {
             userData.patientsData.forEach(patient => {
               if(patient.calling === true)
               {this.startCall(patient);}
             });
           });*/
        }
      }, {
        key: "startCall",
        value: function startCall(patient) {
          if (this.api) return false;
          var domain = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].jitBaseUrl;
          var room = patient['room'];
          var options = {
            roomName: room,
            parentNode: document.querySelector('#meet-provider')
          };
          /*this.api = new JitsiMeetExternalAPI(domain, options);
          this.api.on('readyToClose', (room: any) => {
            window.close();
          });*/
        }
      }]);

      return VideoRoomComponent;
    }();

    VideoRoomComponent.ɵfac = function VideoRoomComponent_Factory(t) {
      return new (t || VideoRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meet_room_service__WEBPACK_IMPORTED_MODULE_2__["MeetRoomService"]));
    };

    VideoRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoRoomComponent,
      selectors: [["app-video-room"]],
      decls: 1,
      vars: 0,
      consts: [["id", "meet-provider", 1, "container-fluid", "vh-100"]],
      template: function VideoRoomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGVvLXJvb20vdmlkZW8tcm9vbS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoRoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-room',
          templateUrl: './video-room.component.html',
          styleUrls: ['./video-room.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_meet_room_service__WEBPACK_IMPORTED_MODULE_2__["MeetRoomService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      domain: 'localhost:4200/',
      jitBaseUrl: 'pasatrae.com',
      baseUrl: '/api/v1/',
      socket_endpoint: 'http://localhost:3001',
      peerServerHost: 'nemiac.com',
      peerServerPort: '9000',
      peerServerPath: '/peerjs',
      peerServerSecure: true,
      peerServerDebugLevel: 3,
      peerConfig: {
        config: {
          'iceServers': [{
            url: 'stun:stun1.l.google.com:19302'
          }, {
            url: 'stun:stun2.l.google.com:19302'
          }, {
            url: 'stun:stun3.l.google.com:19302'
          }, {
            url: 'stun:stun4.l.google.com:19302'
          }, {
            url: 'turn:numb.viagenie.ca',
            credential: 'muazkh',
            username: 'webrtc@live.com'
          }]
        }
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_pages_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/pages/app.module */
    "./src/app/pages/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_pages_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\MevicoForDesign\mevico-private\MedicalVideoConsultancy\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map