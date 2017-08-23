import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'

})
export class AppComponent {

    constructor() {
        this.employeeObj = new Employee(16, "Anuja", "Magarpatta City", "Pune", "xyz@gmail.com", "+91 9876543210");
    }
    employeeObj: Employee;

    title: string = "Welcome to Syenchron Pvt Ltd";
    subTitle: string = "Core Development Centre, Pune";


}