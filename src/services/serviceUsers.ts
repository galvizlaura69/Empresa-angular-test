import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import API_URL from 'src/const/api';

@Injectable({
  providedIn: 'root',
})
export class ServiceUsers {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http
      .get(
        `${API_URL}/users`
      )
      .pipe(map((res) => res));
  }


  public getUsersById(id:any): Observable<any> {
    return this.http
      .get(
        `${API_URL}/users/${id}`
      )
      .pipe(map((res) => res));
  }
}
