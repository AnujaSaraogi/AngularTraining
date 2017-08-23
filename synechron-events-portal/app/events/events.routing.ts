import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsListComponent } from './components/events-list.component';
import { EventDetailsComponent } from './components/event-details.component';
import { NewEventComponent } from './components/new-event.component';

const eventsRoutingConfig: Routes = [
    {
        path: '',
        component: EventsListComponent
    },
    {
        path: 'new',
        component: NewEventComponent
    },
    {
        path: ':id',
        component: EventDetailsComponent
    }
];

export const eventsRoute: ModuleWithProviders = RouterModule.forChild(eventsRoutingConfig);