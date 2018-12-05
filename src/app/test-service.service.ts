import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

log(){
  console.log( `i am  test service`);
}

  constructor() { }
}
