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
# Engineering success	

## 1. Overview

It has been shown in the literature that inhibition of 5α-reductase (5αR) can reduce testosterone’s conversion to dihydrotestosterone (DHT). Excess DHT shortens anagen and causes hair follicles to enter catagen in advance, resulting in hair loss. [1] When activated by mechanosensory signals, Piezo1 can cause hair follicle stem cells (HFSC) depletion, which is often observed in AGA. [2] Wnt/β-catenin signaling pathway is associated with hair regeneration.[3] 

Therefore, we designed and constructed 14 plasmids, namely pcDNA3.1–siRNA(5αR)(1-6)-mCherry, pcDNA3.1–siRNA(Piezo1)(1-6)-mCherry, pcDNA3.1-Box CD mini-beta catenin-mCherry and pcDNA3.1-CD63-L7Ae-mCherry. For siRNA encoding plasmids, we transfected them into RM-1 cells to test their efficacy. Then we transfected the most efficient into 293T cells to gain therapeutic sEVs. 

Theoretically, these therapeutic sEVs can reach damaged follicles and release the contained 5αR-siRNA, Piezo1-siRNA, and mRNA (β-catenin). Then DHT will be dramatically decreased and the activation of Piezo1 will be cut off. β-catenin will activate the Wnt pathway to promote the proliferation of follicles. 

With the above three treatments, hair growth should be promoted.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/mechanism-of-si-and-mr.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.1 Molecular mechanisms for the treatment of AGA</b> (Created with BioRender.com)</div>



For the first time in the iGEM competition, our team designed a plasmid that expresses β-catenin ([BBa_K4173021](http://parts.igem.org/Part:BBa_K4173021)), a protein that enhances the Wnt/β-catenin pathway and thus promotes cell proliferation. The plasmid was experimentally validated to express the mRNA of β-catenin *in vitro*. We also designed six siRNAs that can inhibit 5α reductase and six siRNAs that inhibit the expression of the stress-activated ion channel Piezo1. After a series of validation experiments, we screened the most effective siRNAs, 5αR-siRNA-1 ([BBa_K4173009](http://parts.igem.org/Part:BBa_K4173009)) and Piezo1-siRNA-5 ([BBa_K4173019](http://parts.igem.org/Part:BBa_K4173019)).

After designing the siRNAs, we enabled them to be wrapped into sEVs by adding components to both ends of the siRNA sequence and inserting it into the plasmid expression vector pcDNA3.1-mCherry ([BBa_K4173048](http://parts.igem.org/Part:BBa_K4173048) and [BBa_K4173058](http://parts.igem.org/Part:BBa_K4173049)), and we also verified the validity of the sequence by experiment. We modified the mRNA of β-catenin by adding a C/D box RNA at one end ([BBa_K4173045](http://parts.igem.org/Part:BBa_K4173045)) and designed specific CD63-L7Ae fusion protein ([BBa_K4173046](http://parts.igem.org/Part:BBa_K4173046)).  CD63 is one of the most widely used exosome markers with n-terminal and c-terminal intracellular structural domains. L7Ae, the 60S large ribosomal subunit of the archaeal ribosomal protein 7Ae. The target protein can be captured and kept in close contact with L7Ae through the interaction of L7Ae with the C/D box RNA structure added at the UTR of the reporter gene. When L7Ae binds to the c-terminus of CD63, the target protein can be immobilized on the membrane of exosomes. Finally, CD63-L7Ae can serve as an active packaging device for specific RNA entry into sEVs. We have also demonstrated experimentally that β-catenin can be encapsulated into sEVs.



## 2. Plasmids Design

 On the NCBI webpage, we designed siRNAs for 5αR and Piezo1 and found the gene sequences we need (β-catenin, L7Ae, CD63). Then we used SnapGene to load the target sequences into the plasmid vector pcDNA3.1-mCherry. Finally we designed and constructed 14 plasmids.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/plasmids-design.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.2 Plasmids design.</b> (The final 4 plasmids were used as examples.)</div>



## 3. Extraction of plasmids DNA

We finally designed four parts:5aR-siRNA-1, Piezo1-siRNA-5, C/Dbox-β-catenin and CD63-L7Ae. Based on our experimental results, we have proved that these four parts can efficiently reduce/increase the expression level of target genes and their siRNA/mRNA can be loaded into sEVs to exert therapeutic effect.

We ordered the plasmids from GenScript and transferred them into E. coli DH5α strain by heat shock and coated in LB plates containing ampicillin. On the second day, we selected suitable colonies for amplification and preservation. Plasmid DNA was extracted using Omega endo-free plasmid mini kit and verified by agarose gel electrophoresis.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/plasmids.png" alt="img" style="width: 40%;" /></p>

<div class="desc"><b>Fig.3 Agarose gel electrophoresis of siRNA-expressing plasmids</b></div>



## 4. For pcDNA3.1-box CD mini-β catenin-mCherry ([BBa_K4173045](http://parts.igem.org/Part:BBa_K4173045)) and pcDNA3.1-CD63-L7Ae-mCherry ([BBa_K4173046](http://parts.igem.org/Part:BBa_K4173046))



### 4.1 Verify whether plasmid can express β-catenin

The plasmid pcDNA3.1-box CD mini-β catenin-mCherry was transfected into HEK-293T, and the total cellular RNAs were used for RT-qPCR to verify the expression level of β-catenin mRNA. The result indicated that our plasmid could express β-catenin.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/beta-catenin-expression-in-293t-qpcr.png" alt="img" style="width: 40%;" /></p>

<div class="desc"><b>Fig.4 Analysis of relative mRNA-β-catenin expression level by RT-qPCR.</b> HEK-293T was transfected with C/Dbox-mRNA-β-catenin-expressing plasmids (β-catenin) and empty plasmids (NC). Total RNA was harvested 30h later for quantitative RT-PCR to analyze the relative expression level of mRNA-β-catenin. </div>



### 4.2 Verifying whether mRNA-β-catenin can be embedded in sEVs

We co-transfected the two plasmids (pcDNA3.1-box CD mini-β catenin-mCherry and pcDNA3.1-CD63-L7Ae-mCherry) into HEK-293T and collected sEVs from cell culture medium. The total RNA of the specific sEVs was extracted for RT-qPCR to detect mRNA-β-catenin. The result demonstrated that our approach of wrapping mRNA-β-catenin into sEVs is feasible.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/mrna-beta-in-sevs.png" alt="img" style="width: 40%;" /></p>

<div class="desc"><b>Fig.5 Analysis of relative mRNA-β-catenin expression level in sEVs.</b> HEK-293T was co-transfected with C/Dbox-mRNA-β-catenin-expressing plasmids and CD63-L7Ae-expressing plasmids (β-catenin). Cell culture medium was collected 36h later for sEVs purification and their total RNA was harvested for quantitative RT-PCR. </div>



## 5. For pcDNA3.1-5αR-siRNA-1-mCherry ([BBa_K4173048](http://parts.igem.org/Part:BBa_K4173048)) and pcDNA3.1-Piezo1-siRNA-5-mCherry ([BBa_K4173058](http://parts.igem.org/Part:BBa_K4173049))

### 5.1 Screen the most effective 5αR-siRNA

We respectively transfected plasmids of 5αR-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that siRNA-5αR-1 was effective and could reduce the expression of 5αR mRNA by nearly 80 percent. This result indicates that our siRNA can successfully knock down the expression of 5αR.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/sirna-5ar-qpcr.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.6 Analysis of the inhibitory effect of different siRNAs on 5αR by RT-qPCR.</b> RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,2,3,4,5,6). Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of 5αR mRNA.</div>

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/wb-5ar-sirna.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.7 Analysis of the inhibitory effect of different siRNAs on 5αR by WB.</b> RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,4,5,6) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-5αR and anti-GAPDH antibodies (equal GAPDH band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative 5αR protein expression level.</div>



### 5.2 Screen the most effective Piezo1-siRNA

We respectively transfected plasmids of Piezo1-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that Piezo1-siRNA-5 was the most effective and could reduce the expression of Pizeo1 mRNA by nearly 70 percent. This result indicated that our siRNA can successfully knock down the expression of Piezo1.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/sirna-piezo1-qpcr.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.8 Analysis of the inhibitory effect of different siRNAs on Piezo1 by RT-qPCR.</b> RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-1,2,3,4,5,6) or empty plasmid. Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of Piezo1 mRNA.</div>

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/wb-piezo1-sirna.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.9 Analysis of the inhibitory effect of different siRNAs on Piezo1 by WB.</b> RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-4,5) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-Piezo1 and anti-Tubulin antibodies (equal Tubulin band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative Piezo1 protein expression level.</div>



### 5.3 Verify the presence of siRNA in sEVs

After screening out the effective siRNAs (5αR-siRNA-1 and Piezo1-siRNA-5), we transfected the corresponding plasmids into HEK-293T and purified sEVs from cell culture medium. Then we conducted RT-qPCR utilizing total RNAs of the specific sEVs and proved that the sEVs do have the siRNAs we need. 

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/sevs-sirna.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.10 Analysis of relative siRNAs expression level in sEVs by RT-qPCR.</b> HEK-293T cells were co-transfected with 5αR-siRNA-1-expressing plasmids and Piezo1-siRNA-5-expressing plasmids. SEVs were purified 36h later and sEVs’ total RNA was harvested for quantitative RT-PCR to analyze the relative expression level of 5αR-siRNA-1 or Piezo1-siRNA-5.</div>



## 6. Our therapeutic sEVs can inhibit the apoptosis of DPC induced by TP

We expected to prove that our therapeutic sEVs (which load with 5αR-siRNA-1, Piezo1-siRNA-5, and mRNA-β-catenin) can inhibit apoptosis of DPC in the presence of androgen. Thus, we added testosterone propionate (TP) to the cell culture medium and co-cultured therapeutic sEVs with DPC for 30h. Then the apoptotic status of DPC was detected using Annexin V-FITC Apoptosis Detection Kit (from Beyoncé) by flow cytometry. As shown in Fig.9, TP can induce apoptosis, but apoptosis was significantly inhibited after the addition of sEVs. These findings indicated that our sEVs can be used as a treatment option and may have therapeutic implications for patients with AGA.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/apoptosis-detection.png" alt="img" style="width: 90%;" /></p>

<div class="desc"><b>Fig.11 Cell fractionation by flow cytometry.</b> FACS-recorded apoptosis in DPC after different treatment. The cells were stained with Annexin V-FITC and PI. </div>



**Reference:**

[1] Dhariwala, M. Y., & Ravikumar, P. (2019). An overview of herbal alternatives in androgenetic alopecia. Journal of cosmetic dermatology, 18(4), 966–975. https://doi.org/10.1111/jocd.12930 

[2] Xie Y, Chen D, Jiang K, Song L, Qian N, Du Y, Yang Y, Wang F, Chen T. Hair shaft miniaturization causes stem cell depletion through mechanosensory signals mediated by a Piezo1-calcium-TNF-α axis. Cell Stem Cell. 2022 Jan 6;29(1):70-85.e6. doi: 10.1016/j.stem.2021.09.009. Epub 2021 Oct 7. PMID: 34624205.

[3] Premanand A, Reena Rajkumari B. Androgen modulation of Wnt/β-catenin signaling in androgenetic alopecia. Arch Dermatol Res. 2018 Jul;310(5):391-399. doi: 10.1007/s00403-018-1826-8. Epub 2018 Mar 16. PMID: 29549490.
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