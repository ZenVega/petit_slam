import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import firebase from './firebase'

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

import { useSelector, useDispatch } from 'react-redux'
import { login, logout, setActiveUser } from './actions/index'


function App() {
  const dispatch = useDispatch()
  const logged = useSelector(state => state.userStatus.loggedIn)

  
  const logHandler = user => {
    if (user && user.emailVerified) {
      const id = firebase.auth().currentUser.uid;
      const userToUpload = {
        "id": id,
        "username": user.displayName,
        "email": user.email
      }
      dispatch(setActiveUser(userToUpload))
      dispatch(login())

    } else {
      const userToUpload = {}
      dispatch(setActiveUser(userToUpload))
      firebase.auth().signOut()
      dispatch(logout())
    }
  }

  firebase.auth().onAuthStateChanged(user => {
    logHandler(user)
  })

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/league" component={League} />
          <Route path="/stadions" component={Stadions} />
          {logged && <Route path="/players" component={Players} />}
          {logged && <Route path="/settings" component={Settings} />}
          <Route path="/" exact component={Home} />
        </Switch>
        <Modals />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
