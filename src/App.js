import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Score from './Score.js'
import Navbar from './Navbar.js'
import { getNbaScores } from './api.js'
import hou from './images/HOU.png'
function App() {
  const mainUrl = "http://data.nba.net/10s/prod/v1/today.json"
  const url = "http://data.nba.net/prod/v2/20211228/scoreboard.json"

  const [teams, setTeams] = useState([])//THIS IS A REACT HOOK ***************-resume ---add array to get link

  const [link, setLink] = useState([url])
  
    useEffect(() => {
      axios.get(url)
      .then(response => {
        setLink("http://data.nba.net" + response.data.links.currentScoreboard)
      })
  }, [url])
  

    useEffect(() => {
        axios.get(link)
        .then(response => {
          setTeams(response.data)
        })
    }, [link])
    console.log(teams)
    
    if(teams.games){
      const data = Array.from(teams.games);
      
      return ( 
        <header className='App-header'>
          <Navbar/>
        <div className="nba-app">

            {data.map(a => {
                return (<Score team1={a.hTeam.triCode} team2={a.vTeam.triCode} team1_score={a.hTeam.score} team2_score={a.vTeam.score}/>)
            })}
            {/* <h1><Score curr_score={teams.games[0].vTeam.score}/> </h1> */}
        </div>
        </header>
      );
    }
    return(<h1>sadaf</h1>)

  }

export default App;
