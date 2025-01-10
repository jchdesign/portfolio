function TextSection({textAlign='left', size='h5', text}) {
  return (
    <div className={`text-container text-align-${textAlign} ${size} font-200`}>{text}</div>
  )
}

export default TextSection