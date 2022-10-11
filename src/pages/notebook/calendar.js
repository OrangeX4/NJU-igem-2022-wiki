import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"
import { Helmet } from "react-helmet"

import Icon from "../../components/icon"
import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Top from "../../components/top"

import "papercss"


const title = `Notebook`
const markdown = `
# Calendar:

## January to February

We were recruiting team members and had decided on a project theme for this year. At the same time, we brainstormed and formed the initial project design.

## February to May

 For Human Practice, we conducted extensive interviews with doctors, professors and investors to optimize of our design. Questionnaires about alopecia and aesthetic medicine were distributed and data analysis was conducted based on the collected results. In addition, we held the NIA Meetup in May and started to partner with BUCT and SZU.

For Wet Lab, we began to design plasmids and order them from the company. Then we carried out and sequenced our plasmids.

## May to July

For Human Practice, we continued to interview professors to improve the feasibility of our design. We held science popularization activities at Nanjing Science and Technology Museum and in high school. Apart from that, we attended online and offline meetups to communicate with other teams.

For Wet Lab, we conduct verification of the effects of our designed plasmids.

## July to October

For Human Practice, we organized a lecture to sophomores together with Nanjing-China and SZU-China. A debate competition on biological topic was also held. In addition, we made the promotion video and brochures of our team and released them to the public. 

For Wet Lab, we compared three sEVs purification methods and finished further experiments for proof-of-concepts and safety.

For the entrepreneurship, we applied patent for our therapy, and have got commercial collaboration from GenScript.
`

function Page() {
  return (
    <div>
      <Helmet>
        <title>{"NJU-China/" + title + " - 2022.igem.wiki"}</title>
      </Helmet>
      <Icon />
      <Nav />
      <div className='article-container'>
        {/* <div className="nav-space" /> */}
      
        <div className="article-title">
          <img src='https://static.igem.wiki/teams/4173/wiki/wiki/icon.png' alt='logo animation' />
          <div>{title}</div>
        </div>
        <div className="container container-md margin-bottom-large">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
        <Footer />
      
      </div>
      <Top />
    </div>
  )
}

export default Page