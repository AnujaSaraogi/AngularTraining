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
var event_1 = require("../models/event");
var events_service_1 = require("../services/events.service");
var router_1 = require("@angular/router");
var EventDetailsComponent = (function () {
    function EventDetailsComponent(_eventsService, _route) {
        this._eventsService = _eventsService;
        this._route = _route;
        this.title = "Event Details Of - ";
        //@Input("eventId") id: number;
        //@Output("publish-message") message: EventEmitter<string> = new EventEmitter<string>();
        this.eventDetail = new event_1.Event();
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (data) { return _this.id = data["id"]; });
        this._eventsService.getSingleEvent(this.id).subscribe(function (data) { return _this.eventDetail = data; }, function (error) { return console.log(error); }, function () { return console.log("Service call complete"); });
    };
    return EventDetailsComponent;
}());
EventDetailsComponent = __decorate([
    core_1.Component({
        selector: 'event-details',
        templateUrl: 'app/events/views/event-details.component.html'
    }),
    __metadata("design:paramtypes", [events_service_1.EventsService, router_1.ActivatedRoute])
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map