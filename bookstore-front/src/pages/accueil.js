import React from 'react';

import '../App.css';
import {BrowserRouter as Router } from 'react-router-dom';

import {AvisClients} from '../components/avisClients';
import {Ads} from '../components/ads';
import {Challenge} from '../components/challenge';
import {AddBook} from '../components/addBook';
import {UserBooks} from '../components/userBooks';
import {Gallery} from '../components/gallery';
import {BarCategory} from '../components/barCategory';
import {News} from '../components/news';
import {Top20} from '../components/top20';





export class Accueil extends  React.Component{
    render(){
      return (
    <React.Fragment>
      <div className="container">
        <Router>
          <h1> New BOOKS</h1>
          {<News/>}      <br /><br /><br /><br />
          {<Top20/>}
          <h1> Books Category : </h1>      <br /><br /><br /><br />
          {<Gallery/>}
          {<BarCategory/>}
          {<Ads/>}
      
          <div className="row"> 
              <div className="col-sm-4">{<Challenge/>}</div>
              <div className="col-sm-8">{<UserBooks/>}</div> 
          </div> 
          {<AvisClients/>}
         </Router>
      </div>
      </React.Fragment>


  )
    }}



    export default Accueil;