import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsPersonLinesFill } from 'react-icons/bs';


function SocialLinks() {

    const soacialLinks = [
        {
            id: 1,
            name: "LinkedIn",
            icon: <FaLinkedin size={30} />,
            href: 'https://www.linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            name: "Mail",
            icon: <FiMail size={30} />,
            href: 'mailto:akshaysonawane1958@gmail.com'
        },
        {
            id: 3,
            name: "Github",
            icon: <FaGithub size={30} />,
            href: 'https://www.linkedin.com'
        },
        {
            id: 4,
            name: "LinkedIn",
            icon: <BsPersonLinesFill size={30} />,
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {soacialLinks.map(link => (
                    <li key={link.id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 ${link.style}`}>
                        <a className='flex justify-between items-center w-full text-white' href={link.href} download={link.download} target='_blank' rel="noreferrer">
                            {link.name} {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks
