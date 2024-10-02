import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/';
  private apiKey = '871c7997';

  constructor(private http: HttpClient) {}

  getMovie(title: string): Observable<any> {
    const url = `${this.apiUrl}?t=${title}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }

  getMovieById(imdbId: string): Observable<any> {
    const url = `${this.apiUrl}?i=${imdbId}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}
