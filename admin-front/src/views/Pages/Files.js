import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'


class Files extends Component {

    render() {

        return (
            <div className="animated fadeIn" background-color="red" >

                <br />
                <br />
                <Card className="text-white bg-B3 text-center ">
                    <CardBody>
                        <h4><Link to="#" className="text-white  cui-people icons  font-2xl d-block " >  Users Number</Link> </h4>
                    </CardBody>
                </Card>

                <Card className="text-white bg-B2 text-center ">
                    <CardBody>
                        <h4><Link to="#" className="text-white  fa fa-book icons font-2xl d-block " >  List Top 100 Books </Link> </h4>
                    </CardBody>
                </Card>

                <Card className="text-white bg-B1 text-center ">
                    <CardBody>
                        <h4><Link to="#" className="text-white  fa fa-diamond icons font-2xl d-block " >  Favorite Types of Books</Link> </h4>
                    </CardBody>
                </Card>

                <Card className="text-white bg-B0 text-center ">
                    <CardBody>
                        <h4><Link to="#" className="text-white icon-directions icons font-2xl d-block " >  Average books in Challenge VS Average books Read </Link> </h4>
                    </CardBody>
                </Card>

            </div>
        );
    }
}

export default Files;