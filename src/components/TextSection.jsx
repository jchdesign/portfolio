function TextSection({textAlign='left', size='h4', text}) {
  return (
    <div className={`text-container text-align-${textAlign} ${size}`}>
      <br></br>
      {text}
      <br></br>
    </div>
  )
}

export default TextSection