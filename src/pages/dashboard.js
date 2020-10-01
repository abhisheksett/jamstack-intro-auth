import React, {useEffect, useState} from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import Login from '../components/route-login';
import {IdentityModal} from 'react-netlify-identity-widget';
import PrivateRoute from '../components/private-route';

import 'react-netlify-identity-widget/styles.css';
 
const Dashboard = ({ location }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, []);

  const showModal = () => setIsVisible(true);

    return (
        <Layout>
            <Profile showModal={showModal} />
            <Router>
                <PrivateRoute component={RouteBase} path="/dashboard/base"/>
                <PrivateRoute component={RouteSecret} path="/dashboard/secret"/>
                <Login path="/dashboard/login" showModal={showModal}/>
            </Router>
            <IdentityModal showDialog={isVisible} onCloseDialog={() => setIsVisible(false)} />
        </Layout>
    )
};

export default Dashboard;