import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Icon from "../components/icon"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Top from "../components/top"

import "papercss"

const markdown = `
# Heading 1

## Heading 2

### Heading 3

A paragraph with *emphasis* and **strong importance**.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam. 

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam. 

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam. 

### Heading 3

A paragraph with *emphasis* and **strong importance**.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam. 

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam. 

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam. 
`

function DescriptionPage() {
  return (
    <div>
      <Icon />
      <Nav />
      <div className="nav-space" />
      
      <div className="container container-md margin-bottom-large">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
      
      <Footer />
      <Top />
    </div>
  )
}

export default DescriptionPage