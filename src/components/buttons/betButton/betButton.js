import React from 'react'
import styled from 'styled-components';

const BetButton = ({selected, amount, onClick}) => (
    <BetBtn selected={selected} onClick={onClick}>
        <p><span>£</span> {amount}</p>
    </BetBtn>       
)


export default BetButton

const BetBtn = styled.div`
    width: 10%;
    min-width: 2rem;
    height: 2rem;
    border: 1px solid;
    border-color: ${({selected}) => selected ? '#4CA5FF' : 'grey'};
    color: ${({selected}) => selected ? 'white' : 'black'};
    background-color: ${({selected}) => selected ? '#4CA5FF' : 'none'};
    border-radius: 3px;
    margin: 2rem 0.5rem 0.5rem;
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

    @media screen and (max-width: 430px) {
        font-size: 0.6rem;
        height: 1.9rem;
    }
`