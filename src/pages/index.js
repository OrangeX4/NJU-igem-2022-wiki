import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Head from "../components/head"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Top from "../components/top"

import "papercss"

const markdown = `
# Heading 1

## Heading 2

### Heading 3

A paragraph with *emphasis* and **strong importance**.

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
`

function IndexPage() {
  return (
    <div>
      <Head />
      <Nav />
      <div class="nav-space" />
      
      <div class="container container-sm margin-bottom-large">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
      
      <Footer />
      <Top />
    </div>
  )
}

export default IndexPage