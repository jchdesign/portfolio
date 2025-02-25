import { useEffect } from 'react';

import Figure1 from '../assets/Figure1.jpg';
import UXWork from '../assets/MultiSim_SimManager/UXWork.png';
import Team from '../assets/MultiSim_SimManager/Team.png';
import DevCollab from '../assets/MultiSim_SimManager/DevCollab.png';
import TeamCollab from '../assets/MultiSim_SimManager/TeamCollab.png';
import UXCollab from '../assets/MultiSim_SimManager/UXCollab.png';
import MultiSim from '../assets/MultiSim_SimManager/MultiSim.png';
import SimManager from '../assets/MultiSim_SimManager/SimManager.png';

import CaseStudyGrid from '../components/CaseStudyGrid';
import ImageTextSection from '../components/ImageTextSection';
import LayeredTextSection from '../components/LayeredTextSection';
import SectionDivider from '../components/SectionDivider';
import TextSection from '../components/TextSection';
import work_data from '../data/work_data';
import EmphasisTextSection from '../components/EmphasisTextSection';
import ListSection from '../components/ListSection';
import ImageSection from '../components/ImageSection';

function MultiSim_SimManager() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <CaseStudyGrid data={work_data[0]}/>
      <SectionDivider text='Movement I: Two Applications, In Parallel'/>
      <LayeredTextSection
        orientation='small-big'
        text1={"MathWorks core product Simulink allows for robust model-based design and simulation using a graphical user interface and a large array of domain-specific applications."}
        text2={"One of the many capabilities that Simulink supports is running multiple simulations - specifying arrays of parameters for a model and running the model for each parameter combination that is inputted."}
      />

      <ImageTextSection orientation='img-text'
        img={MultiSim} 
        title='Multiple Simulations' 
        text='Provides a graphical interface to specify the different parameters that they want to simulate the model using and set up each of the hundreds, thousands of simulation runs...'
      />
      <ImageTextSection orientation='img-text' 
        img={SimManager} 
        title='... and Simulation Manager' 
        text='Allows users to visualize the simulation results and customize the plot visualizations to their liking.'
      />

      <EmphasisTextSection 
        text1='You can probably tell that the parallel simulation workflow hops around two unique applications.' 
        text2="This led to reports of multiple pain points and unmet needs from users, and I was tasked to redesign the workflow to address these opportunities."
      />

      <ListSection
        title='Goals'
        list= {[
          {
            title: 'Align Design Needs',
            text: "Balance and deliver the visions desired by our users and the cross-functional team that owns these apps."
          },
          {
            title: 'Respect Technical Feasibilities',
            text: 'Work closely with the developer to ensure implementation feasibility.'
          },
          {
            title: 'Maintain UX Standards',
            text: "Follow internal UX standards and best practices for MathWorks product look and workflow."
          }
        ]}
      />

      <ImageTextSection
        orientation='text-img'
        img={Team}
        title='Meet the Orchestra'
        text='The cross-functional team I had the pleasure of working with. Spanning across UX, management, and engineering, I sought out and incorporated perspectives from these groups to build my designs.'
      />

      <SectionDivider text='Movement II: Research... without Research'/>
      <ImageTextSection
        img={DevCollab}
        title='Tapping into Dev Knowledge'
        text='Meeting three times a week with the developer on the MultiSim/Sim Manager team, I took the opportunity to have early conversations to understand the project and user needs.'
      />
      <ListSection
        title='Developing Product Understanding'
        list= {[
          {
            title: 'Secondary Research',
            text: "Sourcing user stories from Stack Overflow, MATLAB Answers, MathWorks internal bug-tracking tool"
          },
          {
            title: 'Developer Chats',
            text: 'Meeting with the developer, I developed an understanding of user pain points and needs through his experience.'
          },
          {
            title: 'Design Sketching',
            text: "Beginning some preliminary designs, sketching some design solutions to have conversations with developer to understand technical constraints."
          }
        ]}
      />
      <SectionDivider text={'Movement III: Bringing in the Team - Design Sketching'}/>
      <LayeredTextSection
        orientation='small-big'
        text1={"Early in the design ideation process, I wanted to open our designs to all the people that are important within the Multiple Simulations space"}
        text2={"I initiated a design sketching event, inviting a team consisting of a manager, developer, and customer-facing engineers to share their design ideas."}
      />
      <ImageTextSection
        img={TeamCollab}
        title='Design Sketching Event'
        text={"Goal: Understand and invite ideas of stakeholders into design of the workflow. \n\nProcess: Presentation on pain points, where and how they occur in current workflow, how they translate to desired design requirements."}
      />

      <SectionDivider text={'Movement IV: On the UX Frontier'}/>
      <ImageTextSection
        img={UXCollab}
        title='The Nitty Gritty of Design'
        text={"Following the design sketching meeting, I worked independently and collaboratively with UX Support and development teams to ideate and evaluate design solutions."}
      />
      <ImageSection
        img={UXWork}
      />
      <EmphasisTextSection
        text1={"Converging..."}
        text2={"After the developer and I converged on design solutions that met our requirements, I prepared a design review meeting with our stakeholders."}
      />
      <SectionDivider text={'Movement V: Finale - Design Review'}/>
      <ImageTextSection
        img={TeamCollab}
        title='Design Review'
        text={"Goal: Present proposed design solution and gather stakeholder feedback. \n\nProcess: Presentation on outcomes of design sketching meeting, iterations, and walk-through of workflow through mid-fi prototype"}
      />
      <EmphasisTextSection
        text1={"Outcomes"}
        text2={"Taking in suggestions from the team, I delivered a final version of the revamped workflow, ready for handoff. \n\nThe solution was well-received by all members of the team and staged for development in the next Matlab release."}
      />
      
      <ListSection
        title="Things I Learned"
        list={[
          {
            title: 'Benchmark Earlier',
            text: 'Talking with mentors mid-way through my internship, I learned of benchmarking exercises that would have equipped me with more product and UX Standard knowledge - something I could have done before the ideating phase of the project.'
          },
          {
            title: 'Conversations Inspire',
            text: "This project came to be by inviting the perspectives and opinions of all those involved with the project space. By valuing and by seeking those them out, I was able to bring inspirations from their viewpoints into the designs I create. From large meetings, to weekly calls, to impromptu coffee chats, this project taught me that opening the doors to these people will equip me with the knowledge I need to create effective solutions."
          }
        ]}
      />
    </main>
  )
}

export default MultiSim_SimManager