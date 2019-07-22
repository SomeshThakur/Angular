import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { Comp4Component } from './components/comp4/comp4.component';
import { Comp5Component } from './components/comp5/comp5.component';
import { Task1Component } from './components/task1/task1.component';
import { Task3Component } from './components/task3/task3.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: "task1", component: Task1Component, children: [
      { path: "com1", component: Comp1Component },
      { path: "com3", component: Comp3Component },
      { path: "com4", component: Comp4Component }]
  },
  { path: "task2", component: Comp5Component },
  {
    path: "task3", component: Task3Component, children: [
      { path: "cricket", loadChildren: () => import('./cricket/cricket.module').then(mod => mod.CricketModule) }
    ]
  },
  { path: "", component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
