import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { getLeagueById } from '../../../selectors/index'



function LeaguePage() {
  let { leagueId } = useParams();
  const league = useSelector(getLeagueById(leagueId))

  return (
    <div className="Main League">

    <Link to="/leagues" >
        <h3>back</h3>
      </Link>

      <h1>{league.leagueName}</h1>
      <h1>{league.leagueType}</h1>
      <h2>status: {league.status}</h2>

    </div>
  );
}

export default LeaguePage;