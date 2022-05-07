import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeesComponent } from './employees/employees.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminFinancialComponent } from './admin-financial/admin-financial.component';
import { AddModalComponent } from './doctors/add-modal/add-modal.component';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewComponent } from './announcements/view/view.component';
import { AddComponent } from './announcements/add/add.component';


@NgModule({
  declarations: [
    PatientsComponent,
    DoctorsComponent,
    AnnouncementsComponent,
    NavigationComponent,
    EmployeesComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    AdminFinancialComponent,
    AddModalComponent,
    ViewComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
    NgbModule
  ]
})
export class AdminModule { }
