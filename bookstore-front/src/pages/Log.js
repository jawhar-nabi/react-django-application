import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';
import { login ,register} from '../actions/auth';  //---- consommation des URLs-----
import { createMessage } from '../actions/messages'; //---- pour les msg d'err et de succed....





export class Login extends React.Component {
 
  state = {  
        first_name: '',
        last_name:'',
        email:'',
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




  render() {
    if (this.props.isAuthenticated) {
        return <Redirect to="/" />;
    }
    const  {first_name,last_name, email, password, password2 } = this.state
    
    return(
            <div>
              <div className="site-wrapper" id="top">
                        <form onSubmit={this.handleSubmit}>
                          <div className="login-form">
                            <h4 className="login-title">Returning Customer</h4>
                            <p><span className="font-weight-bold">I am a returning customer</span></p>
                            <div className="row">
                              <div className="col-md-12 col-12 mb--15">
                                           <label htmlFor="email">Enter your email address here...</label>
                                          <input className="mb-0 form-control" 
                                      type="email" 
                                      id="email1" 
                                      onChange={this.handleChange}
                                      name="email" 
                                      placeholder="Enter you email address here..." />
                              </div>
                              <div className="col-12 mb--20">
                                            <label htmlFor="password">Password</label>
                                            <input className="mb-0 form-control" 
                                      type="password" 
                                      id="login-password"
                                      name="password" 
                                      onChange={this.handleChange} 
                                      placeholder="Enter your password" />
                              </div>
                              <div className="col-md-12">
                               <button type="submit" class="btn btn-outline-secondary">Login</button>

                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                    </div>

      
    )};
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps,{login,register, createMessage })(Login);