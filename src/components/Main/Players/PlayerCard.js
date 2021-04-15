import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebaseConnect } from 'react-redux-firebase'

export default function PlayerCard(props) {
  useFirebaseConnect(`users/${props.key}`)
  const userData = useSelector(state => state.firebase.data.users[props.key])
  console.log(userData)

  const backgroundImages = [
    "https://www.creativefabrica.com/wp-content/uploads/2019/05/ABSTRACT-PSYCHEDELIC-BACKGROUND-by-Asep-Maulana-Ramdhan-1-580x386.jpg",
    "https://images.creativemarket.com/0.1.0/ps/6491837/1820/1214/m1/fpnw/wm0/vol25-.jpg?1569387332&s=9bec2071da1a7e6409ba3492b1ee1298",
    "https://andreiverner.com/wp-content/uploads/2013/10/psy_pattern_preview.jpg"
  ]
  const randomNum = Math.floor(Math.random() * Math.floor(backgroundImages.length));
  
  return (
    <div 
      className="PlayerCard"
      style={{ 
        backgroundImage: `url(${backgroundImages[randomNum]})` 
      }}>
      <div 
        className="img-wrapper" 
        style={{ 
          backgroundImage: `url(${userData.profilePic})` 
        }}>
      </div>
      <h3>{userData.username}</h3>
      <p>{userData.attack}</p>
    </div>
  )
}
