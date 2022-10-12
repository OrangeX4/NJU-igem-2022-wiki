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
# Contribution

For the first time in the iGEM competition, our team designed six siRNAs that can down-regulate 5α Reductase and six siRNAs that down-regulate the expression of the stress-activated ion channel protein Piezo1. After a series of validation experiments, we screened the most effective siRNAs, 5αR-siRNA-1  ([BBa_K4173009](http://parts.igem.org/Part:BBa_K4173009))  and Piezo1-siRNA-5 ([BBa_K4173019](http://parts.igem.org/Part:BBa_K4173019)). We also designed a plasmid that expresses β-catenin ([BBa_K4173021](http://parts.igem.org/Part:BBa_K4173021)), a protein that enhances the Wnt/β-catenin pathway and thus promotes cell proliferation. And the plasmid was experimentally validated to express the mRNA of β-catenin in vitro. Details can be found in the [Results](https://2022.igem.wiki/nju-china/project/result/).





## For 5αR-siRNA-1 ([BBa_K4173009](http://parts.igem.org/Part:BBa_K4173009))

On the NCBI web page, we designed the required murine siRNA for 5αR. The followings are our results:

**siRNAs for 5αR:**

5αR-siRNA-1: AAUGAGUAAAUAAAUGUCCUG

5αR-siRNA-2: AAUAAACCAGGUAAUAGGCUU

5αR-siRNA-3: AACAAAGUGUGAAAAAUGCAA

5αR-siRNA-4: TCAGAAAGATCACCGCTGATA

5αR-siRNA-5: TAAACCAGGTAATAGGCTTGC

5αR-siRNA-6: AAACAAGCCACCTTGTGGGAT

We respectively transfected plasmids of 5αR-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that siRNA-5αR-1 was effective and could reduce the expression of 5αR mRNA by nearly 80 percent. This result indicates that our siRNA can successfully knock down the expression of 5αR.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/sirna-5ar-qpcr.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.1 Analysis of the inhibitory effect of different siRNAs on 5αR by RT-qPCR.</b> RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,2,3,4,5,6). Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of 5αR mRNA.</div>

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/wb-5ar-sirna.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.2 Analysis of the inhibitory effect of different siRNAs on 5αR by WB.</b> RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,4,5,6) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-5αR and anti-GAPDH antibodies (equal GAPDH band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative 5αR protein expression level.</div>



## For Piezo1-siRNA-5 ([BBa_K4173019](http://parts.igem.org/Part:BBa_K4173019))

On the NCBI web page, we designed the required murine siRNA for Piezo1. The followings are our results:

**siRNAs for Piezo1:**

Piezo1-siRNA-1: UAGAAACAGCAAAUAGACCAG

Piezo1-siRNA-2: AGUAUAGGCAAAUGAGAUGGC

Piezo1-siRNA-3: AUAAAUGGUGUCUGAUAGCAG

Piezo1-siRNA-4: TATGTCTTCATCGTCGTCATC

Piezo1-siRNA-5: TTCATCGTCGTCATCATCGTC

Piezo1-siRNA-6: ATCATCGTCATCGTCATCATC

We respectively transfected plasmids of Piezo1-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that Piezo1-siRNA-5 was the most effective and could reduce the expression of Pizeo1 mRNA by nearly 70 percent. This result indicated that our siRNA can successfully knock down the expression of Piezo1.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/sirna-piezo1-qpcr.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.3 Analysis of the inhibitory effect of different siRNAs on Piezo1 by RT-qPCR.</b> RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-1,2,3,4,5,6) or empty plasmid. Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of Piezo1 mRNA.</div>

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/wb-piezo1-sirna.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.4 Analysis of the inhibitory effect of different siRNAs on Piezo1 by WB.</b> RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-4,5) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-Piezo1 and anti-Tubulin antibodies (equal Tubulin band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative Piezo1 protein expression level.</div>



## For β-catenin-mRNA ([BBa_K4173021](http://parts.igem.org/Part:BBa_K4173021)) 

The plasmid pcDNA3.1-box CD mini-β catenin-mCherry was transfected into HEK-293T, and the total cellular RNAs were used for RT-qPCR to verify the expression level of β-catenin mRNA. The result indicated that our plasmid could express β-catenin.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/beta-catenin-expression-in-293t-qpcr.png" alt="img" style="width: 40%;" /></p>

<div class="desc"><b>Fig.5 Analysis of relative mRNA-β-catenin expression level by RT-qPCR.</b> HEK-293T was transfected with C/Dbox-mRNA-β-catenin-expressing plasmids (β-catenin) and empty plasmids (NC). Total RNA was harvested 30h later for quantitative RT-PCR to analyze the relative expression level of mRNA-β-catenin. </div>
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