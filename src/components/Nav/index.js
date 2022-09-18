import React from 'react'
import { HamburgerMenu, PrimaryLogo } from '../../assets'
import { useWindowSize } from '../../hooks'
import styles from './styles.module.css'

const NavBar = () => {
  const windowSize = useWindowSize()
  return (
    <nav className={styles.container}>
      <PrimaryLogo />

      {windowSize.width <= 860 ? (
        <HamburgerMenu />
      ) : (
        <React.Fragment>
          <ul className={styles.links_container}>
            <li className={styles.link}>
              <a href="#about">About</a>
            </li>
            <li className={styles.link}>
              <a href="#services">Our Services</a>
            </li>
            <li className={styles.link}>
              <a href="#works">Our Work</a>
            </li>
          </ul>
          <a href="#contact" className="button button_green">
            Get In Touch
          </a>
        </React.Fragment>
      )}
    </nav>
  )
}

export { NavBar }
