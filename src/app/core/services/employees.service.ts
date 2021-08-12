import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { EmployeeApi, Employee } from '@app/core/models/employee';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get(`${environment.MOCK_DATA}`)
      // @ts-ignore
      .pipe(map(this.mapEmployees),
        catchError((err: HttpErrorResponse): Observable<[]> => {
          console.log('Error message: ', err.message);
          return of([]);
        }));
  }

  private mapEmployees = (data: EmployeeApi[]): Employee[] => {
    return data.map((item: EmployeeApi): Employee => {
      return {
        firstName: item.FirstName,
        secondName: item.SecondName,
        position: item.Position,
        id: item.Id,
        details: item.Details,
        blocked: item.Blocked
      };
    }).sort((a: Employee, b: Employee) => a.firstName.localeCompare(b.firstName));
  };

}
