import React, { useState } from "react"
import { Link } from "gatsby"
import { FaCaretRight, FaUserAstronaut, FaCaretLeft } from "react-icons/fa"
import { IoSettings } from "react-icons/io5"
import { CSSTransition } from "react-transition-group"

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={<FaUserAstronaut />} />
        <NavItem icon={<FaCaretRight />}>
          {/* Dropdown goes here */}
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav>
  )
}

const NavItem = props => {
  const [open, setOpen] = useState(false)
  return (
    <li className="nav-item">
      <Link to="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </Link>
      {open && props.children}
    </li>
  )
}

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main")
  const [menuHeight, setMenuHeight] = useState(null)

  function calHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }
  const DropdownItem = props => {
    return (
      <Link
        to="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
    )
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<FaUserAstronaut />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<IoSettings />}
            rightIcon={<FaCaretRight />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<FaCaretLeft />}
            goToMenu="main"
          ></DropdownItem>
          <DropdownItem leftIcon={<FaUserAstronaut />}>My Profile</DropdownItem>

          <DropdownItem leftIcon={<FaUserAstronaut />}>My Profile</DropdownItem>
          <DropdownItem leftIcon={<FaUserAstronaut />}>My Profile</DropdownItem>
          <DropdownItem leftIcon={<FaUserAstronaut />}>My Profile</DropdownItem>
          <DropdownItem leftIcon={<FaUserAstronaut />}>My Profile</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}
export default NavBar
