import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemesListComponent } from 'src/app/modules/theme/themes-list/themes-list.component';
import { PostsListComponent } from 'src/app/modules/theme/posts-list/posts-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostItemComponent } from './post-item/post-item.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    CurrentThemeComponent,
    ThemesListComponent,
    PostsListComponent,
    PostItemComponent,
    MainComponent
  ],
  imports: [
    CommonModule, ThemeRoutingModule, SharedModule
  ],
  exports: [MainComponent]
})
export class ThemeModule { }
