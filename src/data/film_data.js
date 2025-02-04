import DLPoster from '../assets/DirtyLaundry/DLPoster.png';
import OHPoster from '../assets/OniriaHill/OHPoster.png'

const film_data = [
    {
        key: 1,
        title: 'Oniria Hill',
        listing: 'Oniria Hill',
        role: ['JEFF CHANG', 'Composer'],
        credit: 'MARTÍNEZ', // For the program listing
        arranged: true,
        duration: 'OCT 2024 - PRESENT',
        collab: true,
        collab_credits: 'CHUCHO MARTÍNEZ', // For the collaboration header
        collaborators: [
            {
                name: 'CHUCHO MARTÍNEZ',
                role: 'Director'
            }
        ],
        img: OHPoster,
        overview: "In a score that explores the rift between memory and reality, I embrace CHUCHO MARTÍNEZ's vision of a journey through loss, grief, and hope.",
        link: '/OniriaHill'
    },
    {
        key: 2,
        title: 'Dirty Laundry',
        listing: 'Dirty Laundry',
        role: ['JEFF CHANG', 'Composer, Sound Designer, Boom Op'],
        credit: 'CAP Studios', // For the program listing
        arranged: true,
        duration: 'Sept 2024 - Dec 2024',
        collab: true,
        collab_credits: 'CAP Studios', // For the collaboration header
        collaborators: [
            {
                name: 'Gerry Ramos',
                role: 'Director'
            },
            {
                name: 'CAP Studios',
                role: 'Production Studio'
            }
        ],
        img: DLPoster,
        overview: 'With the production team at the Cinematic Arts and Production Studio, I tell the sonic story of Isa in the coming-of-age dramedy Dirty Laundry.',
        link: '/DirtyLaundry'
    },
]

export default film_data