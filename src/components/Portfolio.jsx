import React from 'react';
import codingQuiz from '../assets/coding-quiz.png';
import guessThatMovie from '../assets/guess-that-movie2.png';
import noteTaker from '../assets/note-taker.png';
import passwordGenerator from '../assets/password-generator.png';
import techub from '../assets/techub.png';
import workDayScheduler from '../assets/work-day-scheduler.png';

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full md:h-screen text-black bg-[#5656]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-black'>Portfolio</p>
                <p className='py-6'>Check out some of my recent work.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{ backgroundImage: `url(${codingQuiz})`}} className='shadow-lg shadow-[#040c20] group container rounded-md flex justify-center items-center mx-auto work-div'>
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Coding Quiz
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://psvincent.github.io/javascript-coding-quiz/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                            </a>
                            <a href="https://github.com/psvincent/javascript-coding-quiz">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${guessThatMovie})`}} className='shadow-lg shadow-[#040c20] group container rounded-md flex justify-center items-center mx-auto work-div'>
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Guess That Movie
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${noteTaker})`}} className='shadow-lg shadow-[#040c20] group container rounded-md flex justify-center items-center mx-auto work-div'>
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Note Taker
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://desolate-bastion-62680.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                            </a>
                            <a href="https://github.com/psvincent/note-taker">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${passwordGenerator})`}} className='shadow-lg shadow-[#040c20] group container rounded-md flex justify-center items-center mx-auto work-div'>
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Password Generator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://psvincent.github.io/password-generator/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                            </a>
                            <a href="https://github.com/psvincent/password-generator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${techub})`}} className='shadow-lg shadow-[#040c20] group container rounded-md flex justify-center items-center mx-auto work-div'>
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            TecHub
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://cryptic-anchorage-74709.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                            </a>
                            <a href="https://github.com/psvincent/tecHub2">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${workDayScheduler})`}} className='shadow-lg shadow-[#040c20] group container rounded-md flex justify-center items-center mx-auto work-div'>
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Work Day Scheduler
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://psvincent.github.io/work-day-scheduler/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live App</button>
                            </a>
                            <a href="https://github.com/psvincent/work-day-scheduler">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Portfolio