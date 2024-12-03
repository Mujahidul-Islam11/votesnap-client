import React from 'react';
import { NavLink } from 'react-router-dom';

const NewsLetter = () => {
    return (
        <div className='w-full border-t py-14'>
            <div className='flex flex-col md:flex-row gap-6 md:justify-between items-center h-56 md:h-72 max-w-7xl mx-auto md:px-12'>
            <div className='text-center'>
                <h3 className='text-4xl font-extralight mb-2 text-gray-600'>Sign up now</h3>
                <p className='text-[22px] text-gray-500 font-extralight'>Free unlimited surveys, <br /> questions and responses.</p>
            </div>
            <div className='mt-6 md:mt-0 flex-row flex items-center'>
                <input placeholder='Email Address' type="text" className='w-[150px] md:w-[400px] newsLetterInput outline-[#2F71FF] py-2 md:py-3 px-4 md:px-4 rounded-l-md border black'/>
                <NavLink to={"/Login"}>
                <button className='bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf] py-2 md:py-3 px-4 md:px-12 rounded-r-md '>Get Started <span className=" text-lg font-semibold">&#8594;</span></button>
                </NavLink>
            </div>
        </div>
        </div>
    );
};

export default NewsLetter;