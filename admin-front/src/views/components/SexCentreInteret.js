import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const radar = {
  labels: ['History', 'Business', 'Fiction', 'Suspense', 'Travel', 'Self Help', 'Romance'],
  datasets: [
    {
      label: 'Men',
      backgroundColor: 'rgba(160, 157, 200, 0.19)',
      borderColor: '#0f2657',
      pointBackgroundColor: '#0f2657',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#0f2657',
      pointHoverBorderColor: '#0f2657',
      data: [28, 48, 40, 19, 96, 27, 100],
    },
    {
      label: 'Women',
      backgroundColor: 'rgba(248, 222, 222, 0.27)',
      borderColor: '#07a1de',
      pointBackgroundColor: '#07a1de',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#07a1de',
      pointHoverBorderColor: '#07a1de',
      data: [65, 59, 90, 81, 56, 55, 40],

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



class SexCentreInteret extends Component {

  render() {
    return (
      <div className="animated fadeIn">

        <Card>
          <CardBody>
            <div className="chart-wrapper">
              <Radar data={radar} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SexCentreInteret;