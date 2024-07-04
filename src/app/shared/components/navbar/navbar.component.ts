import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { animate, keyframes, style, transition, trigger} from '@angular/animations';
import { AuthService } from '../../../login/services/auth.service';
import { Router, RouterModule} from '@angular/router';
import { CommonModule} from '@angular/common';

export interface toggleNavbar {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms', 
          style({opacity: 1})
        )
      ])
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('350ms',
        style({ opacity: 0 })
      )
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ]) 
  ]
})

export class NavbarComponent implements OnInit {

  @Output() ontoggleNavbar: EventEmitter<toggleNavbar> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;

  constructor(private authService: AuthService, private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth <= 768) {
        this.collapsed = false;
        this.ontoggleNavbar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
      }
    }
  }  

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.ontoggleNavbar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.ontoggleNavbar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['./login']);
  }

}
