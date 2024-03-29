import { Component, Input } from '@angular/core';
import { INavbarData, fadeInOut } from './helper';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { Router, RouterModule } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  standalone  : true,
  imports     : [NgIf,NgClass,NgForOf,RouterModule],
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0"
      [@submenu]="expanded
      ? {value : 'visible' ,
        params :{transitionParams :'400ms cubic-bezier(0.86, 0, 0.07, 1)', height : '*'}}
      : {value :'hidden' ,
        params :{transitionParams :'400ms cubic-bezier(0.86, 0, 0.07, 1)', height : '0'}}"
      class="sublevel-nav">
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <a class="sublevel-nav-link"
         *ngIf="item.items && item.items.length > 0"
          (click) ="handleClick(item)"
          [ngClass]="getActiveClass(item)" >
          <span class="sublevel-link-icon material-symbols-outlined">circle</span>
          <span class="sublevel-link-text" @fadeInOut
                       *ngIf="collapsed">{{item.label}}</span>
          <span class="menu-collapse-icon material-symbols-outlined"
                *ngIf="item.items && collapsed"
                [ngClass]="!item.expanded ? 'chevron_right' : 'expand_more'"
          >{{!item.expanded ? 'chevron_right' : 'expand_more'}}</span>
        </a>
        <a class="sublevel-nav-link"
            *ngIf="!item.items || (item.items && item.items.length === 0)"
            [routerLink]="[item.routeLink]"
            routerLinkActive="active-sublevel"
            [routerLinkActiveOptions]="{exact : true}">
            <span class="sublevel-link-icon material-symbols-outlined">circle</span>
          <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
          </a>
          <div *ngIf="item.items && item.items.length > 0 ">
                <app-sublevel-menu
                [data]="item"
                [collapsed]="collapsed"
                [multiple]="multiple"
                [expanded]="item.expanded">
                </app-sublevel-menu>
          </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({ overflow: 'hidden' }),
      animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent  {


  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple = false;



  constructor(public router : Router) {

  }



  handleClick(item: INavbarData): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (const modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

    getActiveClass(item:INavbarData):string {
      return item.expanded && this.router.url.includes(item.routeLink) ? 'active-sublevel' : '';
    }
}
