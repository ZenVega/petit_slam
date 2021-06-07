import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, populate } from 'react-redux-firebase'
import LeaguePage from '../components/Main/Leagues/LeaguePage';

const leagueId = window.location.href.substr(-20)

const populates = [
  {child: "players", root: "users", keyProp: 'id'},
  {child: "admins", root: "users", keyProp: 'id'},
]

const LeaguePagePopulated = compose(
  firebaseConnect([
    { path: `/leagues/${leagueId}`, populates }
  ]),
  connect(
    ({ firebase }) => ({
      league: populate(firebase, `leagues/${leagueId}`, populates),
      leagueId
    })
  )
)

export default LeaguePagePopulated(LeaguePage)