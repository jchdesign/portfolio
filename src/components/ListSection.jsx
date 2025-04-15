import TitleUL from './TitleUL'

function ListSection({title='', subtitle='', list}) {
  return (
    <div className='container'>
        <TitleUL size={'h3 font-600'} text={title}/>
        {subtitle!=='' ? <p className='text'>{subtitle}</p> : null}
        <br></br>
        {list.map((item) => (
            <div className='list-item'>
                {item.title ? <div className='h3 font-600' style={{paddingBottom: '0.5em'}}>{item.title}</div> : null}
                {item.text ? <div className='text'>{item.text}</div> : null}
                <br></br>
                <br></br>
            </div>
            ))
        }
    </div>
  )
}

export default ListSection