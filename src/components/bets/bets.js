import React, { useContext} from 'react'
import styled from 'styled-components';

import { State, Dispatch } from '../../store/store'
import BetButton from '../buttons/betButton'

const Bets = () => {
    const {recommendedBets, wager} = useContext(State)
    const dispatch = useContext(Dispatch)
    
    function selectBet(selection) {
        dispatch({type: 'setBetAmount', data: selection })
    }

    function handleChange (e) {
        dispatch({type: 'setBetAmount', data: e.target.value })
    }

    return (
        <BetsContainer>
            {recommendedBets.map((amount) => (
                <BetButton 
                    key={`wager ${amount}`} 
                    onClick={() => selectBet(amount)}
                    selected={wager === amount}
                    amount={amount}
                />
            ))}
            <BetInput entered={wager} type='number' placeholder='Custom' value={wager} onChange={handleChange}/>
        </BetsContainer>
    )
}

export default Bets

const BetsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
  height: fit-content;
`

const BetInput = styled.input`
    width: 3.5rem;
    height: 1.7rem;
    border: 1px solid grey;
    border-radius: 3px;
    margin: 2rem 0.5rem 0.5rem;
    text-align: center;
    font-weight: ${({entered}) => entered ? '700' : 'normal'};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
`