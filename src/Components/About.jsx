import React from 'react'

function About() {
    return (
        <div name='about' className='sm:h-auto md:h-screen w-full bg-gradient-to-b  from-slate-900 via-slate-800 to-slate-600'>
            <div className='max-w-screen-lg mx-auto text-white flex flex-col text-center justify-center w-full h-full px-4'>
                <div className='pb-4 md:pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-md md:text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad sit id optio? Libero beatae, ea error labore magnam voluptatem qui! Magni, maiores quasi! Iure eligendi quisquam amet temporibus magnam eos consectetur aspernatur unde? Enim, consequuntur accusantium. Ut veniam, sit modi, iusto, provident incidunt in corrupti recusandae optio nemo voluptas!</p>
                <br />
                <p className='text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in, nihil quidem voluptas amet, totam, officia exercitationem deleniti eius impedit accusamus provident vitae repellat sunt. Sit tempora officia hic ea, facilis expedita distinctio perspiciatis suscipit minus quas autem pariatur ducimus laborum repudiandae excepturi a nisi maxime praesentium illum blanditiis? Alias.</p>
            </div>
        </div>
    )
}

export default About
