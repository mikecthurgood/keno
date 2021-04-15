import React from 'react';
import styled from 'styled-components'

import KenoBoard from '../src/components/board'
import UserMessage from '../src/components/userMessage'
import BetButtons from '../src/components/bets'
import ControlPanel from '../src/components/controlPanel'
const App = () => (
    <AppContainer>
        <GameContainer>
            <KenoBoard />
            <BetButtons />
            <ControlPanel />
            <UserMessage />
        </GameContainer>
    </AppContainer>
);

export default App

const AppContainer = styled.div`
    top: 5rem;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
`

const GameContainer = styled.div`
    position: relative;
    max-width: 40.62rem;

    @media screen and (max-width: 600px) {
        width: 100vw;
        max-width: 100vw;
    }
`