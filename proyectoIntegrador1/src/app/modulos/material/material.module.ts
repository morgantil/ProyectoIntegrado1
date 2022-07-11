import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
