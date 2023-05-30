import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const API_URL = `https://jsonplaceholder.typicode.com`;

@Injectable({
  providedIn: 'root',
})
export class ServiceUsers {
  constructor(private http: HttpClient) {}

  public getPost(): Observable<any> {
    return this.http
      .get(
        `${API_URL}/post`
      )
      .pipe(map((res) => res));
  }


  public getPostByUserId(id:any): Observable<any> {
    return this.http
      .get(
        `${API_URL}/post`
      )
      .pipe(map((res) => res));//aqui se hace el filtro
  }
}
