import React, { Component, } from 'react';
import { Line, } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: ' E-Library visitor statistics',
      fill: false,
      lineTension: 0.1,

      backgroundColor: '#00acee',
      borderColor: '#00a6e6',

      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 40, 81, 56, 55, 90],
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



class SiteVisitors extends Component {


  render() {

    return (
      <div className="animated fadeIn" >
        <Card>
          <CardBody>
            <div className="chart-wrapper" style={{ height: '200px' }}>
              <Line data={line} options={options} height={200} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SiteVisitors;