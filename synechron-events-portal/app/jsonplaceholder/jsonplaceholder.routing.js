"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var posts_component_1 = require("./components/posts.component");
var jphRoutingConfig = [
    {
        path: '',
        component: posts_component_1.PostsComponent
    }
];
exports.jphRoutes = router_1.RouterModule.forChild(jphRoutingConfig);
//# sourceMappingURL=jsonplaceholder.routing.js.map