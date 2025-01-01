import ProgramSubItem from './ProgramSubItem';
import {Link} from 'react-router-dom';

function ProgramItem({title='WORKS', credit='CHANG', link='', subitem_list=[]}) {
  return (
    <div class='program-container'>
        <div className='program-item'>
            {link==='' ? <div className='title h3 font-400'>{title}</div> : <Link to={link} className='title h3 font-400'>{title}</Link>}
            <div className='dashed-line'></div>
            <div className='artist h5 font-italic-200'>{credit}</div>
        </div>
        {subitem_list.length!==0 &&
            subitem_list.map((item) => (
                <ProgramSubItem 
                    title={item.title}
                    credit={item.credit}
                    link={item.link}
                />
            ))
        }
    </div>
  )
}

export default ProgramItem