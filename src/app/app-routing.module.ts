import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DiscsComponent } from './pages/discs/discs.component';
import { ArtistsComponent } from './pages/artists/artists.component';

const routes: Routes =[
  {path: 'dashboard', component: DashboardComponent},
  { path: 'discs', component: DiscsComponent},
  {path: 'artists', component: ArtistsComponent},
  {path:'', redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
