import { useEffect } from 'react';

import ReturnHeader from '../components/ReturnHeader';
import ProgramSubItem from '../components/ProgramSubItem';
import LayeredTextSection from '../components/LayeredTextSection';
import TextSection from '../components/TextSection';
import Footer from '../components/Footer';
import RolesContainer from '../components/RolesContainer';

function About({data}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ReturnHeader project='Jeff Chang, Abridged'/>
      <div className='about-img' style={{backgroundImage: `url(${data[0].img})`}}></div>
      <RolesContainer/>
      <LayeredTextSection 
        text1='"WE ARE ALL STORIES TO BE TOLD."'
        text2='It’s a philosophy I carry throughout my all my work in design, research, and music. Everything we experience and all the people we meet have something more to say - something story behind why they are. And my passion is to tell it so that we can know it, understand it, and feel it.'
      />
      <TextSection 
        text={'I use my skills in composing, product design, music production, UX + psychological research, engineering, and product management to understand the stories of those around me - and create while inspired by them. \n\nLet’s build so we can keep telling our stories. \n\n - JC'}
        size='h4'
      />
      <div className='container'>
        <div className='program-container'>
        <p className='h4 font-400 font-grey heading-padded'>EDUCATION</p>
          {data[0].education.map((item) => (
            <ProgramSubItem 
                listing={item.name}
                credit={item.year}
            />
          ))}
        </div>
      </div>
      <div className='container'>
        <div className='program-container'>
        <p className='h4 font-400 font-grey heading-padded' style={{textTransform: "capitalize"}}>FEATURED WORKS</p>
          {data[0].experience.map((item) => (
            <ProgramSubItem 
                listing={item.name}
                credit={item.year}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default About