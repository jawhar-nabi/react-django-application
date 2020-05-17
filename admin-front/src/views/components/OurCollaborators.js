import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Progress } from 'reactstrap';

const data1 = 25;
const data2 = 50;
const data3 = 75;
const data4 = 100;

class OurCollaborators extends Component {


  render() {

    return (
      <div className="animated fadeIn">

        <Card>
          <CardHeader>
            <strong>Our Collaborators </strong>
            <div className="card-header-actions">
              <a href={this.props.doc} className="card-header-action">
                <small className="text-muted fa fa-file-pdf-o"> </small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <Progress animated color="clr-b0" value={data1} className="mb-3" ><strong> Amazon</strong></Progress>
            <Progress animated color="clr-b1" value={data2} className="mb-3"><strong>Abebooks</strong></Progress>
            <Progress animated color="clr-b2" value={data3} className="mb-3" ><strong>Alibris</strong></Progress>
            <Progress animated color="clr-b3" value={data4} className="mb-3" ><strong>BarnesNoble</strong></Progress>
            <br />
            <Progress multi>
              <Progress animated bar color="clr-b0" value={data1} > <strong> {data1}% </strong>  </Progress>
              <Progress animated bar color="clr-b1" value={data2}> <strong>{data2}%</strong>  </Progress>
              <Progress animated bar color="clr-b2" value={data3} > <strong> {data3}% </strong> </Progress>
              <Progress animated bar color="clr-b3" value={data4} > <strong>{data4}%</strong>  </Progress>
            </Progress>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default OurCollaborators;