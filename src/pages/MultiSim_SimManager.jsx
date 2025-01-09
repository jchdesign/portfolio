import { useEffect } from 'react';

import Figure1 from '../assets/Figure1.jpg';

import CaseStudyGrid from '../components/CaseStudyGrid';
import ImageTextSection from '../components/ImageTextSection';
import LayeredTextSection from '../components/LayeredTextSection';
import SectionDivider from '../components/SectionDivider';
import work_data from '../data/work_data';

function MultiSim_SimManager() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <CaseStudyGrid data={work_data[0]}/>
      <SectionDivider text='Movement 1: The Problem'/>
      <LayeredTextSection 
        text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'} 
        text2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
      />
      <ImageTextSection orientation='img-text' img={Figure1} title='Hello World' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'/>
      <ImageTextSection orientation='text-img'img={Figure1} title='Hello World' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'/>
      <ImageTextSection orientation='top-bottom'img={Figure1} title='Hello World' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'/>
      <ImageTextSection orientation='top-bottom'img={Figure1} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'/>
    </main>
  )
}

export default MultiSim_SimManager