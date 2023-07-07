import { Square_Peg } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Main() {
    return (
        <div id='main' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s Build Something Together</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I&apos;m <span className='text-blue-800'>Brian</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className='py-6 text-xl text-gray-600 max-w-[70%] m-auto'>Welcome to my portfolio website, where I showcase my journey as a full-stack developer through my side projects. Join me on this exciting adventure as I bring my passion for coding to life, one project at a time. Let&apos;s create something awesome together!</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>

                            <Link href='/#contact'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                            </Link>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href="https://github.com/brian4991" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href="https://www.linkedin.com/in/brian-piorkowski-00b47693/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main