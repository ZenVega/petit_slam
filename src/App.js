import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


import './assets/scss/App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './components/Main/Home'
import About from './components/Main/About'
import League from './components/Main/League'
import Stadions from './components/Main/Stadions'
import Players from './components/Main/Players'


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/league" component={League} />
          <Route path="/stadions" component={Stadions} />
          <Route path="/players" component={Players} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
