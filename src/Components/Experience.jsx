import React from 'react';
import html from '../Assets/html.jpg';
import css from '../Assets/css.jpg';
import javascript from '../Assets/javascript.jpg';
import reactImage from '../Assets/react.jpg';
import tailwind from '../Assets/tailwind.jpg';
import firebase from '../Assets/firebase.jpg';
import github from '../Assets/github.jpg';
import mysql from '../Assets/mysql.jpg';
import mongodb from '../Assets/mongodb.jpg';

function Experience() {

    const techStack = [
        {
            id: 1,
            name: 'HTML',
            src: html,
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            name: 'CSS',
            src: css,
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            name: 'Javascript',
            src: javascript,
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            name: 'React',
            src: reactImage,
            style: 'shadow-indigo-700'
        },
        {
            id: 5,
            name: 'MySql',
            src: mysql,
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            name: 'MongoDB',
            src: mongodb,
            style: 'shadow-green-500'
        },
        {
            id: 7,
            name: 'Tailwind',
            src: tailwind,
            style: 'shadow-sky-500'
        },
        {
            id: 8,
            name: 'GitHub',
            src: github,
            style: 'shadow-gray-200'
        },
        {
            id: 9,
            name: 'Firebase',
            src: firebase,
            style: 'shadow-orange-500'
        }
    ];

    return (
        <div name='experience' className='h-screen w-full bg-gradient-to-b  from-slate-900 via-slate-800 to-slate-600'>
            <div className='max-w-screen-lg mx-auto text-white flex flex-col text-center justify-center w-full h-full px-4'>
                <div>
                    <p className='text-4xl font-bold p-2 inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with...</p>
                </div>

                <div className='w-full grid grid-cols-2 md:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techStack.map((tech) => (
                        <div key={tech.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}>
                            <img className='w-32 h-32 mx-auto' src={tech.src} alt="" />
                            <p className='mt-4'>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
