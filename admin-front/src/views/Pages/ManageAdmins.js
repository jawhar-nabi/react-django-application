import { Link } from 'react-router-dom'
import React, { Component, lazy } from 'react';
import { Col, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';

const Home = React.lazy(() => import('../../containers/DefaultLayout'));

const AdminsList = React.lazy(() => import('../components/AdminsList'));


export class ManageAdmins extends React.Component {


  render() {

    return (
      <div className="animated fadeIn" background-color="red" >

        <AdminsList />
        <br />
        <Row>
          <Col xl="6">
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
          </Col>





{/* =========================================== */}
          <Col xl="4" >
          <a href="/home" className="fa fa-mail-reply fa-lg  " /> 
          </Col>          
{/* ============================================================ */}




          <Col xl="2" >
          <a href="/register" className="btn btn-primary d-block  cui-user-follow icons   justify-end" >Add Admin </a>
          </Col>
        </Row>

      </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    books: state.listBooks
  };
};

export default connect(mapStateToProps)(ManageAdmins);