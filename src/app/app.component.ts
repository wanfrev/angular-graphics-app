import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './login/services/auth.service';
import { toggleNavbar } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-graphics-app';
  isshowNavbarCollapsed = false;
  screenWidth = 0;

  constructor(private authService: AuthService,private router: Router){
    // this.router.events.subscribe(event => {
    //   if(event instanceof NavigationEnd){
    //     this.showNavbar = !event.url.includes('login');
    //   }
    // });
  }

  onToggleNavbar(data: toggleNavbar): void{
    this.screenWidth = data.screenWidth;
    this.isshowNavbarCollapsed = data.collapsed;
  }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
