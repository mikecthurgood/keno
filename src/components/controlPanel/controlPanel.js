import React, {useState, useContext} from 'react'
import styled from 'styled-components';

import { Dispatch, State } from '../../store/store'

import ControlButton from '../buttons/controlButton'

const ControlPanel = () => {
    const dispatch = useContext(Dispatch)
    const {userPicks, wager} = useContext(State)
    
    function clear() {
        dispatch({type: 'clear'})
    }

    function randomPicks (e) {
        dispatch({type: 'setRandomPicks'})
    }

    function submitPicks () {
        if (userPicks.length > 0 && wager ) {
            return dispatch({type: 'setUserMessage', data: "Congratulations, you're a winner!"})
        }
        if (userPicks.length === 0) {
            return dispatch({type: 'setUserMessage', data: "You haven't made any selections"})
        }
        return dispatch({type: 'setUserMessage', data: "Please select a wager amount"})
    }

    return (
        <ControlContainer>
            <ControlButtonContainer>
                <ControlButton onClick={randomPicks}>
                    <p>Lucky Pick</p>
                </ControlButton>
                <ControlButton onClick={clear}>
                    <p>Clear</p>
                </ControlButton>
            </ControlButtonContainer>
            <ControlButtonContainer>
                <SubmitButton onClick={submitPicks}>
                    Submit
                </SubmitButton>
            </ControlButtonContainer>
        </ControlContainer>
    )
}

export default ControlPanel

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
  height: fit-content;
  flex-direction: column;
`

const ControlButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
  height: fit-content;
  flex-direction: row;
`

const SubmitButton = styled.div`
    width: 10rem;
    height: 2rem;
    border: 1px solid;
    border-color: #4CA5FF;
    background-color: #4CA5FF;
    color: white;
    border-radius: 3px;
    margin: 0.5rem;
    text-align: center;
    display: table;
    font-size: 1.5rem;
    cursor: pointer;
    p {
        display: table-cell;
        vertical-align: middle;
    }
    &:hover {
        color: #4CA5FF;
        background-color: white;
    }
`