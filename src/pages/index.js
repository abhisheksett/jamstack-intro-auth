import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => {
    return (
        <Layout>
            <h1>This app rules !!</h1>
            <p>Login to find out why</p>
            <Link to="/dashboard">Go to Dashboard</Link>
        </Layout>
    );
}