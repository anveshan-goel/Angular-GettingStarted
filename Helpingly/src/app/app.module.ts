import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CareerAppComponent } from './app.component';
import { CareerListComponent } from './careers/career-list.component';
import { NavBarComponent } from './navigation/navbar.component';
import { HomePageComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'routes';
import { InterestComponent } from './careers/interest/interest.component';
import { StreamComponent } from './careers/stream/stream.component';
import { CategoryComponent } from './careers/category/category.component';
import { CareerClassificationTopNavComponent } from './careers/career-classification-nav/top-nav.component';

@NgModule({
  declarations: [
    CareerAppComponent,
    CareerListComponent,
    NavBarComponent,
    HomePageComponent,
    InterestComponent,
    StreamComponent,
    CategoryComponent,
    CareerClassificationTopNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [CareerAppComponent]
})

export class AppModule { }
