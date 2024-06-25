import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { BarPageComponent } from './shared/pages/bar-page/bar-page.component';
import { DoughnutPageComponent } from './shared/pages/doughnut-page/doughnut-page.component';
import { LinePageComponent } from './shared/pages/line-page/line-page.component';
import { PiePageComponent } from './shared/pages/pie-page/pie-page.component';
import { RadarPageComponent } from './shared/pages/radar-page/radar-page.component';
import { ScatterPageComponent } from './shared/pages/scatter-page/scatter-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'bar',
    component: BarPageComponent
  },
  {
    path: 'doughnut',
    component: DoughnutPageComponent
  },
  {
    path: 'line',
    component: LinePageComponent
  },
  {
    path: 'pie',
    component: PiePageComponent
  },
  {
    path: 'radar',
    component: RadarPageComponent
  },
  {
    path: 'scatter',
    component: ScatterPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
