import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MediaComponent } from '../media/media.component';
import { PagesComponent } from '../pages/pages.component';
import { SettingsComponent } from '../settings/settings.component';
import { StatisticsComponent } from '../statistics/statistics.component';

 export const routes: Routes = [
  {
    path : '' , redirectTo :'dashboard' , pathMatch:'full'
  },
  {
    path : 'dashboard',component:DashboardComponent
  },
  {
    path : 'media' , component : MediaComponent
  },
  {
    path : 'settings' , component : SettingsComponent
  },
  {
    path : 'products',
    loadChildren : () => import('../products/products.routes').then(m => m.routes)
  },
  {
    path : 'coupens',
    loadChildren : () => import('../coupens/coupens.routes').then(m => m.routes)
  },
  {
    path : 'pages' , component : PagesComponent
  },
  {
    path : 'statistics' , component : StatisticsComponent
  }

];
