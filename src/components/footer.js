import React from "react"

import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()}, Built with{` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </footer>
  )
}

export default Footer
