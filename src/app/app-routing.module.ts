import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { RecommendedComponent } from './recommended/recommended.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '',   redirectTo: '/profile', pathMatch: 'full' },
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'recProfile', component: RecommendedComponent },

  // { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
