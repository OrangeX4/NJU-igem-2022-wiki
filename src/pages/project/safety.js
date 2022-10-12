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


const title = `Project`
const markdown = `
# Safety

## Safety for siRNAs

### Blast analysis

We performed blast analysis on NCBI when designing the siRNA. The results (Fig.1) showed that our siRNA does not inhibit the expression of other genes besides the corresponding targets. Therefore, the safety was verified.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/blast.png" alt="img" style="width: 90%;" /></p>

<div class="desc"><b>Fig.1 Blast comparison of 5αR-siRNA-1 and Piezo1-siRNA-5</b></div>



## Safety for therapeutic sEVs

### Validate that our therapeutic sEVs can inhibit the apoptosis of DPC induced by TP

We planned to see if our therapeutic sEVs (which load with 5αR-siRNA-1, Piezo1-siRNA-5, and mRNA-β-catenin) can inhibit apoptosis of DPC in the presence of androgen in a gesture to prove our therapeutic sEVs are safe. Therefore, we added testosterone propionate (TP) to the cell culture medium and co-cultured therapeutic sEVs with DPC for 30h. Then the apoptotic status of DPC was detected using Annexin V-FITC Apoptosis Detection Kit (from Beyoncé) by flow cytometry. As is shown in Fig.2, TP can induce apoptosis while apoptosis was significantly inhibited after the addition of sEVs. These findings indicated that our sEVs can be used as a treatment option and may have therapeutic implications for patients with AGA.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/apoptosis-detection.png" alt="img" style="width: 90%;" /></p>

<div class="desc"><b>Fig.2 Cell fractionation by flow cytometry.</b> FACS-recorded apoptosis in DPC after different treatment. The cells were stained with Annexin V-FITC and PI. </div>
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