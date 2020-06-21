import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {Link} from 'react-router-dom';

import {
  Badge,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownToggle,
  Row,
} from 'reactstrap';

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};



const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};


// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};


const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};


class SiteInNumbers extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">


        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-B3">
              <CardBody className="pb-0">
                <div className="text-value">13 K</div>
                <div className="text-value">Users</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '30px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={30} />
              </div>

            </Card>
          </Col>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-B2">
              <CardBody className="pb-0">
                <div className="text-value">19 M</div>
                <div className="text-value">Books</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '30px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={30} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-B1">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-bell"></i><Badge pill color="primary">13</Badge>
                    </DropdownToggle>
                  </Dropdown>
                </ButtonGroup>

                <div className="text-value">Add </div>
                <div className="text-value">Book</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '30px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={30} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-B0">
              <CardBody className="pb-0">
                <a href="http://localhost:3001/">
                <div className="text-value">visit </div>
                <div className="text-value">E-library</div>
                </a>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '30px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={30} />
              </div>
            </Card>
          </Col>

        </Row>

      </div>
    );
  }
}

export default SiteInNumbers;