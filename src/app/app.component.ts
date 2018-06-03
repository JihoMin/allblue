import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  showFiller = false;
  
  constructor(private auth: AuthService) {
    this.showFiller = false;
  }
  logout() {
    this.auth.signOut();
  }

}
