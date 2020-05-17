import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const radar = {
  labels: ['13-17 y.o', '18-24 y.o', '25-34 y.o', '35-44 y.o', '45-54 y.o', '55-64 y.o', '65+ y.o'],
  datasets: [
    {
      label: 'Average books Read',
      backgroundColor: '#0f265722',
      borderColor: '#0f2657',
      pointBackgroundColor: '#0f2657',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#0f2657',
      pointHoverBorderColor: '#0f2657',
      data: [2, 4, 7, 6, 15, 8, 19],
    },

    {
      label: 'Average books in Challenge',
      backgroundColor: '#69696922',
      borderColor: '#696969',
      pointBackgroundColor: '#696969',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#696969',
      pointHoverBorderColor: '#696969',
      data: [12, 9, 17, 7, 10, 5, 10],

    },
  ],
};


const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}


class MenChallengeVsRead extends Component {


  render() {

    return (
      <div className="animated fadeIn">

        <div className="chart-wrapper">
          <Radar data={radar} />
        </div>

      </div>
    );
  }
}

export default MenChallengeVsRead;