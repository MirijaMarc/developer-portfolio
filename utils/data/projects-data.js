import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Client Project Tracking',
        description: "This is a project aimed at facilitating communication between the development team and the client at Kante Company. For this project, I used Angular for the frontend, Spring Boot and Django for the backend, and MongoDB and Firebase for data storage.",
        tools: ['Angular', 'MongoDB', 'OpenAI API', 'Spring Boot', 'Django', 'Java', 'Tailwind CSS', 'Flowbite', 'Firebase'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Aora (Mobile Application)',
        description: 'This is a personal project I developed to allow users to listen to music, similar to Spotify. I used React Native for the frontend and Firebase as the sole backend.',
        tools: ['React Native', 'Tailwind CSS', "Firebase", "TypeScript", "SQLite"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Car E-Commerce Platform',
        description: 'My team and I designed a web and mobile application for selling used cars. For the web application, we chose Spring Boot and React JS, while for the mobile app, we chose Ionic. For data storage, we selected Postgres and MongoDB. We had one month to develop the application and then deploy it on the cloud.',
        tools: ['Spring Boot', 'React JS', 'MongoDB', 'Potsgres', 'Firebase', 'Railway', 'Ionic', 'Tailwind CSS', 'JWT'],
        code: '',
        role: 'Backend Developer',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },