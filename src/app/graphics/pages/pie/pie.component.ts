import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public chart: Chart<'pie'>;
  public labels: string[] = [];
  public data: number[] = [];
  public newLabel: string = '';
  public newData: number;

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    const config: ChartConfiguration<'pie'> = {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: this.data,
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
          }
        ]
      }
    };

    this.chart = new Chart('pieChart', config);
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
