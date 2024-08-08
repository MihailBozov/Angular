import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "src/app/modules/theme/main/main.component";
import { AddThemeComponent } from "./add-theme/add-theme.component";
import { CurrentThemeComponent } from "./current-theme/current-theme.component";
import { AuthActivate } from "src/app/guards/auth.activate";


const routes: Routes = [
    { path: 'themes', children: [
        { path: '', pathMatch: 'full', component: MainComponent },
        { path: ':themeId', component: CurrentThemeComponent }
    ] },
    { path: 'add-theme', component: AddThemeComponent, canActivate: [AuthActivate] }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule {}