import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login, register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardFooter } from 'reactstrap';

const Home = React.lazy(() => import('../../containers/DefaultLayout'));




export class Login extends React.Component {

  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };


  //=============================================change/submit login ====================================================================

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
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


  //===========================================

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    }

    const { first_name, last_name, email, password, password2 } = this.state

    return (

      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="7">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    {/* =================================================LOGIN =========================================== */}

                    <form onSubmit={this.handleSubmit}>
                      <div className="login-form">
                        <div className="row">
                          <div className="col-md-12 col-12 mb--15">
                            <h1>Login</h1>
                            <p className="text-muted">Sign In to your account</p> <br />
                            <br />

                            <div className="row">
                              <label className="col-3 " htmlFor="email">   <i className="icon-user"></i> E-mail address</label>

                              <input className="mb-0 form-control col-9 "
                                type="email"
                                id="email1"
                                onChange={this.handleChange}
                                name="email"
                                placeholder="Enter you email address here..." />
                            </div>

                            <br />
                            <div className="row">
                              <label className="col-3  " htmlFor="password">  <i className="icon-lock"></i>   Password</label>
                              <input className="mb-0 form-control col-9"
                                type="password"
                                id="login-password"
                                name="password"
                                onChange={this.handleChange}
                                placeholder="Enter your password" />
                            </div>
                            <div className="col-md-12">
                              {/* <button type="submit" className="btn btn-outline-secondary">Login</button> */}
                              <br />
                              <br />
                              <Row >
                                <Col xs="6">
                                  <Button type="submit" color="primary" className="px-4">Login</Button>
                                </Col>
                                <Col xs="6" className="text-right">
                                  <a href="/register" color="link" className="px-0">Forgot password?</a>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </div>
                      </div>

                    </form>

                  </CardBody>

                 
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>

      </div>

    )







  };
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register, createMessage })(Login);