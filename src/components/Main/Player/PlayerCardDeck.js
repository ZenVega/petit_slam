import React, { useEffect, useState } from 'react';
import db from '../../../firebase'

import PlayerCard from './PlayerCard'

export default function PlayerCardDeck() {
  const userRef = db.ref('user')

  const [playerList, setPlayerlist] = useState([])

  useEffect(() => {
    userRef.on('value', async (snapshot) => {
      const players = await snapshot.val()

      let playerList = []
      for (let id in players) {
        playerList.push({ id, ...players[id] })
      }

      setPlayerlist(playerList)
    })
  }, [])

  return (
    <div className="PlayerCardDeck">
      {playerList.map((player, index) => (
        <PlayerCard
          key={index}
          id={player.id}
          username={player.username}
          attack={player.attack}
        />
      )
      )}

    </div>
  )
}
