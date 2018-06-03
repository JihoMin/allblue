import { NgModule } from '@angular/core';
import { MatButtonModule, MatDividerModule, MatSelectModule, MatDatepickerModule, MatOptionModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatOptionModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatOptionModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
