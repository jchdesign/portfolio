import TitleUL from './TitleUL';
import ProgramSubItem from './ProgramSubItem';
import ReturnHeader from './ReturnHeader';

function CaseStudyGrid({data}) {
  return (
    <>
        <ReturnHeader project={data.listing}/>
        <div className='case-study-grid'>
            <div className='grid-item'>
            <TitleUL text={`IN COLLABORATION WITH ${data.credit}`} size='h4'/>
            </div>
            <div className='grid-item text-align-right flex-align-end'>
            <p className='h5 font-200'>{data.duration}</p>
            </div>
            <div className='grid-item'>
            <p className='title2 font-100'>{data.title}</p>
            </div>
            <div className='grid-item flex-align-center'>
                <img style={{
                    maxHeight: '300px',
                    maxWidth: '300px'
                }} src={data.img}/>
            </div>
        </div>
        <div className='case-study-credits-grid'>
        <div className='grid-item'>
            <p className='h4 font-100 font-grey heading-padded'>OVERVIEW</p>
            <p className='h4'>{data.overview}</p>
        </div>
        <div className='grid-item'>
            <p className='h4 font-100 font-grey heading-padded'>DIRECTED BY</p>
            <ProgramSubItem 
                listing={data.role[0]}
                credit={data.role[1]}
            />
        </div>
        <div className='grid-item'>
            <p className='h4 font-100 font-grey heading-padded'>FEATURING</p>
            {data.collaborators.map((item) => (
                <ProgramSubItem 
                    listing={item.name}
                    credit={item.role}
                />
            ))}
        </div>
    </div>
    </>
  )
}

export default CaseStudyGrid