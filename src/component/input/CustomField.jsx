import React from 'react'
import { Label } from 'reactstrap'
import { CustomInput } from './style'

const CustomField = (props) => {
  const { type, label, onChange, color, value, name, placeholder, children, style, className } = props
  return (
    <>
      <div className="d-flex flex-column">
        {!!label && (
          <Label className={props.labelStyle}>{props.label}</Label>
        )}
        {type === 'select' ? (<CustomInput type={type}
          onChange={onChange}
          className={className}
          value={value}
          placeholder={placeholder}
          name={name}
          style={style}
          color={color}>
          {children}
        </CustomInput>) : (<CustomInput
          className={className}
          onChange={props.onChange}
          type={type}
          value={value}
          placeholder={placeholder}
          name={name}
          style={style}
          color={color}
        />)}
      </div>
    </>
  )
}

export default CustomField