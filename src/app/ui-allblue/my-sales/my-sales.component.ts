import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from '../../core/auth.service';
import { Sales } from '../../Sales';
import { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.scss']
})

export class MySalesComponent implements OnInit {
  saleSnapShot: any;
  private saleCollection: AngularFirestoreCollection<Sales>;
  userID: string;
  salesCollection: AngularFirestoreCollection<any>
  my_sales: Sales[] = [];

  constructor(public afstore: AngularFirestore, private auth: AuthService) {

    auth.user.subscribe(doc => {
      this.userID = doc.uid;
      // this.salesCollection = afstore.collection('sales', ref => ref.where('userID', '==', doc.uid));

      // this.saleSnapShot = this.saleCollection.snapshotChanges().pipe(
      //   map(actions => actions.map(a => {
      //     const data = a.payload.doc.data() as Sales;
      //     const id = a.payload.doc.id;
      //     return { id, data };
      //   }))
      // ).subscribe(S => {
      //   this.my_sales = S;
      // });

      let self = this;
      self.saleSnapShot = self.afstore.collection(`sales`, ref => ref
        .orderBy("userID")
        .startAt(self.userID)
        .endAt(self.userID + "\uf8ff")
        .limit(10))
        .snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Sales;
            const id = a.payload.doc.id;
            return { data, id };
          }))
        ).subscribe(S => {
          this.my_sales = S;
        }
        )


    });

  }

  ngOnInit() {

  }
}

