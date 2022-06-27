

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment  } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  constructor(private http: HttpClient) { }

  public post(url: string, data?: any, optional?: any): Observable<any> {
    return this.http.post(url, data, optional);
  }
  public get(url: string, optional?: any): Observable<any> {
    return this.http.get( url, optional);
  }
  public put(url: string, data?: any): Observable<any> {
    return this.http.put(url, data);
  }
  public delete(url: string, optional?: any): Observable<any> {
    return this.http.delete(url, optional);
  }
}
