import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LazyComponent } from "./lazy/lazy.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LazyComponent },
  { path: 'lazy', loadChildren: () => import('./lazy.module').then(m => m.LazyModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
