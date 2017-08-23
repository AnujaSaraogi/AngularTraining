import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './components/posts.component';

const jphRoutingConfig: Routes = [
    {
        path: '',
        component: PostsComponent
    }
];

export const jphRoutes : ModuleWithProviders = RouterModule.forChild(jphRoutingConfig);