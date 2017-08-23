import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { jphRoutes } from './jsonplaceholder.routing'

import { PostsComponent } from './components/posts.component';

import { JsonPlaceHolderService } from './services/jsonplaceholder.service'

@NgModule({
    imports: [CommonModule, HttpModule, jphRoutes],
    declarations: [PostsComponent],
    exports: [PostsComponent],
    providers: [JsonPlaceHolderService]
})
export class JsonPlaceHolderModule {

}