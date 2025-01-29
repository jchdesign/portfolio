import { useEffect } from 'react';

import CaseStudyGrid from '../components/CaseStudyGrid';
import SectionDivider from '../components/SectionDivider';
import work_data from '../data/work_data';
import ImageTextSection from '../components/ImageTextSection';
import TextSection from '../components/TextSection';
import EmphasisTextSection from '../components/EmphasisTextSection';
import ListSection from '../components/ListSection';

import FlowBefore from '../assets/Nearby/FlowBefore.png';
import EnlargingNearby from '../assets/Nearby/EnlargingNearby.png';
import NearbyBrowse from '../assets/Nearby/NearbyBrowse.png';
import ActiveStatus from '../assets/Nearby/ActiveStatus.png';
import Active_NavBar from '../assets/Nearby/Active_NavBar.png';
import ProfileChanges from '../assets/Nearby/ProfileChanges.png';
import Combined from '../assets/Nearby/Combined.png';
import Nearby_3_4 from '../assets/Nearby/Nearby_3_4.png';
import Exploration from '../assets/Nearby/Exploration.png';

function Nearby() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <CaseStudyGrid data={work_data[1]}/>
      <SectionDivider text='Movement 1: The Motivation'/>
      <TextSection text="Kardder is a social media application that enables and facilitates in-person interactions with one’s immediate, real-time vicinity. It uses location data and connects you with people, places, and events near you, happening right now." />      <ImageTextSection 
        orientation='img-text'
        img={FlowBefore} 
        title='Background' 
        text={"Nearby, a page showing active users within a user's quarter mile radius, is Kardder's holy grail feature.\n\nHow can we better present Nearby as Kardder's most important, stand-out feature?"}
      />
      <ListSection
        title="What's the deal with nearby?"
        subtitle="Conducting a product teardown of Nearby, we uncovered several problems with Nearby that hinders its presentation as Kardder's centerpiece:"
        list={[
          {
            title: 'Redundancies',
            text: 'Nearby is currently very similar to Browse - a page that shows all the users on the app. Users are often confused about the difference between the two.'
          },
          {
            title: 'Indicating Functionality',
            text: 'Nearby in its current state does not indicate its close-proximity functionality. In the current state, profiles on nearby do not signify they are displaying active users within the 0.25 mile radius.'
          },
          {
            title: 'Lack of Prominence',
            text: "Positioned as the second feature in the navigation bar and sharing visual similarity with Browse, Nearby does not stand out as the primary, distinguishing feature of Kardder."
          }
        ]}
      />
      <EmphasisTextSection 
        text1='The overarching problem which guided our goals:' 
        text2='Due to issues in prominence, showcasing functionality, and redundancy, Nearby does not present itself as the selling point and the unique centerpiece of Kardder.'
      />
      <ListSection
        title="Our Goals"
        subtitle="To redesign Nearby to signify its uniqueness and how to frame it as the core feature of Kardder, my team and I tackled the issue by identifying goals for each of these three problem areas:"
        list={[
          {
            title: 'Addressing Redundancies',
            text: 'How can we create separate experiences between Nearby and Browse?'
          },
          {
            title: 'Indicating Functionality',
            text: 'How can we showcase how Nearby is used: to see active users that are within your immediate vicinity?'
          },
          {
            title: 'Increasing Prominence',
            text: "How can we bring Nearby forward as the most visually and functionally salient feature of Nearby?"
          }
        ]}
      />
      <SectionDivider text='Movement 2.1: Increasing Prominence'/>
      <ImageTextSection 
        orientation='text-img'
        img={EnlargingNearby}
        text={'Browsing the market for similar apps, I found that a powerful way to signify the importance of a feature is to enlarge and center it. This led to our design where Nearby became the most visually catching icon in the center of the navigation bar.'}
      />
      <SectionDivider text='Movement 2.2: Indicating Functionality, Addressing Redundancies'/>
      <ImageTextSection
        orientation='text-top'
        img={NearbyBrowse}
        title='The Redundancy Issue'
        text='Browse is a page residing in the Search icon in the navigation bar that shows all active users on the app regardless of active status and distance. Browse was visually very similar to Nearby and consequently shared redundancies with Nearby.'
      />
      <ImageTextSection 
        orientation='text-img'
        img={ActiveStatus}
        title='Active Status Indicator'
        text={'I initiated the addition of an active status indicator to profiles on Nearby. With it being a common indicator of activity, users can apply their prior knowledge associated with this icon when using Kardder.'}
      />
      <ImageTextSection 
        orientation='text-top'
        img={Exploration}
        title={"Rethinking Nearby's UI"}
        text={'As a team, we proposed alternate designs to Nearby to offer clarity on its use case and distinguish it both visually and functionally from Browse.'}
      />

      <SectionDivider text='Movement 3: Constraints and Converging'/>
      <ListSection 
        subtitle='As we presented our designs to the CTO and higher-ups week by week, we learned of certain constraints that eliminated our redesigns.' 
        list={[
          {
            title: 'Constraint 1: Profiles as Cards',
            text: 'Although our designs presented people in the form of networks and relationships, we were encouraged to maintain the card format to preserve this affordance of profile discovery.'
          },
          {
            title: 'Constraint 2: Restricting Functionality',
            text: 'Nearby is meant to show the immediate vicinity, so it must be kept at the 0.25 mile radius cap. '
          }
      ]}/>
      <ImageTextSection
        orientation='text-img'
        img={Active_NavBar}
        title='Back to Square One?'
        text={'Now having big profile changes out of the question and functionality to be constant, we were set back in eliminating redundancies with Browse. However, these insights from the constraints gave us more focus to improve the existing UI while incorporating the progress we made so far: active status button and centering of the icon.'}
      />
      <ImageTextSection
        orientation='text-top'
        img={ProfileChanges}
        text={"Shortly after, I was invited to support another intern group was redesigning profiles previews to promote a more casual atmosphere. \n\nAs I worked across groups to converge our designs, I was able to introduce a profile view into Nearby that now more heavily delivers Nearby's functionality of showing real-time users and close distance through its visual arrangement, all while still maintaining the element of common interests that falls within the profile discoverability constraint."}
      />
      <SectionDivider text='Movement 3: Bringing It Together'/>
      <TextSection text={"During the redesign process, we also worked on a novel Map function to present posts in any user-defined area. As I worked with my team to develop Map, I also pushed for the combining of Browse and Nearby. This would accomplish two things: \n\n 1) Eliminate the idea of Browse as a redundant version of Nearby within Kardder and introduce it as secondary to Nearby, increasing Nearby's perceived importance and prominence. \n2) Give real estate in the navigation bar for the Map feature to reside."}/>
      <ImageTextSection
        orientation='img-top'
        img={Combined}
        text={'With Browse as a secondary feature tucked within Nearby, Nearby now became the most prominent centerpiece where all profile presentations resided, from Nearby, to Browse, to Favorites.'}
      />
      <ImageTextSection 
        orientation='text-top'
        img={Nearby_3_4}
        title='The Final Product'
        text='The version that remained in the app for the rest of my tenure, one that served as the core feature, most prominent page, and visibly and functionally the selling point of Kardder.'
      />
    </main>
  )
}

export default Nearby