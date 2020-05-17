import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

const SkeletonComponent = React.lazy(() => import('../components/SkeletonComponent'));
const AgeChallengeVsRead = React.lazy(() => import('../components/AgeChallengeVsRead'));
const AgeCentreInteret = React.lazy(() => import('../components/AgeCentreInteret'));
const AgeNbrUsers = React.lazy(() => import('../components/AgeNbrUsers'));




class StatisticsByAgePage extends Component {


  render() {

    return (
      <div className="animated fadeIn" background-color="red" >

        <Row>
          <Col xl="4">
            <AgeNbrUsers />
          </Col>

          <Col xl="8">
          <SkeletonComponent  titleG="Average books in Challenge VS Average books Read " titleS=" per year"  doc="lien doc " component={< AgeChallengeVsRead />} />

          </Col>
        </Row>
        <AgeCentreInteret />


      </div>
    );
  }
}

export default StatisticsByAgePage;