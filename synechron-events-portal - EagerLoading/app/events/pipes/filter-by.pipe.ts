import { Pipe, PipeTransform } from '@angular/core'
import { IEvent } from '../models/ievent'

@Pipe({
    name: 'eventPipe'
})
export class FilterBypipe implements PipeTransform {
    transform(value: IEvent[], args: string[]): IEvent[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((event: IEvent) =>
            event.eventName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}