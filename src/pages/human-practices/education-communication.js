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


# Education & Communication

## The materials that we use in education&communication activities

### The introduction of synthetic biology

![img](https://static.igem.wiki/teams/4173/wiki/article/synthetic-biology.jpg)

### The introduction of alopecia

![img](https://static.igem.wiki/teams/4173/wiki/article/alopecia-4.png)

![img](https://static.igem.wiki/teams/4173/wiki/article/alopecia1.png)

![img](https://static.igem.wiki/teams/4173/wiki/article/alopecia2.png)

### The introduction of RNAi technology and small extracellular vesicles (sEV)

![img](https://static.igem.wiki/teams/4173/wiki/article/rnai.jpg)

## Popularizing scientific knowledge to children at Nanjing Science and Technology Museum

This summer, SZU helped us design a science popularization activity facing children, including interesting experiments and drawing sessions. We held the activity at Nanjing Science and Technology Museum with children coming for a visit, most of whom were elementary school students. We showed the children our promotion video at the beginning, informing them of what we were doing in a vivid way. Children were quite interested in the lovely hairy scary monster and watched carefully. Next, we taught these children the concept of DNA and how to extract DNA from bananas. When children lifted white flocculus from the solution via glass rods, they smiled so brightly. We also told them what sEVs were, inviting them to draw sEVs based on their imagination. The canvas was at last filled with colorful bubbles containing all kinds of things children adored.  The activity was a success and we hoped that we have planted small seeds in their little minds, arousing their interest and curiosity in biology. 

![img](https://static.igem.wiki/teams/4173/wiki/article/dsc-0008.jpg)

![img](https://static.igem.wiki/teams/4173/wiki/article/dsc-0070.jpg)

![img](https://static.igem.wiki/teams/4173/wiki/article/dsc-0077.jpg)

![img](https://static.igem.wiki/teams/4173/wiki/article/dsc-1030.jpg)

![img](https://static.igem.wiki/teams/4173/wiki/article/kejiguan.jpg)

## Science communication toward high school students

Apart from performing interesting experiments for children, we also wanted to share the concept of our project with high school students to get them interested in synthetic biology. As a result, we discussed with BUCT and decided to hold a science communication event in high school on World No Hair Loss Day to popularize knowledge about hair loss. On June 19th, we held a lecture at Jinling High School with members of the Wisteria Biology Association. First, Hongjun Liu introduced the history and concept of synthetic biology as well as iGEM. Next, the promotion video of our project was shown to the students to help them get a better understanding of what we have done this year vividly. After that, the types, mechanisms, and current treatment methods of alopecia were shared by Zhiyi Juan, the background information of this presentation was once discussed with BUCT.  This was then followed by a brief introduction to our project design.
During the event, the students showed great interest in our project and got themselves involved actively. Since they have just entered high school, some of the concepts might seem distant and complex to them, but we hoped that this lecture can give them a basic idea of what synthetic biology is and the endless possibilities we can achieve through it. At the same time, we would be so glad if they could view androgenic alopecia more scientifically.

<img src="https://static.igem.wiki/teams/4173/wiki/article/science-edu-in-high-school.jpg" alt="img"  />

![img](https://static.igem.wiki/teams/4173/wiki/article/sci2.jpg)

![img](https://static.igem.wiki/teams/4173/wiki/article/sci3.jpg)

## Science communication toward undergraduate students

After successfully holding the scientific popularization event with children and high school students, we hoped to exchange our ideas with younger biology major students and stimulate their interest in iGEM, getting more people involved in this comprehensive competition. 

This autumn, NJU-China, Nanjing-China, and SZU-China jointly organized a lecture for sophomores of the School of Life Science. During the event, representatives of each team gave presentations on different topics. Nanjing-China first introduced knowledge about synthetic biology. We then talked about the history and background of iGEM. After that, SZU-China talked about the background and mechanism of RNAi technology. Last but not least, we introduced our project briefly to them in order to expand the influence of our team and let more students know about the design and existing results of our project. 

The lecture attracted many students and they were curious about synthetic biology and RNAi technology that we applied. Questions like whether sophomores with little background knowledge could take part in iGEM and what are the strengths and weaknesses of RNAi technology were raised. We discussed about them enthusiastically after the presentation ended. Many students also expressed their aspiration in joining the competition next year so we built a recruitment QQ group for iGEM 2023, which marked a great success of the event.

![img](https://static.igem.wiki/teams/4173/wiki/article/education-on-campus.png)

## The debate competition themed by "Whether compassionate use should be allowed in gene therapy"

On September 29th, 2022, we held a debate competition with the help of the Debate Association of Nanjing University, the theme of which was "Whether compassionate use should be allowed in gene therapy". We invited members of the debate team to join the competition and explained to them the concept of gene therapy and compassionate use beforehand. Many students came to watch this competition and this event turned out to be a great success. The debaters and students reflected that they really enjoyed the process and this was a good chance for them to learn about related biological knowledge.

![img](https://static.igem.wiki/teams/4173/wiki/project/debate-1.jpg)

![img](https://static.igem.wiki/teams/4173/wiki/project/debate-2.jpg)

## Propagation

### Operating the official account

During the process of our competition, we released some articles and tweets about the progress of our project and synthetic biology through our team's WeChat official account and NIA account. Also, we released the English and Chinese versions of the promotion video on our bilibili account, with the view counts of the Chinese version reaching 4000. These articles and videos let more people get to know our project and synthetic biology.

![img](https://static.igem.wiki/teams/4173/wiki/article/propagation.png)

### Releasing brochures to popularize our project

Aside from operating our official accounts, we also created a brochure that introduced our project background, design, and superiority. We printed and released these brochures to the students while we were holding science communication activities, hopefully, these brochures will help them learn more about our project.

![img](https://static.igem.wiki/teams/4173/wiki/article/brochure.gif)

![img](https://static.igem.wiki/teams/4173/wiki/article/promotion-vedio-brochure.gif)
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