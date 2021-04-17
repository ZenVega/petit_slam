import React from 'react';
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { useFirebase } from 'react-redux-firebase'


import { getLeagueById, getPlayersInLeague, getAdminsInLeague } from '../../../selectors/index'

import PlayerCard from '../Players/PlayerCard'



function LeaguePage() {
  
  let { leagueId } = useParams();
  const firebase = useFirebase();
  const league = useSelector(getLeagueById(leagueId))
  const players = useSelector(getPlayersInLeague(leagueId))
  const admins = useSelector(getAdminsInLeague(leagueId))
  
  const ownId = useSelector(state => state.firebase.auth.uid)
  const inLeague = players && players.indexOf(ownId) != -1? true: false
  const isAdmin = admins && admins.indexOf(ownId) != -1? true: false

  const leaveLeague = () => {
    firebase.remove(`leagues/${leagueId}/players/`, ownId)
    .then( cred => {console.log('removed from league',cred)})
    .catch(err => console.log(err))
    
    if(isAdmin){
      firebase.remove(`leagues/${leagueId}/admins/`, ownId)
    .then( cred => {console.log('removed from leagues admins',cred)})
    .catch(err => console.log(err))
    }
   
    //this deletes all the players leagues
    firebase.remove(`users/${ownId}/leagues/`, leagueId)
    .then( cred => {console.log('league removed from users data',cred)})
    .catch(err => console.log(err))
  }

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
      {!inLeague
      ? <button>join league</button>
      : <button
        onClick={leaveLeague}>leave league</button>}
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