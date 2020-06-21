import React, { Component } from 'react';
import {  Confirm, Icon, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class DesignerAdmin extends Component {

    // static propTypes = {
    //     books: PropTypes.object.isRequired,
    //   };

    static propTypes = {
        books: PropTypes.object.isRequired,
    };

    state = { open: false }

    show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ open: false })
    handleCancel = () => this.setState({ open: false })

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.login(this.state.email, this.state.password);
    //   };s

    // handleClick() {
    //     this.props.getBooks();
    // }

    render() {

        const { books } = this.props.books;
        return (
            <React.Fragment>
                <div>

                <List celled>
                        {books.map(book => (
                            <List.Item key={book.title}>
                                {/* <Image avatar src='/images/avatar/small/helen.jpg' /> */}
                                <List.Content >
                                    <List.Header>
                                        {book.title}

                                        <div style={{ marginRight: '50px' }} align="right" >
                                            <button style={{ marginRight: '20px' }}>  <Icon name='setting' size='large' /></button>
                                            <button onClick={this.show} >  <Icon name='trash alternate' size='large' /></button>


                                        </div>
                                        <Confirm
                                open={this.state.open}
                                content={book.title}
                                cancelButton='Never mind'
                                confirmButton="Let's do it"
                                onCancel={this.handleCancel}
                                onConfirm={this.handleConfirm}
                                size='large'
                            />

                                    </List.Header>
                                    {book.content}

                                </List.Content>
                            </List.Item>
                            
                        ))}
                    </List>
                </div>
            </React.Fragment>
        )
    }
}
// const mapStateToProps = (state) => ({
//     initbook: state,
//   });
function mapStateToProps(state) {
    return {
        books: state.listBooks
    };
};

export default connect(mapStateToProps)(DesignerAdmin);


