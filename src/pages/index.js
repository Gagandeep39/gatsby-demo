/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-12-06 09:27:00
 * @modify date 2020-12-06 09:27:00
 * @desc Home Page
 */
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const index = () => {
  return (
    <Layout>
      <Head title='Home' />
      <h1>Hi! I am a full stack developer</h1>
      <p>
        <Link to="/contact">Contact Us</Link>
      </p>
      <p>
        <Link to="/about">About Us</Link>
      </p>
    </Layout>
  )
}

export default index
