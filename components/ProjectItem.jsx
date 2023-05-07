import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, description, bgImg, projectUrl}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full rounded-md group p-4 shadow-md bg-white hover:bg-transparent hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in duration-300'>
            <Image src={bgImg} className='rounded-md group-hover:opacity-10' alt='project screenshot' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center'>
                <h3>{title}</h3>
                <p className='hidden lg:block'>{description}</p>
                <Link href={projectUrl} className='inline-block bg-white rounded-md p-2 shadow-md shadow-slate-400 text-black hover:shadow-slate-700'>Take a Tour</Link>
            </div>
        </div>
    )
}

export default ProjectItem