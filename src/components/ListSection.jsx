function ListSection({title='', subtitle='', list}) {
  return (
    <div className='container'>
        <p className='h2'>{title}</p>
        {subtitle!=='' ? <p className='h5'>{subtitle}</p> : null}
        <br></br>
        {list.map((item) => (
            <div className='list-item'>
                {item.title ? <div className='h3 font-400'>{item.title}</div> : null}
                {item.text ? <div className='h4 font-300'>{item.text}</div> : null}
                <br></br>
            </div>
            ))
        }
    </div>
  )
}

export default ListSection