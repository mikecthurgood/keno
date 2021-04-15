import React from 'react'
import styled from 'styled-components';

const ControlButton = ({onClick, children}) => (
    <ControlBtn onClick={onClick}>
        {children}
    </ControlBtn>
)

export default ControlButton

const ControlBtn = styled.div`
    width: 30%;
    min-width: 5rem;
    height: 2rem;
    border: 1px solid;
    border-color: grey;
    color: 'black';
    border-radius: 3px;
    margin: 0.5rem;
    text-align: center;
    display: table;
    cursor: pointer;
    p {
        display: table-cell;
        vertical-align: middle;
    }
    span {
        border: 1px solid;
        border-color: ${({selected}) => selected ? 'white' : 'grey'};
        border-radius: 50%;
        padding: 0 4px;
    }
    &:hover {
        border-color: #4CA5FF;
        color: white;
        background-color: #4CA5FF;
    }
`