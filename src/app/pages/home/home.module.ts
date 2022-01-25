import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { RepoComponent } from '../../components/repo/repo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    InfiniteScrollModule
  ],
  declarations: [
    HomePage,
    RepoComponent
  ]
})
export class HomePageModule {}
