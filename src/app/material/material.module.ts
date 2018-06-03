import { NgModule } from '@angular/core';
import { MatButtonModule, MatDividerModule, MatSelectModule, MatDatepickerModule, MatOptionModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  ],
  declarations: []
})
export class MaterialModule { }
