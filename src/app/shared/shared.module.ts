import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BarPageComponent } from './pages/bar-page/bar-page.component';
import { DoughnutPageComponent } from './pages/doughnut-page/doughnut-page.component';
import { LinePageComponent } from './pages/line-page/line-page.component';
import { PiePageComponent } from './pages/pie-page/pie-page.component';
import { RadarPageComponent } from './pages/radar-page/radar-page.component';
import { ScatterPageComponent } from './pages/scatter-page/scatter-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    HomePageComponent,
    BarPageComponent,
    DoughnutPageComponent,
    LinePageComponent,
    PiePageComponent,
    RadarPageComponent,
    ScatterPageComponent
  ],
  exports: [
    SidebarComponent,
    HomePageComponent,
    BarPageComponent,
    DoughnutPageComponent,
    LinePageComponent,
    PiePageComponent,
    RadarPageComponent,
    ScatterPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
