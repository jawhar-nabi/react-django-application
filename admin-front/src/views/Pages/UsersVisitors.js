import React, { Component } from 'react';

const SiteVisitors = React.lazy(() => import('../components/SiteVisitors'));
const SiteUsers = React.lazy(() => import('../components/SiteUsers'));
const SkeletonComponent = React.lazy(() => import('../components/SkeletonComponent'));


class UsersVisitors extends Component {

    render() {

        return (
            <div className="animated fadeIn" background-color="red" >
                <SkeletonComponent title="Users Statistic :" doc="lien de doc users" component={<SiteUsers />} />
                <SkeletonComponent title="Visitors Statistic :" doc="lien de doc visitors" component={<SiteVisitors />} />
            </div>
        );
    }
}

export default UsersVisitors;