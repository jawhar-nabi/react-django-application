
import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

class AddBookForm extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
 
          <Col >
            <Card>
              <CardHeader>
                <strong>Add New Book</strong> manual
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">ISBN</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  id="number" name="isbn" placeholder="International Standard Book Number"  required />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Book name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="book-name" placeholder="Book name" required />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Author</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="author" placeholder="author" required />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Book type</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select" required>
                        <option value="0">Please select a type</option>
                        <option value="1">science fiction</option>
                        <option value="2">comidy</option>
                        <option value="3">self help</option>
                        <option value="3">sport</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="description" id="textarea-input" rows="7"  placeholder="book description..." required/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Publish in </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="publish-in" placeholder="date" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Book Cover</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="book-cover" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
           
          </Col>
          </div>
              );
            }
          }
          
          export default AddBookForm;

