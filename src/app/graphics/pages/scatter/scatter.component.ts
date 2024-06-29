import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {

  public chart: Chart;
  public data: { x: number, y: number }[] = [];
  public newX: number;
  public newY: number;

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    const data = {
      datasets: [
        {
          label: 'Scatter Dataset',
          data: this.data,
          backgroundColor: 'rgb(255, 99, 132)'
        }
      ]
    };

    this.chart = new Chart('scatterChart', {
      type: 'scatter',
      data,
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    });
  }

  addData(): void {
    if (!isNaN(this.newX) && !isNaN(this.newY)) {
      this.data.push({ x: this.newX, y: this.newY });
      this.updateChart();
      this.newX = null;
      this.newY = null;
    }
  }

  updateChart(): void {
    this.chart.data.datasets[0].data = this.data;
    this.chart.update();
  }
}
