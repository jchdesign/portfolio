import { useEffect } from 'react';

import film_data from '../data/film_data';

import CaseStudyGrid from '../components/CaseStudyGrid';
import VideoEmbed from '../components/VideoEmbed';
import Footer from '../components/Footer';

function OniriaHill() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <main>
        <CaseStudyGrid data={film_data[1]}/>
        {/* <VideoEmbed title='DEMO' source='https://www.youtube.com/embed/t24fFI8PnZk?start=0&end=92'/> */}
      <Footer/>
    </main>
  )
}

export default OniriaHill