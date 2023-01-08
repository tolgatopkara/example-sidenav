import { Routes } from '@angular/router';
 export const routes: Routes = [
  {
    path : '' , redirectTo :'dashboard' , pathMatch:'full'
  },
  
  {
    path : 'dashboard',
    loadComponent : () => import('../dashboard/dashboard.component')
  },
  {
    path : 'media' ,
    loadComponent : () => import('../media/media.component')
  },
  {
    path : 'settings' ,
    loadChildren : () => import('../settings/settings.routes').then(m => m.routes)
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
    path : 'pages' ,
    loadComponent : () => import('../pages/pages.component')
  },
  {
    path : 'statistics' ,
    loadComponent : () => import('../statistics/statistics.component')
  }

];
