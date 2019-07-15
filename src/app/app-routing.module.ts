import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { Comp4Component } from './components/comp4/comp4.component';
import { Comp5Component } from './components/comp5/comp5.component';

const routes: Routes = [
  { path: "com1", component: Comp1Component },
  { path: "com3", component: Comp3Component },
  { path: "com4", component: Comp4Component },
  { path: "task2", component: Comp5Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
