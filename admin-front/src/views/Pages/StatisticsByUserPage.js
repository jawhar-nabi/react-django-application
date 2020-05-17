import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Row } from 'reactstrap';

const UserFavoriteTypes = React.lazy(() => import('../components/UserFavoriteTypes'));
const SkeletonComponent = React.lazy(() => import('../components/SkeletonComponent'));



class StatisticsByUserPage extends Component {

    render() {
        return (
            <div className="animated fadeIn" background-color="red" >
                <Row>
                    <Col xl="3">

                        <Card className="text-white bg-light-blue text-center ">
                            <CardBody>
                                <h4> Users Number<br /> </h4>

                                <h4><Link to="#" className="text-white" >13K </Link> </h4>
                            </CardBody>
                        </Card>

                        <Card className="text-center">
                            <CardBody>
                                <h4>Average books in  Challenge <br /><a href="nj">10 </a> </h4>
                                <hr />
                                <h4>Average books <br/>Read<br /><a href="nj">6</a> </h4>
                            </CardBody>
                        </Card>

                        <Card className="text-white bg-cyan text-center">
                            <CardBody>
                                <blockquote className="card-bodyquote">
                                    <h4>  Top 100 Books <br /> </h4>
                                    <footer> <cite title="Source Title"><Link to="#" className="text-white" >See List</Link></cite></footer>
                                </blockquote>
                            </CardBody>
                        </Card>

                    </Col>

                    <Col xl="9">
                        <SkeletonComponent titleG="Favorite Types of Books " titleS="  for all Users"  doc="lien doc " component={<UserFavoriteTypes />} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default StatisticsByUserPage;