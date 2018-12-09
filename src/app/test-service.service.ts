import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

log(){

  alert(`i am  test service`);
  console.log( `i am  test service`);
}

  constructor() { }
}
