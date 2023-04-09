import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const DetailsInfo = ({ title, subtitle, image, Icon, arrow, endText, endTextTitle, style }) => {
    return (
        <div className='details_info_wrapper' style={style}>
            <div className='info_name'>
                {image ? <div className='info_img'>
                    <img src={image} alt="" />
                </div> : Icon ? <div><Icon fontSize={24} /></div> : null}
                <div>
                    <p className='title'>{title}</p>
                    <p className='subtitle'>{subtitle}</p>
                </div>
            </div>
            {arrow && <div>
                <BsArrowRight fontSize={20} />
            </div>}
            {endText && <div>
                <p className='title'>{endText}</p>
                <p className='subtitle'>{endTextTitle}</p>
            </div>}
        </div>
    )
}

export default DetailsInfo