webpackJsonp([1],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(49);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: '<h1> Welcome to Synechron Pvt. Ltd</h1><hr><h5>Core Development Center, Pune</h5>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(82);
var app_module_ngfactory_1 = __webpack_require__(626);
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(49);
var i1 = __webpack_require__(627);
var i2 = __webpack_require__(118);
var i3 = __webpack_require__(628);
var i4 = __webpack_require__(111);
var i5 = __webpack_require__(82);
exports.AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]),
        i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(4608, i0.Compiler, i0.Compiler, []), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i5.DomSanitizer, i5.ɵe, [i4.DOCUMENT]),
        i0.ɵmpd(6144, i0.Sanitizer, null, [i5.DomSanitizer]), i0.ɵmpd(4608, i5.HAMMER_GESTURE_CONFIG, i5.HammerGestureConfig, []), i0.ɵmpd(5120, i5.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i5.ɵDomEventsPlugin(p0_0), new i5.ɵKeyEventsPlugin(p1_0),
                new i5.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i4.DOCUMENT, i4.DOCUMENT, i4.DOCUMENT, i5.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i5.EventManager, i5.EventManager, [i5.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i5.ɵDomSharedStylesHost, i5.ɵDomSharedStylesHost, [i4.DOCUMENT]),
        i0.ɵmpd(4608, i5.ɵDomRendererFactory2, i5.ɵDomRendererFactory2, [i5.EventManager,
            i5.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i5.ɵDomRendererFactory2]), i0.ɵmpd(6144, i5.ɵSharedStylesHost, null, [i5.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i5.Meta, i5.Meta, [i4.DOCUMENT]), i0.ɵmpd(4608, i5.Title, i5.Title, [i4.DOCUMENT]), i0.ɵmpd(512, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i5.ɵa, []), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1) {
            return [i5.ɵc(p0_0, p0_1)];
        }, [[2, i5.NgProbeToken], [2, i0.NgProbeToken]]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver,
            i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]),
        i0.ɵmpd(512, i5.BrowserModule, i5.BrowserModule, [[3, i5.BrowserModule]]), i0.ɵmpd(512, i1.AppModule, i1.AppModule, [])]);
});



/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(49);
var platform_browser_1 = __webpack_require__(82);
var app_component_1 = __webpack_require__(118);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent],
        exports: [],
        providers: [],
        bootstrap: [app_component_1.AppComponent] //bootstrapping components
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(49);
var i1 = __webpack_require__(118);
var styles_AppComponent = [];
exports.RenderType_AppComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AppComponent,
    data: {} });
function View_AppComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, [' Welcome to Synechron Pvt. Ltd'])), (_l()(), i0.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'h5', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Core Development Center, Pune']))], null, null);
}
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'my-app', [], null, null, null, View_AppComponent_0, exports.RenderType_AppComponent)),
        i0.ɵdid(49152, null, 0, i1.AppComponent, [], null, null)], null, null);
}
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
exports.AppComponentNgFactory = i0.ɵccf('my-app', i1.AppComponent, View_AppComponent_Host_0, {}, {}, []);



/***/ })

},[625]);