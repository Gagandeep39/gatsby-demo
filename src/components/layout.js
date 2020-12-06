/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-12-06 09:23:03
 * @modify date 2020-12-06 09:23:03
 * @desc Layout
 */
import React from "react"
import Header from "./header"
import Footer from "./footer"
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      .<div className={layoutStyles.content}>
        <Header className={layoutStyles.header} />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
