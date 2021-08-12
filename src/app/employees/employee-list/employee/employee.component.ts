import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '@app/core/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  @Input() employee: Employee;
  @Output() deleteEmployeeEvent = new EventEmitter<Employee>();
  @Output() editEmployeeEvent = new EventEmitter<string>();

  onDeleteClick(employee: Employee): void {
    this.deleteEmployeeEvent.emit(employee);
  }

  onEditClick(id: string): void {
    this.editEmployeeEvent.emit(id);
  }

}
