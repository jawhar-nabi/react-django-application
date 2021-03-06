import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import { Footer } from './components/footer';
import { Accueil } from './pages/accueil';
import { Collaborateurs } from './components/collaborateurs';
import { Test } from './components/test';
import Login from './pages/login';
import  Profil  from './pages/profil';
import { MyBooks } from './pages/myBooks';
import { Forum } from './pages/forum';
import { Contact } from './pages/contact';
import { Cover } from './components/cover';
import { Book } from './components/book';
import { ListeBooks } from './pages/listeBooks';
import { DetailBook } from './pages/detailBook';
import { ChallengePage } from './pages/challengePage';
import { product } from './components/product-detail';
import { all } from './pages/all-books';
import  Crudbooks  from './pages/admin/crudbooks';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import { getbooks } from './actions/books-action';
import  DesignerAdmin  from './pages/admin/designerAdmin';
import {Searchpage} from './pages/searchpage'


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
    axios.get('http://localhost:8000/api/pages/books/')
      .then(
        res => (
        store.dispatch(getbooks(res.data))
        ))
      .catch(err => console.log('erreur..', err));
  }
  constructor(props) {
    super(props);
    this.state = { data_search: "" }    
  }

  callbackNavFunction = (childData) => {
          this.setState({data_search: childData});
          console.log("2........from navbar to app.........\n",this.state.data_search);

  }


  render() {

    return (
      <Provider store={store}>
        <React.Fragment>
          <div className="container">
            <Router>
              <Navbar parentCallbackNav={this.callbackNavFunction} />




              <Switch>
                <Route exact path="/" component={Accueil} />
                <Route path="/test" component={Test} />
                <Route path="/login" component={Login} />
                <Route path="/profil" component={Profil} />
                <Route path="/myBooks" component={MyBooks} />
                {/*<Route path="/forum" component={() => <Forum dataFromParent = {this.state.data_search}/>}/>
               */}
                <Route path="/searchpage" component={Searchpage}/>
                <Route path="/forum" component={Forum}/>


           
                <Route path="/contact" component={Contact} />
                <Route path="/cover" component={Cover} />
                <Route path="/book" component={Book} />
                <Route path="/listeBooks" component={ListeBooks} />
                <Route path="/detailBook" component={DetailBook} />
                <Route path="/challengePage" component={ChallengePage} />

                {/* <Route  path="/login" component={LoginForm}/> */}
                <Route path="/product-detail" component={product} />
                <Route path="/accueil" component={Accueil} />
                <Route path="/shop" component={all} />

                <Route path="/crudbooks" component= {Crudbooks} />
                

                <Route path="/DesignerAdmin" component= {DesignerAdmin} />


              </Switch>


              {<Collaborateurs />}
              {<Footer />}


            </Router>
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}
export default App;
