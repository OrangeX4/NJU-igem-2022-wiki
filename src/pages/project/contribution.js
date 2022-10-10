import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"
import Icon from "../../components/icon"
import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Top from "../../components/top"

import "papercss"


const title = `Project`
const markdown = `
# Contribution

For the first time in the iGEM competition, our team constructed plasmids carrying special genes that allow β-catenin-mRNA to be embedded in sEVs ( [BBa_K4173045](http://parts.igem.org/Part:BBa_K4173045) and  [BBa_K4173046](http://parts.igem.org/Part:BBa_K4173046) ), siRNA for mouse 5αR 5αR-siRNA-1 ([BBa_K4173048](http://parts.igem.org/Part:BBa_K4173048)) and siRNA for mouse Piezo1 Piezo1-siRNA-5 ([BBa_K4173058](http://parts.igem.org/Part:BBa_K4173058)) and conducted a series of experiments to prove functions they should have in vitro. Increased expression of β-catenin and decreased expression of 5αR and Piezo1 can inhibit apoptosis of hair follicle cells. Details can be found in the Results.

要跳转的网页：Results跳转至Results



## For β-catenin-mRNA ([BBa_K4173045](http://parts.igem.org/Part:BBa_K4173045)) and L7Ae-CD63 ([BBa_K4173046](http://parts.igem.org/Part:BBa_K4173046))

The plasmid pcDNA3.1-box CD mini-β catenin-mCherry was transfected into HEK-293T, and the total cellular RNAs were used for RT-qPCR to verify the expression level of β-catenin mRNA. The result indicated that our plasmid could express β-catenin.

![img](https://static.igem.wiki/teams/4173/wiki/project/beta-catenin-expression-in-293t-qpcr.png)

**Fig.1 Analysis of relative mRNA-β-catenin expression level by RT-qPCR.** HEK-293T was transfected with C/Dbox-mRNA-β-catenin-expressing plasmids (β-catenin) and empty plasmids (NC). Total RNA was harvested 30h later for quantitative RT-PCR to analyze the relative expression level of mRNA-β-catenin. 



Then we co-transfected the two plasmids (pcDNA3.1-box CD mini-β catenin-mCherry and pcDNA3.1-CD63-L7Ae-mCherry) into HEK-293T and collected sEVs from cell culture medium. The total RNA of the specific sEVs was extracted for RT-qPCR to detect mRNA-β-catenin. The result demonstrated that our approach of wrapping mRNA-β-catenin into sEVs is feasible.

![img](https://static.igem.wiki/teams/4173/wiki/project/mrna-beta-in-sevs.png)

**Fig.2 Analysis of relative mRNA-β-catenin expression level in sEVs **. HEK-293T was co-transfected with C/Dbox-mRNA-β-catenin-expressing plasmids and CD63-L7Ae-expressing plasmids (β-catenin). Cell culture medium was collected 36h later for sEVs purification and their total RNA was harvested for quantitative RT-PCR. 



## For 5αR-siRNA-1 ([BBa_K4173048](http://parts.igem.org/Part:BBa_K4173048))

We respectively transfected plasmids of 5αR-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that siRNA-5αR-1 was effective and could reduce the expression of 5αR mRNA by nearly 80 percent. This result indicates that our siRNA can successfully knock down the expression of 5αR.

![img](https://static.igem.wiki/teams/4173/wiki/project/sirna-5ar-qpcr.png)

**Fig.3 Analysis of the inhibitory effect of different siRNAs on 5αR by RT-qPCR.** RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,2,3,4,5,6). Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of 5αR mRNA.

![img](https://static.igem.wiki/teams/4173/wiki/project/wb-5ar-sirna.png)

**Fig.4 Analysis of the inhibitory effect of different siRNAs on 5αR by WB.** RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,4,5,6) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-5αR and anti-GAPDH antibodies (equal GAPDH band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative 5αR protein expression level.



After screening out the effective siRNA, we transfected 5αR-siRNA-1-expressing plasmid into HEK-293T and purified sEVs from cell culture medium. Then we conducted RT-qPCR utilizing total RNAs of the specific sEVs and proved that the sEVs do have 5αR-siRNA-1. 

![img](https://static.igem.wiki/teams/4173/wiki/project/sirna-5ar-1-in-sevs-qpcr.png)

**Fig.5 Analysis of relative 5αR-siRNA-1 expression level in sEVs by RT-qPCR.** HEK-293T cells were co-transfected with 5αR-siRNA-1-expressing plasmids and Piezo1-siRNA-5-expressing plasmids. SEVs were purified 36h later and sEVs’ total RNA was harvested for quantitative RT-PCR to analyze the relative expression level of 5αR-siRNA-1.



## For Piezo1-siRNA-5 ([BBa_K4173058](http://parts.igem.org/Part:BBa_K4173058))

We respectively transfected plasmids of Piezo1-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that Piezo1-siRNA-5 was the most effective and could reduce the expression of Pizeo1 mRNA by nearly 70 percent. This result indicated that our siRNA can successfully knock down the expression of Piezo1.

![img](https://static.igem.wiki/teams/4173/wiki/project/sirna-piezo1-qpcr.png)

**Fig.6 Analysis of the inhibitory effect of different siRNAs on Piezo1** **by RT-qPCR.** RM-1 RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-1,2,3,4,5,6) or empty plasmid. Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of Piezo1 mRNA.![img](https://static.igem.wiki/teams/4173/wiki/project/wb-piezo1-sirna.png)

**Fig.7 Analysis of the inhibitory effect of different siRNAs on Piezo1 by WB.** RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-4,5) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-Piezo1 and anti-Tubulin antibodies (equal Tubulin band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative Piezo1 protein expression level.



After screening out the effective siRNA, we transfected Piezo1-siRNA-5-expressing plasmid into HEK-293T and purified sEVs from cell culture medium. Then we conducted RT-qPCR utilizing total RNAs of the specific sEVs and proved that the sEVs do have Piezo1-siRNA-5. 

![img](https://static.igem.wiki/teams/4173/wiki/project/sirna-piezo1-5-in-sevs-qpcr.png)

**Fig.8 Analysis of relative Piezo1-siRNA-5 expression level in sEVs by RT-qPCR.** HEK-293T cells were co-transfected with 5αR-siRNA-1-expressing plasmids and Piezo1-siRNA-5-expressing plasmids. SEVs were purified 36h later and sEVs’ total RNA was harvested for quantitative RT-PCR to analyze the relative expression level of Piezo1-siRNA-5.
`

function Page() {
  return (
    <div>
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