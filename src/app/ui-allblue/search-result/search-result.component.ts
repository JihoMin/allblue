import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Sales } from '../../Sales';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';



//import 'rxjs/add/operator/map'; // 설치가 안됐나? rxjs 설치 해야하나?
@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  SalesCollection: AngularFirestoreCollection<Sales>;
  Sale: Observable<Sales[]>; // 리턴 값이다. 
  sales: Sales[] = []; // html로 연동하기 위한 변수
  //
  searchValue_productName: string = "";
  searchValue_tag: string = ""; // 나중에 대쉬보드에서 태그 클릭하면 그 값을 여기다가 넣어주기!!!!
  results_productName: any;
  results_tag1: any;
  results_tag2: any;
  results_tag3: any;

  mytag: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public afs: AngularFirestore, // 
    private db: AngularFireDatabase,
  ) {
    this.mytag = this.route.snapshot.paramMap.get('keyword');
  }
  ngOnInit() {
    //this.receiveSales();

  }
  /*
    getSales(){
      this.SalesCollection = this.afs.collection<Sales>('sales');
      this.Sale = this.SalesCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Sales;
          //const id = a.payload.doc.id;
          return data;
        }))
      );
      return this.Sale;
    }
    receiveSales(){
      this.getSales().subscribe(S =>{
        console.log("대쉬보드에서 히어로 받았다");
        this.sales = S;
      })
    }
  */
  search_productName() {
    let self = this;
    if (self.searchValue_productName != '') { // 빈칸이 안들어가게 하기
      self.results_productName = self.afs.collection(`sales`, ref => ref
        .orderBy("productName")
        .startAt(self.searchValue_productName)
        .endAt(self.searchValue_productName + "\uf8ff")
        .limit(10))
        .valueChanges();
    }
  }

  search_tag() { // 대쉬보드에서 이 함수에 인자 넣어서 부르게 하기 
    let self = this;
    //self.search_tag = tag;
    if (self.searchValue_tag != '') {
      self.results_tag1 = self.afs.collection(`sales`, ref => ref
        .orderBy("tag1")
        .startAt(self.searchValue_tag)
        .endAt(self.searchValue_tag + "\uf8ff")
        .limit(10))
        .valueChanges();

      self.results_tag2 = self.afs.collection(`sales`, ref => ref
        .orderBy("tag2")
        .startAt(self.searchValue_tag)
        .endAt(self.searchValue_tag + "\uf8ff")
        .limit(10))
        .valueChanges();

      self.results_tag3 = self.afs.collection(`sales`, ref => ref
        .orderBy("tag3")
        .startAt(self.searchValue_tag)
        .endAt(self.searchValue_tag + "\uf8ff")
        .limit(10))
        .valueChanges();
    }
  }
}

