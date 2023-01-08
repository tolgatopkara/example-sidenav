import { Component } from '@angular/core';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { BodyComponent } from './body/body.component';

interface SideNavToggle {
  screenWidth : number;
  collapsed:boolean;
}
@Component({
    standalone: true,
    selector: 'app-root',
    template: `<app-sidenav (onToggleSidenav)="onToggleSidenav($event)"></app-sidenav>
  <app-body
    [collapsed]="isSideNavCollapsed"
    [screenWidth]="screenWidth"
  ></app-body>
   `,
    imports: [SidenavComponent , BodyComponent]
})
export class AppComponent {
  title = 'example-sidenav';

  isSideNavCollapsed = false;
  screenWidth =0;
  onToggleSidenav(data :SideNavToggle):void {
    this.screenWidth = data.screenWidth;
    console.log('app component happened')
    this.isSideNavCollapsed = data.collapsed;
    console.log(this.screenWidth)
  }
}
