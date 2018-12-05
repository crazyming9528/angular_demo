import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  configUrl = 'http://120.78.149.155:8040/user/getAll?pageNum=1&pageSize=2';
  requestApi() {
    return this.http.get(this.configUrl);
  }
}
