import DLPoster from '../assets/DirtyLaundry/DLPoster.png';
import OHPoster from '../assets/OniriaHill/OHPoster.png'

const film_data = [
    {
        key: 1,
        title: 'DIRTY LAUNDRY',
        listing: 'DIRTY LAUNDRY',
        role: ['JEFF CHANG', 'Composer, Sound Designer, Boom Op'],
        credit: 'CAP STUDIOS', // For the program listing
        arranged: true,
        duration: 'SEPT 2024 - DEC 2024',
        collab: true,
        collab_credits: 'CAP STUDIOS', // For the collaboration header
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
        miniOverview: 'Telling the sonic story of Isa in the coming-of-age dramedy Dirty Laundry.', 
        overview: 'With the production team at the Cinematic Arts and Production Studio, I tell the sonic story of Isa in the coming-of-age dramedy Dirty Laundry.',
        link: '/DirtyLaundry'
    },
    {
        key: 2,
        title: 'ONIRIA HILL',
        listing: 'ONIRIA HILL',
        role: ['JEFF CHANG', 'COMPOSER'],
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
        miniOverview: 'Loss, grief, and hope in a score exploring the rift between memory and reality.',
        overview: "In a score that explores the rift between memory and reality, I embrace Chucho Martínez's vision of a journey through loss, grief, and hope.",
        link: '/OniriaHill'
    }
]

export default film_data