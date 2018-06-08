import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Sales } from '../../Sales';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'detailss',
  templateUrl: './details-s.component.html',
  styleUrls: ['./details-s.component.scss']
})

export class DetailsComponent implements OnInit {
  @Input() sale: Sales = {
    date: '',
    description: '',
    place: '',
    price: 0,
    imageURL: '',
    productName: '',
    salesID: '',
    time: 0,    
    title: '',
    userID: '',
    tag1: '',
    tag2: '',
    tag3: '',
  }

  animal: string;
  name: string;
  id: string;
  salesCollection: AngularFirestoreCollection<any> = this.afs.collection('sales');
  // //EJ
  // SalesDOC: AngularFirestoreDocument<Sales>;
  // SALES: Observable<Sales>;
  // //sales: any;ß
  
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public afs: AngularFirestore,
    public auth: AuthService,

  ) { }

  ngOnInit() {
    this.getSales();
  }
 
  getSales(){
     this.id = this.route.snapshot.paramMap.get('id');
    
    this.salesCollection.doc(this.id).ref.get().then( (doc) =>{
      console.log(doc.id);
      this.sale.id = doc.id;
      console.log(this.sale.id,"id");
      this.sale.curTime = doc.data().curTime;
      this.sale.date = doc.data().date;
      this.sale.description = doc.data().description;
      this.sale.place = doc.data().place;
      this.sale.imageURL = doc.data().imageURL;
      this.sale.price = doc.data().price;
      this.sale.productName = doc.data().productName;
      this.sale.tag1 = doc.data().tag1;
      this.sale.tag2 = doc.data().tag2;
      this.sale.tag3 = doc.data().tag3;
      this.sale.time = doc.data().time;
      this.sale.title = doc.data().title;
      this.sale.userID = doc.data().userID;
      this.sale.account = doc.data().account;
    });
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: { sale: this.sale, docID: this.id }
    });

    console.log("hi");

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {

  @Input() sale: Sales = {
    date: '',
    description: '',
    place: '',
    price: 0,
    imageURL: '',
    productName: '',
    salesID: '',
    time: 0,    
    title: '',
    userID: '',
    tag1: '',
    tag2: '',
    tag3: '',
    account: '',
  }

  salesCollection: AngularFirestoreCollection<any> = this.afs.collection('sales');

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      public auth: AuthService,
      public afs: AngularFirestore,
    ) { 
      this.sale = data.sale;
    }
  
  onCancel(): void{
    this.dialogRef.close();
    
  }
  onClick(): void{
    this.auth.user.subscribe( doc => {
      this.salesCollection.doc(this.data.docID).collection('joiners').add({
        "joinerName": doc.displayName,
        "joinerID": doc.uid,
        "state": "unconfirmed",
        "email": doc.email
      })
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}