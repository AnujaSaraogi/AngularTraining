import { Component, OnInit } from '@angular/core'
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
    selector: 'event-details',
    templateUrl: 'app/events/views/event-details.component.html'
})
export class EventDetailsComponent implements OnInit {
    title: string = "Event Details Of - ";
    id: number;
    //@Input("eventId") id: number;
    //@Output("publish-message") message: EventEmitter<string> = new EventEmitter<string>();

    eventDetail: Event = new Event();
    constructor(private _eventsService: EventsService, private _route: ActivatedRoute) { }

    ngOnInit(): void {
        this._route.params.subscribe(
            (data) => this.id = data["id"]
        )

        this._eventsService.getSingleEvent(this.id).subscribe(
            (data) => this.eventDetail = data,
            (error) => console.log(error),
            () => console.log("Service call complete")
        );
    }

    // raiseEvent(): void {
    //     this.message.emit("Received event successfully")
    // }

}