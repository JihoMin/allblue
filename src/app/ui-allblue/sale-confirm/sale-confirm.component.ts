import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { JsonpInterceptor } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sale-confirm',
  templateUrl: './sale-confirm.component.html',
  styleUrls: ['./sale-confirm.component.scss']
})

export class SaleConfirmComponent implements OnInit {
  joiners: any[];
  displayedColumns = ['position', 'name', 'accepted', 'action'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  salesID: string;

  constructor(public afstore: AngularFirestore,private route: ActivatedRoute, private auth: AuthService){
    
    this.salesID = this.route.snapshot.paramMap.get('id');
    this.auth.user.subscribe(doc => {
      afstore.collection('sales').doc(this.salesID).collection('joiners').snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { data, id };
        }))
      ).subscribe(S => {
        this.joiners = S;
      })
    });

  }

  ngOnInit() {
  }

  onClickAccept(joinerID){
    this.afstore.collection('sales').doc(this.salesID).collection('joiners').doc(joinerID).update({
      "state" : "Accepted!"
    });
  }

  onClickReject(joinerID){
    this.afstore.collection('sales').doc(this.salesID).collection('joiners').doc(joinerID).update({
      "state" : "Rejected!!"
    });
  }

}