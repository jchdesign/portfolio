import TitleUL from './TitleUL';
import ProgramSubItem from './ProgramSubItem';
import ReturnHeader from './ReturnHeader';

function CaseStudyGrid({data}) {
  return (
    <>
        <ReturnHeader project={data.listing}/>
        <div className='case-study-grid'>
            <div className='grid-item slim'>
                {data.collab ? <TitleUL text={`IN COLLABORATION WITH ${data.collab_credits}`} size='text font-600'/> :
                <TitleUL text={data.collab_credits} size='text font-600'/>}
            </div>
            <div className='grid-item slim text-align-right flex-align-end'>
                <p className='text font-600'>{data.duration}</p>
            </div>
            <div className='grid-item'>
                <p className='title2 font-100'>{data.title}</p>
            </div>
            <div className='grid-item flex-align-center'>
                <img style={{
                    width:'100%'
                }} src={data.img}/>
            </div>
        </div>
        <div className='case-study-credits-grid'>
        <div className='grid-item slim'>
            <p className='text font-600 font-grey heading-padded'>OVERVIEW</p>
            <p className='text'>{data.overview}</p>
        </div>
        <div className='grid-item slim' style={!data.collab ? {gridRow:'1/4'}:{}}>
            <p className='text font-600 font-grey heading-padded'>CREATED BY</p>
            <ProgramSubItem 
                listing={data.role[0]}
                credit={data.role[1]}
            />
        </div>
        {data.collab && (<div className='grid-item slim'>
            <p className='text font-600 font-grey heading-padded'>FEATURING</p>
            {data.collaborators.map((item) => (
                <ProgramSubItem 
                    listing={item.name}
                    credit={item.role}
                />
            ))}
        </div>)}
    </div>
    </>
  )
}

export default CaseStudyGrid