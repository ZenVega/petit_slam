import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './assets/scss/App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './components/Main/Home'
import About from './components/Main/About'
import League from './components/Main/League'
import Stadions from './components/Main/Stadions'
import Players from './components/Main/Players'
import Settings from './components/Main/Settings'
import Modals from './components/Modals/Modals'

import {verifyEmail} from './components/Modals/Register'

import { useSelector, useDispatch } from 'react-redux'


const mailVerified = (verified) => {
  if(!verified){
    verifyEmail()
  }
}


function App() {
  
  const dispatch = useDispatch()
  const firebase = useSelector(state => state.firebase )

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/league" component={League} />
          <Route path="/stadions" component={Stadions} />
          {!firebase.profile.isEmpty && <Route path="/players" component={Players} />}
          {!firebase.profile.isEmpty && <Route path="/settings" component={Settings} />}
          <Route path="/" exact component={Home} />
        </Switch>
        <Modals />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
