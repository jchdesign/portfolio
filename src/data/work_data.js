import Figure1 from '../assets/Figure1.jpg';
import Chirality from '../assets/Reflection/Chirality.png';
import MultiSimCover from '../assets/MultiSim_SimManager/Cover.png';
import NearbyFlowFinal from '../assets/Nearby/FlowFinal.png';
import Overview from '../assets/SFParksRec/Overview.png';

const work_data = [
    {
        key: 1,
        title: 'MULTIPLE SIMULATIONS AND SIMULATION MANAGER WORKFLOW REDESIGN',
        listing: 'MULTISIM + SIM MANAGER REDESIGN',
        role: ['JEFF CHANG', 'UX DESIGN INTERN'],
        credit: 'MATHWORKS', // For the program listing
        arranged: true,
        duration: 'MAY 2024 - AUG 2024',
        collab: true,
        collab_credits: 'Mathworks', // For the collaboration header
        collaborators: [
            {
                name: 'RAMYA ADUSUMILLI',
                role: 'UX MANAGER'
            },
            {
                name: 'VIPRESH GANGWAL',
                role: 'UX MANAGER'
            },
            {
                name: 'RAHUL KUMAR',
                role: 'PRODUCT MANAGER'
            },
            {
                name: 'MAHARSHI PATEL',
                role: 'DEVELOPER'
            },
            {
                name: 'Guy Rouleau',
                role: 'Customer-Facing Engineer'
            },
            {
                name: 'Reid Spence',
                role: 'Customer-Facing Engineer'
            }
        ],
        img: MultiSimCover,
        overview: 'Leading a redesign of the workflow between Simulink applications Multiple Simulations and Simulation Manager.',
        link: '/MultiSim_SimManager'
    },
    {
        key: 2,
        title: 'Nearby: Redesigned',
        listing: 'Nearby: Redesigned',
        role: ['JEFF CHANG', 'UI/UX Design Intern'],
        credit: 'Kardder',
        arranged: true,
        duration: 'June 2022 - Sept 2022',
        collab: true,
        collab_credits: 'Kardder',
        collaborators: [
            {
                name: 'Mac Xing',
                role: 'CTO'
            },
            {
                name: 'Trevor Remeyer',
                role: 'UI/UX Design Intern'
            },
            {
                name: 'Shimei Guan',
                role: 'UI/UX Design Intern'
            }
        ],
        img: NearbyFlowFinal,
        overview: "Redesigning Nearby - Kardder's holy grail feature - to better present Nearby as the core feature of Kardder.",
        arranged: true,
        link: '/Nearby'
    },
    {
        key: 3,
        title: 'WHAT DO WE SEE IN A REFLECTION?: Seeing Chirality Correlates with Aesthetic Perception',
        listing: 'WHAT DO WE SEE IN A REFLECTION?',
        role: ['JEFF CHANG', 'Research Assistant'],
        credit: 'UCLA CVL Lab',
        arranged: true,
        duration: 'SEPT 2022 - MAR 2023',
        collab: true,
        collab_credits: 'The UCLA CVL Lab',
        collaborators: [
            {
                name: 'Yi-Chia Chen',
                role: 'Lead Researcher'
            },
            {
                name: 'Hongjing Lu',
                role: 'Principal Investigator'
            }
        ],
        img: Chirality,
        overview: 'A psychological research study investigating the relationship between our perception of mirrored images and our aesthetic experience, in collaboration with Dr. Yi-Chia Chen and Dr. Hongjing Lu from the UCLA Computational Vision and Learning Lab',
        link: '/Reflection'
    },
    {
        key: 4,
        title: 'SF Parks & Rec Picnic Reservation Redesign',
        listing: 'SF PARKS & REC REDESIGN',
        role: ['JEFF CHANG', 'UX Designer'],
        credit: 'SF Parks & Rec',
        arranged: true,
        duration: 'Sept 2023 - Oct 2023',
        collab: false,
        collab_credits: 'Product Design Studio Project',
        collaborators: [

        ],
        img: Overview,
        overview: 'Redesigning the online reservation flow in the SF Parks and Recreation website - streamlining, organizing, and reimagining critical features of the reservation process.',
        link: '/SFParksRec',
    },
    {
        key: 5,
        title: 'Interlude',
        listing: 'Interlude',
        role: ['JEFF CHANG', 'Product Manager, Designer, Enginner'],
        credit: 'Chang, Guo, Johal, Wei',
        arranged: false,
        collab: false,
        collab_credits: 'UC Berkeley School of Information',
        duration: 'Oct 2024 - Present',
        collaborators: [
            {
                name: 'Anita Guo',
                role: 'UX Designer'
            },
            {
                name: 'TJ Johal',
                role: 'Data Scientist'
            },
            {
                name: 'Karen Wdi',
                role: 'UX Designer'
            },
            {
                name: 'Kay Ashaolu',
                role: 'Advisor'
            }
        ],
        img: Figure1,
        overview: 'Overview here',
        link: '/Interlude'
    },
]

export default work_data