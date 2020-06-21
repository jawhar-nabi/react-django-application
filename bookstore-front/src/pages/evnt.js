

import React, { Component } from 'react';
export class Evnt extends Component{
    


    state = {
        show: false
    }



    montreContact = () => {
        this.setState({
            show: !this.state.show
        })
    }



    render() {
        return(
           < div className="card card-body mb-3">
                
               <p> <small className="text-muted" onClick={this.montreContact} >  voir les réponses...  </small> </p>
               {this.state.show ? ( <p>text a afficher</p>
               ) : null }
               
           </div>
        )
    }



  
}


//  { this.props.nom}&nbsp; 

export default Evnt;