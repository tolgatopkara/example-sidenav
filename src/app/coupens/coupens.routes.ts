import { Routes } from "@angular/router";

 export const routes: Routes = [
  {
    path:'' ,
    loadComponent : () => import('./coupens.component')
  },
  {
    path:'list' ,
    loadComponent : () => import('./coupen-list/coupen-list.component')
  },
  {
    path:'create' ,
    loadComponent : () => import('./coupen-create/coupen-create.component')
  }
];
