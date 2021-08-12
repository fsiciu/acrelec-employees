import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employee-list/employees-list.module').then(m => m.EmployeesListModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () => import('./employees/employee-edit/employee-edit.module').then(m => m.EmployeesEditModule)
  },
  {
    path: '**',
    redirectTo: 'employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
