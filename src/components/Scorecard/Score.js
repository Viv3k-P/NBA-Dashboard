import React from 'react'
import './Score.css';

import{
  dict
} from '../../images/images.js'
const Score = ({team1,team1_score,team2,team2_score}) => {
  //  var dict = { "ATL" : atl }
  //  dict[team1] = hou//DELETE
  //  dict[team2] = atl
  if(team1_score === ""){
    team1_score = "0";
  }
  if(team2_score === ""){
    team2_score = "0";
  }
    return (
        <div class="scoreboard" >

        <div class="scoreboard_t1"  style={{ backgroundColor: dict[team1][1]}}>{ <img 
            src={dict[team1][0]}
            alt="new"
          />} </div>
        <div class="t1_score" style={{ backgroundColor: "white"}}>{team1_score} </div>

        <div class="scoreboard_t2" style={{ backgroundColor: dict[team2][1]}}>{ <img 
            src={dict[team2][0]}
            alt="new"
          />}</div>
        <div class="t2_score"  style={{ backgroundColor: "white"}}>{team2_score}</div>

        <br></br>
      </div>
    )
}

export default Score
