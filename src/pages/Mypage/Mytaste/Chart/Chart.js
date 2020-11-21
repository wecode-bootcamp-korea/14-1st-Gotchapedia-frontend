import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  render() {
    const options = {
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            display: true,
            ticks: {
              max: this.props.maxY,
              min: 0,
              stepSize: 3,
              fontColor: '#a5a5a5',
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [{ display: false }],
      },
    };

    return (
      <div className='chart'>
        <Bar
          data={this.state.chartData}
          width={500}
          height={150}
          options={options}
        />
      </div>
    );
  }
}

export default Chart;
