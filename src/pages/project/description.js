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
# Description



## 1. Overview

Nowadays, due to constant pressure and irregular daily routines, alopecia has become an increasing challenge for people, which can be illustrated by the following visualization of data from the database. Through these outcomes (Fig.1) of “Share of people suffering from Alopecia by gender”, “Prevalence of alopecia by age” and “Percentage of Alopecia by severity, we gained a deeper understanding of the current situation of alopecia and concluded that there is a huge demand for solutions to alopecia. Among many types of alopecia, androgenetic alopecia (AGA) is the most common form of alopecia, whose prevalence is 80% in men and 50% in women, and more and more young people are receiving AGA[1]. Alopecia not only affects one’s appearance negatively but also causes mental problems such as anxiety and inferiority, posing threat to one’s relationship and career. Unlike the other type of hair loss, and baldness, there are no very effective medications for AGA. The only medications on the market for AGA are finasteride and minoxidil, both of which have the disadvantage of being unstable and having side effects. That’s why drug companies attach great importance to the development of new drugs for the treatment of androgenetic alopecia. There are currently about 1,000 privately and publicly funded clinical studies for the development of alopecia drugs worldwide (based on [Home – ClinicalTrials.gov](https://clinicaltrials.gov/)). This year, the NJU-CHINA iGEM Team focused on the treatment of androgenic alopecia, hoping to develop an “sEV + siRNA / mRNA” transdermal drug delivery system based on large-scale sEV extraction technology. This system could be further applied to the treatment of other skin diseases apart from AGA such as acne, which we have demonstrated through a series of experiments.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/gender.png" alt="img" style="width: 40%;" /></p>

<div class="desc"><b>Fig.1 Visualization of data of the “Share of people suffering from alopecia by gender”</b></div>

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/layout-1.jpg" alt="img" style="width: 100%;" /></p>

<div class="desc"><b>Fig.2 “Prevalence of alopecia by age” and “Percentage of Alopecia by degree”</b></div>



## 2. The mechanism of androgenic alopecia

As is shown in Fig.3, the basic mechanism is that excessive androgen or androgen receptor expression triggers downstream pathways that lead to hair follicle atrophy, hair thinning, and finally result in hair follicle necrosis. Dermal papillary cells (DP) in hair follicle cells play an important role in androgenic alopecia. Studies have shown that upon receipt of androgen by DP, some downstream pathways are activated to release cytokines that affect the growth of epidermal cells, finally influencing hair growth.[3] There are some essential factors in this process. 

5αR, or 5α-reductase, is a kind of reductase distributed in the cytoplasm of DP; testosterone is the main circulating androgen in the human body. 5αR converts testosterone into dihydrotestosterone, which has a strong androgen effect and binds to the androgen receptor, causing the increasing number of hair follicle stem cells to undergo apoptosis leading to the shrinkage of follicles.[4] 

Piezo1, a stress-activated ion channel on the surface of hair follicle stem cells, will be activated by the stress of follicles that is miniaturized by androgen, and cause Ca2+ influx, activating downstream caspase3 and inducing apoptosis.[5]

β-catenin is a necessary protein to activate Wnt downstream so that Wnt can promote cell proliferation and maintain the hair growth phase to combat androgenic alopecia. [6]

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/background.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.2 “Prevalence of alopecia by age” and “Percentage of Alopecia by degree”</b> (Created with BioRender.com)</div>



## 3. Current drugs and therapies for androgenic alopecia

At present, there are three main treatments for androgenic alopecia, namely finasteride, minoxidil, and hair transplant. [7]

Among them, finasteride can inhibit 5α-reductase and prevent the conversion of testosterone to dihydrotestosterone. Dihydrotestosterone (DHT), has a more damaging effect on hair follicle cells and is largely responsible for androgenic alopecia. Minoxidil mainly promotes dermal papillary cell survival and increases hair follicle size. Hair transplant, which involves the surgical transfer of hair follicles, has been shown to treat most alopecia.

However, these existing treatment methods have some shortcomings. 

As an inhibitor of 5αR, the oral drug finasteride [[AH1\]](#_msocom_1) can bring about sexual dysfunction. Because finasteride passes through the blood circulation of the whole body, it may inhibit the 5αR in other parts of the body and affect the normal function of the organism, such as erectile and ejaculatory dysfunction and loss of libido. In addition to sexual dysfunction, patients with post finasteride syndrome (PFS) also suffer from psychological discomfort. Other symptoms reported by PFS patients are a reduction in self-confidence, decreased initiative and difficulty in concentration, forgetfulness or loss of short-term memory, irritability, suicidal thoughts, anxiety, panic attack, and sleep problems. [10] These side effects can last for years and do not go away immediately after stopping the drug. At the same time, it is less effective in promoting hair growth. Finasteride stops hair loss in most men and results in partial regrowth in 66% of patients. And women are not recommended to use finasteride.

The exact molecular mechanism by which Minoxidil promotes hair growth remains unclear. It was originally an antihypertensive drug for the treatment of cardiovascular disease and was found to promote hair growth before it became a specialized drug for the treatment of AGA. So people with cardiovascular disease are not allowed to use minoxidil. Minoxidil has cutaneous adverse effects, with the most common complaints being scalp pruritus, scalp scaling, and hypertrichosis. Minoxidil treatment may be followed by a temporary shedding period at the beginning, which will cause severe hair loss, some patients do not want to go through this period, and some patients do not recover effectively after hair loss. Also, hypertrichosis is reported in about one-fifth of patients with minoxidil, and although this side effect is considered by some to be manageable, it still needs to be taken seriously.[11]

Both the two chemical drugs above have the disadvantages of unstable efficacy and more side effects.

Hair transplantation does not involve a net increase of new hair, but rather a redistribution of the patient’s existing hair from the donor zone to the recipient zone. Hair transplants can’t cure AGA, because AGA is a lifelong process and hair transplantation does not alter its progression. So the surgeon must plan the cosmetic distribution of transplanted hair so that it will always look natural.[12] In addition to the high demand for the surgeon’s skills, the expensive price and long treatment period are also disadvantages of hair transplantation.

Thus, based on the current drugs and therapies for androgenic alopecia, we attempt to use RNAi therapy to solve the above dilemma. 



## 4. Our targeted therapy by “sEV + siRNA / mRNA” transdermal drug delivery system

The RNA interference (RNAi) pathway regulates mRNA stability and translation in nearly all human cells. Small double-stranded RNA molecules can efficiently trigger RNAi silencing of specific genes. For drug developers, the potency and versatility of siRNAs, the prospect of suppressing genes encoding proteins that are ‘undruggable’ by classical small molecules and the potential for ‘programmable’ drugs that can be re-targeted without changing in vivo pharmacokinetics proved too enticing to ignore. August 2018 marked a new era for the field, with the US Food and Drug Administration approving Patisiran, the first RNAi-based drug. The drug is for the treatment of hereditary transthyretin amyloidosis (hATTR) with polyneuropathy.[13] However, the main target organ of the current delivery methods is the liver, and the biological toxicity is high. So, it is important to further develop metabolically stabilized RNAi triggers and conjugated ligands that can efficiently deliver siRNA to an increasing number of extrahepatic tissues with high biocompatibility and low toxicity. SEVs are secreted by cells and can encapsulate RNA and maintain their biological activity. Owning to its high biocompatibility and great internal transport range, we choose it as the ideal siRNA/mRNA delivery carrier.

Because of the overexpressed 5αR in androgenic alopecia, we chose to **use siRNA to inhibit 5αR gene expression**, thereby attenuating androgenic alopecia without blocking the androgen's normal course of action. What’s more, according to the literature, the activation of piezo1 causes apoptosis, so we also chose to **use siRNA to inhibit the Piezo1 **gene to treat androgenic alopecia by reducing the apoptosis of hair follicle cells.

 To promote the proliferation of follicles, we initially planned to up-regulate β-catenin by encapsulating mRNA in sEVs for delivery. Unfortunately, due to the high molecular weight of mRNA, it is difficult to be encapsulated into sEVs. However, studies have shown that **L7Ae can be used to transport mRNA to CD63 on the sEVs’ membrane, so we plan to achieve the packaging and delivery of β-catenin mRNA in this way.**

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/mechanism-of-si-and-mr.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.4 Molecular mechanisms for the treatment of AGA</b> (Created with BioRender.com)</div>



Despite the above traditional methods of targeting and delivery by sEVs, we also made many creative points and suitable modifications according to our Human Practices (HP) research to ensure our project addresses societal needs. For this purpose, we extensively interviewed professors, doctors, and experts in related fields, and finally improved our current design. For detailed records, please visit our Human Practices page.

Firstly, due to the limitation of sEV extraction technology, there are still problems such as low purity and low yield, which also lead to the high price and difficult marketing of sEV-based drugs. Therefore, our team found a large-scale purification techn named **Tangential Flow Filtration and Bind-elute size exclusion Chromatography (TFF/BE-SEC)** to overcome the yield problem.[9]

Also, we transformed the delivery method from topical application to microneedle injection. In the final scenario, sEVs will be delivered through the skin via microneedles to further improve the effectiveness of the drug. [8] 



## 5. Experimental results show a promising future for our project

To demonstrate the efficacy of our project, we conducted a series of experiments *in vitro* and gained convincing data and results to verify the effectiveness and safety of our project. For detailed information, please go to [**Results**]([NJU-China/Project - 2022.igem.wiki](https://2022.igem.wiki/nju-china/project/result/)).



**Reference:**

[1] B M Piraccini, A Alessandrini (2014) Androgenetic alopecia. Minerva Medica 149(1):15-24.

[2] Ahmad M. Al Aboud, Patrick M. Zito (2022) Alopecia StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2022 Jan.2022 Apr 30.

[3] Dhurat R, Sukesh M, Avhad G, Dandale A, Pal A, Pund P. A randomized evaluator blinded study of the effect of microneedling in androgenetic alopecia: a pilot study. Int J Trichology. 2013 Jan;5(1):6-11. doi: 10.4103/0974-7753.114700. PMID: 23960389; PMCID: PMC3746236.

[4] Azzouni F, Zeitouni N, Mohler J. Role of 5α-reductase inhibitors in androgen-stimulated skin disorders. J Drugs Dermatol. 2013 Feb;12(2):e30-5. PMID: 23377402.

[5] Xie Y, Chen D, Jiang K, Song L, Qian N, Du Y, Yang Y, Wang F, Chen T. Hair shaft miniaturization causes stem cell depletion through mechanosensory signals mediated by a Piezo1-calcium-TNF-α axis. Cell Stem Cell. 2022 Jan 6;29(1):70-85.e6. doi: 10.1016/j.stem.2021.09.009. Epub 2021 Oct 7. PMID: 34624205.

[6] Choi BY. Targeting Wnt/β-Catenin Pathway for Developing Therapies for Hair Loss. Int J Mol Sci. 2020 Jul 12;21(14):4915. doi: 10.3390/ijms21144915. PMID: 32664659; PMCID: PMC7404278.

[7] Lee SW, Juhasz M, Mobasher P, Ekelem C, Mesinkovska NA. A Systematic Review of Topical Finasteride in the Treatment of Androgenetic Alopecia in Men and Women. J Drugs Dermatol. 2018 Apr 1;17(4):457-463. PMID: 29601622; PMCID: PMC6609098.

[8] Ahmed Saeed Al-Japairai K, Mahmood S, Hamed Almurisi S, Reddy Venugopal J, Rebhi Hilles A, Azuma M, Raman S. Current trends in polymer microneedle for transdermal drug delivery. Int J Pharm. 2020 Sep 25;587:119673. doi: 10.1016/j.ijpharm.2020.119673. Epub 2020 Jul 30. PMID: 32739388; PMCID: PMC7392082.

[9] Corso G, Mäger I, Lee Y, Görgens A, Bultema J, Giebel B, Wood MJA, Nordin JZ, Andaloussi SE. Reproducible and scalable purification of extracellular vesicles using combined bind-elute and size exclusion chromatography. Sci Rep. 2017 Sep 14;7(1):11561. doi: 10.1038/s41598-017-10646-x.

[10] Traish AM, Melcangi RC, Bortolato M, Garcia-Segura LM, Zitzmann M. Adverse effects of 5α-reductase inhibitors: What do we know, don't know, and need to know? Rev Endocr Metab Disord. 2015 Sep;16(3):177-98. doi: 10.1007/s11154-015-9319-y. PMID: 26296373.

[11] Randolph M, Tosti A. Oral minoxidil treatment for hair loss: A review of efficacy and safety. J Am Acad Dermatol. 2021 Mar;84(3):737-746. doi: 10.1016/j.jaad.2020.06.1009. Epub 2020 Jul 2. PMID: 32622136.

[12] Jimenez F, Alam M, Vogel JE, Avram M. Hair transplantation: A basic overview. J Am Acad Dermatol. 2021 Oct;85(4):803-814. doi: 10.1016/j.jaad.2021.03.124. Epub 2021 Apr 24. PMID: 33905785.

[13] Setten RL, Rossi JJ, Han SP. The current state and future directions of RNAi-based therapeutics. Nat Rev Drug Discov. 2019 Jun;18(6):421-446. doi: 10.1038/s41573-019-0017-4. Erratum in: Nat Rev Drug Discov. 2019 Mar 18; Erratum in Nat Rev Drug Discov. 2019 Apr 24;: PMID: 30846871.
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