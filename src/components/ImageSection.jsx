function ImageSection({img}) {
  return (
    <div className='container'>
        <img style={{
            width:'100%'
        }} src={img} alt={img}/>
    </div>
  )
}

export default ImageSection