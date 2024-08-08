import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Theme } from '../types/theme';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private http: HttpClient) {}

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${environment.apiUrl}/themes`);
  }
  
  getTheme(id: string): Observable<Theme> {
  
    return this.http.get<Theme>(`${environment.apiUrl}/themes/${id}`)
  }

  createTheme(themeName: string, postText: string): Observable<Theme> {
    return this.http.post<Theme>(`${environment.apiUrl}/themes`, { themeName, postText }); 
  }
  
  
  getPosts(limit?: number): Observable<Post[]> {
    return limit
      ? this.http.get<Post[]>(`${environment.apiUrl}/posts?limit=${limit}`)
      : this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }
}
