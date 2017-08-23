import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HomeComponent } from './components/home.component'
import { homeRouting } from './home.routing'

@NgModule({
    imports: [CommonModule, homeRouting],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {

}