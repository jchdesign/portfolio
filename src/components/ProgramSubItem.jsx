import { Link } from 'react-router-dom'

function ProgramSubItem({listing, credit, arranged=false, link=''}) {
  return (
    <>
      <div className='program-item sub-item'>
        {link !=='' ? <Link to={link} className='text-link title h5 font-300'>{listing}</Link> : <div className='title h5 font-300'>{listing}</div>}
        <div className='dashed-line'></div>
        <div className='artist h5 font-italic-200'>{arranged ? `ARR. ${credit}` : credit}</div>
      </div>
        {/* {img !=='' ?
          <div className='sub-item-details'>
            <img className='teaser-img' src={img}/>
            <p className='mini-overview h4'>{homeOverview}</p>
          </div>
        : null} */}
    </>
  )
}

export default ProgramSubItem