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
# Proof of Concept

## 1. Project design

It has been shown in the literature that inhibition of 5α-reductase (5αR) can reduce testosterone’s conversion to dihydrotestosterone (DHT). Excess DHT shortens anagen and causes hair follicles to enter catagen in advance, resulting in hair loss. [1] When activated by mechanosensory signals, Piezo1 can cause hair follicle stem cells (HFSC) depletion, which is often observed in AGA. [2] Wnt/β-catenin signaling pathway is associated with hair regeneration.[3] 

Therefore, we designed and constructed 14 plasmids, namely pcDNA3.1–siRNA(5αR)(1-6)-mCherry, pcDNA3.1–siRNA(Piezo1)(1-6)-mCherry, pcDNA3.1-Box CD mini-beta catenin-mCherry and pcDNA3.1-CD63-L7Ae-mCherry. For siRNA encoding plasmids, we transfected them into RM-1 cells to test their efficacy. Then we transfected the most efficient into 293T cells to gain therapeutic sEVs. 

Theoretically, these therapeutic sEVs can reach damaged follicles and release the contained 5αR-siRNA, Piezo1-siRNA, and mRNA (β-catenin). Then DHT will be dramatically decreased and the activation of Piezo1 will be cut off. β-catenin will activate the Wnt pathway to promote the proliferation of follicles. 

With the above three strategies, hair growth can be promoted.

Besides, to facilitate the translational application of our project, we adopted a scalable sEV purification method—tangential flow filtration and bind-elute size exclusion chromatography (TFF/BE-SEC). After comparing it with conventional methods (UC and EIK), we demonstrated TFF/BE-SEC is the most advantageous one.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/design.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.1 Project design</b> (Created with BioRender.com)</div>



## 2. Technical Feasibility



### 2.1 SiRNAs can knock down 5αR and Piezo1

#### 2.1.1 **siRNA candidates**

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



#### 2.1.2 Screen the most effective 5αR-siRNA

We respectively transfected plasmids of 5αR-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that siRNA-5αR-1 was effective and could reduce the expression of 5αR mRNA by nearly 80 percent. This result indicates that our siRNA can successfully knock down the expression of 5αR.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/sirna-5ar-qpcr.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.2 Analysis of the inhibitory effect of different siRNAs on 5αR by RT-qPCR.</b> RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,2,3,4,5,6). Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of 5αR mRNA.</div>

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/wb-5ar-sirna.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.3 Analysis of the inhibitory effect of different siRNAs on 5αR by WB.</b> RM-1 cells were transfected with 5αR-siRNA-expressing plasmids (5αR-siRNA-1,4,5,6) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-5αR and anti-GAPDH antibodies (equal GAPDH band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative 5αR protein expression level.</div>



#### 2.1.3 Screen the most effective Piezo1-siRNA

We respectively transfected plasmids of Piezo1-siRNA into RM-1. Then we conducted RT-qPCR utilizing total cellular RNA and performed WB using total proteins. Finally, we found that Piezo1-siRNA-5 was the most effective and could reduce the expression of Pizeo1 mRNA by nearly 70 percent. This result indicated that our siRNA can successfully knock down the expression of Piezo1.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/sirna-piezo1-qpcr.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.4 Analysis of the inhibitory effect of different siRNAs on Piezo1 by RT-qPCR.</b> RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-1,2,3,4,5,6) or empty plasmid. Total RNA was harvested 30h later. Quantitative RT-PCR was used to analyze relative expression level of Piezo1 mRNA.</div>

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/wb-piezo1-sirna.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.5 Analysis of the inhibitory effect of different siRNAs on Piezo1 by WB.</b> RM-1 cells were transfected with Piezo1-siRNA-expressing plasmids (Piezo1-siRNA-4,5) or empty plasmid (NC). Total protein was harvested 36h later for western blotting with anti-Piezo1 and anti-Tubulin antibodies (equal Tubulin band densities indicate similar protein levels). The grayscale analysis of WB results by ImageJ visualizes relative Piezo1 protein expression level.</div>



#### 2.1.4 Verify the presence of siRNA in sEVs

After screening out the effective siRNAs (5αR-siRNA-1 and Piezo1-siRNA-5), we transfected the corresponding plasmids into HEK-293T and purified sEVs from cell culture medium. Then we conducted RT-qPCR utilizing total RNAs of the specific sEVs and proved that the sEVs do have the siRNAs we need. 

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/sevs-sirna.png" alt="img" style="width: 80%;" /></p>

<div class="desc"><b>Fig.6 Analysis of relative siRNAs expression level in sEVs by RT-qPCR.</b> HEK-293T cells were co-transfected with 5αR-siRNA-1-expressing plasmids and Piezo1-siRNA-5-expressing plasmids. SEVs were purified 36h later and sEVs’ total RNA was harvested for quantitative RT-PCR to analyze the relative expression level of 5αR-siRNA-1 or Piezo1-siRNA-5.</div>



### 2.2 mRNA-β-catenin can be embedded into sEVs

#### 2.2.1 Design the plasmids

After reading the literature [2,3], we found the required nucleotide sequences on NCBI and inserted them into pcDNA3.1-mCherry to construct the plasmids (pcDNA3.1-box CD mini-β catenin-mCherry and pcDNA3.1-L7Ae-G8Linker-CD63-mCherry). 



#### 2.2.2 Verify whether plasmid can express β-catenin

The plasmid pcDNA3.1-box CD mini-β catenin-mCherry was transfected into HEK-293T, and the total cellular RNAs were used for RT-qPCR to verify the expression level of β-catenin mRNA. The result indicated that our plasmid could express β-catenin.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/beta-catenin-expression-in-293t-qpcr.png" alt="img" style="width: 40%;" /></p>

<div class="desc"><b>Fig.7 Analysis of relative mRNA-β-catenin expression level by RT-qPCR.</b> HEK-293T was transfected with C/Dbox-mRNA-β-catenin-expressing plasmids (β-catenin) and empty plasmids (NC). Total RNA was harvested 30h later for quantitative RT-PCR to analyze the relative expression level of mRNA-β-catenin. </div>



#### 2.2.3 Verifying whether mRNA-β-catenin can be embedded in sEVs

We co-transfected the two plasmids (pcDNA3.1-box CD mini-β catenin-mCherry and pcDNA3.1-CD63-L7Ae-mCherry) into HEK-293T and collected sEVs from cell culture medium. The total RNA of the specific sEVs was extracted for RT-qPCR to detect mRNA-β-catenin. The result demonstrated that our approach of wrapping mRNA-β-catenin into sEVs is feasible.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/mrna-beta-in-sevs.png" alt="img" style="width: 40%;" /></p>

<div class="desc"><b>Fig.8 Analysis of relative mRNA-β-catenin expression level in sEVs.</b> HEK-293T was co-transfected with C/Dbox-mRNA-β-catenin-expressing plasmids and CD63-L7Ae-expressing plasmids (β-catenin). Cell culture medium was collected 36h later for sEVs purification and their total RNA was harvested for quantitative RT-PCR. </div>







### 2.3 Validate the feasibility of large-scale extraction technique

We comprehensively evaluated the EV yields and sample purities of three most popular EV separation methods, ultracentrifugation, commercial sEV isolation kit, and tangential flow filtration combined with bind-elute size exclusion chromatography (BE-SEC) in cell culture medium. 

Namely, we performed particle size analysis of sEVs using NanoSight. To assess the purity of the sEVs, we counted the number of particles per microgram of protein. The most common impurities in sEVs extraction are soluble proteins outside the vesicles, so the number of particles per microgram of protein can reflect the purity of sEVs. The results showed that the particle size of sEVs extracted by TFF/BE-SEC is mostly concentrated within 50-200 nm, with the highest number of particles per microgram protein and the highest surface marker abundance, indicating the highest purity. Meanwhile, TFF/BE-SEC can extract sEVs from at least 200 ml cell culture media each time, while UC and EIK take longer or even require multiple experiments to process the same amount of culture media. In summary, TFF/BE-SEC is the best method for the large-scale purification of sEVs.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/compare-three-isolation-methods.png" alt="img" style="width: 100%;" /></p>

<div class="desc"><b>Fig.9 Characterization of sEVs extracted by three methods.</b> Cell culture medium of HEK-293T was harvested and sEVs were purified by three methods (UC, EIK and TFF/BE-SEC). <b>A:</b> Size distribution of sEVs extracted by three methods determined by NTA. <b>B:</b> Analysis of total protein of sEVs extracted by three methods by BCA. <b>C:</b> Number of particles per microgram of protein for sEVs isolated by the three methods. <b>D:</b> Western blot analysis of sEVs’ surface markers (CD9, CD63 and TSG101). An equal amount of total protein was loaded in each lane. </div>



We noted that the flow through collected from BE-SEC column could be divided into three parts. To further investigate which part contains sEVs with the highest purity, we collected them respectively for downstream analysis. As indicated in Fig.10, sEVs from Period 2 are the purest.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/different-period-of-be-sec.png" alt="img" style="width: 100%;" /></p>

<div class="desc"><b>Fig.10 Characterization of sEVs collected from piecewise BE-SEC.</b> Cell culture medium of HEK-293T was harvested and sEVs were purified by TFF/BE-SEC immediately. <b>A:</b> The process picture obtained when purifying sEVs by BE-SEC. The purple line is UV280, which divided the whole flow through into three sections. <b>B:</b> Size distribution of extracellular vesicles from each of the three sections determined by NTA. <b>C:</b> Number of particles per section as a percentage of the total number of particles. <b>D:</b> Western blot analysis of sEVs’ surface markers (CD9, CD63 and TSG101). An equal amount of total protein was loaded in each lane.</div>



### 2.4 Our therapeutic sEVs can inhibit the apoptosis of DPC induced by TP

We expected to prove that our therapeutic sEVs (which load with 5αR-siRNA-1, Piezo1-siRNA-5, and mRNA-β-catenin) can inhibit apoptosis of DPC in the presence of androgen. Thus, we added testosterone propionate (TP) to the cell culture medium and co-cultured therapeutic sEVs with DPC for 30h. Then the apoptotic status of DPC was detected using Annexin V-FITC Apoptosis Detection Kit (from Beyoncé) by flow cytometry. As shown in Fig.11, TP can induce apoptosis, but apoptosis was significantly inhibited after the addition of sEVs. These findings indicated that our sEVs can be used as a treatment option and may have therapeutic implications for patients with AGA.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/apoptosis-detection.png" alt="img" style="width: 90%;" /></p>

<div class="desc"><b>Fig.11 Cell fractionation by flow cytometry.</b> FACS-recorded apoptosis in DPC after different treatment. The cells were stained with Annexin V-FITC and PI. </div>



## 3. Purchasing power analysis

### 3.1 Model ideas

In order to conduct a market evaluation of our products, and to see if the public can afford our product's price, we collected economic data from different statistical websites and conducted consumption analysis in three different countries, which shows that people could afford our products with little burden.

### 3.2 China

As a developing country, China has been struggling for eliminating poverty and we miraculously achieved the moderate prosperity under the circumstances of the COVID-19 pandemic. The Per Capita Disposable Income and CPI(Consumer Price Index, CPI in 1978 equals 100) in last 10 years were listed as below:

 ![img](https://static.igem.wiki/teams/4173/wiki/project/income-cpi.png)

The CPI(Last Year=100) and the growth rate of Per Capita Disposable Income are as below:

![img](https://static.igem.wiki/teams/4173/wiki/project/cpi.png)

![img](https://static.igem.wiki/teams/4173/wiki/project/growth-rate-of-per-capita-disposable-income.png)

It is clear that the growth rate of Per Capita Disposable Income has been much higher than of CPI over the last 10 years(except 2020), which means that Chinese economic growth has been accompanied by spreading wealth.

As Professor Jingyi Yuan and Bingsheng Li (Bilibili) mentioned, basic medicine for alopecia cost 150~200 yuan per month, while a surgery for transplanting hair may cost at least 20,000 yuan.

We use the following equation to calculate the minimum annual income that would guarantee that medical expenses would not exceed 40% of the ability to pay:

\`\`\`
ME/(Di-En\*Di)<40%
\`\`\`

Where ME refers to actual medical expenditure, Di refers to disposable income and En refers to Engel's coefficient. The value of Engel coefficient is

 ![img](https://static.igem.wiki/teams/4173/wiki/project/engel-coefficient.png)

Obviously, basic medicine is totally affordable for most urban and rural residents. However, when it comes to a hair-transplanting surgery, the value is like this[ME=20,000 in 2021. Besides, ME in each year equals the ME next year divides CPI(Last Year=100) then multiplies 100]:

![img](https://static.igem.wiki/teams/4173/wiki/project/me.png)

![img](https://static.igem.wiki/teams/4173/wiki/project/me-di-en-di.png)

We can see that such a surgery is still too expensive for most people though we’re continuously marching to higher level of prosperity. To accurately figure out how many people can afford the expenditure, we need to look over the distribution of per capita disposable income: 

 ![img](https://static.igem.wiki/teams/4173/wiki/project/five-quintile.png)

We can figure out the lowest Per Capita Disposable Income If medical expenses would not exceed 40% of the ability to pay:

\`\`\`
Di min=ME/40%/(1-En)
\`\`\`

![img](https://static.igem.wiki/teams/4173/wiki/project/five-quintile-compared-with-me-0-4-1-en.png)

Before 2017, nearly or more than 90% people can’t afford a hair-transplanting surgery. Based on the fact that Di min is higher than the fourth while lower than the highest, we use the following formula to estimate the proportion of people who is affordable from 2018 to 2020(data in 2021 is still unknown):

\`\`\`
P=10%+10%*(Dh-Di min)/(Dh-Df)*100%
P(2020)=12.4%
P(2019)=12.4%
P(2018)=11.5%
\`\`\`



### 3.3 UK and US

| Region | lowest | 2nd   | 3rd   | 4th   | highest | All   |
| ------ | ------ | ----- | ----- | ----- | ------- | ----- |
| 1      | 12939  | 21087 | 28088 | 36743 | 57652   | 31302 |
| 2      | 11514  | 21001 | 28412 | 38673 | 77722   | 35464 |
| 3      | 12526  | 20742 | 27901 | 36920 | 66231   | 32864 |
| 4      | 12714  | 21906 | 29660 | 37957 | 60651   | 32577 |
| 5      | 12557  | 20965 | 27678 | 37579 | 61237   | 32003 |
| 6      | 14703  | 25213 | 34658 | 45559 | 85389   | 41104 |
| 7      | 13955  | 24199 | 35924 | 49986 | 114302  | 47673 |
| 8      | 14293  | 26059 | 35584 | 48439 | 99313   | 44738 |
| 9      | 14236  | 23468 | 30765 | 39229 | 61988   | 33937 |
| 10     | 12330  | 21557 | 28626 | 38257 | 64800   | 33114 |
| 11     | 13391  | 21650 | 28811 | 38961 | 72638   | 35090 |
| 12     | 11607  | 19574 | 25383 | 33131 | 52349   | 28409 |

2020 average(mean) equivalised household disposable income of individuals per quintile in 12 regions of the UK. Engel Coefficient of Britain in 2020 is 7.9%.

 

According to Professor Jingyi Yuan and Bingsheng Li (Bilibili), a surgery for transplanting hair in Britain may cost 5,000 to 30,000 pounds, which was decided by regions. If we set ME as 10,000, the minimum affordable disposable income would be 10,000/0.4/(1-0.079) =25199. At least 30% British can’t afford a surgery.

 

For the US, let’s take 2019 as an example. 

![img](https://static.igem.wiki/teams/4173/wiki/project/us-2019.png)

In 2019, food spending represented 36.0 percent of the lowest quintile’s income, 14.1 percent of income for the middle quintile, and 8.0 percent of income for the highest quintile. Households in the highest income quintile, with an average 2019 after-tax income of $174,777, spent an average of $13,987 on food (about $269 a week).

 ![img](https://static.igem.wiki/teams/4173/wiki/project/us-2019-2.png)

In 2019, En=9.5% in the US.



According to Professor Jingyi Yuan and Bingsheng Li (Bilibili), a surgery for transplanting hair in Britain may cost 15,000 to 25,000 dollars. Even if setting ME as 15,000, the minimum affordable disposable income would be 15,000/0.4/(1-0.095) =41436, which means the surgery is too expensive for about half of people in the United States.



## 4. Industrialization

To promote our understanding of the actual price of sEV products, we consulted Manager Zhao from Echo BioTech about the estimated cost price of sEV products under their present condition. Manager Zhao said that if the content of sEV in a dose was under a trillion, then the cost price of a dose could be controlled under 1000 yuan when other elements such as intellectual property and depreciation of equipment were not considered. The estimated price was close to what people can accept according to the investigation below, which proved that our product has a potential market. 

Apart from consulting the manager from the sEV company, we also interviewed Manager Chen from Linden Asset which focused on the investment in China's biomedical frontier. Manager Chen suggested that two basic steps are required if we wanted to get investment. Firstly, industry market research are required to be completed, on the basis of which a business plan should then be written. The business plan should include content such as the description of core technology and the plan for team construction. After that, we can recruit some core members of the team, including those experienced in technology research and development, clinical trials, and drug formulation. He also introduced to us the basic background of alopecia drugs in China. The market valuation of minoxidil and finasteride is about 1.5 billion yuan this year, and the growth rate is approximately 60% according to the research, which is very promising. Since minoxidil has changed from prescription medicine to OTC, the market has also transferred from the serious medicine market to the consumer medicine market. When choosing the investee, they attached importance to the balance between cost and effect. Till now, they have invested in some mature medical products and some new drugs that have better effects and fewer side effects. Their attitude towards new treatment techniques such as wrapping siRNA into sEVs is relatively conservative. Results from animal experiments and proof of advantages on the completeness of supply chains were needed to attract investment. 

When asked about how to raise consumers' acceptance of our product, Manager Chen recommended that we position our product towards the serious medicine market.  Rather than competing with minoxidil, our product could be accepted by hospitals and the aesthetic medicine market. If a new drug could take an effect faster than minoxidil, then it would be a nice supplement to the current methods. For example, our "sEV + microneedle" treatment could be combined with the daily use of minoxidil or finasteride to reach a better effect. By applying the differentiation competitive strategy, our drug can find a place in the alopecia product market.

Moreover, Manager Chen gave us a suggestion to consider the construction of a technology platform where a series of diseases can be treated via the "sEV+microneedle" delivery system by changing the content wrapped in sEVs.  Through this upgrade, investors will be more interested in our project and the new technologies included could realize their full potential.

![img](https://static.igem.wiki/teams/4173/wiki/article/interview-with-chen.png)

<p><img src="https://static.igem.wiki/teams/4173/wiki/article/chen-rui.jpg" alt="img" style="width: 75%;" /></p>



After the interview with Manager Chen, we planned to take the aesthetic medicine market as our target. In order to conduct the market evaluation of our products, we distributed a questionnaire to learn about the public's views of aesthetic medicine.

According to the pie chart below, people usually heard information about aesthetic medicine from social media, news, or chatting with other people. This result could provide ideas for us if we have a plan to promote our product in the future.

<p><img src="https://static.igem.wiki/teams/4173/wiki/article/1-pathway-of-hearing-about-aga.png" alt="img" style="width: 75%;" /></p>

As for the preference of ways to accept cosmetology, the order from the highest to the lowest was daily cosmetology, corrective cosmetology, non-invasive cosmetology, and invasive cosmetology. It could be concluded that people preferred ways that were safer, milder, and less harmful.  

<p><img src="https://static.igem.wiki/teams/4173/wiki/article/1-preference-of-ways-to-acosmetology.png" alt="img" style="width: 75%;" /></p>

When it came to the factors that people cared about most, safety, effect and ingredient stood out, which corresponded to the result of the alopecia questionnaire.

<p><img src="https://static.igem.wiki/teams/4173/wiki/article/1-people-cared-about-most.png" alt="img" style="width: 75%;" /></p>

If a new aesthetic medicine product that was effective and easy to use was developed, the price range that people could accept most was between 500-1000 yuan, which was chosen by 46 percent of people. This could be applied as a reference for the ideal price of our product.

<p><img src="https://static.igem.wiki/teams/4173/wiki/article/1-price-range.png" alt="img" style="width: 75%;" /></p>

According to the results of our two distributed questionnaires, safety and effect were what the public cared about most when they were choosing alopecia and aesthetic medicine products.

<p><img src="https://static.igem.wiki/teams/4173/wiki/article/1-concerns-of-gene-therapy.png" alt="img" style="width: 75%;" /></p>

We used BLAST to prove that the siRNAs that we designed have a low off-target effect so their safety could be guaranteed.

<p><img src="https://static.igem.wiki/teams/4173/wiki/project/blast.png" alt="img" style="width: 100%;" /></p>



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