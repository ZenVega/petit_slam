import React from 'react';
import LeaguePreview from './LeaguePreview'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebaseConnect } from 'react-redux-firebase'

import { openNewLeague } from '../../../actions/index'

function LeagueOverview() {
  const dispatch = useDispatch()

  const leagueIDs = useSelector( state => state.firebase.profile.leagues)
  const pathArray = leagueIDs?leagueIDs.map(id => `leagues/${id}`):''

  useFirebaseConnect(pathArray)

  //const leagues = useSelector(state => state.firebase.ordered.leagues)
  //const league = useSelector(({ firebase: { ordered: { leagues } } }) => leagues && leagues[leagueIDs[0]])

  return (
    <div className="Main LeagueOverview">
       <h1>League Page</h1>
      <button
        onClick={() => dispatch(openNewLeague(true))}
        >New league</button>

      {leagueIDs && leagueIDs.map((league, index) => (
        <LeaguePreview
        key={index}
        id={league}/>
      ))}

    </div>
  );
}

export default LeagueOverview;