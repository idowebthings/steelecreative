import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full p-2'>
        <div className='max-width-[1240px] w-full h-full mx-auto flex flex-col items-start'>
            <h2>Skills</h2>
            <p>These are some of the tools in my box.</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 w-full'>

                <div className='bg-white p-4 shadow-md rounded-md hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-3 gap-4 items-center justify-center'>
                        <div className='m-auto text-center'>
                            <Image src='/../public/images/skills/html5.png' alt='HTML5' width='64' height='64' />
                        </div>
                        <div className='col-span-2'>
                            <p className='uppercase font-bold'>HTML</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-4 shadow-md rounded-md hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-3 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                            <Image src='/../public/images/skills/css3.png' alt='CSS3' width='64' height='64' />
                        </div>
                        <div className='col-span-2'>
                            <p className='uppercase font-bold'>CSS</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-4 shadow-md rounded-md hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-3 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                            <Image src='/../public/images/skills/javascript.png' alt='JavaScript' width='64' height='64' />
                        </div>
                        <div className='col-span-2'>
                            <p className='uppercase font-bold'>JavaScript</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-4 shadow-md rounded-md hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-3 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                            <Image src='/../public/images/skills/accessibility.png' alt='Web Accessibility' width='64' height='64' />
                        </div>
                        <div className='col-span-2'>
                            <p className='uppercase font-bold'>A11y</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-4 shadow-md rounded-md hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-3 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                            <Image src='/../public/images/skills/wordpress-blue.png' alt='Wordpress' width='64' height='64' />
                        </div>
                        <div className='col-span-2'>
                            <p className='uppercase font-bold'>Wordpress</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-4 shadow-md rounded-md hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-3 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                            <Image src='/../public/images/skills/nextjs.png' alt='Next.js' width='64' height='64' />
                        </div>
                        <div className='col-span-2'>
                            <p className='uppercase font-bold'>Next.js</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-4 shadow-md rounded-md hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-3 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                            <Image src='/../public/images/skills/sass.png' alt='SASS' width='64' height='64' />
                        </div>
                        <div className='col-span-2'>
                            <p className='uppercase font-bold'>SASS</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-4 shadow-md rounded-md hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-3 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                            <Image src='/../public/images/skills/tailwind.png' alt='Tailwind' width='64' height='64' />
                        </div>
                        <div className='col-span-2'>
                            <p className='uppercase font-bold'>Tailwind</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills