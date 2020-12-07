/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-12-06 09:03:09
 * @modify date 2020-12-06 09:03:09
 * @desc Contact page
 */
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

export default function contact() {
  return (
    <Layout>
    <Head title='Contact Us' />
      <h1>Contact</h1>
      <p>
        Reach me via github at{" "}
        <a href="https://github.com/Gagandeep39">gagandeep39</a>
      </p>
    </Layout>
  )
}
