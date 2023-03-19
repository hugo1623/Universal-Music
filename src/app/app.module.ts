import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DiscsComponent } from './pages/discs/discs.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DiscService } from './services/disc.service';
import { ArtistService } from './services/artist.service';
import { DetailDiscsComponent } from './pages/detail-discs/detail-discs.component';
import { DetailArtistComponent } from './pages/detail-artist/detail-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    DiscsComponent,
    ArtistsComponent,
    DetailDiscsComponent,
    DetailArtistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DiscService,
    ArtistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
