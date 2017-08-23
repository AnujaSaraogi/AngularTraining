//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsModule } from './events/events.module';
import { HomeModule } from './home/home.module';
import { JsonPlaceHolderModule } from './jsonplaceholder/jsonplaceholder.module';
import { NavBarComponent } from './navigation/components/navbar.component'
import { Routing } from './app.routing'

//Components
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, JsonPlaceHolderModule, HomeModule, EventsModule, Routing],//NavBarComponent  // Loading Angular Modules/Custom Modules
    declarations: [AppComponent, NavBarComponent], // Declaring components/pipes/directives etc
    bootstrap: [AppComponent] // Boostrapping components
})
export class AppModule {

}