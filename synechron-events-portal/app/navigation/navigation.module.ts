import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NavBarComponent } from './components/navbar.component'
import { Routing } from '../app.routing'

@NgModule({
    imports: [CommonModule, Routing],
    declarations: [NavBarComponent],
    exports: [NavBarComponent],

})
export class NavigationModule {

}