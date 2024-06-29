import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private isLocalStorageAvailable(): boolean {
    if (this.isBrowser) {
      try {
        const test = '__storage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  }

  login(userName: string, password: string): boolean {
    if (!this.isLocalStorageAvailable()) {
      console.error('localStorage is not available');
      return false;
    }

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
    if (!this.isLocalStorageAvailable()) {
      console.error('localStorage is not available');
      return false;
    }
    return localStorage.getItem('loggedInUser') !== null;
  }

  logout(): void {
    if (!this.isLocalStorageAvailable()) {
      console.error('localStorage is not available');
      return;
    }
    localStorage.removeItem('loggedInUser');
  }
}
