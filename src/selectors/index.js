import { createSelector } from 'reselect'

export const getLeagues = createSelector(
  state => state.firebase.profile.leagues,
  state => state.firebase.data.leagues,
  (ids, leagues) => ids && leagues &&
  ids.reduce((acc, id) => {
    leagues[id] && acc.push({...leagues[id], id});
    return acc;
  }, [])
)

export const getPathArray = createSelector(
  state => state.firebase.profile.leagues,
  leagueIDs => leagueIDs.map(id => `leagues/${id}`)
)
