import { Component} from '@angular/core';
import {Router} from '@angular/router'
import { DiscService } from 'src/app/services/disc.service';

@Component({
  selector: 'app-discs',
  templateUrl: './discs.component.html',
  styleUrls: ['./discs.component.css']
})
export class DiscsComponent{

  discs : any = [];
  constructor(private discDervice: DiscService, private router: Router) {
    this.getDiscs();
  }
  getDiscs(){
    this.discDervice.getDiscs()
    .subscribe((data) => {
      this.discs = data;
    })
  }
  showDetail(id: number){
    this.router.navigate(['/discs', id])
  }
}
