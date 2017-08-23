import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'

import { PostsComponent } from './components/posts.component';

import { JsonPlaceHolderService } from './services/jsonplaceholder.service'

@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [PostsComponent],
    exports: [PostsComponent],
    providers: [JsonPlaceHolderService]
})
export class JsonPlaceHolderModule {

}