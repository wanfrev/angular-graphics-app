import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(userName: string, password: string): boolean {
    let users = localStorage.getItem('angular18Local')
      ? JSON.parse(localStorage.getItem('angular18Local')!)
      : [];
    const user = users.find(
      (user: { userName: string; password: string }) =>
        user.userName === userName && user.password === password
    );
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }
}
