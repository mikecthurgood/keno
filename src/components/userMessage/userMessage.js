import React, {useContext} from 'react'
import styled from 'styled-components';

import { State, Dispatch } from '../../store/store'

const userMessage = () => {
    const {userMessage} = useContext(State)
    const dispatch = useContext(Dispatch)
    
    function clickHandler() {
        dispatch({type: 'setUserMessage', data: ''})
    }

    return (
        <>
            <Fade visible={userMessage.length > 0} onClick={clickHandler} />
            <MessageModal visible={userMessage.length > 0}>
                <p>{userMessage}</p>
            </MessageModal>
        </>
    )
}

export default userMessage

const MessageModal = styled.div`
  display: ${({visible}) => visible ? 'flex' : 'none'};
  width: 100%;
  color: whitesmoke;
  color: black;
  text-align: center;
  justify-content: center;
  border-radius: 5px;

  p { 
      width: 100%;
      display: table-cell;
      font-size: 1.4rem;
      padding: 2rem;
      margin: 0;
  }
  
  @media screen and (max-width: 600px), screen and (max-height: 850px) {
    display: flex;
    position: absolute;
    top: 8rem;
    background-color: #ffffff;
    z-index: ${({visible}) => visible ? '1000' : '-1000'};
    opacity: ${({visible}) => visible ? '1' : '0'};
    transition: opacity 0.2s linear;
  }
`
const Fade = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  opacity: 0;
  z-index: -999;
  position: fixed;
  top: 3.4rem;
  left: 0;
  bottom: 0;
  right: 0;

  @media screen and (max-width: 600px), screen and (max-height: 850px) {
    display: flex;
    z-index: ${({visible}) => visible ? '999' : '-999'};
    visibility: ${({visible}) => visible ? 'visible' : 'hidden'};
    opacity: ${({visible}) => visible ? '0.8' : '0'};
    transition: opacity 0.2s linear;
  }
`
