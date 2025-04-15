import email from '../assets/email.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';
import spotify from '../assets/spotify.svg';

import HyperLink from './HyperLink';

function Footer() {
  return (
    <footer id='footer'>
      <div className='grid-item slim'>
          <p className='text'>THIS PROGRAM IS DESIGNED AND CODED BY YOURS TRULY.</p>
          <br></br>
          <p className='text font-400'>© 2025 JEFF CHANG</p>
      </div>
      <div className='grid-item slim'>
          <div className='spaced-items-container'>
            <HyperLink text={"SPOTIFY"} size='text font-600' url={'https://open.spotify.com/artist/27GE283UaGrIuteEU5c7GZ?si=Sj6INxeyTbWMz5jaxNfI0w'}/>
            <HyperLink text={"YOUTUBE"} size='text font-600' url={'https://www.youtube.com/channel/UCxYGjYe7M7cBsPw1Aw_dOgQ'}/>
            <HyperLink text={"LINKEDIN"} size='text font-600' url={'https://www.linkedin.com/in/jeff-chang-115937207/'}/>
            <HyperLink text={"GITHUB"} size='text font-600' url={'https://github.com/jchdesign'}/>
            <HyperLink text={"EMAIL"} size='text font-600' url={'mailto:jchang@ischool.berkeley.edu'}/>
            <HyperLink text={"RESUME"} size='text font-600' url={'https://drive.google.com/file/d/1RV2llWHojTdHZigy02rhR8aTMDrp5RRc/view?usp=drive_link'}/>
          </div>
      </div>
    </footer>
  )
}

export default Footer