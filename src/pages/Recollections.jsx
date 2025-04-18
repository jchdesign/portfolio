import { useEffect } from 'react';

import music_data from '../data/music_data';

import CaseStudyGrid from '../components/CaseStudyGrid';
import ImageTextSection from '../components/ImageTextSection';
import Footer from '../components/Footer';

function Recollections() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <CaseStudyGrid data={music_data[0]}/>
            {music_data[0].releases.map(item => (
                <ImageTextSection
                    key={item.key}
                    title={item.name}
                    text={item.text}
                    img={item.img}
                    imglink={item.link}
                    hyperlink={item.link}
                    hyperlinkText='LISTEN'
                />
            ))}
            <Footer/>
        </main>
  )
}

export default Recollections