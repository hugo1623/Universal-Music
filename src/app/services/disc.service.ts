import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscService {

  urlBase: string ='http://localhost:7283/api/Disc';

  constructor(private httpClient: HttpClient) {
   }
   getDiscs(){
    return this.httpClient.get(this.urlBase);
   }
   getDiscById(id :number){
    return this.httpClient.get(`${this.urlBase}/${id}`)
   }
}
