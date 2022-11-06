import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BhagiRoutingModule } from './bhagi-routing.module';
import { BhagiComponent } from './bhagi.component';
import { BhagyasreeComponent } from './bhagyasree/bhagyasree.component';


@NgModule({
  declarations: [
    BhagiComponent,
    BhagyasreeComponent
  ],
  imports: [
    CommonModule,
    BhagiRoutingModule
  ],
  exports:[
    BhagyasreeComponent
  ]
})
export class BhagiModule { }
