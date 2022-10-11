import React from "react"
import { Helmet } from "react-helmet"
import Icon from "../components/icon"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Top from "../components/top"

function NoFoundPage() {
  return (
    <div>
      <Helmet>
        <title>NJU-China/404 - 2022.igem.wiki</title>
      </Helmet>
      <Icon />
      <Nav />

      <h1>404</h1>

      <Footer />
      <Top />
    </div>
  )
}


export default NoFoundPage