import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,) { }

  getTestData(index){
    return new Promise((resolve, reject) => {
      // let options = new RequestOptions({ headers: this.headers });
      this.http.get("https://randomuser.me/api/?page="+index+"&results=2&seed=feed")
      .subscribe((res:any) => {
          resolve(res);
      }, (err) => {
          reject(err);
      });
  });
   }

}
