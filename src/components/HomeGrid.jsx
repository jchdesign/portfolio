import HyperLink from './HyperLink'
import TitleUL from './TitleUL'

function HomeGrid() {
  return (
    <div id='home-grid'>
        <div className='grid-item'>
          <TitleUL text='THE JC SYMPHONY ORCHESTRA PRESENTS...' size='h4'/>
        </div>
        <div className='grid-item text-align-right flex-align-end'>
          <p className='h5 font-200' >27 DECEMBER 2024</p>
          <span className='h5 font-200'>19:00 @ <HyperLink text='THE WILTERN' url='https://www.wiltern.com/' size='h5 font-300'/></span>
        </div>
        <div className='grid-item'>
          <p className='title1 font-100'>WE ARE ALL<br></br>STORIES<br></br>TO BE TOLD</p>
          <br></br>
          <p className='h3 font-200'>A Journey Through Design, Research, and Music</p>
        </div>
        <div className='grid-item flex-align-end'>
          <div className='block-container-1'>
              <div className='block1'></div>
              <div className='block2'></div>
              <div className='block3'></div>
              <div className='block4'></div>
              <div className='block5'></div>
              <div className='block6'></div>
          </div>
        </div>
        <div className='grid-item'>
          <div className='block-container-2'>
            <div className='block1'></div>
            <div className='block2'></div>
          </div>
        </div>
        <div className='grid-item'>
          <div className='home-credits-container'>
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

export default HomeGrid