import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent{

  artists: any = [];
  constructor(private artistService: ArtistService) {
    this.getArtists();
   }

  getArtists(){
    return this.artistService.getArtists()
    .subscribe((data) =>{
      this.artists = data;
      });
  }
}
