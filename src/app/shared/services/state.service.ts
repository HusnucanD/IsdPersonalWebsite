import { Injectable } from '@angular/core';
import {
  About,
  Content,
  ContentText,
  ContentList,
  ContentListBig,
  ListBigItem,
  ContentButton,
  Faq,
  Tab,
  Post,
  Service,
} from '../models';
import * as StringJson from '../../../assets/json/string.json';
import * as LinkJson from '../../../assets/json/link.json';
import * as TabJson from '../../../assets/json/tab.json';
import * as FaqJson from '../../../assets/json/faq.json';
import * as ServiceJson from '../../../assets/json/service.json';
import * as PostJson from '../../../assets/json/post.json';
import * as AboutJson from '../../../assets/json/about.json';

@Injectable({
  providedIn: 'root',
})
export class State {
  setAll() {
    this.setString();
    this.setLink();
    this.setTabs();
    this.setFaqs();
    this.setServices();
    this.setPosts();
    this.setAbout();
  }

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
          this.getContents(JSON.parse(JSON.stringify(object[i].contents))),
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

  /* Service */
  public services: Service[] = [];
  setServices() {
    const object = JSON.parse(JSON.stringify(ServiceJson));
    this.services = [];
    for (let i = 0; i < object.length; i++) {
      this.services.push(
        new Service(
          object[i].title,
          object[i].subTitle,
          object[i].imgUrl,
          this.getContents(JSON.parse(JSON.stringify(object[i].contents))),
          object[i].title.replace(/\s/g, '-').toLowerCase()
        )
      );
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
          this.getContents(JSON.parse(JSON.stringify(object[i].contents))),
          object[i].imgUrl,
          object[i].author
        )
      );
    }
  }

  /* About */
  public about: About;
  setAbout() {
    const object: any = AboutJson;
    this.about = new About(
      object.name,
      object.title,
      this.getContents(JSON.parse(JSON.stringify(object.contents)))
    );
  }

  getContents(contentsObjectParam: any): Content[] {
    const contents: Content[] = [];
    const contentsObject = JSON.parse(JSON.stringify(contentsObjectParam));
    for (let i = 0; i < contentsObject.length; i++) {
      switch (contentsObject[i].type) {
        case 'content-text':
          contents.push(new ContentText(contentsObject[i].content));
          break;
        case 'content-list':
          const list: string[] = [];
          const listObject = JSON.parse(
            JSON.stringify(contentsObject[i].content)
          );
          for (let i = 0; i < listObject.length; i++) {
            list.push(listObject[i] as string);
          }
          contents.push(new ContentList(list));
          break;
        case 'content-list-big':
          const title = contentsObject[i].title;
          const listBig: ListBigItem[] = [];
          const listBigObject = JSON.parse(
            JSON.stringify(contentsObject[i].content)
          );
          for (let i = 0; i < listBigObject.length; i++) {
            listBig.push(
              new ListBigItem(listBigObject[i].title, listBigObject[i].subTitle)
            );
          }
          contents.push(new ContentListBig(title, listBig));
          break;
        case 'content-button':
          contents.push(
            new ContentButton(contentsObject[i].text, contentsObject[i].link)
          );
          break;
      }
    }
    return contents;
  }
}
