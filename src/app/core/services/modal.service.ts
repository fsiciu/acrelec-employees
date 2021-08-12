import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '@app/core/models/employee';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display: BehaviorSubject<{ isOpen: boolean, employee: Employee }> = new BehaviorSubject<{ isOpen: boolean, employee: Employee }>({
    isOpen: false,
    employee: undefined
  });

  watch(): Observable<{ isOpen: boolean, employee: Employee }> {
    return this.display.asObservable();
  }

  open(employee?: Employee) {
    this.display.next({ isOpen: true, employee: employee });
  }

  close(employee?: Employee) {
    this.display.next({ isOpen: false, employee: employee });
  }
}
