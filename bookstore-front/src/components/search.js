import React, { Component } from 'react';

export class Search extends Component {
    render() {
        return (
            <div>
                    <div className="header-search-block">
                        <input type="text" placeholder="Search entire store here" />
                        <button><i className="fa fa-search"></i></button>
                    </div>
                      {/* <button type="submit"><i class="fa fa-search"></i></button> */}

                </div>
        );
    }
}