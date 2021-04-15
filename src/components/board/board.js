import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components';

import { State, Dispatch } from '../../store/store'

const KenoBoard = () => {
    const {userPicks} = useContext(State)
    const dispatch = useContext(Dispatch)
    
    const [gridArray, setGridArray] = useState([])
    
    useEffect(() => {
        const array = []
        for (let i = 1; i <= 80; i++) {
            array.push(i)
        }
        setGridArray(array)
    }, [])

    function selectCell(selection) {
        return dispatch({type: 'setUserPicks', data: {selection}})
    }
    return (
        <GridContainer>
            {gridArray.length > 0 && gridArray.map((cell) => (
                <GridCell 
                    top={cell <= 40} 
                    selected={userPicks.includes(cell)} 
                    onClick={() => selectCell(cell)}
                    key={`cell ${cell}`}
                >
                    {cell}
                </GridCell>
            ))}
        </GridContainer>
    )
}

export default KenoBoard

const GridContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
  grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
`
const GridCell = styled.div`
    background-color: ${(props) => props.selected ? '#258214' : props.top ? '#4CA5FF' : '#FF0022'};
    border: 1px solid white;
    color: white;
    cursor: pointer;
    font-size: ${({selected}) => selected ? '2rem' : '1.5rem'};
    padding: ${({selected}) => selected ? '0.18rem 0.36rem' : '0.5rem 1rem'};
    transition: background-color 0.1s linear;
     &:hover {
        transition: background-color 0.1s linear;
        background-color: #258214;
     }

     @media screen and (max-width: 600px) {
        font-size: 1.2rem;
        padding: 0.3rem 0.7rem;
     }

     @media screen and (max-width: 350px) {
        font-size: 0.9rem;
        padding: 0.2rem 0.38rem;
     }
`