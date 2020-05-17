

import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Input,
    Row,
} from 'reactstrap';



class Notes extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }


    render() {

        return (
            <div className="animated fadeIn" background-color="red" >

                <Col xs="12" sm="6" md="4">
                    <Card className="border-primary">
                        <CardHeader>
                            New note
                            <div className="card-header-actions">
                                <i className=" fa fa-pencil-square-o float-right"></i>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                                placeholder="Content..." />
                        </CardBody>
                        <CardFooter>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            </CardFooter>
                        </CardFooter>
                    </Card>
                </Col>



                <hr/><hr/>


                <Row>
                    <Col xs="12" sm="6" md="4">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                note title
                            <div className="card-header-actions">
                                    <i className="fa fa-trash" ></i>
                                </div>
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                             </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" md="4">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                note title
                            <div className="card-header-actions">
                                    <i className="fa fa-trash" ></i>
                                </div>
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                             </CardBody>
                        </Card>
                    </Col>




                    <Col xs="12" sm="6" md="4">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                note title
                            <div className="card-header-actions">
                                    <i className="fa fa-trash" ></i>
                                </div>
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                             </CardBody>
                        </Card>
                    </Col>




                    <Col xs="12" sm="6" md="4">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                note title
                            <div className="card-header-actions">
                                    <i className="fa fa-trash" ></i>
                                </div>
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                             </CardBody>
                        </Card>
                    </Col>




                    <Col xs="12" sm="6" md="4">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                note title
                            <div className="card-header-actions">
                                    <i className="fa fa-trash" ></i>
                                </div>
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                             </CardBody>
                        </Card>
                    </Col>




                    <Col xs="12" sm="6" md="4">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                note title
                            <div className="card-header-actions">
                                    <i className="fa fa-trash" ></i>
                                </div>
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                             </CardBody>
                        </Card>
                    </Col>




                    <Col xs="12" sm="6" md="4">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                note title
                            <div className="card-header-actions">
                                    <i className="fa fa-trash" ></i>
                                </div>
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                             </CardBody>
                        </Card>
                    </Col>




                    <Col xs="12" sm="6" md="4">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                note title
                            <div className="card-header-actions">
                                    <i className="fa fa-trash" ></i>
                                </div>
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                             </CardBody>
                        </Card>
                    </Col>




                    <Col xs="12" sm="6" md="4">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                note title
                            <div className="card-header-actions">
                                    <i className="fa fa-trash" ></i>
                                </div>
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                             </CardBody>
                        </Card>
                    </Col>




                    <Col xs="12" sm="6" md="4">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                note title
                            <div className="card-header-actions">
                                    <i className="fa fa-trash" ></i>
                                </div>
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                             </CardBody>
                        </Card>
                    </Col>

                </Row>

            </div>
        );
    }
}

export default Notes;

