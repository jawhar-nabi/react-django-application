import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';   
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';


import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';


//  l partie elli a gauche
import navigation from '../../_nav';
import routes from '../../routes'; //fiha les routes des composant w les path lkol kima li fl app.js


const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};







export class DefaultLayout extends React.Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  componentDidMount() {
  }


  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }











//-------------------------------------------

static propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};


  render() {

    console.log("test layaout");

     
    if (this.props.isclicklogout) {
      return <Redirect to="/" /> 

  }


    return (
      <React.Fragment>
        <div className="app">
          <Router>

            {/*header */}
            <AppHeader fixed>
              <Suspense fallback={this.loading()}>
                <DefaultHeader onLogout={e => this.signOut(e)} />
              </Suspense>
            </AppHeader>



            {/* Boady */}
            <div className="app-body">
              {/*AppSidebar */}  {/*sta3mal : navigation */}
              <AppSidebar fixed display="lg">
                <AppSidebarHeader />
                <AppSidebarForm />
                <Suspense>
                  <AppSidebarNav className="bg-G" navConfig={navigation} {...this.props} router={router} />
                </Suspense>
                <AppSidebarFooter />
                <AppSidebarMinimizer />
              </AppSidebar>
{/* ======================================================================================== */}
              {/* Container */}  {/*sta3mal : routes */}
              <main className="main"> 
                <AppBreadcrumb appRoutes={routes} router={router} />
                <Container fluid> 
                  <Suspense fallback={this.loading()}>

                    <Switch>
                      {/*bch yparkouri les routes lkol , chaque route idha 7achtna bih "?" y'affichih */}
                      {routes.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                              <route.component {...props} />
                            )} />
                        ) : (null);
                      })}

                      <Redirect from="/" to="/dashboardAdmin" /> 
                    </Switch>
                  </Suspense>
                </Container>
              </main>

{/* ================================================================================ */}


              {/* DefaultAside */}
              <AppAside fixed>
                <Suspense fallback={this.loading()}>
                  <DefaultAside />
                </Suspense>
              </AppAside>

            </div>

            {/* DefaultFooter */}
            <AppFooter>
              <Suspense fallback={this.loading()}>
                <DefaultFooter />
              </Suspense>
            </AppFooter>

          </Router>
        </div>
      </React.Fragment>
    )
  }
};



DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;


const mapStateToProps = (state) => ({
  auth: state.auth,
  listBooks: state.listBooks,
  isclicklogout: state.auth.isclicklogout,
});


export default connect(mapStateToProps, { logout })(DefaultLayout);
