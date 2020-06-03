import { Link } from 'react-router-dom'
import React, { Component, lazy } from 'react';
import { Col, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';

const UsersList = React.lazy(() => import('../components/UsersList'));

export class ManageUsers extends React.Component {


    render() {
        return (
            <div className="animated fadeIn" background-color="red" >
                <UsersList />
                <br />

                <Row>
                    <Col md="10">
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

                    <Col md="2">
                        <a href="/register" className="btn btn-primary d-block  cui-user-follow icons   justify-end" >Add User</a>
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

export default connect(mapStateToProps)(ManageUsers);