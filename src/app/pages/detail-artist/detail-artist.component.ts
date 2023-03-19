import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-detail-artist',
  templateUrl: './detail-artist.component.html',
  styleUrls: ['./detail-artist.component.css']
})
export class DetailArtistComponent {
  artist: any ={};
  constructor(private  router: ActivatedRoute, private artistService: ArtistService) { 
    router.params.subscribe(data => {
      // console.log('Este es el ID:' + data['id']);
    this.getArtistById(data['id']);
    })
  }
  getArtistById(id: number){
    this.artistService.getArtistById(id).subscribe(data =>{
      // console.log(data);
      this.artist= data;
    });
  }


}
