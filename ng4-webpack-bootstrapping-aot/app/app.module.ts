import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

@NgModule({

    imports:[BrowserModule],  // loading angular/custom modules
    declarations:[AppComponent], // Decalring components/pipes/directives etc..
    exports:[], // Export component/services/pipes outside the module for sharing purpose
    providers:[], // Services
    bootstrap:[AppComponent] //bootstrapping components

})
export class AppModule{

}
