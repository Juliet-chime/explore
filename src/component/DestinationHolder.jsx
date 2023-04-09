import React from 'react'
import { DestinationContainer } from './style'

const DestinationHolder = ({ img, title, onClick }) => {
  return (
    <DestinationContainer onClick={onClick}>
      <div className='img_container'>
        <img src={img} alt={title} />
      </div>
      <span>{title}</span>
    </DestinationContainer>
  )
}

export default DestinationHolder