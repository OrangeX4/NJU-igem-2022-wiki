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
# Extraction technique model

## 1. Model ideas

For our team, we often encounter some problems while conducting Tangential Flow Filtration (TFF), such as low rate of target protein recovery, increasing pressure in feed after a period of filtration, etc. How can these problems be solved effectively? We must figure out several important parameters of TFF and the interplay between them and establish experiment conditions best suitable for samples via exploring and optimizing. These parameters include two stress-related parameters and 2 flow rate-related parameters.



## 2. Model principle

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



## 3. Model results

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