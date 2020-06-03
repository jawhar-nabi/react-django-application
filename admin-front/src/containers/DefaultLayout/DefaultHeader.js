import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';



const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};






export class DefaultHeader extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };




  render() {

    if (this.props.isclicklogout) {
      return <Redirect to="/login" />
    }


    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <a href="/login" >identifier toi</a>
    );
    

    const userLinks = (
      <ul className="nav justify-content-end">
        
      </ul>
    );



    const { children, ...attributes } = this.props;




    return (

      <React.Fragment>
        <div className="col-lg-2">
          {isAuthenticated ? userLinks : authLinks}
        </div>
        <Router>
          <AppSidebarToggler className="d-lg-none" display="md" mobile />

          <AppNavbarBrand
            full={{ src: logo, width: 89, height: 25, alt: 'E-Library Logo' }}
            minimized={{ src: sygnet, width: 30, height: 30, alt: 'E-Library Logo' }}
          />

          <AppSidebarToggler className="d-md-down-none" display="lg" />


         <Nav className="ml-auto" navbar>

            <NavItem className="d-md-down-none">
              <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">13</Badge></NavLink>
            </NavItem>

            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav>
                <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
              </DropdownToggle>

              <DropdownMenu right>
              
              
              <DropdownItem header tag="div" className="text-center"><strong>Account : <strong>{user ? ` ${user.first_name} ` : ''}</strong></strong></DropdownItem>
                <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
                <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
                <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
                <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
                <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
                <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
                <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
                <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
               <DropdownItem onClick={this.props.logout}> <i className="fa fa-lock"></i> Logout </DropdownItem>
              </DropdownMenu>


            </UncontrolledDropdown>
          </Nav>
          <AppAsideToggler className="d-md-down-none" />
        </Router>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;


const mapStateToProps = (state) => ({
  auth: state.auth,
  listBooks: state.listBooks,
  isclicklogout: state.auth.isclicklogout,
});

export default connect(mapStateToProps, { logout })(DefaultHeader);

