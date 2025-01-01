import { Link } from 'react-router-dom'

function ProgramSubItem({title, credit, link=''}) {
  return (
    <div className='program-item sub-item'>
        {link==='' ? <div className='title h4 font-300'>{title}</div> : <Link to={link} className='title h4 font-300'>{title}</Link>}
        <div className='dashed-line'></div>
        <div className='artist h5 font-italic-200'>{credit}</div>
    </div>
  )
}

export default ProgramSubItem