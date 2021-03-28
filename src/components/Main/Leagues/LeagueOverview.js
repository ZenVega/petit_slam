import React from 'react';
import LeaguePreview from './LeaguePreview'
import { useDispatch, useSelector } from 'react-redux'
import { getLeagues } from './../../../selectors/index'

import { openNewLeague } from '../../../actions/index'

function LeagueOverview() {
  const dispatch = useDispatch()

  const leagues = useSelector(getLeagues)



  return (
    <div className="Main LeagueOverview">
       <h1>League Page</h1>
      <button onClick={() => dispatch(openNewLeague(true))}>
        New league
      </button>

      {leagues && leagues.map(league => (
        <LeaguePreview
          key={ league.id }
          league={ league }
        />
      ))}

    </div>
  );
}

export default LeagueOverview;
