import React from 'react';
import LeaguePreview from './LeaguePreview'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebaseConnect } from 'react-redux-firebase'
import { createSelector } from 'reselect'

import { openNewLeague } from '../../../actions/index'

function LeagueOverview() {
  const dispatch = useDispatch()

  const leagueIDs = useSelector(state => state.firebase.profile.leagues)
  const pathArray = leagueIDs?leagueIDs.map(id => `leagues/${id}`):''
  useFirebaseConnect(pathArray)

  const getLeagues = createSelector(
    state => state.firebase.profile.leagues,
    state => state.firebase.data.leagues,
    (ids, leagues) => ids && leagues && ids.map(id => Object.assign({}, leagues[id], {id: id}))
  )

  const leagues = useSelector(getLeagues)

  return (
    <div className="Main LeagueOverview">
       <h1>League Page</h1>
      <button onClick={() => dispatch(openNewLeague(true))}>
        New league
      </button>

      { console.log(leagues) }

      {leagues && leagues.map(league => (
        <LeaguePreview
          key={ league.id }
          league={ league }/>
      ))}

    </div>
  );
}

export default LeagueOverview;