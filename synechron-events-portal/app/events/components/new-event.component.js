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
var NewEventComponent = (function () {
    function NewEventComponent(_evtService) {
        this._evtService = _evtService;
        this.title = "Register New Event";
        this.event = new event_1.Event();
    }
    NewEventComponent.prototype.insertNewEvent = function () {
        this._evtService.insertEvent(this.event).subscribe(function (val) { return console.log(val); });
    };
    return NewEventComponent;
}());
NewEventComponent = __decorate([
    core_1.Component({
        selector: 'new-event',
        templateUrl: 'app/events/views/new-event.component.html'
    }),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], NewEventComponent);
exports.NewEventComponent = NewEventComponent;
//# sourceMappingURL=new-event.component.js.map