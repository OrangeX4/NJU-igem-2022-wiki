import React from "react"
import { Helmet } from "react-helmet"

function Icon() {
  return (
    <Helmet>
      <meta name="icon" href="/nju-china/favicon.ico" />
      <link rel="shortcut icon" href="/nju-china/favicon.ico" type="image/x-icon"></link>
    </Helmet>
  )
}

export default Icon