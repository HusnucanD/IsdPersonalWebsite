import { Injectable } from '@angular/core';
import { Faq, Tab, Post } from '../models';
import * as StringJson from '../../../assets/json/string.json';
import * as LinkJson from '../../../assets/json/link.json';
import * as TabJson from '../../../assets/json/tab.json';
import * as FaqJson from '../../../assets/json/faq.json';
import * as PostJson from '../../../assets/json/post.json';

@Injectable({
  providedIn: 'root',
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

  /* Tab */
  public tabs: Tab[] = [];
  setTabs() {
    const object = JSON.parse(JSON.stringify(TabJson));
    this.tabs = [];
    for (let i = 0; i < object.length; i++) {
      this.tabs.push(
        new Tab(
          object[i].title,
          object[i].content,
          object[i].logoUrl,
          object[i].imgUrl,
          object[i].visible
        )
      );
    }
  }

  /* Faq */
  public faqs: Faq[] = [];
  setFaqs() {
    const object = JSON.parse(JSON.stringify(FaqJson));
    this.faqs = [];
    for (let i = 0; i < object.length; i++) {
      this.faqs.push(new Faq(object[i].id, object[i].title, object[i].answer));
    }
  }

  /* Post */
  public posts: Post[] = [];
  setPosts() {
    const object = JSON.parse(JSON.stringify(PostJson));
    this.posts = [];
    for (let i = 0; i < object.length; i++) {
      this.posts.push(
        new Post(
          object[i].id,
          object[i].title,
          object[i].content,
          object[i].imgUrl,
          object[i].author
        )
      );
    }
  }
}
