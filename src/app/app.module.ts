import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AddNewJobComponent } from './add-new-job/add-new-job.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { DeleteJobComponent } from './delete-job/delete-job.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SortpipePipe } from './sortpipe.pipe';
import { SearchpipePipe } from './searchpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    routing,
    NavbarComponent,
    PagenotfoundComponent,
    AddNewJobComponent,
    ViewJobsComponent,
    UpdateProfileComponent,
    SearchJobComponent,
    DeleteJobComponent,
    SortpipePipe,
    SearchpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    PaginationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
