import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-graphics-app';
  showNavbar = true;

  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.showNavbar = !event.url.includes('login');
      }
    });
  }
}
