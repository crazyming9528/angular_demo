import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import {User,} from '../interface';




@Component({
  selector: 'app-user-d',
  templateUrl: './user-d.component.html',
  styleUrls: ['./user-d.component.scss']
})
export class UserDComponent implements OnInit {


  @Input() user:User;
  @Input() user2:string;
  @Output() op =new  EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  ngChange(){

  }

  updateUser(){

    console.log(`update ${this.user2}`);
    this.op.emit(this.user2);



  }

}
