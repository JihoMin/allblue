import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Router } from '@angular/router';
import { SearchResultComponent } from './ui-allblue/search-result/search-result.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  search = '';
  constructor(
    private auth: AuthService,
    private router: Router,
    private searchResult: SearchResultComponent,
  ) {
  }

  logout() {
    this.auth.signOut();
  }



}