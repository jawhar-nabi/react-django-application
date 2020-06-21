import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import C from './cmntr'


import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardFooter } from 'reactstrap';

//tet3ammar bl url get BD
const elements = ['c1', 'c2', 'c3'];



export class Cmntr extends Component {

    state = {
        show: false
    }



    montreContact = () => {
        this.setState({
            show: !this.state.show
        })
    }





    render() {
        return (
            <div>

                {/* one cmnt */}
                <div className="py-1 pt-10 mr-3 float-left  ml-n5">
                    <Avatar alt="Remy Sharp" src="/assets/img/avatars/6.jpg" />
                </div>
                <div>
                    <small className="text-muted float-right mt-1">1:52 PM</small>
                </div>
                <div className="text-truncate font-weight-bold pl-2">Lorem ipsum dolor sit amet</div>
                <p className='m-2 pl-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt lor sit amet, consectetur adipisicing elit, sed do eiusmod
                    lor sit amet, consectetur adipisicing elit, sed do eiusmod...
            </p>


                < div className="card card-body  mt-n3 pb-5 m-1 pl-2">
                    <p> <small className="text-muted" onClick={this.montreContact} >  voir les réponses...  </small> </p>
                    {this.state.show ? (

                        <div className="float-left   pl-5 ">

                            {elements.map((value, index) => {
                                return <C />
                            })}
                            <p className="text-muted text-center" > <small className="text-muted"><a href="h"> voir plus des commantaires ... </a>    </small> </p>                      
                        </div>
                   ) : null}
                </div>

            </div>



        );
    }
}


export default Cmntr;