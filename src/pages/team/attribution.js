import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"
import Icon from "../../components/icon"
import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Top from "../../components/top"

import "papercss"


const title = `Team`
const markdown = `
# Attribution

Hi everyone~ We are NJU-China from Nanjing University, Jiangsu, China. This year is the 9th year of our expedition to iGEM (2013-2018; 2020-2022). NJU-China has been committed to bringing new and creative ideas of synthetic biology into hot research fields. This year, we've been exploring a new field and had some processes.

This year's team was formed in December 2021, consisting of 15 students. 13 students from the School of life sciences, 1 student from the School of Chemistry and Chemical Engineering, and 1 student from the School of Earth Sciences and Engineering jointly participated in the project.



## Student members

|    Members     |                            Photo                             |                         Attribution                          |
| :------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|   Qiang Liu    | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-liu-qiang.jpg)<br />One of the team leaders | He arranged and completed most of the Human Practice, communication with other teams, and interviews with experts; developed most stage plans of the team; completed experiments of sEVs extraction; filmed and produced our promotion video; designed and completed models and participated in making wiki (Model, Human Practice, Judging form, Calendar). |
|  Qianhui Yang  | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-yang-qianhui.jpg)One of the team leaders | She put forward the idea of our project and completed most of the design, experimental planning, and design of most components; completed most experiments throughout the year; filmed and produced our promotion video; finished safety form and participated in making wiki (Design of our page, Project, Calendar) |
|    Yuchi Li    | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-li-yuchi.jpg)One of the team leaders | He completed experiments including molecular experiments, plasmid extraction, and tangential flow; attended meetups (presentation), activities, and design of our promotion video; completed figures of our design using Biorender and participated in making wiki (Achievement, Judging form, Protocol). |
|   Zhiyi Juan   | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-juan-zhiyi.jpg)One of the team leaders | She helped select our target gene; attended and planned most Human Practice activities including questionnaire design and distribution, meetups presentation, interviews, activities communication and arrangement, and production of our promotion video; participated in making wiki (Human Practice, Calendar) and completing the written parts of our propagation. |
|  Hongjun Liu   | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-liu-hongjun.jpg) | She completed cell experiments; attended activities; finished many documents and participated in making wiki (Implementation). |
|   Haoyu Sun    | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-sun-haoyu.jpg) | She designed our siRNA and plasmids; completed molecular experiments and plasmid extraction; contacted experts and finished making educational materials; participated in making our promotion video and making wiki (Design of our page, parts) |
| Qingmiao Zhou  | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-zhou-qingmiao.jpg) | She completed the future plan for our vitro animal experiments, attended meetups and activities, helped finishing safety form, and participated in making wiki (Project, Parts). |
| Qiongdan Liang | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-liang-qiongdan.jpg) | She completed molecular experiments, attended activities and interviews,  helped finishing safety form, and participated in making wiki (Design of our page, Implementation). |
|   Sijie Wei    | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-wei-sijie.jpg) | She completed most of our Art design including poster, brochure, and meetup handbook, attended activities, and participated in making wiki (Art). |
| Jiashang Chen  | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-chen-jiashang.jpg) | He completed the future plan for our vitro animal experiments, attended activities, and participated in making wiki (Implementation) |
|  Yingjun Peng  | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-peng-yingjun.jpg) | He completed the consumption level analysis model, finished making educational materials, and attended meetups and activities. |
|   Hanyu Yang   | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-yang-hanyu.jpg) | She completed experiments of sEVs extraction, designed the arrangement for our activities and helped collect the contents of our interviews. |
|   Zirun Yin    | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-yin-zirun.jpg) | He completed experiments on plasmid extraction and attended interviews with experts. |
|   Ruining Hu   | ![image-20221010103236159](https://static.igem.wiki/teams/4173/wiki/members/1-hu-ruining.png) | She made up the script of our promotion video, designed the arrangement for our activities, helped finish safety form, and participated in making wiki (Implementation). |
|  Xinyang Dong  | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-dong-xinyang.jpg) | He helped design our questionnaire and collected the contents of our interviews. |



## Advisors

|   Advisors   |                            Photo                             |                         Attribution                          |
| :----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|  Chenyu Tao  | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-tao-chenyu.jpg) | He guided us to design our project, experiments, and Human Practices. |
| Ruoyan Zhang | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-zhang-ruoyan.jpg) | She is the chief consultant of the wet experiment provided a lot of literature for the team's experimental design. He also guided the students in the wet experiment group to complete most of the experiments. |
| Nannan Jiang | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-nannan-jiang.jpg) | He communicated and discussed with the team every week, participated in the meetings organized by the team as a guest, and provided advice on experiments and Human Practices for us throughout the Competition. |
|  Tianyi Ni   | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-ni-tianyi.jpg) | He helped us register for our project, provided advice on our project, and helped us contact experts. |
|    Yi Qiu    | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-qiu-yi.png) |          She guided us to conduct cell experiments.          |
|  Xinwen Yan  | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-yan-xinwen.jpg) |        She guided us through the design of plasmids.         |
| Xiaohan Song | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-song-xiaohan.jpg) |     He gave us some advice on the design of our project.     |
|   Hao Sun    | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-sun-hao.jpg) |   He gave us some advice on the design of our experiments.   |
| Yanran Zhao  | ![img](https://static.igem.wiki/teams/4173/wiki/members/1-zhao-yanran.jpg) | She gave us some advice on the design of our Human Practices. |



## PI

| <img src="https://static.igem.wiki/teams/4173/wiki/members/1-chen-xi.jpg" alt="img" style="zoom: 200%;" />Xi Chen | He guided us to decide the direction of our project promotion and helped us get the chance to interview many experts in different fields. |
| :----------------------------------------------------------: | :----------------------------------------------------------: |



## Acknowledgment



From the beginning of 2022 to the end of 2022, COVID-19 is still raging all over the world, and we have encountered many dilemmas throughout the Competition.

Thanks to every member of the team, as well as teachers and advisors, for their meritorious guidance. This project would not have been completed without you.

Thanks for the funding support from the M3 lab, the Department of Life Science, and the Office of Academic Affairs of Nanjing University, who provided the laboratory and required material involved in the experiments of our project. Thank NJU Advanced Institution for Life Science and Jiangsu Engineering Center for MicroRNA Biology and Technology for the technical support.

Thank GenScript for the opportunity to participate in the exchange and discussion, for the industrialization of the project to provide possibility. Thank the Second Affiliated Hospital Of Xi'an Jiaotong University, Echo Biotech, and Linden Asset for providing the opportunity for an interview and giving us helpful advice. Thank Nanjing Science and Technology Museum for providing the opportunity for Human Practice activities.

![img](https://static.igem.wiki/teams/4173/wiki/members/acknowledge.png)
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