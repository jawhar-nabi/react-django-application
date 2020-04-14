import React, { Component } from 'react';
import { Icon, List } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';

class Crudbooks extends Component {

    // static propTypes = {
    //     books: PropTypes.object.isRequired,
    //   };
    
    static propTypes = {
        books: PropTypes.object.isRequired,
      };
    

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.login(this.state.email, this.state.password);
    //   };s

// handleClick() {
//     this.props.getBooks();
// }

    render() {

         const {books} = this.props.books;
         console.log( typeof books, books);
          return (
            <React.Fragment>
                <div>
                    <List celled>
                    {/* {books.map(book => ( */}
                        <List.Item>
                            {/* <Image avatar src='/images/avatar/small/helen.jpg' /> */}
                            <List.Content>
                                <List.Header>                          
                                    {books.title}

                                     <div style={{marginRight : '50px' }} align="right" >
                                     <button style={{marginRight : '20px' }}>  <Icon name='setting' size='large' /></button> 
                                     <button >  <Icon name='trash alternate' size='large' /></button>
                                    </div>
                                </List.Header>
                                {books.content}

                        </List.Content>
                        </List.Item>
                     {/* ))}   */}
                    </List>

                </div>
            </React.Fragment>
        )
    }
}
// const mapStateToProps = (state) => ({
//     initbook: state,
//   });
function mapStateToProps(state){
    return {
    books: state.listBooks
    };
  };
  
export default connect(mapStateToProps)(Crudbooks);
    

  