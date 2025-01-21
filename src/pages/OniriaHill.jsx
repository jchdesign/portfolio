import { useEffect } from 'react';

import film_data from '../data/film_data';

import CaseStudyGrid from '../components/CaseStudyGrid';

function OniriaHill() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <main>
        <CaseStudyGrid data={film_data[0]}/>
    </main>
  )
}

export default OniriaHill