import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesListRoutingModule } from './employees-list-routing.module';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeesListRoutingModule,
    SharedModule
  ]
})
export class EmployeesListModule {
}
