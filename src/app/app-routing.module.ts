import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { PagesComponent } from './pages/pages.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
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
    loadChildren : () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path : 'coupens',
    loadChildren : () => import('./coupens/coupens.module').then(m => m.CoupensModule)
  },
  {
    path : 'pages' , component : PagesComponent
  },
  {
    path : 'statistics' , component : StatisticsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
