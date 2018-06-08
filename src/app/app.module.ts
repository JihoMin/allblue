import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

// Firestarter App Modules
import { CoreModule } from './core/core.module';
import { UploadsModule } from './uploads/uploads.module';
import { UiModule } from './ui/ui.module';
import { NotesModule } from './notes/notes.module';

// AngularFire2 Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireFunctionsModule } from 'angularfire2/functions';

// project Allblue Modules
import { DashboardComponent } from './ui-allblue/dashboard/dashboard.component';
import { DetailsComponent, DialogOverviewExampleDialog } from './ui-allblue/details/details.component';
import { MySalesComponent } from './ui-allblue/my-sales/my-sales.component';
import { SaleConfirmComponent } from './ui-allblue/sale-confirm/sale-confirm.component';
import { SaleUpdateComponent } from './ui-allblue/sale-update/sale-update.component';
import { SearchResultComponent } from './ui-allblue/search-result/search-result.component';
import { CreateSaleComponent } from './ui-allblue/create-sale/create-sale.component';

import { FormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database';//

// See README for Firebase setup instructions
// 1. Delete Me!
// 2. Add your project credentials to environments/environment.ts
// 3. Then use it in the imports section below environment.firebase


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    MySalesComponent,
    SaleConfirmComponent,
    SaleUpdateComponent,
    SearchResultComponent,
    CreateSaleComponent,
    DialogOverviewExampleDialog
  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CoreModule,
    UiModule,
    NotesModule,
    UploadsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    
  ],
  providers: [ 
    SearchResultComponent,
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
