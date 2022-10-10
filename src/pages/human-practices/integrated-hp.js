import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"
import Icon from "../../components/icon"
import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Top from "../../components/top"

import "papercss"


const title = `Human Practice`
const markdown = `
# Integrated HP

## Background

### How our HP shape our project

While we were selecting the vector for drug delivery at the beginning, sEV caught our sight. But this was followed by the question of why using sEVs rather than synthetic liposomes. We consulted Manager Zhao and Professor Jiang Xiaohong about the comparison between sEVs and liposomes. Manager Zhao said that liposomes are usually used in situ administration or can target parenchymal hepatic cells, but the targeting ability was poor; The types of drugs embedded in liposomes are relatively simple, generally nucleic acid drugs; Liposomes also have safety problems in terms of immunogenicity and toxicity. In contrast, sEVs can be recycled to different compartments with a wide delivery range and have good biocompatibility. In addition, more complex engineering transformations can take place on sEVs, which means sEVs have better scalability. 

Professor Jiang also mentioned that though liposomes can deliver siRNA into cells in large quantities, most of the siRNA was then consumed by lysosomes and degraded. Since sEVs were part of our natural delivery system, cells could apply their own tools to utilize molecules wrapped in sEVs, the efficiency of which was relatively high.

### How we respond to our HP

We chose to use sEVs as the vector for drug delivery for their high delivery efficiency, good biocompatibility, and better scalability.

## Design

### How our HP shape our project

During the design process, we consulted experts in the field of sEVs and alopecia to refine our experimental design. Professor Zheng Lei suggested that we should consider how to wrap mRNA into sEVs since it was bigger in size than siRNA, which was taken into careful consideration. After we came up with a solution, Dr. Fu Qingling then pointed out that experiments were required to test whether mRNA was attached to the outer or inner membrane of the sEVs. She also recommended that we use nested PCR to examine the content of mRNA in sEVs, which was very helpful for us.

### How we respond to our HP

We looked up in the literature and found that L7ae can be used to connect mRNA to the CD63 on the sEV membrane and refined our design accordingly. Also, we planned to cultivate sEVs with RNase to test whether mRNA was wrapped into the sEVs successfully. Nested PCR was also applied in our experiments and achieved good results.

## Results of our questionnaire

### How our HP shape our project

According to the results of our two distributed questionnaires, safety and effect were what the public cared about most when they were choosing alopecia and aesthetic medicine products.

### How we respond to our HP

We used BLAST to prove that the siRNAs that we designed have a low off-target effect so their safety could be guaranteed.

## Model

### How our HP shape our project

After we received the results of questionnaires on the public's views of aesthetic medicine and alopecia products, we conducted multiple regression models to predict the outcome of people's acceptance of the new method based on the value of the rest answers. An equation was obtained from the analysis: 

 Acceptance of new method=0.5185+0.2615*Knowledge of sEV+0.0135*Acceptance of price (Hundred)+ 0.1919*Degree of anxiety+0.3411*Acceptance of EM

It can be seen from the equation that the more knowledge people possessed about sEV, the greater their acceptance of new methods. This conclusion provided guidance for our future HP plan.

### How we respond to our HP

In order to boost the public's acceptance of the new method our project applied, we conducted a lecture with Nanjing-China and SZU-China to popularize knowledge of RNAi and sEV-related technology. Students were interested in our project design after being popularized with related knowledge, the event turned out to be a great success. 

## Industrialization

### How our HP shape our project

We learned a lot about the sEV and alopecia market background and received valuable opinions from our interviews with Manager Zhao and Manager Chen. The estimated price of a dose of sEV drug, according to Manager Zhao, was 2000-3000 yuan. In addition, Manager Chen gave us suggestions on how to get investment and position our product correctly. He also pointed out a promising future direction for our project. 

### How we respond to our HP

We planned to place our product in the aesthetic medicine market and then distributed a questionnaire to understand how the public views aesthetic medicine. In our future plans, we also hoped to build a "sEV+microneedle" delivery system to deal with more skin diseases such as psoriasis.
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