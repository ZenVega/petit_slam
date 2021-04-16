import React from 'react';
import { useSelector } from 'react-redux'

import PlayerCard from './PlayerCard'

export default function PlayerCardDeck() {

  const players = useSelector(state => state.firebase.data.users)
  const playerIDs = players && Object.keys(players)
  console.log(players, playerIDs)

  return (
    <div className="PlayerCardDeck">
      {players && playerIDs.map((player, index) => (
        <PlayerCard
          key={index}
          id={player}
        />
      )
      )}
    </div>
  )
}
