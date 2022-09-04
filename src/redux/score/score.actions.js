export const SCORE_HOME='SCORE_HOME';
export const SCORE_AWAY='SCORE_AWAY';


export const scoreHome = () => (dispatch) => {
    dispatch({
        type: SCORE_HOME,
    });
}
export const scoreAway = () => (dispatch) => {
    dispatch({
        type: SCORE_AWAY,
    });
}

