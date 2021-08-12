import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';
import { Employee } from '@app/core/models/employee';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  display$: Observable<{ isOpen: boolean, employee: Employee }> | undefined;

  constructor(
    private modalService: ModalService
  ) {
  }

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

  onDeleteClick(employee: Employee): void {
    this.modalService.close(employee);
  }
}
