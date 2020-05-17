import { Link } from 'react-router-dom'
import React, { Component, lazy } from 'react';
import { Col, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';

const UsersList = React.lazy(() => import('../components/UsersList'));


class ManageUsers extends Component {

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
                    <Link to="/Register" className="btn btn-primary d-block  cui-user-follow icons   justify-end" >  Add User  </Link>
                    </Col>

                </Row>

            </div>
        );
    }
}

export default ManageUsers;