import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#5656] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black'>Contact</p>
                <p className='py-4 text-xl font-semibold'>Submit the form below or email me at: psvincent12@gmail.com</p>
            </div>
            <input className='p-2' type='text' placeholder='Name' name='name'></input>
            <input className='my-4 p-2' type='email' placeholder='Email' name='email'></input>
            <textarea className='p-2' name='message' cols='30' rows='10' placeholder='Message'></textarea>
            <button className='font-bold border-2 border-black hover:bg-purple-800 hover:border-purple-800 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact