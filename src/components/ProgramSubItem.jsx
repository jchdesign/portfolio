import { Link } from 'react-router-dom'

function ProgramSubItem({listing, credit, arranged=false, link=''}) {
  return (
    <div className='program-item sub-item'>
        {link==='' ? <div className='title h4 font-300'>{listing}</div> : <Link to={link} className='text-link title h4 font-300'>{listing}</Link>}
        <div className='dashed-line'></div>
        <div className='artist h5 font-italic-200'>{arranged ? `ARR. ${credit}` : credit}</div>
    </div>
  )
}

export default ProgramSubItem