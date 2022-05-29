import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

@Injectable({
  providedIn: 'root',
})

export class State {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:3000/data');
  }

  setData(data: any) {
    this.setString(data.string);
    this.setLink(data.link);
    this.setTabs(data.tab);
    this.setFaqs(data.faq);
    this.setServices(data.service);
    this.setPosts(data.post);
    this.setAbout(data.about);
  }

  /* String */
  public string: any;
  setString(string: any) {
    this.string = string;
  }

  /* Link */
  public link: any;
  setLink(link: any) {
    this.link = link;
  }

  /* Tab */
  public tabs: Tab[] = [];
  setTabs(tabs: any) {
    const object = JSON.parse(JSON.stringify(tabs));
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
  setFaqs(faqs: any) {
    const object = JSON.parse(JSON.stringify(faqs));
    this.faqs = [];
    for (let i = 0; i < object.length; i++) {
      this.faqs.push(new Faq(object[i].id, object[i].title, object[i].answer));
    }
  }

  /* Service */
  public services: Service[] = [];
  setServices(services: any) {
    const object = JSON.parse(JSON.stringify(services));
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
  setPosts(posts: any) {
    const object = JSON.parse(JSON.stringify(posts));
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
  setAbout(about: any) {
    const object: any = about;
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
