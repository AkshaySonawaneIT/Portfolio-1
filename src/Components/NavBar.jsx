import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

function NavBar() {

    const [navIcon, setNavIcon] = useState(false);

    const changeNavIcon = () => {
        const icon = !navIcon;
        setNavIcon(icon);
        console.log(navIcon)
    }

    const navLinks = [
        {
            id: 1,
            linkName: 'home'
        },
        {
            id: 2,
            linkName: 'about'
        },
        {
            id: 3,
            linkName: 'portfolio'
        },
        {
            id: 4,
            linkName: 'experience'
        },
        {
            id: 5,
            linkName: 'contact'
        }
    ]

    return (
        <div className='flex bg-slate-900 justify-between items-center w-full h-20 text-white fixed px-4'>
            <div>
                <h1 className='font-signature text-5xl'>Akshay</h1>
            </div>

            <ul className='hidden md:flex'>
                {navLinks.map(link => (
                    <li key={link.id} className='px-4 cursor-pointer font-medium capitalize text-gray-400 hover:scale-110 duration-200'>
                        <Link to={link.linkName} smooth duration={500}>{link.linkName}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={changeNavIcon} className='cursor-pointer md:hidden pr-4 z-10 text-gray-400'>
                {navIcon ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {navIcon && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900 to-gray-400 text-gray-400'>
                {navLinks.map(link => (
                    <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400 hover:scale-110 duration-200'>
                        <Link onClick={changeNavIcon} to={link.linkName} smooth duration={500}>{link.linkName}</Link>
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default NavBar
