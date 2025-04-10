import { Link } from 'react-router-dom';
import arrowLeft from '../assets/arrow-left.svg'

function ReturnHeader({project}) {
  return (
    <div className='return-header'>
      <span className='return-button'>
        <img className='return-arrow' src={arrowLeft}/>
        <Link to={'/'} className='text-link title h5'>HOME</Link>
      </span>
      <div className='return-header-currently'>NOW PLAYING: {project}</div>
    </div>
  )
}

export default ReturnHeader