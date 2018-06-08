import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//EJ
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Sales } from '../../Sales';
import { Observable } from 'rxjs';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  animal: string;
  name: string;
  
  //EJ
  SalesDOC: AngularFirestoreDocument<Sales>;
  id: string; 
  //SALES: Observable<Sales>;
  @Input() sales: Sales = {
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

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public afs: AngularFirestore,

  ) { }

  ngOnInit() {
    this.getSales();
  }
  
  // EJ
  getSales(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.SalesDOC = this.afs.doc<Sales>('sales/' + this.id);
    this.SalesDOC.valueChanges().subscribe(S => this.sales = S);
    console.log(this.sales);
    
  }
  //

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