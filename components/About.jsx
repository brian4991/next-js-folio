import React from 'react'
import profileImg from '../public/assets/profile.png';
import Image from 'next/image';

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-2xl px-2 tracking-widest text-blue-600'>About</p>
            <h2 className='py-4 px-2'>Who I Am</h2>
            <p className='py-4 px-2 text-xl'>As a self-taught full-stack developer, I&apos;ve been writing code for several years now. I started by using Python as a data scientist consultant and then built trading scripts for cryptocurrencies, and since then, I&apos;ve expanded my skills to include Node.js, React.js, HTML, and CSS.</p>
            <p className='py-4 px-2 text-xl'> With a focus on building dynamic and responsive applications, I&apos;m always looking for new and innovative ways to bring ideas to life. Whether I&apos;m working on the frontend or the backend, I&apos;m committed to delivering high-quality code that meets the needs of users and stakeholders alike. </p>
            <p className='py-4 px-2 underline cursor-pointer'>Check out some of my latest projects</p>
            </div>
           
            <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <Image src={profileImg} className='rounded-xl' alt='/' />
            </div>

        </div>
    </div>
  )
}

export default About