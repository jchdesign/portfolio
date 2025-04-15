import TitleUL from './TitleUL'

function TextSection({text, title='', textSize='text'}) {
  return (
    <div className={"text-container flex-align-center"}>
      <div className='container-small'>
        {title=='' ? null : <div><TitleUL size='h3 font-600' text={title}/><br></br><br></br></div>}
        <p className={textSize}>{text}</p>
      </div>
    </div>
  )
}

export default TextSection