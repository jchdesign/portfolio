import { useEffect } from 'react';

import film_data from '../data/film_data';

import CaseStudyGrid from '../components/CaseStudyGrid';
import VideoEmbed from '../components/VideoEmbed';

function DirtyLaundry() {
    useEffect(() => {
     window.scrollTo(0, 0);
    }, []);
    
    return (
        <main>
            <CaseStudyGrid data={film_data[0]}/>
            <VideoEmbed title={"SCENE 5: LOVE!"} source={"https://www.youtube.com/embed/Nx7_0bSo23s?start=76"} />
        </main>
    )
}

export default DirtyLaundry