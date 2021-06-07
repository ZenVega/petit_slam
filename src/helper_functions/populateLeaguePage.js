import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams} from 'react-router-dom'
import { firebaseConnect, populate } from 'react-redux-firebase'
import LeaguePage from '../components/Main/Leagues/LeaguePage';


//league-Object
//players in league
//admins in league

const leagueId = window.location.href.substr(-20)

//needs to get the players ids as well
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