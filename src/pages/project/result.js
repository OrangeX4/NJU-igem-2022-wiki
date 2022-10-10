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
# Results

## 1. Project design

It has been shown in the literature that inhibition of 5α-reductase (5αR) can reduce testosterone’s conversion to dihydrotestosterone (DHT). Excess DHT shortens anagen and causes hair follicles to enter catagen in advance, resulting in hair loss. [1] When activated by mechanosensory signals, Piezo1 can cause hair follicle stem cells (HFSC) depletion, which is often observed in AGA. [2] Wnt/β-catenin signaling pathway is associated with hair regeneration.[3] 

Therefore, we designed and constructed 14 plasmids, namely pcDNA3.1–siRNA(5αR)(1~6)-mCherry, pcDNA3.1–siRNA(Piezo1)(1~6)-mCherry, pcDNA3.1-Box CD mini-beta catenin-mCherry and pcDNA3.1-CD63-L7Ae-mCherry. For siRNA encoding plasmids, we transfected them into RM-1 cells to test their efficacy. Then we transfected the most efficient into 293T cells to gain therapeutic sEVs. 

Theoretically, these therapeutic sEVs can reach damaged follicles and release the contained 5αR-siRNA, Piezo1-siRNA, and mRNA (β-catenin). Then DHT will be dramatically decreased and the activation of Piezo1 will be cut off. β-catenin will activate the Wnt pathway to promote the proliferation of follicles. 

With the above three strategies, hair growth can be promoted.

Besides, to facilitate the translational application of our project, we adopted a scalable sEV purification method—tangential flow filtration and bind-elute size exclusion chromatography (TFF/BE-SEC). After comparing it with conventional methods (UC and EIK), we demonstrated TFF/BE-SEC is the most advantageous one.

![img](https://static.igem.wiki/teams/4173/wiki/project/design.png)

**Fig.1 Project design** (Created with BioRender.com)



## 2. Experiment design

Our project involved three cell lines, namely HEK-293T, RM-1 and dermal papilla cells (DPC). HEK-293T, human embryonic kidney cell line, which secretes high levels of sEVs, was used for sEVs production.

RM-1, mouse prostate cancer cell line, which expresses the two target genes (5αR and Piezo1) were used to screen effective siRNAs.

Plasmids expressing siRNA of 5αR and Piezo1 were transfected into RM-1 respectively. The designed plasmids were loaded with mCherry fluorescent protein, so the presence of fluorescence could determine whether the plasmids were successfully transfected into cells. Then we conducted RT-qPCR and WB to determine whether the expression level of target genes was reduced.

After siRNA screening, we transfected plasmids expressing effective siRNAs into HEK-293T and collected sEVs from cell culture conditioned medium. We performed RT-qPCR to test whether siRNA was loaded into sEVs.

Plasmids expressing β-catenin mRNA and L7Ae-CD63 were co-transfected into HEK-293T and cell culture medium was collected to extract sEVs. sEV’s RNA was extracted to detect whether the mRNA was embedded into them by RT-qPCR.

At the same time, we purified sEVs by three different methods (UC, EIK, and TFF/BE-SEC). To assess the purity of sEVs, we performed NanoSight to detect the size distribution of sEVs and calculated the number of particles per microgram of protein. We also conducted WB to assess the abundance of EV surface markers (CD9, CD63, TSG101). After comprehensive comparation of these three methods, we determined TFF/BE-SEC has the best EV purity.

Finally, we validated that our therapeutic sEVs (which carry 5αR-siRNA-1, Piezo1-siRNA-5 and β-catenin mRNA) purified by TFF/BE-SEC could inhibit the apoptosis of DPC induced by androgen using flow cytometry.



## 3. SiRNAs can knock down 5αR and Piezo1

### 3.1 **siRNA candidates**

On the NCBI web page, we designed the required murine siRNA for 5αR and Piezo1. The followings are our results:

**siRNAs for 5αR:**

5αR-siRNA-1: AAUGAGUAAAUAAAUGUCCUG

5αR-siRNA-2: AAUAAACCAGGUAAUAGGCUU

5αR-siRNA-3: AACAAAGUGUGAAAAAUGCAA

5αR-siRNA-4: TCAGAAAGATCACCGCTGATA

5αR-siRNA-5: TAAACCAGGTAATAGGCTTGC

5αR-siRNA-6: AAACAAGCCACCTTGTGGGAT



**siRNAs for Piezo1:**

Piezo1-siRNA-1: UAGAAACAGCAAAUAGACCAG

Piezo1-siRNA-2: AGUAUAGGCAAAUGAGAUGGC

Piezo1-siRNA-3: AUAAAUGGUGUCUGAUAGCAG

Piezo1-siRNA-4: TATGTCTTCATCGTCGTCATC

Piezo1-siRNA-5: TTCATCGTCGTCATCATCGTC

Piezo1-siRNA-6: ATCATCGTCATCGTCATCATC



### 3.2 Screen the most effective 5αR-siRNA

We respectively transfected plasmids of 5αR-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that siRNA-5αR-1 was effective and could reduce the expression of 5αR mRNA by nearly 80 percent. This result indicates that our siRNA can successfully knock down the expression of 5αR.

![img](https://static.igem.wiki/teams/4173/wiki/project/sirna-5ar-qpcr.png)

**Fig.2 Analysis of the inhibitory effect of different siRNAs on 5αR by RT-qPCR.** RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,2,3,4,5,6). Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of 5αR mRNA.

![img](https://static.igem.wiki/teams/4173/wiki/project/wb-5ar-sirna.png)

**Fig.3 Analysis of the inhibitory effect of different siRNAs on 5αR by WB.** RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,4,5,6) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-5αR and anti-GAPDH antibodies (equal GAPDH band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative 5αR protein expression level.



### 3.3 Screen the most effective Piezo1-siRNA

We respectively transfected plasmids of Piezo1-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that Piezo1-siRNA-5 was the most effective and could reduce the expression of Pizeo1 mRNA by nearly 70 percent. This result indicated that our siRNA can successfully knock down the expression of Piezo1.

![img](https://static.igem.wiki/teams/4173/wiki/project/sirna-piezo1-qpcr.png)

**Fig.4 Analysis of the inhibitory effect of different siRNAs on Piezo1** **by RT-qPCR.** RM-1 RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-1,2,3,4,5,6) or empty plasmid. Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of Piezo1 mRNA.![img](https://static.igem.wiki/teams/4173/wiki/project/wb-piezo1-sirna.png)

**Fig.5 Analysis of the inhibitory effect of different siRNAs on Piezo1 by WB.** RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-4,5) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-Piezo1 and anti-Tubulin antibodies (equal Tubulin band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative Piezo1 protein expression level.



### 3.4 Verify the presence of siRNA in sEVs

After screening out the effective siRNAs (5αR-siRNA-1 and Piezo1-siRNA-5), we transfected the corresponding plasmids into HEK-293T and purified sEVs from cell culture medium. Then we conducted RT-qPCR utilizing total RNAs of the specific sEVs and proved that the sEVs do have the siRNAs we need. 

![img](https://static.igem.wiki/teams/4173/wiki/project/sevs-sirna.png)

**Fig.6** **Analysis of relative siRNAs expression level in sEVs by RT-qPCR.** HEK-293T cells were co-transfected with 5αR-siRNA-1-expressing plasmids and Piezo1-siRNA-5-expressing plasmids. SEVs were purified 36h later and sEVs’ total RNA was harvested for quantitative RT-PCR to analyze the relative expression level of 5αR-siRNA-1 or Piezo1-siRNA-5.

## 4. mRNA-β-catenin can be embedded into sEVs

### 4.1 Design the plasmids

After reading the literature [2,3], we found the required nucleotide sequences on NCBI and inserted them into pcDNA3.1-mCherry to construct the plasmids (pcDNA3.1-box CD mini-β catenin-mCherry and pcDNA3.1-L7Ae-G8Linker-CD63-mCherry). 



### 4.2 Verify whether mRNA-β-catenin can transcribe β-catenin

The plasmid pcDNA3.1-box CD mini-β catenin-mCherry was transfected into HEK-293T, and the total cellular RNAs were used for RT-qPCR to verify the expression level of β-catenin mRNA. The result indicated that our plasmid could express β-catenin.

![img](https://static.igem.wiki/teams/4173/wiki/project/beta-catenin-expression-in-293t-qpcr.png)

**Fig.7 Analysis of relative mRNA-β-catenin expression level by RT-qPCR.** HEK-293T was transfected with C/Dbox-mRNA-β-catenin-expressing plasmids (β-catenin) and empty plasmids (NC). Total RNA was harvested 30h later for quantitative RT-PCR to analyze the relative expression level of mRNA-β-catenin. 



### 4.3 Verifying whether mRNA-β-catenin can be embedded in sEVs

We co-transfected the two plasmids (pcDNA3.1-box CD mini-β catenin-mCherry and pcDNA3.1-CD63-L7Ae-mCherry) into HEK-293T and collected sEVs from cell culture medium. The total RNA of the specific sEVs was extracted for RT-qPCR to detect mRNA-β-catenin. The result demonstrated that our approach of wrapping mRNA-β-catenin into sEVs is feasible.

![img](https://static.igem.wiki/teams/4173/wiki/project/mrna-beta-in-sevs.png)

**Fig.8 Analysis of relative mRNA-β-catenin expression level in sEVs **. HEK-293T was co-transfected with C/Dbox-mRNA-β-catenin-expressing plasmids and CD63-L7Ae-expressing plasmids (β-catenin). Cell culture medium was collected 36h later for sEVs purification and their total RNA was harvested for quantitative RT-PCR. 



## 5. Compare sEVs extracted by three methods

We comprehensively evaluated the EV yields and sample purities of three most popular EV separation methods, ultracentrifugation, commercial sEV isolation kit, and tangential flow filtration combined with bind-elute size exclusion chromatography (BE-SEC) in cell culture medium. 

Namely, we performed particle size analysis of sEVs using NanoSight. To assess the purity of the sEVs, we counted the number of particles per microgram of protein. The most common impurities in sEVs extraction are soluble proteins outside the vesicles, so the number of particles per microgram of protein can reflect the purity of sEVs. The results showed that the particle size of sEVs extracted by TFF/BE-SEC is mostly concentrated within 50-200 nm, with the highest number of particles per microgram protein and the highest surface marker abundance, indicating the highest purity. Meanwhile, TFF/BE-SEC can extract sEVs from at least 200 ml cell culture media each time, while UC and EIK take longer or even require multiple experiments to process the same amount of culture media. In summary, TFF/BE-SEC is the best method for the large-scale purification of sEVs.

![img](https://static.igem.wiki/teams/4173/wiki/project/compare-three-isolation-methods.png)

**Fig.9** **Characterization of sEVs extracted by three methods.** Cell culture medium of HEK-293T was harvested and sEVs were purified by three methods (UC, EIK and TFF/BE-SEC).  **A:** Size distribution of sEVs extracted by three methods determined by NTA. **B:** Analysis of total protein of sEVs extracted by three methods by BCA. **C:** Number of particles per microgram of protein for sEVs isolated by the three methods. **D:** Western blot analysis of sEVs’ surface markers (CD9, CD63 and TSG101). An equal amount of total protein was loaded in each lane.



We noted that the flow through collected from BE-SEC column could be divided into three parts. To further investigate which part contains sEVs with the highest purity, we collected them respectively for downstream analysis. As indicated in Fig.10, sEVs from Period 2 are the purest.

![img](https://static.igem.wiki/teams/4173/wiki/project/different-period-of-be-sec.png)

**Fig.10 Characterization of sEVs collected from piecewise BE-SEC.** Cell culture medium of HEK-293T was harvested and sEVs were purified by TFF/BE-SEC immediately. **A:** The process picture obtained when purifying sEVs by BE-SEC. The purple line is UV280, which divided the whole flow through into three sections. **B:** Size distribution of extracellular vesicles from each of the three sections determined by NTA. **C:** Number of particles per section as a percentage of the total number of particles. **D:** Western blot analysis of sEVs’ surface markers (CD9, CD63 and TSG101). An equal amount of total protein was loaded in each lane.



## 6. Our therapeutic sEVs can inhibit the apoptosis of DPC induced by TP

We expected to prove that our therapeutic sEVs (which load with 5αR-siRNA-1, Piezo1-siRNA-5, and mRNA-β-catenin) can inhibit apoptosis of DPC in the presence of androgen. Thus, we added testosterone propionate (TP) to the cell culture medium and co-cultured therapeutic sEVs with DPC for 30h. Then the apoptotic status of DPC was detected using Annexin V-FITC Apoptosis Detection Kit (from Beyoncé) by flow cytometry. As shown in Fig.11, TP can induce apoptosis, but apoptosis was significantly inhibited after the addition of sEVs. These findings indicated that our sEVs can be used as a treatment option and may have therapeutic implications for patients with AGA.

![img](https://static.igem.wiki/teams/4173/wiki/project/apoptosis-detection.png)

**Fig.11 Cell fractionation by flow cytometry.** FACS-recorded apoptosis in DPC after different treatment. The cells were stained with Annexin V-FITC and PI. 



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