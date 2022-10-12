import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"
import { Helmet } from "react-helmet"

import Icon from "../components/icon"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Top from "../components/top"

import "papercss"


const title = `Achievements`
const markdown = `
# 

|      | Name                                                         | Explanation                                                  | Medal  |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ |
| 1    | Competition Deliverables                                     | 1. [Wiki](https://2022.igem.wiki/nju-china/)  2. [Project  Promotion Video](https://2022.igem.wiki/nju-china/)  3. Team  Presentation  4. [Judging  Form](https://old.igem.org/2022_Judging_Form) | Bronze |
| 2    | [Attribution](https://2022.igem.wiki/nju-china/team/attribution/) | Our team consists of 25 members in total,  including two leaders for our experimental section: Yuchi Li and Qianhui Yang, two leaders for Human Practices: Qiang Liu and Zhiyi Juan, 11 members, 9 advisors, and our PI. With assistance from advisors Nannan Jiang, Ruoyan Zhang, and Chenyu Tao, we finished the design of our project, wet lab experiments, and the arrangement of our Human Practices activities. Our student leaders are involved in all arrangements and work as follows. Molecular biology experiments: Haoyu Sun, Qiongdan Liang.  Cell experiments: Hongjun Liu.  Plasmid design: Haoyu Sun.  Plasmid extraction experiments: Zirun Ying. sEVs extraction: Hanyu Yang. Events planner: Hanyu Yang, Ruining Hu. Interview and communication: Yingjun  Peng.  Art: Sijie Wei. Modeling: Qiang Liu, Yingjun Peng. Wiki: Qingmiao Zhou, Jiashang Chen, Shengjun Fang (Fellow student from School of Artificial Intelligence, Nanjing University) | Bronze |
| 3    | [Project Description](https://2022.igem.wiki/nju-china/project/description/) | Alopecia is a skin disorder that occurs in a wide population, often causing damaging psychological consequences. The NJU-China iGEM team chose to focus on androgenetic alopecia (AGA), which exhibits the highest prevalence. Current drugs on the market for treating AGA  produce unstable results and cause various side effects. Our team began with  a comprehensive study of its molecular mechanism, from which we selected  several genetic targets. Our goal was to develop a drug with minimal side  effects, stable results, and ease of use. To achieve this goal, we applied  RNAi technique and mRNA embedding elements to regulate gene expression  particularly. Since the delivery system is crucial to the effect of RNA  therapy, we used small extracellular vesicles (sEV) to carry and deliver siRNA and mRNA to follicle cells. We also compared different protocols for  sEV preparation and chose tangential flow filtration (TFF) and bind-elute  size exclusion chromatography (BE-SEC) as the optimal solution. Furthermore,  apart from AGA, our research may also pave the way for an sEV-mediated  systemic delivery platform of therapeutic cargo for other dermatologic  diseases. | Bronze |
| 4    | [Contribution](https://2022.igem.wiki/nju-china/project/contribution/) | We designed six siRNAs that can down-regulate 5α Reductase and six siRNAs that down-regulate the expression of the stress-activated ion channel protein Piezo1. After a series of validation experiments, we screened the most effective siRNAs, 5αR-siRNA-1 ([BBa_K4173009](http://parts.igem.org/Part:BBa_K4173009)) and Piezo1-siRNA-5 ([BBa_K4173019](http://parts.igem.org/Part:BBa_K4173019)). We also designed a plasmid that expresses β-catenin, a protein that enhances the Wnt/β-catenin pathway and thus promotes cell proliferation. And the plasmid was experimentally validated to express the mRNA of β-catenin *in vitro*. | Bronze |
| 5    | [Engineering Success](https://2022.igem.wiki/nju-china/project/engineering/) | After designing the siRNAs, we enabled them to be wrapped into sEVs by adding components to both ends of the siRNA sequence and inserting it into the plasmid expression vector pcDNA3.1-mCherry ([BBa_K4173048](http://parts.igem.org/Part:BBa_K4173048) and [BBa_K4173058](http://parts.igem.org/Part:BBa_K4173049)), and we also verified the validity of the sequence by experiment. We modified the mRNA of β-catenin by adding a C/D box RNA at one end ([BBa_K4173045](http://parts.igem.org/Part:BBa_K4173045)) and designed specific CD63-L7Ae fusion protein ([BBa_K4173046](http://parts.igem.org/Part:BBa_K4173046)).  CD63 is one of the most widely used exosome markers with n-terminal and c-terminal intracellular structural domains. L7Ae, the 60S large ribosomal subunit of the archaeal ribosomal protein 7Ae. The target protein can be captured and kept in close contact with L7Ae through the interaction of L7Ae with the C/D box RNA structure added at the UTR of the reporter gene. When L7Ae binds to the c-terminus of CD63, the target protein can be immobilized on the membrane of exosomes. Finally, CD63-L7Ae can serve as an active packaging device for specific RNA entry into sEVs. We have also demonstrated experimentally that β-catenin can be encapsulated into sEVs. | Silver |
| 6    | [Collaboration](https://2022.igem.wiki/nju-china/human-practices/collaboration/) | We held the second Nanjing iGEM  Association (NIA) meetup this year and invited 7 iGEM teams in total to  communicate with each other and exchange our design of the project in the  first meetup. Additionally, we simulated our final presentation and provided  comments to each other during the second meetup. Moreover, we participated in  many online and offline meetups with other teams and received many questions  and suggestions about our project, which we carefully considered for further  integration into our project.     Team Nanjing-China and our team held a  debate competition to deepen the audience's understanding of biological  technology and related moral issues, which also enhance our own knowledge and  promote friendship. | Silver |
| 7    | [Human Practices](https://2022.igem.wiki/nju-china/human-practices/overview/) | Through literature research,  epidemiological analysis, and other methods to understand the severe  background of alopecia, we set out to conduct a survey and get to know the  public's demand for better drugs (effectiveness, side effects, etc.). Then we  interviewed doctors at Xi 'an Jiaotong University and learned about the  current situation of alopecia treatment and the deficiencies of current drugs  (long treatment cycle, side effects, etc.). After designing our drug delivery  system, we introduced our project to two companies known for small  extracellular vesicles and alopecia studies and received their comments and  suggestions. To receive feedback from the public, we distributed the  questionnaire again after estimating our product price, and we obtained their  expected range of drug price and their views on gene therapy drugs. | Silver |
| 8    | [Proposed Implementation](https://2022.igem.wiki/nju-china/project/implementation/) | Our team has applied for patents on the  technical route of tangential flow filtration and bind-elute size exclusion  chromatography to extract small extracellular vesicles in large quantities  and applied for patents on the sEV-wrapped mRNA drug system. We plan to use  microneedles as the drug delivery mechanism to first make sEV drugs for  androgen alopecia, and after success, use this mature drug system to make sEV  drugs for other skin diseases. | Silver |
| 9    | [Integrated Human Practices](https://2022.igem.wiki/nju-china/human-practices/overview/) | After designing the mRNA system, we  introduced our project to professors studying small extracellular vesicles,  and they recommended that we should add an experimental component to confirm  the packaginge of mRNA and the location of the mRNA because L7-ae is a  membrane system, the mRNA could be inside or outside the sEV. So, we designed  an experiment, culturing RNA enzymes and sEVs together to see the mRNA  expression. Moreover, we interviewed professors who study alopecia and  learned about the selection of common targets for androgenetic alopecia.  Finally, we chose to down-regulate 5aR to inhibit androgenetic degeneration,  down-regulate piezo1 to reduce apoptosis and use β-catenin mRNA to  promote hair growth. In terms of experimental design, we got to know the  public's concern about side effects, so we designed siRNA and verified its  low off-target effect by BLAST against the human microbiome, showing the low  risk of side effects. | Gold   |
| 10   | [Project Modeling](https://2022.igem.wiki/nju-china/model/epidemiology-analysis/) | To gain an great insight into the  patients’ views and needs among AGA, and demonstrate the effectiveness of  our project, we have conducted 4 models:  1. Epidemiology  analysis of androgenetic alopecia  We evaluated more than 3000 AGA patients  of different age, gender, nationality, and obtained the epidemiologic  characteristics of AGA.  2. Questionnaire  analysis  We distributed a questionnaire to learn  the public’s views and needs among AGA, and did a comprehensive analysis with  R. We concluded that AGA can be a problem disturbing more and more people,  and the public’s preference for AGA treatment.  3. China  market analysis  We did a market analysis of alopecia  treatment in China, finding that a better treatment is urgently needed. The  results give a theoretical support to our entrepreneurship.  4. sEVs  extraction technique model  We evaluated the result of our sEVs  extraction method. With this model and several tests, we determined the  appropriate conditions to extract the most sEVs without breaking them. | Gold   |
| 11   | [Proof of Concept](https://2022.igem.wiki/nju-china/project/proof/) | Androgenetic alopecia has been a long-existing problem all over the world and current drugs are reported to have some disadvantages. Therefore, we must guarantee the feasibility of every part of our project. 5α-reductase (5αR) inhibition is one of the effective methods to suppress androgenetic alopecia. Moreover, Piezo1 causes apoptosis of hair follicle stem cells (HFSC), leading to alopecia, and the Wnt/β-catenin signaling pathway is associated with hair regeneration. After designing plasmids, we need to prove our products wouldn’t lead to side effects and have been improved in some aspects. In this part, we show some outcomes of Proof of Concept based on the experimental results, purchasing power analysis of different countries, and our interview and survey of industrialization. The viability shown by these parts ensure the feasibility of our project. | Gold   |
| 12   | [Partnership](https://2022.igem.wiki/nju-china/human-practices/partnership/) | We developed partnership with two other  teams throughout the year:     1. With BUCT  Our project corresponds with BUCT's on  the topic of hair loss, so in the partnership we exchange information and  data, and raise suggestions to help polish each other's project. At the early  stage, we had meetings to discuss each other's project, both of us contribute  some insights based on which we modified our project. In the HP, BUCT helped  us modify and distribute our questionnaire, and in return we shared our  results with them. As we both need to consult doctors and experts  professional in skin diseases, we helped each other to raise questions during  the interview and exchange our feedback. Together we conducted the market  research, and organized several education and science communication  activities both on and offline, including a offline popularization on the World  No Hair Loss Day.     2. With SZU-China  Our projects share similarity on applying  RNAi technique, so we helped each other overcome difficulties on the  experiment design. In the information exchange, SZU-China gave us some  suggestions about siRNA selection, and we shared with them our sequence  editing tool. In the HP, SZU-China assisted us to scheme a science  popularization, and in return we helped them in a RNAi introduction activity.  Together we conducted some other activities to promote synthetic biology,  including an offline lecture in our school. On October, we also helped each  other with the presentation of our project. | Gold   |
| 13   | [Education and Communication](https://2022.igem.wiki/nju-china/human-practices/education-communication/) | Our team conducted educational activities  for about 300 people in different age groups. For children aged 7~10, we held  an activity in the Nanjing Science and Technology Museum, taught them basic  knowledge about biology, and led them to conduct safe biological experiments.  For high school students, we held a lecture and introduced the mechanism of alopecia  and the history and current progress of synthetic biology. For students  majoring in biology in college, we held a lecture and introduced the  background of the RNAi technique, small extracellular vesicles, synthetic  biology, and the iGEM competition. For the general public, we held an online  broadcast and introduced the cause and effect of alopecia, existing  treatments, and our project's design.     Through education activities targeting  different groups of people, we got to know the common thoughts of the public  about alopecia, such as its harm and treatments, and synthetic biology, such  as its definition and purpose. | Gold   |
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