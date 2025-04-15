function HyperLink({text, url, size='text'}) {
  return (
    <a className={`text-link ${size}`} href={url} target='_blank'>{text}</a>
  )
}

export default HyperLink