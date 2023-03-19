import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DiscsComponent } from './pages/discs/discs.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { DetailDiscsComponent } from './pages/detail-discs/detail-discs.component';

const routes: Routes =[
  {path: 'dashboard', component: DashboardComponent},
  {path: 'discs', component: DiscsComponent},
  {path:'discs/:id', component: DetailDiscsComponent},
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
