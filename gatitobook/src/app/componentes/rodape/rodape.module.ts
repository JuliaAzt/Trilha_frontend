import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RodapeComponent
  ],
  exports: [RodapeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RodapeModule { }
