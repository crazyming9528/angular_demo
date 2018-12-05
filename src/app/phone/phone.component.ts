import {Component, OnInit, Input} from '@angular/core';
import {TestServiceService} from '../test-service.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  providers:[TestServiceService]
})

export class PhoneComponent implements OnInit {

  phoneList = [

    {name: `aaaa`, phonenumber: `123456789789`},
    {name: `bbbb`, phonenumber: `4566589`},
    {name: `cccccc`, phonenumber: `0000789`},
    {name: `name`, phonenumber: `123456789789`},
    {name: `name`, phonenumber: `123456789789`},
    {name: `name`, phonenumber: `123456789789`},

  ];
  constructor(private test:TestServiceService) {



  }


testService(){
  this.test.log();
}
  ngOnInit() {



  }

  toFather() {

    alert(' i am  your father');

  }
}
