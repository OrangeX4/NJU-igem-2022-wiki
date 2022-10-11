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


const title = `Team`
const markdown = `
# Member

## Students

We have 13 team members from School of Life Science，1 from School of Chemistry and Chemical Engineering and 1 from School of Earth Sciences and Engineering. There are 6 boys and 9 girls at the same time. With the project going, more intelligent students will be invited to join us.

![img](https://static.igem.wiki/teams/4173/wiki/members/group-photo.png)

| ![img](https://static.igem.wiki/teams/4173/wiki/members/liu-qiang.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/yang-qianhui.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/li-yuchi.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/juan-zhiyi.png) |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/liu-hongjun.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/sun-haoyu.png) |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/zhou-qingmiao.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/liang-qiongdan.png) |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/wei-sijie.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/chen-jiashang.png) |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/peng-yingjun.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/yang-hanyu.png) |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/yin-zirun.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/hu-ruining.png) |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/dong-xinyang.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/nju-china-2022.png) |



## Advisors

| ![img](https://static.igem.wiki/teams/4173/wiki/members/tao-chenyu.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/zhang-ruoyan.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/nannan-jiang.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/ni-tianyi.png) |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/qiu-yi.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/yan-xinwen.png) |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/song-xiaohan.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/sun-hao.png) |
| ![img](https://static.igem.wiki/teams/4173/wiki/members/zhao-yanran.png) | ![img](https://static.igem.wiki/teams/4173/wiki/members/chen-xi.png) |
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