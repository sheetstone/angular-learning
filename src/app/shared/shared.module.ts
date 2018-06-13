import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './convert-to-spaces';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpacePipe
  ],
  exports: [
    StarComponent,
    ConvertToSpacePipe,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
