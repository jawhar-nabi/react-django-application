import React, { Component,Suspense } from 'react';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
const SocialMedia = React.lazy(() => import('../components/SocialMedia'));
const SiteInNumbers = React.lazy(() => import('../components/SiteInNumbers'));
const SiteVisitors = React.lazy(() => import('../components/SiteVisitors'));
const SexCentreInteret = React.lazy(() => import('../components/SexCentreInteret'));
const StatisticsByAge = React.lazy(() => import('../components/StatisticsByAge'));
const AdminsList = React.lazy(() => import('../components/AdminsList'));
const OurCollaborators = React.lazy(() => import('../components/OurCollaborators'));
const SiteUsers = React.lazy(() => import('../components/SiteUsers'));
const StatisticsTypeBooks = React.lazy(() => import('../components/StatisticsTypeBooks'));



export class DashboardAdmin extends React.Component {

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
        console.log("test ");
        console.log(" page dashboard admin");

        return (
            <div className="animated fadeIn" background-color="red" >
                <Row>
                    <Suspense fallback={this.loading()}>

                        <Col sm="16" xl="8">
                            <SiteInNumbers />
                            <SiteVisitors />
                            <SocialMedia />
                            <AdminsList />
                        </Col>

                        <Col sm="8" xl="4">
                            <SexCentreInteret />
                            <StatisticsTypeBooks />
                            <SiteUsers />
                            <StatisticsByAge />
                        </Col>

                    </Suspense>
                </Row>

                <OurCollaborators />

            </div>
        );
    }
};


function mapStateToProps(state) {
    return {
      books: state.listBooks
    };
  };
  
  export default connect(mapStateToProps)(DashboardAdmin);