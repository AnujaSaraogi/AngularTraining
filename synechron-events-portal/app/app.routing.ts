import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultRoute: Routes = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];
const eventsRoute: Routes = [
    {
        path: 'events',
        loadChildren: 'app/events/events.module#EventsModule'
    }
];
const postsRoute: Routes = [
    {
        path: 'posts',
        loadChildren: 'app/jsonplaceholder/jsonplaceholder.module#JsonPlaceHolderModule'
    }
];
const homeRoute: Routes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];

const appRoutes: Routes = [
    ...postsRoute,
    ...eventsRoute,
    ...homeRoute,
    ...defaultRoute
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

