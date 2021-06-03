import React from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { isLoaded, isEmpty, useFirebase, useFirebaseConnect } from 'react-redux-firebase'

import { toggleInviteFriends } from '../../../actions/index'
import { getLeagueById, getPlayersInLeague, getAdminsInLeague } from '../../../selectors/index'
import { deleteItemFromFirebase } from '../../../helper_functions/firebase_controls'

import PlayerCard from '../Players/PlayerCard'



function LeaguePage() {
  const dispatch = useDispatch()

  const firebase = useFirebase();
  const ownId = useSelector(state => state.firebase.auth.uid)
  const{ leagueId } = useParams();


  useFirebaseConnect(`leagues/${leagueId}`)

  const league = useSelector(getLeagueById(leagueId))
  const inLeague = useSelector(state => state.firebase.profile.leagues.includes(leagueId))
  
  const players = useSelector(getPlayersInLeague(leagueId))
  const admins = useSelector(getAdminsInLeague(leagueId))
  
  const isAdmin = admins && admins.indexOf(ownId) != -1? true: false
  
  
  const leaveLeague = () => {
    const userRef = firebase.ref(`users/${ownId}/leagues/`)
    const leagueRef = firebase.ref(`leagues/${leagueId}/players/`)
    
    deleteItemFromFirebase(userRef, leagueId)
    deleteItemFromFirebase(leagueRef, ownId)
    
    if(isAdmin){
      const adminRef = firebase.ref(`leagues/${leagueId}/admins/`)
      deleteItemFromFirebase(adminRef, ownId)
    }
  }
  
  const inviteFriends = () => {
    dispatch(toggleInviteFriends(true))
  }
  
  if (!isLoaded(league)) {
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
      <button
      onClick={inviteFriends}>invite friends</button>
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