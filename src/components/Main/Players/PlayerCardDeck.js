import React from 'react';
import { useSelector } from 'react-redux'

import { useFirebaseConnect } from 'react-redux-firebase'

import PlayerCard from './PlayerCard'

export default function PlayerCardDeck() {

  useFirebaseConnect("users")
  const players = useSelector(state => state.firebase.ordered.users)

  return (
    <div className="PlayerCardDeck">
      {players && players.map((player, index) => (
        <PlayerCard
          key={index}
          username={player.value.username}
          attack={player.value.attack}
          profilePic={player.value.profilePic}
        />
      )
      )}

    </div>
  )
}
