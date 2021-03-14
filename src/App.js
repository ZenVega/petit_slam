import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {auth, dbRef, storageRef} from './backend/firebase'

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
import { login, setActiveUser } from './actions/index'


function App() {
  
  const dispatch = useDispatch()
  const logged = useSelector(state => state.userStatus.loggedIn)
  
  
  const logHandler = user => {
    let userToUpload = {}
    let attack

    if (user && user.emailVerified) {
      const id = auth.currentUser.uid;
      const userRef = dbRef.ref(`users/${id}`)
      userRef.get().then(snapshot => {
        if(snapshot.val()){
          const userDB = snapshot.val()
          return userDB
        }
      })
      .then((userDB) => {
          
          return {
            "id": id,
            "username": user.displayName,
            "email": user.email,
            "profilePic": userDB.profilePic,
            "attack": userDB.attack
          }
        }).then( userToUpload => {
          dispatch(login())
          dispatch(setActiveUser(userToUpload))
        })

    } else {
      dispatch(setActiveUser(userToUpload))
    }
  }

  auth.onAuthStateChanged(user => {
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
