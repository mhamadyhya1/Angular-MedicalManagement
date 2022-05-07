import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminFinancialComponent } from './admin-financial/admin-financial.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddComponent } from './announcements/add/add.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ViewComponent } from './announcements/view/view.component';
import { AddModalComponent } from './doctors/add-modal/add-modal.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { EmployeesComponent } from './employees/employees.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
children:[
  {path:'home',component:AdminHomeComponent},
  {path:'patient',component:PatientsComponent},
  {path:'doctors',component:DoctorsComponent,
   children:[
    {path:'add',component:AddModalComponent},
   ]
},
  {path:'employees',component:EmployeesComponent},
  {path:'announcements',component:AnnouncementsComponent,
  children:[
    {path:'',component:ViewComponent},
    {path:'addAnnouncement',component:AddComponent},
   ]},
  {path:'financial',component:AdminFinancialComponent},
  
  
  
],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
