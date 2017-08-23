"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var events_list_component_1 = require("./events/components/events-list.component");
var event_details_component_1 = require("./events/components/event-details.component");
var home_component_1 = require("./home/components/home.component");
var posts_component_1 = require("./jsonplaceholder/components/posts.component");
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'events',
        component: events_list_component_1.EventsListComponent
    },
    {
        path: 'posts',
        component: posts_component_1.PostsComponent
    },
    {
        path: 'events/:id',
        component: event_details_component_1.EventDetailsComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map