import Skills from '@/components/Skills'
import Link from 'next/link'
import React from 'react'

const credentials = () => {
    return (
        <div className='pt-20'>
            <div className='flex lg:flex-row flex-wrap w-full mb-16'>
                <div className='w-full lg:w-[75%] h-full lg:text-left'>
                    <h2>Experience</h2>
                    <p>I have been fortunate to work with the following organizations.</p>
                    <ul className='list-disc list-inside columns-2 gap-16'>
                        <li>Allegis Group</li>
                        <li>National Aeronautics & Space Administration (NASA)</li>
                        <li>Temple University</li>
                        <li>University of Maryland</li>
                        <li>National Resources Defence Council (NRDC)</li>
                        <li>Education Trust</li>
                    </ul>
                </div>
                <div className='w-full lg:w-[25%] h-full lg:text-left'>
                    <div className='w-full border border-black rounded-md p-8 text-center'>
                        <h3>Dylan&apos;s Resume</h3>
                        <div className='w-full flex items-center justify-center py-8'>
                        <Link className='inline-block cursor-pointer bg-white rounded-md p-2 shadow-md shadow-slate-400 text-black hover:shadow-slate-700' href='../public/resume_dylan-steele.pdf'>Download PDF</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='mb-16'>
                <h2>Education</h2>
                <ul className='list-disc list-inside'>
                    <li><strong>University of Maryland Global Campus 2020 - 2023</strong>
                        <ul className='list-disc list-inside ml-4 mb-4'>
                            <li>Bachelor of Science, Digital Media & Web Technology, Alpha Sigma Lambda Honor Society</li>
                            <li>Coursework: User Experience Design, Interaction Design, Game Development, Advanced Javascript, Technical Writing, Illustration Graphics, Image Editing</li>
                        </ul>
                    </li>
                    <li><strong>Anne Arundel Community College 2003 - 2005</strong>
                        <ul className='list-disc list-inside ml-4 mb-4'>
                            <li>Coursework: Principles of Program Design, Object Oriented Programming, HTML, CSS, Javascript, Intro to Java, PHP Scripting</li>
                        </ul>
                    </li>
                    <li><strong>Louisiana Tech University 1992 - 1994</strong>
                        <ul className='list-disc list-inside ml-4 mb-4'>
                            <li>Coursework: Principles of Design, Drawing</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Skills />
        </div>
    )
}

export default credentials