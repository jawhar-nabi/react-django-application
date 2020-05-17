import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';



class SkeletonComponent extends Component {

    constructor(props) {
        super(props);
    }


    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>


    render() {

        return (
            <div className="animated fadeIn" background-color="red" >

                <Card>
                    <CardHeader>
                    {this.props.title}<strong>{this.props.titleG}</strong>{this.props.titleS}
                        <div className="card-header-actions">
                            <a href={this.props.doc}  className="card-header-action">
                                <small className="text-muted fa fa-file-pdf-o"> </small>
                            </a>
                        </div>
                    </CardHeader>
                    <CardBody>

                        {this.props.description}

                        {this.props.component}
                    </CardBody>
                </Card>





            </div>
        );
    }
}

export default SkeletonComponent;