import * as actions from './score.actions';

const INITIAL_STATE ={
    scoreHomeTeam:0,
    scoreAwayTeam:0,
}

const scoreReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case actions.SCORE_HOME:
            return { ...state, scoreHomeTeam:state.scoreHomeTeam + 1 }
        
        case actions.SCORE_AWAY:
            return { ...state, scoreAwayTeam: state.scoreAwayTeam + 1 }
    
        default:
            return state;
    }
}

export default scoreReducer;