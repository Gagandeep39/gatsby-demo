/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-12-06 09:10:22
 * @modify date 2020-12-06 09:10:22
 * @desc Header
 */
import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styles from './header.module.scss'

const Header = () => {

  const metaData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>
        <Link className={styles.title} to="/"> {metaData.site.siteMetadata.title} </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/about">About</Link>
          </li>
          <li>
            <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
