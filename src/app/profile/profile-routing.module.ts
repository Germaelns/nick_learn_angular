import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent} from './profile-page/profile-page.component';
import {ProfileErrorComponent} from './profile-error/profile-error.component';


const routes: Routes = [
  {path: '', component: ProfilePageComponent},
  {path: 'error', component: ProfileErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
