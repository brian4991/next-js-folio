import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

function Navbar() {
  const [nav, setNav] = useState(false)
  const[shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(()=>{
    const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    }
    window.addEventListener('scroll', handleShadow);
  },[]);

  return (
    <div id='navbar' className= {shadow ? 'fixed w-full bg-white h-20 shadow-xl z-[100]' : 'fixed w-full bg-white h-20 z[100]'}>
      <div className='flex justify-between items-center w-full h-full px-20 2xl:px-16'>
        <Image src='/../public/assets/logo.jpg' alt='/' width='80' height='50' />
        <div>
          <ul className='hidden md:flex '>
            {menuItems.map(({ label, href }) => (
              <Link href={href} key={label}>
                <li className='ml-10 text-sm uppercase hover:border-p'>{label}</li>
              </Link>
            ))}
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src='/../public/assets/logo.jpg' alt='/' width='87' height='35' />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer '>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s build something together</p>
            </div>
          </div>
          <div className='py-4 flex-col'>
            <ul className='uppercase'>
              {menuItems.map(({ label, href }) => (
                <Link href={href} key={label}>
                  <li className='py-4 text-sm'>{label}</li>
                </Link>
              ))}
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[5651e5]'>Let&apos;s Connect</p>
            </div>
            <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <SiGmail />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <SiGmail />
                </div>
                    </div>
                        
                    </div>  
            </div>
        </div>
    </div>
  )
}

export default Navbar