"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var events_list_component_1 = require("./components/events-list.component");
var event_details_component_1 = require("./components/event-details.component");
var new_event_component_1 = require("./components/new-event.component");
var eventsRoutingConfig = [
    {
        path: '',
        component: events_list_component_1.EventsListComponent
    },
    {
        path: 'new',
        component: new_event_component_1.NewEventComponent
    },
    {
        path: ':id',
        component: event_details_component_1.EventDetailsComponent
    }
];
exports.eventsRoute = router_1.RouterModule.forChild(eventsRoutingConfig);
//# sourceMappingURL=events.routing.js.map