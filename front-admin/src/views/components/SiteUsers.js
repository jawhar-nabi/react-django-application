import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: ' site users',
      backgroundColor: '#3f729bcc',
      borderColor: '#334d84f6',
      borderWidth: 1,
      hoverBackgroundColor: '#3f729bcc',
      hoverBorderColor: '#334d84f6',
      data: [65, 59, 80, 81, 56, 55, 40],
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



class SiteUsers extends Component {


  render() {
    return (
      <div className="animated fadeIn" >
        <Card>
          <CardBody>
            <div className="chart-wrapper" style={{ height: '200px' }}>
              <Bar data={bar} options={options} height={200} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SiteUsers;