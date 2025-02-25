function LayeredTextSection({text1, text2, orientation='big-small'}) {
  return (
    <div className='case-study container'>
      {orientation==='big-small' ? <>
        <div className='left-80 h3 font-400'>{text1}</div>
        <br></br>
        <div className='right-80 h4 font-300'>{text2}</div>
      </> : 
      orientation==='small-big' ? <>
        <div className='left-80 h4 font-300'>{text1}</div>
        <br></br>
        <div className='right-80 h3 font-400'>{text2}</div>
      </> : null
    }
    </div>
  )
}

export default LayeredTextSection