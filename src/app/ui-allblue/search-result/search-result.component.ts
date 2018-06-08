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
  sales1: Sales[] = []; // html로 연동하기 위한 변수
  sales2: Sales[] = []; // html로 연동하기 위한 변수
  sales3: Sales[] = []; // html로 연동하기 위한 변수
  //
  searchValue_productName: string = "";
  searchValue_tag: string = ""; // 나중에 대쉬보드에서 태그 클릭하면 그 값을 여기다가 넣어주기!!!!
  results_productName: any;
  results_tag1: any;
  results_tag2: any;
  results_tag3: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public afs: AngularFirestore, // 
    private db: AngularFireDatabase,
  ) {
  }
  ngOnInit() {
    this.search_tag();

  }

  search_productName() {
    let self = this;
    if(self.searchValue_productName != ''){ // 빈칸이 안들어가게 하기
      self.results_productName = self.afs.collection(`sales`, ref => ref
        .orderBy("productName") 
        .startAt(self.searchValue_productName)
        .endAt(self.searchValue_productName + "\uf8ff")
        .limit(10))
        .snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Sales; 
            const id = a.payload.doc.id;
            return {data, id};
          }))
        ).subscribe(S => {
          this.sales = S;
        }
        )
    }
  }


  search_tag() { 
    let self = this;
    const keyword = this.route.snapshot.paramMap.get('keyword');
    self.searchValue_tag = keyword;
    console.log("받아온 태그 정보 : " + keyword);

    if(keyword != null && self.searchValue_tag != ''){
      self.results_tag1 = self.afs.collection(`sales`, ref => ref
        .orderBy("tag1")
        .startAt(self.searchValue_tag)
        .endAt(self.searchValue_tag + "\uf8ff")
        .limit(10))
        .snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Sales; 
            const id = a.payload.doc.id;
            return {data, id};
          }))
        ).subscribe(S => {
          this.sales1 = S;
        }
        )

    self.results_tag2 = self.afs.collection(`sales`, ref => ref
      .orderBy("tag2") 
      .startAt(self.searchValue_tag)
      .endAt(self.searchValue_tag + "\uf8ff")
      .limit(10))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Sales; 
          const id = a.payload.doc.id;
          return {data, id};
        }))
      ).subscribe(S => {
        this.sales2 = S;
      }
      )
      self.results_tag3 = self.afs.collection(`sales`, ref => ref
        .orderBy("tag3")
        .startAt(self.searchValue_tag)
        .endAt(self.searchValue_tag + "\uf8ff")
        .limit(10))
        .snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Sales; 
            const id = a.payload.doc.id;
            return {data, id};
          }))
        ).subscribe(S => {
          this.sales3 = S;
        }
        )
    }
  }
}

