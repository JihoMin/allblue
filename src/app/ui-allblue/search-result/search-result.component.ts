import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  search = '';
  constructor(    
    private route: ActivatedRoute,) {}
  
  ngOnInit() {

  }
  getSearch(searchResult){
    console.log("겟서치 함수 인자 " + searchResult);
    this.search = searchResult;
    console.log("this.search " + this.search);
    //const search = this.route.snapshot.paramMap.get('keyword'); // 안받아짐.


   }
}
