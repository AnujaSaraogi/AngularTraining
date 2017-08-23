import { Injectable } from '@angular/core';
import { Event } from '../models/event'
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

    constructor(private _http: Http) { }
    private baseUrl: string = "http://localhost:9090/";
    getAllEvents(): Observable<Event[]> {
        // return this.eventsData;
        return this._http.get(this.baseUrl + 'api/events').map(res => res.json());
    }

    getSingleEvent(id: number): Observable<Event> {
        return this._http.get(this.baseUrl + 'api/events/' + id).map(res => res.json());
        // for (let event of this.eventsData) {
        //     if (event.eventId == id) {
        //         return event
        //     }
        // }
        // return null;
    }

    // private eventsData: Event[] = [
    //     {
    //         eventId: 1,
    //         eventCode: "SYNSEM1",
    //         eventName: "Seminar on Angular JS 1",
    //         description: "Disucssion on Angular 1",
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         fees: 100,
    //         attendance: 60,
    //         logo: "images/ng1.png"
    //     },
    //     {
    //         eventId: 2,
    //         eventCode: "SYNSEM2",
    //         eventName: "Seminar on Angular JS 2",
    //         description: "Disucssion on Angular 2",
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         fees: 200,
    //         attendance: 70,
    //         logo: "images/ng2.png"
    //     },
    //     {
    //         eventId: 3,
    //         eventCode: "SYNSEM3",
    //         eventName: "Seminar on Angular JS 4",
    //         description: "Disucssion on Angular 4",
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         fees: 300,
    //         attendance: 80,
    //         logo: "images/ng3.png"
    //     },
    //     {
    //         eventId: 4,
    //         eventCode: "SYNSEM4",
    //         eventName: "Seminar on Angular JS 8",
    //         description: "Disucssion on Angular 8",
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         fees: 400,
    //         attendance: 90,
    //         logo: "images/ng4.png"
    //     },
    //     {
    //         eventId: 5,
    //         eventCode: "SYNSEM5",
    //         eventName: "Seminar on Angular JS 16",
    //         description: "Disucssion on Angular 16",
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         fees: 500,
    //         attendance: 50,
    //         logo: "images/ng5.png"
    //     }
    // ];
}