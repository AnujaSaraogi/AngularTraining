import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/views/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    constructor(private _eventsService: EventsService) {
    }

    ngOnInit(): void {
        this._eventsService.getAllEvents().subscribe(
            (data) => this.events = data,
            (error) => console.log(error),
            () => console.log("Service call complete")
        );
    }

    title: string = "Synechron Events List";
    subTitle: string = "Published by Synechron HR Team";
    events: Event[] = [];

    selectedEvent: Event;
    filterChar: string = "";

    displaySelectedEvent(event: Event): void {
        this.selectedEvent = event;
        console.log(this.selectedEvent);
    }

    childMessage: string = "";
    subscribeChildMessage(msg: string): void {
        this.childMessage = msg;
    }


}