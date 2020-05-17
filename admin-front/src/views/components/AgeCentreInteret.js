import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Progress } from 'reactstrap';

const data1 = 90;
const data2 = 75;
const data3 = 75;
const data4 = 35;
const data5 = 10;

class AgeCentreInteret extends Component {

    render() {
        return (
            <div className="animated fadeIn" >


                <Card >
                    <CardHeader >
                        <Row>
                            <Col xl="3" className="text-center">Age</Col>
                            <Col xl="6" className="text-center"> Favorite Types of Books</Col>
                            <Col xl="3" className="text-center"> </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>

                        <Row>
                            <Col xl="3" className="text-center">13-17 y.o</Col>
                            <Col xl="6" className="text-center">
                                <Progress multi>
                                    <Progress bar color="clr-b00" value={data1} > <strong> {data1}%  Sport</strong>  </Progress>
                                    <Progress animated bar color="clr-b11" value={data2}> <strong>{data2}%  self-dev </strong>  </Progress>
                                    <Progress bar color="clr-b22" value={data3} > <strong> {data3}%  business</strong> </Progress>
                                    <Progress animated bar color="clr-b33" value={data4} > <strong>{data4}%  music</strong>  </Progress>
                                    <Progress bar color="gray" value={data5} > <strong>{data5}%  Others</strong>  </Progress>
                                </Progress>
                            </Col>
                            <Col xl="3" className="text-center">
                                <span className="text-center">  <a href="lien hide">Top 100 Books</a> </span>
                            </Col>
                        </Row> <hr />

                        <Row>
                            <Col xl="3" className="text-center">18-24 y.o</Col>
                            <Col xl="6" className="text-center">
                                <Progress multi>
                                    <Progress animated bar color="clr-b00" value={60} > <strong> 60%  Sport</strong>  </Progress>
                                    <Progress bar color="clr-b11" value={50}> <strong>50%  self-dev </strong>  </Progress>
                                    <Progress animated bar color="clr-b22" value={30} > <strong> 20%  business</strong> </Progress>
                                    <Progress bar color="clr-b33" value={20} > <strong>20%  music</strong>  </Progress>
                                    <Progress animated bar color="gray" value={25} > <strong>25%  Others</strong>  </Progress>
                                </Progress>
                            </Col>
                            <Col xl="3" className="text-center">
                                <span className="text-center">  <a href="lien hide">Top 100 Books</a> </span>
                            </Col>
                        </Row> <hr />

                        <Row>
                            <Col xl="3" className="text-center">25-34 y.o</Col>
                            <Col xl="6" className="text-center">
                                <Progress multi>
                                    <Progress bar color="clr-b00" value={data1} > <strong> {data1}%  Sport</strong>  </Progress>
                                    <Progress animated bar color="clr-b11" value={data2}> <strong>{data2}%  self-dev </strong>  </Progress>
                                    <Progress bar color="clr-b22" value={data3} > <strong> {data3}%  business</strong> </Progress>
                                    <Progress animated bar color="clr-b33" value={data4} > <strong>{data4}%  music</strong>  </Progress>
                                    <Progress bar color="gray" value={data5} > <strong>{data5}%  Others</strong>  </Progress>
                                </Progress>
                            </Col>
                            <Col xl="3" className="text-center">
                                <span className="text-center">  <a href="lien hide"> Top 100 Books </a> </span>
                            </Col>
                        </Row> <hr />

                        <Row>
                            <Col xl="3" className="text-center">35-44 y.o</Col>
                            <Col xl="6" className="text-center">
                                <Progress multi>
                                    <Progress animated bar color="clr-b00" value={60} > <strong> 60%  Sport</strong>  </Progress>
                                    <Progress bar color="clr-b11" value={50}> <strong>50%  self-dev </strong>  </Progress>
                                    <Progress animated bar color="clr-b22" value={30} > <strong> 20%  business</strong> </Progress>
                                    <Progress bar color="clr-b33" value={20} > <strong>20%  music</strong>  </Progress>
                                    <Progress animated bar color="gray" value={25} > <strong>25%  Others</strong>  </Progress>
                                </Progress>
                            </Col>
                            <Col xl="3" className="text-center">
                                <span className="text-center">  <a href="lien hide"> Top 100 Books </a> </span>
                            </Col>
                        </Row> <hr />

                        <Row>
                            <Col xl="3" className="text-center">45-54 y.o</Col>
                            <Col xl="6" className="text-center">
                                <Progress multi>
                                    <Progress bar color="clr-b00" value={data1} > <strong> {data1}%  Sport</strong>  </Progress>
                                    <Progress animated bar color="clr-b11" value={data2}> <strong>{data2}%  self-dev </strong>  </Progress>
                                    <Progress bar color="clr-b22" value={data3} > <strong> {data3}%  business</strong> </Progress>
                                    <Progress animated bar color="clr-b33" value={data4} > <strong>{data4}%  music</strong>  </Progress>
                                    <Progress bar color="gray" value={data5} > <strong>{data5}%  Others</strong>  </Progress>
                                </Progress>
                            </Col>
                            <Col xl="3" className="text-center">
                                <span className="text-center">  <a href="lien hide"> Top 100 Books </a> </span>
                            </Col>
                        </Row> <hr />

                        <Row>
                            <Col xl="3" className="text-center">55-64 y.o</Col>
                            <Col xl="6" className="text-center">
                                <Progress multi>
                                    <Progress animated bar color="clr-b00" value={60} > <strong> 60%  Sport</strong>  </Progress>
                                    <Progress bar color="clr-b11" value={50}> <strong>50%  self-dev </strong>  </Progress>
                                    <Progress animated bar color="clr-b22" value={30} > <strong> 20%  business</strong> </Progress>
                                    <Progress bar color="clr-b33" value={20} > <strong>20%  music</strong>  </Progress>
                                    <Progress animated bar color="gray" value={25} > <strong>25%  Others</strong>  </Progress>
                                </Progress>
                            </Col>
                            <Col xl="3" className="text-center">
                                <span className="text-center">  <a href="lien hide"> Top 100 Books </a> </span>
                            </Col>
                        </Row> <hr />

                        <Row>
                            <Col xl="3" className="text-center">64+ y.o</Col>
                            <Col xl="6" className="text-center">
                                <Progress multi>
                                    <Progress bar color="clr-b00" value={data1} > <strong> {data1}%  Sport</strong>  </Progress>
                                    <Progress animated bar color="clr-b11" value={data2}> <strong>{data2}%  self-dev </strong>  </Progress>
                                    <Progress bar color="clr-b22" value={data3} > <strong> {data3}%  business</strong> </Progress>
                                    <Progress animated bar color="clr-b33" value={data4} > <strong>{data4}%  music</strong>  </Progress>
                                    <Progress bar color="gray" value={data5} > <strong>{data5}%  Others</strong>  </Progress>
                                </Progress>
                            </Col>
                            <Col xl="3" className="text-center">
                                <span className="text-center">  <a href="lien hide"> Top 100 Books </a> </span>
                            </Col>
                        </Row>


                    </CardBody>


                </Card>


            </div>
        )
    }
}

export default AgeCentreInteret;







