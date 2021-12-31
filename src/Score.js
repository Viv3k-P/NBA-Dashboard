import React from 'react'
import './Score.css';
import atl from './images/atl.png'
import hou from './images/HOU.png'
import{
  dict
} from './images.js'
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

        <div class="scoreboard_t1">{ <img 
            src={dict[team1]}
            alt="new"
          />} </div>
        <div class="t1_score">{team1_score}</div>

        <div class="scoreboard_t2">{ <img 
            src={dict[team2]}
            alt="new"
          />}</div>
        <div class="t2_score">{team2_score}</div>

        <br></br>
      </div>
    )
}

export default Score
