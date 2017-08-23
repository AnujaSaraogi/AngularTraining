//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { eventsRoute } from './events.routing';

//Components
import { EventsListComponent } from './components/events-list.component';
import { EventDetailsComponent } from './components/event-details.component';
import { NewEventComponent } from './components/new-event.component';

//Pipes
import { FirstLetterCapitalPipe } from './pipes/first-letter-capital.pipe';
import { FilterBypipe } from './pipes/filter-by.pipe';

//Services
import { EventsService } from './services/events.service';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, RouterModule, eventsRoute],
    declarations: [EventsListComponent, EventDetailsComponent, FirstLetterCapitalPipe, FilterBypipe, NewEventComponent],
    exports: [EventsListComponent, EventDetailsComponent, NewEventComponent],
    providers: [EventsService]
})
export class EventsModule {

}