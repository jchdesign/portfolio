function HyperLink({text, url, size='h5'}) {
  return (
    <a className={`text-link ${size}`} href={url} target='_blank'>{text}</a>
  )
}

export default HyperLink