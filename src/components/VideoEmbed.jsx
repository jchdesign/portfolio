import React from 'react'
import TitleUL from './TitleUL'

function VideoEmbed({source='', title=''}) {
  return (
    <div className='container video-container'>
        <TitleUL text={title} size='text font-600'/>
        <br></br>
        <iframe className='video-full' allowFullScreen src={source}></iframe>
    </div>
  )
}

export default VideoEmbed