import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '@app/core/models/employee';
import { ModalService } from '@app/core/services/modal.service';
import { Subscription } from 'rxjs';
import { EmployeesService } from '@app/core/services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees!: Employee[];
  searchQuery = '';
  modalSub$: Subscription;
  employees$: Subscription;

  constructor(
    private modalService: ModalService,
    private employeesService: EmployeesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const employeesLS = JSON.parse(<string>localStorage.getItem('employees'));

    if (!employeesLS) {
      this.getEmployees();
    }

    this.employees = employeesLS;
    this.detectModalActions();
  }

  ngOnDestroy(): void {
    if (this.modalSub$) {
      this.modalSub$.unsubscribe();
    }
  }

  getEmployees(): void {
    this.employees$ = this.employeesService.getEmployees().subscribe((employeesResp: Employee[]) => {
      this.employees = employeesResp;
      localStorage.setItem('employees', JSON.stringify(this.employees));
    });
  }

  onDeleteEmployee(data: Employee): void {
    this.modalService.open(data);
  }

  onEditEmployee(id: string): void {
    this.router.navigate([`edit-employee/${id}`]).then();
  }

  private detectModalActions(): void {
    this.modalSub$ = this.modalService.watch().subscribe(({ isOpen, employee }: { isOpen: boolean, employee: Employee }) => {
      if (!isOpen && employee?.id) {
        this.employees = this.filterEmployeesById(employee?.id);
        this.handleLocalStorageData();
      }
    });
  }

  private filterEmployeesById(id: string): Employee[] {
    return this.employees?.filter((employee: Employee) => employee.id !== id);
  }

  private handleLocalStorageData(): void {
    if (this.employees.length > 0) {
      localStorage.setItem('employees', JSON.stringify(this.employees));
      return;
    }

    localStorage.clear();
    this.getEmployees();
  }
}
