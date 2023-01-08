import { Routes } from "@angular/router";

 export const routes: Routes = [

  {
    path: 'profile',
    loadComponent : () => import('./profile/profile.component')
  },
  {
    path: 'customize',
    loadComponent : () => import('./customize/customize.component')
  },
];
