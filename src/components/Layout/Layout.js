/* eslint-disable react/no-danger */
import Head from 'next/head';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
        width: 100%;
    }

    html,
    body {
        -webkit-tap-highlight-color: transparent;
        -webkit-overflow-scrolling: touch;
    }

    html {
        touch-action: manipulation;
    }

    .content-scroll {
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }

    body {
        background-color: #fff;
        color: #000;
        font-family: 'Muli', sans-serif;
    }

    img {
        display: block;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyle/>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="theme-color" content="#000000" />  
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Muli&display=swap" />
                <title>Thurgles Keno</title>
            </Head>
            <body>
                {children}
            </body>
        </div>
    );
};

export default Layout;
