import work_data from '../data/work_data';
import film_data from '../data/film_data';
import music_data from '../data/music_data';
import TitleUL from './TitleUL';
import ProgramSubItem from './ProgramSubItem';
import ProgramItemCardsLong from './ProgramItemCardsLong';

function ProgramListCardsLong() {
  return (
    <section className='container'>
        <TitleUL text='PROGRAM' size='h2'/>
        <ProgramSubItem listing='Jeff Chang: Abridged' credit='CHANG' link='About'/>
        <ProgramItemCardsLong listing='Suite I: Stories of Technology' subitem_list={work_data}/>
        <ProgramItemCardsLong listing='Suite II: Stories of Motion Picture' subitem_list={film_data}/>
        <ProgramItemCardsLong listing='Suite III: Stories of Me' subitem_list={music_data}/>
    </section>
  )
}

export default ProgramListCardsLong