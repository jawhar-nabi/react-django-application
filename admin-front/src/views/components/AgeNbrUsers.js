import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const bar = {
  labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
  datasets: [
    {
      label: 'users number',
      backgroundColor: '#0e77a8f6',
      borderColor: '#0e77a8f6',
      borderWidth: 1,
      hoverBackgroundColor: '#0e77a8f6',
      hoverBorderColor: '#0e77a8f6',
      data: [65, 59, 80, 81, 59, 80, 100],
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



class AgeNbrUsers extends Component {

  render() {
    return (
      <div className="animated fadeIn" >
        <Card>

          <CardBody>
            <div className="chart-wrapper" style={{ height: '390px' }}>
              <Bar data={bar} options={options} height={390} />
            </div>
          </CardBody>

        </Card>
      </div>
    );
  }
}

export default AgeNbrUsers;