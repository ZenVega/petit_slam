import React from 'react'

export default function PlayerCard(props) {
  return (
    <div className="PlayerCard">
      <img src="" alt="" />
      <h3>{props.username}</h3>
      <p>{props.attack}</p>
    </div>
  )
}
