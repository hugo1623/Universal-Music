import { Component} from '@angular/core';
import { DiscService } from 'src/app/services/disc.service';

@Component({
  selector: 'app-discs',
  templateUrl: './discs.component.html',
  styleUrls: ['./discs.component.css']
})
export class DiscsComponent{

  discs : any = [];
  constructor(private discDervice: DiscService) {
    this.getDiscs();
  }
  getDiscs(){
    this.discDervice.getDiscs()
    .subscribe((data) => {
      this.discs = data;
    })
  }

}
