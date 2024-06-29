import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  public chart: Chart<'line'>;
  public labels: string[] = [];
  public data: number[] = [];
  public newLabel: string = '';
  public newData: number;

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: this.data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      }
    };

    this.chart = new Chart('lineChart', config);
  }

  addData(): void {
    if (this.newLabel && !isNaN(this.newData)) {
      this.labels.push(this.newLabel);
      this.data.push(this.newData);
      this.updateChart();
      this.newLabel = '';
      this.newData = null;
    }
  }

  updateChart(): void {
    this.chart.data.labels = this.labels;
    this.chart.data.datasets[0].data = this.data;
    this.chart.update();
  }
}
