import React from 'react';
import { useSelector } from 'react-redux'

import Login from './Login'
import NewLeague from './NewLeague'
import Register from './Register'
import VerifyEmail from './VerifyEmail'
import RegisterSuccess from './RegisterSuccess'
import InviteFriends from './InviteFriends'

function Modals() {

  const { loginOpen, registerOpen, registerSuccessOpen, verifyMailOpen, newLeagueOpen, toggleInviteFriends } = useSelector(state => state.modalOpen)

  return (
    <div >
      {loginOpen && <Login />}
      {registerOpen && <Register />}
      {registerSuccessOpen && <RegisterSuccess />}
      {verifyMailOpen && <VerifyEmail />}
      {newLeagueOpen && <NewLeague />}
      {toggleInviteFriends && <InviteFriends />}
    </div>
  );
}

export default Modals;