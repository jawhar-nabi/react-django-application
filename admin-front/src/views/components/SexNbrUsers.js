import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const bar = {
  labels: ['13-17 y.o', '18-24 y.o', '25-34 y.o', '35-44 y.o', '45-54 y.o', '55-64 y.o', '65+ y.o'],
  datasets: [
    {
      label: 'users number : Men',
      backgroundColor: '#0f2657',
      borderColor:  '#0f2657',
      borderWidth: 1,
      hoverBackgroundColor: '#0f2657',
      hoverBorderColor:  '#0f2657',
      data: [85, 59, 80, 21, 59, 80, 70],
    },

    {
        label: 'users number : Women',
        backgroundColor: '#07a1de',
        borderColor:   '#07a1de',
        borderWidth: 1,
        hoverBackgroundColor:  '#07a1de',
        hoverBorderColor:  '#07a1de',
        data: [65, 19, 80, 81, 89, 80, 100],
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



class SexNbrUsers extends Component {

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

export default SexNbrUsers;