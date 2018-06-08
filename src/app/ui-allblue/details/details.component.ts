import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//EJ
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Sales } from '../../Sales';
import { map } from 'rxjs/operators';
//
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  animal: string;
  name: string;
  // //EJ
  // SalesDOC: AngularFirestoreDocument<Sales>;
  // SALES: Observable<Sales>;
  // //sales: any;
  // @Input() sales: Sales = {
  //   date: '',
  //   description: '',
  //   place: '',
  //   price: 0,
  //   imageURL: '',
  //   productName: '',
  //   salesID: '',
  //   time: 0,    
  //   title: '',
  //   userID: '',
  //   tag1: '',
  //   tag2: '',
  //   tag3: '',
  // }

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public afs: AngularFirestore,

  ) { }

  ngOnInit() {
    // this.getSales();
  }
 
  // EJ
  // getSales(){
  //   const id = this.route.snapshot.paramMap.get('id');
  //   //console.log(id);
  //   this.SalesDOC = this.afs.doc<Sales>('sales/' + id);
  //   this.SALES = this.SalesDOC.valueChanges();
  //   this.SALES.subscribe(S => this.sales = S);
  //   console.log(this.sales);
  
  // }


  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: { name: this.name, animal: this.animal }
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

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  onClick(): void{
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}