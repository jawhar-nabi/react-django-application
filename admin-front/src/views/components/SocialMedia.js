import React, { Component } from 'react';
import { Button,  Col, Row } from 'reactstrap';


class SocialMedia extends Component {


  render() {

    return (
      <div className="animated fadeIn">


        <Row>

          <Col xs="12" sm="6" lg="3">
            <Button size="lg" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Button size="lg" className="btn-instagram btn-brand icon mr-1 mb-1"><i className="fa fa-instagram"></i><span>Instagram</span></Button>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Button size="lg" className="btn-linkedin btn-brand mr-1 mb-1"><i className="fa fa-linkedin"></i><span>LinkedIn</span></Button>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Button size="lg" className="btn-twitter btn-brand mr-1 mb-1"><i className="fa fa-twitter"></i><span>Twitter</span></Button>
          </Col>

        </Row>
        <br />

      </div >
    );
  }
}

export default SocialMedia;

