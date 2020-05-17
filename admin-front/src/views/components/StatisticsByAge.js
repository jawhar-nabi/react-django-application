import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


const doughnut = {
  labels: [
    '10-15 y.o',
    '15-20 y.o',
    '25-35 y.o',
    '35-60 y.o',
  ],
  datasets: [
    {
      data: [300, 150, 170, 100],
      backgroundColor: [
        '#00abeecc',
        '#3f729bcc',
        '#0e77a8f6',
        '#334d84f6',

      ],
      hoverBackgroundColor: [
        '#00abeecc',
        '#3f729bcc',
        '#0e77a8f6',
        '#334d84f6',
      ],
    }],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}



class StatisticsByAge extends Component {


  render() {

    return (
      <div className="animated fadeIn">



        <Card>
          <CardBody>


            <div className="chart-wrapper" style={{ height: '200px' }}>
              <Doughnut data={doughnut} options={options} height={200} />
            </div>

          </CardBody>

        </Card>

      </div>
    );
  }
}

export default StatisticsByAge;