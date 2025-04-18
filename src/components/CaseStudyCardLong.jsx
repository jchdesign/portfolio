import { Link } from 'react-router-dom'

function CaseStudyCardLong({listing, miniOverview, imgCard, img_cardSecondary, link=''}) {
  return (
    <Link style={{display:'flex', justifyContent:'center'}} to={link}>
      <div className='case-study-card-long'>
        <img className='teaser-img' src={imgCard} alt={imgCard}/>
        <div className='description'>
          <div className='program-item'>
            <p className='text-link h3 font-400'>{listing}</p>                
            <div className='dashed-line'></div>
          </div>
          <p className='text'>{miniOverview}</p>
        </div>
      </div>
    </Link>
  )
}

export default CaseStudyCardLong