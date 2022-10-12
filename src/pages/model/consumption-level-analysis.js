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


const title = `Model`
const markdown = `
# Consumption Level Analysis

## 1. Model ideas

In order to conduct a market evaluation of our products, and to see if the public can afford our product's price, we collected economic data from different statistical websites and conducted consumption analysis in three different countries, which shows that people could afford our products with little burden.



## 2. China

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



## 3. UK and US

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



**References:**

[1]https://data.stats.gov.cn/index.htm

[2]http://www.stats.gov.cn/tjsj/ndsj/2021/indexch.htm

[3]http://www.stats.gov.cn/tjsj/ndsj/2015/indexch.htm

[4]https://www.ons.gov.uk

[5]https://www.ers.usda.gov
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