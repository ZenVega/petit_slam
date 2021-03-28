import React from 'react'
import { useSelector } from 'react-redux'


const LeaguePreview = (props) => {
  const league = undefined

  
  
  return (
    <div className="LeaguePreview">
      {league && <h2>{league.leagueName}</h2>}
      {league && <h2>{league.leagueType}</h2>}

    </div>
  )
}

export default LeaguePreview
