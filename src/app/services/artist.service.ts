import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  urlBase: string = 'https://localhost:7283/api/Artists';
  constructor(private htppClient: HttpClient) { }

  getArtists(){
    return this.htppClient.get(this.urlBase);
  }
}
