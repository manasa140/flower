import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerComponent } from './flower/flower.component';
import { FlowerorderComponent } from './flowerorder/flowerorder.component';
import { FlowerService } from './services/flowerService';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './services/register/register.component';
import { UserserviceService } from './services/userservice.service';
import { LoginComponent } from './login/login.component';

var myRoutes:Route[]=[
  {path:'register',component:RegisterComponent},
  {path:'flower',component:FlowerComponent},
  {path:'flowerorder',component:FlowerorderComponent},
  {path:'summary',component:SummaryComponent},
  {path:'login',component:LoginComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FlowerComponent,
    FlowerorderComponent,
    SummaryComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  
  providers: [FlowerService,UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
