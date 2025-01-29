import { useEffect } from 'react';

import work_data from '../data/work_data.js';
import InitialPages from '../assets/SFParksRec/InitialPages.png';
import Affinity from '../assets/SFParksRec/Affinity.png';
import Problem1 from '../assets/SFParksRec/Problem1.png';
import Problem2 from '../assets/SFParksRec/Problem2.png';
import Problem3 from '../assets/SFParksRec/Problem3.png';
import Crazy8 from '../assets/SFParksRec/Crazy8.png';
import Shortlist from '../assets/SFParksRec/Shortlisting.png';
import LoFiFlow from '../assets/SFParksRec/LoFiFlow.png';
import FilterOptions from'../assets/SFParksRec/FilterOptions.png';
import HiFi1 from '../assets/SFParksRec/HiFi1.png';
import HiFi2 from '../assets/SFParksRec/HiFi2.png';

import CaseStudyGrid from '../components/CaseStudyGrid.jsx';
import SectionDivider from '../components/SectionDivider.jsx';
import ImageTextSection from '../components/ImageTextSection.jsx';
import ListSection from '../components/ListSection.jsx';
import TextSection from '../components/TextSection.jsx';
import EmphasisTextSection from '../components/EmphasisTextSection.jsx';
import ImageSection from '../components/ImageSection.jsx';
import HyperLink from '../components/HyperLink.jsx';

function SFParksRec() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <CaseStudyGrid data={work_data[3]}/>
      <SectionDivider 
        text='Movement I: A Picnic Dilemma'
      />
      <ImageTextSection
        orientation='text-top'
        img={InitialPages}
        title='Motivation'
        text= {"The SF Parks and Recreation website includes a pipeline to reserve picnic areas in the city of San Francisco. The current flow for making a reservation is complicated and difficult to navigate, and we were assigned the task of redesigning the site to improve the user flow."}
      />
      <ImageTextSection
        orientation='text-top'
        img={Affinity}
        title='Discovery + Interviews'
        text={"In order to understand the shortcomings of the site, I led user interviews to understand user needs within the scope of reservation systems. Additionally, I conducted usability testing to identify pain points to address within the current flow, inviting users to book a reservation in the same context as the target user and asking them to verbalize their thought process about any positive or negative reactions to what they encounter."}
      />
      <TextSection
        text="In the 13 problem spaces that I found - spanning through the home page, map, and sign-up - here are 3 major problems that stood out:"
        size='h2'
      />
      <ImageTextSection
        orientation='img-text'
        img={Problem1}
        title='Unintuitive Home Page Buttons'
        text='Users attempting to find reservation location struggle since the buttons do not direct them towards the task they need to do.'
      />
      <ImageTextSection
        orientation='img-text'
        img={Problem2}
        title='Map is Not Used'
        text='Users fail to notice and take advantage of important map features (filter, icons) that would assist their task due to lack of visibility in the default state.'
      />
      <ImageTextSection
        orientation='img-text'
        img={Problem3}
        title='Vague Directory'
        text='Users are unable to find information here needed to find amenities for a site and resort to detours to find a suitable location, leading to inefficient and lengthy search.'
      />

      <SectionDivider text='Movement II: How Might We...'/>
      <ListSection
        subtitle={"After extracting major problem spaces from in the affinity diagram that I found within the Home Page, Map Page, Directory Page, and Reservation/Sign-Up Flow, I generated How-Might-We statements to direct my thinking into ideating solutions for each problem space. For instance..."}
        list={[
          {
            text: 'Home Page: How might we guide users towards the reservation task?'
          },
          {
            text: 'Map Page: How might we support quick recognition of map tools?'
          },
          {
            text: 'Directory Page: How might we help users make more quick and informed decisions about listings of picnic sites?'
          }
        ]}
      />
      <ImageTextSection
        orientation='text-top'
        img={Crazy8}
        title="Crazy 8's"
        text="Guided by the How-Might-We statements as well as feedback from interviews, I generated Crazy 8 ideas for each How-Might-We."
      />
      <ImageTextSection
        orientation='text-top'
        img={Shortlist}
        title="Shortlisting"
        text={"Having generated the multitude of pain points as well as possible solutions to address them, I was faced with the issue of narrowing down to the best decisions that I could implement.\nTo do this, I created shortlists to assess each possible solution variation against constraints of feasibility, desirability, and viability, and user goals."}
      />

      <SectionDivider text='Movement III: Prototyping'/>
      <ImageTextSection
        orientation='text-top'
        img={LoFiFlow}
        text={"Upon narrowing down to the possible solutions, I began low-fidelity prototyping to construct the layout and positioning of features on a mobile interface as well as combine features of similar functionality to further narrow down my solutions and ideate how they interact in with each other."}
      />
      <ImageTextSection
        orientation='text-img'
        img={FilterOptions}
        title='Rapid Usability Testing'
        text={"Even after low-fidelity prototyping and merging solutions, I was left with a couple of design decisions to make. I conducted another round of usability testing to inform on the best solutions. For instance: \nHow can I present filtering in the most intuitive and accessible way?"}
      />
      <EmphasisTextSection
        text1='Results'
        text2="Users most quickly found and understood Filter Option 1: Descriptive Buttons, as it was the most salient and intuitive filtering method."
      />
      <ImageTextSection
        orientation='text-top'
        img={HiFi1}
        title='High Fidelity Prototypes'
        text="The end result: a simplified and streamlined reservation flow, from location selection to sign-up to confirmation, allowing users to efficiently find a picnic location that suits their amenity needs."
      />
      <ImageSection img={HiFi2}/>
    </main>
  )
}

export default SFParksRec