import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './pages/bar/bar.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { LineComponent } from './pages/line/line.component';
import { PieComponent } from './pages/pie/pie.component';
import { RadarComponent } from './pages/radar/radar.component';
import { ScatterComponent } from './pages/scatter/scatter.component';
import { SharedModule } from '../shared/shared.module';
import { GraphicsRoutingModule } from './graphics-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BarComponent,
    DoughnutComponent,
    LineComponent,
    PieComponent,
    RadarComponent,
    ScatterComponent,
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class GraphicsModule { }
