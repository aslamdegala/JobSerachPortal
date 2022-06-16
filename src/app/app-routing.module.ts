import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { AddNewJobComponent } from './add-new-job/add-new-job.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { DeleteJobComponent } from './delete-job/delete-job.component';

// canActivate: [AuthGuard]
const routes: Routes = [
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: LogInComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'NavBar', component: NavbarComponent, canActivate: [AuthGuard] },
  { path: 'AddJob', component: AddNewJobComponent, canActivate: [AuthGuard] },
  {
    path: 'ViewJob/:id',
    component: ViewJobsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'UpdateProfile',
    component: UpdateProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'SearchJob', component: SearchJobComponent },
  { path: 'DeleteJob', component: DeleteJobComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routing = [HomeComponent, LogInComponent, RegisterComponent];
