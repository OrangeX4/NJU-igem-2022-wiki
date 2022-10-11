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


const title = `Human Practice`
const markdown = `
# Partnership

## Preface of Partnership

Just as Hendrith Vanlon Smith Jr. said, "Cooperation, collaboration, and coordination are together more powerful than competition." Thanks to the BUCT and SZU-China iGEM team, we shared a close relationship throughout the year. During our project, we kept in contact with each other and helped each other in many aspects. We acknowledge Teams BUCT and SZU-China for their incredible thoughts and passion for partnership, which make all of our teams benefit. Below are the precious records of our partnership.

## NJU-China & BUCT

### 1. Build the bridge

One member of our team read the tweets from BUCT’s WeChat Official Account, which showed their interest in alopecia. To get more information about each other, NJU-China set out to contact BUCT through WeChat on April 11th, 2022. After the primary introduction of our project, we decided to partner with each other in the 2022 iGEM Competition.

To expand our project influence and to advance our project progress, we made a whole plan for our partnership, considering all aspects of our projects: Project Design, Human Practices, Science Communication, and Implementation.

![img](https://static.igem.wiki/teams/4173/wiki/article/firstmeet.png)

Figure 1 NJU-China & BUCT’s first contact through WeChat

### 2. Early stage of our partnership: About Human Practices

In the early stages of our project, we found that we shared a similar target of the project, that is to create a new solution for people who are suffering from alopecia. During the first online meeting, we discussed how to conduct Human Practices based on the different emphases of our project. 

![img](https://static.igem.wiki/teams/4173/wiki/article/nju-buct-first-meeting.png)

Figure 2 NJU-China & BUCT's first meeting

![img](https://static.igem.wiki/teams/4173/wiki/article/introduction-of-the-project.png)

![img](https://static.igem.wiki/teams/4173/wiki/article/intro-buct.png)

Figure 3 Teams presentation about their project design and background

#### BUCT → NJU-China

BUCT shared their investigation of an expert on hair care products, which inspired us to reach out to the public for their concerns about alopecia and alopecia products. After the meeting, we used Python to create a web crawler for data on Weibo (A social media platform) and made a word cloud to see the public’s concerns.

![img](https://static.igem.wiki/teams/4173/wiki/article/word-cloud.png)

Figure 4 NJU-China’s word cloud about alopecia and drugs

#### NJU-China → BUCT

We provided suggestions for BUCT's work on Human Practices based on our understanding of the medical field. Although BUCT intended to construct a strain that would improve scalp microecology, it is worth considering whether *E. coli Nissle 1917* would harm the scalp. Therefore, BUCT paid more attention to expert advice in the medical field in the following Human Practices work and they conducted interviews with Dr. Jingfang Li and Dr. Xufang Yang.

![img](https://static.igem.wiki/teams/4173/wiki/article/buct-interview.jpg)

Figure 5 BUCT's interview with medical experts

### 3. Early stage of our partnership: About Market Investigation

To evaluate our project’s feasibility, we need to get more information about the current market condition of alopecia products. During the competition, we shared information we collected from our investigations.

We concluded the following situations of current alopecia products/drugs:

①The unit price of scalp care products and the growth rate are increasing year by year;

②Most consumers think that their scalps have problems and they rarely use scalp care products; the scalp care market per capita consumption level is increasing year by year;

③In the scalp care market, the nutritional essence market accelerated expansion, and shampoo is favored. Oil control and anti-sensitivity became the main functions that people cared about when it comes to the selection of related products.

④According to data published by the American Hair Loss Association, it was stated that over 95.0% of hair loss in men is caused due to androgenetic alopecia.

⑤The global alopecia market size was valued at USD 7.6 billion in 2020 and is expected to expand at a compound annual growth rate (CAGR) of 8.1% from 2021 to 2028.

⑥The global market of an existing drug for androgenetic alopecia, minoxidil, is estimated to be valued at US$ 951.8 million in 2020 and is expected to exhibit a CAGR of 4.8% during the forecast period (2020-2027).

![img](https://static.igem.wiki/teams/4173/wiki/article/alopecia-market.png)

Figure 6 Alopecia Market Size, Share, and Trends from 2021 to 2028

### 4. Middle stage of our partnership: About Project

In the middle stage of our partnership, we held online meetings to further discuss our project. Through these meetings, we helped each other improve our project design, product implementation, and science communication. 

![img](https://static.igem.wiki/teams/4173/wiki/article/second-meeting.png)

Figure 7 NJU-China & BUCT's second meeting

#### BUCT → NJU-China

After we transformed our application method into microneedles, we shared our confusion about public acceptance with BUCT. They suggested that we should focus more on the advantages of microneedles to make it competitive. So, we decided to use a gel to carry small extracellular vesicles (sEVs) in microneedles, which will perform as a timed-released drug. This will make up for the shortcomings of the long dosing cycle and high dosing frequency of current drugs.

NJU-China → BUCT

Considering the degree of skin absorption and biocompatibility, we gave BUCT some advice on what components to include in the product essence. With our advice, BUCT finally identified glycerin, water, and and amino acids to be the components in their formulation.

### 5. Middle stage of our partnership: About Human Practices

After polishing our project design, we set out to design our questionnaire to get more feedback on our project from the public. We exchanged our questionnaires to help each other modify the inappropriate questions or answers.

During the Competition, BUCT helped us to distribute our questionnaire and expand the group size of our questionnaire, which helped us to get robust outcomes.

![img](https://static.igem.wiki/teams/4173/wiki/article/social-investigation-buct1.png)

 ![img](https://static.igem.wiki/teams/4173/wiki/article/social-investigation-buct2.png)

Figure 8 Questionnaire outcomes of NJU-China

### 6. Middle stage of our partnership: About Science Communication

Most of the materials used in our science communication are collected and discussed together with BUCT. Moreover, considering the specialization and facility of the content, we shared our presentation with experts in dermatology and modified our materials accordingly.

#### BUCT → NJU-China

Then BUCT team went to Beijing Puhua International Hospital and consulted doctors to get information about drugs for the scalp, scalp care, and scalp nourishment. They shared some feedback and extra materials for education with us.

![img](https://static.igem.wiki/teams/4173/wiki/article/article/buct-doctor.jpg)

Figure 9 BUCT with the doctor in Beijing Puhua International Hospital

#### NJU-China → BUCT

During the interview with Dr. Jingyi Yuan, an expert from the Second Affiliated Hospital of Xi’an Jiaotong University, we also asked him some questions about scalp care and common issues with the scalp, and we shared the feedback with BUCT after the interview.

![img](https://static.igem.wiki/teams/4173/wiki/article/professor-yuan.png)

Figure 10 NJU-China’s interview with Dr. Jingyi Yuan

On June 19th, 2022, on World No Hair Loss Day, both of our teams carried out offline popularization and alopecia science communication, which we arranged and planned together.

For NJU-China, we conducted a science communication event with high school students, sharing the types, mechanisms, and current treatment methods of alopecia, and we got positive feedback from the students.

![img](https://static.igem.wiki/teams/4173/wiki/article/science-edu-in-high-school.jpg)

![img](https://static.igem.wiki/teams/4173/wiki/article/sci2.jpg)

Figure 11 NJU-China's science communication of alopecia  

For BUCT, they set up publicity windows on campus to popularize alopecia and conducted science communication activities to the public.

![img](https://static.igem.wiki/teams/4173/wiki/article/buct-popularization.jpg)

Figure 12 BUCT’s science communication of synthetic biology and alopecia

On August 13th, 2022, BUCT held an online education broadcast on the media platform Bilibili to popularize knowledge to the public, introducing synthetic biology, alopecia, and other diseases in a vivid way. We joined the activity and made a presentation about the background and mechanism of alopecia.

![img](https://static.igem.wiki/teams/4173/wiki/article/hechengkepu.jpg)

Figure 11 Online science communication broadcast

### 7. Late stage of our partnership: About Implementation

Our team focused on androgenic alopecia, while BUCT focused on reducing the harmful effects of alopecia caused by the harsh scalp environment, including dandruff and odor caused by excessive sebum. After the communication with NJU-China and the interview with Marumi BUCT made a crucial change in the original treatment plan to focus on scalp health and care. Since we have a related concern about hair, we conducted implementation work together and helped each other collect feedback from experts.

####  BUCT → NJU-China

Both NJU-China and BUCT's designs were applied to the scalp, so BUCT asked Guo about skincare products when communicating with him. Guo told BUCT that molecules typically need to travel through hair follicles to reach the dermis and that the maximum molecular weight should be no more than 500Da. This is something we care about, and BUCT shared it with us. We can take this into account to design our sEVs.

![img](https://static.igem.wiki/teams/4173/wiki/article/manager-guo.png)

Figure 12 The Manager Guo of R&D Department in MARUMI

#### NJU-China → BUCT

Since BUCT focused on developing a scalp care product, we helped them ask Investor Chen to provide some advice on developing a retailed product. Chen said that since their product will be released on the market and compete with other mature products, they should pay more attention to the consumers' needs and using habits.  The dosage form was very important and should be easy for consumers to use. For example, minoxidil was in the form of a tincture and could be sprayed onto the scalp, which was relatively acceptable for customers. In addition, foam and gel were also highly accepted by customers because these forms suited their using habits. Some customers cared about their hairline so they can apply the foam and gel to the place they want to help hair growth in specific areas. The advice helped BUCT with their product design.

![img](https://static.igem.wiki/teams/4173/wiki/article/interview-with-chen.png)

![img](https://static.igem.wiki/teams/4173/wiki/article/chen-rui.jpg)

Figure 13 NJU-China’s interview with Linden Asset investor, Chen Rui

### 8. Late stage of our partnership: About Presentation

Near the end of the iGEM Competition, our two teams had the last online meeting. At the meeting, we simulated the Jamboree, presented our project’s final version, and posed comments to each other. After listening to the valuable opinions, both teams made some modifications to the presentation to polish it up.

![img](https://static.igem.wiki/teams/4173/wiki/article/last-meeting.jpg)

Figure 14 NJU-China & BUCT’s last meeting

We ended the last meeting with auld Lang Syne. Looking back on our past partnership, all sorts of feelings welled up in our minds.

During the 6 months of close partnership with BUCT, we worked closely and generously shared our experiences, we appreciate the effort of BUCT in this long-term partnership.

## NJU-China & SZU-China

### 1. Build the bridge

In the online conference iGEM MEETING UP held by Teams CPU-CHINA and HiZJU-China on May 1st, 2022, iGEMers and synthetic biology enthusiasts from all over the country attended, as did Teams SZU-China and NJU-China. We presented our project design at the meeting, and Team SZU-China showed great interest in it because of the same technique we used --- RNAi. During the free discussion after the meeting, Team SZU-China contacted our team, hoping to have a long-term cooperation in the future. We were very honored to work closely with SZU-China for the following five months.

![img](https://static.igem.wiki/teams/4173/wiki/article/nju-china-szu-first.png)

Figure 15 NJU-China & SZU-China first contact at the iGEM Meeting Up Conference

### 2.  Early stage of our partnership: About our projects

In the early stages of our project, we found our project similarity in using the RNAi technique to treat target diseases. Our team tries to treat androgenetic alopecia by down-regulating genes using siRNA while SZU-China tries to prevent the infection of *R.solani* in rice crops using shRNA. During our project design, we gave each other advice and helped each other a lot.

#### SZU-China → NJU-China

In the early stage of our project design, we selected three 21-nucleotide parts of the target genes Srd5a2 and Piezo1 for designing the siRNA. When we first shared our project with SZU-China, they suggested that we should select more different positions of our target genes and also BLAST the selected sequences on NCBI to make sure that the siRNA we designed would not target other genes. Therefore, NJU-China increased the number of siRNAs for each target gene from three to six, and BLAST was used to screen out the siRNAs with lower off-target rates. Meanwhile, SZU-China also helped NJU-China design three siRNA molecules targeting the Piezo1 gene and its qPCR primers.

#### NJU-China → SZU-China

For SZU-China, they tried to find the homologous genes of *R.solani* AG1-IA within NCBI, but only two genes could be found in the database. During the meeting with us, SZU-China shared their difficulty and we recommended a sequence editor and analysis tool called BioEdit to them. With this software, SZU-China successfully found more information about AG1-IA and designed their shRNA based on the obtained CDS sequences from BioEdit.

## 3. Middle stage of our partnership: About Human Practices

For both of our teams, we mainly conducted activities online or on campus, which led to the limitation of our target population. To get more robust outcomes, we reached a consensus to help each other hold educational activities.

#### SZU-China → NJU-China

On June 19th, 2022, we conducted a science communication event with high school students, sharing the types, mechanisms, and current treatment methods of alopecia. Meanwhile, SZU-China offered to help us propagate our educational slides to their college WeChat group and their social media accounts to appeal to more people to obtain knowledge about alopecia.

Moreover, we held a science popularization activity at Nanjing Science and Technology Museum this summer where we introduced biology to children. Before the activity, we shared our plan with SZU-China and they helped us arrange the order and content of the activity, and provided some advice on how to vividly deliver complicated knowledge of biology to young children.

![img](https://static.igem.wiki/teams/4173/wiki/article/kejiguan-szu.png)

Figure 16 NJU-China’s Science Communication Event at the Nanjing Science and Technology Museum

### 4. Late stage of our partnership: About Science Communication

Considering the same RNAi technique we used in our projects, we decided to collaborate on Science Communications about RNAi, introducing the RNAi technique to more students majoring in biology.

#### SZU-China → NJU-China

SZU-China conducted activities with freshmen in their school and invited us to join the popularization activity through an online meeting. SZU-China introduced the background and mechanism of RNAi and we introduced the development history of the RNAi and our project design to the audience.

![img](https://static.igem.wiki/teams/4173/wiki/article/nju-china-introduce.png)

Figure 17 NJU-China introducing the history of RNAi and our project design

#### NJU-China → SZU-China

On October 7th, 2022, we held an offline lecture on campus, targeting students who were interested in synthetic biology and the iGEM Competition. In the lecture, we invited SZU-China to attend online to introduce the background and mechanism of RNAi to the audience, and we collected some questions from the audience about RNAi, which were then clearly answered by SZU-China.

![img](https://static.igem.wiki/teams/4173/wiki/article/education-on-campus.png)

Figure 19 SZU-China introducing the background and mechanism of RNAi

### 5.Late stage of our partnership: About Presentation

Before the end of the Competition, we arranged to hold our last meeting online. In order to simulate the Jamboree, we decided to present our project’s latest version. During the meeting, we precisely examined our project slides and gave each other useful advice.

We suggest that the content of SZU-China’s background introduction should contain less text and should be more refined. Meanwhile, SZU-China proposed to us to integrate the logical story of Human Practices into the whole presentation of our project, and we took their advice into account. 

![img](https://static.igem.wiki/teams/4173/wiki/article/presentation.png)

Figure 20 Final presentation of NJU-China & SZU-China

At the end of our meeting, we sincerely organized and summarized the outcomes of our Partnership, and sincerely thanked each other for the long-term partnership.

## Epilog of Partnership

In this year’s iGEM Competition, Teams BUCT and SZU-China have obviously been crucial partners for us, and we supplement each other in various aspects of our project throughout the competition. We have collaborated closely from human practices to science communication, from project design to project presentation, and from market investigation to project implementation. In the past six months, we deepened the project, enriched our understanding of human practices, and most importantly, enhanced our friendship. Here we sincerely thank Teams BUCT and SZU-China for their close partnership with us all the time!

For now, we ended the competition with Auld Lang Syne. Looking back on our past partnership, all sorts of feelings welled up in our minds. We became familiar with each other through this competition and we sincerely hope to continue our friendship and have more in-depth communication after the iGEM Competition.
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