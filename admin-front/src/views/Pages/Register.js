import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { login, register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardFooter } from 'reactstrap';

import routes from '../../routes';

export class Login extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
    };


    static propTypes = {
        isCorrect: PropTypes.bool,
    };




    //=============================================change/submit register====================================================================
    onSubmit = (e) => {

        e.preventDefault();
        const { first_name, last_name, email, password, password2 } = this.state;
        if (password !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
            console.log("Passwords do not match");
        }
        else {
            const newUser = {
                first_name,
                last_name,
                password,
                email
            };
            this.props.register(newUser);
        }
    };


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    // ========================================================================

    render() {


        if (this.props.isCorrect) {
            return <Redirect to="/ManageAdmins" />
        }


        const { first_name, last_name, email, password, password2 } = this.state

        return (

            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <form onSubmit={this.onSubmit} >
                                            <div className="login-form">

                                                <h1>Register</h1>
                                                <p className="text-muted">Create New Account</p> <br />




                                                <div className="row">
                                                    <label className="col-3" htmlFor="email">First Name</label>
                                                    <input className="col-9 mb-0 form-control"
                                                        type="text"
                                                        id="name"
                                                        name="first_name"
                                                        placeholder="Enter your first name"
                                                        onChange={this.onChange} />
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <label className="col-3" htmlFor="email">Last Name</label>
                                                    <input className="col-9 mb-0 form-control"
                                                        type="text"
                                                        name="last_name"
                                                        placeholder="Enter your last name"
                                                        onChange={this.onChange} />
                                                </div>

                                                <br />
                                                <div className="row">
                                                    <label className="col-3" htmlFor="email">Email</label>
                                                    <input className="col-9 mb-0 form-control"
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter Your Email Address Here.."
                                                        onChange={this.onChange} />
                                                </div>



                                                <br />
                                                <div className="row">
                                                    <label className="col-3" htmlFor="password">Password</label>
                                                    <input className=" col-9 mb-0 form-control"
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        placeholder="Enter your password"
                                                        onChange={this.onChange} />
                                                </div>
                                                <br />


                                                <div className="row mb--20 ">
                                                {/* <div className="col-lg-6 mb--20"> */}
                                                    <label className="col-3" htmlFor="password">Repeat Password</label>
                                                    <input className=" col-9 mb-0 form-control"
                                                        type="password"
                                                        id="repeat-password"
                                                        name="password2"
                                                        placeholder="Repeat your password"
                                                        onChange={this.onChange} />
                                                </div>
                                                <br /><br />
                                             
                                                <div className="col-md-12">
                                                    <Button type="submit" color="success" block>Create Account</Button>

                                                </div>
                                            </div>
                                        </form>

                                    </CardBody>


                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>

            </div >



        )
    };
}

const mapStateToProps = (state) => ({
    isCorrect: state.auth.isCorrect,
});

export default connect(mapStateToProps, { register, createMessage })(Login);