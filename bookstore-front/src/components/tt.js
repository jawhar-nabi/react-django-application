import React, {Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Accueil } from '../pages/accueil';
import { Login } from './login';
import { Profil } from '../pages/profil';
import { MyBooks } from '../pages/myBooks';
import { Forum } from '../pages/forum';
import { Contact } from '../pages/contact';


class Tt extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Router>
            




            <Switch>
              <Route path="./login" component={Login}/> 
              <Route exact path="../pages/accueil" component={Accueil}/>
              <Route  path="../pages/profil" component={Profil}/>
              <Route path="../pages/myBooks" component={MyBooks}/>
              <Route path="../pages/forum" component={Forum}/> 
              <Route path="../pages/contact" component={Contact}/> 

             


         
            </Switch>

       
            

          </Router>
        </div>
      </React.Fragment>
    );
  }
}
export default Tt;
