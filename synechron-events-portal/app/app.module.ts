//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavBarComponent } from './navigation/components/navbar.component'
import { routing } from './app.routing'

//Components
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, routing],//NavBarComponent  // Loading Angular Modules/Custom Modules
    declarations: [AppComponent, NavBarComponent], // Declaring components/pipes/directives etc
    bootstrap: [AppComponent] // Boostrapping components
})
export class AppModule {

}