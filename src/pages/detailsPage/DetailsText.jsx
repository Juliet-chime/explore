import React from 'react'
import { DetailTextWrapper } from './style'

const DetailsText = ({Icon,title,price,discount}) => {
    return (
        <DetailTextWrapper>
            {Icon && 
            <div>
                <Icon/>
            </div>}
            <div className='tourist_place'>
                <h1>{title}</h1>
            </div>
            <div className='tourist_price'>
                <p className='price'>{price}</p>
                <p className='person'>Per Person <span className='person_rule'>{discount}</span></p>
            </div>
        </DetailTextWrapper>
    )
}

export default DetailsText