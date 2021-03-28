import React from 'react'

const LeaguePreview = ({ league }) => {
  return (
    <div className="LeaguePreview">
      {<h2>{league.leagueName}</h2>}
      {<h2>{league.leagueType}</h2>}
    </div>
  )
}

export default LeaguePreview
