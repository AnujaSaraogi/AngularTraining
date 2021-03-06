"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var jsonplaceholder_routing_1 = require("./jsonplaceholder.routing");
var posts_component_1 = require("./components/posts.component");
var jsonplaceholder_service_1 = require("./services/jsonplaceholder.service");
var JsonPlaceHolderModule = (function () {
    function JsonPlaceHolderModule() {
    }
    return JsonPlaceHolderModule;
}());
JsonPlaceHolderModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule, jsonplaceholder_routing_1.jphRoutes],
        declarations: [posts_component_1.PostsComponent],
        exports: [posts_component_1.PostsComponent],
        providers: [jsonplaceholder_service_1.JsonPlaceHolderService]
    })
], JsonPlaceHolderModule);
exports.JsonPlaceHolderModule = JsonPlaceHolderModule;
//# sourceMappingURL=jsonplaceholder.module.js.map