import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { isLoaded, isEmpty } from 'react-redux-firebase'


import { getLeagueById, getPlayersInLeague, getAdminsInLeague } from '../../../selectors/index'

import PlayerCard from '../Players/PlayerCard'



function LeaguePage() {
  
  let { leagueId } = useParams();
  const league = useSelector(getLeagueById(leagueId))
  const players = useSelector(getPlayersInLeague(leagueId))
  const admins = useSelector(getAdminsInLeague(leagueId))
  
  const ownId = useSelector(state => state.firebase.auth.uid)
  const inLeague = players && players.indexOf(ownId) != -1? true: false
  const isAdmin = admins && admins.indexOf(ownId) != -1? true: false

  if (!isLoaded(players)) {
    return <div>Loading...</div>
  }

  if (isEmpty(league)) {
    return <div>This league doesn't exist</div>
  }

  return (
    <div className="Main League">

    <Link to="/leagues" >
        <h3>back</h3>
      </Link>

      <h1>{league.leagueName}</h1>
      <h1>{league.leagueType}</h1>
      <h2>status: {league.status}</h2>
      {isAdmin && <h2>You are an admin of this league</h2> }
      {!inLeague? <button>join league</button>: <button>leave league</button>}
      <h2>players</h2>
      {players.map((player, index) => (
        <PlayerCard
        key={index}
        id={player}
      />
      ))}

    </div>
  );
}

export default LeaguePage;