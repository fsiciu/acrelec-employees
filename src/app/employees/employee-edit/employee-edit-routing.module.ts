import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEditComponent } from './employee-edit.component';

const routes: Routes = [
  {
    path: ':id',
    component: EmployeeEditComponent,
    data: { animation: 'isRight' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesEditRoutingModule {
}
