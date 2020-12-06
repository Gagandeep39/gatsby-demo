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

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
