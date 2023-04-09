import React from 'react'
import { HeaderWrapper } from './style'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Heading = ({ text, progress }) => {
  return (
    <HeaderWrapper>
      <h1>{text}</h1>
      {progress && <span>SEE ALL <AiOutlineArrowRight fontSize={12} /> </span>}
    </HeaderWrapper>
  )
}

export default Heading