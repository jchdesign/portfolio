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
        <div className='grid-item slim'>
          <TitleUL text='THE JC SYMPHONY ORCHESTRA PRESENTS...' size='text font-600'/>
        </div>
        <div className='grid-item slim text-align-right flex-align-end'>
          <p className='text uppercase' >{dateDisplay}</p>
          <span className='text'>{timeDisplay} @ <HyperLink text='THE WILTERN' url='https://www.wiltern.com/' size='text'/></span>
        </div>
        <div className='grid-item'>
            <p className='h1 text-align-center'>WE ARE ALL STORIES TO BE TOLD</p>
            <br></br>
            <p className='text text-align-center'>A JOURNEY THROUGH DESIGN, RESEARCH, AND MUSIC</p>
        </div>
        <div className='grid-item'>
          <div className='block-container-2'>
          <TitleUL text='DIRECTED BY' size='text font-600'/>
          </div>
        </div>
        <div className='grid-item slim'>
          <div className='spaced-items-container'>
            <p className='text font-600'>JEFF CHANG</p> 
            <div className='square'></div>
            <p className='text'>DESIGNER</p>
            <p className='text'>RESEARCHER</p>
            <p className='text'>COMPOSER</p>
          </div>
        </div>
        <div className='grid-item'>
          <TitleUL text="TONIGHT'S PROGRAM" size='text font-600' style={{marginBottom: '1em'}}/>
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
        <div className='grid-item'>
          <TitleUL text="ABOUT THE DIRECTOR" size='text font-600' style={{marginBottom: '1em'}}/>
          <p className='text' style={{paddingBottom: "1em"}}>A technical product designer with foundations in full-stack engineering, research, music, and film, Jeff creates works inspired by and inspirng stories.</p>
          {/* <p className='text' style={{paddingBottom: "1em"}}>A TECHNICAL PRODUCT DESIGNER WITH FOUNDATIONS IN FULL-STACK ENGINEERING, RESEARCH, MUSIC, AND FILM, JEFF CREATES WORKS INSPIRED BY AND INSPIRING STORIES.</p> */}
          <Link to='/About' className='text-link text font-600'>LEARN MORE</Link>
        </div>
    </div>
  )
}

export default HomeGrid