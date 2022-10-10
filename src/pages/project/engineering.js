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
# Engineering success	

## 1. Overview

It has been shown in the literature that inhibition of 5α-reductase (5αR) can reduce testosterone’s conversion to dihydrotestosterone (DHT). Excess DHT shortens anagen and causes hair follicles to enter catagen in advance, resulting in hair loss. [1] When activated by mechanosensory signals, Piezo1 can cause hair follicle stem cells (HFSC) depletion, which is often observed in AGA. [2] Wnt/β-catenin signaling pathway is associated with hair regeneration.[3] 

Therefore, we designed and constructed 14 plasmids, namely pcDNA3.1–siRNA(5αR)(1~6)-mCherry, pcDNA3.1–siRNA(Piezo1)(1~6)-mCherry, pcDNA3.1-Box CD mini-beta catenin-mCherry and pcDNA3.1-CD63-L7Ae-mCherry. For siRNA encoding plasmids, we transfected them into RM-1 cells to test their efficacy. Then we transfected the most efficient into 293T cells to gain therapeutic sEVs. 

Theoretically, these therapeutic sEVs can reach damaged follicles and release the contained 5αR-siRNA, Piezo1-siRNA, and mRNA (β-catenin). Then DHT will be dramatically decreased and the activation of Piezo1 will be cut off. β-catenin will activate the Wnt pathway to promote the proliferation of follicles. 

With the above three treatments, hair growth should be promoted.

![img](https://static.igem.wiki/teams/4173/wiki/project/mechanism-of-si-and-mr.png)

**Fig.1 Molecular mechanisms for the treatment of AGA** (Created with BioRender.com)



According to the design of the project, we finally designed four parts: C/Dbox-β-catenin ([BBa_K4173045]([Part:BBa K4173045 - parts.igem.org](http://parts.igem.org/Part:BBa_K4173045))), CD63-L7Ae ([BBa_K4173046]([Part:BBa K4173046 - parts.igem.org](http://parts.igem.org/Part:BBa_K4173046))), 5αR-siRNA-1 ([BBa_K4173048]([Part:BBa K4173048 - parts.igem.org](http://parts.igem.org/Part:BBa_K4173048))) and Piezo1 ([BBa_K4173058]([Part:BBa K4173058 - parts.igem.org](http://parts.igem.org/Part:BBa_K4173058))). Through the following series of experiments, we have proved that these two parts are effective and can be used for treatment.



## 2. Extraction of plasmids DNA

We finally designed four parts:5aR-siRNA-1, Piezo1-siRNA-5, C/Dbox-β-catenin and CD63-L7Ae. Based on our experimental results, we have proved that these four parts can efficiently reduce/increase the expression level of target genes and their siRNA/mRNA can be loaded into sEVs to exert therapeutic effect.

We ordered the plasmids from GenScript and transferred them into E. coli DH5α strain by heat shock and coated in LB plates containing ampicillin. On the second day, we selected suitable colonies for amplification and preservation. Plasmid DNA was extracted using Omega endo-free plasmid mini kit and verified by agarose gel electrophoresis.

![img](https://static.igem.wiki/teams/4173/wiki/project/plasmids.png)

**Fig.2 Agarose gel electrophoresis of siRNA-expressing plasmids**





## 3. Verify whether mRNA-β-catenin can transcribe β-catenin

The plasmid pcDNA3.1-box CD mini-β catenin-mCherry was transfected into HEK-293T, and the total cellular RNAs were used for RT-qPCR to verify the expression level of β-catenin mRNA. The result indicated that our plasmid could express β-catenin.

![img](https://static.igem.wiki/teams/4173/wiki/project/beta-catenin-expression-in-293t-qpcr.png)

**Fig.3 Analysis of relative mRNA-β-catenin expression level by RT-qPCR.** HEK-293T was transfected with C/Dbox-mRNA-β-catenin-expressing plasmids (β-catenin) and empty plasmids (NC). Total RNA was harvested 30h later for quantitative RT-PCR to analyze the relative expression level of mRNA-β-catenin. 



## 4. Verifying whether mRNA-β-catenin can be embedded in sEVs

We co-transfected the two plasmids (pcDNA3.1-box CD mini-β catenin-mCherry and pcDNA3.1-CD63-L7Ae-mCherry) into HEK-293T and collected sEVs from cell culture medium. The total RNA of the specific sEVs was extracted for RT-qPCR to detect mRNA-β-catenin. The result demonstrated that our approach of wrapping mRNA-β-catenin into sEVs is feasible.

![img](https://static.igem.wiki/teams/4173/wiki/project/mrna-beta-in-sevs.png)

**Fig.4 Analysis of relative mRNA-β-catenin expression level in sEVs **. HEK-293T was co-transfected with C/Dbox-mRNA-β-catenin-expressing plasmids and CD63-L7Ae-expressing plasmids (β-catenin). Cell culture medium was collected 36h later for sEVs purification and their total RNA was harvested for quantitative RT-PCR. 



## 5. Screen the most effective 5αR-siRNA

We respectively transfected plasmids of 5αR-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that siRNA-5αR-1 was effective and could reduce the expression of 5αR mRNA by nearly 80 percent. This result indicates that our siRNA can successfully knock down the expression of 5αR.

![img](https://static.igem.wiki/teams/4173/wiki/project/sirna-5ar-qpcr.png)

**Fig.5 Analysis of the inhibitory effect of different siRNAs on 5αR by RT-qPCR.** RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,2,3,4,5,6). Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of 5αR mRNA.

![img](https://static.igem.wiki/teams/4173/wiki/project/wb-5ar-sirna.png)

**Fig.6 Analysis of the inhibitory effect of different siRNAs on 5αR by WB.** RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,4,5,6) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-5αR and anti-GAPDH antibodies (equal GAPDH band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative 5αR protein expression level.



## 6. Screen the most effective Piezo1-siRNA

We respectively transfected plasmids of Piezo1-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that Piezo1-siRNA-5 was the most effective and could reduce the expression of Pizeo1 mRNA by nearly 70 percent. This result indicated that our siRNA can successfully knock down the expression of Piezo1.

![img](https://static.igem.wiki/teams/4173/wiki/project/sirna-piezo1-qpcr.png)

**Fig.7 Analysis of the inhibitory effect of different siRNAs on Piezo1** **by RT-qPCR.** RM-1 RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-1,2,3,4,5,6) or empty plasmid. Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of Piezo1 mRNA.![img](https://static.igem.wiki/teams/4173/wiki/project/wb-piezo1-sirna.png)

**Fig.8 Analysis of the inhibitory effect of different siRNAs on Piezo1 by WB.** RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-4,5) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-Piezo1 and anti-Tubulin antibodies (equal Tubulin band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative Piezo1 protein expression level.



## 7. Our therapeutic sEVs can inhibit the apoptosis of DPC induced by TP

We expected to prove that our therapeutic sEVs (which load with 5αR-siRNA-1, Piezo1-siRNA-5, and mRNA-β-catenin) can inhibit apoptosis of DPC in the presence of androgen. Thus, we added testosterone propionate (TP) to the cell culture medium and co-cultured therapeutic sEVs with DPC for 30h. Then the apoptotic status of DPC was detected using Annexin V-FITC Apoptosis Detection Kit (from Beyoncé) by flow cytometry. As shown in Fig.9, TP can induce apoptosis, but apoptosis was significantly inhibited after the addition of sEVs. These findings indicated that our sEVs can be used as a treatment option and may have therapeutic implications for patients with AGA.

![img](https://static.igem.wiki/teams/4173/wiki/project/apoptosis-detection.png)

**Fig.9 Cell fractionation by flow cytometry.** FACS-recorded apoptosis in DPC after different treatment. The cells were stained with Annexin V-FITC and PI. 



**Reference:**

[1] Dhariwala, M. Y., & Ravikumar, P. (2019). An overview of herbal alternatives in androgenetic alopecia. Journal of cosmetic dermatology, 18(4), 966–975. https://doi.org/10.1111/jocd.12930 

[2] Xie Y, Chen D, Jiang K, Song L, Qian N, Du Y, Yang Y, Wang F, Chen T. Hair shaft miniaturization causes stem cell depletion through mechanosensory signals mediated by a Piezo1-calcium-TNF-α axis. Cell Stem Cell. 2022 Jan 6;29(1):70-85.e6. doi: 10.1016/j.stem.2021.09.009. Epub 2021 Oct 7. PMID: 34624205.

[3] Premanand A, Reena Rajkumari B. Androgen modulation of Wnt/β-catenin signaling in androgenetic alopecia. Arch Dermatol Res. 2018 Jul;310(5):391-399. doi: 10.1007/s00403-018-1826-8. Epub 2018 Mar 16. PMID: 29549490.
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