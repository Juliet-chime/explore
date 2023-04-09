import React from 'react'
import { NavbarWrapper } from './styles'
import { navbarList } from './data'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul>
        {navbarList?.map(items => {
          const { Icon, label, link } = items
          return (<li key={label}>
            <NavLink
              to={link}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <Icon />
              <span>{label}</span>
            </NavLink>
          </li>)
        })}
      </ul>
    </NavbarWrapper>
  )
}

export default Navbar