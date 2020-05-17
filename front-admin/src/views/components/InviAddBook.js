import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row} from 'reactstrap';


class InviAddBook extends Component {

    render() {
        return (
            <div className="animated fadeIn">

                <Card>
                    <CardHeader>
                        <Row>
                            <Col xl="1" className="text-center"></Col>
                            <Col xl="2" className="text-center">Book name</Col>
                            <Col xl="5" className="text-center">Book description</Col>
                            <Col xl="2" className="text-center"></Col>
                            <Col xl="2" className="text-center">options</Col>
                        </Row>
                    </CardHeader>
                    
                    <CardBody>
                        <Row>
                            <Col xl="1" className="text-center">1</Col>
                            <Col xl="2" className="text-center">Lorem ipsum</Col>
                            <Col xl="5" className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Col>
                            <Col xl="2" className="text-center">
                                <a href="lien hide"> see more</a>
                            </Col>
                            <Col xl="2" className="text-center">
                                <span className="text-center">  <a href="lien hide">Accept</a> </span>
                                |
                                <span className="text-center">  <a href="lien hide">Refuse</a> </span>
                            </Col>
                        </Row> <hr />

                        <Row>
                            <Col xl="1" className="text-center">2</Col>
                            <Col xl="2" className="text-center">Lorem ipsum</Col>
                            <Col xl="5" className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Col>
                            <Col xl="2" className="text-center">
                                <a href="lien hide"> see more</a>
                            </Col>
                            <Col xl="2" className="text-center">
                                <span className="text-center">  <a href="lien hide">Accept</a> </span>
                                |
                                <span className="text-center">  <a href="lien hide">Refuse</a> </span>
                            </Col>
                        </Row> <hr />

                        <Row>
                            <Col xl="1" className="text-center">3</Col>
                            <Col xl="2" className="text-center">Lorem ipsum</Col>
                            <Col xl="5" className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Col>
                            <Col xl="2" className="text-center">
                                <a href="lien hide"> see more</a>
                            </Col>
                            <Col xl="2" className="text-center">
                                <span className="text-center">  <a href="lien hide">Accept</a> </span>
                                |
                                <span className="text-center">  <a href="lien hide">Refuse</a> </span>
                            </Col>
                        </Row> <hr />

                        <Row>
                            <Col xl="1" className="text-center">4</Col>
                            <Col xl="2" className="text-center">Lorem ipsum</Col>
                            <Col xl="5" className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Col>
                            <Col xl="2" className="text-center">
                                <a href="lien hide"> see more</a>
                            </Col>
                            <Col xl="2" className="text-center">
                                <span className="text-center">  <a href="lien hide">Accept</a> </span>
                                |
                                <span className="text-center">  <a href="lien hide">Refuse</a> </span>
                            </Col>
                        </Row> <hr />

                        <Row>
                            <Col xl="1" className="text-center">5</Col>
                            <Col xl="2" className="text-center">Lorem ipsum</Col>
                            <Col xl="5" className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Col>
                            <Col xl="2" className="text-center">
                                <a href="lien hide"> see more</a>
                            </Col>
                            <Col xl="2" className="text-center">
                                <span className="text-center">  <a href="lien hide">Accept</a> </span>
                                |
                                <span className="text-center">  <a href="lien hide">Refuse</a> </span>
                            </Col>
                        </Row> <hr />

                        <Pagination>
                            <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                            <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                        </Pagination>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default InviAddBook;







