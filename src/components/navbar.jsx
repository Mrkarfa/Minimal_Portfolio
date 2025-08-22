import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#0B1220]/80 backdrop-blur">
        <div className="container-max px-6 md:px-8">
            <div className="flex h-16 items-center justify-between">
                <a href="#home" className='text-white text-xl md:text-2xl font-extrabold tracking-tight'>
                    <span className='text-amber-400'>//</span>SK
                </a>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-white text-sm font-medium">
                        <li><a href="#resume" className='hover:text-amber-400 transition-colors'>RESUME</a></li>
                        <li><a href="#contact" className='hover:text-amber-400 transition-colors'>CONTACT</a></li>
                        <li className='h-5 w-px bg-white/20' />
                        <li className='flex items-center gap-4 text-lg'>
                            <a aria-label="GitHub" href="#" className='hover:text-amber-400 transition-colors'><FaGithub /></a>
                            <a aria-label="LinkedIn" href="#" className='hover:text-amber-400 transition-colors'><FaLinkedin /></a>
                            <a aria-label="Twitter" href="#" className='hover:text-amber-400 transition-colors'><FaTwitter /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar