
import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {
  /* It's designed for 4 tabs */
  tabs: {
    title: string
    content: string,
    logoUrl: string,
    imgUrl: string,
    visible: boolean
  }[];
  mobileOn: boolean;
  constructor() {
    this.getScreenSize();  
  }
  ngOnInit() {
    this.tabs = [ 
      {
        title: "Dolores Eos",
        content : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt arcu sit amet " +
        "felis gravida, non rhoncus tellus suscipit. Aliquam placerat, turpis at tincidunt luctus, felis arcu " + 
        "volutpat nunc, id dignissim ex</p><ul><li>lacus ac massa</li><li>Maecenas dolor neque</li><li>Ut quis laoreet leo</li></ul>" +
        "Etiam in libero malesuada, faucibus sem at, fermentum tortor. Etiam sodales molestie quam, et euismod nisi.",
        logoUrl: "../../../../assets/img/tab_header1.svg",
        imgUrl: "../../../../assets/img/tab1.jpg",
        visible: true
      },
      {
        title : "Qui Ratione",
        content : "Vivamus feugiat, urna vitae elementum congue, enim ante fringilla nisl, eget dapibus arcu mauris at lectus. Fusce ut semper mi. Aenean ante mi, egestas eu dui ac, faucibus suscipit risus. Sed sed consectetur lacus. Sed malesuada volutpat sem.",
        logoUrl: "../../../../assets/img/tab_header2.svg",
        imgUrl: "../../../../assets/img/tab2.jpg",
        visible: false
      },
      {
        title : "Voluptatem",
        content : "Etiam in libero malesuada, faucibus sem at, fermentum tortor. Etiam sodales molestie quam, et euismod nisi. Etiam tristique nibh nulla, vitae cursus risus hendrerit ac. Vestibulum eget lectus nec sapien eleifend ultricies. Pellentesque mollis.",
        logoUrl: "../../../../assets/img/tab_header3.svg",
        imgUrl: "../../../../assets/img/tab3.jpg",
        visible: false
      },
      {
        title : "Exercitationem",
        content : "Ut quis laoreet leo. Integer eget dapibus risus. Maecenas dolor neque, hendrerit ut ornare ut, fringilla at nisi." +
        " Nam id porta mi. Maecenas tristique tellus in condimentum dignissim. Aenean pulvinar orci sed ante consectetur condimentum." +
        "<ul><li>lacus ac massa</li><li>Maecenas dolor neque</li><li>Etiam in libero malesuada</li><li> eget dapibus arcu mauris</li>" +
        "<li>enim ante fringilla nisl</li></ul>",
        logoUrl: "../../../../assets/img/tab_header4.svg",
        imgUrl: "../../../../assets/img/tab4.jpg",
        visible: false
      }
    ];
  }
  @HostListener('window:resize', ['$event']) getScreenSize() {
    this.mobileOn = window.innerWidth < 992;
  }
  tabClick(index: any) {
    this.tabs.map(x => x.visible = false);
    this.tabs[index].visible = true;
  }
}
