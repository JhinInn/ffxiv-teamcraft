import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../core/core.module';
import { ListModule } from '../../modules/list/list.module';
import { WorkshopModule } from '../../modules/workshop/workshop.module';

const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    TranslateModule,
    ListModule,
    WorkshopModule,

    NgZorroAntdModule,

    RouterModule.forChild(routes),
  ],
  declarations: [FavoritesComponent]
})
export class FavoritesPageModule { }