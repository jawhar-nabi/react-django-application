import React, { Component } from 'react';
import '../css/search.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Searchpage extends Component{
  constructor(props) {
    super(props);
    this.state={
      resultat: [],
      listItems:<div></div>,
      done:false
    }
        
  }
  
  componentDidMount() {
   // console.log("3:ppppppppppppppppppppppppppppppppppppppppp"+this.props.dataFromParent);

 
  }
  handleComponentserach=()=>{
      if(this.props.location.state.searchdone===true){  
        var config = {
          method: 'get',
          url: 'http://127.0.0.1:8000/pages/searchurl/aa',
          headers: { }  
        };
        
        axios(config) 
        .then(res => {
          console.log("#######################    search data    ####################################");
          console.log(res.data);
          console.log(res.data.context);
          console.log(res.data.items);
          this.state.resultat=res.data.items;
          this.state.done=true;
          console.log("6666666666666",this.state.resultat[1].link);

           this.setState({listItems : this.state.resultat.map((number) =><li>
          <div className="proPic"><img src="image/search.png" /></div>
          <div className="info">
            <h1><a href={number.link}>{number.title}</a></h1>
            <h3><a href={number.link}>{number.link}</a></h3>
            <h6><a href={number.displayLink}>WEB SITE: {number.displayLink}</a></h6>
            <div className="social">
              <span className="likes">107</span>
              <span className="photo">23</span>
              <span className="comments">6</span>
            </div>
          </div>
        </li>
        )});
     
      
    
    
    
    
          })
        .catch(console.log("\n*************** dynamic search not working**************************")
         );

         return (
          <div>  <ul>{this.state.listItems}</ul></div>
          );
        }

         
        
       
}
    

    render(){
        return(
        
      <div>
      {// //hathy lel Link maynajm yab3th ken message string other data lé good to know wallah
        }
                <hr></hr>

        <pre>                          TOP 10 GOOGLE RESEARCHES : </pre>
        <h6><pre>                          Our research are given from best websites for online reading ,</pre></h6>
        <h5> <pre>                     Enjoy !</pre>  </h5>

        <hr></hr>

        <div className="wrapper">
      <ul className="menu">
      {this.handleComponentserach()}
      {this.handleComponentserach()}
      {console.log("AAAAAAAAAAAAA5AAAAAAAAAAAAAAAAAAAAARYA",this.state.listItems )}

      {/*for (var i = 0; i < this.state.resultat.length; i++) {
            console.log( this.state.resultat[i].link) ;
                     
        }*/
      }
      </ul>
    </div>
    </div>
      );
    }
  }
  
  
  
  
  
  export default Searchpage;