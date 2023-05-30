import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const API_URL = `https://jsonplaceholder.typicode.com`;

@Injectable({
  providedIn: 'root',
})
export class servicePost {
  constructor(private http: HttpClient) {}

  public getPost(): Observable<any> {
    return this.http
      .get(
        `${API_URL}/posts`
      )
      .pipe(map((res) => res));
  }


  public getPostByUserId(id: any): Observable<any> {
    return this.http
      .get<Array<any>>(`${API_URL}/posts`)
      .pipe(
        map((data) =>
          data.filter((post:any) => post.userId === parseInt(id))
        ))
  }

  public getComentByPostId(id: any): Observable<any> {
    return this.http
      .get<Array<any>>(`${API_URL}/posts/${id}/comments`)
      .pipe(
        map((data) =>
          data.filter((coment:any) => coment.postId === parseInt(id))
        ))
  }
}
