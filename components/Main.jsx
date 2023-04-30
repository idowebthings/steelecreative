import React from 'react';

const Main = () => {
    return (
        <div id='main' className='w-full p-2 text-center'>
            <div className='max-width-[1240px] w-full h-full pt-12 mx-auto flex justify-center items-center'>
                <div className='flex lg:flex-row flex-wrap w-full'>
                    <div className='w-full lg:w-[60%] h-full lg:text-left pt-8 pr-8'>
                        <h1>Development, Design, & Consulting</h1>
                        <h2 className='tracking-widest'>Creative <span className='text-[#c13039]'>Problem Solving</span></h2>
                        <p>Accessible development and design for websites, apps, games, and more.</p>
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