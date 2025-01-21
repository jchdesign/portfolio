import { useEffect } from 'react';

import film_data from '../data/film_data';

import CaseStudyGrid from '../components/CaseStudyGrid';

function DirtyLaundry() {
    useEffect(() => {
     window.scrollTo(0, 0);
    }, []);
    
    return (
        <main>
            <CaseStudyGrid data={film_data[1]}/>
        </main>
    )
}

export default DirtyLaundry