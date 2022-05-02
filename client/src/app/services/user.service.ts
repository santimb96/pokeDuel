import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:5000/users/"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(this.url);
  }

  deleteUser(id: string): Observable<any>{
    return this.http.delete(this.url+id);
  }

  createUser(user: User): Observable<any>{
    return this.http.post(this.url, user);
  }

  editUser(id: string): Observable<any>{ 
    return this.http.get(this.url+id)
  }

}

/* in the edit button:::: [routerLink]="['/edit', user._id]" */