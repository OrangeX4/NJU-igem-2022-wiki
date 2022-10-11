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

When designing the siRNA, we performed blast analysis on NCBI. The results (Fig.1) showed that our siRNA does not inhibit the expression of other genes except the corresponding target genes. Therefore, the safety was verified.

![img](https://static.igem.wiki/teams/4173/wiki/project/blast.png)

**Fig.1 Blast comparison of 5αR-siRNA-1 and Piezo1-siRNA-5**



## Safety for therapeutic sEVs

### Validate that our therapeutic sEVs can inhibit the apoptosis of DPC induced by TP

We expected to prove that our therapeutic sEVs (which load with 5αR-siRNA-1, Piezo1-siRNA-5, and mRNA-β-catenin) can inhibit apoptosis of DPC in the presence of androgen To prove our therapeutic sEVs are safe. Thus, we added testosterone propionate (TP) to the cell culture medium and co-cultured therapeutic sEVs with DPC for 30h. Then the apoptotic status of DPC was detected using Annexin V-FITC Apoptosis Detection Kit (from Beyoncé) by flow cytometry. As shown in Fig.2, TP can induce apoptosis, but apoptosis was significantly inhibited after the addition of sEVs. These findings indicated that our sEVs can be used as a treatment option and may have therapeutic implications for patients with AGA.

![img](https://static.igem.wiki/teams/4173/wiki/project/apoptosis-detection.png)

**Fig.2 Cell fractionation by flow cytometry.** FACS-recorded apoptosis in DPC after different treatment. The cells were stained with Annexin V-FITC and PI. 
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