import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
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
  salesCollection : AngularFirestoreCollection<any>


  constructor(public afstore: AngularFirestore, private auth: AuthService) {
    auth.user.subscribe(doc => {
      this.my_sales = afstore.collection('sales', ref => ref.where('userID', '==', doc.uid)).valueChanges();
      afstore.collection('sales', ref => ref.where('userID', '==', doc.uid)).snapshotChanges().subscribe(actions =>{
        actions.map( a => {
          let data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
            this.userID = data;        
        });
      });
    });
  }

  ngOnInit() {
    console.log("my-sales loaded, uID: " + this.userID);

    
  }
}

