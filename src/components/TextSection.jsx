function TextSection({textAlign='left', size='h4', text}) {
  return (
    <div className={`text-container text-align-${textAlign} ${size}`}>{text}</div>
  )
}

export default TextSection