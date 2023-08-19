import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import {Link} from 'react-scroll';

function Home() {
    return (
        <div name="home" className='h-auto md:h-screen w-full bg-gradient-to-b  from-slate-900 via-slate-800 to-slate-600'>
            <div className='max-w-screen-lg mx-auto text-white flex flex-col items-center justify-center h-full px-4 pt-32 md:pt-0 md:flex-row'>
                <div className='flex flex-col justify-center h-full md:w-2/4'>
                    <h2 className='text-4xl md:text-6xl font-bold'>I'm a Web Developer</h2>
                    <p className='text-gray-300 py-4 max-w-md text-md'>I am a Web Developer with 2 years and 8 months of experience in Frontend development using technologies like JavaScript, React JS, Redux, Bootstrap, etc. I am proficient in translating designs & wireframes into high- quality code and maintaining frontend performance via
                        debugging the same to bolster overall performance</p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group flex items-center w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio <span className='group-hover:rotate-90 duration-500'><MdKeyboardArrowRight size={25}/></span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img className='rounded-2xl mb-2 mx-auto w-2/3 md:w-full h-64' src="https://tse1.mm.bing.net/th?id=OIP.7wHBlskSM4tKYOW3p3R8dQHaEy&pid=Api&P=0&h=180" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
