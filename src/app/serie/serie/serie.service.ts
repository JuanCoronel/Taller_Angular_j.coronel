import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/environment';
import { Observable } from 'rxjs';
import { serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<serie[]> {
    return this.http.get<serie[]>(this.apiUrl);
  }
}
