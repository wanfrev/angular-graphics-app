import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  public chart: Chart;
  public labels: string[] = [];
  public data: number[] = [];
  public newLabel: string = '';
  public newData: number;

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    const data = {
      labels: this.labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: this.data,
          backgroundColor: 'rgb(75, 192, 192)'
        }
      ]
    };

    this.chart = new Chart('barChart', {
      type: 'bar',
      data
    });
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
