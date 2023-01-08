import { Routes } from "@angular/router";

 export const routes: Routes = [
  {
    path: 'level3.1',
    loadComponent : () => import('./product-level-three-one/product-level-three-one.component').then(m => m.ProductLevelThreeOneComponent)
  },
  {
    path: 'level3.2',
    loadComponent : () => import('./product-level-three-two/product-level-three-two.component').then(m => m.ProductLevelThreeTwoComponent)
  }
];
