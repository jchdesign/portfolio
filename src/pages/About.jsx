import ReturnHeader from '../components/ReturnHeader';
import ProgramSubItem from '../components/ProgramSubItem';
import LayeredTextSection from '../components/LayeredTextSection';
import TextSection from '../components/TextSection';
import Footer from '../components/Footer';

function About({data}) {
  return (
    <main>
      <ReturnHeader project='Jeff Chang, Abridged'/>
      <div className='about-img' style={{backgroundImage: `url(${data.image})`}}></div>
        <div id='roles-container'>
        <div className='role h3'>Jeff Chang.</div>
        <div className='role h3 font-100'>Designer.</div>
        <div className='role h3 font-100'>Composer.</div>
        <div className='role h3 font-100'>Researcher.</div>
        <div className='role h3 font-100'>Musician.</div>
        <div className='role h3 font-100'>Product Manager.</div>
        <div className='role h3'>Storyteller.</div>
      </div>
      <LayeredTextSection 
        text1='"We are all stories to be told."'
        text2='It’s a philosophy I carry throughout my all my work in design, research, and music. Everything we experience and all the people we meet have something more to say - something story behind why they are. And my passion is to tell it so that we can know it, understand it, and feel it.'
      />
      <TextSection 
        text='XXX I use my skills in composing, product design, music production, UX + Psychological research, engineering, and product management to understand ...
        Let’s build so we can keep telling our stories. XXX'
        size='h4'
      />
      <div className='container'>
        <div className='program-container'>
        <p className='h4 font-100 font-grey heading-padded'>Education</p>
          {data.education.map((item) => (
            <ProgramSubItem 
                listing={item.name}
                credit={item.year}
            />
          ))}
        </div>
      </div>
      <div className='container'>
        <div className='program-container'>
        <p className='h4 font-100 font-grey heading-padded'>Featured Works</p>
          {data.experience.map((item) => (
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