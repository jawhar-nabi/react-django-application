import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
export class Search extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {
       
        searchBox:''};

       this.handleChange = this.handleChange.bind(this);
       this.handleClick=this.handleClick.bind(this);
    }

    handleChange(event) {
    this.setState({searchBox: event.target.value});
    }

 

    handleClick(event) {
        console.log(this.state.searchBox);
      }

   sendData = (att) => {
      this.props.parentCallback(att); }



    render() {
        return (
            <div>
                    <div className="header-search-block">
                        <input type="text" placeholder="Search entire store here" value={this.state.searchBox} onChange={this.handleChange} />
                    
                   <Link to={{
                        pathname: '/searchpage',
                        state: {
                        box:this.state.searchBox ,
                        searchdone: true
                    }
                        }}
                      >                    
                   <button onClick={this.handleClick}  >
                     <i className="fa fa-search"></i></button></Link>
                    
                    </div>
                </div>
        );
    }
}