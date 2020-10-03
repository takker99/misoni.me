import React from "react"

import Header from "./header"
import Footer from "./footer"

import styles from "./layout.module.css"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header title={title} />
      <main role="main" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
