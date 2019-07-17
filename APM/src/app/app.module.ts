import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CareerListComponent } from './careers/career-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { CareerDetailComponent } from './careers/career-detail.component';
import { WelcomeComponent } from './home/welcome.component';
//import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  declarations: [ 
    AppComponent, 
    CareerListComponent, 
    ConvertToSpacesPipe,
    StarComponent,
    CareerDetailComponent,
    WelcomeComponent ],
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'careers', component: CareerListComponent },
      { path: 'careers/:id', component: CareerDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  ]) 
],
  bootstrap: [ 
    AppComponent ],
  //schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }