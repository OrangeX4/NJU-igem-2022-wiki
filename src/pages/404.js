import React from "react"

import Head from "../components/head"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Top from "../components/top"

function NoFoundPage() {
  return (
    <div>
      <Head />
      <Nav />

      <h1>404</h1>

      <Footer />
      <Top />
    </div>
  )
}

export default NoFoundPage