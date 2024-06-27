// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {
    // Verificar el estado de autenticación al iniciar el servicio
    this.isAuthenticated = !!localStorage.getItem('isLoggedIn');
  }

  register(userName: string, emailId: string, password: string): boolean {
    let users = localStorage.getItem('angular18Local')
      ? JSON.parse(localStorage.getItem('angular18Local')!)
      : [];

    const userExists = users.some(
      (user: { userName: any; emailId: any }) =>
        user.userName === userName || user.emailId === emailId
    );

    if (userExists) {
      return false; // Usuario ya existe
    }

    users.push({ userName, emailId, password });
    localStorage.setItem('angular18Local', JSON.stringify(users));
    return true;
  }

  login(userName: string, password: string): boolean {
    let users = localStorage.getItem('angular18Local')
      ? JSON.parse(localStorage.getItem('angular18Local')!)
      : [];

    const user = users.find(
      (user: { userName: any; password: any }) =>
        user.userName === userName && user.password === password
    );

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
