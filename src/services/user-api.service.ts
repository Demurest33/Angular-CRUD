import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  getUsers(n: number): Observable<any> {
    return this.http.get<any>(
      `https://randomuser.me/api/?results=${n}&inc=gender,name,email,phone,picture`
    );
  }
}
