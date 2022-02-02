import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  feedList=[];
  pageIndex = 1;

  constructor(private apiService: ApiService, private commonService: CommonService) {
    this.getdata();
  }

  getdata(){
    this.commonService.Loadingpresent();
    this.apiService.getTestData(this.pageIndex).then((res:any) => {
      this.commonService.Loadingdismiss();
      console.log('the response ', res);
      this.feedList = res.results;
    })
  }

  loadData(infiniteScroll){
    console.log('infinite scroll worked');     
           this.pageIndex++;
           this.apiService.getTestData(this.pageIndex).then((res:any) => {
              this.feedList = this.feedList.concat(res.results);
              infiniteScroll.target.complete();
          },err => {
            infiniteScroll.target.complete();
          });

    } 

}
