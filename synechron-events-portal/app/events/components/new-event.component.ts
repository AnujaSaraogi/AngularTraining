import { Component } from '@angular/core'
import { Event } from '../models/event';
import {EventsService} from '../services/events.service'

@Component({
    selector: 'new-event',
    templateUrl: 'app/events/views/new-event.component.html'
})
export class NewEventComponent {
    title: string = "Register New Event";
    event: Event = new Event();
    constructor(private _evtService: EventsService) { }

    insertNewEvent(){
        this._evtService.insertEvent(this.event).subscribe(
            (val) => console.log(val)
        );
    }


}