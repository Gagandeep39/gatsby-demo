import React from "react"
import { Link } from "gatsby"

const index = () => {
  return (
    <div>
      <h1>Hi! I am a full stack developer</h1>
      <p>
        <Link to="/contact">Contact Us</Link>
      </p>
      <p>
        <Link to="/about">About Us</Link>
      </p>
    </div>
  )
}

export default index
