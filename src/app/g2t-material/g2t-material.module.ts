import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule],
  declarations: []
})
export class G2tMaterialModule { }
