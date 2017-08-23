"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modules
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var events_routing_1 = require("./events.routing");
//Components
var events_list_component_1 = require("./components/events-list.component");
var event_details_component_1 = require("./components/event-details.component");
var new_event_component_1 = require("./components/new-event.component");
//Pipes
var first_letter_capital_pipe_1 = require("./pipes/first-letter-capital.pipe");
var filter_by_pipe_1 = require("./pipes/filter-by.pipe");
//Services
var events_service_1 = require("./services/events.service");
var EventsModule = (function () {
    function EventsModule() {
    }
    return EventsModule;
}());
EventsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule, events_routing_1.eventsRoute],
        declarations: [events_list_component_1.EventsListComponent, event_details_component_1.EventDetailsComponent, first_letter_capital_pipe_1.FirstLetterCapitalPipe, filter_by_pipe_1.FilterBypipe, new_event_component_1.NewEventComponent],
        exports: [events_list_component_1.EventsListComponent, event_details_component_1.EventDetailsComponent, new_event_component_1.NewEventComponent],
        providers: [events_service_1.EventsService]
    })
], EventsModule);
exports.EventsModule = EventsModule;
//# sourceMappingURL=events.module.js.map