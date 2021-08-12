import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from '@app/core/models/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee | undefined;
  employeesLS = JSON.parse(<string>localStorage.getItem('employees'));

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap): void => {
      const employeeId = params.get('id');

      if (employeeId && this.employeesLS) {
        this.employee = this.employeesLS.find((employee: Employee) => employee.id === employeeId);
      }
    });
  }

  navigateToEmployeesList(): void {
    this.router.navigate(['employees']).then();
  }

  onSave(): void {
    this.employeesLS.forEach((emp: Employee) => {
      if (emp.id === this.employee.id) {
        emp = { ...emp, position: this.employee.position };
      }
    });

    localStorage.setItem('employees', JSON.stringify(this.employeesLS));
    this.navigateToEmployeesList();
  }
}
