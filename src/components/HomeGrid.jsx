import { Link } from 'react-router-dom';

import HyperLink from './HyperLink';
import TitleUL from './TitleUL';
import ProgramSubItem from './ProgramSubItem';
import RolesContainer from './RolesContainer';

function HomeGrid() {
  var currentDate = new Date()
  currentDate.setHours(currentDate.getHours() + 2);

  var dateDisplay = currentDate.getDate() +' '
    + currentDate.toLocaleString('default', { month: 'long' }) + ' '
    + currentDate.getFullYear()

  var timeDisplay = currentDate.getHours() + ":00"

  return (
    <div id='home-grid'>
        <div className='grid-item'>
          <TitleUL text='THE JC SYMPHONY ORCHESTRA PRESENTS...' size='h5 font-600'/>
        </div>
        <div className='grid-item text-align-right flex-align-end'>
          <p className='h5 font-300 uppercase' >{dateDisplay}</p>
          <span className='h5 font-300'>{timeDisplay} @ <HyperLink text='THE WILTERN' url='https://www.wiltern.com/' size='h5 font-300'/></span>
        </div>
        <div className='grid-item'>
            <p className='h1 font-400 text-align-center'>WE ARE ALL STORIES TO BE TOLD</p>
            <br></br>
            <p className='h5'>A JOURNEY THROUGH DESIGN, RESEARCH, AND MUSIC</p>
        </div>
        <div className='grid-item'>
          <div className='block-container-2'>
          <TitleUL text='DIRECTED BY' size='h5 font-600'/>
          </div>
        </div>
        <div className='grid-item'>
          <div className='home-credits-container'>
            <p className='h5 font-600'>JEFF CHANG</p> 
            <div className='square'></div>
            <p className='h5'>COMPOSER</p>
            <p className='h5'>DESIGNER</p>
            <p className='h5'>PRODUCER</p>
          </div>
        </div>
        <div className='grid-item' style={{padding:'50px'}}>
          <TitleUL text="TONIGHT'S PROGRAM" size='h4 font-600' style={{marginBottom: '1em'}}/>
          <ProgramSubItem
            listing='SUITE I: STORIES OF TECHNOLOGY' credit='CHANG' link='#suite-1'
            caption='Featuring performances by MathWorks, Kardder, and UCLA CVL'
            />
          <ProgramSubItem
            listing='SUITE II: STORIES OF MOTION PICTURE' credit='CHANG' link='#suite-2'
            caption='Featuring performances by CAP Studios'
            />
          <ProgramSubItem
            listing='SUITE III: STORIES OF MUSIC' credit='CHANG' link='#suite-3'
            caption='Featuring performances by Recollections'
            />
        </div>
        <div className='grid-item' style={{padding: '50px'}}>
          <TitleUL text="ABOUT THE DIRECTOR" size='h4 font-600' style={{marginBottom: '1em'}}/>
          <p className='h5' style={{paddingBottom: "1em"}}>WEAVING TOGETHER 3 YEARS OF PRODUCT DESIGN, 5 YEARS OF MUSIC COMPOSITION, AND A LIFETIME OF STORYTELLING, JEFF CREATES WORKS INSPIRED BY AND INSPIRING STORIES.</p>
          <Link to='/About' className='text-link h5 font-600'>LEARN MORE</Link>
        </div>
    </div>
  )
}

export default HomeGrid