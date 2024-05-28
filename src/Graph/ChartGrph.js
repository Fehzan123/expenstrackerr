import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

class ChartGraph extends React.Component {
  constructor(props) {
    super(props);

    // Define the colors array
    const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#546E7A', '#D4526E'];

    this.state = {
      series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'], 
          ],
          labels: {
            style: {
              colors: colors,
              fontSize: '12px'
            }
          }
        }
      },
    };
  }

  render() {
    return (
      <div>
         <div id="chart" style={{ width: '100vh' }}>
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350}  />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ChartGraph;
