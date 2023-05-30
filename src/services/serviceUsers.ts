import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const API_URL = `https://jsonplaceholder.typicode.com/users`;

@Injectable({
  providedIn: 'root',
})
export class ServiceUsers {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http
      .get(
        API_URL
      )
      .pipe(map((res) => res));
  }
}
// /api/users
