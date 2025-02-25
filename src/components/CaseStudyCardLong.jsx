import { Link } from 'react-router-dom'

function CaseStudyCardLong({listing, overview, img, arranged=false, link=''}) {
  return (
    <Link to={link}>
        <div className='case-study-card-column'>
          <img className='teaser-img' src={img} alt={img}/>
          <div>
            <p className='text-link h2 font-300'>{listing}</p>
            <p className='h4 font-300'>{overview}</p>
          </div>
        </div>
    </Link>
  )
}

export default CaseStudyCardLong