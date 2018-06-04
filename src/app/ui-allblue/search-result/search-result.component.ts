import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  keyword = '';

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {}
  
  ngOnInit() {
    this.getSearch();
  }
  getSearch(){
    this.keyword = this.route.snapshot.paramMap.get('keyword');
    console.log("겟 서치 키워드 " + this.keyword);
    //location.reload();
   }
}
