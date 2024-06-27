import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'graphics',
    loadChildren: () => import('./graphics/graphics.module').then(m => m.GraphicsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'graphics',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'graphics'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
