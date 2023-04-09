import React from 'react'
import { ProvidersWrapper } from './style'

const Providers = ({ img }) => {
  return (
    <ProvidersWrapper>
      <img src={img} alt='' />
    </ProvidersWrapper>
  )
}

export default Providers