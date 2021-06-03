import React, {useParams} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleInviteFriends } from '../../actions'
import { getRelatedPlayersNotInLeague } from '../../selectors'
import PlayerCard from '../Main/Players/PlayerCard'

const InviteFriends = () => {
  const dispatch = useDispatch()
  const id = window.location.href.substr(-20)

  const playersToInvite = useSelector(getRelatedPlayersNotInLeague(id))
  console.log(playersToInvite )
  
  const copyURL = () => {
    let text = window.location.href
    navigator.clipboard.writeText(text)
    .then(() => {
      alert('Text copied to clipboard');
    })
    .catch(err => {
      alert('Error in copying text: ', err);
    });
  }

  
  return (
    <div className="Modal">
      <div className="modal-container inviteFriends">
      <button className="close-modal-button" onClick={() => dispatch(toggleInviteFriends(false))} >x</button>
        <div className="playersPreviewWrapper">
          {playersToInvite && playersToInvite.map((player, index) => (
            <PlayerCard
              id={player[0]}
              key={index}
              preview="true" />
          )
          )}
        </div>
        <button
          onClick={copyURL}
          >Copy invite link</button>
      </div>
    </div>
  )
}

export default InviteFriends


          
