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


const title = `Notebook`
const markdown = `
# Protocol

## 1. Plasmid transformation (using DH5α competent cell)

(1) Place the bacterial liquid on ice for 5min to melt;

(2) Mix 50μL DH5α bacterial liquid with 100ng plasmid (100ng/μL) and place on ice for 25min;

(3) 42℃ metal bath heat hit 90-120s;

(4) Place the mixture on the ice again for 2min;

(5) Add 400-500μL sterile antibody free medium, shake on the shaker for 60min (37℃, 200rpm).



## 2. Plasmid extraction

Take 50mL bacterial liquid for example:

(1) Collect *E. coli* by centrifugation (5000rcf, 20min), abandon the supernatant.

(2) Add 1mL SolutionⅠ, 500μL SolutionⅡ,250μL SolutionⅢ in turn, and mix them up side down gently;

(3) Centrifuge at 13000rcf for 10min at 4℃, filtrate, and transfer the supernatant into a new EP tube;

(4) Add 0.1 times the volume of ETR to each tube and mix them upside down;

(5) Place the tube on ice for 10min, and mix the solution up side down several times during this period;

(6) Heat the mix with 42℃ metal bath for 5min;

(7) Centrifuge at 12000rcf for 3min at 4℃,and transfer the supernatant into a new EP tube;

(8) Add 0.5 times the volume of alcohol, mix them up side down.

(9) Continuously add the mixed liquid in (8) to the adsorption column, centrifuge(4℃, 14000rcf, 1min), and discard the waste liquid;

(10) Add 500μL HBC Buffer into the adsorption column, centrifuge at 14000rcf for 1min at 4℃;

(11) Add 700μL DNA Wash Buffer into the adsorption column, centrifuge at 14000rcf for 1min at 4℃;

(12) Repeat the operation in (11);

(13) Centrifuge at 14000rcf for 2min at 4℃, put the adsorption column into a new collection tube, open the cover and dry it for 5min;

(14) Add 100μL ddH20 to the adsorption column at 65℃, stood for 2min, and centrifuged at 12000rcf for 2min at 4℃;

(15) Measure the concentration of plasmid in the collection tube and stored at -20℃.



## 3. sEVs extraction 1 – Ultracentrifugation (UC)

(1) Collect cell culture media, centrifuge at 500rcf for 10min at 4℃, and transfer the supernatant into a new centrifuge bottle;
(2) Centrifuge at 2000rcf for 20min at 4℃, and transfer the supernatant into a new centrifuge bottle;

(3) Centrifuge at 10000rcf for 30min at 4℃, and transfer the supernatant into a new centrifuge bottle;

(4) Filter the solution with 0.22μm filter;

(5) Centrifuge at 110000rcf for 2h at 4℃, abandon the supernatant, add 100μL filtered PBS and resuspend the sediment.



## 4. sEVs extraction 2 - Exosome isolation kit (EIK)

(1) Collect cell culture media, centrifuge at 300rcf for 10min at 4℃, and transfer the supernatant into a new centrifuge bottle;

(2) Centrifuge at 3000rcf for 10min at 4℃, and transfer the supernatant into a new centrifuge bottle;

(3) Filter the solution with 0.22μm filter;

(4) Continuously add the solution to the ultrafiltration column, centrifuge at 3000rcf for 30min at 4℃ until the solution was concentrated to 1mL ;

(5) Transfer the solution to a new EP tube, add 500μL Total Exosome Isolation, mix them well, and place the tube overnight at 4℃;

(6) Centrifuge at 10000rcf for 1h at 4℃, abandon the supernatant, add 100μL filtered PBS and resuspend the sediment.



## 5. sEVs extraction 3 - TFF/BE-SEC

### 5.1 Tangential Flow Filtration (TFF)

(1) Collect cell culture media, centrifuge at 300rcf for 5min at 4℃, and transfer the supernatant into a new centrifuge bottle;

(2) Centrifuge at 2000rcf for 10min at 4℃, and transfer the supernatant into a new centrifuge bottle;

(3) Filter the solution with 0.22μm filter;

(4) Start the device, install the filter column, and wash it with ddH2O for 5min at a flow rate of 100mL/min;

(5) Drain the column, rinse the column with 200mL PBS for 2min.

(6) Drain the column, add the solution in (3) into the tank and go through the column repeatedly to concentrate to 20mL.



### 5.2 Bind-elute size exclusion chromatography (BE-SEC)

(1) Prime the tubing with water to avoid air going through the column. To remove ethanol and avoid precipitation of buffer salts, wash the column with 2 column volumes (CVs) of Milli-Q water at a flow rate of 3 mL/min and pressure threshold set at 0.5 MPa (sample valve set to buffer, wash valve set to column and outlet valve set to waste).

(2) Prime the column with 5 CVs of filtered 0.01 M PBS or in the buffer in which the sample is diluted in, with a flow rate of 2–3 mL/min. Sample valve set to buffer, wash valve set to column and outlet valve set to waste.

(3) Before loading the sample, make sure the UV absorbance baseline is stable; when it is stable, the baseline can be blanked (UV auto zero) before the sample is injected.

(4) About 5 CVs of a sample can be loaded onto the column with a flow rate of 1–1.5 mL/min, using the sample tubing attached to the sample valve.

(5) When the sample is entirely loaded onto the system, the sample valve has to be switched to the buffer valve to avoid air going through the column.

(6) When the UV absorbance starts to increase, change the outlet valve to collection and start to collect your sample in a 50 mL tube. Since it is a BE-SEC column, impurities smaller than 700 kDa should bind to the inside of the column beads and the flow through corresponds to the purified sample; hence, collect all flow through for later concentration steps.

(7) When the UV absorbance reaches the baseline, close the collection valve and keep your collected sample for the final concentration step as described below.

(8) Pause the flow, revert the column upside down and proceed with the cleaning in place. Place one of the buffer tubing (A or B) into the bottle containing 0.1 M NaOH in 30% isopropanol and prime the tubing with the solution before running through the column.

(9) Run the cleaning in place for 30–60 min at a flow rate of 0.5 mL/min.

(10) Revert the column (the flow should follow the orientation of the label indicated on the column). Change solution again to Milli-Q water and run with a flow rate of 0.5 mL/min for 60 min or until the UV absorbance reaches baseline.

(11) Change solution to 20% EtOH and run 20–40 mL through the BE-SEC column. The column can thereafter remain connected to the chromatography system until the next run at room temperature, or for long-term storage, it should be tightly sealed and placed at 4℃.



## 6. RNA extraction

### 6.1 From cell

(1) Discard culture media from the culture dish; 

(2) Wash the cell with 2ml PBS once to make sure culture media is completely removed;

(3) Add 1ml TRIzol reagent every 1 x 10^6 cells;

(4) Pipette several times to permit complete dissociation of the cell. Transfer the liquid to a clean EP tube;

(5) Add 200μL of chloroform per 1 mL of TRIzol Reagent used for homogenization. Vortex vigorously to mix thoroughly. Place 2-3min at room temperature;

(6) Centrifuge at 16000rcf at 2-8℃ for 15 minutes;

(7) Remove the aqueous phase of the sample by angling the tube at 45° and pipetting the solution out to a clean EP tube;

(8) Add 0.5ml of 100% isopropanol to the aqueous phase, per 1ml of TRIzol Reagent;

(9) Incubation at -20℃ for at least one hour; 

(10) Centrifuge at 16000rcf at 2-8℃ for 20 minutes;

(11) Remove the supernatant from the tube, leaving only the RNA pellet;

(12) Wash the pellet, with 1ml of 75% ethanol per 1ml of TRIzol Reagent;

(13) Vortex the sample briefly, then centrifuge the tube at at 16000rcf at 2-8℃ for 10 minutes;

(14) Vacuum or air dry the RNA pellet for 5-10 minutes;

(15) Resuspend the RNA pellet in RNase-free water;

(16) Store at -20℃ for a short time or store at -70℃for long time preservation.



### 6.2 From sEVs

(1) Add 500μL TRIzol reagent every 100μL exosome solution;

(2) Add 200μL of chloroform per 1 mL of TRIzol Reagent used for homogenization. Vortex vigorously to mix thoroughly. Place 2-3min at room temperature;

(3) Centrifuge at 16000rcf at 2-8℃ for 15 minutes;

(4) Remove the aqueous phase of the sample by angling the tube at 45° and pipetting the solution out to a clean EP tube;

(5) Add 0.5ml of 100% isopropanol to the aqueous phase, per 1ml of TRIzol Reagent;

(6)Incubation at -20℃ for at least one hour; 

(7) Centrifuge at 16000rcf at 2-8℃ for 20 minutes;

(8) Remove the supernatant from the tube, leaving only the RNA pellet;

(9) Wash the pellet, with 1ml of 75% ethanol per 1ml of TRIzol Reagent;

(10) Vortex the sample briefly, then centrifuge the tube at at 16000rcf at 2-8℃ for 10 minutes;

(11) Vacuum or air dry the RNA pellet for 5-10 minutes;

(12) Resuspend the RNA pellet in RNase-free water;

(13) Store at -20℃ for a short time or store at -70℃for long time preservation.



## 7. Protein extraction

### 7.1 From Cells

(1) Suck and discard culture medium, and add 80μl RIPA (pyrolysis fluid) into each whole. Suspend the adherent cells in the whole with a cell scraper. Wash once with 1ml absolute ethanol and three times with 1ml PBS Buffer between scrapes. Absorb the fluid into EP tubes after it is fully mixed;

(2) Crack it with ultrasound and leave it alone on ice for 30 min;

(3) Centrifuge for 20 min at 12000x g at 4°C. Absorb the upper clear liquid to a new tube and add 5x SDS to 1/4 of its volume;

(4) Metal bath for 5 min at 99°C to make denature protein;

(5) Measure the concentration of the protein with BCA method and preserve it at -80°C.

### 7.2 From sEVs:

(1) Add 100μL RIPA every 100μL exosome solution;

(2) Crack it with ultrasound and leave it alone on ice for 30 min;

(3) Centrifuge for 20 min at 12000x g at 4°C. Absorb the upper clear liquid to a new tube and add 5x SDS to 1/4 of its volume;

(4) Metal bath for 5 min at 99°C to make denature protein;

(5) Measure the concentration of the protein with BCA method and preserve it at -80°C.

 

## 8. DNA agarose gel electrophoresis

(1) Configure 30ml 1% agarose solution, heat and melt, add 3μL dye EB;

(2) Add 1μL loading buffer with 1μL plasmid (100ng/μL) in each well;

(3) 120V electrophoresis for 30min;

(4) Fluorescence chromogenic photography.

 

## 9. RNA **reverse transcription**

(1) Reverse Transcription for siRNA by Vazyme: 

A) Components:
10×RT Mix 1μL, 
Hiscript Enzyme Mix 1μL, 
Primer(2μM) 1μL, 
total RNA 1.5μg, 
RNase free ddH20 up to 10μL.

B) Cycling Conditions: 
Step 1: 25℃, 5min;
Step 2: 50℃, 15min;
step 3: 85℃, 5min;
Step 4: 4℃, infinite.

(2) Reverse Transcription for mRNA by Takara Oligo d(T) 18 can be used as primers as mRNA 3’ prime end with a poly(A) tail;

A) Components:
5× AMV buffer 2μL,
AMVase 0.5μL,
dNTPs mixture(10mmol)1μL,
Oligo d(T) 18(50μM)(10×) 0.5μL,
RRI(40U/μl) 0.25μL,
RNA 2μg,
DEPC up to 10μL.

B) Cycling Conditions: 
Step 1: 16℃, 15min;
Step 2: 42℃, 60min;
Step 3: 85℃, 5min;
Step 4: 4℃, infinite.

 

## 10. RT-qPCR

(1) qPCR for siRNA by Vazyme

A) Components:
2×miRNA Universal SYBR qPCR Master Mix 10μL,
Primer F(10μM) 0.4μL,
Primer R(10μM) 0.4μL,
cDNA 1μL,
ddH2O up to 20μL.

B) Cycling Conditions:
Step 1: 95℃, 5min;
Step 2: 95℃, 10s;
Step 3: 65℃, 30s ;
(fluorescence detection) Step2-Step3, 40 cycles
Step 4: 95℃, 10s;
Step 5: 65℃, 60s;
Step 6: 97℃, 1s.
(Continuous)

(2) qPCR for mRNA

A) Components: 
10×buffer 2μL,
dNTPs mixture (10mmol) 0.4μL,
MgCl2 1.2μL,
Taq 0.3μL,
Sense primer (10mM) 0.5μL,
Antisense primer (10mM) 0.5μL,
dye 1μL,
cDNA 1μL,
ddH2O up to 20μL.

B) Cycling Conditions:
Step 1: 95℃, 5min;
Step 2: 95℃, 15s;
Step 3: 60℃, 30s;
Step 4: 72℃, 30s.
(fluorescence detection) Step2-Step4, 40 cycles

(3) Data Analysis: The Comparative Ct Method (ΔΔCT Method) CT---cycles when the reaction reach the threshold, the relative expression level of each miRNA compares to endogenous Control can be described as 2-ΔCT, (ΔCT= CT sample- CT endogenous control). U6, a housekeeping gene, is usually used as endogenous Control for miRNA. And for mRNA, just replace U6 with GAPDH. GAPDH, a housekeeping gene, is usually used as endogenous Control for mRNA.

 

## 11. Western blot

(1) Prepare Solutions --- running buffer, trans buffer, skimmed milk, TBST, antibody solution;

(2) Gel Electrophoresis:

A) Load protein and molecular weight marker;

B) Add running buffer;

C) Electrify: set the voltage at 80V before the sample reach the dividing line between stacking gel and resolving gel, switch to 120V until the blue stain reach the buttom line.

(3) Blotting I. Transfer:

A) Carefully cut the gel;

B) Assemble the transfer cassette;

C) Install the cassette and electrify to transfer the protein to PVDF.

(4) Blotting II. Chemiluminescene:

A) Blocking: 5% skimmed milk incubate for 1h;

B) Incubate with diluted primary antibody;

C) Wash membrane: TBST 15min *4;

D) Incubate with diluted secondary antibody;

E) Wash membrane: TBST 15min *4;

F) Add Chemiluminescene substrate;

G) Exposure.

 

## 12. NanoSight

(1) Take 1 ml of EVs solution (dilution factor 1:40 in PBS 0.1 µm filtered) and vortex.

(2) With a syringe without needle, inject EVs solution slowly (avoiding bubbles) into the chamber of particle size analyzer for visualization. It is important to have approximately 20-60 particles in the field of view, to obtain an accurate concentration and size values.

(3) sEVs moving under Brownian motion recorded by NTA. The EVs size distribution and concentration are measured using the combination of the light scattering properties with Brownian motion.

(4) Take triplicate readings during 60 s at 30 frames per second (fps), camera level at 16 and manual monitoring of temperature.
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