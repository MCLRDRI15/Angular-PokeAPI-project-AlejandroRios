import { ChartDataSets, ChartOptions } from 'chart.js';

export const barChartOptions: ChartOptions = {
  responsive: true,
    legend: {
      display: true,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true
          },
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: true
          }
        }
      ],
    }
};

export const barChartPrimaryStyle: ChartDataSets = {
  backgroundColor: '#355d89',
  borderColor: '#ffffff',
  hoverBackgroundColor: '#4789cf',
  hoverBorderColor: '#4789cf',
  borderWidth: 3
};

export const barChartSecondaryStyle: ChartDataSets = {
  backgroundColor: '#cf9f9f',
  borderColor: '#ffffff',
  hoverBackgroundColor: '#0000004d',
  hoverBorderColor: '#dbd6d62a',
  borderWidth: 3
};


