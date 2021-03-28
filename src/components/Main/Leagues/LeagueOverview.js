import React from 'react';
import LeaguePreview from './LeaguePreview'
import { 
  useDispatch, 
  useSelector 
} from 'react-redux'
import {
  BrowserRouter as Router,
  useRouteMatch,
  Link
} from "react-router-dom";

import { getLeagues } from './../../../selectors/index'
import { openNewLeague } from '../../../actions/index'

function LeagueOverview() {
  const dispatch = useDispatch()
  let match = useRouteMatch();

  const leagues = useSelector(getLeagues)



  return (
    <div className="Main LeagueOverview">
       <h1>League Page</h1>
      <button onClick={() => dispatch(openNewLeague(true))}>
        New league
      </button>
      {leagues && leagues.map(league => (
        <Link 
          key={ league.id }
          to={`${match.url}/${league.id}`}>
          <LeaguePreview
            key={ league.id }
            league={ league }
          />
        </Link>
      ))}

    </div>
  );
}

export default LeagueOverview;
