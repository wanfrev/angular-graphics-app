import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'registeredUsers';
  private isLoggedIn = false;
  private loggedInUser: string | null = null;

  constructor() { }

  private getRegisteredUsers(): { username: string, password: string }[] {
    const usersJson = localStorage.getItem(this.usersKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  private setRegisteredUsers(users: { username: string, password: string }[]): void {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  login(username: string, password: string): Observable<boolean> {
    const users = this.getRegisteredUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      this.isLoggedIn = true;
      this.loggedInUser = username;
      return of(true);
    }
    return of(false);
  }

  register(username: string, password: string): Observable<boolean> {
    const users = this.getRegisteredUsers();
    const userExists = users.some(u => u.username === username);
    if (!userExists) {
      users.push({ username, password });
      this.setRegisteredUsers(users);
      return of(true);
    }
    return of(false);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedInUser = null;
  }
}
