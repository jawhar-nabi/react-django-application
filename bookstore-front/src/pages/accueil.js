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
import {Cover} from '../components/cover';
import {ChallengeAccueil} from '../components/challengeAccueil';
import {BlocMotivation} from '../components/blocMotivation';





export class Accueil extends  React.Component{
    render(){

{/*    + addBook +ads      + userBooks/>*/}   



      return (
    <React.Fragment>
      <div className="container">
        <Router>
        {<Cover/>}
        {<Gallery/>}  


        <div className="row"> 
          <div className="col-sm-3">{<ChallengeAccueil/>}</div>
          <div className="col-sm-9">{<BarCategory/>}</div> {/* livres recommandés */}
        </div>  

         
        {<News/>}  

        

        <br/><br/><br/><br/>
  {<BarCategory/>}  {/*TOP20 */} 








        <div className="row"> 
          <div className="col-sm-3">{<AddBook/>}</div>
          <div className="col-sm-9">{<Ads/>}</div> 
        </div>
         
         
         
         

         
      
        <div className="row"> 
          <div className="col-sm-3">{<BlocMotivation/>}</div>
          <div className="col-sm-9">{<UserBooks/>}</div> 

        </div> 











          {<AvisClients/>}
         </Router>
      </div>
      </React.Fragment>


  )
    }}



    export default Accueil;