import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import Cmntr from '../components/cmntr'
import {
  CardHeader,
  FormGroup,
  Label,
} from 'reactstrap';

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardFooter } from 'reactstrap';

const elements = ['c1', 'c2', 'c3', 'c4'];


export class Forum extends Component {






  render() {
    return (
      <div className="pt-3  pb-5" style={{ display: 'flex', justifyContent: 'center' }}>
        <Col md="8" >
          {/*====================================================================================== */}


          <div className="animated fadeIn pb-5">

            <Card>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                  <FormGroup row>
                    <Col >
                      <Input type="textarea" name="newCmnt" id="textarea-input" rows="3" placeholder="ajouter un commantaire..." required />
                    </Col>
                  </FormGroup>
                </Form>
                <Button  className="float-right" type="submit" size="xs" >ajouter</Button>
              </CardBody>
            </Card>

          </div>



          {/*====================================================================================== */}
          {elements.map((value, index) => {
            return <Cmntr />
          })}

          {/*====================================================================================== */}
          <p className="text-muted text-center" > <small className="text-muted"><a href=" "> voir plus des commantaires ... </a>    </small> </p>
        </Col>



      </div>
    );
  }
}

export default Forum;


