import HyperLink from './HyperLink'
import TitleUL from './TitleUL'

function Grid() {
  return (
    <div id='grid-container'>
        <div className='grid-item'>
          <TitleUL text='THE JC SYMPHONY ORCHESTRA PRESENTS...' size='h4'/>
        </div>
        <div className='grid-item text-align-right flex-align-end'>
          <p className='h5 font-200' >27 DECEMBER 2024</p>
          <span className='h5 font-400'>19:00 @ <HyperLink text='THE WILTERN' url='https://www.wiltern.com/'/></span>
        </div>
        <div className='grid-item title'>
          <p className='title1 font-100'>WE ARE ALL<br></br>STORIES<br></br>TO BE TOLD</p>
          <br></br>
          <p className='h3 font-200'>A JOURNEY THROUGH DESIGN, RESEARCH, MUSIC</p>
        </div>
        <div className='grid-item'>asdf</div>
        <div className='grid-item'>asdf</div>
        <div className='grid-item text-align-right flex-align-end'>
          <div className='horizontal-flex-container'>
            <p className='h5 font-200'>DIRECTOR</p>
            <p className='h5 font-200'>COMPOSER</p>
            <p className='h5 font-200'>DESIGNER</p>
            <div className='square'></div>
            <p className='h1 font-200'>JEFF CHANG</p>
          </div>
        </div>
    </div>
  )
}

export default Grid