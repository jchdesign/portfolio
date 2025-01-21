function EmphasisTextSection({text1, text2}) {
  return (
    <div className='container flex-align-center'>
        <div className='container-small'>
            <div className='h4 font-200'>{text1}</div>
            <div className='h3 font-400'>{text2}</div>
        </div>
    </div>
  )
}

export default EmphasisTextSection