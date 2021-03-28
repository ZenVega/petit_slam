import { createSelector } from 'reselect'

const leagueIds = state => state.firebase.profile.leagues
const leaguesData = state => state.firebase.data.leagues

export const getLeagues = createSelector(
  leagueIds,
  leaguesData,
  (ids, leagues) => ids && leagues &&
  ids.reduce((acc, id) => {
    leagues[id] && acc.push({...leagues[id], id});
    return acc;
  }, [])
)

export const getPathArray = createSelector(
  leagueIds,
  leagueIDs => leagueIDs && leagueIDs.map(id => `leagues/${id}`)
)

export const getLeagueById = id => {
  return createSelector(
    leaguesData,
    leagues => leagues && leagues[id]
    )
  }
