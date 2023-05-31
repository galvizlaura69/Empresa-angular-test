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
      .get<Array<any>>(
        `${API_URL}/photos`
      )
      .pipe(
        map((res) => {
          let initialAlbumId = 0;
          let filteredAlbumes = res.filter(album => {
            if(initialAlbumId != album.albumId){
              initialAlbumId =  album.albumId;
              return album;
            }
          })
          return filteredAlbumes})
        );
  }
}
