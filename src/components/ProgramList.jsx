import ProgramItem from './ProgramItem';
import work_data from '../data/work_data';
import film_data from '../data/film_data';
import music_data from '../data/music_data';
import TitleUL from './TitleUL';

function ProgramList() {
  return (
    <section className='container'>
        <TitleUL text="TONIGHT'S PROGRAM" size='h2' style={{marginBottom: '1em'}}/>
        <ProgramItem
          listing='SUITE I: STORIES OF TECHNOLOGY' credit='CHANG' link='#suite-1'
          caption='Featuring performances by MathWorks, Kardder, and UCLA CVL'/>
        <ProgramItem
          listing='SUITE II: STORIES OF MOTION PICTURE' credit='CHANG' link='#suite-2'
          caption='Featuring performances by CAP Studios'/>
        <ProgramItem
          listing='SUITE III: STORIES OF MUSIC' credit='CHANG' link='#suite-3'
          caption='Featuring performances by Recollections'/>
        <ProgramItem
          listing='SUITE IV: STORIES OF ME' credit='CHANG' link='#suite-4'/>
    </section>
  )
}

export default ProgramList