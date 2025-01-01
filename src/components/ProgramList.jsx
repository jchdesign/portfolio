import ProgramItem from './ProgramItem';
import work_data from '../data/work_data';
import film_data from '../data/film_data';
import music_data from '../data/music_data';
import TitleUL from './TitleUL';

function ProgramList() {
  return (
    <section className='container'>
        <TitleUL text='PROGRAM' size='h2'/>
        <ProgramItem title='WHO I AM' credit='CHANG' link='About'/>
        <ProgramItem title='WORKS SUITE' subitem_list={work_data}/>
        <ProgramItem title='FILM SUITE' subitem_list={film_data}/>
        <ProgramItem title='MUSIC SUITE' subitem_list={music_data}/>
    </section>
  )
}

export default ProgramList