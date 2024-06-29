import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  public chart: Chart;
  public labels: string[] = [];
  public dataset1: number[] = [];
  public dataset2: number[] = [];
  public newLabel: string = '';
  public newData1: number;
  public newData2: number;

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    const data = {
      labels: this.labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: this.dataset1,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
          label: 'My Second Dataset',
          data: this.dataset2,
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }
      ]
    };

    this.chart = new Chart('radarChart', {
      type: 'radar',
      data
    });
  }

  addData(): void {
    if (this.newLabel && !isNaN(this.newData1) && !isNaN(this.newData2)) {
      this.labels.push(this.newLabel);
      this.dataset1.push(this.newData1);
      this.dataset2.push(this.newData2);
      this.updateChart();
      this.newLabel = '';
      this.newData1 = null;
      this.newData2 = null;
    }
  }

  updateChart(): void {
    this.chart.data.labels = this.labels;
    this.chart.data.datasets[0].data = this.dataset1;
    this.chart.data.datasets[1].data = this.dataset2;
    this.chart.update();
  }
}
