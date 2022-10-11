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



According to literature, inhibition of 5α-reductase (5αR) can reduce testosterone’s conversion to dihydrotestosterone (DHT). Excess DHT shortens anagen and causes hair follicles to enter catagen in advance, resulting in hair loss. [1] When activated by mechanosensory signals, Piezo1 can cause hair follicle stem cells (HFSC) depletion, which is often observed in AGA. [2]Wnt/β-catenin signaling pathway is associated with hair regeneration.[3]

Therefore, we designed and constructed 14 plasmids, namely **pcDNA3.1–siRNA(5αR)(1~6)-mCherry, pcDNA3.1–siRNA(Piezo1)(1~6)-mCherry, pcDNA3.1-Box CD mini-mRNA (β-catenin)-mCherry and pcDNA3.1-L7Ae-G8Linker-CD63-mCherry**. For siRNA encoding plasmids, we transfected them into RM-1 cells to test their efficacy. Then we transfected the most efficient into 293T cells to gain therapeutic sEVs. 

Theoretically, these therapeutic sEVs can reach damaged follicles and release the contained siRNA (5αR), siRNA (Piezo1), and mRNA (β-catenin). Then DHT will be dramatically decreased and the activation of Piezo1 will be cut off. β-catenin will activate the Wnt pathway to promote the proliferation of follicles. 

With the above three strategies, the mice with androgenic alopecia will grow more pristine hair or grow hair faster compared to those suffering from androgenic alopecia but without injection of sEVs.

Besides, to facilitate the translational application of our project, we adopted a scalable sEV purification method—tangential flow and bind-elute size exclusion chromatography (TFF/BE-SEC). After comparing it with conventional methods (UC and EIK), we demonstrated TFF/BE-SEC is the most advantageous one.



![img](https://static.igem.wiki/teams/4173/wiki/project/design.png)

<div class="desc"><b>1 Overall project design</b> (Created with BioRender.com)</div>



## 2. sEVs with RNA interference

RNA interference (RNAi) is an emerging expression regulation mechanism that enables cells to suppress the expression of specific genes through highly conserved, highly specific, degradation of homologous mRNAs induced by double-stranded RNA during evolution. [1] This mechanism can also be used for artificial gene regulation. With this in mind, this year’s NJU-CHINA iGEM Team used siRNA to bind 5αR and Piezo1 to down-regulate its expression to suppress alopecia.

SEVs are a kind of extracellular vesicle, which are wrapped by a phospholipid bilayer and contain a variety of RNA, protein, and other substances. SEVs play a very important role in intercellular communication. After being taken up and combined by target cells, the released substances can participate in many aspects of the body's immune response, cell migration, cell differentiation, tumor invasion, and so on. Because sEVs can encapsulate RNA and maintain their biological activity, and sEVs are secreted by cells, owing to their high biocompatibility, they can become ideal drug delivery carriers, providing a new thought to the field of biopharmaceuticals.



## 3. Mechanism of androgenic alopecia

Hair follicles are mainly composed of five kinds of cells: hair follicle stem cells, hair follicle cells, muscle cells, fibroblasts, and epidermal cells.[2] Dermal papillary cells (DP) in hair follicle cells play an important role in androgenic alopecia. Studies have shown that upon receipt of androgens by DP, some downstream pathways are activated to release cytokines that affect the growth of epidermal cells, finally influencing hair growth. DP in different parts of the body produces different cytokines after receiving androgens, while DP in the scalp, when stimulated by androgens, produces cytokines that inhibit hair growth, leading to hair follicle shrinkage and ultimately hair loss.[3]

The growth cycle of hair is divided into three periods: the growth period, the degeneration period, and the resting period. Hair length is determined by the duration of the growth phase.[4] The androgen-stimulated DP in the scalp can secrete some cytokines that promote hair transition from the growth phase to the degeneration phase, leading to the formation of hair loss. 

![img](https://static.igem.wiki/teams/4173/wiki/project/skin-structure.png)

<div class="desc"><b>2 Diagram of skin structure</b> [2]</div>

![img](https://static.igem.wiki/teams/4173/wiki/project/hair-follicle.png)

<div class="desc"><b>3 Histomorphology of the hair follicle</b> [12]</div>

![img](https://static.igem.wiki/teams/4173/wiki/project/background.png)

<div class="desc"><b>4 Mechanism of androgen alopecia</b> (Created with BioRender.com)</div>



## 4. The selection of our targets

### 4.1 We chose to down-regulate 5αR

Firstly, 5αR, or 5α-reductase, is a kind of reductase distributed in the cytoplasm of DP. Testosterone is the main circulating androgen in the human body. 5αR converts testosterone into dihydrotestosterone, which has a strong androgen effect and binds to the androgen receptor. [5] The effect of androgen on hair follicles depends mainly on the follicle's utilization rate of testosterone. Studies have shown that patients with androgenic alopecia have higher androgen levels in the hair follicle than those without hair loss while circulating androgen levels are normal in both cases. It is also reported that the main cause of androgenic alopecia is the overexpression of 5αR and androgen receptors. Therefore, we chose to use siRNA to inhibit 5αR gene expression, thereby attenuating androgenic alopecia without blocking androgen's normal action.

![img](https://static.igem.wiki/teams/4173/wiki/project/testosterone.png)

<div class="desc"><b>5 Metabolic pathway of testosterone</b> [5]</div>



### 4.2 We chose to down-regulate Piezo1

Secondly, Piezo1 is a stress-activated ion channel on the surface of hair follicle stem cells. When the hair follicle is miniaturized by androgen, the hair follicle stem cells will be squeezed by stress, and Piezo1 will be activated, which will cause Ca2+ influx, activating downstream caspase3 and inducing apoptosis. The researchers engineered Piezo1-deficient mice and found that the Piezo1-deficient mice had significantly less hair follicle cell apoptosis than normal mice, with no other side effects. [6] Therefore, we also chose to use siRNA to inhibit the Piezo1 gene to treat androgenic alopecia by reducing the apoptosis of hair follicle cells.

![img](https://static.igem.wiki/teams/4173/wiki/project/piezo1.png)

<div class="desc"><b>6 Piezo1’s role in hair cycle</b> [6]</div>



### 4.3 We utilized L7Ae-C/Dbox interaction to load β-catenin mRNA in sEVs

Thirdly, Wnt is a classical gene that promotes cell proliferation, and studies have shown that the Wnt gene pathway plays an important role in the maintenance of the hair growth phase. Among them, β-catenin is a necessary protein to activate the downstream *wnt* gene pathway. Unfortunately, due to the high molecular weight of mRNA, it is difficult to be encapsulated into sEVs. However, studies have shown that L7ae can be used to transport mRNA to CD63 on the exosomal membrane,[7] so we plan to achieve the packaging and delivery of β-catenin mRNA in this way.

![img](https://static.igem.wiki/teams/4173/wiki/project/l7ae.png)

<div class="desc"><b>7 Mechanism of using sEVs to deliver mRNA [13]**



## 5. sEVs’ Large-scale purification technique -TFF/BE-SEC

The purification of sEVs is a challenging endeavor due to their small size. Currently, a plethora of different isolation methods have been described but a standardized method is still missing.[14] And almost every common methods have drawbacks in yield and purity, causing it’s not suitable for the clinical setting. We found new purification techniques —— Tangential Flow Filtration and Bind-elute size exclusion Chromatography (TFF/BE-SEC), and compared them with the two commonly used methods (Differential Centrifugation and Precipitation with Ultrafiltration), proving TFF/BE-SEC has irreplaceable advantages in yield, purity, and stability. 

### 5.1 Common sEVs isolation methods

**Ultracentrifugation (UC)** is the most popular method of sEVs isolation, as indicated by its use in a large number of studies. It is based on EVs’ size and density by sequentially increasing the centrifugal force to pellet cells and debris (<1500g), large EVs (10 000–20 000g), and small EVs (sEVs) (100 000–200 000g).[15] But it not only may result in clumping of sEVs, isolate non-EV components such as protein aggregates and viruses, and damage sEVs during the final ultracentrifugation step but also has unstable recovery between studies. 

**Density gradient centrifugation (DGC)** depends on the size and mass density (top-down gradient) or mass density only (bottom-up gradient) of EVs. Sucrose and iodixanol are the most commonly used density media used in isolation. It can extract the purest EVs among all methods now but with very low throughput. And it is very time-consuming.

**Exosome isolation kit (EIK)**’s base principle is immunocapture assays. Immunocapture assays use monoclonal antibodies immobilized on a surface, for example, a plate, bead, or chip to capture EVs that expose a specific ligand. We use Total SEV Isolation Reagent (from cell culture media) (from Invitrogen) to pull out sEVs by Dynabeads™ magnetic separation technology. However, the cell culture conditioned medium has a large volume and a low content of sEVs, so we usually need to concentrate the volume by ultrafiltration before using the reagent.

DC is easy to use and widely available yet does not isolate pure EV. DGC isolates highly purified EVs but has a low recovery. Immunocapture assay with ultrafiltration is easy to use but very time-consuming with low purity.

![img](https://static.igem.wiki/teams/4173/wiki/project/sevs-isolation-method.png)

<div class="desc"><b>8 Working principle of different methods to isolate EVs</b> [15]</div>



### 5.2 Tangential Flow Filtration and Bind-elute size exclusion Chromatography (TFF/BE-SEC)

Traditional SEC enables size-based separation on a single column, with the majority of EVs eluting before soluble components such as proteins and HDL. SEC removes 99% of the soluble plasma proteins and >95% of HDL from the purest fraction of EVs, does not induce aggregation of EVs, and retains the integrity and biological activity of EVs.[15] In our project, we use new a new type of column packing, named Capto Core 700 (from Cytiva), to implement an improved SEC, Bind-elute size exclusion Chromatography (BE-SEC). It combines both size separation with bind-elute chromatography where large molecules bypass these beads while molecules smaller than 700 kDa penetrate the inert outer shell and bind to hydrophobic and positively charged octylamine ligands within the core.[14] To reduce the risk of loading the BE-SEC column with an excessive amount of impurities that would exceed its binding ability (13 mg of ovalbumin/ml of medium) and increase the loading volume, the samples were diafiltrated and concentrated using Tangential Flow Filtration (TFF). We chose 100kDa TFF filters for the concentration and diafiltration step. Therefore, TFF/BE-SEC not only guarantees the purity of sEVs but also achieves large-scale isolation. 

![img](https://static.igem.wiki/teams/4173/wiki/project/exo-extraction.png)

<div class="desc"><b>9 Technical flow chart of sEVs isolation using three methods (UC, KIT, and TFF/BE-SEC)</b> (Created with BioRender.com)</div>



## 6. Advantages of our project

Low toxic and immunogenic drugs, safe gene “switch” and large-scale purification of sEVs all constitute the advantages of our product. SEVs are released from MVBs, which contain multiple vesicles generated through exocytic fusion with the cell membrane.[10] After being transported through body fluids, sEVs can directly fuse with the plasma membrane, and can also be taken up through phagocytosis, micropinocytosis, and endocytosis mediated by lipid raft, caveolin, or clathrin. Compared to existing transdermal drugs, they have low toxicity and low immunogenic, because they are from cells. Compared with current drugs, RNAi is not only safer for it degrades soon after release by sEVs, but also more flexible since it can target different genes according to the design.[8] At the same time, the biocompatibility of sEVs can maintain high drug stability as well as fewer side effects. In addition, we want to provide a more convenient way of drug delivery. In the final scenario, sEVs will be purified by TFF/BE-SEC, which can increase yield while maintaining high purity, and delivered through the skin via microneedles to further improve the effectiveness of drugs. Given the effectiveness and application flexibility, sEV drug delivery can hopefully become a highly efficient and general treatment in the future. Due to its potential, we hope that we can get it through drug research, developing an "sEV + siRNA / mRNA" transdermal drug delivery system. [9]



## 7. Future experimental plan:

Firstly, we will design and construct 2 plasmids, namely pcDNA3.1 - siRNA (5αR) - siRNA (Piezo1) – GAPDH and pcDNA3.1 - Box CD mini - mRNA (β-catenin) – L7Ae -G8Linker- CD63. From the investigation of HP, we learned that MSC exosomes of subcutaneous fat origin have a hair growth-promoting effect. So to improve the therapeutic effect of the drug, we will use lentiviruses and MSC to construct stably transfected cell lines[[AH1\]](#_msocom_1) that can secret specific sEVs. To verify the efficacy of our therapy, we will inject the sEVs with 5αR-siRNA, peizo1-siRNA, and β-catenin mRNA into the mice with microneedles into subcutaneous follicles. It’s expected to reach damaged follicles and release the contained siRNA (5αR), siRNA (Piezo1), and mRNA (β-catenin). Then the DHT will be dramatically decreased and the downstream activation of Piezo1 will be cut off. The β-catenin will then activate the Wnt pathway for the proliferation of follicles. With the above three treatments, the mice with androgenic alopecia will grow more pristine hair or grow hair faster compared with those suffering from androgenic alopecia but without injection of sEVs.



**References****:**

[1] Setten RL, Rossi JJ, Han SP. The current state and future directions of RNAi-based therapeutics. Nat Rev Drug Discov. 2019 Jun;18(6):421-446. doi: 10.1038/s41573-019-0017-4.

[2] Souci L, Denesvre C. 3D skin models in domestic animals. Vet Res. 2021 Feb 15;52(1):21. doi: 10.1186/s13567-020-00888-5.

[3] Schneider MR, Schmidt-Ullrich R, Paus R. The hair follicle as a dynamic miniorgan. Curr Biol. 2009 Feb 10;19(3):R132-42. doi: 10.1016/j.cub.2008.12.005. PMID: 19211055.

[4] Stenn KS, Paus R. Controls of hair follicle cycling. Physiol Rev. 2001 Jan;81(1):449-494. doi: 10.1152/physrev.2001.81.1.449.

[5] Traish AM, Melcangi RC, Bortolato M, Garcia-Segura LM, Zitzmann M. Adverse effects of 5α-reductase inhibitors: What do we know, don't know, and need to know? Rev Endocr Metab Disord. 2015 Sep;16(3):177-98. doi: 10.1007/s11154-015-9319-y.

[6] Xie Y, Chen D, Jiang K, Song L, Qian N, Du Y, Yang Y, Wang F, Chen T. Hair shaft miniaturization causes stem cell depletion through mechanosensory signals mediated by a Piezo1-calcium-TNF-α axis. Cell Stem Cell. 2022 Jan 6;29(1):70-85.e6. doi: 10.1016/j.stem.2021.09.009.

[7] Xie Y, Chen D, Jiang K, Song L, Qian N, Du Y, Yang Y, Wang F, Chen T. Hair shaft miniaturization causes stem cell depletion through mechanosensory signals mediated by a Piezo1-calcium-TNF-α axis. Cell Stem Cell. 2022 Jan 6;29(1):70-85.e6. doi: 10.1016/j.stem.2021.09.009.

[8] Notarangelo G, Haigis MC. Sweet Temptation: From Sugar Metabolism to Gene Regulation. Immunity. 2019 Dec 17;51(6):980-981. doi: 10.1016/j.immuni.2019.11.008. PMID: 31851904.

[9] Yerneni SS, Yalcintas EP, Smith JD, Averick S, Campbell PG, Ozdoganlar OB. Skin-targeted delivery of extracellular vesicle-encapsulated curcumin using dissolvable microneedle arrays. Acta Biomater. 2022 Jul 6:S1742-7061(22)00392-0. doi: 10.1016/j.actbio.2022.06.046. Epub ahead of print. PMID: 35809788.

[10] Liang Y, Duan L, Lu J, Xia J. Engineering sEVs for targeted drug delivery. Theranostics. 2021 Jan 1;11(7):3183-3195. doi: 10.7150/thno.52570. PMID: 33537081; PMCID: PMC7847680.

[12] Schneider MR, Schmidt-Ullrich R, Paus R. The hair follicle as a dynamic miniorgan. Curr Biol. 2009 Feb 10;19(3):R132-42. doi: 10.1016/j.cub.2008.12.005. PMID: 19211055.

[13] Kojima R, Bojar D, Rizzi G, Hamri GC, El-Baba MD, Saxena P, Ausländer S, Tan KR, Fussenegger M. Designer sEVs produced by implanted cells intracerebrally deliver therapeutic cargo for Parkinson's disease treatment. Nat Commun. 2018 Apr 3;9(1):1305. doi: 10.1038/s41467-018-03733-8. PMID: 29610454; PMCID: PMC5880805.

[14] Corso G, Mäger I, Lee Y, Görgens A, Bultema J, Giebel B, Wood MJA, Nordin JZ, Andaloussi SE. Reproducible and scalable purification of extracellular vesicles using combined bind-elute and size exclusion chromatography. Sci Rep. 2017 Sep 14;7(1):11561. doi: 10.1038/s41598-017-10646-x.

[15] Coumans FAW, Brisson AR, Buzas EI, Dignat-George F, Drees EEE, El-Andaloussi S, Emanueli C, Gasecka A, Hendrix A, Hill AF, Lacroix R, Lee Y, van Leeuwen TG, Mackman N, Mäger I, Nolan JP, van der Pol E, Pegtel DM, Sahoo S, Siljander PRM, Sturk G, de Wever O, Nieuwland R. Methodological Guidelines to Study Extracellular Vesicles. Circ Res. 2017 May 12;120(10):1632-1648. doi: 10.1161/CIRCRESAHA.117.309417. PMID: 28495994.
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