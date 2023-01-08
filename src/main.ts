import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, Route, withPreloading, withRouterConfig } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component';


const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import("./app/routes/app.routes").then(m => m.routes)
  },
  {
    path : '**' ,
    redirectTo : 'dashboard'
},
];

bootstrapApplication(AppComponent,
  {
    providers: [
    provideAnimations(),
    provideRouter(appRoutes, withPreloading(PreloadAllModules), withRouterConfig({ onSameUrlNavigation: 'reload' })),
    importProvidersFrom(BrowserAnimationsModule,BrowserModule)

]
  }).catch((err) => console.log(err)
  );

