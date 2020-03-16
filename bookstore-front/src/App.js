import React, {Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {home} from './home';
import {LoginForm} from './components/login';
import {Navbar} from './components/navbar';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Router>
            <Navbar /> 
            <Switch>
              <Route exact path="/" component={home}/>
              <Route  path="/login" component={LoginForm}/>
            </Switch>
            {/* <Footer/> */}
          </Router>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
