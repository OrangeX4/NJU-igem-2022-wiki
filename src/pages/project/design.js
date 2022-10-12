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
# Design



## 1. Overview

According to literature, inhibition of 5α-reductase (5αR) can reduce testosterone’s conversion to dihydrotestosterone (DHT). Excess DHT shortens anagen and causes hair follicles to enter catagen in advance, resulting in hair loss. [1] When activated by mechanosensory signals, Piezo1 can cause hair follicle stem cells (HFSC) depletion, which is often observed in AGA. [2] Besides, an alternative treatment strategy for AGA is stabilizing β-catenin through amplifying Wnt signals, in order to extend the anagen phase and delay the onset of catagen phase in hair follicles. [3]

Based on this knowledge, we planned to down-regulate 5aR and piezo1 and up-regulate β-catenin, hoping to find a brand-new solution to AGA.

We designed and constructed 14 plasmids, namely **pcDNA3.1–siRNA(5αR)(1-6)-mCherry, pcDNA3.1–siRNA(Piezo1)(1-6)-mCherry, pcDNA3.1-Box CD mini-mRNA (β-catenin)-mCherry and pcDNA3.1-L7Ae-G8Linker-CD63-mCherry**. 

For siRNA-encoding plasmids, we transfected them into RM-1 cells to test their inhibitory effect on target genes and the encapsulation efficiency of corresponding siRNAs into sEVs. 

To package β-catenin mRNA into sEVs, we utilized the archaeal ribosomal protein L7Ae which binds to the C/Dbox RNA structure. We conjugated L7Ae with sEV surface protein CD63 via a flexible G8 linker, and inserted a C/Dbox into the 5’-untranslated region (5’-UTR) of β-catenin, hypothesizing that transcripts of β-catenin could be well incorporated into sEVs via the interaction between L7Ae and the C/Dbox.[4]

Finally, we co-transfected the most efficient plasmids into 293T cells to gain therapeutic sEVs and preliminarily tested the efficacy of our sEVs *in vitro*.

Additionally, to facilitate the industrial application of our project, we adopted a scalable sEV purification method—tangential flow combined with bind-elute size exclusion chromatography (TFF/BE-SEC). After comparing it with conventional methods (UC and EIK), we demonstrated TFF/BE-SEC is the most advantageous one, in terms of yield and purity.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/design.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.1 Overall project design</b> (Created with BioRender.com)</div>



## 2. The skin and androgenic alopecia

The skin is constituted of three overlaid parts: the hypodermis, the dermis, and the epidermis. The hypodermis also called the subcutaneous tissue, mostly formed of lipid cells, has a role as protective padding, insulation, and energy reservoir. The dermis, located above the hypodermis, consists of a fibrous scaffold composed of extracellular matrix, fibroblasts, and immune cells. The dermis hosts blood vessels, nerves, and hair follicles. The epidermis is a specialized epithelium, mostly composed of keratinocytes at different stages of differentiation.[5]

As the largest organ which covers the entire body, the skin functions as an essential barrier to protect the body from the environment.[8] Additionally, the skin has sensory, thermoregulation, and immune functions. When the function of the skin is damaged due to numerous factors (e.g. physical, chemical, microorganism, parasite, genetic, metabolic disturbance, and so on), skin diseases happen. One of the most common is androgenic alopecia (AGA), which is considered to be the most prevalent type of baldness characterized by progressive hair loss. AGA is not fatal, but has always been recognized as having significant psychological effects on affected patients. Fortunately, as its genetics, molecular basis and pathophysiology are revealed more and more in-depth, chances are that we will find more effective treatment modalities.[6]

AGA is characterized by stepwise miniaturization of the hair follicle, resulting from alteration in the hair cycle dynamics. The normal hair cycle can be divided into three periods: anagen, catagen, and telogen and hair length is largely determined by the duration of anagen.[9] In AGA, the duration of anagen phase gradually decreases and that of telogen phase increases. Dermal papillary cells (DPC), a kind of hair follicle cells, play an important role in this process. Studies have shown that upon receipt of excess androgens by DPC, certain downstream pathways will be activated to release cytokines that affect the growth of epidermal cells, finally inhibiting hair growth. [7]

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/skin-structure.png" alt="img" style="width: 65%;" /></p>

<div class="desc"><b>Fig.2 Diagram of skin structure</b> [5]</div>

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/hair-follicle.png" alt="img" style="width: 60%;" /></p>

<div class="desc"><b>Fig.3 Histomorphology of the hair follicle</b> [7]</div>

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/background.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.4 Mechanism of androgen alopecia</b> (Created with BioRender.com)</div>



## 3. Two powerful tools: RNA interference and small extracellular vesicles (sEVs)

RNA interfering (RNAi), mediated by small interfering RNAs and microRNAs, is currently one of the most promising tools of gene therapy. Small RNAs are capable of inducing specific post-transcriptional gene silencing, providing a potentially effective platform for various diseases. However, only few clinical trials based on RNAi therapy have been conducted, largely because of RNAi delivery issue. Small RNAs need to go pass through various extracellular and intracellular barriers before reaching their target sites and exerting therapeutic effect. [8,9] 

Small extracellular vesicles(sEVs) are nanoscale vesicles released by various cells, usually 30-150 nm in diameter, containing proteins, lipids and nucleic acids. sEVs can transmit information between cells and participate in their physiological and pathological processes, such as immune responses, cell migration, cell differentiation, tumor invasion, and so on.[10] Due to their natural role in shuttling endogenous nucleic acid in our body, harnessing sEVs as nanaocarriers for small RNAs delivery has received considerable attention in recent years. Compared with existing foreign RNA carriers, such as viruses, synthetic polymers, and lipid-based carriers, sEVs may exhibit higher delivery efficiency, lower immunogenicity, and better biocompatibility.[8]



## 4. Three targets: 5aR, Piezo1 and β-catenin

### 4.1 We chose to down-regulate 5αR

5αR, or 5α-reductase, is a kind of reductase distributed in the cytoplasm of DPC. Testosterone is the main circulating androgen in the human body. 5αR converts testosterone (T) into dihydrotestosterone (DHT), which has a much stronger androgen effect and a higher affinity to the androgen receptor (AR) than testosterone. [11] The effect of androgen on hair follicles mainly depends on follicle's utilization rate of testosterone. Studies have shown that patients with AGA exhibit higher androgen levels in the hair follicles than healthy people, while circulating androgen levels are normal in both cases. Therefore, we chose to use siRNA to inhibit 5αR gene expression, thereby attenuating the effect of androgen without blocking androgen's normal action.[12]

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/testosterone.png" alt="img" style="width: 65%;" /></p>

<div class="desc"><b>Fig.5 Metabolic pathway of testosterone</b> [11]</div>



### 4.2 We chose to down-regulate Piezo1

Piezo1 is a stress-activated ion channel on the surface of hair follicle stem cells. When the hair follicle is miniaturized by androgen, the hair follicle stem cells will be squeezed by stress, and Piezo1 will be activated, which will cause Ca2+ influx, activating downstream caspase3 and inducing apoptosis. Researches on engineered Piezo1-deficient mice indicated that the Piezo1-deficient mice had significantly less hair follicle cell apoptosis than normal mice. [13] Therefore, we also decided to use siRNA to inhibit the Piezo1 gene to treat AGA by inhibiting the apoptosis of hair follicle cells.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/piezo1.png" alt="img" style="width: 65%;" /></p>

<div class="desc"><b>Fig.6 Piezo1’s role in hair cycle</b> [2]</div>



### 4.3 We utilized L7Ae-C/Dbox interaction to load β-catenin mRNA in sEVs

Wnt is a classical gene that promotes cell proliferation, and studies have shown that the Wnt gene pathway plays an important role in the maintenance of the hair growth phase. Among them, β-catenin is a necessary protein to activate the downstream *wnt* gene pathway. Unfortunately, due to the high molecular weight of mRNA, it is difficult to be encapsulated into sEVs. However, studies have shown that L7ae can be used to transport mRNA to CD63 on the exosomal membrane,[14] so we decided to achieve the package and delivery of β-catenin mRNA in this way.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/l7ae.png" alt="img" style="width: 65%;" /></p>

<div class="desc"><b>Fig.7 Mechanism of using sEVs to deliver mRNA</b> [17]</div>



## 5. sEVs’ Large-scale purification technique: TFF/BE-SEC

The purification of sEVs is a challenging endeavor due to their small size. Currently, a plethora of different isolation methods have been described but a standardized method is still missing.[15] And almost every common methods have drawbacks in yield and purity, causing it’s not suitable for the clinical setting. We found new purification techniques —— Tangential Flow Filtration and Bind-elute size exclusion Chromatography (TFF/BE-SEC), and compared them with the two commonly used methods (Differential Centrifugation and Precipitation with Ultrafiltration), proving TFF/BE-SEC has irreplaceable advantages in yield, purity, and stability. 

### 5.1 Common sEVs isolation methods

**Ultracentrifugation (UC)** is the most popular method of sEVs isolation, as indicated by its use in a large number of studies. It is based on EVs’ size and density by sequentially increasing the centrifugal force to pellet cells and debris (<1500g), large EVs (10 000–20 000g), and small EVs (sEVs) (100 000–200 000g).[15] But it not only may result in clumping of sEVs, isolate non-EV components such as protein aggregates and viruses, and damage sEVs during the final ultracentrifugation step but also has unstable recovery between studies. [16]

**Density gradient centrifugation (DGC)** depends on the size and mass density (top-down gradient) or mass density only (bottom-up gradient) of EVs. Sucrose and iodixanol are the most commonly used density media used in isolation. It can extract the purest EVs among all methods now but with very low throughput. And it is very time-consuming.[16]

**Exosome isolation kit (EIK)**’s base principle is immunocapture assays. Immunocapture assays use monoclonal antibodies immobilized on a surface, for example, a plate, bead, or chip to capture EVs that expose a specific ligand. We use Total SEV Isolation Reagent (from cell culture media) (from Invitrogen) to pull out sEVs by Dynabeads™ magnetic separation technology. However, the cell culture conditioned medium has a large volume and a low content of sEVs, so we usually need to concentrate the volume by ultrafiltration before using the reagent.[16]

DC is easy to use and widely available yet does not isolate pure EV. DGC isolates highly purified EVs but has a low recovery. Immunocapture assay with ultrafiltration is easy to use but very time-consuming with low purity.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/sevs-isolation-method.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.8 Working principle of different methods to isolate EVs</b> [16]</div>



### 5.2 Tangential Flow Filtration and Bind-elute size exclusion Chromatography (TFF/BE-SEC)

Traditional SEC enables size-based separation on a single column, with the majority of EVs eluting before soluble components such as proteins and HDL. SEC removes 99% of the soluble plasma proteins and >95% of HDL from the purest fraction of EVs, does not induce aggregation of EVs, and retains the integrity and biological activity of EVs.[16] In our project, we use new a new type of column packing, named Capto Core 700 (from Cytiva), to implement an improved SEC, Bind-elute size exclusion Chromatography (BE-SEC). It combines both size separation with bind-elute chromatography where large molecules bypass these beads while molecules smaller than 700 kDa penetrate the inert outer shell and bind to hydrophobic and positively charged octylamine ligands within the core.[15] To reduce the risk of loading the BE-SEC column with an excessive amount of impurities that would exceed its binding ability (13 mg of ovalbumin/ml of medium) and increase the loading volume, the samples were diafiltrated and concentrated using Tangential Flow Filtration (TFF). We chose 100kDa TFF filters for the concentration and diafiltration step. Therefore, TFF/BE-SEC not only guarantees the purity of sEVs but also achieves large-scale isolation. 

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/exo-extraction.png" alt="img" style="width: 85%;" /></p>

<div class="desc"><b>Fig.9 Technical flow chart of sEVs isolation using three methods (UC, KIT, and TFF/BE-SEC)</b> (Created with BioRender.com)</div>



## 6. Advantages of our project

**Low toxic and immunogenic drugs**

SEVs are released from MVBs, which contain multiple vesicles generated through exocytic fusion with the cell membrane.[18] After being transported through body fluids, sEVs can directly fuse with the plasma membrane, and can also be taken up through phagocytosis, micropinocytosis, and endocytosis mediated by lipid raft, caveolin, or clathrin. Compared to existing transdermal drugs, they have low toxicity and low immunogenic, because they are from cells. 

**Safe gene “switch”** 

Compared with current drugs, RNAi is not only safer for it degrades soon after release by sEVs, but also more flexible since it can target different genes according to the design.[19] At the same time, the biocompatibility of sEVs can maintain high drug stability as well as fewer side effects. In addition, we want to provide a more convenient way of drug delivery. 

**Large-scale purification of sEVs** 

In the final scenario, sEVs will be purified by TFF/BE-SEC, which can increase yield while maintaining high purity, and delivered through the skin via microneedles to further improve the effectiveness of drugs. Given the effectiveness and application flexibility, sEV drug delivery can hopefully become a highly efficient and general treatment in the future. Due to its potential, we hope that we can get it through drug research, developing an "sEV + siRNA / mRNA" transdermal drug delivery system.[20]



## 7. Future experimental plan:

From the investigation of HP, we learned that MSC exosomes of subcutaneous fat origin have a hair growth-promoting effect. So to improve the therapeutic effect of the drug, we will use lentiviruses and MSC to construct stably transfected cell lines that can secret specific sEVs. To verify the efficacy of our therapy, we will inject the sEVs with 5αR-siRNA, peizo1-siRNA, and β-catenin mRNA into the mice with microneedles into subcutaneous follicles. It’s expected to reach damaged follicles and release the contained siRNA (5αR), siRNA (Piezo1), and mRNA (β-catenin). Then the DHT will be dramatically decreased and the downstream activation of Piezo1 will be cut off. The β-catenin will then activate the Wnt pathway for the proliferation of follicles. With the above three treatments, the mice with androgenic alopecia will grow more pristine hair or grow hair faster compared with those suffering from androgenic alopecia but without injection of sEVs.



**References:**

[1] Dhariwala, M. Y., & Ravikumar, P. (2019). An overview of herbal alternatives in androgenetic alopecia. Journal of cosmetic dermatology, 18(4), 966–975. https://doi.org/10.1111/jocd.12930 

[2]Xie Y, Chen D, Jiang K, Song L, Qian N, Du Y, Yang Y, Wang F, Chen T. Hair shaft miniaturization causes stem cell depletion through mechanosensory signals mediated by a Piezo1-calcium-TNF-α axis. Cell Stem Cell. 2022 Jan 6;29(1):70-85.e6. doi: 10.1016/j.stem.2021.09.009. Epub 2021 Oct 7. PMID: 34624205.

[3]Premanand A, Reena Rajkumari B. Androgen modulation of Wnt/β-catenin signaling in androgenetic alopecia. Arch Dermatol Res. 2018 Jul;310(5):391-399. doi: 10.1007/s00403-018-1826-8. Epub 2018 Mar 16. PMID: 29549490.

[4]Kojima R, Bojar D, Rizzi G, Hamri GC, El-Baba MD, Saxena P, Ausländer S, Tan KR, Fussenegger M. Designer exosomes produced by implanted cells intracerebrally deliver therapeutic cargo for Parkinson's disease treatment. Nat Commun. 2018 Apr 3;9(1):1305. doi: 10.1038/s41467-018-03733-8. PMID: 29610454; PMCID: PMC5880805.

[5] Souci L, Denesvre C. 3D skin models in domestic animals. Vet Res. 2021 Feb 15;52(1):21. doi: 10.1186/s13567-020-00888-5.

[6] Kaliyadan F, Nambiar A, Vijayaraghavan S. Androgenetic alopecia: An update. Indian J Dermatol Venereol Leprol 2013;79:613-25.

[7] Schneider MR, Schmidt-Ullrich R, Paus R. The hair follicle as a dynamic miniorgan. Curr Biol. 2009 Feb 10;19(3):R132-42. doi: 10.1016/j.cub.2008.12.005. PMID: 19211055.

[8]Lu M, Xing H, Xun Z, Yang T, Ding P, Cai C, Wang D, Zhao X. Exosome-based small RNA delivery: Progress and prospects. Asian J Pharm Sci. 2018 Jan;13(1):1-11. doi: 10.1016/j.ajps.2017.07.008. Epub 2017 Aug 9. PMID: 32104373; PMCID: PMC7032220.

[9]Subhan MA, Torchilin VP. siRNA based drug design, quality, delivery and clinical translation. Nanomedicine. 2020 Oct;29:102239. doi: 10.1016/j.nano.2020.102239. Epub 2020 Jun 13. PMID: 32544449.

[10]Wu, H., Fu, M., Liu, J. *et al.* The role and application of small extracellular vesicles in gastric cancer. *Mol Cancer* **20**, 71 (2021). https://doi.org/10.1186/s12943-021-01365-z

[11] Traish AM, Melcangi RC, Bortolato M, Garcia-Segura LM, Zitzmann M. Adverse effects of 5α-reductase inhibitors: What do we know, don't know, and need to know? Rev Endocr Metab Disord. 2015 Sep;16(3):177-98. doi: 10.1007/s11154-015-9319-y.

[12]Yun SI, Lee SK, Goh EA, Kwon OS, Choi W, Kim J, Lee MS, Choi SJ, Lim SS, Moon TK, Kim SH, Kyong K,Nam G, Park HO. Weekly treatment with SAMiRNA targeting the androgen receptor ameliorates androgenetic alopecia. Sci Rep. 2022 Jan 31;12(1):1607. doi: 10.1038/s41598-022-05544-w. Erratum in: Sci Rep. 2022 Apr 5;12(1):5675. PMID: 35102171; PMCID: PMC8803970.

[13] Xie Y, Chen D, Jiang K, Song L, Qian N, Du Y, Yang Y, Wang F, Chen T. Hair shaft miniaturization causes stem cell depletion through mechanosensory signals mediated by a Piezo1-calcium-TNF-α axis. Cell Stem Cell. 2022 Jan 6;29(1):70-85.e6. doi: 10.1016/j.stem.2021.09.009.

[14] Xie Y, Chen D, Jiang K, Song L, Qian N, Du Y, Yang Y, Wang F, Chen T. Hair shaft miniaturization causes stem cell depletion through mechanosensory signals mediated by a Piezo1-calcium-TNF-α axis. Cell Stem Cell. 2022 Jan 6;29(1):70-85.e6. doi: 10.1016/j.stem.2021.09.009.

[15] Corso G, Mäger I, Lee Y, Görgens A, Bultema J, Giebel B, Wood MJA, Nordin JZ, Andaloussi SE. Reproducible and scalable purification of extracellular vesicles using combined bind-elute and size exclusion chromatography. Sci Rep. 2017 Sep 14;7(1):11561. doi: 10.1038/s41598-017-10646-x.

[16] Coumans FAW, Brisson AR, Buzas EI, Dignat-George F, Drees EEE, El-Andaloussi S, Emanueli C, Gasecka A, Hendrix A, Hill AF, Lacroix R, Lee Y, van Leeuwen TG, Mackman N, Mäger I, Nolan JP, van der Pol E, Pegtel DM, Sahoo S, Siljander PRM, Sturk G, de Wever O, Nieuwland R. Methodological Guidelines to Study Extracellular Vesicles. Circ Res. 2017 May 12;120(10):1632-1648. doi: 10.1161/CIRCRESAHA.117.309417. PMID: 28495994.

[17] Kojima R, Bojar D, Rizzi G, Hamri GC, El-Baba MD, Saxena P, Ausländer S, Tan KR, Fussenegger M. Designer sEVs produced by implanted cells intracerebrally deliver therapeutic cargo for Parkinson's disease treatment. Nat Commun. 2018 Apr 3;9(1):1305. doi: 10.1038/s41467-018-03733-8. PMID: 29610454; PMCID: PMC5880805.

[18] Liang Y, Duan L, Lu J, Xia J. Engineering sEVs for targeted drug delivery. Theranostics. 2021 Jan 1;11(7):3183-3195. doi: 10.7150/thno.52570. PMID: 33537081; PMCID: PMC7847680.

[19] Notarangelo G, Haigis MC. Sweet Temptation: From Sugar Metabolism to Gene Regulation. Immunity. 2019 Dec 17;51(6):980-981. doi: 10.1016/j.immuni.2019.11.008. PMID: 31851904.

[20] Yerneni SS, Yalcintas EP, Smith JD, Averick S, Campbell PG, Ozdoganlar OB. Skin-targeted delivery of extracellular vesicle-encapsulated curcumin using dissolvable microneedle arrays. Acta Biomater. 2022 Jul 6:S1742-7061(22)00392-0. doi: 10.1016/j.actbio.2022.06.046. Epub ahead of print. PMID: 35809788.
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