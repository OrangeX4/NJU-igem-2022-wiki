import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Helmet } from "react-helmet"

import Icon from "../../components/icon"
import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Top from "../../components/top"

import "papercss"


const title = `Human Practice`
const markdown = `
# Overview

## 1.	Learn more about alopecia through human practices

### 1.1	Why we choose androgenic alopecia as our target

In recent years, with the acceleration of people’s living rhythm and increasing work pressure, more and more people are suffering from alopecia. The population with this problem is getting younger, and youngsters are accustomed to using hair loss as a synonym for stress. Alopecia not only affects one’s appearance negatively but also causes mental problems such as anxiety and inferiority, posing a threat to one’s relationship and career. Among all types of alopecia, androgenic alopecia was the most common type. As a result, we were interested in developing a new treatment method for androgenic alopecia to help hundreds of thousands of patients regrow their hair and relieve their worries.

### 1.2	Alopecia viewed by the public and academics

After we chose alopecia as our target, web crawlers were applied to learn more about people’s concerns about alopecia and related products. The first one hundred pages of keyword searching results on Weibo(a popular social platform where people posted short articles and pictures to share their lives and views) were chosen and words of the highest frequency were then counted. They constituted the word clouds that are shown below.

![img](https://static.igem.wiki/teams/4173/wiki/article/hair-loss.png)

The most frequent words related to alopecia included hair, scalp, hairline, hair transplant, loss, anxiety, doctor, hair follicle, staying up late, and so on.  It could be drawn from the word cloud that a large number of people are suffering from anxiety arising from alopecia, staying up late being one of the inducers. Solutions such as hair transplant and shampoo were also discussed online.

![img](https://static.igem.wiki/teams/4173/wiki/article/minoxidil.png)

![img](https://static.igem.wiki/teams/4173/wiki/article/finasteride.png)

Above are the word clouds of minoxidil and finasteride, two main chemical drugs for the treatment of androgenic alopecia. It can be seen from the figures that the results and side effects of drugs were what people care about.

Apart from obtaining information online, we also distributed questionnaires to the public to find out the current situation of alopecia and their urgent requirements for drugs. 

According to the result of the survey below, it can be concluded that people usually heard about or learned about alopecia from social media or via communication with others, which reflected that alopecia was a problem the public cared about.

![image-20221010214735090](https://static.igem.wiki/teams/4173/wiki/article/1-pathway-of-hearing-about-aga.png)

In terms of the types of alopecia that people knew, androgenic alopecia and alopecia areata were the two types of alopecia that people knew best, which were also the two most prevalent types of alopecia.

![img](https://static.igem.wiki/teams/4173/wiki/article/1-types-of-alopecia.png)

When it came to the aspects that people cared about most, effectiveness and side effects stood out, which were chosen by 87% and 83% of subjects respectively.

![img](https://static.igem.wiki/teams/4173/wiki/article/1-care-about-treatment.png)

When asked about their acceptance of there being a new more expensive treatment method that can reach the treating effect and almost has no side effects, the average point was 3.66 while the full point was 4. This showed that most people were willing to spend more money on better drugs, which indicated the potential market for our product.



According to the pie chart below, people showed their concerns about gene therapy. Among all the aspects, safety came first, was chosen by 84% of people, and was followed by effectiveness and high price. This urged us to design experiments more carefully in order to prove the safety and effect of our product.

![img](https://static.igem.wiki/teams/4173/wiki/article/1-concerns-of-gene-therapy.png)

In order to learn more about the current situation of alopecia treatment and the side effects of drugs in detail, we consulted professor Dr. Yuan, a specialist from the Second Affiliated Hospital Of Xi'an Jiaotong University. According to Dr. Yuan, the cause of alopecia varied from one to another, but most cases were caused by staying up late, which belonged to androgenic alopecia. The common treatment for male patients included minoxidil and finasteride, while female patients were treated with spironolactone and contraceptive drugs. Many people were unsatisfied with the long course of action of the drugs, taking two and a half months to show an effect. As a result, some of them turned to private hospitals for accelerated treatment processes like hair transplantation, which would set them back a huge amount of money. In addition, the defects of chemical drugs also included causing hair growth in other parts of the body, toxicity to the liver and kidney, and other sexual, physical, and psychological side effects. From the interview, we gained a deeper understanding of the defects of current drugs and the urgent demands of patients, which were enlightening for our project design.

![img](https://static.igem.wiki/teams/4173/wiki/article/professor-yuan.png)

### 1.3 	sEVs secreted by mesenchymal stem cells(MSC) can promote hair growth 

While we were looking up literature for mechanisms and therapies that can treat alopecia, sEVs caught our attention. It was reported that sEVs secreted by MSC can promote hair growth[1] and some growth factors such as IGF-1 (Insulin-like growth factor-1), HGF (Hepatocyte growth factor), VEGF (Vascular endothelial growth factor), BFGF (Basic Fibroblast Growth Factor) wrapped in sEVs play a role in this process.

  ![img](https://static.igem.wiki/teams/4173/wiki/article/fcell-09-647012-g001.jpg)

We were enlightened by the article and came up with the idea of applying sEVs containing specific molecules to the scalp to treat alopecia.  In order to know the feasibility of this design, we interviewed Professor Jiang Xiaohong from Nanjing University, whose research interest included MSC. Professor Jiang said that we should pay attention to the transdermal efficiency of sEVs if we wanted to apply sEVs directly to the scalp. After the interview, we researched related articles and found that sEVs couldn't penetrate through the dermis where our target cells belong[2]. As a result, we needed to know the transdermal method applied by current sEV products.

<img src="https://static.igem.wiki/teams/4173/wiki/article/jiangxiaohong.jpg" alt="img"  />

### 1.4 Asking bloggers about their feelings about using sEV products

After we got the idea of using sEVs as the vector for RNA introduction, we searched for information related to sEVs online and learned that sEVs were now mainly applied in the aesthetic medicine industry. According to the advertisements, the sEVs in products, which were mainly extracted from adipose stem cells, can promote skin repair and regeneration, delay aging, and decrease acne and inflammation. To figure out the actual effects of these products and the transdermal method they applied, we asked bloggers and received considerable feedback. It is reflected that their skin state was improved and skin problems were alleviated after taking the shot, while the maintenance of effects required regular treatment. However, some other comments online expressed their confusion and dissatisfaction as they see little improvement. In general, though the sEV product market is far from mature, sEV products were proven to be effective, getting more and more attention from the public. Still, some customers sat on the fence since they knew little about the way sEVs worked and couldn’t distinguish between genuine and fake products, which also identified an opportunity where our educational activities should come into play. We also asked them about the way these sEV products were applied to their faces, microneedles and mesotherapy were their answers.  Based on their answers, we did research online and found two related articles. One article applied a microneedle patch made from hair-derived Keratin to promote hair regrowth [3], which indicated that microneedle could be used in the treatment of alopecia. Another article delivered sEVs via microneedles in order to treat skin disease[4], which suggested that microneedles could be applied to deliver sEVs. As a result, we decided to apply microneedles in the delivery system in order to penetrate our sEVs through the dermis.

![img](https://static.igem.wiki/teams/4173/wiki/article/bloggers.png)

## 2 The establishment of sEV mRNA system

### 2.1 The current application of sEVs and nucleic acid drugs

Once we decided to use sEVs as the vector of our drug delivery, we hoped to learn more about the current application of sEVs. As a result, we interviewed Manager Zhao from Echo Biotech, an advanced biotechnology company focused on the research and development of  sEV related products. The manager from the company said that till now three sEV drugs had entered clinical trials, and the effective constituent was protein, nucleic acid, and small molecule respectively. When asked about the advantages and disadvantages of sEVs compared with liposomes, Manager Zhao elaborated on this problem from different aspects. Liposomes are usually applied in situ delivery or can target liver parenchymal cells, the targeting ability of which is poor;  Liposomes also have safety problems in terms of immunogenicity and toxicity.  In comparison, sEVs can be recycled to different compartments with a wide delivery range and have good biocompatibility. In addition, more complex engineering transformations can take place on sEVs, which means sEVs have better scalability. In conclusion, sEVs could be a better choice for some scenarios due to their biological traits.

![img](https://static.igem.wiki/teams/4173/wiki/article/enzetaikang.jpg)

Later we went on to interview another company that focused on developing nucleic acid drugs for more information. When asked about which types of drugs are the best sellers, the staff answered that siRNA and mRNA shared the largest market among all types of nucleic acid drugs, the mRNA vaccine being a typical example. Inspired by this interview, we came up with the idea of embedding mRNA into sEVs to elevate the number of certain proteins.

###  2.2 The optimization of our design

#### 2.2.1 The optimization of the wrapping method of mRNA

Upon finishing the preliminary design of our project, we did an online interview with Dr. Zheng Lei from Southern Medical University, who is a member of the executive committee on the International Society for Extracellular Vesicles,  to ensure the feasibility of our design. Dr. Zheng Lei enumerated several special qualities of sEVs such as the density of sources, high biocompatibility, and certain targeting abilities. He also mentioned that currently miRNA, mRNA, and other nucleic acid molecules have been detected in natural sEVs and praised that our idea of embedding mRNA into sEVs to formulate drug effects was fantastic and worthy of an attempt. However, Dr. Zheng informed us that we needed to solve the technical problem of how to package mRNA into sEVs since mRNA was bigger in size. 

![img](https://static.igem.wiki/teams/4173/wiki/article/zhenglei.jpg)

To solve this technical problem, we conducted literature reviews online and found a related article. According to the article, L7ae can be used to transport mRNA to CD63 on the exosomal membrane, so we planned to achieve the packaging and delivery of β-catenin mRNA in this way.
 After refining our design and conducting some experiments, we spoke with Dr. Fu Qingling from the Affiliated Hospital of Sun Yat-sen University, whose research interest included the immune adjustment and large-scale production of sEVs. When asked to provide suggestions on the idea of attaching mRNA to the sEV membrane via L7ae, she said that we should design an experiment to prove that we have connected the mRNA to the inner side of the membrane instead of the outer side. We took this suggestion into consideration carefully and decided to use RNase to examine whether mRNA was wrapped successfully into the sEV. If mRNA was wrapped into the sEV successfully, then the addition of RNase in the solution shouldn’t degrade the mRNA inside. As a result, mRNA would still be detected by qPCR. In addition, we were also concerned that the content of mRNA in sEVs was difficult to detect and consulted the professor about it. Dr. FuQingling recommended that we could apply nested PCR to solve this problem. Nested PCR uses an extra pair of primers to ensure the specificity of amplification and could be applied for the detection of the low-expression gene. We also took this advice to refine our experiment design. 

![img](https://static.igem.wiki/teams/4173/wiki/article/fuqingling.png)

#### 2.2.2 The optimization of the choice of targets

5αR is the classic target in the treatment of androgenic alopecia, the current chemical drug finasteride being the specific inhibitor of it. It changes testosterone into dihydrotestosterone, a more damaging androgen that binds to the androgen receptor and finally leads to hair loss. As a result, we decided to wrap the siRNA of 5αR into the sEV to downregulate the amount of this protein.

Through further literature reviews, we found a classic pathway called the Wnt gene pathway that can promote cell proliferation and contribute to the maintenance of the hair growth phase. β-catenin is a significant protein that can activate the Wnt downstream pathway, so we planned to package the mRNA of β-catenin into the sEV, regulating the Wnt gene pathway by increasing the amount of β-catenin protein. 

Our advisor Ni Tianyi, also one of last year's iGEM leaders,  worked as a research assistant at Professor Zhang Bing's laboratory. Since Professor Zhang Bing's research focused on the regulation of skin stem cells and the regeneration of skin and hair, Ni Tianyi showed our design, which wrapped siRNA of 5αR and mRNA of β-catenin into sEVs, to the professor and asked about his suggestions and opinions. Professor Zhang Bing believed that if the mRNA of β-catenin was loaded into sEVs and expressed successfully, it would have the effect of promoting hair growth. He also suggested that we can add a siRNA to inhibit the apoptosis of hair follicle stem cells.

![img](https://static.igem.wiki/teams/4173/wiki/members/nty.jpg)

After looking up in literature, Pizeo1, a stress-activated ion channel on the surface of hair follicle stem cells that functions in cell apoptosis, was chosen as one of our targets. Based on the suggestions provided by the expert, three targets were decided in the end: 5αR, Pizeo1, and β-catenin. According to our design, siRNA of 5αR and Pizeo1 will be wrapped into the sEVs in order to downregulate the expression of 5αR and Pizeo1. At the same time, the mRNA of β-catenin will also be encapsulated into sEVs so that the expression of β-catenin will be upregulated. Since the public was concerned about the side effect and safety of drugs, we used BLAST to prove that the siRNAs that we designed had a low off-target effect.



## 3 Industrialization

To promote our understanding of the actual price of sEV products, we consulted Manager Zhao from Echo BioTech about the estimated cost price of sEV products under their present condition. Manager Zhao said that if the content of sEV in a dose was under a trillion, then the cost price of a dose could be controlled under 1000 yuan when other elements such as intellectual property and depreciation of equipment were not considered. The estimated price was close to what people can accept according to the investigation below, which proved that our product has a potential market. 

Apart from consulting the manager from the sEV company, we also interviewed Manager Chen from Linden Asset which focused on the investment in China's biomedical frontier. Manager Chen suggested that two basic steps are required if we wanted to get investment. Firstly, industry market research are required to be completed, on the basis of which a business plan should then be written. The business plan should include content such as the description of core technology and the plan for team construction. After that, we can recruit some core members of the team, including those experienced in technology research and development, clinical trials, and drug formulation. He also introduced to us the basic background of alopecia drugs in China. The market valuation of minoxidil and finasteride is about 1.5 billion yuan this year, and the growth rate is approximately 60% according to the research, which is very promising. Since minoxidil has changed from prescription medicine to OTC, the market has also transferred from the serious medicine market to the consumer medicine market. When choosing the investee, they attached importance to the balance between cost and effect. Till now, they have invested in some mature medical products and some new drugs that have better effects and fewer side effects. Their attitude towards new treatment techniques such as wrapping siRNA into sEVs is relatively conservative. Results from animal experiments and proof of advantages on the completeness of supply chains were needed to attract investment. 

When asked about how to raise consumers' acceptance of our product, Manager Chen recommended that we position our product towards the serious medicine market.  Rather than competing with minoxidil, our product could be accepted by hospitals and the aesthetic medicine market. If a new drug could take an effect faster than minoxidil, then it would be a nice supplement to the current methods. For example, our "sEV + microneedle" treatment could be combined with the daily use of minoxidil or finasteride to reach a better effect. By applying the differentiation competitive strategy, our drug can find a place in the alopecia product market.

Moreover, Manager Chen gave us a suggestion to consider the construction of a technology platform where a series of diseases can be treated via the "sEV+microneedle" delivery system by changing the content wrapped in sEVs.  Through this upgrade, investors will be more interested in our project and the new technologies included could realize their full potential.

![img](https://static.igem.wiki/teams/4173/wiki/article/interview-with-chen.png)

![img](https://static.igem.wiki/teams/4173/wiki/article/chen-rui.jpg)

After the interview with Manager Chen, we planned to take the aesthetic medicine market as our target. In order to conduct the market evaluation of our products, we distributed a questionnaire to learn about the public's views of aesthetic medicine.

According to the pie chart below, people usually heard information about aesthetic medicine from social media, news, or chatting with other people. This result could provide ideas for us if we have a plan to promote our product in the future.



![img](https://static.igem.wiki/teams/4173/wiki/article/1-pathway-of-hearing-about-aga.png)

As for the preference of ways to accept cosmetology, the order from the highest to the lowest was daily cosmetology, corrective cosmetology, non-invasive cosmetology, and invasive cosmetology. It could be concluded that people preferred ways that were safer, milder, and less harmful.  

![img](https://static.igem.wiki/teams/4173/wiki/article/1-preference-of-ways-to-acosmetology.png)

When it came to the factors that people cared about most, safety, effect and ingredient stood out, which corresponded to the result of the alopecia questionnaire.

![img](https://static.igem.wiki/teams/4173/wiki/article/1-people-cared-about-most.png)

If a new aesthetic medicine product that was effective and easy to use was developed, the price range that people could accept most was between 500-1000 yuan, which was chosen by 46 percent of people. This could be applied as a reference for the ideal price of our product.

![img](https://static.igem.wiki/teams/4173/wiki/article/1-price-range.png)



Reference:

[1]Quiñones-Vico MI, Sanabria-de la Torre R, Sánchez-Díaz M, Sierra-Sánchez Á, Montero-Vílchez T, Fernández-González A, Arias-Santiago S. The Role of Exosomes Derived From Mesenchymal Stromal Cells in Dermatology. Front Cell Dev Biol. 2021 Apr 7;9:647012. doi: 10.3389/fcell.2021.647012. PMID: 33898436; PMCID: PMC8058372.

[2]Zhang B, Lai RC, Sim WK, Choo ABH, Lane EB, Lim SK. Topical Application of Mesenchymal Stem Cell Exosomes Alleviates the Imiquimod Induced Psoriasis-Like Inflammation. Int J Mol Sci. 2021 Jan 13;22(2):720. doi: 10.3390/ijms22020720. PMID: 33450859; PMCID: PMC7828312.

[3]Yang G, Chen Q, Wen D, Chen Z, Wang J, Chen G, Wang Z, Zhang X, Zhang Y, Hu Q, Zhang L, Gu Z. A Therapeutic Microneedle Patch Made from Hair-Derived Keratin for Promoting Hair Regrowth. ACS Nano. 2019 Apr 23;13(4):4354-4360. doi: 10.1021/acsnano.8b09573. Epub 2019 Apr 3. PMID: 30942567.

[4]Yerneni SS, Yalcintas EP, Smith JD, Averick S, Campbell PG, Ozdoganlar OB. Skin-targeted delivery of extracellular vesicle-encapsulated curcumin using dissolvable microneedle arrays. Acta Biomater. 2022 Sep 1;149:198-212. doi: 10.1016/j.actbio.2022.06.046. Epub 2022 Jul 6. PMID: 35809788.
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
          <ReactMarkdown escapeHtml={false} children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
        <Footer />
      
      </div>
      <Top />
    </div>
  )
}

export default Page