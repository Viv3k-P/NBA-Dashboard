import axios from 'axios'
export const getNbaScores = dt => {
    const api = `/api/nba/scores/${dt}`
    return axios
      .get(api)
      .then(scores => scores.data)
      .catch(error => error.status)
  }