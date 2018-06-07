import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { JsonpInterceptor } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'sale-confirm',
  templateUrl: './sale-confirm.component.html',
  styleUrls: ['./sale-confirm.component.scss']
})

export class SaleConfirmComponent implements OnInit {
  joiners: Observable<any[]>;
  displayedColumns = ['position', 'name', 'accepted', 'action'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  id: string;
  constructor(public afstore: AngularFirestore,private route: ActivatedRoute, private auth: AuthService){
    this.id = this.route.snapshot.paramMap.get('id');
    this.auth.user.subscribe(doc => {
      this.joiners = afstore.collection(doc.uid).doc(this.id).collection('joiner').valueChanges();
    })
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  accepted: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: '신지호', phonenumber: '010-9788-0849', accepted: 'accepted' },
//   { position: 2, name: '원은지', phonenumber: '010-123-4567', accepted: 'accepted' },
//   { position: 3, name: '민지호', phonenumber: '010-123-4657', accepted: 'accepted' },
//   { position: 4, name: '권지혜', phonenumber: '010-123-4567', accepted: 'accepted' },
//   { position: 5, name: '강현우', phonenumber: '010-123-4561', accepted: 'accepted' },
//   { position: 6, name: '최민우', phonenumber: '010-123-4567', accepted: 'unconfirmed' },
//   { position: 7, name: '문세미', phonenumber: '010-123-4567', accepted: 'unconfirmed' },
//   { position: 8, name: '김응가', phonenumber: '010-123-4567', accepted: 'unconfirmed' },
//   { position: 9, name: '권소영', phonenumber: '010-123-4567', accepted: 'rejected' },
//   { position: 10, name: '심소정', phonenumber: '010-123-4567', accepted: 'rejected' },
// ];