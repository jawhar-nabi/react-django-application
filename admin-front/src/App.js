import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const ManageAdmin = React.lazy(() => import('./views/Pages/ManageAdmins'));
const DashboardAdmin = React.lazy(() => import('./views/Pages/DashboardAdmin'));


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <React.Suspense fallback={loading()}>
              <Router>
                <Switch>
                <Route path="/home" name="home" render={props => <DefaultLayout {...props} />} />

                <Route exact path="/" name="Login Page" render={props => <Login {...props} />} />
                  <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
                  <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
                  <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
                  <Route ecaxt path="/ManageAdmins" name="/ManageAdmins" render={props => <ManageAdmin {...props} />} />
                  <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
                </Switch>
              </Router>
            </React.Suspense>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;


