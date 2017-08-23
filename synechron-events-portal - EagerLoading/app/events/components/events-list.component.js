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
var events_service_1 = require("../services/events.service");
var EventsListComponent = (function () {
    function EventsListComponent(_eventsService) {
        this._eventsService = _eventsService;
        this.title = "Synechron Events List";
        this.subTitle = "Published by Synechron HR Team";
        this.events = [];
        this.filterChar = "";
        this.childMessage = "";
    }
    EventsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eventsService.getAllEvents().subscribe(function (data) { return _this.events = data; }, function (error) { return console.log(error); }, function () { return console.log("Service call complete"); });
    };
    EventsListComponent.prototype.displaySelectedEvent = function (event) {
        this.selectedEvent = event;
        console.log(this.selectedEvent);
    };
    EventsListComponent.prototype.subscribeChildMessage = function (msg) {
        this.childMessage = msg;
    };
    return EventsListComponent;
}());
EventsListComponent = __decorate([
    core_1.Component({
        selector: 'events-list',
        templateUrl: 'app/events/views/events-list.component.html'
    }),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], EventsListComponent);
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map