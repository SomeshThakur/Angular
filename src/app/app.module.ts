import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { Comp4Component } from './components/comp4/comp4.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { Comp5Component } from './components/comp5/comp5.component';
import { Comp6Component } from './components/comp6/comp6.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { Task1Component } from './components/task1/task1.component';
import { Task3Component } from './components/task3/task3.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    LeftComponent,
    RightComponent,
    NavigationBarComponent,
    Task1Component,
    Task3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
