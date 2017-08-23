import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsListComponent } from './events/components/events-list.component';
import { EventDetailsComponent } from './events/components/event-details.component'
import { HomeComponent } from './home/components/home.component';
import { PostsComponent } from './jsonplaceholder/components/posts.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'events',
        component: EventsListComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

