import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import work_data from '../data/work_data';
import film_data from '../data/film_data';
import music_data from '../data/music_data';
import about_data from '../data/about_data';

import HomeGrid from '../components/HomeGrid';
import ProgramList from '../components/ProgramList';
import Footer from '../components/Footer';
import ProgramListCards from '../components/ProgramListCards';
import RolesContainer from '../components/RolesContainer';

function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
       }, []);

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

  return (
    <main>
        <HomeGrid/>
        {/* <ProgramList/> */}
        <ProgramListCards 
            title={'SUITE I: STORIES OF TECHNOLOGY'}
            id={'suite-1'}
            list={work_data}
        />
        <ProgramListCards 
            title={'SUITE II: STORIES OF MOTION PICTURE'}
            id={'suite-2'}
            list={film_data}
        />
        <ProgramListCards 
            title={'SUITE III: STORIES OF MUSIC'}
            id={'suite-3'}
            list={music_data}
        />
        <ProgramListCards 
            title={'ENCORE: STORIES OF ME'}
            id={'suite-4'}
            list={about_data}
        />
        <Footer/>
    </main>

  )
}

export default Home