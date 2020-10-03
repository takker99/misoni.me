import React from "react"
import { Link } from "gatsby"

import NavMenu from "./navmenu"

import styles from "./header.module.css"

const Header = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.title}>
          <Link to={`/`} className={styles.linktotop}>
            {title}
          </Link>
        </div>
        <NavMenu />
      </header>
    </div>
  )
}

export default Header
