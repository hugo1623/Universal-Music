import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detail-discs',
  templateUrl: './detail-discs.component.html',
  styleUrls: ['./detail-discs.component.css']
})
export class DetailDiscsComponent {

  constructor(private router: ActivatedRoute) { 
    router.params.subscribe(data =>{
      console.log('Este es el ID :' +data['id']);
    })
  }


}
