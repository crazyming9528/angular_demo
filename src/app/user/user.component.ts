import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {User, Res} from './interface';

import {UserDComponent} from './user-d/user-d.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  list: Object[] = [];

  selectedUser: User;
  selectedUser2: string;

  userList: User[] = [
    {id: 1, name: `crazyming1`, gender: '男'},
    {id: 2, name: `crazyming2`, gender: `男`},
    {id: 3, name: `crazyming3`, gender: `男`},
    {id: 4, name: `crazyming4`, gender: `男`},
    {id: 5, name: `crazyming5`, gender: `男`},
    {id: 6, name: `crazyming6`, gender: `男`},
    {id: 7, name: `crazyming7`, gender: `男`}
  ];


  userList2: string[] = ['crazy1', 'crazy2', 'crazy3', 'crazy4', 'crazy5', 'crazy6', 'crazy7', 'crazy8'];

  @ViewChild(UserDComponent)
  private child:UserDComponent;

  constructor(private data: DataService) {
  }

  ngOnInit() {


  }

  testApi() {

    const ob = this.data.requestApi();
    ob.subscribe((res: Res) => {
      const {code, map, map: {pageInfo, pageInfo: {list}}, message} = res;
      console.log(code, map, pageInfo, list, message);
      this.list = list;
    });

  }


  chooseUserFnc(user: User) {

    this.selectedUser = user;
    console.log(this.selectedUser);
  }

  chooseUserFnc2(user: string) {
    this.selectedUser2 = user;
    console.log(this.selectedUser2);
  }


  fromChild(value: string) {
    alert(`from child component-->${value}`);
    console.log(`收到来自子组件的事件 ${value}`);
    this.changeName(value);
  }

  changeName(value: string) {

    const index = this.userList2.indexOf(this.selectedUser2);
    index !== -1 ? this.userList2.splice(index, 1, value) : console.log(`can't not find ${this.selectedUser2}`);

    this.selectedUser2 = value;

  }

  consoleFn(v) {
    console.log(v);
  }


  callChild(type:string){

    if(type === 'property'){
      alert(this.child.value);
    }else {
      this.child.alertFn();
    }
  }


}
