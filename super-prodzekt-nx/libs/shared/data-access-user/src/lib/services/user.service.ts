import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { users$ } from './users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isUserLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  constructor(private readonly http: HttpClient) {}

  checkCredentials(
    email: string,
    password: string
  ): Observable<User | undefined> {
    return users$.pipe(
      map((users: User[]) =>
        users.find(
          (user: User) => user.email === email && user.password === password
        )
      )
    );
  }

  logout() {
    this.isUserLoggedIn.next(false);
  }
}
