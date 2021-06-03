import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

export default function PlayerCard({id}) {
  
  const backgroundImages = [
    "https://www.creativefabrica.com/wp-content/uploads/2019/05/ABSTRACT-PSYCHEDELIC-BACKGROUND-by-Asep-Maulana-Ramdhan-1-580x386.jpg",
    "https://images.creativemarket.com/0.1.0/ps/6491837/1820/1214/m1/fpnw/wm0/vol25-.jpg?1569387332&s=9bec2071da1a7e6409ba3492b1ee1298",
    "https://andreiverner.com/wp-content/uploads/2013/10/psy_pattern_preview.jpg"
  ]
  const randomNum = Math.floor(Math.random() * Math.floor(backgroundImages.length));
  const userData = useSelector(state => state.firebase.data.users[id])

  if (!isLoaded(userData)) {
    return <div>Loading...</div>
  }
  if (isEmpty(userData)) {
    return <div>No data available...</div>
  }
  
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
