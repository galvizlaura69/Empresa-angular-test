import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const API_URL = `https://jsonplaceholder.typicode.com`;

@Injectable({
  providedIn: 'root',
})
export class serviceAlbumes {
  constructor(private http: HttpClient) {}

  public getAlbumes(): Observable<any> {
    return this.http
      .get(
        `${API_URL}/photos`
      )
      .pipe(map((res) => res));
  }

  public getAlbumById(id: any): Observable<any> {
    return this.http
      .get<Array<any>>(`${API_URL}/photos/${id}`)
      .pipe(
        map((data) =>
          data.filter((album:any) => album.albumId === parseInt(id))
        ))
  }
}
