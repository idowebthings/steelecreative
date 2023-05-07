import React from 'react';

const Main = () => {
    return (
        <div id='main' className='w-[100vw] p-2 text-center bg-[url("/images/web-design-2038872_1920.jpg")] bg-cover -mx-8 lg:-mx-24'>
            <div className='h-full pt-12 mx-auto flex justify-center items-center lg:pb-8'>
                <div className='flex lg:flex-row flex-wrap w-full'>
                    <div className='w-full lg:w-[60%] h-full lg:text-left lg:px-16'>
                        <h1 className=''><span className='bg-white leading-loose whitespace-pre-wrap px-2 pb-2'>Development, Design, & Consulting</span></h1>
                        <h2 className='tracking-widest'><span className='bg-white leading-loose px-2 pb-2'>Creative <span className='text-[#c13039]'>Problem Solving</span></span></h2>
                        <p className='font-bold'><span className='bg-white leading-loose whitespace-pre-wrap px-2 pb-2'>Accessible development and design for websites, apps, games, and more.</span></p>
                    </div>
                    <div className='w-full lg:w-[40%] h-full p-4 lg:p-8 lg:-m-8'>
                        <div className='w-full bg-[#2547bc] shadow-sm shadow-gray-400 rounded-md py-4 px-8'>
                            <h2 class="text-white mb-5">Sign Up for Updates</h2>
                            <div class="relative mb-4">
                                <label for="full-name" class="leading-7 text-left text-white text-sm font-bold">Full Name</label>
                                <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-left text-white text-sm font-bold">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className='bg-white shadow-gray-900 text-[#152791] border-2 border-[#152791]'>Sign me up!</button>
                            <p class="text-white text-xs mt-3">I&apos;ll let you know about new projects, presentations, and events.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main