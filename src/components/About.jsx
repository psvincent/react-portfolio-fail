import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#5656] text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>Hi, I'm Philip and these are some things about me.</p>
                    </div>
                    <div className='font-semibold'>
                        <p>I am 19 years old and recently just finished a Full Stack Web Development Boot Camp. I am enrolled in college at John Wood Community College where I am studying computer science.
                            I plan to get my bachelors in computer science. I am proficent with HTML, CSS, JavaScript, ReactJS, ExpressJS, NodeJS, MongoDB, MYSQL, Git, and I am currently learning AWS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About