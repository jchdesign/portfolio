import ProgramItem from './ProgramItem';
import work_data from '../data/work_data';
import film_data from '../data/film_data';
import music_data from '../data/music_data';
import TitleUL from './TitleUL';

function ProgramList() {
  return (
    <section className='container'>
        <TitleUL text='PROGRAM' size='h2'/>
        <ProgramItem listing='Jeff Chang: Abridged' credit='CHANG' link='About'/>
        <ProgramItem listing='Stories of Technology' subitem_list={work_data}/>
        <ProgramItem listing='Stories of Motion Picture' subitem_list={film_data}/>
        <ProgramItem listing='Stories of Me' subitem_list={music_data}/>
    </section>
  )
}

export default ProgramList