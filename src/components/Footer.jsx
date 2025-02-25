import email from '../assets/email.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';
import spotify from '../assets/spotify.svg';


function Footer() {
  return (
    <footer id='footer'>
      <div className='grid-item'>
          <p className='h5'>THIS PROGRAM IS DESIGNED AND CODED BY YOURS TRULY.</p>
          <br></br>
          <p className='h5 font-400'>© 2025 JEFF CHANG</p>
      </div>
      <div className='grid-item'>
          <div className='socials-container'>
              <a href='https://open.spotify.com/artist/27GE283UaGrIuteEU5c7GZ?si=Sj6INxeyTbWMz5jaxNfI0w' target='_blank'><img className='footer-img' src={spotify} alt='Spotify'/></a>
              <a href='https://www.youtube.com/channel/UCxYGjYe7M7cBsPw1Aw_dOgQ' target='_blank'><img className='footer-img' src={youtube} alt='YouTube'/></a>
              <a href='https://www.linkedin.com/in/jeff-chang-115937207/' target='_blank'><img className='footer-img' src={linkedin} alt='LinkedIn'/></a>
              <a href='https://github.com/jchdesign' target='_blank'><img className='footer-img' src={github} alt='GitHub'/></a>
              <a href='mailto:jchang@ischool.berkeley.edu' target='_blank'><img className='footer-img' src={email} alt='Email'/></a>
          </div>
      </div>
    </footer>
  )
}

export default Footer