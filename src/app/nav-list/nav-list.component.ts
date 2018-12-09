import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  routerList:any[]=[
    {name:`首页`,link:`home`},
    {name:`通讯录`,link:`phone`},
    {name:`员工管理`,link:`user`},
    {name:`工时管理`,link:`work`},
    {name:`页面`,link:`home`},
    {name:`页面`,link:`home`},
    {name:`页面`,link:`home`},
    {name:`首页`,link:`home`}
  ];
  constructor() { }

  ngOnInit() {
  }

}
