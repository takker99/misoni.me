import React from "react"
import { Link } from "gatsby"

import styles from "./navmenu.module.css"

const NavMenu = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link to={`/blog`}>Blog</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
