import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhagiComponent } from './bhagi.component';
import { BhagyasreeComponent } from './bhagyasree/bhagyasree.component';

const routes: Routes = [{ path: '', component: BhagiComponent ,
children:[{path:"pass", component:BhagyasreeComponent},
]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BhagiRoutingModule { }
