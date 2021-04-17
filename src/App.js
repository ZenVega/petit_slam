import React from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { isLoaded, useFirebaseConnect } from 'react-redux-firebase'

import './assets/scss/App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Main/Home'
import About from './components/Main/About'
import League from './components/Main/Leagues/LeagueOverview'
import Stadions from './components/Main/Stadions'
import Players from './components/Main/Players/Players'
import Settings from './components/Main/Settings/Settings'
import LeaguePage from './components/Main/Leagues/LeaguePage';
import Modals from './components/Modals/Modals'

import { getLeaguePathArray, getRelatedPlayersPathArray } from './selectors/index'


function App() {

  const logged = useSelector(state => !state.firebase.auth.isEmpty )
  const verified = useSelector(state => state.firebase.auth.emailVerified )
  
  const leaguePathArray = useSelector(getLeaguePathArray)
  useFirebaseConnect(leaguePathArray)

  const playerIDs = useSelector(getRelatedPlayersPathArray)
  useFirebaseConnect(playerIDs)

  const leaguesLoaded = useSelector(state => state.firebase.data.leagues)
  const playersLoaded = useSelector(state => state.firebase.data.users)

  if(!isLoaded(leaguesLoaded) || !isLoaded(playersLoaded)) {
    return (
    <Router>
      <div className="App">
        <Header />
        <div>...Loading</div>
      </div>
    </Router>)
  }


  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path={`/leagues/:leagueId`} component={LeaguePage}/>
          {logged && verified && <Route path="/leagues" component={League} />}
          <Route path="/stadions" component={Stadions} />
          {logged && verified && <Route path="/players" component={Players} />}
          {logged && verified && <Route path="/settings" component={Settings} />}
          <Route path="/" exact component={Home} />
        </Switch>
        <Modals />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
