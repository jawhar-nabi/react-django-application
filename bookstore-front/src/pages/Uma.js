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


 //--------------------- state fiha des variables 3la 9ad les chapms fl formulaire----------------------------------------


static propTypes = {
  //login: PropTypes.func.isRequired,
  //register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

//-------------------------- is authontificate : true / false --------------------------------------------------



//=============================================change/submit login ====================================================================

handleChange = (e) => this.setState({ [e.target.name]: e.target.value });


handleSubmit = (e) => {
  e.preventDefault();
  this.props.login(this.state.email, this.state.password);
};


//=============================================change/submit register====================================================================
  onSubmit = (e) => {

    e.preventDefault();
    const { first_name,last_name, email, password, password2 } = this.state;
    if (password !== password2) {
     this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
     console.log("Passwords do not match");
    }
     else {
      const newUser = {
        first_name,
        last_name,
        password,
        email};
      this.props.register(newUser);
    }
  };



  onChange = (e) => this.setState({ [e.target.name]: e.target.value });




// ========================================================================================================================






  
  render() {
    if (this.props.isAuthenticated) {
        return <Redirect to="/" />;
    }
    const  {first_name,last_name, email, password, password2 } = this.state
    
    return(
            <div>
              <div className="site-wrapper" id="top">
                

                {/*=======================================================================================================
                                    =            Login Register page content         =
                  =======================================================================================================*/}
                <main className="page-section inner-page-sec-padding-bottom">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
                        {/*==================================================================================================
                                                              = Register Form =
                        =====================================================================================================*/}
                        <form onSubmit={this.onSubmit} >
                          <div className="login-form">
                            <h4 className="login-title">New Customer</h4>
                            <p><span className="font-weight-bold">I am a new customer</span></p>
                            <div className="row">
                              <div className="col-md-12 col-12 mb--15">
                                <label htmlFor="email">First Name</label>
                                <input className="mb-0 form-control" 
                                 type="text" 
                                 id="name"
                                 name="first_name"
                                 placeholder="Enter your first name"
                                 onChange={this.onChange} />
                              </div>
                              <div className="col-md-12 col-12 mb--15">
                                <label htmlFor="email">Last Name</label>
                                <input className="mb-0 form-control" 
                                 type="text" 
                                 name="last_name"
                                 placeholder="Enter your last name"
                                 onChange={this.onChange} />
                              </div>
                              <div className="col-12 mb--20">
                                <label htmlFor="email">Email</label>
                                <input className="mb-0 form-control"  
                                type="email" 
                                id="email" 
                                name="email"
                                placeholder="Enter Your Email Address Here.."
                                onChange={this.onChange} />
                              </div>
                              <div className="col-lg-6 mb--20">
                                <label htmlFor="password">Password</label>
                                <input className="mb-0 form-control"
                                 type="password" 
                                 id="password" 
                                 name="password"
                                 placeholder="Enter your password" 
                                 onChange={this.onChange}/>
                              </div>
                              <div className="col-lg-6 mb--20">
                                <label htmlFor="password">Repeat Password</label>
                                <input className="mb-0 form-control" 
                                type="password" 
                                id="repeat-password" 
                                name="password2"
                                placeholder="Repeat your password" 
                                onChange={this.onChange}/>
                              </div>
                              <div className="col-md-12">
                               {/*<a href="#" className="btn btn-outlined">Register</a>*/}
                               <button type="submit" class="btn btn-outline-secondary">Register</button>

                              </div>
                            </div>
                          </div>
                        </form>
                      </div>


                      {/*=========================================================================================
                                                     =         Login        =
                      ============================================================================================*/}

                      <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
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
                               {/* <a href="#" className="btn btn-outlined" >Login</a>*/}
                               <button type="submit" class="btn btn-outline-secondary">Login</button>

                              </div>
                            </div>
                          </div>
                        </form>
                      </div>




                    </div>
                  </div>
                </main>
              </div>
             
            </div>
          
    
      
    )};
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

//export default connect(mapStateToProps, { login ,register })(Login);
export default connect(mapStateToProps,{login,register, createMessage })(Login);