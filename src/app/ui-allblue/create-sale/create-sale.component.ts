import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/';
import { of } from 'rxjs/';
import { AuthService } from '../../core/auth.service'
import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { AngularFireStorage, 
         AngularFireStorageReference,
         AngularFireUploadTask,
         } from 'angularfire2/storage';

import { AngularFirestore ,
         AngularFirestoreCollection, 
         AngularFirestoreDocument} from 'angularfire2/firestore';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.scss']
})
export class CreateSaleComponent implements OnInit {

  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  salesCollection: AngularFirestoreCollection<any>;
  salesDocument:   AngularFirestoreDocument<any>;


  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private auth: AuthService,
  ) { 
    this.salesCollection = this.db.collection('sales');
  }

  ngOnInit() {
  }

  gaeshi(
    title: String, 
    productName: String, 
    price: String,
    date: String,
    time: String,
    place: String,
    description: String,
    tag1: string,
    tag2: string,
    tag3: string,
    account: string
  ) {

      let downloadURL;
      let userID;
      
      if(!tag1)
        tag1 = " ";
      if(!tag2)
        tag2 = " ";
      if(!tag3)
        tag3 = " ";
      
      this.auth.user.subscribe(doc => {
       userID = doc.uid;
        this.downloadURL.subscribe(url => {
          downloadURL = url.toString();
          console.log(downloadURL);
          this.salesCollection.add({
            'curTime': new Date().getTime(),
            'date': date,
            'description': description,
            'imageURL': downloadURL,
            'place': place,
            'price': price,
            'productName': productName,
            'time': time + '시',
            'title': title,
            'userID': userID,
            'tag1': tag1,
            'tag2': tag2,
            'tag3': tag3,
            'account': account
          }) 
        })
      })

      
      
    }

  startUpload(event: FileList){
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    console.log(this.percentage)
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.db.collection('photos').add({ path, size: snap.totalBytes });
          console.log("this is tap")
        }
      }),
      finalize(() => {
        this.downloadURL = this.storage.ref(path).getDownloadURL();
        console.log(this.downloadURL);
      })
    );


    // The file's download URL
  }
}
