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
# Epidemiology analysis of androgenetic alopecia

## 1. Model ideas

With the increase in social stress and irregular daily routines, androgenetic alopecia (AGA) has affected numerous people around the world. In order to get familiar with the global condition of patients suffering from AGA, we collected patients’ data from open-source literature, cleaned the data, and processed them into our datasets. Then we used RStudio to analyze the data to see the statistical features of the datasets. 

All analyses were conducted using R software (version 4.2.0) with “tidyverse”, “skimr”, “MASS”, “pander”, “openxlsx”, “ggplot2”, “Rcpp”, “dplyr”, “ggstatsplot”, “PerformanceAnalytics”, “viridis”, “corrplot”, “plyr”, “hrbrthemes” packages.

 

## 2. Epidemiologic characteristics of androgenetic alopecia patients

We collected and cleaned data from different literature targeting androgenetic alopecia. A total of 3047 individuals from 9 countries with confirmed androgenetic alopecia were evaluated. Among the patients, 2775 were men and 272 were women. Some patients’ gender, country, age, and alopecia severity were evaluated, using the Hamilton–Norwood scale (HNS) for men and the Ludwig scale (LS) for women. Then we used R to get the epidemiologic characteristics of androgenetic alopecia patients as is shown in Figure 4.

The Hamilton-Norwood scale is used to assess the degree of balding, available treatments, and efficacy of such treatments. The Norwood scale makes it simpler to determine where stage a patient is at in his alopecia because most men lose their hair in typical patterns. Meanwhile, the Ludwig Scale categorizes female pattern baldness into three separate stages.

As is shown in Figure 1, the analysis population has a male-to-female ratio of 10.2: 1, and the patients are widely distributed around the world. After conducting some exploratory data analysis, we want to analyze the age distribution group by gender or country, so we conducted box-violin plots as Figure 1-C&D. Remarkably, the box-violin plots demonstrate that there is a similar age distribution in both genders, and the mean age is around 36 for both genders. Meanwhile, most countries’ mean age is around 30 except Spain (which might be due to the limitation of the dataset).

#### Figure 1 code:

~~~
# Age distribution group by gender (Figure 1-C)

pdf("box-violin plot of gender.pdf",width=8,height=8)

ggbetweenstats(

 data=AGA_data,

 x=Gender,

 y=Age,

 title="Age distribution of AGA patients in different gender",

 message=FALSE

)

# Age distribution group by country (Figure 1-D)

pdf("box-violin plot of country.pdf",width=8,height=8)

ggbetweenstats(

 data=AGA_data,

 x=Country,

 y=Age,

 title="Age distribution of AGA patients in different countries",

 message=FALSE

)
~~~



![img](https://static.igem.wiki/teams/4173/wiki/model/epidemiologic-characteristics-of-androgenetic-alopecia-patients.png)

#### Figure 1 Epidemiologic characteristics of 3047 androgenetic alopecia patients.

 (A) Gender distribution of androgenetic alopecia patients. (B) Country distribution of androgenetic alopecia patients. (C) The box-violin plots of the age distribution of androgenetic alopecia patients in different gender. (D) The box-violin plots of the age distribution of androgenetic alopecia patients in different countries.

 

## 3. Linear regression model of Age and Degree of Androgenetic alopecia

As is shown in the first part, age is an important factor affecting androgenetic alopecia patients. To analyze the specific correlation between age and androgenetic alopecia, we first processed the dataset to exclude patients without a degree and conducted exploratory data analysis with the degree of alopecia in both genders. After that, we made a correlation linear plot between the degree of alopecia and the age of patients. 

Because of the different criteria in alopecia of males and females, we separate the dataset and fit their linear regression models respectively. However, we didn’t get a robust model of female patients (which might be due to the limitation of the dataset).

#### Figure 2 code:

\`\`\`
# Degree data frame

degree_data <- na.omit(AGA_data$Degree)

male_data <- degree_data[grep(pattern="M", degree_data$Gender),]

female_data <- degree_data[grep(pattern="F", degree_data$Gender),]

# Degree distribution of male patients (Figure 2-A)

male_data %>%

 ggplot(aes(x=HNS, fill=Country)) +

  geom_histogram(color="#e9ecef", alpha=0.6, position = 'identity') +

  scale_fill_brewer(palette = "Paired") +

  labs(fill="") + 

 theme(panel.grid.major=element_blank(),panel.grid.minor=element_blank(),

    panel.background=element_blank(),axis.line=element_line(colour="black"))

# Degree distribution of female patients (Figure 2-B)

female_data %>%

 ggplot(aes(x=LS, fill=Country)) +

  geom_histogram(color="#e9ecef", alpha=0.6, position = 'identity') +

  scale_fill_brewer(palette = "Paired") +

  labs(fill="")+ 

 theme(panel.grid.major=element_blank(),panel.grid.minor=element_blank(),

    panel.background=element_blank(),axis.line=element_line(colour="black"))

# Age distribution of patients with a degree data (Figure 2-C)

degree_data %>%

 ggplot(aes(x=Age)) +

  geom_histogram(color="black", alpha=0.6, position = 'identity') +

  scale_fill_continuous() +

  labs(fill="")+ 

 theme(panel.grid.major=element_blank(),panel.grid.minor=element_blank(),

    panel.background=element_blank(),axis.line=element_line(colour="black"))

# Correlation linear plot of Degree against Age of male patients (Figure 2-D)

pdf("Cor of Age and Degree of male androgenetic alopecia (HNS).pdf",width=9,height=7.5)

ggscatterstats(

 data=male_agedata,

 x=Age,

 y=HNS,

 type="p",

 bin=30,

 conf.level=0.99,

 messages=TRUE

)

dev.off
\`\`\`

![img](https://static.igem.wiki/teams/4173/wiki/model/linear-regression-model.png)

#### Figure 2 Distribution of Age and HNS (androgenetic alopecia degree). 

(A) The histogram of the degree distribution of the male patients group by country. (B) The histogram of the degree distribution of the female patients group by country. (C) The histogram of the age distribution of the patients with a degree. (D) Correlation plot of Degree against Age of male patients.

 

The relationship between AGA degree (HNS and LS) and the age of patients was studied: AGA degree (HNS and LS) was the dependent variable that was to be estimated from the independent variable, the age of patients. Based on the dataset, the following regression line was determined (using stepwise selection):

\`\`\`
 HNS (Male) = 2.282 + 0.02451 × Age
\`\`\`

Where AGE is the age of the male patient and HNS is his AGA level. The y-intersect a = 0.957 is the value of the dependent variable when AGE = 0, but AGE cannot possibly take on the value 0 in this study (we obviously cannot expect a person of age 0 years to get AGA level 0.957). Therefore, it is frequently useless to understand the constant. In a linear regression model, only values that fall within the range of independent variable observations should be employed; the farther one deviates from this range, the more erroneous the prediction of the value of the dependent variable becomes.



During the research, no good model was selected to fit females' LS level and age, so we think there was little correlation between them or it was caused by the sample size.

Our results showed a considerable effect of patients' age on the prevalence and degree of AGA in patients.

 

#### Figure 3 code:

\`\`\`
linear.model <- lm(HNS~Age,data=male_data)

summary(linear.model)

 

stepwiseSelection <- stepAIC(linear.model,direction="both",

               trace=FALSE,k=log(NROW(male_data)))

summary(stepwiseSelection)

pander::pander(stepwiseSelection)
\`\`\`

 

![img](https://static.igem.wiki/teams/4173/wiki/model/linear-model.png)

#### Figure 3 Linear regression model between Degree and Age of male patients.

 

## 4. Limitation

In the regression model part, we’ve fitted a robust model between the Degree of androgenetic alopecia and Age in male patients. Many restrictions, though, shouldn't be disregarded. First, several other significant aspects, such as living quality, sleep patterns, and mental health, may have an impact on the level and prevalence of AGA in patients. Therefore, these issues should be examined in future studies. Secondly, we only took 3047 samples (within which only 272 female patients were included) into account, which wasn’t big enough to hold a strong conclusion, maybe more data should be collected to do further studies.

 

**Reference:**

[1] Kutlu Ö, Metin A. Systemic dexpanthenol as a novel treatment for female pattern hair loss. J Cosmet Dermatol. 2021;20(4):1325-1330. doi: 10.1111/jocd.13729

[2] Gupta S, Goyal I, Mahendra A. Quality of life assessment in patients with androgenetic alopecia. Int J Trichology. 2019;11(4):147-152. doi: 10.4103/ijt.ijt_6_19

[3] Liu F, Miao Y, Li X, et al.. The relationship between self-esteem and hair transplantation satisfaction in male androgenetic alopecia patients. J Cosmet Dermatol. 2018;18(5):1441-1447. doi: 10.1111/jocd.12839

[4] Ghimire RB. Impact on quality of life in patients who came with androgenetic alopecia for hair transplantion surgery in a clinic. JNMA J Nepal Med Assoc. 2018;56(212):763-765. doi: 10.31729/jnma.3500

[5] Tas B, Kulacaoglu F, Belli H, Altuntas M. The tendency towards the development of psychosexual disorders in androgenetic alopecia according to the different stages of hair loss: a cross-sectional study. An Bras Dermatol. 2018;93(2):185-190. doi: 10.1590/abd1806-4841.20185658

[6] Yu NL, Tan H, Song ZQ, Yang XC. Illness perception in patients with androgenetic alopecia and alopecia areata in China. J Psychosom Res. 2016;86:1-6. doi: 10.1016/j.jpsychores.2016.04.005

[7] Han SH, Byun JW, Lee WS, et al.. Quality of life assessment in male patients with androgenetic alopecia: result of a prospective, multicenter study. Ann Dermatol. 2012;24(3):311-318. doi: 10.5021/ad.2012.24.3.311

[8] He, Fanping; Shen, Minxue; Zhao, Zhixiang; Liu, Yicong; Zhang, Shuping; Tang, Yan; et al. (2022): Prevalence of androgenetic alopecia by characteristics of participants.. PLOS ONE. Dataset. doi: 10.1371/journal.pone.0263912.t001

[9] Wambier, Carlos; Vañó, Sergio; Goren, Andy (2020), “Raw data from JAAD research letter: Androgenetic alopecia present in the majority of patients hospitalized with COVID-19: The "Gabrin sign", Mendeley Data, V1, doi: 10.17632/tphxzjkrh8.1.

[10] Wambier, Carlos; Goren, Andy; dhurat, rachita; Pai, Suraj (2020), “COVID-19: Raw data from study of severity of alopecia versus hospital outcomes”, Mendeley Data, V1, doi: 10.17632/jdkx76y8fz.1.
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