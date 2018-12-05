import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  welcome = `欢迎 ADMIN MING 登录！`;



  demoList = [
    `ng generate module app-routing --flat --module=app`,
    `app-routing.module.ts 导入页面组件，配置路由`,
    `输出位置   <router-outlet></router-outlet>`,
    `路由链接<a [routerLink]=['phone']>通讯录</a>`,
    `子路由`,
      `路由传参`,
    `默认路由`,
    `通配符路由`,


  ];

  constructor() {
    console.log(this);
  }


  ngOnInit() {
    console.log(this);
  }

  toFather() {
    alert(' i am  your father');
  }

}
