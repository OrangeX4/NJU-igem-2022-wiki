import React from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"
import { Helmet } from "react-helmet"

import Icon from "../components/icon"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Top from "../components/top"

import "papercss"


const title = `Parts`
const markdown = `
# NJU-China 2022 iGEM Team Parts

We have used or made several parts during the whole process of our project, each of which has its own functions and features. This year's new parts were integrated with the wisdom of our team members Haoyu Sun and they all displayed different results we expected. Here are the details of our parts, you can click the links for more information.

## Basic Parts

| **Part Number**                                              | **Part  Name** | **Part Type** | **Abstract**                                                 | **Matching  Medal** |
| ------------------------------------------------------------ | -------------- | ------------- | ------------------------------------------------------------ | ------------------- |
| [BBa_K4173000](http://parts.igem.org/Part:BBa_K4173000)      | 5αR-siRNA-1    | RNA           | This part  expresses siRNA for 5αR, which can specifically degrade 5αR. 5αR is a reductase  that catalyzes the conversion of testosterone to DHT. DHT causes the atrophy  and closure of hair follicle cells through a series of downstream signaling  pathways, which ultimately leads to androgen alopecia. The siRNA we used  specifically binds to DHT reductase 5αR mRNA, thereby inhibiting the  translation of this gene and downregulating the 5αR level in hair follicle  cells, thereby reducing the effect of androgen (testosterone) on hair  follicle cells and thereby inhibiting androgen alopecia. We also designed  other five siRNAs with the same function, and **this one proved to be the most  effective**. | Silver              |
| [BBa_K4173001](http://parts.igem.org/Part:BBa_K4173001) | 5αR-siRNA-2    | RNA           | This part  expresses siRNA for 5alphaR, which can specifically degrade 5alphaR. We compare  it with another five 5alphaR-siRNAs to  select the best siRNA. | Bronze              |
| [BBa_K4173002](http://parts.igem.org/Part:BBa_K4173002) | 5αR-siRNA-3    | RNA           | This part  expresses siRNA for 5alphaR, which can specifically degrade 5alphaR. We compare  it with another five 5alphaR-siRNAs to  select the best siRNA. | Bronze              |
| [BBa_K4173003](http://parts.igem.org/Part:BBa_K4173003) | 5αR-siRNA-4    | RNA           | This part  expresses siRNA for 5alphaR, which can specifically degrade 5alphaR. We compare  it with another five 5alphaR-siRNAs to  select the best siRNA. | Bronze              |
| [BBa_K4173004](http://parts.igem.org/Part:BBa_K4173004) | 5αR-siRNA-5    | RNA           | This part  expresses siRNA for 5alphaR, which can specifically degrade 5alphaR. We compare  it with another five 5alphaR-siRNAs to  select the best siRNA. | Bronze              |
| [BBa_K4173005](http://parts.igem.org/Part:BBa_K4173005) | 5αR-siRNA-6    | RNA           | This part  expresses siRNA for 5alphaR, which can specifically degrade 5alphaR. We compare  it with another five 5alphaR-siRNAs to  select the best siRNA. | Bronze              |
| [BBa_K4173006](http://parts.igem.org/Part:BBa_K4173006) | Piezo1-siRNA-1 | RNA           | This part  expresses siRNA for Piezo1, which can  specifically degrade Piezo1. We compare  it with another five Piezo1-siRNAs to  select the best siRNA. | Bronze              |
| [BBa_K4173007](http://parts.igem.org/Part:BBa_K4173007) | Piezo1-siRNA-2 | RNA           | This part  expresses siRNA for Piezo1, which can  specifically degrade Piezo1. We compare  it with another five Piezo1-siRNAs to  select the best siRNA. | Bronze              |
| [BBa_K4173008](http://parts.igem.org/Part:BBa_K4173008) | Piezo1-siRNA-3 | RNA           | This part  expresses siRNA for Piezo1, which can  specifically degrade Piezo1. We compare  it with another five Piezo1-siRNAs to  select the best siRNA. | Bronze              |
| [BBa_K4173041](http://parts.igem.org/Part:BBa_K4173041) | Piezo1-siRNA-4 | RNA           | This part  expresses siRNA for Piezo1, which can  specifically degrade Piezo1. We compare  it with another five Piezo1-siRNAs to  select the best siRNA. | Bronze              |
| [BBa_K4173042](http://parts.igem.org/Part:BBa_K4173042) | Piezo1-siRNA-5 | RNA           | This part  expresses siRNA for Piezo1, which can  specifically degrade Piezo1. Piezo1 is a mechanically gated cation channel in cell membranes. Piezo1 has been used for the treatment of weightlessness related diseases. According to literature review, Piezo1 is also abnormally activated in the process of apoptosis of hair follicle stem cells, and inhibiting the function of Piezo1 receptor can alleviate the apoptosis of hair follicle stem cells caused by mechanical stress. Meanwhile, up-regulation of apoptosis in hair follicle stem cells was also observed during androgen alopecia. Our siRNA can inhibit the translation of Piezo1 gene by binding to its mRNA, thereby down-regulating the level of Piezo1 receptor on cell membrane and inhibiting the apoptosis of hair follicle stem cells during androgen alopecia. We also designed other five siRNAs with the same function, and **this one proved to be the most  effective**. | Silver              |
| [BBa_K4173043](http://parts.igem.org/Part:BBa_K4173043) | Piezo1-siRNA-6 | RNA           | This part  expresses siRNA for Piezo1, which can  specifically degrade Piezo1. We compare  it with another five Piezo1-siRNAs to  select the best siRNA. | Bronze              |
| [BBa_K4173021](http://parts.igem.org/Part:BBa_K4173021) | **β-catenin**  | Coding        | The gene not only  encodes classical calcium mucin adhesion complex which is not only an  important composition of the cytoplasm that formed in the epithelial cells of  the adhesive connection but also mediates cell-cell adhesion of many other  organizations, encodes Wnt signaling pathways in the typical key signaling  molecule which is the signaling pathways in normal development to control in  the process of tumor cell growth and differentiation. The gene product  contains a central armadillo repeat domain through which it binds to the  cytoplasmic tail of classical cadherins. At the same time, it also binds  α-catenin, further linking the cadherin complex directly or indirectly to the  actin cytoskeleton. So β-catenin is necessary for the adhesion of classical  cadherins. Another key function of this protein is to mediate the canonical  Wnt signaling pathway and regulate gene transcription. If there is an absence  of of Wnt signaling, cytoplasm-serial protein which has nothing to do with  the calcium mucin complexes serine/threonine residues on the n end on the  degradation of so-called complex is fast phosphorylated. The degradation of  protein complexes containing axis, adenomatous escherichia coli (APC), casein  kinase I and GSK3B might play, and this complexes then go through TRCP  ubiquitin and proteasome degradation. However, in the presence of Wnt  signaling, the degradation complex is disrupted and stable cytoplasmic  -catenin translocates into the nucleus, where it binds various transcription  factors and, together with these factors, regulates the transcription of many  downstream genes. Mutations in this gene have been linked to various types of  tumors. Splice variants of the gene have also been found. | Silver              |
| [BBa_K4173022](http://parts.igem.org/Part:BBa_K4173022) | CD63           | Coding        | CD63 is a member  of the tetraspanin superfamily of activation-linked cell surface antigens  with N-terminal and C-terminal intracellular domains, two link domains and  two annular extracellular domains, and is one of the most widely used exosome  markers(CD63, CD9, CD81). More recently, however, their presence in other EVs  has been observed. According to the latest study, CD63 was proved to be the  specific marker for exosome, while EVs bearing only CD9 or CD81 but not CD63  probably did not form in endosomes. CD63 is known for its abnormally high  levels on the surface of activated basophils, on proliferating mast cells,  and on the surface of endothelial cells in inflamed tissue. CD63 plays an  important role in the regulation of cargo sorting and vesicle formation. As a  transmembrane protein located specifically on exosomes, it can be used as a  base protein for fusing other proteins on which help the target protein  locate on the membrane and be packaged into exosomes. | Silver              |
| [BBa_K4173024](http://parts.igem.org/Part:BBa_K4173024) | L7Ae           | Coding        | L7Ae is an  archaeal ribosomal protein 7Ae 60S large ribosomal subunit, a subunit of  archaeal RNase P, plays multiple roles in archaea. It is part of the H/ACA  and the C/D box snoRNPs, which catalyze rRNA pseudouridylation and  2’-O-methylation respectively. Thus, L7Ae is one of the most commonly used  riboswitches which RNA-only delivery gene circuits highly rely on except RNA  binding proteins (RBP). L7Ae, a K-turn and K-loop binding protein, is a  component of box C/D RNPs and interacts with the K-turn motifs of archaeal  box C/D sRNAs3. Through the interaction between L7Ae and C/D box RNA  structure which is added at UTR of reporter gene, the target protein can be  grasped and stay close to L7Ae. Then target protein can be held on the  membrane of exosomes when L7Ae is conjugated to the C-terminus of CD63.  Finally, L7Ae-CD63 can serve as an active packaging device of specific RNAs  into exosomes. | Silver              |



## Composite Parts

| **Part Number**                                              | **Part  Name**                              | **Part Type** | **Abstract**                                                 | **Matching  Medal** |
| ------------------------------------------------------------ | ------------------------------------------- | ------------- | ------------------------------------------------------------ | ------------------- |
| [BBa_K4173045](http://parts.igem.org/Part:BBa_K4173045) | **pcDNA3.1-box CD mini- β catenin-mCherry** | Plasmid       | This  DNA circuit is designed to express specific protein. It can express beta  catenin.The gene not only  encodes classical calcium mucin adhesion complex which is not only an  important composition of the cytoplasm that formed in the epithelial cells of  the adhesive connection but also mediates cell-cell adhesion of many other  organizations, encodes Wnt signaling pathways in the typical key signaling  molecule which is the signaling pathways in normal development to control in  the process of tumor cell growth and differentiation. The gene product  contains a central armadillo repeat domain through which it binds to the  cytoplasmic tail of classical cadherins. At the same time, it also binds  α-catenin, further linking the cadherin complex directly or indirectly to the  actin cytoskeleton. So β-catenin is necessary for the adhesion of classical  cadherins. Another key function of this protein is to mediate the canonical  Wnt signaling pathway and regulate gene transcription. If there is an absence  of of Wnt signaling, cytoplasm-serial protein which has nothing to do with  the calcium mucin complexes serine/threonine residues on the n end on the  degradation of so-called complex is fast phosphorylated. The degradation of  protein complexes containing axis, adenomatous escherichia coli (APC), casein  kinase I and GSK3B might play, and this complexes then go through TRCP  ubiquitin and proteasome degradation. However, in the presence of Wnt  signaling, the degradation complex is disrupted and stable cytoplasmic  -catenin translocates into the nucleus, where it binds various transcription  factors and, together with these factors, regulates the transcription of many  downstream genes. Mutations in this gene have been linked to various types of  tumors. Splice variants of the gene have also been found. | Gold                |
| [BBa_K4173046](http://parts.igem.org/Part:BBa_K4173046) | **pcDNA3.1-CD63-L7Ae-mCherry**              | Plasmid       | This DNA circuit is designed to express specific proteins. It can express the  fusion protein CD63-L7Ae. CD63 is a member  of the tetraspanin superfamily of activation-linked cell surface antigens  with N-terminal and C-terminal intracellular domains, two link domains and  two annular extracellular domains, and is one of the most widely used exosome  markers(CD63, CD9, CD81). More recently, however, their presence in other EVs  has been observed. According to the latest study, CD63 was proved to be the  specific marker for exosome, while EVs bearing only CD9 or CD81 but not CD63  probably did not form in endosomes. CD63 is known for its abnormally high  levels on the surface of activated basophils, on proliferating mast cells,  and on the surface of endothelial cells in inflamed tissue. CD63 plays an  important role in the regulation of cargo sorting and vesicle formation. As a  transmembrane protein located specifically on exosomes, it can be used as a  base protein for fusing other proteins on which help the target protein  locate on the membrane and be packaged into exosomes. L7Ae is an  archaeal ribosomal protein 7Ae 60S large ribosomal subunit, a subunit of  archaeal RNase P, plays multiple roles in archaea. It is part of the H/ACA  and the C/D box snoRNPs, which catalyze rRNA pseudouridylation and  2’-O-methylation respectively. Thus, L7Ae is one of the most commonly used  riboswitches which RNA-only delivery gene circuits highly rely on except RNA  binding proteins (RBP). L7Ae, a K-turn and K-loop binding protein, is a  component of box C/D RNPs and interacts with the K-turn motifs of archaeal  box C/D sRNAs3. Through the interaction between L7Ae and C/D box RNA  structure which is added at UTR of reporter gene, the target protein can be  grasped and stay close to L7Ae. Then target protein can be held on the  membrane of exosomes when L7Ae is conjugated to the C-terminus of CD63.  Finally, L7Ae-CD63 can serve as an active packaging device of specific RNAs  into exosomes. | Gold                |
| [BBa_K4173048](http://parts.igem.org/Part:BBa_K4173048) | pcDNA3.1-si5alphaR1-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target 5alphaR and down-regulate the expression level of  relevant target mRNA. | Silver              |
| [BBa_K4173049](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-si5alphaR2-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target 5alphaR and down-regulate the expression level of  relevant target mRNA. | Bronze              |
| [BBa_K4173050](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-si5alphaR3-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target 5alphaR and down-regulate the expression level of  relevant target mRNA. | Bronze              |
| [BBa_K4173051](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-si5alphaR4-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target 5alphaR and down-regulate the expression level of  relevant target mRNA. | Bronze              |
| [BBa_K4173052](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-si5alphaR5-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target 5alphaR and down-regulate the expression level of  relevant target mRNA. | Bronze              |
| [BBa_K4173053](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-si5alphaR6-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target 5alphaR and down-regulate the expression level of  relevant target mRNA. | Bronze              |
| [BBa_K4173054](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-siPiezo1-1-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target Piezo1 and down-regulate the expression level of  relevant target mRNA. | Bronze              |
| [BBa_K4173055](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-siPiezo1-2-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target Piezo1 and down-regulate the expression level of  relevant target mRNA. | Bronze              |
| [BBa_K4173056](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-siPiezo1-3-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target Piezo1 and down-regulate the expression level of  relevant target mRNA. | Bronze              |
| [BBa_K4173057](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-siPiezo1-4-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target Piezo1 and down-regulate the expression level of  relevant target mRNA. | Bronze              |
| [BBa_K4173058](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-siPiezo1-5-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target Piezo1 and down-regulate the expression level of  relevant target mRNA. | Silver              |
| [BBa_K4173059](http://parts.igem.org/Part:BBa_K4173049) | pcDNA3.1-siPiezo1-6-mCherry                 | Plasmid       | This  DNA circuit is designed to express specific siRNA that specifically target Piezo1 and down-regulate the expression level of  relevant target mRNA. |                     |

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