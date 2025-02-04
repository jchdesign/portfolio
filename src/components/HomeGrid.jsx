import HyperLink from './HyperLink'
import TitleUL from './TitleUL'

function HomeGrid() {
  var currentDate = new Date()
  currentDate.setHours(currentDate.getHours() + 2);

  var dateDisplay = currentDate.getDate() +' '
    + currentDate.toLocaleString('default', { month: 'long' }) + ' '
    + currentDate.getFullYear()

  var timeDisplay = currentDate.getHours() + ":00"

  return (
    <div id='home-grid'>
        <div className='grid-item'>
          <TitleUL text='THE JC SYMPHONY ORCHESTRA PRESENTS...' size='h4'/>
        </div>
        <div className='grid-item text-align-right flex-align-end'>
          <p className='h5 font-200' >{dateDisplay}</p>
          <span className='h5 font-200'>{timeDisplay} @ <HyperLink text='THE WILTERN' url='https://www.wiltern.com/' size='h5 font-300'/></span>
        </div>
        <div className='grid-item'>
          <br></br>
          <p className='title1 font-100'>WE ARE ALL <br></br>STORIES<br></br>TO BE TOLD</p>
          <br></br>
        </div>
        <div className='grid-item text-align-right flex-align-end'>
        <p className='h5 font-200'>A Journey <br></br>Through</p>
        <p className='h1 font-200'>Design<br></br>Research<br></br>Music<br></br></p>
        </div>
        <div className='grid-item'>
          <div className='block-container-2'>
          <TitleUL text='Directed By...' size='h3'/>
          </div>
        </div>
        <div className='grid-item'>
          <div className='home-credits-container'>
            <p className='h5 font-200'>COMPOSER</p>
            <p className='h5 font-200'>DESIGNER</p>
            <p className='h5 font-200'>PRODUCER</p>
            <div className='square'></div>
            <p className='h1 font-200'>JEFF CHANG</p> 
          </div>
        </div>
    </div>
  )
}

export default HomeGrid