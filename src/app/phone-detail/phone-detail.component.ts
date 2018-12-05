import {Component, OnInit,} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit {

  name: String;

  constructor(private  route: ActivatedRoute) {

    this.name = '';
    this.name = route.snapshot.params['name'];

  }

  ngOnInit() {
  }

}
