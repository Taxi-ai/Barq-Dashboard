function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- here will be the main site components and the route will go to dashboard -->\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-panel/chat-panel.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-panel/chat-panel.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatPanelChatPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>chat-panel works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-spinner/dashboard-spinner.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-spinner/dashboard-spinner.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardSpinnerDashboardSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"loadingio-spinner-rolling-gq23rjqpzpg\">\n  <div class=\"ldio-s4dbmhxm5ps\">\n    <div></div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"background\" class=\"secondaryBG\"></div>\n\n<div style=\"width: 100%; height: 100%;\">\n  <app-navbar class=\"fixed-top\"></app-navbar>\n\n  <div style=\"margin-top: 52px;\" class=\"container-fluid\">\n    <div class=\"row pt-4 pb-5\">\n      <div class=\"col-md-2\">\n        <app-side-menu></app-side-menu>\n      </div>\n      <div class=\"col-md-10\">\n        <main class=\"px-4\">\n          <router-outlet></router-outlet>\n        </main>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feedbacks/feedbacks.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedbacks/feedbacks.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeedbacksFeedbacksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;\" class=\"table-responsive p-0 m-0\">\n    <table style=\"border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;\" class=\"table table-dark p-0 m-0\">\n        <thead>\n            <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Feedback ID</th>\n                <th scope=\"col\">Type</th>\n                <th scope=\"col\">Content</th>\n                <th scope=\"col\">Customer ID</th>\n                <th scope=\"col\">Day of Submission</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let feedback of feedbacks; index as i\" (click)=\"goToFeedbackProfile(feedback)\"\n                style=\"cursor: pointer;\">\n                <td scope=\"row\">{{ i + 1 }}</td>\n                <td scope=\"row\">{{ feedback.feedbackID }}</td>\n                <td>{{ feedback.type }}<span *ngIf=\"feedback.type==='issue'\"> - {{ feedback.issueType }}</span></td>\n                <td>{{ feedback.content }}</td>\n                <td>{{ feedback.customerID }}</td>\n                <td>\n                    {{ feedback.submissionDate.year }}/{{ feedback.submissionDate.month }}/{{\n                        feedback.submissionDate.day\n            }}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <p>home works!</p>\r\n    <app-map></app-map>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-dashboard-spinner\n  *ngIf=\"!stopLoading\"\n  class=\"m-auto\"\n></app-dashboard-spinner>\n\n<canvas\n  #myCanvas\n  [hidden]=\"!stopLoading\"\n  (click)=\"getMousePosition($event)\"\n  style=\"border: 1px solid #d3d3d3;\"\n>\n  Your browser does not support the HTML canvas tag.</canvas\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/dark-light-toggle/dark-light-toggle.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/dark-light-toggle/dark-light-toggle.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarDarkLightToggleDarkLightToggleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <label class=\"switch\">\r\n    <input\r\n      (click)=\"toggleTheme()\"\r\n      type=\"checkbox\"\r\n      [checked]=\"!makeItDark\"\r\n      id=\"themeSwitch\"\r\n    />\r\n    <span class=\"slider round\"></span>\r\n  </label>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <app-navbar-dark-light-toggle></app-navbar-dark-light-toggle>\r\n  <a class=\"navbar-brand mr-auto ml-auto\" href=\"#\">TAXI Dashboard</a>\r\n  <app-navbar-notifications class=\"mr-3\"></app-navbar-notifications>\r\n  <app-navbar-profile-picture></app-navbar-profile-picture>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/notifications/notifications.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/notifications/notifications.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"notificationButton\" (click)=\"divOpen()\">\r\n  <svg\r\n    id=\"important\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    width=\"28\"\r\n    height=\"28\"\r\n    viewBox=\"0 0 28 28\"\r\n  >\r\n    <rect\r\n      data-name=\"Rectangle 24\"\r\n      width=\"13\"\r\n      height=\"12\"\r\n      [ngClass]=\"buttonColorsClass1\"\r\n      rx=\"2\"\r\n      transform=\"translate(15)\"\r\n    />\r\n    <rect\r\n      data-name=\"Rectangle 25\"\r\n      width=\"13\"\r\n      [ngClass]=\"buttonColorsClass2\"\r\n      height=\"12\"\r\n      rx=\"2\"\r\n      transform=\"translate(0 2)\"\r\n    />\r\n    <rect\r\n      data-name=\"Rectangle 26\"\r\n      width=\"13\"\r\n      height=\"12\"\r\n      [ngClass]=\"buttonColorsClass1\"\r\n      rx=\"2\"\r\n      transform=\"translate(0 16)\"\r\n    />\r\n    <rect\r\n      data-name=\"Rectangle 27\"\r\n      width=\"13\"\r\n      [ngClass]=\"buttonColorsClass2\"\r\n      height=\"12\"\r\n      rx=\"2\"\r\n      transform=\"translate(15 14)\"\r\n    />\r\n  </svg>\r\n</div>\r\n<div\r\n  class=\"primaryBG\"\r\n  [ngStyle]=\"{\r\n    'border-top': '2px solid #16202a'\r\n  }\"\r\n  id=\"notificationsDiv\"\r\n>\r\n  <div class=\"row p-3 m-0 secondaryBG notificationTopic\">\r\n    <div class=\"col-md-12\">\r\n      <i class=\"fas fa-bell\"></i>\r\n      NOTIFICATIONS\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngFor=\"let item of [1, 2, 3, 4, 5]\"\r\n    class=\"row notificationContent m-0 p-2 pl-3\"\r\n  >\r\n    <div class=\"col-md-12\">notification no. {{ item }}</div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/profile-picture/profile-picture.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/profile-picture/profile-picture.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarProfilePictureProfilePictureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"../../../assets/profile pic.JPG\" />\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>not-found works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/side-menu/side-menu.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/side-menu/side-menu.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSideMenuSideMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"nav primaryBG flex-column py-2 px-2\">\n  <a\n    class=\"nav-link\"\n    class=\"btn btn-primary m-1\"\n    routerLinkActive=\"activeLink\"\n    [routerLinkActiveOptions]=\"{ exact: true }\"\n    routerLink=\"./\"\n    >Home</a\n  >\n  <a\n    class=\"nav-link\"\n    class=\"btn btn-primary m-1\"\n    routerLinkActive=\"activeLink\"\n    routerLink=\"users\"\n    >Users</a\n  >\n  <a\n    class=\"nav-link\"\n    class=\"btn btn-primary m-1\"\n    routerLinkActive=\"activeLink\"\n    routerLink=\"feedbacks\"\n    >Feedbacks</a\n  >\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/under-construction/under-construction.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/under-construction/under-construction.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUnderConstructionUnderConstructionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"centered\">\n  <img src=\"../../assets/moving-taxi.gif\" />\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/edit-user/edit-user.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/edit-user/edit-user.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUserEditUserEditUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form *ngIf=\"user\">\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label for=\"userName\">Full Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"userName\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        [(ngModel)]=\"user.username\"\n      />\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label for=\"userEmail\">Email</label>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        id=\"userEmail\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        [(ngModel)]=\"user.email\"\n      />\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-4\">\n      <label for=\"userCountry\">Country</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"userCountry\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        [(ngModel)]=\"user.country\"\n      />\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"userCity\">City</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"userCity\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        [(ngModel)]=\"user.city\"\n      />\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"userAddress\">Street</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"userAddress\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        [(ngModel)]=\"user.address\"\n      />\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <button\n      type=\"submit\"\n      (click)=\"updateUserData()\"\n      class=\"btn btn-primary btn-block\"\n    >\n      Update Data\n    </button>\n  </div>\n</form>\n\n<div *ngIf=\"!user\"><h1>This user isn't in database</h1></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/user-page/user-page.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/user-page/user-page.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUserUserPageUserPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"user\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      User ID:\n    </div>\n    <div class=\"col-md-10\">\n      {{ user.userID }}\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <a class=\"btn btn-block btn-danger\" routerLink=\"edit\">Edit User Data</a>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!user\">\n  <h1>This user isn't in database</h1>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-graph/users-graph.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-graph/users-graph.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersGraphUsersGraphComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  style=\"\n    background-color: antiquewhite;\n    border-radius: 0px 0px 0.25rem 0.25rem;\n  \"\n  class=\"chart-wrapper\"\n>\n  <canvas\n    baseChart\n    height=\"80%\"\n    [datasets]=\"lineChartData\"\n    [labels]=\"lineChartLabels\"\n    [options]=\"lineChartOptions\"\n    [colors]=\"lineChartColors\"\n    [legend]=\"lineChartLegend\"\n    [chartType]=\"lineChartType\"\n    [plugins]=\"lineChartPlugins\"\n  >\n  </canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-table/users-table.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-table/users-table.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersTableUsersTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  style=\"border-radius: 0.25rem 0.25rem 0px 0px;\"\n  class=\"table-responsive p-0 m-0\"\n>\n  <table\n    style=\"border-radius: 0.25rem 0.25rem 0px 0px;\"\n    class=\"table table-dark p-0 m-0\"\n  >\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">In A Ride?</th>\n        <th scope=\"col\">User Name</th>\n        <th scope=\"col\">City</th>\n        <th scope=\"col\">age</th>\n        <th scope=\"col\">Phone</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Wallet</th>\n        <th scope=\"col\">Rides</th>\n        <th scope=\"col\">Used Offers</th>\n        <th scope=\"col\">Requested Issues</th>\n        <th scope=\"col\">Panned?</th>\n        <th scope=\"col\">Registration Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let user of users; index as i\"\n        (click)=\"userProfile(user)\"\n        style=\"cursor: pointer;\"\n      >\n        <td scope=\"row\">{{ i + 1 }}</td>\n        <td scope=\"row\">{{ user.id | shorten: 4 }}</td>\n        <td>{{ user.userState ? \"✅\" : \"❎\" }}</td>\n        <td>\n          {{ user.firstName | titlecase }} {{ user.lastName | titlecase }}\n        </td>\n        <td>{{ user.city | titlecase }} - {{ user.country | titlecase }}</td>\n        <td>{{ user.age }}</td>\n        <td>{{ user.phone }}</td>\n        <td>{{ user.email | shorten: 10 }}</td>\n        <td>{{ user.wallet }}</td>\n        <td>{{ user.numberOfRides }}</td>\n        <td>{{ user.numberOfOffers }}</td>\n        <td>{{ user.numberOfIssue }}</td>\n        <td>{{ user.pannedState ? \"Panned\" : \"Not Panned\" }}</td>\n        <td>\n          {{ user.registered | date: \"short\" }}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <!-- TODO delete this button ofter connecting to database -->\n    <button class=\"btn btn-block btn-primary mb-5\" (click)=\"postUser()\">\n      New User\n    </button>\n  </div>\n</div>\n<div class=\"row mb-5\">\n  <div class=\"col-md-4\">\n    <h1 class=\"m-0 py-5 informationCardNumber\">\n      {{ users.length }}\n    </h1>\n    <h3 class=\"m-0 py-3 informationCardName\">\n      User<span *ngIf=\"users.length > 1\">s</span>\n    </h3>\n  </div>\n  <div class=\"col-md-4\">\n    <h1 class=\"m-0 py-5 informationCardNumber\">\n      {{ usersStates.active }}\n    </h1>\n    <h3 class=\"m-0 py-3 informationCardName\">\n      Active User<span *ngIf=\"usersStates.active > 1\">s</span>\n    </h3>\n  </div>\n  <div class=\"col-md-4\">\n    <h1 class=\"m-0 py-5 informationCardNumber\">\n      {{ usersStates.panned }}\n    </h1>\n    <h3 class=\"m-0 py-3 informationCardName\">\n      Panned User<span *ngIf=\"usersStates.panned > 1\">s</span>\n    </h3>\n  </div>\n</div>\n\n<form class=\"form-row pb-2\">\n  <div class=\"col-md-6\">\n    <div class=\"form-group m-0\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label for=\"searchForUsers\"\n            >Search by\n            <select\n              [(ngModel)]=\"selectForSearch\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              #selectOfSearch\n              class=\"form-control d-inline\"\n              id=\"searchForUsers\"\n            >\n              <option value=\"name\">Name</option>\n              <option value=\"id\">ID</option>\n              <option value=\"email\">Email Address</option>\n              <option value=\"phone\">Phone Number</option>\n            </select>\n            :</label\n          >\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-9 pr-0\">\n          <input\n            *ngIf=\"selectForSearch === 'name'\"\n            class=\"form-control\"\n            id=\"searchForUsersText\"\n            type=\"text\"\n          />\n          <input\n            *ngIf=\"selectForSearch === 'id'\"\n            class=\"form-control\"\n            id=\"searchForUsersText\"\n            type=\"number\"\n          />\n          <input\n            *ngIf=\"selectForSearch === 'phone'\"\n            class=\"form-control\"\n            id=\"searchForUsersText\"\n            type=\"tel\"\n          />\n          <input\n            *ngIf=\"selectForSearch === 'email'\"\n            class=\"form-control\"\n            id=\"searchForUsersText\"\n            type=\"email\"\n          />\n        </div>\n        <div class=\"col-md-3\">\n          <button type=\"button\" class=\"btn btn-primary btn-block\">\n            Search\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"separator\" class=\"col-md-1\"></div>\n\n  <div class=\"col-md-5\">\n    <div class=\"form-group m-0\">\n      <div class=\"row\">\n        <div class=\"col-md-12 pl-0\">\n          <label for=\"filterUsers\"\n            >Filter by\n            <select\n              [(ngModel)]=\"selectForFilter\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              class=\"form-control d-inline\"\n              id=\"filterUsers\"\n            >\n              <option value=\"date\">Registration Date</option>\n              <option value=\"city\">City</option>\n              <option value=\"country\">Country</option>\n              <option value=\"state\">User State</option>\n            </select>\n            :</label\n          >\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-9 px-0\">\n          <div [ngSwitch]=\"selectForFilter\">\n            <div *ngSwitchCase=\"'city'\">\n              <input class=\"form-control\" type=\"text\" />\n            </div>\n            <div *ngSwitchCase=\"'country'\">\n              <input class=\"form-control\" type=\"text\" />\n            </div>\n            <div *ngSwitchCase=\"'date'\">\n              <div style=\"height: 100%;\" class=\"row\">\n                <div style=\"height: 100%;\" class=\"col-md-1 p-0 m-auto\">\n                  <label\n                    for=\"filterFromDate\"\n                    class=\"m-auto d-block text-center\"\n                    style=\"\n                      color: wheat;\n                      text-align: center;\n                      font-size: smaller;\n                    \"\n                    >from</label\n                  >\n                </div>\n                <div class=\"col-md-5 pl-0\">\n                  <input\n                    id=\"filterFromDate\"\n                    class=\"form-control d-inline ml-0 pl-0\"\n                    type=\"date\"\n                  />\n                </div>\n                <div\n                  style=\"height: 100% !important;\"\n                  class=\"col-md-1 p-0 m-auto\"\n                >\n                  <label\n                    for=\"filterToDate\"\n                    class=\"m-auto d-block text-center\"\n                    style=\"\n                      color: wheat;\n                      text-align: center;\n                      font-size: smaller;\n                    \"\n                    >to</label\n                  >\n                </div>\n                <div class=\"col-md-5 pl-0\">\n                  <input\n                    id=\"filterToDate\"\n                    class=\"form-control d-inline ml-0 pl-0\"\n                    type=\"date\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div *ngSwitchCase=\"'state'\">\n              <select class=\"form-control\">\n                <option value=\"active\">Active</option>\n                <option value=\"panned\">Panned</option>\n                <option value=\"notActiveNotPanned\">\n                  Not Active Not Panned\n                </option>\n              </select>\n            </div>\n            <div *ngSwitchDefault></div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <button type=\"button\" class=\"btn btn-primary btn-block\">\n            Filter\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-users-table [users]=\"users\"></app-users-table>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-users-graph [finalCounter]=\"finalCounter\"></app-users-graph>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
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
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _users_user_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users/user/user-page/user-page.component */
    "./src/app/users/user/user-page/user-page.component.ts");
    /* harmony import */


    var _users_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./users/user/edit-user/edit-user.component */
    "./src/app/users/user/edit-user/edit-user.component.ts");
    /* harmony import */


    var _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./feedbacks/feedbacks.component */
    "./src/app/feedbacks/feedbacks.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./under-construction/under-construction.component */
    "./src/app/under-construction/under-construction.component.ts"); // TODO remake routing after making the front end site using dashboard and main sites


    var routes = [{
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
      children: [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'feedbacks',
        component: _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_8__["FeedbacksComponent"]
      }, {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]
      }, {
        path: 'users/:id',
        component: _users_user_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_6__["UserPageComponent"]
      }, {
        path: 'users/:id/edit',
        component: _users_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__["EditUserComponent"]
      }, {
        path: '**',
        redirectTo: 'not-found'
      }]
    }, {
      path: '',
      component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_10__["UnderConstructionComponent"],
      pathMatch: 'full'
    }, {
      path: 'not-found',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }, {
      path: '**',
      redirectTo: 'not-found'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _navbar_dark_light_toggle_dark_light_toggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./navbar/dark-light-toggle/dark-light-toggle.component */
    "./src/app/navbar/dark-light-toggle/dark-light-toggle.component.ts");
    /* harmony import */


    var _navbar_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navbar/profile-picture/profile-picture.component */
    "./src/app/navbar/profile-picture/profile-picture.component.ts");
    /* harmony import */


    var _navbar_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./navbar/notifications/notifications.component */
    "./src/app/navbar/notifications/notifications.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _users_users_table_users_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./users/users-table/users-table.component */
    "./src/app/users/users-table/users-table.component.ts");
    /* harmony import */


    var _users_users_graph_users_graph_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./users/users-graph/users-graph.component */
    "./src/app/users/users-graph/users-graph.component.ts");
    /* harmony import */


    var _users_user_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./users/user/user-page/user-page.component */
    "./src/app/users/user/user-page/user-page.component.ts");
    /* harmony import */


    var _users_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./users/user/edit-user/edit-user.component */
    "./src/app/users/user/edit-user/edit-user.component.ts");
    /* harmony import */


    var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./side-menu/side-menu.component */
    "./src/app/side-menu/side-menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./feedbacks/feedbacks.component */
    "./src/app/feedbacks/feedbacks.component.ts");
    /* harmony import */


    var _chat_panel_chat_panel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./chat-panel/chat-panel.component */
    "./src/app/chat-panel/chat-panel.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _dashboard_spinner_dashboard_spinner_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./dashboard-spinner/dashboard-spinner.component */
    "./src/app/dashboard-spinner/dashboard-spinner.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./under-construction/under-construction.component */
    "./src/app/under-construction/under-construction.component.ts");
    /* harmony import */


    var _users_shorten_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./users/shorten.pipe */
    "./src/app/users/shorten.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _navbar_dark_light_toggle_dark_light_toggle_component__WEBPACK_IMPORTED_MODULE_10__["DarkLightToggleComponent"], _navbar_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_11__["ProfilePictureComponent"], _navbar_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"], _users_users_table_users_table_component__WEBPACK_IMPORTED_MODULE_14__["UsersTableComponent"], _users_users_graph_users_graph_component__WEBPACK_IMPORTED_MODULE_15__["UsersGraphComponent"], _users_user_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_16__["UserPageComponent"], _users_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_17__["EditUserComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_18__["SideMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__["NotFoundComponent"], _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_21__["FeedbacksComponent"], _chat_panel_chat_panel_component__WEBPACK_IMPORTED_MODULE_22__["ChatPanelComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_23__["MapComponent"], _dashboard_spinner_dashboard_spinner_component__WEBPACK_IMPORTED_MODULE_24__["DashboardSpinnerComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"], _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_26__["UnderConstructionComponent"], _users_shorten_pipe__WEBPACK_IMPORTED_MODULE_27__["ShortenPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chat-panel/chat-panel.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/chat-panel/chat-panel.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatPanelChatPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtcGFuZWwvY2hhdC1wYW5lbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/chat-panel/chat-panel.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/chat-panel/chat-panel.component.ts ***!
    \****************************************************/

  /*! exports provided: ChatPanelComponent */

  /***/
  function srcAppChatPanelChatPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPanelComponent", function () {
      return ChatPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChatPanelComponent = /*#__PURE__*/function () {
      function ChatPanelComponent() {
        _classCallCheck(this, ChatPanelComponent);
      }

      _createClass(ChatPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatPanelComponent;
    }();

    ChatPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-panel/chat-panel.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-panel.component.css */
      "./src/app/chat-panel/chat-panel.component.css"))["default"]]
    })], ChatPanelComponent);
    /***/
  },

  /***/
  "./src/app/dashboard-spinner/dashboard-spinner.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/dashboard-spinner/dashboard-spinner.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardSpinnerDashboardSpinnerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@-webkit-keyframes ldio-s4dbmhxm5ps {\r\n  0% {\r\n    transform: translate(-50%, -50%) rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: translate(-50%, -50%) rotate(360deg);\r\n  }\r\n}\r\n@keyframes ldio-s4dbmhxm5ps {\r\n  0% {\r\n    transform: translate(-50%, -50%) rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: translate(-50%, -50%) rotate(360deg);\r\n  }\r\n}\r\n.ldio-s4dbmhxm5ps div {\r\n  position: absolute;\r\n  width: 120px;\r\n  height: 120px;\r\n  border: 20px solid #e15b64;\r\n  border-top-color: transparent;\r\n  border-radius: 50%;\r\n}\r\n.ldio-s4dbmhxm5ps div {\r\n  -webkit-animation: ldio-s4dbmhxm5ps 0.9803921568627451s linear infinite;\r\n          animation: ldio-s4dbmhxm5ps 0.9803921568627451s linear infinite;\r\n  top: 100px;\r\n  left: 100px;\r\n}\r\n.loadingio-spinner-rolling-gq23rjqpzpg {\r\n  width: 200px;\r\n  height: 200px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  background: none;\r\n}\r\n.ldio-s4dbmhxm5ps {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  transform: translateZ(0) scale(1);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transform-origin: 0 0; /* see note above */\r\n}\r\n.ldio-s4dbmhxm5ps div {\r\n  box-sizing: content-box;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLXNwaW5uZXIvZGFzaGJvYXJkLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsNkNBQTZDO0VBQy9DO0VBQ0E7SUFDRSwrQ0FBK0M7RUFDakQ7QUFDRjtBQVBBO0VBQ0U7SUFDRSw2Q0FBNkM7RUFDL0M7RUFDQTtJQUNFLCtDQUErQztFQUNqRDtBQUNGO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsdUVBQStEO1VBQS9ELCtEQUErRDtFQUMvRCxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixxQkFBcUIsRUFBRSxtQkFBbUI7QUFDNUM7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1zcGlubmVyL2Rhc2hib2FyZC1zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGxkaW8tczRkYm1oeG01cHMge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuLmxkaW8tczRkYm1oeG01cHMgZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYm9yZGVyOiAyMHB4IHNvbGlkICNlMTViNjQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5sZGlvLXM0ZGJtaHhtNXBzIGRpdiB7XHJcbiAgYW5pbWF0aW9uOiBsZGlvLXM0ZGJtaHhtNXBzIDAuOTgwMzkyMTU2ODYyNzQ1MXMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgbGVmdDogMTAwcHg7XHJcbn1cclxuLmxvYWRpbmdpby1zcGlubmVyLXJvbGxpbmctZ3EyM3JqcXB6cGcge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLmxkaW8tczRkYm1oeG01cHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7IC8qIHNlZSBub3RlIGFib3ZlICovXHJcbn1cclxuLmxkaW8tczRkYm1oeG01cHMgZGl2IHtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard-spinner/dashboard-spinner.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/dashboard-spinner/dashboard-spinner.component.ts ***!
    \******************************************************************/

  /*! exports provided: DashboardSpinnerComponent */

  /***/
  function srcAppDashboardSpinnerDashboardSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardSpinnerComponent", function () {
      return DashboardSpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardSpinnerComponent = /*#__PURE__*/function () {
      function DashboardSpinnerComponent() {
        _classCallCheck(this, DashboardSpinnerComponent);
      }

      _createClass(DashboardSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardSpinnerComponent;
    }();

    DashboardSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard-spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-spinner/dashboard-spinner.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard-spinner.component.css */
      "./src/app/dashboard-spinner/dashboard-spinner.component.css"))["default"]]
    })], DashboardSpinnerComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#background {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme.service */
    "./src/app/dashboard/theme.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(themeService) {
        _classCallCheck(this, DashboardComponent);

        this.themeService = themeService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            // browser supports 'prefers-color-scheme' media query
            var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            if (darkModeMediaQuery.matches === true) {
              // user use dark mode in his device
              this.themeService.changeTheme(true);
            } else {
              // user use dark mode in his light
              this.themeService.changeTheme(false);
            }
          } else {
            // browser doesn't support 'prefers-color-scheme' media query
            this.themeService.changeTheme(true);
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/theme.service.ts":
  /*!********************************************!*\
    !*** ./src/app/dashboard/theme.service.ts ***!
    \********************************************/

  /*! exports provided: ThemeService */

  /***/
  function srcAppDashboardThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ThemeService = /*#__PURE__*/function () {
      function ThemeService(document) {
        _classCallCheck(this, ThemeService);

        this.document = document;
      }

      _createClass(ThemeService, [{
        key: "getTheme",
        value: function getTheme() {
          // just return theme value, dark -> true & light -> false
          return this.makeItDark;
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(makeItDark) {
          // change theme value, makeItDark=true -> dark & makeItDark=false -> light
          this.makeItDark = makeItDark; // if user needs light use light file and same with dark

          if (this.makeItDark) {
            this.loadStyle('assets/css/dark.css');
          } else {
            this.loadStyle('assets/css/light.css');
          }
        }
      }, {
        key: "loadStyle",
        value: function loadStyle(styleName) {
          var head = this.document.getElementsByTagName('head')[0];
          var themeLink = this.document.getElementById('client-theme');

          if (themeLink) {
            themeLink.href = styleName;
          } else {
            var style = this.document.createElement('link');
            style.id = 'client-theme';
            style.rel = 'stylesheet';
            style.href = "".concat(styleName);
            head.appendChild(style);
          }
        }
      }]);

      return ThemeService;
    }();

    ThemeService.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], ThemeService);
    /***/
  },

  /***/
  "./src/app/feedbacks/feedback.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/feedbacks/feedback.model.ts ***!
    \*********************************************/

  /*! exports provided: Feedback */

  /***/
  function srcAppFeedbacksFeedbackModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Feedback", function () {
      return Feedback;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Feedback = // tslint:disable-next-line: max-line-length
    function Feedback(feedbackID, type, issueType, issueSolved, content, customerID, submissionDate) {
      _classCallCheck(this, Feedback);

      this.feedbackID = feedbackID;
      this.type = type;
      this.issueType = issueType;
      this.issueSolved = issueSolved;
      this.customerID = customerID;
      this.content = content;
      this.submissionDate = submissionDate;
    };
    /***/

  },

  /***/
  "./src/app/feedbacks/feedbacks.component.css":
  /*!***************************************************!*\
    !*** ./src/app/feedbacks/feedbacks.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeedbacksFeedbacksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table tr:hover td {\r\n    background-color: bisque;\r\n    color: darkblue;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2tzL2ZlZWRiYWNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9mZWVkYmFja3MvZmVlZGJhY2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB0cjpob3ZlciB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgfVxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/feedbacks/feedbacks.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/feedbacks/feedbacks.component.ts ***!
    \**************************************************/

  /*! exports provided: FeedbacksComponent */

  /***/
  function srcAppFeedbacksFeedbacksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbacksComponent", function () {
      return FeedbacksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _feedbacks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./feedbacks.service */
    "./src/app/feedbacks/feedbacks.service.ts");

    var FeedbacksComponent = /*#__PURE__*/function () {
      function FeedbacksComponent(feedbacksService) {
        _classCallCheck(this, FeedbacksComponent);

        this.feedbacksService = feedbacksService;
      }

      _createClass(FeedbacksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.feedbacks = this.feedbacksService.getAllFeedbacks();
          this.feedbacksService.feedbacksChanged.subscribe(function (users) {
            _this.feedbacks = users;
          });
        }
      }, {
        key: "goToFeedbackProfile",
        value: function goToFeedbackProfile() {}
      }]);

      return FeedbacksComponent;
    }();

    FeedbacksComponent.ctorParameters = function () {
      return [{
        type: _feedbacks_service__WEBPACK_IMPORTED_MODULE_2__["FeedbacksService"]
      }];
    };

    FeedbacksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feedbacks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedbacks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feedbacks/feedbacks.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedbacks.component.css */
      "./src/app/feedbacks/feedbacks.component.css"))["default"]]
    })], FeedbacksComponent);
    /***/
  },

  /***/
  "./src/app/feedbacks/feedbacks.service.ts":
  /*!************************************************!*\
    !*** ./src/app/feedbacks/feedbacks.service.ts ***!
    \************************************************/

  /*! exports provided: FeedbacksService */

  /***/
  function srcAppFeedbacksFeedbacksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbacksService", function () {
      return FeedbacksService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../users/users.service */
    "./src/app/users/users.service.ts");
    /* harmony import */


    var _feedback_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feedback.model */
    "./src/app/feedbacks/feedback.model.ts");

    var FeedbacksService = /*#__PURE__*/function () {
      function FeedbacksService(usersService) {
        _classCallCheck(this, FeedbacksService);

        this.usersService = usersService;
        this.feedbacks = [new _feedback_model__WEBPACK_IMPORTED_MODULE_3__["Feedback"](123, 'not categorized', 'none', false, 'this app is terrible', 912346, {
          year: 2020,
          month: 5,
          day: 3
        }), new _feedback_model__WEBPACK_IMPORTED_MODULE_3__["Feedback"](234, 'not categorized', 'none', false, 'this app is incredible', 912346, {
          year: 2020,
          month: 5,
          day: 3
        }), new _feedback_model__WEBPACK_IMPORTED_MODULE_3__["Feedback"](345, 'normal feedback', 'none', false, 'i hate my self', 657181, {
          year: 2020,
          month: 5,
          day: 3
        }), new _feedback_model__WEBPACK_IMPORTED_MODULE_3__["Feedback"](456, 'issue', 'carIssue', false, 'this app is perfect', 264795, {
          year: 2020,
          month: 5,
          day: 3
        })];
        this.feedbacksChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FeedbacksService, [{
        key: "getFeedbackOwner",
        value: function getFeedbackOwner(ownerID) {
          this.usersService.getUserByID(ownerID);
        }
      }, {
        key: "getAllFeedbacks",
        value: function getAllFeedbacks() {
          return this.feedbacks;
        }
      }, {
        key: "getFeedbackByID",
        value: function getFeedbackByID(feedbackID) {
          // tslint:disable-next-line: prefer-for-of
          for (var i = 0; i < this.feedbacks.length; i++) {
            if (this.feedbacks[i].feedbackID === feedbackID) {
              return this.feedbacks[i];
            }
          }
        }
      }, {
        key: "updateFeedbackByID",
        value: function updateFeedbackByID(feedbackID, changedFeedback) {
          // tslint:disable-next-line: prefer-for-of
          for (var i = 0; i < this.feedbacks.length; i++) {
            if (this.feedbacks[i].feedbackID === feedbackID) {
              this.feedbacks[i] = changedFeedback;
            }
          }
        }
      }]);

      return FeedbacksService;
    }();

    FeedbacksService.ctorParameters = function () {
      return [{
        type: _users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }];
    };

    FeedbacksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FeedbacksService);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/map/map.component.css":
  /*!***************************************!*\
    !*** ./src/app/map/map.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppMapMapComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent() {
        _classCallCheck(this, MapComponent);

        this.numberCanvasCoordinates = {
          canvasWidth: 0,
          canvasHeight: 0
        };
        this.canvasImages = {
          map: 'https://image.freepik.com/free-vector/colored-city-map-with-river-park_23-2148319224.jpg',
          endPoint: 'https://www.connectsafely.org/wp-content/uploads/Location-pin-1.png',
          startingPoint: 'https://lh3.googleusercontent.com/S8BDYwHyxKR9T1DupOmAhif21jqLLUkl6GGQrwIXQuV7jFlmBXEF6TCvkCUl9V1D2Q',
          currentLocation: 'https://play14.org/images/games/magic-triangles/01.png'
        };
        this.newX = 0;
        this.newY = 0;
        this.stopLoading = false;
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // TODO this will be set using input and property-binding -- just take a number and do the math to keep the dimensions
          this.numberCanvasCoordinates.canvasWidth = 1252;
          this.numberCanvasCoordinates.canvasHeight = 834;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.myCanvas.nativeElement.width = this.numberCanvasCoordinates.canvasWidth;
          this.myCanvas.nativeElement.height = this.numberCanvasCoordinates.canvasHeight;
          this.context = this.myCanvas.nativeElement.getContext('2d'); // TODO height and width of pin must be scaled with map not has fixed width and height
          // it put (0,0) of the image in the place you want
          // if you need to put pin in 100,75 and pin width is 30 and hight is 50
          // pin need to be drawImage(images.pin, 100-(30/2) , 75-50, 30, 50)

          this.loadingImages(this.canvasImages, function (images) {
            _this2.locationInterval = setInterval(function () {
              _this2.stopLoading = true;

              if (_this2.newX !== _this2.oldX || _this2.newY !== _this2.oldY) {
                _this2.context.clearRect(0, 0, _this2.numberCanvasCoordinates.canvasWidth, _this2.numberCanvasCoordinates.canvasHeight);

                _this2.context.drawImage(images.map, 0, 0, _this2.numberCanvasCoordinates.canvasWidth, _this2.numberCanvasCoordinates.canvasHeight);

                _this2.context.drawImage(images.endPoint, 839.5 - 100 / 2, 123 - 100, 100, 100);

                _this2.context.drawImage(images.startingPoint, 437.5 - 25, 399 - 25, 50, 50);

                _this2.context.drawImage(images.currentLocation, _this2.newX - 25, _this2.newY - 16.65, 50, 33.3);

                console.log('running');
                _this2.newX = _this2.oldX;
                _this2.newY = _this2.oldY;
              }
            }, 2000);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('destroy map');
          clearInterval(this.locationInterval);
        }
      }, {
        key: "getMousePosition",
        value: function getMousePosition(event) {
          console.log(event);
          var rect = this.myCanvas.nativeElement.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;
          console.log('Coordinate x: ' + x, 'Coordinate y: ' + y);
          this.newX = x;
          this.newY = y;
        }
      }, {
        key: "loadingImages",
        value: function loadingImages(canvasImages, callback) {
          var images = {};
          var imagesNumber = 0;
          var imagesCounter = 0; // tslint:disable-next-line: forin

          for (var image in canvasImages) {
            imagesNumber++;
          } // tslint:disable-next-line: forin


          for (var _image in canvasImages) {
            images[_image] = new Image();

            images[_image].onload = function () {
              if (++imagesCounter >= imagesNumber) {
                callback(images);
              }
            };

            images[_image].src = canvasImages[_image];
          }
        }
      }]);

      return MapComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas', {
      "static": false
    })], MapComponent.prototype, "myCanvas", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.css */
      "./src/app/map/map.component.css"))["default"]]
    })], MapComponent);
    /***/
  },

  /***/
  "./src/app/navbar/dark-light-toggle/dark-light-toggle.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/navbar/dark-light-toggle/dark-light-toggle.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarDarkLightToggleDarkLightToggleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* The switch - the box around the slider */\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n/* Hide default HTML checkbox */\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n/* The slider */\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #16202a;\r\n  transition: 0.4s;\r\n}\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: #dcc3c3;\r\n  transition: 0.4s;\r\n}\r\ninput:checked + .slider {\r\n  background-color: #efe4e4;\r\n}\r\ninput:checked + .slider:before {\r\n  transform: translateX(26px);\r\n}\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 30px;\r\n}\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL2RhcmstbGlnaHQtdG9nZ2xlL2RhcmstbGlnaHQtdG9nZ2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFFekIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFFekIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUdFLDJCQUEyQjtBQUM3QjtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL2RhcmstbGlnaHQtdG9nZ2xlL2RhcmstbGlnaHQtdG9nZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cclxuLnN3aXRjaCBpbnB1dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIFRoZSBzbGlkZXIgKi9cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MjAyYTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjZweDtcclxuICB3aWR0aDogMjZweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjYzNjMztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmU0ZTQ7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbn1cclxuXHJcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4uc2xpZGVyLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/navbar/dark-light-toggle/dark-light-toggle.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/navbar/dark-light-toggle/dark-light-toggle.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DarkLightToggleComponent */

  /***/
  function srcAppNavbarDarkLightToggleDarkLightToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DarkLightToggleComponent", function () {
      return DarkLightToggleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../dashboard/theme.service */
    "./src/app/dashboard/theme.service.ts");

    var DarkLightToggleComponent = /*#__PURE__*/function () {
      function DarkLightToggleComponent(themeService) {
        _classCallCheck(this, DarkLightToggleComponent);

        this.themeService = themeService;
      }

      _createClass(DarkLightToggleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // get theme value after if statement of 'prefers-color-scheme' in dashboard component
          this.makeItDark = this.themeService.getTheme();
        }
      }, {
        key: "toggleTheme",
        value: function toggleTheme() {
          this.makeItDark = !this.makeItDark;
          this.themeService.changeTheme(this.makeItDark);
        }
      }]);

      return DarkLightToggleComponent;
    }();

    DarkLightToggleComponent.ctorParameters = function () {
      return [{
        type: _dashboard_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
      }];
    };

    DarkLightToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar-dark-light-toggle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dark-light-toggle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/dark-light-toggle/dark-light-toggle.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dark-light-toggle.component.css */
      "./src/app/navbar/dark-light-toggle/dark-light-toggle.component.css"))["default"]]
    })], DarkLightToggleComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\r\n  -webkit-backdrop-filter: blur(20px) !important;\r\n          backdrop-filter: blur(20px) !important;\r\n  height: 52px;\r\n  background-color: rgba(5, 5, 16, 0.6) !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQXNDO1VBQXRDLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osZ0RBQWdEO0FBQ2xEIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCkgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCA1LCAxNiwgMC42KSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/navbar/notifications/notifications.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/navbar/notifications/notifications.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNotificationsNotificationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#notificationButton {\r\n  cursor: pointer;\r\n}\r\n\r\n.closedFill1 {\r\n  fill: #efe4e4;\r\n}\r\n\r\n.closedFill2 {\r\n  fill: #dcc3c3;\r\n}\r\n\r\n.openedFill1 {\r\n  fill: #dcc3c3;\r\n}\r\n\r\n.openedFill2 {\r\n  fill: #efe4e4;\r\n}\r\n\r\n#SquareOne {\r\n  fill: #efe4e4;\r\n}\r\n\r\n#SquareTwo {\r\n  fill: #dcc3c3;\r\n}\r\n\r\n#SquareThree {\r\n  fill: #dcc3c3;\r\n}\r\n\r\n#SquareFour {\r\n  fill: #efe4e4;\r\n}\r\n\r\n#notificationsDiv {\r\n  border-left: 2px solid #050510;\r\n  position: fixed;\r\n  top: 52px;\r\n  right: 0;\r\n  width: 20vw;\r\n  display: none;\r\n  max-width: 300px;\r\n}\r\n\r\n.notificationTopic {\r\n  font-weight: bolder;\r\n  border-bottom: #16202a solid 2px;\r\n  color: #dcc3c3;\r\n}\r\n\r\n.notificationContent {\r\n  border-bottom: #16202a solid 2px;\r\n  color: #dcc3c3;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jbm90aWZpY2F0aW9uQnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZWRGaWxsMSB7XHJcbiAgZmlsbDogI2VmZTRlNDtcclxufVxyXG4uY2xvc2VkRmlsbDIge1xyXG4gIGZpbGw6ICNkY2MzYzM7XHJcbn1cclxuLm9wZW5lZEZpbGwxIHtcclxuICBmaWxsOiAjZGNjM2MzO1xyXG59XHJcbi5vcGVuZWRGaWxsMiB7XHJcbiAgZmlsbDogI2VmZTRlNDtcclxufVxyXG5cclxuI1NxdWFyZU9uZSB7XHJcbiAgZmlsbDogI2VmZTRlNDtcclxufVxyXG4jU3F1YXJlVHdvIHtcclxuICBmaWxsOiAjZGNjM2MzO1xyXG59XHJcbiNTcXVhcmVUaHJlZSB7XHJcbiAgZmlsbDogI2RjYzNjMztcclxufVxyXG4jU3F1YXJlRm91ciB7XHJcbiAgZmlsbDogI2VmZTRlNDtcclxufVxyXG5cclxuI25vdGlmaWNhdGlvbnNEaXYge1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzA1MDUxMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MnB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvblRvcGljIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGJvcmRlci1ib3R0b206ICMxNjIwMmEgc29saWQgMnB4O1xyXG4gIGNvbG9yOiAjZGNjM2MzO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uQ29udGVudCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogIzE2MjAyYSBzb2xpZCAycHg7XHJcbiAgY29sb3I6ICNkY2MzYzM7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/navbar/notifications/notifications.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/navbar/notifications/notifications.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppNavbarNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationsComponent = /*#__PURE__*/function () {
      function NotificationsComponent() {
        _classCallCheck(this, NotificationsComponent);

        this.buttonColorsClass1 = {
          closedFill1: true,
          openedFill1: false
        };
        this.buttonColorsClass2 = {
          closedFill2: true,
          openedFill2: false
        };
      }

      _createClass(NotificationsComponent, [{
        key: "divOpen",
        value: function divOpen() {
          var notificationsDivState = document.getElementById('notificationsDiv').style.display;

          if (notificationsDivState === 'none' || notificationsDivState === '') {
            document.getElementById('notificationsDiv').style.display = 'block';
            this.buttonColorsClass1.closedFill1 = false;
            this.buttonColorsClass1.openedFill1 = true;
            this.buttonColorsClass2.closedFill2 = false;
            this.buttonColorsClass2.openedFill2 = true;
          } else if (notificationsDivState === 'block') {
            document.getElementById('notificationsDiv').style.display = 'none';
            this.buttonColorsClass1.closedFill1 = true;
            this.buttonColorsClass1.openedFill1 = false;
            this.buttonColorsClass2.closedFill2 = true;
            this.buttonColorsClass2.openedFill2 = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var viewportHeight = window.innerHeight;
          var notificationsDivHeight = viewportHeight - 52;
          document.getElementById('notificationsDiv').style.height = notificationsDivHeight.toString() + 'px';
        }
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/notifications/notifications.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.css */
      "./src/app/navbar/notifications/notifications.component.css"))["default"]]
    })], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/navbar/profile-picture/profile-picture.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/navbar/profile-picture/profile-picture.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarProfilePictureProfilePictureComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/navbar/profile-picture/profile-picture.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/navbar/profile-picture/profile-picture.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProfilePictureComponent */

  /***/
  function srcAppNavbarProfilePictureProfilePictureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePictureComponent", function () {
      return ProfilePictureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfilePictureComponent = /*#__PURE__*/function () {
      function ProfilePictureComponent() {
        _classCallCheck(this, ProfilePictureComponent);
      }

      _createClass(ProfilePictureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfilePictureComponent;
    }();

    ProfilePictureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar-profile-picture',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-picture.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/profile-picture/profile-picture.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-picture.component.css */
      "./src/app/navbar/profile-picture/profile-picture.component.css"))["default"]]
    })], ProfilePictureComponent);
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.css":
  /*!***************************************************!*\
    !*** ./src/app/not-found/not-found.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/not-found/not-found.component.css"))["default"]]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/side-menu/side-menu.component.css":
  /*!***************************************************!*\
    !*** ./src/app/side-menu/side-menu.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSideMenuSideMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\r\n  position: fixed;\r\n  height: 90vh;\r\n  width: 17%;\r\n  border-radius: 10px;\r\n}\r\n.btn-primary {\r\n  background-color: #909090;\r\n  border-color: #909090;\r\n}\r\n.activeLink {\r\n  background-color: #3ea6ff;\r\n  border-color: #3ea6ff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIHdpZHRoOiAxNyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDkwOTA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOTA5MDkwO1xyXG59XHJcbi5hY3RpdmVMaW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2VhNmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzNlYTZmZjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/side-menu/side-menu.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/side-menu/side-menu.component.ts ***!
    \**************************************************/

  /*! exports provided: SideMenuComponent */

  /***/
  function srcAppSideMenuSideMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function () {
      return SideMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SideMenuComponent = /*#__PURE__*/function () {
      function SideMenuComponent() {
        _classCallCheck(this, SideMenuComponent);
      }

      _createClass(SideMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SideMenuComponent;
    }();

    SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/side-menu/side-menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-menu.component.css */
      "./src/app/side-menu/side-menu.component.css"))["default"]]
    })], SideMenuComponent);
    /***/
  },

  /***/
  "./src/app/under-construction/under-construction.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/under-construction/under-construction.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUnderConstructionUnderConstructionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centered {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  /* bring your own prefixes */\r\n  transform: translate(-50%, -50%);\r\n}\r\nimg {\r\n  display: block;\r\n  width: 30%;\r\n  height: auto;\r\n  margin: auto;\r\n}\r\n@media only screen and (max-width: 800px) {\r\n  img {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5kZXItY29uc3RydWN0aW9uL3VuZGVyLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdW5kZXItY29uc3RydWN0aW9uL3VuZGVyLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/under-construction/under-construction.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/under-construction/under-construction.component.ts ***!
    \********************************************************************/

  /*! exports provided: UnderConstructionComponent */

  /***/
  function srcAppUnderConstructionUnderConstructionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function () {
      return UnderConstructionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UnderConstructionComponent = /*#__PURE__*/function () {
      function UnderConstructionComponent() {
        _classCallCheck(this, UnderConstructionComponent);
      }

      _createClass(UnderConstructionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UnderConstructionComponent;
    }();

    UnderConstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-under-construction',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./under-construction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/under-construction/under-construction.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./under-construction.component.css */
      "./src/app/under-construction/under-construction.component.css"))["default"]]
    })], UnderConstructionComponent);
    /***/
  },

  /***/
  "./src/app/users/shorten.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/users/shorten.pipe.ts ***!
    \***************************************/

  /*! exports provided: ShortenPipe */

  /***/
  function srcAppUsersShortenPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShortenPipe", function () {
      return ShortenPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShortenPipe = /*#__PURE__*/function () {
      function ShortenPipe() {
        _classCallCheck(this, ShortenPipe);
      }

      _createClass(ShortenPipe, [{
        key: "transform",
        value: function transform(value, limit) {
          if (value.length > limit) {
            return value.substr(0, limit) + '...';
          }

          return value;
        }
      }]);

      return ShortenPipe;
    }();

    ShortenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'shorten'
    })], ShortenPipe);
    /***/
  },

  /***/
  "./src/app/users/user.model.ts":
  /*!*************************************!*\
    !*** ./src/app/users/user.model.ts ***!
    \*************************************/

  /*! exports provided: User, UserْX */

  /***/
  function srcAppUsersUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserْX", function () {
      return UserْX;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = // will get also numberOfRides - numberOfIssue
    // tslint:disable-next-line: max-line-length
    function User(userID, username, state, email, country, city, dateOfBirth, age, wallet, address, phone, creditCard, cvv, expirationDate, usedOffer, registered) {
      _classCallCheck(this, User);

      this.userID = userID;
      this.username = username;
      this.state = state;
      this.email = email;
      this.country = country;
      this.city = city;
      this.dateOfBirth = dateOfBirth;
      this.age = age;
      this.wallet = wallet;
      this.address = address;
      this.phone = phone;
      this.creditCard = creditCard;
      this.cvv = cvv;
      this.usedOffer = usedOffer;
      this.expirationDate = expirationDate;
      this.registered = registered;
    };

    var UserْX = function UserْX() {
      _classCallCheck(this, UserْX);
    };
    /***/

  },

  /***/
  "./src/app/users/user/edit-user/edit-user.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/users/user/edit-user/edit-user.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUserEditUserEditUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXIvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/users/user/edit-user/edit-user.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/users/user/edit-user/edit-user.component.ts ***!
    \*************************************************************/

  /*! exports provided: EditUserComponent */

  /***/
  function srcAppUsersUserEditUserEditUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserComponent", function () {
      return EditUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../users.service */
    "./src/app/users/users.service.ts");

    var EditUserComponent = /*#__PURE__*/function () {
      function EditUserComponent(route, router, usersService) {
        _classCallCheck(this, EditUserComponent);

        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.changesIsSaved = false;
      }

      _createClass(EditUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var userID = Number(this.route.snapshot.params.id);
          this.user = this.usersService.getUserByID(userID);
          this.route.params.subscribe(function (params) {
            userID = Number(params.id);
            _this3.user = _this3.usersService.getUserByID(userID);
          });
        }
      }, {
        key: "updateUserData",
        value: function updateUserData() {
          console.log(this.user);
          var userID = Number(this.route.snapshot.params.id);
          this.usersService.updateUserByID(userID, this.user);
          this.changesIsSaved = true;
          this.router.navigate(['../'], {
            relativeTo: this.route
          });
        }
      }]);

      return EditUserComponent;
    }();

    EditUserComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }];
    };

    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/edit-user/edit-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-user.component.css */
      "./src/app/users/user/edit-user/edit-user.component.css"))["default"]]
    })], EditUserComponent);
    /***/
  },

  /***/
  "./src/app/users/user/user-page/user-page.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/users/user/user-page/user-page.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUserUserPageUserPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  color: blanchedalmond;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2VyL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/users/user/user-page/user-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/users/user/user-page/user-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserPageComponent */

  /***/
  function srcAppUsersUserUserPageUserPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageComponent", function () {
      return UserPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../users.service */
    "./src/app/users/users.service.ts");

    var UserPageComponent = /*#__PURE__*/function () {
      function UserPageComponent(route, usersService) {
        _classCallCheck(this, UserPageComponent);

        this.route = route;
        this.usersService = usersService;
      }

      _createClass(UserPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var userID = Number(this.route.snapshot.params.id);
          this.user = this.usersService.getUserByID(userID);
          this.route.params.subscribe(function (params) {
            userID = Number(params.id);
            _this4.user = _this4.usersService.getUserByID(userID);
          });
        }
      }]);

      return UserPageComponent;
    }();

    UserPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }];
    };

    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/user-page/user-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-page.component.css */
      "./src/app/users/user/user-page/user-page.component.css"))["default"]]
    })], UserPageComponent);
    /***/
  },

  /***/
  "./src/app/users/users-graph/users-graph.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/users/users-graph/users-graph.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersGraphUsersGraphComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWdyYXBoL3VzZXJzLWdyYXBoLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/users-graph/users-graph.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/users/users-graph/users-graph.component.ts ***!
    \************************************************************/

  /*! exports provided: UsersGraphComponent */

  /***/
  function srcAppUsersUsersGraphUsersGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersGraphComponent", function () {
      return UsersGraphComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UsersGraphComponent = /*#__PURE__*/function () {
      function UsersGraphComponent() {
        _classCallCheck(this, UsersGraphComponent);
      }

      _createClass(UsersGraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.handlingGraphDesign(this.finalCounter);
        }
      }, {
        key: "handlingGraphDesign",
        value: function handlingGraphDesign(finalCounter) {
          // function to change graph values
          this.lineChartData = [{
            data: finalCounter,
            label: 'Register Per Month'
          }];
          this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            borderColor: 'black',
            backgroundColor: 'rgba(255,255,0,0.28)'
          }];
          this.lineChartLegend = true;
          this.lineChartPlugins = [];
          this.lineChartType = 'line';
        }
      }]);

      return UsersGraphComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsersGraphComponent.prototype, "finalCounter", void 0);
    UsersGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-graph',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users-graph.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-graph/users-graph.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users-graph.component.css */
      "./src/app/users/users-graph/users-graph.component.css"))["default"]]
    })], UsersGraphComponent);
    /***/
  },

  /***/
  "./src/app/users/users-table/users-table.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/users/users-table/users-table.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersTableUsersTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table tr:hover td {\r\n  background-color: bisque;\r\n  color: darkblue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMtdGFibGUvdXNlcnMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlcnMtdGFibGUvdXNlcnMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRyOmhvdmVyIHRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/users/users-table/users-table.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/users/users-table/users-table.component.ts ***!
    \************************************************************/

  /*! exports provided: UsersTableComponent */

  /***/
  function srcAppUsersUsersTableUsersTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersTableComponent", function () {
      return UsersTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UsersTableComponent = /*#__PURE__*/function () {
      function UsersTableComponent(router, route) {
        _classCallCheck(this, UsersTableComponent);

        this.router = router;
        this.route = route;
      }

      _createClass(UsersTableComponent, [{
        key: "userProfile",
        value: function userProfile(user) {
          console.log(user.userID);
          this.router.navigate([user.userID], {
            relativeTo: this.route
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UsersTableComponent;
    }();

    UsersTableComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsersTableComponent.prototype, "users", void 0);
    UsersTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-table/users-table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users-table.component.css */
      "./src/app/users/users-table/users-table.component.css"))["default"]]
    })], UsersTableComponent);
    /***/
  },

  /***/
  "./src/app/users/users.component.css":
  /*!*******************************************!*\
    !*** ./src/app/users/users.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table tr:hover td {\r\n  background-color: bisque;\r\n  color: darkblue;\r\n}\r\n\r\n.informationCardNumber {\r\n  background-color: white;\r\n  border-radius: 10px 10px 0 0;\r\n  text-align: center;\r\n}\r\n\r\n.informationCardName {\r\n  border-radius: 0 0 10px 10px;\r\n  background-color: whitesmoke;\r\n  text-align: center;\r\n}\r\n\r\nlabel {\r\n  color: bisque;\r\n}\r\n\r\nlabel select {\r\n  background-color: transparent;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  color: bisque;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  border: none;\r\n  text-align: left;\r\n  padding: 0;\r\n}\r\n\r\nlabel select option {\r\n  color: black;\r\n}\r\n\r\nlabel select:focus {\r\n  border: none;\r\n  color: bisque;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\nlabel select:active {\r\n  border: none;\r\n  color: bisque;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\nlabel select:default {\r\n  border: none;\r\n  color: bisque;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQTBDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRyOmhvdmVyIHRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb25DYXJkTnVtYmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5mb3JtYXRpb25DYXJkTmFtZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiBiaXNxdWU7XHJcbn1cclxuXHJcbmxhYmVsIHNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGNvbG9yOiBiaXNxdWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxubGFiZWwgc2VsZWN0IG9wdGlvbiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5sYWJlbCBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogYmlzcXVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5sYWJlbCBzZWxlY3Q6YWN0aXZlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IGJpc3F1ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxubGFiZWwgc2VsZWN0OmRlZmF1bHQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogYmlzcXVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./users.service */
    "./src/app/users/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(usersService, router, route) {
        _classCallCheck(this, UsersComponent);

        this.usersService = usersService;
        this.router = router;
        this.route = route;
        this.users = [];
        this.usersStates = {
          active: 0,
          panned: 0
        };
        this.finalCounter = new Array(12); // array with numbers of months duplicates

        this.selectForSearch = 'name';
        this.selectForFilter = 'date';
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.usersService.getAllUsers().subscribe(function (users) {
            _this5.users = users;

            _this5.handlingGraphData();

            _this5.gettingUsersStates();
          }); // this.usersService.usersChanged.subscribe(
          //   (users: User[]) => {
          //     this.users = users;
          //     this.handlingGraphData();
          //     this.gettingUsersStates();
          //   }
          // );
        }
      }, {
        key: "postUser",
        value: function postUser() {
          // remove this method after removing its button in the UI
          this.usersService.postUser();
        }
      }, {
        key: "handlingGraphData",
        value: function handlingGraphData() {
          var _this6 = this;

          // function to initialize graph data
          var months = []; // all months that has users registered in

          this.users.forEach(function (user) {
            console.log(user.registered);
            console.log(typeof user.registered);
            months.push(user.registered.getMonth() + 1);
          });
          months.forEach(function (month) {
            if (_this6.finalCounter[month - 1] === undefined) {
              _this6.finalCounter[month - 1] = 1;
            } else {
              _this6.finalCounter[month - 1] += 1;
            }
          });

          for (var i = 0; i < this.finalCounter.length; i++) {
            if (this.finalCounter[i] === undefined) {
              this.finalCounter[i] = 0;
            }
          }
        }
      }, {
        key: "gettingUsersStates",
        value: function gettingUsersStates() {
          var _this7 = this;

          this.users.forEach(function (user) {
            if (user.userState === true) {
              _this7.usersStates.active += 1;
            }

            if (user.pannedState === true) {
              _this7.usersStates.panned += 1;
            }
          });
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.css */
      "./src/app/users/users.component.css"))["default"]]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/app/users/users.service.ts":
  /*!****************************************!*\
    !*** ./src/app/users/users.service.ts ***!
    \****************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppUsersUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.model */
    "./src/app/users/user.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UsersService = /*#__PURE__*/function () {
      function UsersService(http) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.users = [new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](912346, 'Mahmoud Samy', 'none', 'mahmoudsamy50@outlook.com', 'Egypt', 'tanta', '22 / 10 / 1996', 23, 2324286382527, 'El-Galaa', '01019111816', 'Visa', 23720972472042, '22/10/2025', {
          offerCount: 5,
          offers: ['offer1', 'offer2']
        }, {
          year: 2018,
          month: 3,
          day: 12
        }), new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](197564, 'Mahmoud Samy', 'none', 'mahmoudsamy50@outlook.com', 'Egypt', 'tanta', '22 / 10 / 1996', 23, 2324286382527, 'El-Galaa', '01019111816', 'Visa', 23720972472042, '22/10/2025', {
          offerCount: 5,
          offers: ['offer1', 'offer2']
        }, {
          year: 2018,
          month: 4,
          day: 12
        }), new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](654791, 'Mahmoud Samy', 'none', 'mahmoudsamy50@outlook.com', 'Egypt', 'tanta', '22 / 10 / 1996', 23, 2324286382527, 'El-Galaa', '01019111816', 'Visa', 23720972472042, '22/10/2025', {
          offerCount: 5,
          offers: ['offer1', 'offer2']
        }, {
          year: 2018,
          month: 3,
          day: 12
        }), new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](347951, 'Mahmoud Samy', 'none', 'mahmoudsamy50@outlook.com', 'Egypt', 'tanta', '22 / 10 / 1996', 23, 2324286382527, 'El-Galaa', '01019111816', 'Visa', 23720972472042, '22/10/2025', {
          offerCount: 5,
          offers: ['offer1', 'offer2']
        }, {
          year: 2018,
          month: 8,
          day: 12
        }), new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](264795, 'Mahmoud Samy', 'none', 'mahmoudsamy50@outlook.com', 'Egypt', 'tanta', '22 / 10 / 1996', 23, 2324286382527, 'El-Galaa', '01019111816', 'Visa', 23720972472042, '22/10/2025', {
          offerCount: 5,
          offers: ['offer1', 'offer2']
        }, {
          year: 2018,
          month: 5,
          day: 12
        }), new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](657181, 'Mahmoud Samy', 'panned', 'mahmoudsamy50@outlook.com', 'Egypt', 'tanta', '22 / 10 / 1996', 23, 2324286382527, 'El-Galaa', '01019111816', 'Visa', 23720972472042, '22/10/2025', {
          offerCount: 5,
          offers: ['offer1', 'offer2']
        }, {
          year: 2018,
          month: 8,
          day: 12
        }), new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](758477, 'Mahmoud Samy', 'active', 'mahmoudsamy50@outlook.com', 'Egypt', 'tanta', '22 / 10 / 1996', 23, 2324286382527, 'El-Galaa', '01019111816', 'Visa', 23720972472042, '22/10/2025', {
          offerCount: 5,
          offers: ['offer1', 'offer2']
        }, {
          year: 2018,
          month: 12,
          day: 12
        })];
        this.usersChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(UsersService, [{
        key: "randomTrueFalse",
        value: function randomTrueFalse() {
          // TODO useless function - remove it after removing user constant in postUser function
          if (Math.round(Math.random() * 10) / 2 >= 5) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "postUser",
        value: function postUser() {
          // TODO this function in just for creation of firebase database so delete it after that
          var user = {
            firstName: 'Mahmoud',
            lastName: 'Samy',
            email: 'mahmoudSamy50@outlook.com',
            country: 'Egypt',
            city: 'Tanta',
            age: Math.round(Math.random() * 100),
            wallet: Math.round(Math.random() * 1000),
            phone: Math.round(Math.random() * 100000000000),
            numberOfOffers: Math.round(Math.random() * 10),
            numberOfRides: Math.round(Math.random() * 100),
            numberOfIssue: Math.round(Math.random() * 10),
            userState: this.randomTrueFalse(),
            pannedState: this.randomTrueFalse(),
            registered: new Date()
          };
          this.http.post('https://taxi-graduation-project.firebaseio.com/users.json', user).subscribe(function (data) {
            return console.log(data);
          });
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          // console.log(JSON.stringify(this.users));
          return this.http.get('https://taxi-graduation-project.firebaseio.com/users.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (usersStream) {
            var usersArray = []; // tslint:disable-next-line: forin

            for (var userID in usersStream) {
              usersArray.push(Object.assign({}, usersStream[userID], {
                id: userID
              }));
            }

            return usersArray;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (usersArray) {
            usersArray.forEach(function (user) {
              // data came as string so we need to convert it to date object
              user.registered = new Date(user.registered);
            });
            return usersArray;
          })); // return this.users;
        }
      }, {
        key: "getUserByID",
        value: function getUserByID(id) {
          // tslint:disable-next-line: prefer-for-of
          for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].userID === id) {
              return this.users[i];
            }
          }
        }
      }, {
        key: "updateUserByID",
        value: function updateUserByID(id, user) {
          // tslint:disable-next-line: prefer-for-of
          for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].userID === id) {
              this.users[i] = user;
            }
          }
        }
      }]);

      return UsersService;
    }();

    UsersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsersService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
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
    /*! C:\Users\Ibn Samy\Desktop\Taxi-Dashboard\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map