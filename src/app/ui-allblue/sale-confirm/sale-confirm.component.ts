import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'sale-confirm',
  templateUrl: './sale-confirm.component.html',
  styleUrls: ['./sale-confirm.component.scss']
})
export class SaleConfirmComponent implements OnInit {
  displayedColumns = ['position', 'name', 'phonenumber', 'accepted', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  phonenumber: string;
  accepted: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: '신지호', phonenumber: '010-9788-0849', accepted: 'accepted' },
  { position: 2, name: '원은지', phonenumber: '010-123-4567', accepted: 'accepted' },
  { position: 3, name: '민지호', phonenumber: '010-123-4657', accepted: 'accepted' },
  { position: 4, name: '권지혜', phonenumber: '010-123-4567', accepted: 'accepted' },
  { position: 5, name: '강현우', phonenumber: '010-123-4561', accepted: 'accepted' },
  { position: 6, name: '최민우', phonenumber: '010-123-4567', accepted: 'unconfirmed' },
  { position: 7, name: '문세미', phonenumber: '010-123-4567', accepted: 'unconfirmed' },
  { position: 8, name: '김응가', phonenumber: '010-123-4567', accepted: 'unconfirmed' },
  { position: 9, name: '권소영', phonenumber: '010-123-4567', accepted: 'rejected' },
  { position: 10, name: '심소정', phonenumber: '010-123-4567', accepted: 'rejected' },
];