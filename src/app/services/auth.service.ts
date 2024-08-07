import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'registeredUsers';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  private loggedInUser: string | null = null;

  constructor(private router: Router) {
    this.isLoggedInSubject.next(this.isAuthenticated());
  }

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
      this.isLoggedInSubject.next(true); // Emitir el cambio de estado
      this.loggedInUser = username;
      if (this.isBrowser()) {
        localStorage.setItem('authToken', 'your-token');
      }
      this.isLoggedInSubject.next(true);
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
    return this.isLoggedInSubject.value;
  }

  private hasToken(): boolean {
    if (this.isBrowser()) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('authToken');
    }
    this.isLoggedInSubject.next(false); // Emitir el cambio de estado
    this.loggedInUser = null;
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
