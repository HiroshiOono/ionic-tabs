(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 4987:
/*!************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-options.interface.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=banner-ad-options.interface.js.map

/***/ }),

/***/ 9794:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-plugin-events.enum.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerAdPluginEvents": () => (/* binding */ BannerAdPluginEvents)
/* harmony export */ });
// This enum should be keep in sync with their native equivalents with the same name
var BannerAdPluginEvents;
(function (BannerAdPluginEvents) {
    BannerAdPluginEvents["SizeChanged"] = "bannerAdSizeChanged";
    BannerAdPluginEvents["Loaded"] = "bannerAdLoaded";
    BannerAdPluginEvents["FailedToLoad"] = "bannerAdFailedToLoad";
    /**
     * Open "Adsense" Event after user click banner
     */
    BannerAdPluginEvents["Opened"] = "bannerAdOpened";
    /**
     * Close "Adsense" Event after user click banner
     */
    BannerAdPluginEvents["Closed"] = "bannerAdClosed";
    /**
     * Similarly, this method should be called when an impression is recorded for the ad by the mediated SDK.
     */
    BannerAdPluginEvents["AdImpression"] = "bannerAdImpression";
})(BannerAdPluginEvents || (BannerAdPluginEvents = {}));
//# sourceMappingURL=banner-ad-plugin-events.enum.js.map

/***/ }),

/***/ 378:
/*!********************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-position.enum.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerAdPosition": () => (/* binding */ BannerAdPosition)
/* harmony export */ });
/**
 * @see https://developer.android.com/reference/android/widget/LinearLayout#attr_android:gravity
 */
var BannerAdPosition;
(function (BannerAdPosition) {
    /**
     * Banner position be top-center
     */
    BannerAdPosition["TOP_CENTER"] = "TOP_CENTER";
    /**
     * Banner position be center
     */
    BannerAdPosition["CENTER"] = "CENTER";
    /**
     * Banner position be bottom-center(default)
     */
    BannerAdPosition["BOTTOM_CENTER"] = "BOTTOM_CENTER";
})(BannerAdPosition || (BannerAdPosition = {}));
//# sourceMappingURL=banner-ad-position.enum.js.map

/***/ }),

/***/ 1592:
/*!****************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-size.enum.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerAdSize": () => (/* binding */ BannerAdSize)
/* harmony export */ });
/**
 *  For more information:
 *  https://developers.google.com/admob/ios/banner#banner_sizes
 *  https://developers.google.com/android/reference/com/google/android/gms/ads/AdSize
 *
 * */
var BannerAdSize;
(function (BannerAdSize) {
    /**
     * Mobile Marketing Association (MMA)
     * banner ad size (320x50 density-independent pixels).
     */
    BannerAdSize["BANNER"] = "BANNER";
    /**
     * Interactive Advertising Bureau (IAB)
     * full banner ad size (468x60 density-independent pixels).
     */
    BannerAdSize["FULL_BANNER"] = "FULL_BANNER";
    /**
     * Large banner ad size (320x100 density-independent pixels).
     */
    BannerAdSize["LARGE_BANNER"] = "LARGE_BANNER";
    /**
     * Interactive Advertising Bureau (IAB)
     * medium rectangle ad size (300x250 density-independent pixels).
     */
    BannerAdSize["MEDIUM_RECTANGLE"] = "MEDIUM_RECTANGLE";
    /**
     * Interactive Advertising Bureau (IAB)
     * leaderboard ad size (728x90 density-independent pixels).
     */
    BannerAdSize["LEADERBOARD"] = "LEADERBOARD";
    /**
     * A dynamically sized banner that is full-width and auto-height.
     */
    BannerAdSize["ADAPTIVE_BANNER"] = "ADAPTIVE_BANNER";
    /**
     * @deprecated
     * Will be removed in next AdMob versions use `ADAPTIVE_BANNER`
     * Screen width x 32|50|90
     */
    BannerAdSize["SMART_BANNER"] = "SMART_BANNER";
})(BannerAdSize || (BannerAdSize = {}));
//# sourceMappingURL=banner-ad-size.enum.js.map

/***/ }),

/***/ 658:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-definitions.interface.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=banner-definitions.interface.js.map

/***/ }),

/***/ 7245:
/*!******************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-size.interface.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=banner-size.interface.js.map

/***/ }),

/***/ 6457:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerAdPluginEvents": () => (/* reexport safe */ _banner_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_1__.BannerAdPluginEvents),
/* harmony export */   "BannerAdPosition": () => (/* reexport safe */ _banner_ad_position_enum__WEBPACK_IMPORTED_MODULE_2__.BannerAdPosition),
/* harmony export */   "BannerAdSize": () => (/* reexport safe */ _banner_ad_size_enum__WEBPACK_IMPORTED_MODULE_3__.BannerAdSize)
/* harmony export */ });
/* harmony import */ var _banner_ad_options_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner-ad-options.interface */ 4987);
/* harmony import */ var _banner_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner-ad-plugin-events.enum */ 9794);
/* harmony import */ var _banner_ad_position_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner-ad-position.enum */ 378);
/* harmony import */ var _banner_ad_size_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner-ad-size.enum */ 1592);
/* harmony import */ var _banner_definitions_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner-definitions.interface */ 658);
/* harmony import */ var _banner_size_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banner-size.interface */ 7245);






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4653:
/*!*************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/definitions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxAdContentRating": () => (/* binding */ MaxAdContentRating)
/* harmony export */ });
var MaxAdContentRating;
(function (MaxAdContentRating) {
    /**
     * Content suitable for general audiences, including families.
     */
    MaxAdContentRating["General"] = "General";
    /**
     * Content suitable for most audiences with parental guidance.
     */
    MaxAdContentRating["ParentalGuidance"] = "ParentalGuidance";
    /**
     * Content suitable for teen and older audiences.
     */
    MaxAdContentRating["Teen"] = "Teen";
    /**
     * Content suitable only for mature audiences.
     */
    MaxAdContentRating["MatureAudience"] = "MatureAudience";
})(MaxAdContentRating || (MaxAdContentRating = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 5453:
/*!*******************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxAdContentRating": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.MaxAdContentRating),
/* harmony export */   "BannerAdPluginEvents": () => (/* reexport safe */ _banner_index__WEBPACK_IMPORTED_MODULE_2__.BannerAdPluginEvents),
/* harmony export */   "BannerAdPosition": () => (/* reexport safe */ _banner_index__WEBPACK_IMPORTED_MODULE_2__.BannerAdPosition),
/* harmony export */   "BannerAdSize": () => (/* reexport safe */ _banner_index__WEBPACK_IMPORTED_MODULE_2__.BannerAdSize),
/* harmony export */   "InterstitialAdPluginEvents": () => (/* reexport safe */ _interstitial_index__WEBPACK_IMPORTED_MODULE_3__.InterstitialAdPluginEvents),
/* harmony export */   "RewardAdPluginEvents": () => (/* reexport safe */ _reward_index__WEBPACK_IMPORTED_MODULE_4__.RewardAdPluginEvents),
/* harmony export */   "AdMob": () => (/* binding */ AdMob)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4653);
/* harmony import */ var _banner_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/index */ 6457);
/* harmony import */ var _interstitial_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interstitial/index */ 2665);
/* harmony import */ var _reward_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reward/index */ 5323);
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/index */ 6485);

const AdMob = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('AdMob', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_admob_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 5494)).then(m => new m.AdMobWeb()),
});






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2665:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/interstitial/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterstitialAdPluginEvents": () => (/* reexport safe */ _interstitial_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_0__.InterstitialAdPluginEvents)
/* harmony export */ });
/* harmony import */ var _interstitial_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interstitial-ad-plugin-events.enum */ 9237);
/* harmony import */ var _interstitial_definitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interstitial-definitions.interface */ 939);


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9237:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/interstitial/interstitial-ad-plugin-events.enum.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterstitialAdPluginEvents": () => (/* binding */ InterstitialAdPluginEvents)
/* harmony export */ });
// This enum should be keep in sync with their native equivalents with the same name
var InterstitialAdPluginEvents;
(function (InterstitialAdPluginEvents) {
    /**
     * Emits after trying to prepare and Interstitial, when it is loaded and ready to be show
     */
    InterstitialAdPluginEvents["Loaded"] = "interstitialAdLoaded";
    /**
     * Emits after trying to prepare and Interstitial, when it could not be loaded
     */
    InterstitialAdPluginEvents["FailedToLoad"] = "interstitialAdFailedToLoad";
    /**
     * Emits when the Interstitial ad is visible to the user
     */
    InterstitialAdPluginEvents["Showed"] = "interstitialAdShowed";
    /**
     * Emits when the Interstitial ad is failed to show
     */
    InterstitialAdPluginEvents["FailedToShow"] = "interstitialAdFailedToShow";
    /**
     * Emits when the Interstitial ad is not visible to the user anymore.
     */
    InterstitialAdPluginEvents["Dismissed"] = "interstitialAdDismissed";
})(InterstitialAdPluginEvents || (InterstitialAdPluginEvents = {}));
//# sourceMappingURL=interstitial-ad-plugin-events.enum.js.map

/***/ }),

/***/ 939:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/interstitial/interstitial-definitions.interface.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interstitial-definitions.interface.js.map

/***/ }),

/***/ 5323:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/reward/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardAdPluginEvents": () => (/* reexport safe */ _reward_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_0__.RewardAdPluginEvents)
/* harmony export */ });
/* harmony import */ var _reward_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-ad-plugin-events.enum */ 6537);
/* harmony import */ var _reward_definitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-definitions.interface */ 555);
/* harmony import */ var _reward_item_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reward-item.interface */ 6650);
/* harmony import */ var _reward_ad_options_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reward-ad-options.interface */ 1980);




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1980:
/*!************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/reward/reward-ad-options.interface.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=reward-ad-options.interface.js.map

/***/ }),

/***/ 6537:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/reward/reward-ad-plugin-events.enum.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardAdPluginEvents": () => (/* binding */ RewardAdPluginEvents)
/* harmony export */ });
// This enum should be keep in sync with their native equivalents with the same name
var RewardAdPluginEvents;
(function (RewardAdPluginEvents) {
    /**
     * Emits after trying to prepare a RewardAd and the Video is loaded and ready to be show
     */
    RewardAdPluginEvents["Loaded"] = "onRewardedVideoAdLoaded";
    /**
     * Emits after trying to prepare a RewardAd when it could not be loaded
     */
    RewardAdPluginEvents["FailedToLoad"] = "onRewardedVideoAdFailedToLoad";
    /**
     * Emits when the AdReward video is visible to the user
     */
    RewardAdPluginEvents["Showed"] = "onRewardedVideoAdShowed";
    /**
     * Emits when the AdReward video is failed to show
     */
    RewardAdPluginEvents["FailedToShow"] = "onRewardedVideoAdFailedToShow";
    /**
     * Emits when the AdReward video is not visible to the user anymore.
     *
     * **Important**: This has nothing to do with the reward it self. This event
     * will emits in this two cases:
     * 1. The user starts the video ad but close it before the reward emit.
     * 2. The user start the video and see it until end, then gets the reward
     * and after that the ad is closed.
     */
    RewardAdPluginEvents["Dismissed"] = "onRewardedVideoAdDismissed";
    /**
     * Emits when user get rewarded from AdReward
     */
    RewardAdPluginEvents["Rewarded"] = "onRewardedVideoAdReward";
})(RewardAdPluginEvents || (RewardAdPluginEvents = {}));
//# sourceMappingURL=reward-ad-plugin-events.enum.js.map

/***/ }),

/***/ 555:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/reward/reward-definitions.interface.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=reward-definitions.interface.js.map

/***/ }),

/***/ 6650:
/*!******************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/reward/reward-item.interface.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=reward-item.interface.js.map

/***/ }),

/***/ 8502:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/shared/ad-load-info.interface.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=ad-load-info.interface.js.map

/***/ }),

/***/ 6359:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/shared/ad-options.interface.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=ad-options.interface.js.map

/***/ }),

/***/ 4539:
/*!******************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/shared/admob-error.interface.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=admob-error.interface.js.map

/***/ }),

/***/ 6485:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/shared/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ad_load_info_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ad-load-info.interface */ 8502);
/* harmony import */ var _ad_options_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad-options.interface */ 6359);
/* harmony import */ var _admob_error_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admob-error.interface */ 4539);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7008:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/admob */ 5453);






//import { AdOptions } from '@capacitor-community/admob'
//import { AdOptions, AdSize, AdPosition } from '@rdlabo/capacitor-admob';
//import { error } from 'console';
let Tab2Page = class Tab2Page {
    constructor() {
        this.isAdsense = false;
    }
    displayAdMob() {
        const options = {
            adId: 'ca-app-pub-3940256099942544/6300978111',
            adSize: _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.BannerAdSize.BANNER,
            position: _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.BannerAdPosition.BOTTOM_CENTER,
            margin: 60,
        };
        _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Plugins.AdMob.showBanner(options).then(success => this.isAdsense = true, error => this.isAdsense = false);
    }
    hideAdMob() {
        _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Plugins.Admob.hideBanner().then(success => this.isAdsense = false);
    }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



/***/ }),

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Tab Two\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-button (click)=\"displayAdMob()\" *ngIf=\"!isAdsense\" color=\"primary\">\n      広告を出す</ion-button>\n    <ion-button (click)=\"hideAdMob()\" *ngIf=\"isAdsense\" color=\"danger\">\n      広告を隠す</ion-button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map