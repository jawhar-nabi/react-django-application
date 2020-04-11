import React, {Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Navbar from './components/navbar';
import {Footer} from './components/footer';
import { Accueil } from './pages/accueil';
import { Collaborateurs} from './components/collaborateurs';
import {Test} from './components/test';
import Login from './pages/login';
import {Profil} from './pages/profil';
import {MyBooks} from './pages/myBooks';
import {Forum} from './pages/forum';
import {Contact} from './pages/contact';
import {Cover} from './components/cover';
import {Book} from './components/book';
import {ListeBooks} from './pages/listeBooks';
import {DetailBook} from './pages/detailBook';
import {ChallengePage} from './pages/challengePage';
import {product} from './components/product-detail';
import { all } from './pages/all-books';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';




class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
  
    return (
      <Provider store={store}>
      <React.Fragment>
        <div className="container">
          <Router>
          <Navbar /> 




            <Switch>
              <Route exact path="/" component={Accueil}/> 
              <Route path="/test" component={Test}/> 
              <Route path="/login" component={Login}/> 
              <Route path="/profil" component={Profil}/> 
              <Route path="/myBooks" component={MyBooks}/> 
              <Route path="/forum" component={Forum}/> 
              <Route path="/contact" component={Contact}/> 
              <Route path="/cover" component={Cover}/> 
              <Route path="/book" component={Book}/> 
              <Route path="/listeBooks" component={ListeBooks}/> 
              <Route path="/detailBook" component={DetailBook}/> 
              <Route path="/challengePage" component={ChallengePage}/> 

              {/* <Route  path="/login" component={LoginForm}/> */}
              <Route path="/product-detail" component={product}/>
              <Route path="/accueil" component={Accueil}/> 
              <Route path="/shop" component={all}/> 

             


         
            </Switch>

            
            {<Collaborateurs/>}
            {<Footer/>}
            

          </Router>
        </div>
      </React.Fragment>
      </Provider>
    );
  }
}
export default App;
