import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const polar = {
  datasets: [
    {
      data: [
        13,
        19,
        10,
        7,
      ],
      backgroundColor: [

        '#334d84f6',
        '#3f729bcc',
        '#0e77a8f6',
        '#00abeecc',

      ],
      label: 'My dataset' 
    }],
  labels: [
    'science fiction',
    'drama',
    'self developed',
    'sport'
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}


class UserFavoriteTypes extends Component {


  render() {

    return (
      <div className="animated fadeIn">
        <div className="chart-wrapper mx-3" style={{ height: '400px' }}>
          <Polar data={polar} options={options} height={400} />
        </div>
      </div>
    );
  }
}

export default UserFavoriteTypes;