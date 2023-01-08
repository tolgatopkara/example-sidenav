import { Routes } from "@angular/router";

 export const routes: Routes = [
  {
    path:'' ,
    loadComponent : () => import('./coupens.component').then(m => m.CoupensComponent)

  },
  {
    path:'list' ,
    loadComponent : () => import('./coupen-list/coupen-list.component').then(m => m.CoupenListComponent)
  }
];
