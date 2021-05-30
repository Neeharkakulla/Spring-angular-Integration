import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { DoctorDashBoardComponent } from './doctor-dash-board/doctor-dash-board.component';
import { HomeComponent } from './home/home.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { SuppliersDashBoardComponent } from './suppliers-dash-board/suppliers-dash-board.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';

const routes: Routes = [
 
  {
    path:'userdashboard',
    component:UserDashBoardComponent,
    pathMatch:'full'
  },
  {
    path:'suppliersdashboard',
    component:SuppliersDashBoardComponent,
    pathMatch:'full'
  },
  {
    path:'admindashboard',
    component:AdminDashBoardComponent,
    pathMatch:'full'
  },
  {
    path:'doctordashboard',
    component:DoctorDashBoardComponent,
    pathMatch:'full'
  },
  {
    path:'view-document',
    component:ImageViewerComponent,
    pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
