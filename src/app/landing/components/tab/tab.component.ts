
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent implements OnInit{ 
  @Input ('Content') content: string;
  @Input ('Title') title: string;
  @Input ('ImgUrl') imgUrl: string; 
  _visible: boolean;
  animation: boolean;
  ngOnInit() {
    
  }
  @Input('Visible') set visible(_visible: boolean) {
    this._visible = _visible;
    setTimeout( () => { 
       this.animation = this._visible;
    }, 100);
  }
  get visible() { 
    return this._visible; 
  }
}
