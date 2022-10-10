import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"
import Icon from "../../components/icon"
import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Top from "../../components/top"

import "papercss"


const title = `Project`
const markdown = `
# Implementation

## 1. Summary

This year, NJU-China focused on the treatment of androgenic alopecia (AGA), designing an “sEV + siRNA / mRNA” transdermal drug based on large-scale sEV extraction technology (TFF/BE-SEC), which has lower toxicity and immunogenicity compared to traditional drugs. It targets the cause of AGA and has an appropriate effect time. Moreover, this “sEV + siRNA / mRNA" transdermal drug delivery system has a longer effect, which provides more accurate and convenient treatment for patients with other skin diseases and has more advantages in commercialization. We have established cooperation intention with GenScript to start a new company in the future. The detailed content is listed below.



## 2. Design

See the design and parts sections for details.

要跳转的网页：details这个单词跳转至Design



## 3. Cooperation with GenScript

### 3.1 Basis for cooperation

GenScript is proficient in nucleotide drug research and development. It is equipped with all the technologies required in the procedure from pre-IND to commercialization and owns the earliest and the largest number of cases of successful IND application, with multiple examples of clinical sample production that meet GMP standards. It possesses extensive experience in IND application and clinical production and rich and deep collaboration with CDE.

NJU-China's laboratory has been engaged in small nucleic acid research for many years with several core patents for small nucleic acid drug targets and delivery systems. Our lab has already had long-term cooperation with GenScript before. We have established a joint school enterprise research center with Nanjing University Nanjing GenScript Biotechnology. (Our PI will be involved in granting a few core patents for unimpeded cooperation in the subsequent collaboration.)



### 3.2 Opportunity

At present, the technology has applied for a national invention patent, which is being accepted. Given our long-standing relationship with GenScript, we presented our research to GenScript after signing a non-disclosure agreement. GenScript was so excited about the project that they decided to form a company with us.

![img](https://static.igem.wiki/teams/4173/wiki/project/notice-of-acceptance-of-patent-application.png)

### 3.3 Modality

We will be responsible for the research portion of the laboratory, and GenScript plans to invest funds to complete a series of preclinical and clinical trials.



## 4. Current achievements and future expectations

### 4.1 The experimental process

![img](https://static.igem.wiki/teams/4173/wiki/project/experimental-process.png)



### 4.2 Therapeutic modalities

![img](https://static.igem.wiki/teams/4173/wiki/project/design.png)

(Created with BioRender.com)



### 4.3 Future experimental plans

To further validate that our siRNA is effective using microneedle and hydrogel delivery, we plan to carry out the following animal experiments in the future.

**(1) Construct a mouse model of hair loss**

We first gave the mice two weeks to get them to adapt to the experimental environment. Seven-week-old male C57BL/6 mice were administered testosterone propionate (1mg/d, testosterone propionate dissolved in corn oil) or corn oil alone (control group) per day subcutaneously to inhibit murine hair follicles (HFs) growth. Four days later, the mice were depilated with a rosin & wax mixture, with TP or corn oil administered after depilation to make mice in all groups enter the telogen phase (hair stop growing). All mice were anesthetized by intraperitoneal injection of avertin (10ml/kg) and kept warm during the procedure of hair removal and photographing. The weight of mice was measured once before treatment and every other day after hair removal.

**(2) Treatment**

C57BL/6 mice were administered sEVs with therapeutic effects (100μg/d, dissolved in PBS) or PBS alone (control group) through skin booster for 14 days to detect the promoting effect of sEVs on HFs.

**(3) Histological examination**

Where indicated, mice were sacrificed using cervical neck dislocation before dorsal skin collection, To evaluate skin morphology and hair regrowth, skin samples collected 0, 3, 5, 8, 11, and 14 days after depilation were fixed in 4% paraformaldehyde for 24 h and embedded in paraffin blocks. Longitudinal or horizontal sections of HFs 5 μm thick were prepared and stained with hematoxylin and eosin (HE). Photographs of HE-stained sections were taken under a light microscope, and the HF stage was determined by counting over 100 HFs from each group. Skin thickness was measured using Image-Pro-Plus software, with 15 readings obtained from each group at each time point. Dermal thickness was defined as the ratio of the distance between the epidermis and the dermis to the thickness of the entire skin layer.

**(4) Preparation of GelMA loaded with sEVs**

For preparing GelMA loaded with exosomes pre-isolated exosomes were mixed with the 10% GelMA solution. Next, the final concentration of 5% GelMA, 0.1% photosite, ator, and exosomes-GelMA mixes are poured into inmoldmould and irradiated with the UV light for 1 min cross-linkingking. To detect the distribution of sEVs in GelMA, exosomes will be labeled with a green fluorescent dye, PKH67, and the,n observed by fluorescence microscopy.

**(5) Detection of the sustained drug release capacity of microneedles**

The Dil-labeled exosomes were prepared using a lipophilic tracer. Dil fluorescent dye is used, according to the manufacturer’s protocol for quantitative analysis and fluorescent imaging. In vivo release test of Dil-labeled sEVs administrated by the microneedle patch and subcutaneous injection, we can detect the release speed of sEV.



## 5. Market analysis

### 5.1 Market positioning

Our concept of drug treatment is sEVs packaging siRNA or mRNA, which provides precise medical treatment for patients with low toxicity and low immunogenicity. The existing drugs on the market have many side effects and are extremely unstable. Therefore, our product is suitable for the precise treatment of androgen alopecia patients. Due to its better treatment effect and higher price, the aesthetic medicine market will be our first choice. 

To conduct a market evaluation of our products, we distributed a questionnaire to learn about the public's views of aesthetic medicine.

According to the pie chart below, people usually heard about information about aesthetic medicine from social media, news, or chatting with other people. This result could provide ideas for us if we have a plan to promote our product in the future.

![img](https://static.igem.wiki/teams/4173/wiki/article/1-pathway-of-hearing-about-aga.png)

As for the preference of ways to accept cosmetology, the order from the highest to the lowest was daily cosmetology, corrective cosmetology, non-invasive cosmetology, and invasive cosmetology. It could be concluded that people preferred ways that were safer, milder, and less harmful. 

![img](https://static.igem.wiki/teams/4173/wiki/article/1-preference-of-ways-to-acosmetology.png)

When it came to the factors that people cared about most, safety, effect and ingredient stood out, which corresponded to the result of the alopecia questionnaire.

![img](https://static.igem.wiki/teams/4173/wiki/article/1-people-cared-about-most.png)

If a new aesthetic medicine product that was effective and easy to use was developed, the price range that people could accept most was between 500-1000 yuan, which was chosen by 46 percent of people. This could be applied as a reference for the ideal price of our product.

![img](https://static.igem.wiki/teams/4173/wiki/article/1-price-range.png)



### 5.2 Macro environment analysis (PEST analysis)

**Political**

In the 14th Five-Year Plan for Medical Security in China, drug safety and the promotion of high-quality development became the guiding ideology of the pharmaceutical industry. The intensive introduction of relevant policies has made it easier for innovative and international drugs to be put on the market. Drugs with high clinical value, a significant benefit to patients, and excellent economic evaluation will be included in the payment scope of medical insurance drugs timely to support drug innovation.

**Economic**

In 2019, China's GDP reached 99.1 trillion yuan, accounting for 16 percent of the global economy. The data showed that the size of China's pharmaceutical market grew from 1,430.4 billion yuan in 2017 to 1,791.9 billion yuan in 2020, with a compound annual growth rate of 7.8 percent. In 2021, China's pharmaceutical market reached 1,922 billion yuan. From both angles, China is a huge market.

**Social**

Previous data from the National Health Commission showed that more than 250 million people in China lose their hair, an average of one out of every six people, including 163 million men and 88 million women. Nowadays, due to increasing life pressure, more and younger people suffer from alopecia, which may affect their mental health in reverse. 

**Technology**

As natural endogenous carriers of drugs, sEVs have unique advantages, such as low immunogenicity, high stability in blood, high efficiency of drug delivery to cells, and a stronger enhanced osmotic retention effect (EFR). SiRNA can inhibit the expression of disease genes at the miRNA level, thereby preventing the occurrence of disease at the source. RNA interference technology has the advantages of high efficiency, targeting, low toxicity, and so on. The application of RNA interference technology has become one of the key development directions in the field of drug research.



### 5.3 SWOT analysis

**Strength**

**Treatment for the cause**: 5-α-reductase(5α-R) reduces the conversion of testosterone (DHT) into dihydrotestosterone (DHT), which reduces hair growth and increases resting periods, leading to hair loss. Piezo1 causes apoptosis of hair follicle stem cells (HFSC), leading to hair loss. Wnt/β-catenin signaling pathway is associated with hair regeneration. We target these signal pathways to solve the cause of alopecia.

Function by multiple pathways: Our sEV-Doctor functions in three ways including inhibiting 5α-R and piezo1 via siRNA and promoting beta-catenin via mRNA. More fabulous outcomes can be achieved by targeting multiple pathways.

**Appropriate effect time**: RNA is easily degraded in vitro environment. However, coated by sEVs, RNAs can have access to cells and function longer time to reach better effect. 

**Weakness**

**Relatively high price**: Our drugs come from artificially cultivated cells and need to be obtained by complex and costly centrifugal apparatus. High cost leads to high price. 

Low product awareness: SEVs and RNAs appear later than traditional drugs. So it’s likely that patients lack awareness of our products.

**The inconvenient approach of use**: Our products are used by microneedles, which is more inconvenient compared with the direct application.

**Opportunities**

**Excellent therapeutic effect**: We target three essential genes of alopecia, which hopefully can fulfill excellent therapeutic effects.

**Huge market prospect**: Alopecia is still a piece of blue ocean. After the success of SEV-Doctor, we’ll also consider developing new gene therapies for other illnesses.

Professional academic background: As professional learners, we’ll make sure the safety and efficiency of our products from a scientific perspective.

**Threats**

**Product risk**: At present, we have verified the safety and efficacy of the drug at the molecular level, but no animal experiments or clinical trials have been conducted. So it’s unclear whether our drug can achieve the expected efficacy in humans.

**Market risk**: Due to low acceptance and an inexperienced team, there exists a risk of failure.



## 6. Marketing strategy

![img](https://static.igem.wiki/teams/4173/wiki/project/marketing-strategy.png)



### 6.1 Product positioning

As a novel therapeutic agent, this product uses the “sEV + siRNA / mRNA” transdermal system to treat androgen alopecia. This product has more stable functions and fewer side effects, helping to improve the quality of the treatment process of patients. We will focus on the advantages of longtime effects and fewer side effects in marketing.



### 6.2 Price Strategy

We will use cost plus price strategy. The unit cost of the product plus a certain percentage of profit determines the product price. Manager Zhao said that if the content of sEV in a dose was under a trillion, then the cost price of a dose could be controlled under 1000 yuan when other elements such as intellectual property and depreciation of equipment were not considered. The estimated price would be 2000 to 3000 yuan. Due to the prohibitive cost of drug research and development, as well as the cost margin, it is expected to be around 100%. Due to large-scale production and product optimization and upgrading in the later stage, the product cost will gradually decrease, and the pricing will also decrease accordingly.



### 6.3 Promotion Strategy

#### 6.3.1 Personnel promotion

Seize B-end customers. In the process of participating in various academic conferences and forums, the team members actively promote and introduce the product, so that it is widely recognized. In addition, we will participate in various innovation and entrepreneurship competitions to attract investment and build a capital base through the competition platform.

Expand C-end customers. Team members can publicize our drugs through preferential prices to attract patients to try our drugs.



#### 6.3.2 Advertising promotion

Online platform： Business cooperation with WeChat public accounts of major medical platforms across the country, advertising for enterprises and medical institutions, focusing on product advantages.

Offline platform： we can set up billboards, posters, and detailed brochures in medical institutions.



#### 6.3.3 Relationship promotion

Establish good cooperative relations with many enterprises. Through the combination of online meetings and offline field visits, a long-term and stable cooperative relationship is formed to jointly improve products and control costs. Participate in the bidding of medical institutions and government agencies, and put the products into the market application.



### 6.4 Service Strategy



#### 6.4.1 Establish a mature website, through various forms of the introduction of our project, to popularize relevant knowledge to the public.



#### 6.4.2 B2B2C service quality management

Implement the Trinity service of "pre-sales, in-sales, and after-sales".



Before sales, the market development leader of the entrepreneurial team shall provide the B-end customers such as hospitals with product information and parameters, such as product performance, price advantage, instruction manual, etc., to make the service ahead of sales. In the sales process, actively follow up on the C terminal customer situation. The after-sales department should timely reflect the feedback of patients at terminal C, respond to the needs of patients through email, Weibo, and WeChat, patiently accept the suggestions of the medical staff at terminal B and respond to the opinions and feedback of customers within 3 working days.



## 7. Sales model

Since we are still in the initial stage of development and lack of reliable sales network and distribution channels, we will choose the mode of agent sales to enter the market faster and shorten the introduction cycle of products. In the selection of agents, we will focus on their sales channels and experience in androgen alopecia or small nucleic acid drugs. In the actual sales process of agents, we will pay attention to the information exchange with agents and deal with their feedback in time.



## 8. Financial analysis

### 8.1 Expenditure forecast

![img](https://static.igem.wiki/teams/4173/wiki/project/8-1-expenditure-forecast.png)



### 8.2 Revenue forecast

According to statistics, there are nearly 1.25 billion androgen alopecia patients around the world. The product developed in this project can effectively and conveniently control androgen alopecia, which has a broad market prospect. Based on the above background and the above pricing strategy, the annual cost reduction due to the production scale and product optimization will also reduce product pricing. We forecast the market share of sales after the launch of the product, as shown in the following table.

![img](https://static.igem.wiki/teams/4173/wiki/project/8-2-revenue-forecast.png)



### 8.3 Historical income statement

·Through data collection, statistical analysis, and consultation with relevant experts, we make the following assumptions about the relevant financial data：

·Income tax rate: Following the provisions of Article 28 of the Enterprise Income Tax Law of the People's Republic of China, the enterprise income tax shall be levied at a reduced rate of 20%.

·Machinery, equipment, and office supplies have a depreciation life of 10 years and a net salvage rate of 10%. Depreciation is extracted using linear regression.

·Withdraw 10% of the statutory surplus reserve according to the after-tax profit every year.

·The benchmark discount rate is 12.89%. (Discount rate = 4%risk return + 5.41%risk-free return + 3.48%inflation rate)

![img](https://static.igem.wiki/teams/4173/wiki/project/8-3-historical-income-statement.png)
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