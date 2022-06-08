import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeesComponent } from './employees/employees.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminFinancialComponent } from './admin-financial/admin-financial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewComponent } from './announcements/view/view.component';
import { AddComponent } from './announcements/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDoctorComponent } from './doctors/add-doctor/add-doctor.component';
import { DoctorViewComponent } from './doctors/doctor-view/doctor-view.component';
import { AddSpecialistComponent } from './doctors/add-specialist/add-specialist.component';


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
    
    ViewComponent,
    AddComponent,
    AddDoctorComponent,
    DoctorViewComponent,
    AddSpecialistComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ]
})
export class AdminModule { }
