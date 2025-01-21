import ProgramSubItem from './ProgramSubItem';
import {Link} from 'react-router-dom';

function ProgramItem({listing='Works', credit='Chang', link='', subitem_list=[]}) {
  return (
    <div className='program-container'>
        <div className='program-item'>
            {link==='' ? <div className='title h3 font-200'>{listing}</div> : <Link to={link} className='text-link title h3 font-200'>{listing}</Link>}
            <div className='dashed-line'></div>
            <div className='artist h5 font-italic-200'>{credit}</div>
        </div>
        <div className='subitem-container'>
            {subitem_list.length!==0 &&
                subitem_list.map((item) => (
                    <ProgramSubItem 
                        key={item.key}
                        listing={item.listing}
                        credit={item.credit}
                        link={item.link}
                        arranged={item.arranged}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ProgramItem