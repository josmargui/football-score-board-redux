import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scoreHome } from "../../redux/score/score.actions";
import "./score.scss";
/* import { scoreHome } from './';
 */
const Score = () => {

  const dispatch =  useDispatch();
  const {scoreHomeTeam,scoreAwayTeam,} = useSelector(state => state)
  const [goalsHome, setGoalsHome] = useState(0);
  const [goalsAway, setGoalsAway] = useState(0); 


  const startGame = () => {
    setGoalsHome(0);
    setGoalsAway(0);
  };

  /* FUNCTION HOME TEAM SCORE  */

  const updateHomeScore = (event) => {
    setGoalsHome(goalsHome + 1);
  };

  /* FUNCTION HOME TEAM SCORE */

  const updateAwayScore = (event) => {
    setGoalsAway(goalsAway + 1);
  };


  return (
    <div className="container">
      <h1>Score Match</h1>
      <div className="container-score">
        <div className="container-score__item">
          <div>
            <button onClick={() => dispatch(scoreHome())}>Update Goal Home</button>
          </div>
        </div>
        <div className="container-score__item">
          <h1>
            {goalsHome} - {goalsAway}
          </h1>
        </div>
        <div className="container-score__item">
          <div>
            <button onClick={updateAwayScore}>Update Goal Away</button>
          </div>
        </div>
      </div>
      <div>
        <button className="container-score__item" onClick={startGame}>Start Game</button>
      </div>
    </div>
  );
};

export default Score;
