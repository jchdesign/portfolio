function HyperLink({text, url}) {
  return (
    <a className='link' href={url} target='_blank'>{text}</a>
  )
}

export default HyperLink