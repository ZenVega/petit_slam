import { createSelector } from 'reselect'

const leagueIds = state => state.firebase.profile.leagues
const leaguesData = state => state.firebase.data.leagues
const playerData = state => state.firebase.ordered.users

const reverseLeagueIds = createSelector(
  leagueIds,
  ids => ids && ids.reverse()
)

export const getLeagues = createSelector(
  reverseLeagueIds,
  leaguesData,
  (ids, leagues) => ids && leagues &&
  ids.reduce((acc, id) => {
    leagues[id] && acc.push({...leagues[id], id});
    return acc;
  }, [])
)

export const getLeaguePathArray = createSelector(
  leagueIds,
  leagueIDs => leagueIDs && leagueIDs.map(id => `leagues/${id}`)
)

export const getLeagueById = id => {
  return createSelector(
    leaguesData,
    leagues => leagues && leagues[id]
    )
}

export const getPlayersInLeague = id => {
  return createSelector(
    leaguesData,
    leagues => leagues && leagues[id].players
  )
}

export const getAdminsInLeague = id => {
  return createSelector(
    leaguesData,
    leagues => leagues && leagues[id].admins
  )
}

export const getLoadedLeagues = createSelector(
  leaguesData,
  leagues => leagues && Object.keys(leagues)
)

export const getRelatedPlayers = createSelector(
  leaguesData,
  getLoadedLeagues,
  (data, leagues) => leagues && [...new Set(leagues.map(
    id => data[id].players
  ).reduce((a, b) => a.concat(b)))]
)

export const getRelatedPlayersPathArray = createSelector(
  getRelatedPlayers,
  players => players && players.map(id => `users/${id}`)
)
