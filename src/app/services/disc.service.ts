import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscService {

  urlBase: string ='https://localhost:7283/api/Disc';

  constructor(private httpClient: HttpClient) {
   }
   getDiscs(){
    return this.httpClient.get(this.urlBase);
   }
}
