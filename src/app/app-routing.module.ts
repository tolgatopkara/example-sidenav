import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { CoupensComponent } from './coupens/coupens.component';
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
    path : 'products', component : ProductsComponent
  },
  {
    path : 'coupens', component : CoupensComponent
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
