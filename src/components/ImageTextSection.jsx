function ImageTextSection({orientation, img, title='', text}) {
  return (
    <>
        {
            orientation === 'img-text' ?  <div className='img-text-container'>
                <img src={img} alt={img}/>
                <div className='text'>
                    {title!=='' ? <><p className='h2 font-200'>{title}</p><br></br></> : null}
                    <p className='h5 font-200'>{text}</p>
                </div>
            </div> 
            : orientation ==='text-img' ? <div className='img-text-container'>
                <div className='text'>
                    {title!=='' ? <><p className='h2 font-200'>{title}</p><br></br></> : null}
                    <p className='h5 font-200'>{text}</p>
                </div>
                <img src={img} alt={img}/>
            </div>
            : <div className='img-text-container' style={{
                display: 'block'
            }}>
                <img style={{width:'100%'}} src={img} alt={img}/>
                <div style={{width:'100%'}} className='text'>
                    {title!=='' ? <><p className='h2 font-200'>{title}</p><br></br></> : null}
                    <p className='h5 font-200'>{text}</p>
                </div>
            </div>
        }
    </>
  )
}

export default ImageTextSection