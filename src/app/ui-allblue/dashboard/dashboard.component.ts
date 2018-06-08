import { Component, OnInit } from '@angular/core';
import { SearchResultComponent } from '../search-result/search-result.component';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public src: SearchResultComponent, private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['search_result']);
  }
}