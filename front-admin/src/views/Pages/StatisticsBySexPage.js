import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Row } from 'reactstrap';

const SkeletonComponent = React.lazy(() => import('../components/SkeletonComponent'));
const SexNbrUsers = React.lazy(() => import('../components/SexNbrUsers'));
const SexCentreInteret = React.lazy(() => import('../components/SexCentreInteret'));
const AgeCentreInteret = React.lazy(() => import('../components/AgeCentreInteret'));
const MenChallengeVsRead = React.lazy(() => import('../components/MenChallengeVsRead'));
const WomenChallengeVsRead = React.lazy(() => import('../components/WomenChallengeVsRead'));


class StatisticsBySexPage extends Component {

  render() {

    return (
      <div className="animated fadeIn" background-color="red" >

        <Row>
          <Col xl="3">
            <Card className="text-white bg-B0 text-center ">
              <CardBody>
                <h4><Link to="#" className="text-white  cui-user icons font-2xl d-block " >   9K User</Link> </h4>
              </CardBody>
            </Card>
            <Card className="text-center">
              <CardBody>
                <h4>Average books in  Challenge <br /><a href="nj">12 </a> </h4>
                <hr />
                <h4>Average books <br />Read<br /><a href="nj">6</a> </h4>
              </CardBody>
            </Card>
            <Card className="text-white text-center ">
              <CardBody>
                <h4><Link to="#"  >   Top 100 Books</Link> </h4>
              </CardBody>
            </Card>
          </Col>

          <Col xl="6">
            <SexNbrUsers />
          </Col>

          <Col xl="3">
            <Card className="text-white bg-B3 text-center ">
              <CardBody>
                <h4><Link to="#" className="text-white cui-user-female icons font-2xl d-block " >  7K User </Link> </h4>
              </CardBody>
            </Card>
            <Card className="text-center">
              <CardBody>
                <h4>Average books in  Challenge <br /><a href="nj">7 </a> </h4>
                <hr />
                <h4>Average books <br />Read<br /><a href="nj">13</a> </h4>
              </CardBody>
            </Card>
            <Card className="text-white text-center ">
              <CardBody>
                <h4><Link to="#"  >   Top 100 Books</Link> </h4>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <SkeletonComponent titleG="Favorite Types of Books " titleS="  for each genre" doc="lien doc par sex" component={<SexCentreInteret />} />


        {/*   =================================== Men /Women  ===========================================*/}
        <Row>
          <Col sm="16" xl="6">
            <Card className="text-white bg-B0 text-center ">
              <CardBody>
                <h4><i className="text-white  cui-user icons font-2xl d-block " /> </h4>
              </CardBody>
            </Card>
            <SkeletonComponent titleG="Average books in Challenge VS Average books Read " titleS=" per year" doc="lien doc " component={< MenChallengeVsRead />} />
            <AgeCentreInteret />
          </Col>

          <Col sm="16" xl="6">
            <Card className="text-white bg-B3 text-center ">
              <CardBody>
                <h4><i className="text-white cui-user-female icons font-2xl d-block " />  </h4>
              </CardBody>
            </Card>
            <SkeletonComponent titleG="Average books in Challenge VS Average books Read " titleS=" per year" doc="lien doc " component={< WomenChallengeVsRead />} />
            <AgeCentreInteret />
          </Col>
        </Row>

        <br />
        <br />


      </div>
    );
  }
}

export default StatisticsBySexPage;

