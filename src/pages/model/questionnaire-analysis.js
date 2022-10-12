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
# Questionnaire analysis

## 1. Model ideas

In order to conduct a market evaluation of our products, we distributed a questionnaire to learn about the public's views of aesthetic medicine and alopecia products. After receiving the results from the public, we immediately conducted data analysis to see the factors affecting the choices of the public.

All analyses were conducted using R software (version 4.2.0) with “tidyverse”, “skimr”, “MASS”, “pander”, “openxlsx”, “ggplot2”, “Rcpp”, “dplyr”, “ggstatsplot”, “PerformanceAnalytics”, “corrplot”, “plyr” packages.

 

## 2. Correlation analysis

To analyze the correlation between the answers from the questionnaire, we first cleaned and processed the answer selections into degree numbers, and conducted the correlation plots to briefly see the significance of the correlation between each answer.

A total of 446 questionnaires in China were evaluated, and the basic information distributions are shown in the Human Practice part.

 

### Figure 4 code:

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

 

## 3. Multivariable linear regression models

In order to figure out the specific correlation between answers to different questions, we conducted multiple regression models to predict the outcome of each answer based on the value of the rest answers. After that, we used stepwise selection to get the perfect model for each answer. Among these models, we chose two with meaningful guidance for our project to see the factors that affect the answer of the public, and the models are shown below:

 

### Multiple Linear Regression – Formula:

\`\`\`
Yi = β0 + β1xi1 + β2xi2 + ··· + βpxip + ϵ
\`\`\`

Where:

Yi is the dependent or predicted variable

β0 is the y-intercept, i.e., the value of y when both xi and x2 are 0.

β1 and β2 are the regression coefficients representing the change in y relative to a one-unit change in xi1 and xi2, respectively.

βp is the slope coefficient for each independent variable

ϵ is the model’s random error (residual) term.

 

### Figure 5 code:

\`\`\`
full.model1 <- lm(Acceptance.of.new.method ~ . ,data = questionnaire)

summary(full.model1)

stepwiseSelection1 <- stepAIC(full.model1,direction="both",

​               trace=FALSE,k=log(NROW(questionnaire)))

summary(stepwiseSelection1)
\`\`\`





 ![img](https://static.igem.wiki/teams/4173/wiki/model/model1.png)

#### Figure 5 Multivariable linear regression model of Acceptance of new method of the public.

 

### Equation 1:

\`\`\`
Acceptance of new method = 0.5185 + 0.2615 * Knowledge of exosome + 0.0135 * Acceptance of price (Hundred) + 0.1919 * Degree of anxiety + 0.3411 * Acceptance of EM
\`\`\`

Where:

Acceptance of new method is the degree of people's acceptance of a new method for diseases; Knowledge of exosome is the degree of people's knowledge of exosome and RNA interference; Acceptance of price is the degree of people's acceptance of price for our product (if our product would have an effect with fewer side-effects); Degree of anxiety is the degree of people suffering the anxiety because of their appearance; Acceptance of EM is the degree of people's acceptance for the product of aesthetic medicine.

### Figure 6 code:

\`\`\`
full.model2 <- lm(Acceptance.of.price ~ . ,data = questionnaire)

summary(full.model2)

stepwiseSelection2 <- stepAIC(full.model2,direction="both",

​               trace=FALSE,k=log(NROW(questionnaire)))

summary(stepwiseSelection2)
\`\`\`

 

#### Figure 6 Multivariable linear regression model of Acceptance of price of the public.

 

### Equation 2:

\`\`\`
Acceptance of price (Hundred) = 18.98 - 0.1973 * Age - 0.6794 * Income (Thousand) - 1.787 * Knowledge of exosome + 2.007 * Acceptance of new method
\`\`\`

 Where:

Income (Thousand) is the provided income from the questionnaire; Acceptance of new method is the degree of people's acceptance of a new method for diseases; Knowledge of exosome is the degree of people's knowledge of exosome and RNA interference; Acceptance of price is the degree of people's acceptance of price for our product (if our product would have an effect with fewer side-effects).



According to the equations above, we can confirm what factors can influence the acceptance of a new method or the price of it for the public, which helped us to arrange our next plan for Human Practice.

 

## 4. Limitation

In the multivariable linear regression model part, we’ve fitted robust models between the answers to different questions. Many restrictions, though, shouldn't be disregarded. First, several other significant aspects, such as job, education level, and living region, may have an impact on the answer of questions. Therefore, these issues should be examined in future questionnaires. Secondly, we only took 446 samples into account, which wasn’t big enough to hold a strong conclusion, maybe more questionnaires should be collected to conduct further studies.
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