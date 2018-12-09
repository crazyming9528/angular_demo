import {Component, OnInit} from '@angular/core';

@Component({
  selector: `child`,
  inputs: [`name`, `age`],
  template: `myName:{{name}},myAge{{age}}`
})
export class Child {
  name: string;
  age: number;

}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  value = '测试文本';



  constructor() {
  }

  birthday = Date.now();
  toggle: boolean;
  testAuth: number[] = [0, 1, 0, 1];
  user=[
    { id: 1, name: 'crazyming12', job: 'java' },
    { id: 1, name: 'crazyming212313', job: 'php' },
    { id: 1, name: 'crazyming321', job: 'c#' },
    { id: 1, name: 'crazyming368761', job: 'font-end' },
    { id: 1, name: 'crazyming321', job: 'nodejs' },
    { id: 1, name: 'crazyming3873', job: 'font-end' },
    ];

  get format() {
    return this.toggle ? `shortDate` : `fullDate`;
  }

  toggleFn() {
    this.toggle = !this.toggle;
  }

  addUser(){
    this.user.push({ id: 99999, name: 'crazyming99999999', job: 'font-end' });
  }
  addUser2(){
   const arr:any[]=[];
    arr.push({ id: 66666, name: 'crazyming66666', job: 'font-end' });
    this.user=arr.concat(this.user);
  }

  ngOnInit() {
  }

}
