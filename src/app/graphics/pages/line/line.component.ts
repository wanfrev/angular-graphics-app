import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  public chart: Chart;

  ngOnInit(): void {
    this.createChart(['January', 'February', 'March', 'April', 'May', 'June', 'July'], [65, 59, 80, 81, 56, 55, 40]);
  }

  createChart(labels: string[], data: number[]): void {
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('lineChart', {
      type: 'line',
      data: chartData
    });
  }

  onUpdateChart(event: { labels: string, data: string }): void {
    const labels = event.labels.split(',');
    const data = event.data.split(',').map(Number);
    this.createChart(labels, data);
  }
}
