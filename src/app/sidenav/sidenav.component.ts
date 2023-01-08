import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData, fadeInOut } from './helper';
import { Router, RouterModule } from '@angular/router';
import { NgIf, NgClass, NgForOf } from '@angular/common';
import { SublevelMenuComponent } from "./sublevel-menu.component";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
    standalone: true,
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    animations: [
        fadeInOut,
        trigger('rotate', [
            transition(':enter', [
                animate('400ms', keyframes([
                    style({ transform: 'rotate(0deg)', offset: '0' }),
                    style({ transform: 'rotate(1turn)', offset: '1' })
                ]))
            ])
        ])
    ],
    imports: [NgIf, NgClass, RouterModule, SublevelMenuComponent, NgForOf]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', [`$event`])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    console.log('sidenav component toggleCollapse worked')
  }
  closeSidenav(): void {
    this.collapsed = false
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    console.log('sidenav component closeSidenav worked')
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }

}
