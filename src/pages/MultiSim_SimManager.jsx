import { useEffect } from 'react';

import Figure1 from '../assets/Figure1.jpg';
import UXWork from '../assets/MultiSim_SimManager/UXWork.png';
import Team from '../assets/MultiSim_SimManager/Team.png';
import DevCollab from '../assets/MultiSim_SimManager/DevCollab.png';
import TeamCollab from '../assets/MultiSim_SimManager/TeamCollab.png';
import UXCollab from '../assets/MultiSim_SimManager/UXCollab.png';
import MultiSim from '../assets/MultiSim_SimManager/MultiSim.png';
import SimManager from '../assets/MultiSim_SimManager/SimManager.png';
import design_process from '../assets/MultiSim_SimManager/design_process.png';
import nemawashi from '../assets/MultiSim_SimManager/nemawashi.png';
import design_sketching from '../assets/MultiSim_SimManager/design_sketching.png';
import ux_process from '../assets/MultiSim_SimManager/ux_process.png';
import design_review from '../assets/MultiSim_SimManager/design_review.png';

import CaseStudyGrid from '../components/CaseStudyGrid';
import ImageTextSection from '../components/ImageTextSection';
import LayeredTextSection from '../components/LayeredTextSection';
import SectionDivider from '../components/SectionDivider';
import TextSection from '../components/TextSection';
import work_data from '../data/work_data';
import EmphasisTextSection from '../components/EmphasisTextSection';
import ListSection from '../components/ListSection';
import ImageSection from '../components/ImageSection';
import Footer from '../components/Footer';

function MultiSim_SimManager() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <CaseStudyGrid data={work_data[1]}/>
      <TextSection
        title={"UNITING A TEAM THROUGH DESIGN"}
        text={<p>Leading a product team through sketching workshops, design reviews, and empathetic collaboration, <strong>achieving crossfunctional alignment on the workflow redesign of Multiple Simulations and Simulation Manager applications.</strong></p>}
      />
      <TextSection
        title={"DIRECTOR'S NOTE"}
        text={"This project is under an NDA, and while I can't share the details of my work, I hope this case study can give you an understanding of the design process I employ to align a crossfunctional team with design."}
      />
      <SectionDivider text='MOVEMENT I: MY DESIGN CHALLENGE'/>
      <TextSection
        title={"COMPLEX APPLICATIONS IN PARALLEL"}
        text={<>
          <p>MathWorks core product Simulink allows for robust model-based design and simulation using a graphical user interface and a large array of domain-specific applications.</p>
          <br></br>
          <p>One of the many capabilities that Simulink supports is running multiple simulations - specifying arrays of parameters for a model and running the model for each parameter combination that is inputted.</p>
        </>}
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
        title='GOALS'
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
        orientation='text-top'
        title={"A COLLABORATIVE DESIGN PROCESS"}
        img={design_process}
      />
      <ImageTextSection
        orientation='text-img'
        img={Team}
        title='Meet the Orchestra'
        text='The cross-functional team I had the pleasure of working with. Spanning across UX, management, and engineering, I sought out and incorporated perspectives from these groups to build my designs.'
      />

      <SectionDivider text='Movement I: RESEARCH, COFFEE CHATS, AND NEMAWASHI'/>
      <TextSection
        title={"RESEARCH... WITHOUT RESEARCH"}
        text={
          <>
            <p>Without a UX researcher on our team, I had to be creative with my needfinding research.</p>
            <br></br>
            <p>Sourcing user stories from <strong>Stack Overflow, MATLAB Answers, MathWorks's internal bug-tracking tool,</strong> I developed user personas and translated their needs into product requirements.</p>
          </>
        }
      />
      <ImageTextSection
        orientation={'text-top'}
        img={nemawashi}
        title={"WHAT'S NEMAWASHI?"}
        text={
          <>
            <p><strong>Nemawashi</strong> is MathWorks's way of describing "Hey, how about I drop by your office to chat?". </p>
            <br></br>
            <p>An informal that has become a norm for intimate collaboration, I took the initiative to chat with our team's developer one-on-one multiple times a week and meet with our product manager and customer-facing engineers to hear their experience working with users of MultiSim and Simulation Manager.</p>
          </>
        }
      />
      <TextSection
        title={"RESEARCH + NEMAWASHI OUTCOMES"}
        text={
          <p>A thorough secondary research process and one-on-one chats with the team led me to develop a deep understanding of our users and the people within MathWorks that made these products, <strong>setting a precedence for collaboration between the team and me.</strong></p>
        }
      />
      <SectionDivider text={'Movement II: Bringing in the Team - Design Sketching'}/>
      <TextSection
        title={"CREATING A SPACE FOR CROSS-FUNCTIONAL DESIGN IDEATION"}
        text={
          <>
            <p>Early in the design ideation process, I wanted to open our designs to all the people that are important within the Multiple Simulations space.</p>
            <br></br>
            <strong>I initiated a design sketching event, inviting a team consisting of a manager, developer, and customer-facing engineers to share their design ideas.</strong>
          </>
        }
      />
      <ImageTextSection
        orientation='text-top'
        img={design_sketching}
        title='DESIGN SKETCHING WORKSHOP'
        text={"Goal: Understand the ideas of our team and invite them into the redesign of the workflow. \n\nProcess: Presentation on pain points, where and how they occur in current workflow, how they translate to desired design requirements."}
      />
      <TextSection
        title={"DESIGN SKETCHING OUTCOMES"}
        text={
          <p>Having the team in once room sharing their ideas, I not only <strong>collected unique design ideas informed by the experience of the manager, developer, and customer-facing engineers</strong>, but also <strong>established alignment on the product requirements going forward in this redesign.</strong></p>
        }
      />
      <SectionDivider text={'Movement III: On the UX Frontier'}/>
      <ImageTextSection
        img={UXCollab}
        title='The Nitty Gritty of Design'
        text={"Inspired by their perspectives and ideas, I transitioned into a focused UX design process, working alongside my developer and the UX community."}
      />
      <ImageSection
        img={ux_process}
      />
      <TextSection
        title={"CONVERGING..."}
        text={"After the developer and I converged on design solutions that met our requirements, I prepared a design review meeting with our stakeholders."}
      />
      <SectionDivider text={'Movement IV: Design Review'}/>
      <ImageTextSection
        orientation='text-top'
        img={design_review}
        title='DESIGN REVIEW, DELIVERY, AND LEARNINGS'
        text={"Goal: Present proposed design solution and gather stakeholder feedback. \n\nProcess: Presentation on outcomes of design sketching meeting, iterations, and walk-through of workflow through mid-fi prototypes."}
      />
      <TextSection
        title={"FINAL OUTCOMES"}
        text={
          <>
            <p>Taking in suggestions from the team, I delivered a high-fidelity final version of the revamped workflow, ready for handoff.</p>
            <br></br>
            <strong>The solution was well-received by all members of the team and staged for development in the next MATLAB release.</strong>
          </>
        }
      />
      <ListSection
        title="WHAT THIS PROJECT TAUGHT ME"
        list={[
          {
            title: 'Conversations Inspire',
            text: "This project came to be by inviting the perspectives and opinions of all those involved with the project space. By valuing and by seeking those them out, I was able to bring inspirations from their viewpoints into the designs I create. From large meetings, to weekly calls, to impromptu coffee chats, this project taught me that opening the doors to these people will equip me with the knowledge I need to create effective solutions."
          },
          {
            title: 'Benchmark Earlier',
            text: 'Talking with mentors mid-way through my internship, I learned of benchmarking exercises that would have equipped me with more product and UX Standards knowledge - something I could have done before the ideating phase of the project.'
          }
        ]}
      />
      <Footer/>
    </main>
  )
}

export default MultiSim_SimManager