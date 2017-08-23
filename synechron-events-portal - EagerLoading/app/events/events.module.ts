//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

//Components
import { EventsListComponent } from './components/events-list.component';
import { EventDetailsComponent } from './components/event-details.component';

//Pipes
import { FirstLetterCapitalPipe } from './pipes/first-letter-capital.pipe';
import { FilterBypipe } from './pipes/filter-by.pipe';

//Services
import { EventsService } from './services/events.service';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, RouterModule],
    declarations: [EventsListComponent, EventDetailsComponent, FirstLetterCapitalPipe, FilterBypipe],
    exports: [EventsListComponent, EventDetailsComponent],
    providers: [EventsService]
})
export class EventsModule {

}