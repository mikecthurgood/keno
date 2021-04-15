const reducer = (state, action) => {
    switch (action.type) {
        case 'clear':
            return { ...state, userMessage: '', userPicks: [], wager: '' };
        
        case 'setBetAmount':
            let wager;
            if (action.data === 0) {
                wager = '';
            } else {
                wager = action.data;
            }
            return { ...state, userMessage: '', wager};

        case 'setUserMessage' :
            return {...state, userMessage: action.data};

        case 'setRandomPicks':
            const randomSelection = []
            for (let i = 0; i < 5; i++) {
                const random = (Math.floor(Math.random() * 80) + 1);
                randomSelection.push(random);
            }
            return { ...state, userMessage: '', userPicks: randomSelection };

        case 'setUserPicks':
            const { selection } = action.data;
            let newPicks;
            if (state.userPicks.includes(selection)) {
                newPicks = state.userPicks.filter(sel => sel !== selection)
            } else {
                if (state.userPicks.length >= 5) {
                    return { ...state, userMessage: 'Maximum number of selections already chosen'};
                }
                newPicks = [...state.userPicks];
                newPicks.push(selection);
            }
            return { ...state, userMessage: '', userPicks: newPicks };

        default:
            throw new Error('Invalid action type dispatched');
    }
};

export default reducer;
