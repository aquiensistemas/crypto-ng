import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint: string = 'http://localhost3000/cryptos'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.endpoint)
  }
}
