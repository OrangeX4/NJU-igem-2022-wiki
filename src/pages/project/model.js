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


const title = `Project`
const markdown = `
# Model

## 1. Epidemiology analysis of androgenetic alopecia

### 1.1 Model ideas

With the increase in social stress and irregular daily routines, androgenetic alopecia (AGA) has affected numerous people around the world. In order to get familiar with the global condition of patients suffering from AGA, we collected patients’ data from open-source literature, cleaned the data, and processed them into our datasets. Then we used RStudio to analyze the data to see the statistical features of the datasets. 

All analyses were conducted using R software (version 4.2.0) with “tidyverse”, “skimr”, “MASS”, “pander”, “openxlsx”, “ggplot2”, “Rcpp”, “dplyr”, “ggstatsplot”, “PerformanceAnalytics”, “viridis”, “corrplot”, “plyr”, “hrbrthemes” packages.

 

### 1.2 Epidemiologic characteristics of androgenetic alopecia patients

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

 

### 1.3 Linear regression model of Age and Degree of Androgenetic alopecia

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

 

### 1.4 Limitation

In the regression model part, we’ve fitted a robust model between the Degree of androgenetic alopecia and Age in male patients. Many restrictions, though, shouldn't be disregarded. First, several other significant aspects, such as living quality, sleep patterns, and mental health, may have an impact on the level and prevalence of AGA in patients. Therefore, these issues should be examined in future studies. Secondly, we only took 3047 samples (within which only 272 female patients were included) into account, which wasn’t big enough to hold a strong conclusion, maybe more data should be collected to do further studies.

 

### 1.5 Reference

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

 

## 2. Questionnaire analysis

### 2.1 Model ideas

In order to conduct a market evaluation of our products, we distributed a questionnaire to learn about the public's views of aesthetic medicine and alopecia products. After receiving the results from the public, we immediately conducted data analysis to see the factors affecting the choices of the public.

All analyses were conducted using R software (version 4.2.0) with “tidyverse”, “skimr”, “MASS”, “pander”, “openxlsx”, “ggplot2”, “Rcpp”, “dplyr”, “ggstatsplot”, “PerformanceAnalytics”, “corrplot”, “plyr” packages.

 

### 2.2 Correlation analysis

To analyze the correlation between the answers from the questionnaire, we first cleaned and processed the answer selections into degree numbers, and conducted the correlation plots to briefly see the significance of the correlation between each answer.

A total of 446 questionnaires in China were evaluated, and the basic information distributions are shown in the Human Practice part.

 

#### Figure 4 code:

\`\`\`
# Heat Map of correlation of data from the questionnaire (Figure 4-A)

cor_matr = cor(questionnaire)

write.table(cor_matr, file="cor_matr.xls",row.names=F, 

​      col.names=T,quote=FALSE,sep="\t")

corrplot(cor_matr, type="upper", order="hclust", 

​     tl.col="black", tl.srt=45)

# Correlation and significance plot of data from the questionnaire (Figure 4-B)

chart.Correlation(questionnaire,histogram = TRUE,pch=30)
\`\`\`

 ![img](https://static.igem.wiki/teams/4173/wiki/model/correlation.png)

#### Figure 4 Correlation analysis of the questionnaire dataset.

 (A) Heat Map of correlation of data from the questionnaire, (B) Correlation and significance plot of data from the questionnaire.

 

### 2.3 Multivariable linear regression models

In order to figure out the specific correlation between answers to different questions, we conducted multiple regression models to predict the outcome of each answer based on the value of the rest answers. After that, we used stepwise selection to get the perfect model for each answer. Among these models, we chose two with meaningful guidance for our project to see the factors that affect the answer of the public, and the models are shown below:

 

#### Multiple Linear Regression – Formula:

\`\`\`
Yi = β0 + β1xi1 + β2xi2 + ··· + βpxip + ϵ
\`\`\`

Where:

Yi is the dependent or predicted variable

β0 is the y-intercept, i.e., the value of y when both xi and x2 are 0.

β1 and β2 are the regression coefficients representing the change in y relative to a one-unit change in xi1 and xi2, respectively.

βp is the slope coefficient for each independent variable

ϵ is the model’s random error (residual) term.

 

#### Figure 5 code:

\`\`\`
full.model1 <- lm(Acceptance.of.new.method ~ . ,data = questionnaire)

summary(full.model1)

stepwiseSelection1 <- stepAIC(full.model1,direction="both",

​               trace=FALSE,k=log(NROW(questionnaire)))

summary(stepwiseSelection1)
\`\`\`





 ![img](https://static.igem.wiki/teams/4173/wiki/model/model1.png)

#### Figure 5 Multivariable linear regression model of Acceptance of new method of the public.

 

#### Equation 1:

\`\`\`
Acceptance of new method = 0.5185 + 0.2615 * Knowledge of exosome + 0.0135 * Acceptance of price (Hundred) + 0.1919 * Degree of anxiety + 0.3411 * Acceptance of EM
\`\`\`

Where:

Acceptance of new method is the degree of people's acceptance of a new method for diseases; Knowledge of exosome is the degree of people's knowledge of exosome and RNA interference; Acceptance of price is the degree of people's acceptance of price for our product (if our product would have an effect with fewer side-effects); Degree of anxiety is the degree of people suffering the anxiety because of their appearance; Acceptance of EM is the degree of people's acceptance for the product of aesthetic medicine.

#### Figure 6 code:

\`\`\`
full.model2 <- lm(Acceptance.of.price ~ . ,data = questionnaire)

summary(full.model2)

stepwiseSelection2 <- stepAIC(full.model2,direction="both",

​               trace=FALSE,k=log(NROW(questionnaire)))

summary(stepwiseSelection2)
\`\`\`

 

#### Figure 6 Multivariable linear regression model of Acceptance of price of the public.

 

#### Equation 2:

\`\`\`
Acceptance of price (Hundred) = 18.98 - 0.1973 * Age - 0.6794 * Income (Thousand) - 1.787 * Knowledge of exosome + 2.007 * Acceptance of new method
\`\`\`

 Where:

Income (Thousand) is the provided income from the questionnaire; Acceptance of new method is the degree of people's acceptance of a new method for diseases; Knowledge of exosome is the degree of people's knowledge of exosome and RNA interference; Acceptance of price is the degree of people's acceptance of price for our product (if our product would have an effect with fewer side-effects).



According to the equations above, we can confirm what factors can influence the acceptance of a new method or the price of it for the public, which helped us to arrange our next plan for Human Practice.

 

#### 2.4 Limitation

In the multivariable linear regression model part, we’ve fitted robust models between the answers to different questions. Many restrictions, though, shouldn't be disregarded. First, several other significant aspects, such as job, education level, and living region, may have an impact on the answer of questions. Therefore, these issues should be examined in future questionnaires. Secondly, we only took 446 samples into account, which wasn’t big enough to hold a strong conclusion, maybe more questionnaires should be collected to conduct further studies.



## 3. Consumption Level Analysis

### 3.1 Model ideas

In order to conduct a market evaluation of our products, and to see if the public can afford our product's price, we collected economic data from different statistical websites and conducted consumption analysis in three different countries, which shows that people could afford our products with little burden.

### 3.2 China

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

We can figure out the lowest Per Capita Disposable Income that If medical expenses would not exceed 40% of the ability to pay:

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



### 3.3 UK and US

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

 

### 3.4 References

[1]https://data.stats.gov.cn/index.htm

[2]http://www.stats.gov.cn/tjsj/ndsj/2021/indexch.htm

[3]http://www.stats.gov.cn/tjsj/ndsj/2015/indexch.htm

[4]https://www.ons.gov.uk

[5]https://www.ers.usda.gov



## 4. Extraction technique model

### 4.1 Model ideas

For our team, we often encounter some problems while conducting Tangential Flow Filtration (TFF), such as low rate of target protein recovery, increasing pressure in feed after a period of filtration, etc. How can these problems be solved effectively? We must figure out several important parameters of TFF and the interplay between them and establish experiment conditions best suitable for samples via exploring and optimizing. These parameters include two stress-related parameters and 2 flow rate-related parameters.



### 4.2 Model principle

TFF can improve the filtration rate by preventing large molecules from stacking on condition that certain rate-v3 of the original fluid scour filter membrane. 

According to Bernoulli‘s equation:

\`\`\`
P3 + ρV3^2 / 2 + ρgh = P3' + ρV3'^2 / 2 + ρgh = C
\`\`\`

A bigger P3 leads to a slower rate. A certain value of P3 is needed to push liquor to go through the filter. A certain value of v3 is needed to scour the filter membrane as well.

We consider the volume after filtration of each circulation to be the same, 3.5 mL. In practice, when the pressure difference is 5 psi, about 35 kPa, P3 is 35 kPa. 20 mL filtrate can be obtained after filtering 90 mL of original fluid. The total filtration time is 30 min. The flow rate of the original fluid is 50 mL/min. The filtration times are nearly 20. So, there exists an equation V = kP3 , where k = 0.1 ml/kPa. 

The diameter of the filtration tube is 0.25 cm, so the flow rate of filtrate V3 = 0.17 m/s by calculation.

While P3 is fixed, ρ becomes increasingly larger with a concentration in single filtration.

Before TFF, after 5 times dilution, the number of particles per mL is 5.97 e8 ±1.39 e7, with 90 mL volume of fluid.

After TFF, after 5 times dilution, the number of particles per mL is 1 .39 e9 ± 8.25 e7, with 20 mL volume of fluid.



### 4.3 Model results

According to Bernoulli's equation:

\`\`\`
P3 + ρV3^2 / 2 + ρgh = P3' + ρV3'^2 / 2 + ρgh = C
\`\`\`

When P3 = 35 kPa，V3 = 0.17 m / s，ρ = 997 kg/m^3, g = 10 m/s^2，h = 1.5 m, the constant C is 49956.5, so we can get the results:

\`\`\`
ρ = 29913 / (V^2 + 30), S = ρ * V^2 / 2 = 29913 * V^2 / 2*(V^2 + 30)
\`\`\`

The shear force of blood circulating in human arteries is 4 - 30 dynes/cm^2, 1 dynes = 10^(-5) N. Therefore, we assume the biggest shear force exosomes can undertake is 30 dynes/cm^2. That’s to say, the maximum pressure caused by the liquid flow on the surface of the filter membrane flushing exosomes shall not be higher than 3Pa, that is, ρV^ 2/2 shall not be greater than 3. Finally, V should be less than or equal to 0.0775 m/s, which is equivalent to the liquid flow rate should be less than 22.8 ml/min.

As the filtration process processing, the density of fluid decreases, and the speed increases gradually. The sheer force also rises gradually. The final density is measured to be about 950.92 ug/uL. In other words, V = 1.22m/s, and the shear force is about 707Pa, which will cause a large amount of exosome loss.

#### Model code:

\`\`\`
ρ = 29913 / (v^2 + 30)
S = 29913 * V^2 / 2*(V^2 + 30)
Plot[ρ,{V,0,1}]
Plot[S,{V,0,1}]
\`\`\`

![img](https://static.igem.wiki/teams/4173/wiki/project/model/extraction-model.png)

#### Figure 7 Extraction model between: (A) ρ of product and liquid flow rate; (B) The shear force and liquid flow rate.
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