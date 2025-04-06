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

import interlude_final from '../assets/Interlude/interlude_final.png'
import app_flow from '../assets/Interlude/app_flow.png';
import research from '../assets/Interlude/research.png';
import artist_profiles from '../assets/Interlude/aritst_profiles.png';
import music_page from '../assets/Interlude/music_page.png';
import home_page from '../assets/Interlude/home_page.png';


function Interlude() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <CaseStudyGrid data={work_data[1]}/>
      <TextSection
        text={<p>In October 2024, I sat down with a group of designers, researchers, and data scientists at the UC Berkeley School of Information to envision, research, design, and engineer a platform with one simple goal: <strong>to help emerging music artists build an audience.</strong></p>}
      />
      <EmphasisTextSection
        orientation='small-big'
        text1={"This project is an ode to the stories behind the music we hear and the child of our collective passion for music and creators. "}
        text2={"Interlude: an application for emerging artists to build a strong listener base by empowering them with a community where listeners can discover music from smaller artists and feel more closely connected with who the artist is as a person and as a creator."}
      />
      <ImageSection
        img={interlude_final}
      />
      <SectionDivider
        text={"MOVEMENT I: THE STORY OF INTERLUDE"}
      />
      <EmphasisTextSection
        text1={"In the Fall of 2024, I brought together a group of graduate students at my program in the UC Berkeley School of Information. I thought:"}
        text2={<><br></br><strong>How can we help early stage artists build an audience?</strong><br></br></>}
      />
      <LayeredTextSection
        orientation='small-big'
        text1={"At this point, we did not know what solution we wanted to create, just that we wanted to help new artists."}
        text2={"We began research to get in the headspace of what an artist struggles with when growing their audience and what they need."}
      />
      <ImageTextSection
        orientation='img-top'
        img={research}
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
            title: "Social Media is Necessary But Inauthentic",
            text: "Social media is essential for keeping engagement beyond releases, but artists feel inauthentic posting content that would “make them go viral”."
          },
          {
            img: null,
            title: "Rec Systems Fall Short",
            text: "Traditional recommendation systems prioritize popular artists over new artists, and listeners are frustrated with poor recommendations and rec system control."
          }
        ]}
      />
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
      <EmphasisTextSection
        text1={"Our Hypothesis"}
        text2={"Deeper, more personal connections between an artist and a listener leads to a stronger and more dedicated listener base for an artist."}
      />
      <SectionDivider text={"MOVEMENT II: A PLATFORM FOR EXPRESSION"}/>
      <LayeredTextSection
        orientation='small-big'
        text1={<p>I organized my understanding of artists from research and my own experience as an artist into <strong>creating the artist-facing experience.</strong></p>}
        text2={"My objective: Allow full creative and expressive freedom for artists, and create an app experience that empowers them to tell their stories."}
      />
      <ImageTextSection
        orientation='text-top'
        img={artist_profiles}
        title='Artist Profiles For the Person Behind the Artist'
        text={"Creating a space where an artist can be empowered to showcase themselves and organize content about their craft."}
      />
      <ListSection
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
      />
      <ImageTextSection
        orientation='text-top'
        img={music_page}
        title='Artist Music Pages to Speak Freely About Music'
        text={"Organizing content about music in a page that serves as a source of truth from the artist, where an artist’s thoughts, process, stories, and exclusive content about a piece of music is contained and experienced."}
      />
      <TextSection
        text={<p>I collaborated with the designers creating the listener experience, iterating through proposed designs and <strong>integrating the content from the artist pages with the listener-facing application.</strong></p>}
      />
      <ImageTextSection
        orientation='text-top'
        img={home_page}
        title='Listener Home Page for Discovery and Connection'
        text={<p>Allowing for discovery of new artists through an inverse recommendation system. Increasing visibility of artists through community interactions by displaying reposts, comments, and activity from the network that a listener follows. </p>}
      />
    </main>
  )
}

export default Interlude