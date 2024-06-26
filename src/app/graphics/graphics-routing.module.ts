import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './pages/bar/bar.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { LineComponent } from './pages/line/line.component';
import { PieComponent } from './pages/pie/pie.component';
import { RadarComponent } from './pages/radar/radar.component';
import { ScatterComponent } from './pages/scatter/scatter.component';

const routes: Routes = [
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: 'doughnut',
    component: DoughnutComponent
  },
  {
    path: 'line',
    component: LineComponent
  },
  {
    path: 'pie',
    component: PieComponent
  },
  {
    path: 'radar',
    component: RadarComponent
  },
  {
    path: 'scatter',
    component: ScatterComponent
  },
  {
    path: '**',
    redirectTo: 'bar'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GraphicsRoutingModule { }
