import React from 'react'

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600'>
            <div className='text-white flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me.</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="Getformio link" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name='name' placeholder='Enter your name'/>
                        <input className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name='email' placeholder='Enter your email'/>
                        <textarea className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' name='message' rows="10" placeholder='Enter your message'/>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-500'>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
