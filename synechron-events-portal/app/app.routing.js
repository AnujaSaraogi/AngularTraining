"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var defaultRoute = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];
var eventsRoute = [
    {
        path: 'events',
        loadChildren: 'app/events/events.module#EventsModule'
    }
];
var postsRoute = [
    {
        path: 'posts',
        loadChildren: 'app/jsonplaceholder/jsonplaceholder.module#JsonPlaceHolderModule'
    }
];
var homeRoute = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];
var appRoutes = postsRoute.concat(eventsRoute, homeRoute, defaultRoute);
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map