import React, {Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {home} from './home';
import {LoginForm} from './components/login';
import {Navbar} from './components/navbar';
import {Nav} from './components/nav';
import {product} from './components/product-detail';
import {test} from './components/test';
import {Footer} from './components/footer';
import { Accueil } from './pages/accueil';
import { Collaborateurs} from './components/collaborateurs';
import { all } from './pages/all-books';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Router>
            <Navbar /> 
            <Switch>
              <Route exact path="/" component={Accueil}/>
              <Route  path="/login" component={LoginForm}/>
              <Route path="/product-detail" component={product}/>
              <Route path="/test" component={test}/>
              <Route path="/accueil" component={Accueil}/> 
              <Route path="/shop" component={all}/> 

             


         
            </Switch>

            
            {<Collaborateurs/>}
            {<Footer/>}
            

          </Router>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
