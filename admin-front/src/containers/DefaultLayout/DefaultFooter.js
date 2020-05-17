import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>

<span  className="text-center"> &copy; copyright 2020   <a href="https://E-Library.com"> E-Library </a> </span>


              </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
