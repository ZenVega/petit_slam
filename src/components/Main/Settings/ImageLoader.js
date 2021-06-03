import React, { useState } from 'react'
import { useSelector } from 'react-redux'


export default function ImageLoader(props) {

  const profilePic = useSelector(state => state.firebase.profile.profilePic)
  const [imageURL, setImageURL] = useState(profilePic)

  const handleImageInput = e => {
    const image = e.target.files[0]
    props.setImageFile(image)

    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
      setImageURL(e.target.result)
    })
    reader.readAsDataURL(image)
  }

  

  return (
    <div>
      <img id="preview-image" src={imageURL} alt=""/>
      <div className="uploader"></div>
      <input 
        type="file" 
        multible="false" 
        id="fileButton" 
        onChange={e => handleImageInput(e)}
        accept=".jpg,.jpeg,.png"/>
    </div>
  )
}
