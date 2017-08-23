import { Component, OnInit } from '@angular/core'
import { Post } from '../models/post'
import { JsonPlaceHolderService } from '../services/jsonplaceholder.service'

@Component({
    selector: 'jph-posts',
    templateUrl: 'app/jsonplaceholder/views/posts.component.html'
})
export class PostsComponent implements OnInit {

    constructor(private _jphService: JsonPlaceHolderService) { }
    title: string = "JsonPlaceHolder's Post data";
    jphPosts: Post[];

    ngOnInit(): void {
        this._jphService.getAllPosts().subscribe(
            (data) => this.jphPosts = data,
            (error) => console.log(error),
            () => console.log("Service call completed")
        );
    }
}