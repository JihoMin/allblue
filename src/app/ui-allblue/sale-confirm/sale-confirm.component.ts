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
  salesID: string;

  constructor(public afstore: AngularFirestore,private route: ActivatedRoute, private auth: AuthService){
    this.salesID = this.route.snapshot.paramMap.get('id');
    this.auth.user.subscribe(doc => {
      this.joiners = afstore.collection('sales').doc(this.salesID).collection('joiners').valueChanges();
    });

  }

  asd(){

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }

  onClickAccept(){

  }

  onClickReject(){
    
  }

}