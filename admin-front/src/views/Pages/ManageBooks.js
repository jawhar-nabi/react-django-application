import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

const InviAddBook = React.lazy(() => import('../components/InviAddBook'));
const AddBookForm = React.lazy(() => import('../components/AddBookForm'));
const AutomaticSearchFilter = React.lazy(() => import('../components/AutomaticSearchFilter'));


class ManageBooks extends Component {

    render() {
        return (
            <div className="animated fadeIn" background-color="red" >
                <InviAddBook />

                <Row>
                    <Col xs="12" md="6">
                        <AddBookForm />
                    </Col>

                    <Col xs="12" md="6">
                        <AutomaticSearchFilter />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default ManageBooks;