import React from 'react'

import HTML from '../assests/projects/HTML.png';
import CSS from '../assests/projects/CSS.png';
import JavaScript from '../assests/projects/JavaScript.png';
import react from '../assests/projects/react.png';
import GitHub from '../assests/projects/GitHub.png';
import tailwind from '../assests/projects/tailwind.png';
import nodejs from '../assests/projects/nodejs.png';
import sql from '../assests/projects/sql.png';



const Skills = () => {
  return (
    <div name ='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>

       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
             <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
             </div>

             <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={HTML} alt='Html icon' />
                    <p className='py-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={CSS} alt='Html icon' />
                    <p className='py-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={JavaScript} alt='Html icon' />
                    <p className='py-4'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={react} alt='Html icon' />
                    <p className='py-4'>REACT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={GitHub} alt='Html icon' />
                    <p className='py-4'>GITHUB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={tailwind} alt='Html icon' />
                    <p className='py-12'>TAILWIND</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={nodejs} alt='Html icon' />
                    <p className='py-4'>NODE JS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={sql} alt='Html icon' />
                    <p className='py-4'>MYSQL</p>
                </div>

             </div>
       </div>
    </div>
  )
}

export default Skills