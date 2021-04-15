import React from 'react'
import styled from 'styled-components'

const header = () => (
    <Header>
        <p>
            Keno!
        </p>
    </Header>
)

export default header

const Header = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    background-color: #FF0022;
    height: 4rem;
    font-size: 2rem;
    color: white;
    text-align: center;
    display: table;
    z-index: 10000000;

    p {
        display: table-cell;
        vertical-align: middle;
    }
`