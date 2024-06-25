import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';



@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    ScatterChartComponent,
    RadarChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GraphicsModule { }
