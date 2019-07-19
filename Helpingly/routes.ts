import { Routes } from '@angular/router'
import { InterestComponent } from "src/app/careers/interest/interest.component";
import { CareerAppComponent } from "src/app/app.component";
import { HomePageComponent } from 'src/app/home/home.component';
import { StreamComponent } from 'src/app/careers/stream/stream.component';
import { CategoryComponent } from 'src/app/careers/category/category.component';
import { CareerListComponent } from 'src/app/careers/career-list/career-list.component';

export const appRoutes:Routes = [
    { path: 'homepage', component: HomePageComponent },
    { path: 'interests', component: InterestComponent },
    { path: 'streams', component: StreamComponent },
    { path: 'categories', component: CategoryComponent },
    { path: 'career-list', component: CareerListComponent },
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: '**', redirectTo: 'homepage', pathMatch: 'full' }
 ]