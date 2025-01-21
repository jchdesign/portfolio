function ListSection({title='', subtitle='', list}) {
  return (
    <div className='container'>
        <p className='h2 font-200'>{title}</p>
        {subtitle!=='' ? <p className='h5 font-200'>{subtitle}</p> : null}
        {list.map((item) => (
            <div className='list-item'>
                <div className='h3 font-400'>{item.title}</div>
                <div className='h4 font-200'>{item.text}</div>
            </div>
            ))
        }
    </div>
  )
}

export default ListSection