
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Post } from '../models/post.model';
import * as StringJson from "../../../assets/json/string.json";
import * as LinkJson from "../../../assets/json/link.json";
import * as PostJson from "../../../assets/json/post.json";

@Injectable({ 
    providedIn: "root"
})

export class State {
    /* String */
    public string: any;
    setString() {
        this.string = StringJson;
    }
    
    /* Link */
    public link: any;
    setLink() {
        this.link = LinkJson;
    }

    /* Post */
    private posts = new BehaviorSubject<Post[]>([]);
    readonly Posts = this.posts.asObservable();
    SetPosts() {        
        const object = JSON.parse(JSON.stringify(PostJson));
        const array: Post[] = [];
        for(let i = 0; i < object.length; i++) {
            array.push(new Post(object[i].id, object[i].title, object[i].content, object[i].imgUrl, object[i].author));
        }
        this.posts.next(array);
    }
}