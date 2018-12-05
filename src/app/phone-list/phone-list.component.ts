import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {
  @Input() phoneData;
  @Output() diyEvent = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }


  clickMe(val) {

    alert(val);

  }

  hehe() {
    this.diyEvent.emit();

  }


}
