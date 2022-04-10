import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { State } from 'src/app/shared/services/state.service';
import { Tab } from '../../../shared/models';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  tabs: Tab[] = [];
  mobileOn: boolean;
  constructor(private state: State) {
    this.tabs = this.state.tabs;
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event']) getScreenSize() {
    this.mobileOn = window.innerWidth < 992;
  }
  tabClick(index: any) {
    this.tabs.map((x) => (x.visible = false));
    this.tabs[index].visible = true;
  }
}
