import React from 'react';
import netflixClone from '../Assets/Netflix-Clone.png';
import youtubeClone from '../Assets/Youtube-Clone.png';
import newsApp from '../Assets/News-Monkey-App.png';
import foodApp from '../Assets/Foodies-Hub-App.png';

function Portfolio() {

    const portfolioArray = [
        {
            id: 1,
            projectName: "Netflix Clone",
            projectImage: netflixClone,
            url: 'https://netflix-clone-c6182.web.app/',
            codeUrl: 'https://github.com/AkshaySonawaneIT/React-Netflix-Clone'
        },
        {
            id: 2,
            projectName: "Youtube Clone",
            projectImage: youtubeClone,
            url: '',
            codeUrl: 'https://github.com/AkshaySonawaneIT/Youtube-Clone'
        },
        {
            id: 3,
            projectName: "News App",
            projectImage: newsApp,
            url: '',
            codeUrl: 'https://github.com/AkshaySonawaneIT/News-App'
        },
        {
            id: 4,
            projectName: "Food Recipe App",
            projectImage: foodApp,
            url: '',
            codeUrl: 'https://github.com/AkshaySonawaneIT/FoodiesHub_Static'
        }
    ]

    return (
        <div name='portfolio' className='sm:h-auto md:h-screen w-full bg-gradient-to-b  from-slate-900 via-slate-800 to-slate-600'>
            <div className='max-w-screen-lg mx-auto text-white flex flex-col justify-center text-center w-full h-full px-4'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolioArray.map((project) => (
                        <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img className='rounded-md duration-300 hover:scale-105' src={project.projectImage} alt="" />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'><a href={project.url} target='_blank' rel="noreferrer">Demo</a></button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'><a href={project.codeUrl} target='_blank' rel="noreferrer">Code</a></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Portfolio
