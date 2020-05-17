
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

class AutomaticSearchFilter extends Component {
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
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    render() {
        return (
            <div className="animated fadeIn">

                <Col >
                    <Card>
                        <CardHeader>
                            <strong> Book Search Filters</strong> automatic
              </CardHeader>
                        <CardBody>
                            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                                <FormGroup row>
                                    <Col md="3"><Label>Keywords</Label></Col>
                                    <Col md="3">
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                            <Label check className="form-check-label" htmlFor="checkbox1"> Business</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                                            <Label check className="form-check-label" htmlFor="checkbox2"> Comics</Label>
                                        </FormGroup>
                                       
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3">Fiction</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3">Psychology</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Suspense</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Art</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Romance</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Travel</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Music</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Memoir</Label>
                                        </FormGroup>
                                    </Col>

                                    <Col md="3">
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                            <Label check className="form-check-label" htmlFor="checkbox1"> Business</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                                            <Label check className="form-check-label" htmlFor="checkbox2"> Comics</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Self Help</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Crime</Label>
                                        </FormGroup>   
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Suspense</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Art</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Romance</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Travel</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Music</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Memoir</Label>
                                        </FormGroup>
                                    </Col>

                                    <Col md="3">
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                            <Label check className="form-check-label" htmlFor="checkbox1"> Business</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                                            <Label check className="form-check-label" htmlFor="checkbox2"> Comics</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Self Help</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Crime</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3">Fiction</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3">Psychology</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Suspense</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Art</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Romance</Label>
                                        </FormGroup>
                                        <FormGroup check className="checkbox">
                                            <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                            <Label check className="form-check-label" htmlFor="checkbox3"> Travel</Label>
                                        </FormGroup>
                                       
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="text-input">Add Keyword</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="Keyword" placeholder="Keyword " />
                                    </Col>
                                </FormGroup>

                                <hr /> <br />
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="multiple-select">Links List</Label>
                                    </Col>
                                    <Col md="9">
                                        <Input type="select" name="multiple-select" id="multiple-select" multiple>
                                            <option value="1">https://www.amazon.com/</option>
                                            <option value="2">https://www.ebooks.com/</option>
                                            <option value="3">https://www.amazon.com/</option>
                                            <option value="4">https://www.ebooks.com/</option>
                                            <option value="5">https://www.amazon.com/</option>
                                            <option value="6">https://www.ebooks.com/</option>
                                            <option value="7">Option #7</option>
                                            <option value="8">Option #8</option>
                                            <option value="9">Option #9</option>
                                            <option value="10">Option #10</option>
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="text-input">Add link</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="add link site to automaticly search " />
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

export default AutomaticSearchFilter;

