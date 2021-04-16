import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'


import { getLeagueById, getPlayersInLeague } from '../../../selectors/index'

import PlayerCard from '../Players/PlayerCard'



function LeaguePage() {
  
  let { leagueId } = useParams();
  const league = useSelector(getLeagueById(leagueId))
  const players = useSelector(getPlayersInLeague(leagueId))


  return (
    <div className="Main League">

    <Link to="/leagues" >
        <h3>back</h3>
      </Link>

      {league&&<h1>{league.leagueName}</h1>}
      {league&&<h1>{league.leagueType}</h1>}
      {league&&<h2>status: {league.status}</h2>}
      <h2>players</h2>
      {players&&players.map((player, index) => (
        <PlayerCard
        key={index}
        id={player}
      />
      ))}

    </div>
  );
}

export default LeaguePage;