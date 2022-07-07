import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [ nav, setNav ] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[75px] flex justify-between items-center px-4 bg-purple-800 text-black border-b-4 border-black">

                <ul className="hidden md:flex font-bold">
                    <li>
                    <Link to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                    </li>
                    <li>
                    <Link to="about" smooth={true} duration={500}>
                    About
                    </Link>
                    </li>
                    <li>
                    <Link to="portfolio" smooth={true} duration={500}>
                    Portfolio
                    </Link>
                    </li>
                    <li>
                    <Link to="contact" smooth={true} duration={500}>
                    Contact
                    </Link>
                    </li>
                    <a href='https://docs.google.com/document/d/155PyHAU7XhrwfreBiScGR2rsXT3acZvm7J7KDNJl4Uw/edit?usp=sharing'>
                    <li>Resume</li>
                    </a>
                </ul>
            

            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes /> }
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#800080] flex flex-col justify-center items-center'}>
                <li className='py-5 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                    </li>
                <li className='py-5 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                    </Link>
                    </li>
                <li className='py-5 text-4xl'>
                    <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>
                    Portfolio
                    </Link>
                    </li>
                <li className='py-5 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                    </Link>
                    </li>
                    <a href='https://docs.google.com/document/d/155PyHAU7XhrwfreBiScGR2rsXT3acZvm7J7KDNJl4Uw/edit?usp=sharing'>
                <li className='py-5 text-4xl'>Resume</li>
                </a>
            </ul>
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-500 bg-[#ADD8E6]'>
                        <a className='flex justify-between items-center w-full font-bold'
                        href="https://www.linkedin.com/in/philip-vincentt/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-500 bg-[#565656]'>
                        <a className='flex justify-between items-center w-full font-bold'
                        href="https://github.com/psvincent">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar