import React from 'react'
import Photo from '../assets/my-photo.png'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#5656]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-purple-800 font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-black'>Philip Vincent</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#565656]'>I am a Full Stack Web Developer.</h2>
            <div className='flex'>
            <img className="shadow rounded-full max-w-full h-auto align-middle border-none mt-3" src={Photo} alt="Me" style={{ width: '150px', height: '150px' }} />
            <Link to="portfolio" smooth={true} duration={500}>
            <button className='text-black group font-bold border-4 border-black px-5 py-3 my-14 mx-10 flex items-center align-baseline max-h-[50px] hover:bg-purple-800 hover:border-purple-800'>View Work 
            <span className='group-hover:rotate-90 duration-500'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
            </Link>
            </div>
        </div>

    </div>
  )
}

export default Home