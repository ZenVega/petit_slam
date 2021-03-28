import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { openNewLeague } from '../../actions/index'
import { useFirebase } from 'react-redux-firebase'





function NewLeague() {

  const dispatch = useDispatch()
  const firebase = useFirebase()

  const [leagueName, setLeagueName] = useState("")
  const [leagueType, setLeagueType] = useState("ko")
  const id = useSelector(state => state.firebase.auth.uid)
  const profile = useSelector(state => state.firebase.profile)

  const handleSubmit = e => {
    e.preventDefault()

    const newLeague = {
      leagueName,
      leagueType,
      "admins":[id],
      "players": [id],
      "status": "emerging"
    }
    
    firebase.push(`leagues/`, newLeague)
    .then( cred => {
      return cred.path.pieces_[1]
    })
    .then(leagueID => {
      let leagues = profile.leagues?profile.leagues : []
      leagues.push(leagueID)
      const uploadUser = {...profile, "leagues": leagues}
      firebase.set(`users/${id}`, uploadUser)
    })
    .catch( err => {
      console.log(err.message)
    })
    dispatch(openNewLeague(false))
  }

  const handleNameChange = e => {
    e.preventDefault()
    setLeagueName(e.target.value)
  }
  
  const handleTypeChange = e => {
    setLeagueType(e.target.value)
  }

  return (
    <div className="Modal">
      <div className="modal-container new-league">
        <h1>create new league</h1>
        
        <form onSubmit={e => handleSubmit(e)}>
          
          <label 
            htmlFor="league-name">name your league
              <input 
                type="text"
                value={leagueName}
                onChange={handleNameChange}
              />
          </label>
          <div className="radio">

            <label 
              htmlFor="league-type">K.O.
                <input 
                  name="league-type" 
                  value="ko"
                  id="ko"
                  onChange={handleTypeChange}
                  checked={leagueType === "ko"}
                  type="radio"/>
            </label>
            
            <label 
              htmlFor="league-type">Everybody plays everybody
                <input 
                  name="league-type" 
                  value="all"
                  id="all"
                  onChange={handleTypeChange}
                  checked={leagueType === "all"}
                  type="radio"/>
            </label>
          </div>

          <button 
            type="submit"
            >create</button>

        </form>
        <button
          onClick={() => dispatch(openNewLeague(false))}>cancel</button>

      </div>
    </div>
  );
}

export default NewLeague;