import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index.routing';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
