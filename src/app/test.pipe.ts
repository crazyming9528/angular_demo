import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'auth'
})
export class TestPipe implements PipeTransform {

  transform(value: number, args?: any): any {

    if (value===1){
      return `管理员`;
    }else {
      return `普通用户`;
    }

  }

}


@Pipe({
  name: 'job'
})
export class JobPipe implements PipeTransform {

  transform(array: any, args?: any): any {

    return array.filter(item=>item.job==='font-end');

  }

}
