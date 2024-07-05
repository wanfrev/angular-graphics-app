import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
