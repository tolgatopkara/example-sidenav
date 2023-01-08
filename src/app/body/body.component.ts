import { Component, Input } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports : [RouterModule, NgClass],
  selector: 'app-body',
  template : `<div class="body" [ngClass]="getBodyClass()">
  <router-outlet></router-outlet>
</div>
`,
  styleUrls: ['./body.component.scss']
})
export class BodyComponent  {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass() : string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth  > 768){
      styleClass = 'body-trimmed';
    }
    else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 ){
      styleClass ='body-md-screen';
    }

    return styleClass ;
  }
}
