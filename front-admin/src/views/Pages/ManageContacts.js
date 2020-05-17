import React, { Component } from 'react';

const Contact = React.lazy(() => import('../components/Contact'));


class ManageContacts extends Component {

    render() {

        return (
            <div className="animated fadeIn" background-color="red" >
                <Contact />
            </div>
        );
    }
}

export default ManageContacts;