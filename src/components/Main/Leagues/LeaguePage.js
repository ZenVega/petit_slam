import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useFirebase } from 'react-redux-firebase'

import { toggleInviteFriends } from '../../../actions/index'

import { deleteItemFromFirebase } from '../../../helper_functions/firebase_controls'

import PlayerCard from '../Players/PlayerCard'


const LeaguePage = ({league, leagueId}) => {
  
  const dispatch = useDispatch()
  const firebase = useFirebase();
  const ownId = useSelector(state => state.firebase.auth.uid)
  const [isAdmin, setIsAdmin] = useState(false)
  const [inLeague, setInLeague] = useState(false)
  
 useEffect(() => {
   setInLeague(league && league.players.indexOf(ownId) != -1)
   setIsAdmin(league && league.admins.indexOf(ownId) != -1)
 }, [league])


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
  
  if (!league) {
    return <div>Loading...</div>
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
      {league.players.map((player, index) => (
        <PlayerCard
        key={index}
        id={player.id}
      />
      ))}

    </div>
  );
}

export default LeaguePage;