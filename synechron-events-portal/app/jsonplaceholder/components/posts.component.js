"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jsonplaceholder_service_1 = require("../services/jsonplaceholder.service");
var PostsComponent = (function () {
    function PostsComponent(_jphService) {
        this._jphService = _jphService;
        this.title = "JsonPlaceHolder's Post data";
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._jphService.getAllPosts().subscribe(function (data) { return _this.jphPosts = data; }, function (error) { return console.log(error); }, function () { return console.log("Service call completed"); });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        selector: 'jph-posts',
        templateUrl: 'app/jsonplaceholder/views/posts.component.html'
    }),
    __metadata("design:paramtypes", [jsonplaceholder_service_1.JsonPlaceHolderService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map