import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, [])

    return (
        <div id='navbar' className={
            shadow
                ? 'fixed w-full p-4 z-[100] bg-[#b2b8e5] shadow-xl ease-in-out duration-300'
                : 'fixed w-full p-4 z-[100] bg-[#b2b8e5] '
        }>
            <div className='flex justify-between items-center w-full h-24 px-2 2xl:px-16'>
                <Link href='/'>
                    <Image src='/../public/images/sc-logo.png' alt='Steele Creative' width='200' height='77' />
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='/portfolio'>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href='/credentials'>
                                Credentials
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div onClick={handleNav} className='md:hidden cursor-pointer p-2 hover:bg-black/20'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[90%] sm:w-[60%] md:w-[45%] h-screen bg-stone-200 p-6 ease-in duration-300' : 'fixed left-[-100%] top-0 p-6 ease-in duration-300'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/' className='md:hidden '>
                                <Image src='/../public/images/sc-logo.png' alt='Steele Creative' width='200' height='77' />
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-sm shadow-stone-400 hover:shadow-stone-700 p-3 cursor-pointer ease-in duration-300'>
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link href='/about'>
                                <li className='py-4 text-sm hover:border-b'>About</li>
                            </Link>
                            <Link href='/portfolio'>
                                <li className='py-4 text-sm hover:border-b'>Portfolio</li>
                            </Link>
                            <Link href='/credentials'>
                                <li className='py-4 text-sm hover:border-b'>Credentials</li>
                            </Link>
                            <Link href='/contact'>
                                <li className='py-4 text-sm hover:border-b'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-20'>
                            <p className='uppercase tracking-widest'>Let's Network</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-sm shadow-stone-400 hover:shadow-stone-700 p-3 cursor-pointer ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-sm shadow-stone-400 hover:shadow-stone-700 p-3 cursor-pointer ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-sm shadow-stone-400 hover:shadow-stone-700 p-3 cursor-pointer ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-sm shadow-stone-400 hover:shadow-stone-700 p-3 cursor-pointer ease-in duration-300'>
                                    <BsFillPersonFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar