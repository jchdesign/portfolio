import { useEffect } from 'react';

import CaseStudyGrid from '../components/CaseStudyGrid';
import work_data from '../data/work_data';
import EmphasisTextSection from '../components/EmphasisTextSection';
import LayeredTextSection from '../components/LayeredTextSection';
import ImageTextSection from '../components/ImageTextSection';
import ImageSection from '../components/ImageSection';
import TextSection from '../components/TextSection';
import SectionDivider from '../components/SectionDivider';
import ListSection from '../components/ListSection';
import InfoGrid from '../components/InfoGrid';
import Footer from '../components/Footer';

import interlude_final from '../assets/Interlude/interlude_final.png'
import app_flow from '../assets/Interlude/app_flow.png';
import research from '../assets/Interlude/research.png';
import artist_profiles from '../assets/Interlude/artist_profiles.png';
import music_page from '../assets/Interlude/music_page.png';
import home_page from '../assets/Interlude/home_page.png';
import full_stack from '../assets/Interlude/full_stack.png';
import database from '../assets/Interlude/database.png';
import rec_engineering from '../assets/Interlude/rec_engineering.png';
import rec_system from '../assets/Interlude/rec_system.png';


function Interlude() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <CaseStudyGrid data={work_data[0]}/>
      <TextSection
        title='CREATING A COMMUNITY FOR EMERGING ARTISTS'
        text={
          <>
            <p>Inspired by the journeys and passion of early-stage independent artists, I led end-to-end UX design, UX research, and full-stack engineering to build an app supporting the growth of emerging artists.</p>
          </>
        }
      />
      <ImageTextSection
        orientation='text-top'
        textSize='h3'
        text={"Interlude: an application for emerging artists to build a strong listener base by empowering them with a community where listeners can discover music from smaller artists and become more closely connected with who the artist is as a person and as a creator."}
        img={interlude_final}
      />
      <SectionDivider
        text={"MOVEMENT I: THE STORY OF INTERLUDE"}
      />
      <TextSection
        title={"UNDERSTANDING OUR USERS"}
        text={
          <>
            <p>In the Fall of 2024, my peers and I at the UC Berkeley School of Information began our capstone projects. I sat down together with a group of my friends and thought:</p>
            <br></br>
            <strong>How can we help early stage artists build an audience?</strong>
            <br></br>
            <br></br>
            <p>At this point, we did not know what solution we wanted to create, just that we wanted to help new artists. We began research to get in the headspace of what challenges an artist faces when growing their audience and, on the flipside, what listeners want when discovering new music and connecting with the artists behind them.</p>
          </>
        }
      />
      <ImageSection
        img={research}
      />
      <TextSection
        title={"WHAT WE FOUND"}
        text="Deepening our understanding of the landscape surrounding emerging artists, a couple of findings surprised us:"
      />
      <InfoGrid
        list={[
          {
            img: null,
            title: "A Desire for Deeper Connections",
            text: <>
              <p>Artists want to be understood and to express who they are and why they make music.</p>
              <br></br>
              <p>Listeners are interested an artist’s personality, background, and stories of their music.</p>
            </>
          },
          {
            img: null,
            title: "Social Media is Necessary But Breeds Inauthenticity",
            text: "Social media is essential for keeping engagement beyond releases, but artists feel inauthentic posting content that would “make them go viral”."
          },
          {
            img: null,
            title: "Rec Systems Fall Short",
            text: "Traditional recommendation systems prioritize popular artists over new artists, and listeners are frustrated with poor recommendations and rec system control."
          }
        ]}
      />
      {/* <TextSection
        text={"Emerging artists face challenges , and recommendation systems that "}
        size='h3'
      /> */}
      <EmphasisTextSection
        text1={"We asked ourselves..."}
        text2={<>
          <strong>How might we allow artists and listeners to connect over who the artist is as a person?</strong>
          <br></br>
          <br></br>
          <strong>How might we build an environment where smaller artists are supported by recommendation systems?</strong>
          <br></br>
          <br></br>
          <strong>How might we use social media to create this community of discovery and connection?</strong>
        </>}
      />
      <ImageTextSection
        orientation='text-top'
        img={app_flow}
        text={<><p>
          I imagined a <strong>social media space centered around emerging artists</strong> where they have the freedom to share with their following <strong>content that is authentic to themselves</strong>, and where listeners can <strong>discover new music from these small artists and connect who the artist is as a person</strong>.
          </p>
        </>}
      />
      <TextSection
        title={"OUR HYPOTHESIS"}
        text={"Deeper, more personal connections between an artist and a listener leads to a stronger and more dedicated listener base for an artist."}
      />
      <SectionDivider text={"MOVEMENT II: CREATING INTERLUDE"}/>
      <TextSection
        title={"AN ARTIST EXPERIENCE SUPPORTING EXPRESSION"}
        text={<>
          <p>I organized my understanding of artists from research and my own experience as an artist into <strong>creating the artist-facing experience.</strong></p>
          <br></br>
          <p>My objective: Allow full creative and expressive freedom for artists, and create an app experience that empowers them to tell their stories.</p>
        </>}
      />
      <ImageTextSection
        orientation='text-top'
        img={artist_profiles}
        title='Artist Profiles For the Person Behind the Artist'
        text={"Creating a space where an artist can be empowered to showcase themselves and organize content about their craft."}
      />
      {/* <ListSection
        title={"Design Choices"}
        list={[
          {
            text: "Bold displays inspired by news headlines and magazine articles to put them in the spotlight."
          },
          {
            text: "Large photo features and gallery for a more intimate look."
          },
          {
            text: "Featured posts to make a statement."
          }
        ]}
      /> */}
      <ImageTextSection
        orientation='text-top'
        img={music_page}
        title='Artist Music Pages to Speak Freely About Music'
        text={"Organizing content about music in a page that serves as a source of truth from the artist, where an artist’s thoughts, process, stories, and exclusive content about a piece of music are contained and experienced."}
      />
      {/* <TextSection
        text={<p>I collaborated with the designers creating the listener experience, iterating through proposed designs and <strong>integrating the content from the artist pages with the listener-facing application.</strong></p>}
      /> */}
      <ImageTextSection
        orientation='text-top'
        img={home_page}
        title='Listener Home Page for Discovery and Connection'
        text={<p>Allowing for discovery of new artists through an <strong>inverse recommendation system</strong>. Increasing visibility of artists through community interactions by displaying reposts, comments, and activity from the network that a listener follows. </p>}
      />
      <SectionDivider text={"MOVEMENT III: BUILDING AN INVERSE RECOMMENDATION SYSTEM"}/>
      <TextSection
        text={<p>I worked with the data scientist to build an <strong>inverse recommendation system that factored in the popularity of an artist</strong> in order to deliver personalized recommendations to listeners that are adjusted to <strong>prioritize music from less popular artists.</strong></p>}
      />
      <ImageSection
        img={rec_system}
      />
      <SectionDivider text={"MOVEMENT IV: FULL-STACK ENGINEERING"}/>
      <ImageTextSection
        orientation='text-top'
        img={full_stack}
        text={"Using React Native, Google Firebase, and Rest APIs, I built a working, live MVP for Interlude."}
      />
      <ImageTextSection
        orientation='img-text'
        img={database}
        title={"Database Design"}
        text={"Using Firestore, I ideated and built a simple and scalable relational database architecture to accommodate for a variety of users, post types, music types, and , enabling quick storage and retrieval of content for artists and listeners."}
      />
      <ImageTextSection
        orientation='text-top'
        img={rec_engineering}
        title={"Integrating the Recommendation System"}
        text={<>
        <p>1. Connecting the onboarding process to build and store a vector representation of listener preferences.</p>
        <br></br>
        <p>2. Linking the music upload functionality to the feature extraction code, generating and storing a vector representation of individual songs.</p>
        <br></br>
        <p>3. Connecting the recommendation system to the backend, using the vector representations of songs and users to generate recommendations for each listener.</p>
        </>}
      />
      <SectionDivider text={"MOVEMENT V: THE FUTURE AND REFLECTIONS"}/>
      <InfoGrid
        list={[
          {
            title: "OUR NEXT STEPS"
          },
          {
            title: "Creating More Personalization",
            text: "Implementing functions to update listener preferences via post interactions, shares, saves, and qualitative feedback in order to create a more personalized listening experience."
          },
          {
            title: "Calculating Success Metrics",
            text: "Measuring song saves, calculating recommendation click-through rates, creating our own popularity metric to evaluate the influence of Interlude on the growth of artists."
          }
        ]}
      />
      <ListSection
        title='REFLECTIONS AND LEARNINGS'
        list={[
          {
            title: "Welcome the Skepticism",
            text: "A vision will always be met with skepticism. Embrace it. We have to continue to think of ways to justify our value, but critically, when people say that something isn’t working, to set aside my ego of “I believe in this” and just listen to what they think is one of the most powerful things a product owner can do. Because when you do so, you open yourself to all the ways your product can grow alongside the people you're designing it for."
          },
          {
            title: "Keep the User at Heart",
            text: "From 0 to 1, one guiding principle I maintained in our group's work is: let's listen to people first. Allowing myself to be humbled and guided by the experiences and pain points of artists and listeners, especially if they do not align with my own perceptions of the problem space, was key to creating an MVP that was well-received by our audience."
          },
          {
            title: "Design is More Than Just Design",
            text: "Design is a marriage of research, engineering, product, data... the list goes on. Our onboarding is informed by the recommendation system requirements, and vice versa. The types of content that artists can post are enabled by a simple and scalable relational database structure. Learning to align all these different departments is a necessity of design."
          }
        ]}
      />
      <Footer/>
    </main>
  )
}

export default Interlude