import React, { useReducer } from 'react';
import reducer from './reducer';

let initialState = {
    recommendedBets: [1, 2, 5, 10, 20],
    userPicks: [],
    userMessage: '',
    wager: ''
};

const Dispatch = React.createContext(null);
const State = React.createContext(initialState);

const Store = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Dispatch.Provider value={dispatch}>
            <State.Provider value={state}>
                {children}
            </State.Provider>
        </Dispatch.Provider>
    );
};

export {
    Dispatch, Store, State,
};
