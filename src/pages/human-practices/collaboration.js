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
# Collaboration

## Nanjing IGEM Association Meetup in May

Nanjing iGEM Association was established by the NJU-China iGEM Team in 2021 and joined by teams from several other universities in Nanjing, with the aim to build up a platform where communication and collaboration of local teams could be facilitated. On the 4th of June, 2022, the Nanjing iGEM Team Exchange Conference was held online by NJU-China and attended by NJMU-China, NJTech-China, NAU-China, CPU-China, and Nanjing-China. 

![img](https://static.igem.wiki/teams/4173/wiki/article/nia.png)

### Team Report

The first presentation was given by NJU-China, whose aim this year was to treat androgenic alopecia with genetically engineered sEVs. By packaging siRNA and mRNA into sEVs, NJU-China targeted at main gene pathways involved in the hair growth cycle to alleviate hair loss and promote hair growth. Nanjing-China, also coming from Nanjing University, asked about the subject of modeling. They also suggested that collaboration with Dr. Ding should be considered since one of his research interests lay in transdermal drug delivery.

The second team was NJMU-China. To treat mitochondrial dysfunction in patients with autism, bacteria were designed to secrete NAD+ to enhance mitochondrial function and adsorb heavy metals to reduce their damage to mitochondria. At the same time, a home urine test strip was designed by using lactic acid as the response substance. A question was raised by other teams on the proportion of mitochondrial dysfunction in autism induced by heavy metals, driving NJMU-China to look for these specific data.

Next comes NJTech-China， whose aim was to modify *Clostridium butyricum* and promote its oxygen resilience. Knocking out the hydrogen peroxide expressor PerR can raise the productivity of bacteria in an aerobic environment, but at the cost of the production efficiency in anaerobic conditions. Therefore, NJTech-China came up with three ideas to optimize their design, which involved engineered PerR transcriptional regulators, increased expression of DNA protective proteins, and restored metabolic pathways.

NAU-China this year focused on the home detection of chronic hepatitis through the content of urinary bile acids. Sulfate groups of sulfated bile acids are removed by sulfatase, FXR then recognizes bile acids, combines with RXR to form dimers, and turns on fluorescent molecules to dimerize and emit red fluorescence, thus achieving the purpose of displaying the results. When asked about the quantitative method, they answered that instruments for fluorescence detection were abandoned since they wanted to promote the familiarization of the kit.

Then CPU-China gave their presentation on the convenient and fast detection of various kinds of cancer. By conducting literature reviews, LincA was found to be related to the occurrence and development of several types of cancer, chosen as the indicator. Constant temperature amplification technology was applied to carry out nucleic acid amplification in vitro to achieve the goal of detection. Questions were raised on the cost of the product, the duration of enzyme activity, and whether the amount of indicator was enough for detection.

The last presentation was given by Nanjing-China, whose project was on the energy track. They were dedicated to producing microbial fuel batteries consisting of Shewanella and silver nanoparticles. So far, it was proven that the concentration of silver shows no effect on the growth of Shewanella. To endogenously obtain silver nanoparticles, the metal-binding protein was transferred into the strains. Though the design of their project was quite different from others, other teams showed great interest in their project. They were curious about the recovery of Shewanella batteries as well as the way the bacteria adsorbed on the electrode. Both questions were then explained carefully by the speakers.

### Ending

After the presentation and discussion period, a short conclusion was given by Qiang Liu, leader of NJU-China. All the team members turned their cameras on to take a group photo, marking a successful ending of the first NIA meetup. 



## Collaboration with Nanjing-China

### The debate competition themed by "Whether compassionate use should be allowed in gene therapy"

On September 19th, 2022, we held a debate competition with the help of the Debate Association of Nanjing University, the theme of which was "Whether compassionate use should be allowed in gene therapy". We invited members of the debate team to join the competition and explained to them the concept of gene therapy and compassionate use beforehand. Many students came to watch this competition and this event turned out to be a great success. The debaters and students reflected that they really enjoyed the process and this was a good chance for them to learn about related biological knowledge.

![img](https://static.igem.wiki/teams/4173/wiki/project/debate-1.jpg)

![img](https://static.igem.wiki/teams/4173/wiki/project/debate-2.jpg)



## Collaboration with OUC-China

### Experimental collaboration with OUC-China

In order to transport the product out of the engineered bacteria in time and break through the limitation of limited types of transporters, OUC China decided to apply aptamer to the transmembrane transport of the product. The RNA molecule, which functioned as a transporter, consisted of two different types of RNA. One RNA was responsible for targeting the membrane structure and the other one was responsible for the specific binding of the product. In order to test the transport performance of transfer RNA, OUC-China decided to use the extracellular closed membrane structure to incubate with transfer RNA and product molecules. After the incubation, the remaining content of the product molecule will be measured to test the transport performance of transfer RNA. Our team focused on sEV-targeted therapy and was familiar with the relevant experimental operations of sEVs. So we used sEVs to help OUC-China test the transport performance of transfer RNA.



## Attending meetups

On May 1st, 2022, our team participated in the iGEM meet-up hosted by CPU-China, HiZJU-China, ZJU-China, ZJUintI-China, and ZJUT-China. 

![img](https://static.igem.wiki/teams/4173/wiki/article/0501igem-meeting-up.png)

![img](https://static.igem.wiki/teams/4173/wiki/article/2022-05-01-igem-meeting-up.jpg)

On June 25th, 2022, our team participated in the iGEM North-South Forum hosted by SUSTech_EMB, which was attended by ten teams from different parts of China.

![img](https://static.igem.wiki/teams/4173/wiki/article/south-north-meetup.png)

On July 8th, 2022, our team participated in the iGEM online meeting held by HBUT-iGEM.

![img](https://static.igem.wiki/teams/4173/wiki/article/hbut.png)

On July 16th, 2022, our team participated in the iGEM summer vacation online meetup.

![img](https://static.igem.wiki/teams/4173/wiki/article/china-igem-online-meetup.png)

On August 5th, 2022, our team participated in the education meetup hosted by NNU-China and NJTech-China.

![img](https://static.igem.wiki/teams/4173/wiki/article/education-meetup.png)

On August 6th and 7th, 2022, our team attended the offline Hangzhou meetup hosted by Worldshaper-HZ, ZJU-China, and ZJUT-China. 

![img](https://static.igem.wiki/teams/4173/wiki/article/hangzhou-meetup.png)

On August 18th-20th, we participated in the CCiC conference hosted by ShanghaiTech_China. A 15 -minute presentation on the topic “Treatment of Androgenic Alopecia by Genetically Engineered sEVs” was given. In the discussion period, the host asked if we’d consider working with BUCT, another team aiming at promoting hair growth. 

![img](https://static.igem.wiki/teams/4173/wiki/article/ccic.png)

During this process of attending meetups, we received many valuable questions and suggestions from other teams. For example, a student pointed out that we should pay attention to whether the inhibition of pizeo1 would affect the normal function of other cells. The region where our drug took an effect was limited to the dermis of the drug delivery area, thus bringing little effect on other normal cells.

A judge from CCiC once suggested replacing siRNA with shRNA, which is smaller and easier to wrap up. He also doubted why sEVs rather than liposomes were applied as the carrier of the delivery system. We searched for information online and confirmed that sEVs from MSC have less cytotoxicity than liposomes. What’s more, we were exploring how to realize large-scale sEV production by applying techniques such as stable transfection, scaling up cell factories, tangential flow filtering, and molecular exclusion chromatography. By achieving the engineering of sEV production and pharmaceuticals, the cost of applying sEVs will be reduced dramatically, resulting in potential economic benefits over liposomes. Since sEVs were applied as carriers, we didn’t consider using shRNA as it is artificially synthesized and couldn’t be wrapped into sEVs.
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