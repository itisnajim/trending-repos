import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MomentModule } from 'ngx-moment';


import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { RepoComponent } from '../../components/repo/repo.component';
import { LazyImgDirective } from 'src/app/directives/lazy-img/lazy-img.directive';
import { ShortNumberPipe } from 'src/app/pipes/short-number/short-number.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    InfiniteScrollModule,
    MomentModule
  ],
  declarations: [
    HomePage,
    RepoComponent,
    LazyImgDirective,
    ShortNumberPipe
  ]
})
export class HomePageModule {}
