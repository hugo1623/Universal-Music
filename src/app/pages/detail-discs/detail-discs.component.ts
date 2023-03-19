import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscService } from '../../services/disc.service';

@Component({
  selector: 'app-detail-discs',
  templateUrl: './detail-discs.component.html',
  styleUrls: ['./detail-discs.component.css'],
})
export class DetailDiscsComponent {
  disc: any = {};
  constructor(
    private router: ActivatedRoute,
    private discService: DiscService
  ) {
    router.params.subscribe((data) => {
      // console.log('Este es el ID :' + data['id']);
      this.getDiscById(data['id']);
    });
  }
  getDiscById(id: number) {
    this.discService.getDiscById(id).subscribe((data) => {
      this.disc = data;
    });
  }
}
