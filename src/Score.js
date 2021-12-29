import React from 'react'
import './Score.css';
const Score = ({team1,team1_score,team2,team2_score}) => {
    return (
        <div class="scoreboard">

        <div class="scoreboard_t1">{team1} </div>
        <div class="t1_score">{team1_score}</div>

        <div class="scoreboard_t2">{team2}</div>
        <div class="t2_score">{team2_score}</div>
        <br></br>
      </div>
    )
}

export default Score
