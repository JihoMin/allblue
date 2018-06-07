import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { UploadPageComponent } from './uploads/upload-page/upload-page.component';

import { SsrPageComponent } from './ui/ssr-page/ssr-page.component';
import { SaleConfirmComponent } from './ui-allblue/sale-confirm/sale-confirm.component';
import { MySalesComponent } from './ui-allblue/my-sales/my-sales.component';
import { DashboardComponent } from './ui-allblue/dashboard/dashboard.component';
import { SaleUpdateComponent } from './ui-allblue/sale-update/sale-update.component';
import { SearchResultComponent } from 'src/app/ui-allblue/search-result/search-result.component';
import { CreateSaleComponent } from 'src/app/ui-allblue/create-sale/create-sale.component';
import { DetailsComponent } from 'src/app/ui-allblue/details/details.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'uploads',  component: UploadPageComponent,  canActivate: [AuthGuard] },
  { path: 'ssr', component: SsrPageComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'my_sales', component: MySalesComponent},
  { path: 'sale_confirm/:id', component: SaleConfirmComponent},
  { path: 'sale_update', component: SaleUpdateComponent},
  //{ path: 'search_result/:keyword', component: SearchResultComponent}, // 은지가 result page 수정함.
  { path: 'search_result', component: SearchResultComponent},
  { path: 'create_sale', component: CreateSaleComponent, canActivate: [AuthGuard]},
  { path: 'detail/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
