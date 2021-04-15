import React from 'react';
import { Store } from '../src/store/store';
import App from '../src/app'
import Layout from '../src/components/Layout'
import Header from '../src/components/header'
const Index = () => {
    return (
        <Store>
            <Layout>
                <Header />
                <App />
            </Layout>
        </Store>
    );
};

export default Index