import HyperLink from './HyperLink';

function ImageTextSection({orientation='img-text', img, imglink='', hyperlink='', hyperlinkText='Link', title='', text, textSize='h4'}) {
  return (
    <>
        {
            orientation === 'img-text' ?  <div className='img-text-container'>
                {imglink !== '' ? <a href={imglink} target='_blank'><img src={img} alt={img}/></a> : <img src={img} alt={img}/>}
                <div className='text'>
                    {title!=='' ? <><p className='h3 font-600'>{title}</p><br></br></> : null}
                    <p className={`${textSize} font-300`}>{text}</p>
                    {hyperlink !== '' ? <><br></br><HyperLink text={hyperlinkText} url={hyperlink} size='h3 font-200 font-grey'/></> : null}
                </div>
            </div> 
            : orientation ==='text-img' ? <div className='img-text-container'>
                <div className='text'>
                    {title!=='' ? <><p className='h3 font-600'>{title}</p><br></br></> : null}
                    <p className={`${textSize} font-300`}>{text}</p>
                </div>
                {imglink !== '' ? <a href={imglink}><img src={img} alt={img}/></a> : <img src={img} alt={img}/>}
            </div>
            : orientation ==='img-top' ? <div className='img-text-container' style={{
                display: 'block'
            }}>
                {imglink !== '' ? <a href={imglink} target='_blank'><img style={{width:'100%'}} src={img} alt={img}/></a> 
                : <img style={{width:'100%'}} src={img} alt={img}/>}
                <div style={{width:'100%'}} className='text'>
                    {title!=='' ? <><p className='h3 font-600'>{title}</p><br></br></> : null}
                    <p className={`${textSize} font-300`}>{text}</p>
                </div>
            </div>
            : orientation ==='text-top' ? <div className='img-text-container' style={{
                display: 'block'
            }}>
                <div style={{width:'100%', paddingBottom:'0px'}} className='text'>
                    {title!=='' ? <><p className='h3 font-600'>{title}</p><br></br></> : null}
                    <p className={`${textSize} font-300`}>{text}</p>
                </div>
                {imglink !== '' ? <a href={imglink} target='_blank'><img style={{width:'100%'}} src={img} alt={img}/></a> 
                : <img style={{width:'100%'}} src={img} alt={img}/>}            </div>
            : null
        }
    </>
  )
}

export default ImageTextSection