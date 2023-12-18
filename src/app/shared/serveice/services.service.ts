import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public RegisterData = 'http://localhost:8000/api/sendMails';
  public getlogin = 'http://localhost:8000/api/getMails';
  public createTornament = 'http://localhost:8000/api/sendNewUser';
  public getallUser = 'http://localhost:8000/api/getNewUser'
  constructor(private http: HttpClient) { }

  onRegiseter(data: Object): Observable<any>{
    return this.http.post<any>(`${this.RegisterData}`, data, { observe: 'response'});
  }
  onlogin(id: String): Observable<any>{
    return this.http.get<any>(`${this.getlogin}/${id}`, {observe: 'response'});
  }
  onCeate(data: Object): Observable<any>{
    return this.http.post<any>(`${this.createTornament}`, data, { observe: 'response'});
  }
  onAllUser(): Observable<any>{
    return this.http.get<any>(`${this.getallUser}`, {observe: 'response'});
  }
}
