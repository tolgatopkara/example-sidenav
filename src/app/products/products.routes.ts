import { Routes } from "@angular/router";

 export const routes: Routes = [

  {
    path: 'level1.2',
    loadComponent : () => import('./product-level-one-two/product-level-one-two.component')
  },
  {
    path: 'level2.1',
    loadComponent : () => import('./product-level-two-one/product-level-two-one.component')
  },
  {
    path: 'level3.1',
    loadComponent : () => import('./product-level-three-one/product-level-three-one.component')
  },
  {
    path: 'level3.2',
    loadComponent : () => import('./product-level-three-two/product-level-three-two.component')
  }
];
