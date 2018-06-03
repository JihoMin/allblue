import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.scss']
})
export class MySalesComponent implements OnInit {
  my_sales: Observable<any[]>;
  userID: any;
  constructor(public afstore: AngularFirestore, private auth: AuthService) {
    auth.user.subscribe(doc => {
      this.my_sales = afstore.collection('sales', ref => ref.where('userID', '==', doc.uid)).valueChanges();
    })
  }

  ngOnInit() {
    console.log("my-sales loaded, uID: " + this.userID);
  }
}

