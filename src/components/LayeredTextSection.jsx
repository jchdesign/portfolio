function LayeredTextSection({text1, text2}) {
  return (
    <div className='case-study container'>
        <div className='left-80 h2 font-400'>{text1}</div>
        <div className='right-80 h4 font-200'>{text2}</div>
    </div>
  )
}

export default LayeredTextSection