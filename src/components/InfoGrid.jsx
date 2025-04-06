function InfoGrid({list}) {
  return (
    <div className='info-grid-3'>
        {list.length!==0 &&
            list.map((item) => (
              <div className='grid-item'>
                <>
                <p className='h3 font-600'>{item.title}</p>
                <br></br>
                <p className='h5'>{item.text}</p>
                <img>{item.img}</img>
                </>
              </div>
            ))
          }
    </div>
  )
}

export default InfoGrid