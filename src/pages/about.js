/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-12-06 09:03:25
 * @modify date 2020-12-06 09:03:25
 * @desc About page
 */
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

export default function about() {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>
        I am Gagandeep Singh <br />I am a Full stack Web Developer
      </p>
      <Footer />
    </div>
  )
}
