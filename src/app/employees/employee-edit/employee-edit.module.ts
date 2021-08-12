import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeesEditRoutingModule } from './employee-edit-routing.module';

@NgModule({
  declarations: [
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    EmployeesEditRoutingModule,
    SharedModule
  ]
})
export class EmployeesEditModule {
}
