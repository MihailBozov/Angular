import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'lazy', loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    //  configuration
    {
      // preloadingStrategy: PreloadAllModules,  // control how lazy-loaded modules are preloaded after the initial app load
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
