import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
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
            label: 'My dataset' // for legend
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



class StatisticsTypeBooks extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="animated fadeIn">
                <Card >
                    <CardBody>
                        <div className="chart-wrapper mx-3" style={{ height: '190px' }}>
                            <Polar data={polar} options={options} height={190} />
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default StatisticsTypeBooks;