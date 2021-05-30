
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { DoctorDashBoardComponent } from './doctor-dash-board/doctor-dash-board.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { SuppliersDashBoardComponent } from './suppliers-dash-board/suppliers-dash-board.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { SupplierloginComponent } from './supplierlogin/supplierlogin.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideshowComponent,
    LoginComponent,
    UserDashBoardComponent,
    DoctorDashBoardComponent,
    AdminDashBoardComponent,
    SuppliersDashBoardComponent,
    ImageViewerComponent,
    DoctorloginComponent,
    SupplierloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
